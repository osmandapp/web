import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext, { OBJECT_SEARCH, OBJECT_TYPE_POI } from '../../context/AppContext';
import { useMap } from 'react-leaflet';
import debounce from 'lodash-es/debounce';
import isEmpty from 'lodash-es/isEmpty';
import cloneDeep from 'lodash-es/cloneDeep';
import L from 'leaflet';
import { changeIconColor, createPoiIcon, DEFAULT_ICON_SIZE } from '../markers/MarkerOptions';
import 'leaflet-spin';
import PoiManager, {
    createPoiCache,
    DEFAULT_ICON_COLOR,
    DEFAULT_POI_COLOR,
    DEFAULT_POI_SHAPE,
    navigateToPoi,
    updatePoiCache,
} from '../../manager/PoiManager';
import 'leaflet.markercluster';
import { apiGet, apiPost } from '../../util/HttpApi';
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
import { useSelectMarkerOnMap } from '../../util/hooks/map/useSelectMarkerOnMap';
import { MENU_INFO_OPEN_SIZE, showProcessingNotification } from '../../manager/GlobalManager';
import useZoomMoveMapHandlers from '../../util/hooks/map/useZoomMoveMapHandlers';
import { getVisibleBbox } from '../util/MapManager';
import { MIN_SEARCH_ZOOM } from '../../menu/search/search/SearchResults';
import { selectMarker } from '../util/MarkerSelectionService';
import { EXPLORE_OBJS_KEY, POI_OBJECTS_KEY, useRecentDataSaver } from '../../util/hooks/menu/useRecentDataSaver';
import { useNavigate } from 'react-router-dom';
import LoginContext from '../../context/LoginContext';

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
                icon,
                svg: icon.options.svg,
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
            iconSize: DEFAULT_ICON_SIZE,
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
            id: type === OBJECT_SEARCH ? SEARCH_LAYER_ID : POI_LAYER_ID,
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
            return L.divIcon({ html: iconHtml, svg: coloredSvg });
        }
    }
}

export const POI_LAYER_ID = 'poi-layer';

