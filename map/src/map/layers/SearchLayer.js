import { apiGet } from '../../util/HttpApi';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import AppContext, { OBJECT_SEARCH } from '../../context/AppContext';
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
import { getPoiIcon, POI_LAYER_ID } from './PoiLayer';
import L from 'leaflet';
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
    COLOR_NAME_EXTENSION,
    BACKGROUND_TYPE_EXTENSION,
} from '../../infoblock/components/wpt/WptTagsProvider';
import { changeIconColor, createPoiIcon, DEFAULT_ICON_SIZE } from '../markers/MarkerOptions';
import i18n from '../../i18n';
import { clusterMarkers, addMarkerTooltip, createSecondaryMarker } from '../util/Clusterizer';
import { useSelectMarkerOnMap } from '../../util/hooks/map/useSelectMarkerOnMap';
import useZoomMoveMapHandlers from '../../util/hooks/map/useZoomMoveMapHandlers';
import { getIconByType } from '../../manager/SearchManager';
import { BBOX_COORDS_DECIMALS, showProcessingNotification } from '../../manager/GlobalManager';
import { getVisibleBboxInfo } from './MapStateLayer';
import { findFeatureGroupById, getIconFromMap, panToIfNeeded } from '../util/MapManager';
import { hideMarkersNearPin } from '../util/MarkerSelectionService';
import { POI_OBJECTS_KEY, useRecentDataSaver } from '../../util/hooks/menu/useRecentDataSaver';
import { useNavigate } from 'react-router-dom';
import { getCurrentTimeParams } from '../../util/Utils';
import { getGpxFiles, prepareName, EMPTY_FILE_NAME } from '../../manager/track/TracksManager';
import { createFavoritePoiIcon, resolveFavoriteMarkerForSearch } from '../../manager/FavoritesManager';
import { addFavoriteToMap } from '../../menu/favorite/FavoriteItem';

export const SEARCH_TYPE_CATEGORY = 'category';
export const SEARCH_LAYER_ID = 'search-layer';

export const SEARCH_ICON_MAP_LOCATION = 'location';
export const SEARCH_ICON_MAP_BUILDING = 'house';
export const SEARCH_ICON_MAP_STREET = 'street';
export const SEARCH_ICON_MAP_INTERSECTION = 'intersection';
export const SEARCH_ICON_MAP_GPX_TRACK = 'gpx_track';

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

function searchIncludes(text, query, collator) {
    const textChars = [...String(text ?? '')];
    const queryStr = String(query ?? '');

    if (!queryStr) {
        return true;
    }

    const queryLength = [...queryStr].length;

    for (let i = 0; i <= textChars.length - queryLength; i++) {
        const candidate = textChars.slice(i, i + queryLength).join('');

        if (collator.compare(candidate, queryStr) === 0) {
            return true;
        }
    }

    return false;
}

function searchFavoriteFeatures({ favorites, query, collator }) {
    const q = String(query ?? '').trim();
    if (!q || !favorites?.groups?.length || !favorites.mapObjs) {
        return [];
    }

    return favorites.groups
        .filter((group) => group?.id)
        .flatMap((group) => {
            const wpts = favorites.mapObjs[group.id]?.wpts;
            if (!wpts?.length) return [];

            return wpts
                .filter(
                    (wpt) =>
                        wpt?.name &&
                        wpt.lat != null &&
                        wpt.lon != null &&
                        (searchIncludes(wpt.name, q, collator) || searchIncludes(wpt.desc ?? '', q, collator))
                )
                .map((wpt) => ({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [wpt.lon, wpt.lat],
                    },
                    properties: {
                        [CATEGORY_TYPE]: searchTypeMap.FAVORITE,
                        [CATEGORY_NAME]: wpt.category,
                        [POI_NAME]: wpt.name,
                        [FAVORITE_HIT_GROUP_ID]: group.id,
                        [ICON_KEY_NAME]: wpt.icon,
                        [COLOR_NAME_EXTENSION]: wpt.color,
                        [BACKGROUND_TYPE_EXTENSION]: wpt.background,
                        [FINAL_POI_ICON_NAME]: wpt.icon,
                        ...(wpt.address ? { address: wpt.address } : {}),
                    },
                }));
        });
}

