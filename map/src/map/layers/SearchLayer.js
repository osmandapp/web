import { apiGet } from '../../util/HttpApi';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import AppContext, { OBJECT_SEARCH, SEARCH_ENGINE_SPATIAL, searchCollator } from '../../context/AppContext';
import MapContext from '../../context/MapContext';
import PoiManager, {
    createPoiCache,
    DEFAULT_ICON_COLOR,
    DEFAULT_POI_COLOR,
    DEFAULT_POI_SHAPE,
    navigateToPoi,
    updatePoiCache,
    parseBrandType,
} from '../../manager/PoiManager';
import { useMap } from 'react-leaflet';
import { getPoiIcon } from './PoiLayer';
import L from 'leaflet';
import {
    CATEGORY_NAME,
    CATEGORY_TYPE,
    FINAL_POI_ICON_NAME,
    ICON_KEY_NAME,
    MATCHED_OBJECTS,
    POI_ICON_NAME,
    POI_ID,
    POI_NAME,
    TYPE_OSM_TAG,
    TYPE_OSM_VALUE,
    WEB_VISIBLE_LEVEL,
} from '../../infoblock/components/wpt/WptTagsProvider';
import { changeIconColor, createPoiIcon, DEFAULT_ICON_SIZE } from '../markers/MarkerOptions';
import i18n from '../../i18n';
import { clusterMarkers, addMarkerTooltip, createSecondaryMarker } from '../util/Clusterizer';
import { useSelectMarkerOnMap } from '../../util/hooks/map/useSelectMarkerOnMap';
import useZoomMoveMapHandlers from '../../util/hooks/map/useZoomMoveMapHandlers';
import { getIconByType, searchCloudTrackFeatures, searchFavoriteFeatures } from '../../manager/SearchManager';
import {
    BBOX_COORDS_DECIMALS,
    POI_LAYER_ID,
    SEARCH_LAYER_ID,
    showProcessingNotification,
} from '../../manager/GlobalManager';
import { getVisibleBboxInfo } from './MapStateLayer';
import {
    findFeatureGroupById,
    getIconFromMap,
    MAP_VIEW_SEARCH_RESULT,
    panToIfNeeded,
    pushMapView,
} from '../util/MapManager';
import { hideMarkersNearPin } from '../util/MarkerSelectionService';
import { POI_OBJECTS_KEY, useRecentDataSaver } from '../../util/hooks/menu/useRecentDataSaver';
import { useNavigate } from 'react-router-dom';
import { getCurrentTimeParams } from '../../util/Utils';

export const SEARCH_TYPE_CATEGORY = 'category';

export const SEARCH_ICON_MAP_LOCATION = 'location';
export const SEARCH_ICON_MAP_BUILDING = 'house';
export const SEARCH_ICON_MAP_STREET = 'street';
export const SEARCH_ICON_MAP_INTERSECTION = 'intersection';
export const SEARCH_ICON_MAP_GPX_TRACK = 'gpx_track';

export const ZOOM_TO_MAP = 17;
export const MATCHED_OBJECT_TYPE_AMENITY = 'Amenity';

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
    GPX_TRACK: 'GPX_TRACK',
    FAVORITE: 'FAVORITE',
};

export const FAVORITE_HIT_GROUP_ID = 'favoriteHitGroupId';

export const typeIconMap = {
    [searchTypeMap.LOCATION]: SEARCH_ICON_MAP_LOCATION,
    [searchTypeMap.HOUSE]: SEARCH_ICON_MAP_BUILDING,
    [searchTypeMap.STREET]: SEARCH_ICON_MAP_STREET,
    [searchTypeMap.INTERSECTION]: SEARCH_ICON_MAP_INTERSECTION,
    [searchTypeMap.GPX_TRACK]: SEARCH_ICON_MAP_GPX_TRACK,
};

export function getObjIdSearch(obj) {
    if (obj.properties[POI_ID]) {
        return obj.properties[POI_ID];
    } else if (obj.geometry.coordinates[0] === 0 && obj.geometry.coordinates[1] === 0) {
        return null;
    }
    return `${obj.geometry.coordinates[1]},${obj.geometry.coordinates[0]}`;
}

export function getAdditionalMatchedAmenityObjects(matchedObjects) {
    return matchedObjects?.length > 1
        ? matchedObjects.slice(1).filter((obj) => obj?.type === MATCHED_OBJECT_TYPE_AMENITY)
        : [];
}

export function getMatchedAmenityProperties(obj) {
    return {
        ...obj,
        [CATEGORY_TYPE]: obj[CATEGORY_TYPE] ?? searchTypeMap.POI,
        [POI_NAME]: obj[POI_NAME] ?? obj.name ?? '',
        name: obj.name ?? obj[POI_NAME],
    };
}

