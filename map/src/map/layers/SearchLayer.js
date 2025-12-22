import { apiGet } from '../../util/HttpApi';
import { useContext, useEffect, useRef, useState } from 'react';
import AppContext, { OBJECT_SEARCH } from '../../context/AppContext';
import PoiManager, {
    createPoiCache,
    DEFAULT_ICON_COLOR,
    DEFAULT_POI_COLOR,
    DEFAULT_POI_SHAPE,
    navigateToPoi,
    updatePoiCache,
} from '../../manager/PoiManager';
import { useMap } from 'react-leaflet';
import { getPoiIcon } from './PoiLayer';
import L, { LatLng } from 'leaflet';
import {
    CATEGORY_NAME,
    CATEGORY_TYPE,
    FINAL_POI_ICON_NAME,
    ICON_KEY_NAME,
    POI_ICON_NAME,
    POI_ID,
    POI_NAME,
    TYPE_OSM_TAG,
    TYPE_OSM_VALUE,
} from '../../infoblock/components/wpt/WptTagsProvider';
import { changeIconColor, createPoiIcon, DEFAULT_ICON_SIZE } from '../markers/MarkerOptions';
import i18n from '../../i18n';
import { clusterMarkers, createHoverMarker, createSecondaryMarker } from '../util/Clusterizer';
import styles from '../../menu/search/search.module.css';
import { useSelectMarkerOnMap } from '../../util/hooks/map/useSelectMarkerOnMap';
import useZoomMoveMapHandlers from '../../util/hooks/map/useZoomMoveMapHandlers';
import { getIconByType } from '../../manager/SearchManager';
import { showProcessingNotification } from '../../manager/GlobalManager';
import { getVisibleBbox } from '../util/MapManager';
import { selectMarker, updateSelectedMarkerOnMap } from '../util/MarkerSelectionService';
import { POI_OBJECTS_KEY, useRecentDataSaver } from '../../util/hooks/menu/useRecentDataSaver';
import { useNavigate } from 'react-router-dom';

export const SEARCH_TYPE_CATEGORY = 'category';
export const SEARCH_LAYER_ID = 'search-layer';

export const SEARCH_ICON_MAP_LOCATION = 'location';
export const SEARCH_ICON_MAP_BUILDING = 'house';
export const SEARCH_ICON_MAP_STREET = 'street';
export const SEARCH_ICON_MAP_INTERSECTION = 'intersection';

export const ZOOM_TO_MAP = 17;

export const searchTypeMap = {
    LOCATION: 'LOCATION',
    INTERSECTION: 'STREET_INTERSECTION',
    HOUSE: 'HOUSE',
    STREET: 'STREET',
    POI: 'POI',
    POI_TYPE: 'POI_TYPE',
    CITY: 'CITY',
    TOWN: 'TOWN',
    VILLAGE: 'VILLAGE',
};

export const iconPathMap = {
    [SEARCH_ICON_MAP_LOCATION]: '/map/images/map_icons/ic_action_marker_dark.svg',
    [SEARCH_ICON_MAP_BUILDING]: '/map/images/map_icons/ic_action_building.svg',
    [SEARCH_ICON_MAP_STREET]: '/map/images/map_icons/ic_action_street_name.svg',
    [SEARCH_ICON_MAP_INTERSECTION]: '/map/images/map_icons/ic_action_intersection.svg',
};

export const typeIconMap = {
    [searchTypeMap.LOCATION]: SEARCH_ICON_MAP_LOCATION,
    [searchTypeMap.HOUSE]: SEARCH_ICON_MAP_BUILDING,
    [searchTypeMap.STREET]: SEARCH_ICON_MAP_STREET,
    [searchTypeMap.INTERSECTION]: SEARCH_ICON_MAP_INTERSECTION,
};

export async function getIconFromMap(name) {
    let svgData = null;
    const svgIconPath = iconPathMap[name];
    if (svgIconPath) {
        const response = await fetch(svgIconPath);
        svgData = await response.text();
    }
    return svgData;
}

export function findFeatureGroupById(map, id) {
    let foundGroup = null;
    map.eachLayer(function (layer) {
        if (layer instanceof L.FeatureGroup && layer.options.id === id) {
            foundGroup = layer;
        }
    });
    return foundGroup;
}

export function getObjIdSearch(obj) {
    if (obj.properties[POI_ID]) {
        return obj.properties[POI_ID];
    } else if (obj.geometry.coordinates[0] === 0 && obj.geometry.coordinates[1] === 0) {
        return null;
    }
    return `${obj.geometry.coordinates[1]},${obj.geometry.coordinates[0]}`;
}