function searchCloudTrackFeatures({ listFiles, query, collator }) {
    const q = String(query ?? '').trim();
    if (!q || !listFiles?.uniqueFiles) return [];

    return getGpxFiles(listFiles)
        .filter((f) => !f.name.endsWith(EMPTY_FILE_NAME) && searchIncludes(prepareName(f.name, true), q, collator))
        .map((f) => ({
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [0, 0] },
            properties: {
                [CATEGORY_TYPE]: searchTypeMap.GPX_TRACK,
                [CATEGORY_NAME]: f.name,
            },
        }));
}

export default function SearchLayer() {
    const ctx = useContext(AppContext);
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
            panToIfNeeded(map, { lat: ctx.zoomToCoords.lat, lon: ctx.zoomToCoords.lon });
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
    }, [zoom, move]);

    useEffect(() => {
        if (ctx.moveToMapObj) {
            const [lng, lat] = ctx.moveToMapObj.geometry.coordinates;
            panToIfNeeded(map, { lat, lng });
        }
    }, [ctx.moveToMapObj]);

    async function searchByWord(searchData) {
        const notifyTimeout = showProcessingNotification(ctx);
        const visible = getVisibleBboxInfo(ctx, map);
        if (!visible) {
            return;
        }
        const bbox = visible.bounds;
        try {
            const response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/search/search`, {
                apiCache: true,
                params: {
                    lat: searchData.latlng.lat,
                    lon: searchData.latlng.lng,
                    northWest: `${Number(bbox.getNorthWest().lat).toFixed(BBOX_COORDS_DECIMALS)},${Number(bbox.getNorthWest().lng).toFixed(BBOX_COORDS_DECIMALS)}`,
                    southEast: `${Number(bbox.getSouthEast().lat).toFixed(BBOX_COORDS_DECIMALS)},${Number(bbox.getSouthEast().lng).toFixed(BBOX_COORDS_DECIMALS)}`,
                    text: searchData.query,
                    locale: i18n.language,
                    baseSearch: searchData.baseSearch,
                    ...getCurrentTimeParams(),
                },
            });
            if (response?.ok) {
                const data = await response.json();
                const collator = ctx.searchTextCollator;
                const cloudFeatures = searchCloudTrackFeatures({
                    listFiles: ctx.listFiles,
                    query: searchData.query,
                    collator,
                });
                const favoriteFeatures = searchFavoriteFeatures({
                    favorites: ctx.favorites,
                    query: searchData.query,
                    collator,
                });
                const features = [...cloudFeatures, ...favoriteFeatures, ...(data?.features ?? [])];
                ctx.setSearchResult({ ...data, features });
            } else {
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
        const opts = e.sourceTarget.options;
        if (opts[CATEGORY_TYPE] === searchTypeMap.FAVORITE) {
            const groupId = opts[FAVORITE_HIT_GROUP_ID];
            const wptName = opts[POI_NAME] ?? opts[CATEGORY_NAME];
            const resolved = resolveFavoriteMarkerForSearch(ctx, groupId, wptName);
            if (resolved) {
                addFavoriteToMap({ group: resolved.group, marker: resolved.marker, ctx, mapObj: true });
            }
            return;
        }

        ctx.setCurrentObjectType(OBJECT_SEARCH);

        const poi = {
            options: opts,
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
                let title =
                    objType === searchTypeMap.FAVORITE
                        ? (obj.properties[POI_NAME] ?? obj.properties[CATEGORY_NAME])
                        : obj.properties[CATEGORY_NAME];
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
                } else if (objType === searchTypeMap.FAVORITE) {
                    const p = obj.properties;
                    icon = createFavoritePoiIcon({
                        icon: p[ICON_KEY_NAME],
                        color: p[COLOR_NAME_EXTENSION],
                        background: p[BACKGROUND_TYPE_EXTENSION],
                    });
                    finalIconName = p[ICON_KEY_NAME] ?? null;
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