// Build Map<groupId, Set<wptName>> from favorite features for FavoriteLayer visibility control.
export function buildFavGroupMap(favoriteFeatures) {
    if (!favoriteFeatures?.length) return null;
    const result = new Map();
    favoriteFeatures.forEach((f) => {
        const groupId = f.properties[FAVORITE_HIT_GROUP_ID];
        const wptName = f.properties[POI_NAME];
        if (groupId && wptName) {
            if (!result.has(groupId)) result.set(groupId, new Set());
            result.get(groupId).add(wptName);
        }
    });
    return result.size > 0 ? result : null;
}

export default function SearchLayer() {
    const ctx = useContext(AppContext);
    const mtx = useContext(MapContext);
    const map = useMap();

    const navigate = useNavigate();

    const skipFirstBoundsUpdate = useRef(true);

    const [zoom, setZoom] = useState(map ? map.getZoom() : 0);
    const [move, setMove] = useState(false);

    const searchLayers = useRef(null);

    useZoomMoveMapHandlers(map, setZoom, setMove);
    const recentSaver = useRecentDataSaver();

    const getSearchLayers = useCallback(() => searchLayers.current?.getLayers() ?? null, []);
    useSelectMarkerOnMap({
        ctx,
        getLayers: getSearchLayers,
        type: SEARCH_LAYER_ID,
        map,
        zoom,
        move,
    });

    useEffect(() => {
        if (ctx.zoomToCoords) {
            panToIfNeeded({ map, latlng: { lat: ctx.zoomToCoords.lat, lon: ctx.zoomToCoords.lon }, ctx });
            ctx.setZoomToCoords(null);
        }
    }, [ctx.zoomToCoords]);

    useEffect(() => {
        removeOldSearchLayer();
        const oldPoiLayer = findFeatureGroupById(map, POI_LAYER_ID);
        if (oldPoiLayer) {
            map.removeLayer(oldPoiLayer);
        }
        if (ctx.searchQuery) {
            ctx.setShowPoiCategories([]);
            if (ctx.searchQuery.type) {
                searchByCategory(ctx.searchQuery);
            } else if (ctx.searchQuery.latlng) {
                searchByWord(ctx.searchQuery).then();
            } else {
                console.debug('SearchLayer: search query without latlng');
            }
        } else if (ctx.configureMapState.pois) {
            ctx.setShowPoiCategories([...ctx.configureMapState.pois]);
        } else {
            ctx.setShowPoiCategories([]);
        }
    }, [ctx.searchQuery]);

    // When favorites change (rename, edit, delete), refresh the favorites part of search results
    useEffect(() => {
        const query = ctx.searchQuery?.query;
        if (!query || ctx.searchQuery?.type || !ctx.searchResult) return;

        const favoriteFeatures = searchFavoriteFeatures({
            favorites: ctx.favorites,
            query,
            collator: searchCollator,
        });

        const favGroupMap = buildFavGroupMap(favoriteFeatures);

        ctx.setSearchResult((prev) => {
            if (!prev) return prev;
            const trackFeatures = (prev.features ?? []).filter(
                (f) => f.properties?.[CATEGORY_TYPE] === searchTypeMap.GPX_TRACK
            );
            const serverFeatures = (prev.features ?? []).filter(
                (f) =>
                    f.properties?.[CATEGORY_TYPE] !== searchTypeMap.FAVORITE &&
                    f.properties?.[CATEGORY_TYPE] !== searchTypeMap.GPX_TRACK
            );
            return { ...prev, features: [...trackFeatures, ...favoriteFeatures, ...serverFeatures] };
        });
        ctx.setSearchFavoriteGroupIds(favGroupMap);
    }, [ctx.favorites]);

    useEffect(() => {
        let cancelled = false;
        const updateAsyncLayers = async () => {
            if (searchLayers.current) {
                const newLayers = await createSearchLayer({
                    objList: filterByVisibleLevel(
                        ctx.searchResult?.features,
                        ctx.spatialSearch,
                        ctx.searchVisibleLevel
                    ),
                });
                if (cancelled) {
                    return;
                }
                searchLayers.current.clearLayers();
                newLayers.eachLayer((l) => {
                    searchLayers.current.addLayer(l);
                });
                hideMarkersNearPin(map, ctx);
            }
        };

        if (ctx.searchResult?.features && ctx.searchQuery && !ctx.searchQuery.type) {
            updateAsyncLayers().then();
        }
        const newBounds = map.getBounds();
        if (skipFirstBoundsUpdate.current) {
            skipFirstBoundsUpdate.current = false;
        } else if (!ctx.visibleBounds?.equals(newBounds)) {
            ctx.setVisibleBounds(newBounds);
        }

        return () => {
            cancelled = true;
        };
    }, [zoom, move]);

    useEffect(() => {
        if (ctx.moveToMapObj) {
            if (ctx.moveToMapObj.pushMapViewWithCtrlClick) {
                pushMapView({ map, mtx, key: MAP_VIEW_SEARCH_RESULT });
            }
            const [lng, lat] = ctx.moveToMapObj.geometry.coordinates;
            panToIfNeeded({ map, latlng: { lat, lng }, ctx });
            ctx.setMoveToMapObj(null);
        }
    }, [ctx.moveToMapObj]);

    async function searchByWord(searchData) {
        const spatialSearch = searchData.engine ? searchData.engine === SEARCH_ENGINE_SPATIAL : ctx.spatialSearch;
        const notifyTimeout = showProcessingNotification(ctx);
        const visible = getVisibleBboxInfo(ctx, map);
        if (!visible) {
            return;
        }
        const bbox = visible.bounds;
        try {
            const response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/search/search`, {
                apiCache: true,
                ...(spatialSearch ? { abortControllerKey: 'spatialSearch' } : {}),
                params: {
                    lat: searchData.latlng.lat,
                    lon: searchData.latlng.lng,
                    northWest: `${Number(bbox.getNorthWest().lat).toFixed(BBOX_COORDS_DECIMALS)},${Number(bbox.getNorthWest().lng).toFixed(BBOX_COORDS_DECIMALS)}`,
                    southEast: `${Number(bbox.getSouthEast().lat).toFixed(BBOX_COORDS_DECIMALS)},${Number(bbox.getSouthEast().lng).toFixed(BBOX_COORDS_DECIMALS)}`,
                    text: searchData.query,
                    locale: i18n.language,
                    baseSearch: searchData.baseSearch,
                    ...(spatialSearch ? { spatial: true } : {}),
                    ...getCurrentTimeParams(),
                },
            });
            if (response?.ok) {
                const data = await response.json();
                const trackFeatures = searchCloudTrackFeatures({
                    listFiles: ctx.listFiles,
                    query: searchData.query,
                    collator: searchCollator,
                });
                const favoriteFeatures = searchFavoriteFeatures({
                    favorites: ctx.favorites,
                    query: searchData.query,
                    collator: searchCollator,
                });
                const features = [...trackFeatures, ...favoriteFeatures, ...(data?.features ?? [])];
                const favGroupMap = buildFavGroupMap(favoriteFeatures);
                ctx.setSearchFavoriteGroupIds(favGroupMap);
                ctx.setSearchVisibleLevel(0);
                ctx.setSearchResult({ ...data, features });
            } else if (!response?.aborted) {
                ctx.setSearchFavoriteGroupIds(null);
                ctx.setSearchVisibleLevel(0);
                ctx.setSearchResult(null);
            }
        } catch (e) {
            if (e?.name !== 'AbortError') throw e;
            // AbortError: search was cancelled by a newer request — ignore silently
        } finally {
            clearTimeout(notifyTimeout);
            ctx.setProcessingSearch(false);
        }
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
                if (ctx.searchQuery?.type) {
                    const category = PoiManager.formattingPoiFilter(ctx.searchQuery?.query, true);
                    removeCategory(category);
                }
            } else {
                if (ctx.searchResult?.features && !ctx.searchQuery?.type) {
                    const layers = await createSearchLayer({
                        objList: filterByVisibleLevel(
                            ctx.searchResult.features,
                            ctx.spatialSearch,
                            ctx.searchVisibleLevel
                        ),
                    });
                    removeOldSearchLayer();
                    searchLayers.current = layers;
                    layers.addTo(map).on('click', onClick);
                }
            }
        };

        addAsyncLayers().then();
    }, [ctx.searchResult, ctx.searchVisibleLevel]);

    function onClick(e) {
        ctx.setCurrentObjectType(OBJECT_SEARCH);

        const poi = {
            options: e.sourceTarget.options,
            latlng: e.sourceTarget._latlng,
            mapObj: true,
        };
        recentSaver(POI_OBJECTS_KEY, poi);
        ctx.setSelectedWpt({ poi, id: e.sourceTarget.options?.idObj });
        if (poi.options[CATEGORY_TYPE] === searchTypeMap.POI) {
            navigateToPoi({ poi }, navigate);
        }
    }

    async function createSearchLayer({ objList }) {
        const visibleObjList = filterByVisibleBounds(objList, getVisibleBboxInfo(ctx, map)?.bounds);
        const matchedAmenityFeatures = createMatchedAmenityFeatures(visibleObjList);
        const innerCache = await createPoiCache({
            poiList: [...visibleObjList, ...matchedAmenityFeatures],
            poiIconCache: ctx.poiIconCache,
        });
        updatePoiCache(ctx, innerCache);

        const center = map.getCenter();
        const zoom = map.getZoom();
        const latitude = center.lat;
        // FAVORITE and GPX_TRACK are user objects rendered by their own layers — skip map markers for them.
        const USER_OBJECT_TYPES = new Set([searchTypeMap.FAVORITE, searchTypeMap.GPX_TRACK]);
        const mapMarkerFeatures = visibleObjList.filter((f) => !USER_OBJECT_TYPES.has(f.properties?.[CATEGORY_TYPE]));

        const { mainMarkers, secondaryMarkers } = clusterMarkers({
            places: mapMarkerFeatures,
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

        const matchedAmenityMarkerLayers = await Promise.all(
            matchedAmenityFeatures.map(async (obj) => {
                const finalIconName = PoiManager.getIconNameForPoiType({
                    iconKeyName: obj.properties[ICON_KEY_NAME],
                    typeOsmTag: obj.properties[TYPE_OSM_TAG],
                    typeOsmValue: obj.properties[TYPE_OSM_VALUE],
                    iconName: obj.properties[POI_ICON_NAME],
                });
                const icon = await getPoiIcon(obj, innerCache, finalIconName);
                const coord = obj.geometry.coordinates;
                return new L.Marker(new L.LatLng(coord[1], coord[0]), {
                    ...obj.properties,
                    idObj: getObjIdSearch(obj),
                    title: obj.properties[POI_NAME],
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
            addMarkerTooltip({
                marker,
                setSelectedId: ctx.setSelectedWptId,
                mainStyle: true,
                text: marker.options[POI_NAME] ?? marker.options[CATEGORY_NAME],
                latlng: marker._latlng,
                iconSize: DEFAULT_ICON_SIZE,
                map,
                ctx,
                type: SEARCH_LAYER_ID,
            });
        });

        simpleMarkersArr.getLayers().forEach((marker) => {
            addMarkerTooltip({
                marker,
                setSelectedId: ctx.setSelectedWptId,
                text: marker.options[POI_NAME] ?? marker.options[CATEGORY_NAME],
                latlng: marker._latlng,
                map,
                ctx,
                type: SEARCH_LAYER_ID,
            });
        });
        matchedAmenityMarkerLayers.forEach((marker) => {
            addMarkerTooltip({
                marker,
                setSelectedId: ctx.setSelectedWptId,
                mainStyle: true,
                text: marker.options[POI_NAME] ?? marker.options[CATEGORY_NAME],
                latlng: marker._latlng,
                iconSize: DEFAULT_ICON_SIZE,
                map,
                ctx,
                type: SEARCH_LAYER_ID,
            });
        });
        const layers = [...mainMarkersLayers, ...matchedAmenityMarkerLayers, ...simpleMarkersArr.getLayers()];

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

    function searchByCategory(searchData) {
        let category = searchData.type;
        let lang = searchData.lang;

        const brandInfo = parseBrandType(searchData.type);
        if (brandInfo) {
            category = brandInfo.brandName;
            lang = brandInfo.lang;
        }

        const newCategory = { category, lang };
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

function filterByVisibleLevel(features, spatialSearch, visibleLevel) {
    if (!spatialSearch) return features;

    return (features ?? []).filter((f) => (f?.properties?.[WEB_VISIBLE_LEVEL] ?? 0) <= visibleLevel);
}

function createMatchedAmenityFeatures(features) {
    const featureByKey = new Map();

    (features ?? []).forEach((feature) => {
        const hoverIdObj = getObjIdSearch(feature);
        // The first matched object is represented by the main search result marker.
        getAdditionalMatchedAmenityObjects(feature?.properties?.[MATCHED_OBJECTS]).forEach((obj) => {
            if (!Number.isFinite(obj.lat) || !Number.isFinite(obj.lon)) {
                return;
            }

            const key = obj[POI_ID] ?? `${obj.lat.toFixed(6)},${obj.lon.toFixed(6)}:${obj[POI_NAME] ?? obj.name}`;
            const existing = featureByKey.get(key);
            if (existing) {
                existing.properties.hoverIdObjs.push(hoverIdObj);
                return;
            }

            featureByKey.set(key, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [obj.lon, obj.lat],
                },
                properties: {
                    ...getMatchedAmenityProperties(obj),
                    hoverIdObjs: [hoverIdObj],
                },
            });
        });
    });

    return Array.from(featureByKey.values());
}

function filterByVisibleBounds(features, bounds) {
    if (!bounds) return features ?? [];

    return (features ?? []).filter((f) => {
        const coord = f?.geometry?.coordinates;
        if (!coord) {
            return false;
        }

        return bounds.contains(L.latLng(coord[1], coord[0]));
    });
}