export default function PoiLayer() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);
    const map = useMap();

    // for fixing dead layers
    const reqIdRef = useRef(0);

    const navigate = useNavigate();

    const [prevZoom, setPrevZoom] = useState(null);
    const [zoom, setZoom] = useState(map ? map.getZoom() : 0);
    const [move, setMove] = useState(false);
    const [poiList, setPoiList] = useState({
        layer: null,
        prevLayer: null,
        listFeatures: null,
    });
    const prevSelectedPoi = useRef(null);

    const [prevController, setPrevController] = useState(false);
    const [useLimit, setUseLimit] = useState(false);
    const [bbox, setBbox] = useState(null);
    const [prevCategories, setPrevCategories] = useState(null);
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [selectedPoi, setSelectedPoi] = useState(false);

    useZoomMoveMapHandlers(map, setZoom, setMove);
    const recentSaver = useRecentDataSaver();

    function findFeatureGroupById(id) {
        let found = null;
        map.eachLayer((layer) => {
            if (layer instanceof L.FeatureGroup && layer.options?.id === id) {
                found = layer;
            }
        });
        return found;
    }

    useSelectMarkerOnMap({
        ctx,
        layers: poiList?.layer?.getLayers(),
        type: POI_LAYER_ID,
        map,
        prevSelectedMarker: prevSelectedPoi,
    });

    useEffect(() => {
        if (ctx.poiByUrl?.params) {
            openPoiByUrl().then(async (res) => {
                let poiLayer;
                if (res) {
                    if (ctx.selectedPoiId?.id !== getObjIdSearch(res)) {
                        poiLayer = await createPoiLayer({
                            ctx,
                            poiList: [res],
                            globalPoiIconCache: ctx.poiIconCache,
                            map,
                            zoom,
                        });
                        // remove old poi marker
                        if (ctx.poiByUrl.layer) {
                            map.removeLayer(ctx.poiByUrl.layer);
                        }
                        map.addLayer(poiLayer);
                    }
                }
                ctx.setPoiByUrl({
                    params: null,
                    layer: poiLayer,
                    open: true,
                });
                ctx.setProcessingPoiByUrl(false);
            });
        } else if (ctx.poiByUrl?.layer && !ctx.poiByUrl?.open) {
            map.removeLayer(ctx.poiByUrl.layer);
            ctx.setPoiByUrl(null);
            ctx.setProcessingPoiByUrl(false);
        }
    }, [ctx.poiByUrl]);

    useEffect(() => {
        ctx.setShowPoiCategories((prev) => {
            const configCats = ctx.configureMapState.pois.map((x) => x.category);

            // drop config-origin items that no longer exist in Configure Map
            const kept = prev.filter((o) => !(o.fromConfig && !configCats.includes(o.category)));

            const prevConfigCats = new Set(kept.filter((o) => o.fromConfig).map((o) => o.category));

            const toAdd = ctx.configureMapState.pois
                .filter((o) => !prevConfigCats.has(o.category))
                .map((o) => ({ ...o, fromConfig: true }));

            return toAdd.length || kept.length !== prev.length ? [...kept, ...toAdd] : prev;
        });
    }, [ctx.configureMapState.pois]);

    async function openPoiByUrl() {
        const { lat, lng, name, type, osmId, wikidataId, lang } = ctx.poiByUrl.params;

        const params = { lat, lng, name, type, osmId, wikidataId, lang };
        const cleanParams = Object.fromEntries(Object.entries(params).filter(([, v]) => v != null && v !== ''));

        const response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/search/get-poi`, {
            params: cleanParams,
            apiCache: true,
        });
        if (response?.data) {
            const data = response.data;
            data.properties[FINAL_POI_ICON_NAME] = PoiManager.getIconNameForPoiType({
                iconKeyName: data.properties[ICON_KEY_NAME],
                typeOsmTag: data.properties[TYPE_OSM_TAG],
                typeOsmValue: data.properties[TYPE_OSM_VALUE],
                iconName: data.properties[POI_ICON_NAME],
            });

            const poi = {
                options: { ...data.properties },
                latlng: {
                    lat: data.geometry.coordinates[1],
                    lng: data.geometry.coordinates[0],
                },
                mapObj: true,
            };

            if (wikidataId) {
                // open wiki poi
                const key = data.properties?.osmid ?? data.geometry.coordinates[1] + data.geometry.coordinates[0];
                const wiki = response?.data ?? null;
                const poiTags = wiki?.properties.poiTags;
                const poi = poiTags
                    ? {
                          properties: { ...poiTags },
                          latlng: {
                              lat: wiki.geometry.coordinates[1],
                              lng: wiki.geometry.coordinates[0],
                          },
                          mapObj: true,
                      }
                    : null;

                const obj = { poi, wikidata: wiki, key, mapObj: true };
                ctx.setSelectedWpt(obj);
                recentSaver(EXPLORE_OBJS_KEY, obj);
            } else {
                // open normal poi
                ctx.setCurrentObjectType(OBJECT_TYPE_POI);
                ctx.setSelectedWpt({ poi });
                recentSaver(POI_OBJECTS_KEY, poi);
            }

            ctx.setInfoBlockWidth(MENU_INFO_OPEN_SIZE + 'px');
            return data;
        } else {
            return null;
        }
    }

    async function getPoi(controller, showPoiCategories, bbox, savedBbox) {
        if (!showPoiCategories || showPoiCategories.length === 0) {
            return null;
        }
        const catArr = [];
        const catArrLang = {};
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
            prevCategoriesCount: prevCategories ? prevCategories.length : 0,
            prevSearchRes: prevSearchRes,
            prevSearchCategory: prevSearchCategory,
        };
        const response = await apiPost(`${process.env.REACT_APP_ROUTING_API_SITE}/search/search-poi`, searchData, {
            params: {
                locale: i18n.language,
                lat: map.getCenter().lat,
                lon: map.getCenter().lng,
                baseSearch: map.getZoom() < MIN_SEARCH_ZOOM,
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
        if (!isEmpty(ctx.showPoiCategories)) {
            if (ctx.searchQuery?.type === SEARCH_TYPE_CATEGORY) {
                // always clear the old poi list
                return true;
            }
            if (!prevCategories) {
                return true;
            }
            // compare previous and current categories
            const prev = prevCategories.map((c) => c.category).sort();
            const current = ctx.showPoiCategories.map((c) => c.category).sort();

            if (JSON.stringify(prev) !== JSON.stringify(current)) {
                return true;
            }
        }
        return false;
    }

    const debouncedGetPoi = useRef(
        debounce(
            async ({
                controller,
                ignore,
                poiList,
                showPoiCategories,
                savedBbox,
                prevCategories,
                poiIconCache,
                zoom,
                reqId,
            }) => {
                map.spin(true, { color: '#1976d2' });
                const bbox = getVisibleBbox(map, ctx);
                const notifyTimeout = showProcessingNotification(ctx);
                try {
                    const res = await getPoi(controller, showPoiCategories, bbox, savedBbox, prevCategories);
                    if (reqId !== reqIdRef.current || ignore) return;
                    if (res) {
                        if (!res.alreadyFound && res.features) {
                            const layer = await createPoiLayer({
                                ctx,
                                poiList: res.features.features,
                                globalPoiIconCache: poiIconCache,
                                map,
                                zoom,
                            });
                            const existing = findFeatureGroupById(POI_LAYER_ID);
                            if (existing) {
                                map.removeLayer(existing);
                            }
                            const newPoiList = {
                                prevLayer: cloneDeep(poiList?.layer),
                                layer,
                                listFeatures: res.features,
                            };
                            setPoiList(newPoiList);
                            setBbox(bbox);
                            setPrevCategories(showPoiCategories);
                            setUseLimit(res.useLimit);
                        }
                    } else {
                        setPoiList(null);
                    }
                } finally {
                    map.spin(false);
                    clearTimeout(notifyTimeout);
                    ctx.setProcessingSearch(false);
                }
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
            if (
                (!isEmpty(ctx.showPoiCategories) && !allPoiFound(zoom, prevZoom) && zoom !== prevZoom) ||
                move ||
                typesChanged()
            ) {
                if (prevController) {
                    prevController.abort();
                }
                setPrevController(controller);
                setPrevZoom(cloneDeep(zoom));
                if (ctx.showPoiCategories.length > 0) {
                    reqIdRef.current += 1;
                    debouncedGetPoi({
                        controller,
                        ignore,
                        poiList,
                        showPoiCategories: ctx.showPoiCategories,
                        savedBbox: bbox,
                        prevCategories,
                        poiIconCache: ctx.poiIconCache,
                        zoom,
                        reqId: reqIdRef.current,
                    });
                }
            } else {
                if (poiList?.layer && isEmpty(ctx.showPoiCategories)) {
                    const newPoiList = {
                        prevLayer: cloneDeep(poiList?.layer),
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
                            prevLayer: cloneDeep(poiList?.layer),
                            layer: layer,
                            listFeatures: poiList?.listFeatures,
                        };
                        setPoiList(newPoiList);
                    }
                }
            }
        }

        if (ltx.isLoggedIn()) {
            getPoiList().then();
        }
        return () => {
            ignore = true;
            controller.abort?.();
        };
    }, [zoom, move, ctx.showPoiCategories]);

    // add search result to the map and to the left panel
    useEffect(() => {
        if (!ctx.processingSearch) {
            const existing = findFeatureGroupById(POI_LAYER_ID);
            if (existing) {
                map.removeLayer(existing);
            }
            if (poiList?.prevLayer) {
                map.removeLayer(poiList?.prevLayer);
            }
            if (poiList?.layer && !map.hasLayer(poiList?.layer)) {
                poiList?.layer.addTo(map).on('click', onClick);
                prevSelectedPoi.current = null;
            }
            addToSearchRes(poiList);
            setMove(false);
        }
    }, [poiList, ctx.processingSearch]);

    useEffect(() => {
        return () => {
            const existing = findFeatureGroupById(POI_LAYER_ID);
            if (existing) {
                map.removeLayer(existing);
            }
            prevController?.abort?.();
        };
    }, []);

    function onClick(e) {
        ctx.setCurrentObjectType(OBJECT_TYPE_POI);
        ctx.setInfoBlockWidth(MENU_INFO_OPEN_SIZE + 'px');

        prevSelectedPoi.current = selectMarker(e.sourceTarget, prevSelectedPoi.current);

        const poi = {
            mapObj: true,
            options: e.sourceTarget.options,
            latlng: e.sourceTarget._latlng,
        };
        recentSaver(POI_OBJECTS_KEY, poi);
        ctx.setSelectedWpt({ poi });
        navigateToPoi(poi, navigate);
    }

    useEffect(() => {
        if (ctx.addFavorite.location && ctx.addFavorite.poi && !openAddDialog) {
            setOpenAddDialog(true);
            setSelectedPoi({ poi: ctx.addFavorite.poi, address: ctx.addFavorite.address });
        }
    }, [ctx.addFavorite]);

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