export default function SearchLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const navigate = useNavigate();

    const prevSelectedRes = useRef(null);

    const [zoom, setZoom] = useState(map ? map.getZoom() : 0);
    const [move, setMove] = useState(false);

    const searchLayers = useRef(null);

    useZoomMoveMapHandlers(map, setZoom, setMove);
    const recentSaver = useRecentDataSaver();

    useSelectMarkerOnMap({
        ctx,
        layers: searchLayers.current?.getLayers(),
        type: SEARCH_LAYER_ID,
        map,
        prevSelectedMarker: prevSelectedRes,
    });

    useEffect(() => {
        if (ctx.zoomToCoords) {
            const mapBounds = map.getBounds();
            const pointLatLng = new LatLng(ctx.zoomToCoords.lat, ctx.zoomToCoords.lon);
            if (!mapBounds.contains(pointLatLng)) {
                map.setView(pointLatLng, zoom, { animate: true });
            }
            ctx.setZoomToCoords(null);

            updateSelectedMarkerOnMap({
                layers: searchLayers.current?.getLayers(),
                selectedObjId: ctx.zoomToCoords.idObj,
                prevSelectedMarker: prevSelectedRes,
                type: SEARCH_LAYER_ID,
            });
        }
    }, [ctx.zoomToCoords]);

    useEffect(() => {
        if (ctx.searchQuery?.search) {
            removeOldSearchLayer();
            //remove old categories from search
            ctx.setShowPoiCategories([]);
            const searchData = ctx.searchQuery.search;
            if (ctx.searchQuery.type === SEARCH_TYPE_CATEGORY) {
                const category = PoiManager.formattingPoiFilter(searchData?.query, true);
                searchByCategory(category, searchData);
            } else {
                if (ctx.searchQuery.latlng) {
                    searchByWord(searchData.query, ctx.searchQuery.latlng, ctx.searchQuery.baseSearch).then();
                } else {
                    console.debug('SearchLayer: search query without latlng');
                }
            }
        } else {
            if (ctx.configureMapState.pois) {
                ctx.setShowPoiCategories([...ctx.configureMapState.pois]);
            } else {
                ctx.setShowPoiCategories([]);
            }
        }
    }, [ctx.searchQuery]);

    useEffect(() => {
        const updateAsyncLayers = async () => {
            if (searchLayers.current) {
                const newLayers = await createSearchLayer({
                    objList: ctx.searchResult?.features,
                });
                searchLayers.current.clearLayers();
                newLayers.eachLayer((l) => {
                    searchLayers.current.addLayer(l);
                });
                if (prevSelectedRes.current && searchLayers.current) {
                    // If we have a previously selected result, re-add it to the search layers
                    let wasFound = false;
                    searchLayers.current.getLayers().forEach((layer) => {
                        if (layer.options.idObj === prevSelectedRes.current.options.idObj) {
                            prevSelectedRes.current = selectMarker(layer, prevSelectedRes.current, SEARCH_LAYER_ID);
                            wasFound = true;
                        }
                    });
                    if (!wasFound) {
                        // If the previously selected result is not found, reset it
                        prevSelectedRes.current = null;
                    }
                }
            }
        };

        if (ctx.searchResult?.features && ctx.searchQuery && ctx.searchQuery.type !== SEARCH_TYPE_CATEGORY) {
            updateAsyncLayers().then();
        }
        const newBounds = map.getBounds();
        if (!ctx.visibleBounds || !ctx.visibleBounds.equals(newBounds)) {
            ctx.setVisibleBounds(newBounds);
        }
    }, [zoom, move]);

    useEffect(() => {
        if (ctx.zoomToMapObj.obj !== null) {
            const { obj: item, animateDist: dist, zoom: z } = ctx.zoomToMapObj;
            const mapBounds = map.getBounds();
            const pointLatLng = new LatLng(item.geometry.coordinates[1], item.geometry.coordinates[0]);
            const mapCenter = map.getCenter();
            if (!mapBounds.contains(pointLatLng)) {
                const distance = mapCenter.distanceTo(pointLatLng);
                if (distance > dist) {
                    map.setView(pointLatLng, Math.max(map.getZoom(), z), { animate: false });
                } else {
                    map.setView(pointLatLng, Math.max(map.getZoom(), z), { animate: true });
                }
            }
        }
    }, [ctx.zoomToMapObj]);

    async function searchByWord(query, latlng, baseSearch) {
        const notifyTimeout = showProcessingNotification(ctx);
        const bbox = getVisibleBbox(map, ctx);
        if (!bbox) {
            return;
        }
        const response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/search/search`, {
            apiCache: true,
            params: {
                lat: latlng.lat,
                lon: latlng.lng,
                northWest: `${bbox.getNorthWest().lat},${bbox.getNorthWest().lng}`,
                southEast: `${bbox.getSouthEast().lat},${bbox.getSouthEast().lng}`,
                text: query,
                locale: i18n.language,
                baseSearch,
            },
        });
        if (response?.ok) {
            const data = await response.json();
            ctx.setSearchResult(data);
        } else {
            ctx.setSearchResult(null);
        }
        clearTimeout(notifyTimeout);
        ctx.setProcessingSearch(false);
    }

    function removeOldSearchLayer() {
        const searchLayer = findFeatureGroupById(map, SEARCH_LAYER_ID);
        if (searchLayer) {
            map.removeLayer(searchLayer);
        }
    }

    useEffect(() => {
        const addAsyncLayers = async () => {
            if (!ctx.searchResult) {
                removeOldSearchLayer();
                if (ctx.searchQuery?.type === SEARCH_TYPE_CATEGORY) {
                    const category = PoiManager.formattingPoiFilter(ctx.searchQuery?.search?.query, true);
                    removeCategory(category);
                }
            } else {
                if (ctx.searchResult?.features && ctx.searchQuery?.type !== SEARCH_TYPE_CATEGORY) {
                    const layers = await createSearchLayer({
                        objList: ctx.searchResult?.features,
                    });
                    searchLayers.current = layers;
                    layers.addTo(map).on('click', onClick);
                }
            }
        };

        addAsyncLayers().then();
    }, [ctx.searchResult]);

    function onClick(e) {
        ctx.setCurrentObjectType(OBJECT_SEARCH);

        prevSelectedRes.current = selectMarker(e.sourceTarget, prevSelectedRes.current);

        const poi = {
            options: e.sourceTarget.options,
            latlng: e.sourceTarget._latlng,
            mapObj: true,
        };
        recentSaver(POI_OBJECTS_KEY, poi);
        ctx.setSelectedWpt({ poi });
        if (poi.options[CATEGORY_TYPE] === searchTypeMap.POI) {
            navigateToPoi({ poi }, navigate);
        }
    }

    async function createSearchLayer({ objList }) {
        const innerCache = await createPoiCache({ poiList: objList, poiIconCache: ctx.poiIconCache });
        updatePoiCache(ctx, innerCache);

        const center = map.getCenter();
        const zoom = map.getZoom();
        const latitude = center.lat;
        const { mainMarkers, secondaryMarkers } = clusterMarkers({
            places: objList,
            zoom,
            latitude,
            iconSize: DEFAULT_ICON_SIZE,
            isPoi: true,
        });

        const mainMarkersLayers = await Promise.all(
            mainMarkers.map(async (obj) => {
                const objType = obj.properties[CATEGORY_TYPE];
                let title = obj.properties[CATEGORY_NAME];
                let finalIconName = obj.properties[FINAL_POI_ICON_NAME] ?? null;
                let icon;
                if (objType === searchTypeMap.POI) {
                    finalIconName =
                        finalIconName ??
                        PoiManager.getIconNameForPoiType({
                            iconKeyName: obj.properties[ICON_KEY_NAME],
                            typeOsmTag: obj.properties[TYPE_OSM_TAG],
                            typeOsmValue: obj.properties[TYPE_OSM_VALUE],
                            iconName: obj.properties[POI_ICON_NAME],
                        });
                    icon = await getPoiIcon(obj, innerCache, finalIconName);
                } else {
                    finalIconName = getIconByType(objType);
                    icon = await getSearchIcon(obj, innerCache, finalIconName);
                }
                const coord = obj.geometry.coordinates;
                return new L.Marker(new L.LatLng(coord[1], coord[0]), {
                    ...obj.properties,
                    idObj: getObjIdSearch(obj),
                    title: title,
                    icon,
                    svg: icon.options.svg,
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
                text: marker.options[POI_NAME] ?? marker.options[CATEGORY_NAME],
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
                text: marker.options[POI_NAME] ?? marker.options[CATEGORY_NAME],
                latlng: marker._latlng,
                map,
                ctx,
                pointerStyle: styles.hoverPointer,
            });
        });
        const layers = [...mainMarkersLayers, ...simpleMarkersArr.getLayers()];

        if (layers.length) {
            return L.featureGroup(layers, {
                id: SEARCH_LAYER_ID,
            });
        } else {
            return L.featureGroup(); // return an empty layer group if there are no layers
        }
    }

    async function getSearchIcon(obj, cache, finalIconName) {
        let svgData;
        if (cache[finalIconName]) {
            svgData = cache[finalIconName];
        } else {
            svgData = await getIconFromMap(finalIconName);
            if (svgData) {
                ctx.setPoiIconCache((prevState) => ({
                    ...prevState,
                    [finalIconName]: svgData,
                }));
            }
        }
        const coloredSvg = changeIconColor(svgData, DEFAULT_ICON_COLOR);
        const iconHtml = createPoiIcon({
            color: DEFAULT_POI_COLOR,
            background: DEFAULT_POI_SHAPE,
            svgIcon: coloredSvg,
        }).options.html;
        return L.divIcon({ html: iconHtml, svg: coloredSvg });
    }

    function searchByCategory(category, searchData) {
        const newCategory = { key: searchData.key, category, lang: searchData.catLang, mode: searchData.mode };
        ctx.setShowPoiCategories((prev) => [...prev, newCategory]);
    }

    function removeCategory(category) {
        const index = ctx.showPoiCategories.findIndex((item) => item.category === category);
        if (index > -1) {
            ctx.showPoiCategories.splice(index, 1);
        }
        ctx.setShowPoiCategories([...ctx.showPoiCategories]);
    }
}
