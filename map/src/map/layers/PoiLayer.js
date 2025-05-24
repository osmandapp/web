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
import { MENU_INFO_OPEN_SIZE, showProcessingNotification } from '../../manager/GlobalManager';
import useZoomMoveMapHandlers from '../../util/hooks/useZoomMoveMapHandlers';
import { getVisibleBbox } from '../util/MapManager';

// WARNING: Do not use the 'title' field in marker layers on the map.
// See the 'parseWpt' function for more details.
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
            const finalIconName =
                poi.properties[FINAL_POI_ICON_NAME] ??
                PoiManager.getIconNameForPoiType({
                    iconKeyName: poi.properties[ICON_KEY_NAME],
                    typeOsmTag: poi.properties[TYPE_OSM_TAG],
                    typeOsmValue: poi.properties[TYPE_OSM_VALUE],
                    iconName: poi.properties[POI_ICON_NAME],
                });
            const icon = await getPoiIcon(poi, innerCache, finalIconName);
            const coord = poi.geometry.coordinates;
            const marker = new L.Marker(new L.LatLng(coord[1], coord[0]), {
                ...poi.properties,
                idObj: getObjIdSearch(poi),
                name: poi.properties[POI_NAME],
                icon: icon,
                [FINAL_POI_ICON_NAME]: finalIconName,
            });

            marker.on('add', function () {
                marker.getElement().setAttribute('se-poi-name', poi.properties[POI_NAME]);
            });

            return marker;
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
            text: marker.options[POI_NAME],
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
            text: marker.options[POI_NAME],
            latlng: marker._latlng,
            map,
            ctx,
            pointerStyle: styles.hoverPointer,
        });
    });

    const layers = [...mainMarkersLayers, ...simpleMarkersArr.getLayers()];

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
    const [zoom, setZoom] = useState(map ? map.getZoom() : 0);
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

    useZoomMoveMapHandlers(map, setZoom, setMove);

    useSelectedPoiMarker(
        ctx,
        ctx.selectedPoiId?.type === POI_LAYER_ID ? poiList?.layer?.getLayers() : null,
        POI_LAYER_ID,
        map
    );

    async function getPoi(controller, showPoiCategories, bbox, savedBbox) {
        if (!showPoiCategories || showPoiCategories.length === 0) {
            return null;
        }
        let catArr = [];
        let catArrLang = {};
        //add fields for restoring the previous search result
        let prevSearchRes;
        let prevSearchCategory;

        showPoiCategories.forEach((obj) => {
            if (obj.key) {
                if (!prevSearchRes && !prevSearchCategory) {
                    prevSearchRes = obj.key;
                    prevSearchCategory = obj.category;
                } else {
                    console.warn('Only one category can be searched at a time');
                }
            }
            if (obj.lang) {
                catArrLang[obj.key] = obj.lang;
            }
            catArr.push(obj.category);
        });

        const searchData = {
            categories: catArr,
            categoriesLang: catArrLang,
            northWest: `${bbox.getNorthWest().lat},${bbox.getNorthWest().lng}`,
            southEast: `${bbox.getSouthEast().lat},${bbox.getSouthEast().lng}`,
            savedNorthWest: savedBbox ? `${savedBbox.getNorthWest().lat},${savedBbox.getNorthWest().lng}` : null,
            savedSouthEast: savedBbox ? `${savedBbox.getSouthEast().lat},${savedBbox.getSouthEast().lng}` : null,
            prevCategoriesCount: prevCategoriesCount,
            prevSearchRes: prevSearchRes,
            prevSearchCategory: prevSearchCategory,
        };
        let response = await apiPost(`${process.env.REACT_APP_ROUTING_API_SITE}/search/search-poi`, searchData, {
            params: {
                locale: i18n.language,
                lat: map.getCenter().lat,
                lon: map.getCenter().lng,
            },
            apiCache: true,
            signal: controller.signal,
        });
        if (response?.data) {
            return response.data;
        } else {
            return null;
        }
    }

    function typesChanged() {
        if (!_.isEmpty(ctx.showPoiCategories)) {
            if (ctx.searchQuery?.type === SEARCH_TYPE_CATEGORY) {
                // always clear the old poi list
                return true;
            }
            if (prevTypesLength !== ctx.showPoiCategories?.length) {
                return true;
            }
        }
        return false;
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
                const bbox = getVisibleBbox(map, ctx);
                const notifyTimeout = showProcessingNotification(ctx);
                await getPoi(controller, showPoiCategories, bbox, savedBbox, prevCategoriesCount).then(async (res) => {
                    map.spin(false);
                    clearTimeout(notifyTimeout);
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
                        setPoiList(null);
                    }
                    ctx.setProcessingSearch(false);
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
                    features: !poiList ? [] : poiList?.listFeatures?.features,
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

    // add search result to the map and to the left panel
    useEffect(() => {
        if (!ctx.processingSearch) {
            if (poiList?.prevLayer) {
                map.removeLayer(poiList?.prevLayer);
            }
            if (poiList?.layer && !map.hasLayer(poiList?.layer)) {
                poiList?.layer.addTo(map).on('click', onClick);
            }
            addToSearchRes(poiList);
            setMove(false);
        }
    }, [poiList, ctx.processingSearch]);

    function onClick(e) {
        ctx.setCurrentObjectType(OBJECT_TYPE_POI);
        ctx.setInfoBlockWidth(MENU_INFO_OPEN_SIZE + 'px');
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

    useEffect(() => {
        if (addAlert) {
            ctx.setNotification({
                text: 'Please zoom in closer!',
                severity: 'info',
            });
        }
    }, [addAlert]);

    return (
        <>
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
