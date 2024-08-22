import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext, { OBJECT_SEARCH, OBJECT_TYPE_POI } from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import _ from 'lodash';
import L from 'leaflet';
import { changeIconColor, createPoiIcon, DEFAULT_ICON_SIZE } from '../markers/MarkerOptions';
import 'leaflet-spin';
import PoiManager, {
    createPoiCache,
    DEFAULT_ICON_COLOR,
    DEFAULT_POI_COLOR,
    DEFAULT_POI_SHAPE,
    updatePoiCache,
} from '../../manager/PoiManager';
import 'leaflet.markercluster';
import { Alert } from '@mui/material';
import { apiPost } from '../../util/HttpApi';
import {
    FINAL_POI_ICON_NAME,
    ICON_KEY_NAME,
    POI_ICON_NAME,
    POI_NAME,
    TYPE_OSM_TAG,
    TYPE_OSM_VALUE,
} from '../../infoblock/components/wpt/WptTagsProvider';
import AddFavoriteDialog from '../../infoblock/components/favorite/AddFavoriteDialog';
import { getObjIdSearch, SEARCH_LAYER_ID, SEARCH_TYPE_CATEGORY } from './SearchLayer';
import i18n from '../../i18n';
import { clusterMarkers, createHoverMarker, createSecondaryMarker } from '../util/Clusterizer';
import styles from '../../menu/search/search.module.css';
import { useSelectedPoiMarker } from '../../util/hooks/useSelectedPoiMarker';

export async function createPoiLayer({ ctx, poiList = [], globalPoiIconCache, type = OBJECT_TYPE_POI, map, zoom }) {
    const innerCache = await createPoiCache({ poiList, poiIconCache: globalPoiIconCache });
    updatePoiCache(ctx, innerCache);

    const center = map.getCenter();
    const latitude = center.lat;
    const { mainMarkers, secondaryMarkers } = clusterMarkers({
        places: poiList,
        zoom,
        latitude,
        iconSize: DEFAULT_ICON_SIZE,
        isPoi: true,
    });

    const mainMarkersLayers = await Promise.all(
        mainMarkers?.map(async (poi) => {
            const finalIconName = PoiManager.getIconNameForPoiType({
                iconKeyName: poi.properties[ICON_KEY_NAME],
                typeOsmTag: poi.properties[TYPE_OSM_TAG],
                typeOsmValue: poi.properties[TYPE_OSM_VALUE],
                iconName: poi.properties[POI_ICON_NAME],
            });
            const icon = await getPoiIcon(poi, innerCache, finalIconName);
            const coord = poi.geometry.coordinates;
            return new L.Marker(new L.LatLng(coord[1], coord[0]), {
                ...poi.properties,
                id: getObjIdSearch(poi),
                title: poi.properties[POI_NAME],
                icon: icon,
                [FINAL_POI_ICON_NAME]: finalIconName,
            });
        })
    );

    let simpleMarkersArr = new L.FeatureGroup();

    for (const place of secondaryMarkers) {
        const circle = createSecondaryMarker(place);
        if (circle) {
            simpleMarkersArr.addLayer(circle);
        }
    }

    mainMarkersLayers.forEach((marker) => {
        createHoverMarker({
            marker,
            setSelectedId: ctx.setSelectedPoiId,
            mainStyle: true,
            text: marker.options['web_poi_name'],
            latlng: marker._latlng,
            iconSize: [DEFAULT_ICON_SIZE, DEFAULT_ICON_SIZE],
            map,
            ctx,
            pointerStyle: styles.hoverPointer,
        });
    });

    simpleMarkersArr.getLayers().forEach((marker) => {
        createHoverMarker({
            marker,
            setSelectedId: ctx.setSelectedPoiId,
            text: marker.options['web_poi_name'],
            latlng: marker._latlng,
            map,
            ctx,
            pointerStyle: styles.hoverPointer,
        });
    });

    const layers = [...mainMarkersLayers, simpleMarkersArr];

    if (layers.length) {
        return L.featureGroup(layers, {
            id: type === OBJECT_SEARCH ? SEARCH_LAYER_ID : null,
        });
    } else {
        return L.featureGroup(); // return an empty layer group if there are no layers
    }
}

export async function getPoiIcon(poi, cache, finalIconName) {
    if (finalIconName) {
        if (cache[finalIconName]) {
            const svgData = cache[finalIconName];
            let coloredSvg = changeIconColor(svgData, DEFAULT_ICON_COLOR);
            // Add the id attribute to the coloredSvg
            const poiName = poi.properties[POI_NAME];
            coloredSvg = coloredSvg.replace(
                '<svg',
                `<svg id="se-poi-marker-icon-${finalIconName}-${DEFAULT_ICON_COLOR}-${poiName}"`
            );
            const iconHtml = createPoiIcon({
                color: DEFAULT_POI_COLOR,
                background: DEFAULT_POI_SHAPE,
                svgIcon: coloredSvg,
            }).options.html;
            return L.divIcon({ html: iconHtml });
        }
    }
}

export const POI_LAYER_ID = 'poi-layer';

export default function PoiLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [prevZoom, setPrevZoom] = useState(null);
    const [prevTypesLength, setPrevTypesLength] = useState(null);
    const [zoom, setZoom] = useState(null);
    const [move, setMove] = useState(false);
    const [poiList, setPoiList] = useState({
        layer: null,
        prevLayer: null,
        listFeatures: null,
    });
    const [prevController, setPrevController] = useState(false);
    const [useLimit, setUseLimit] = useState(false);
    const [addAlert, setAddAlert] = useState(false);
    const [bbox, setBbox] = useState(null);
    const [prevCategoriesCount, setPrevCategoriesCount] = useState(null);
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [selectedPoi, setSelectedPoi] = useState(false);

    useSelectedPoiMarker(
        ctx,
        ctx.selectedPoiId?.type === POI_LAYER_ID ? poiList?.layer?.getLayers() : null,
        POI_LAYER_ID
    );

    async function getPoi(controller, showPoiCategories, bbox, savedBbox) {
        const searchData = {
            categories: showPoiCategories,
            northWest: `${bbox.getNorthWest().lat},${bbox.getNorthWest().lng}`,
            southEast: `${bbox.getSouthEast().lat},${bbox.getSouthEast().lng}`,
            savedNorthWest: savedBbox ? `${savedBbox.getNorthWest().lat},${savedBbox.getNorthWest().lng}` : null,
            savedSouthEast: savedBbox ? `${savedBbox.getSouthEast().lat},${savedBbox.getSouthEast().lng}` : null,
            prevCategoriesCount: prevCategoriesCount,
        };
        let response = await apiPost(
            `${process.env.REACT_APP_ROUTING_API_SITE}/routing/search/search-poi`,
            searchData,
            {
                params: {
                    locale: i18n.language,
                },
                apiCache: true,
                signal: controller.signal,
            }
        );
        if (response?.data) {
            return response.data;
        }
    }

    useEffect(() => {
        const handleZoomEnd = () => {
            setZoom(map.getZoom());
        };

        const handleDragEnd = () => {
            setMove(true);
        };

        if (map) {
            map.on('zoomend', handleZoomEnd);
            map.on('dragend', handleDragEnd);

            return () => {
                map.off('zoomend', handleZoomEnd);
                map.off('dragend', handleDragEnd);
            };
        }
    }, [map]);

    function typesChanged() {
        return !_.isEmpty(ctx.showPoiCategories) && prevTypesLength !== ctx.showPoiCategories?.length;
    }

    const debouncedGetPoi = useRef(
        _.debounce(
            async ({
                controller,
                ignore,
                poiList,
                showPoiCategories,
                savedBbox,
                prevCategoriesCount,
                poiIconCache,
                zoom,
            }) => {
                map.spin(true, { color: '#1976d2' });
                let bbox = map.getBounds();
                await getPoi(controller, showPoiCategories, bbox, savedBbox, prevCategoriesCount).then(async (res) => {
                    map.spin(false);
                    if (res && !ignore) {
                        if (!res.alreadyFound) {
                            if (!res.mapLimitExceeded && res.features) {
                                const layer = await createPoiLayer({
                                    ctx,
                                    poiList: res.features.features,
                                    globalPoiIconCache: poiIconCache,
                                    map,
                                    zoom,
                                });
                                const newPoiList = {
                                    prevLayer: _.cloneDeep(poiList?.layer),
                                    layer: layer,
                                    listFeatures: res.features,
                                };
                                setPoiList(newPoiList);
                                setBbox(bbox);
                                setPrevCategoriesCount(showPoiCategories.length);
                                setUseLimit(res.useLimit);
                            }
                        }
                        if (res.mapLimitExceeded) {
                            setAddAlert(true);
                        }
                    } else {
                        ctx.setProcessingSearch(false);
                        setPoiList(null);
                    }
                });
            },
            1000
        )
    ).current;

    function addToSearchRes(poiList) {
        if (ctx.searchQuery?.type === SEARCH_TYPE_CATEGORY) {
            ctx.setSearchResult((prevResult) => {
                return {
                    ...prevResult,
                    features: poiList?.listFeatures?.features,
                };
            });
        }
    }

    function allPoiFound(zoom, prevZoom) {
        return prevZoom && zoom > prevZoom && !useLimit;
    }

    useEffect(() => {
        let ignore = false;
        let controller = new AbortController();

        async function getPoiList() {
            setPrevTypesLength(_.cloneDeep(ctx.showPoiCategories.length));
            if (
                (!_.isEmpty(ctx.showPoiCategories) && !allPoiFound(zoom, prevZoom) && zoom !== prevZoom) ||
                move ||
                typesChanged()
            ) {
                if (prevController) {
                    prevController.abort();
                }
                setPrevController(controller);
                setPrevZoom(_.cloneDeep(zoom));
                if (ctx.showPoiCategories.length > 0) {
                    debouncedGetPoi({
                        controller,
                        ignore,
                        poiList,
                        showPoiCategories: ctx.showPoiCategories,
                        savedBbox: bbox,
                        prevCategoriesCount,
                        poiIconCache: ctx.poiIconCache,
                        zoom,
                    });
                }
            } else {
                if (poiList?.layer && _.isEmpty(ctx.showPoiCategories)) {
                    const newPoiList = {
                        prevLayer: _.cloneDeep(poiList?.layer),
                        layer: null,
                    };
                    setPoiList(newPoiList);
                } else {
                    // poi list already found
                    if (poiList?.listFeatures?.features?.length > 0) {
                        const layer = await createPoiLayer({
                            ctx,
                            poiList: poiList.listFeatures.features,
                            globalPoiIconCache: ctx.poiIconCache,
                            map,
                            zoom,
                        });
                        const newPoiList = {
                            prevLayer: _.cloneDeep(poiList?.layer),
                            layer: layer,
                            listFeatures: poiList?.listFeatures,
                        };
                        setPoiList(newPoiList);
                    }
                }
            }
        }

        if (zoom < 8 && !_.isEmpty(ctx.showPoiCategories)) {
            setAddAlert(true);
        } else {
            setAddAlert(false);
            getPoiList().then();
            return () => {
                ignore = true;
            };
        }
    }, [zoom, move, ctx.showPoiCategories]);

    useEffect(() => {
        if (poiList?.layer && !map.hasLayer(poiList?.layer)) {
            poiList?.layer.addTo(map).on('click', onClick);
        }
        if (poiList?.prevLayer) {
            map.removeLayer(poiList?.prevLayer);
        }
        addToSearchRes(poiList);
        setMove(false);
    }, [poiList]);

    function onClick(e) {
        ctx.setCurrentObjectType(OBJECT_TYPE_POI);
        const poi = {
            options: e.sourceTarget.options,
            latlng: e.sourceTarget._latlng,
        };
        ctx.setSelectedWpt({ poi });
    }

    useEffect(() => {
        if (ctx.addFavorite.location && ctx.addFavorite.poi && !openAddDialog) {
            setOpenAddDialog(true);
            setSelectedPoi({ poi: ctx.addFavorite.poi, address: ctx.addFavorite.address });
        }
    }, [ctx.addFavorite]);

    return (
        <>
            {addAlert && (
                <Alert sx={{ position: 'absolute', zIndex: 1000, left: '40%', top: '2%' }} severity="info">
                    Please zoom in closer!
                </Alert>
            )}
            {selectedPoi && openAddDialog && ctx.addFavorite.location && (
                <AddFavoriteDialog
                    dialogOpen={openAddDialog}
                    setDialogOpen={setOpenAddDialog}
                    selectedPoi={selectedPoi}
                />
            )}
        </>
    );
}
