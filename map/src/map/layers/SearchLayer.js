import { apiGet } from '../../util/HttpApi';
import { useContext, useEffect, useState } from 'react';
import AppContext, { OBJECT_SEARCH, OBJECT_TYPE_POI } from '../../context/AppContext';
import PoiManager, {
    createPoiCache,
    DEFAULT_ICON_COLOR,
    DEFAULT_POI_COLOR,
    DEFAULT_POI_SHAPE,
    updatePoiCache,
} from '../../manager/PoiManager';
import { useMap } from 'react-leaflet';
import { getPoiIcon } from './PoiLayer';
import L from 'leaflet';
import {
    FINAL_POI_ICON_NAME,
    ICON_KEY_NAME,
    POI_ICON_NAME,
    TYPE_OSM_TAG,
    TYPE_OSM_VALUE,
} from '../../infoblock/components/wpt/WptTagsProvider';
import { changeIconColor, createPoiIcon, DEFAULT_ICON_SIZE } from '../markers/MarkerOptions';
import i18n from '../../i18n';
import { clusterMarkers, createSecondaryMarker } from '../util/Clusterizer';

export const SEARCH_TYPE_CATEGORY = 'category';
export const SEARCH_LAYER_ID = 'search-layer';
export const SEARCH_ICON_MAP_OBJ = 'address';
export const SEARCH_ICON_MAP_OBJ_URL = '/map/images/map_icons/ic_action_marker_dark.svg';
export const ZOOM_TO_MAP = 17;

export function findFeatureGroupById(map, id) {
    let foundGroup = null;
    map.eachLayer(function (layer) {
        if (layer instanceof L.FeatureGroup && layer.options.id === id) {
            foundGroup = layer;
        }
    });
    return foundGroup;
}

export default function SearchLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [zoom, setZoom] = useState(null);
    const [move, setMove] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState(null);

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

    useEffect(() => {
        if (ctx.searchQuery?.search) {
            removeOldSearchLayer();
            const searchData = ctx.searchQuery.search;
            if (ctx.searchQuery.type === SEARCH_TYPE_CATEGORY) {
                const category = PoiManager.formattingPoiFilter(searchData?.query, true);
                searchByCategory(category);
                setSelectedCategory(category);
            } else {
                if (ctx.searchQuery.latlng) {
                    searchByWord(searchData.query, ctx.searchQuery.latlng).then();
                } else {
                    console.debug('SearchLayer: search query without latlng');
                }
            }
        } else {
            if (selectedCategory) {
                removeCategory(selectedCategory);
            }
        }
    }, [ctx.searchQuery]);

    useEffect(() => {
        const updateAsyncLayers = async () => {
            const searchLayer = findFeatureGroupById(map, SEARCH_LAYER_ID);

            if (searchLayer) {
                const newLayers = await createSearchLayer({
                    objList: ctx.searchResult?.features,
                });
                searchLayer.clearLayers();
                searchLayer.addLayer(newLayers);
            }
        };

        if (ctx.searchResult?.features && ctx.searchQuery.type !== SEARCH_TYPE_CATEGORY) {
            updateAsyncLayers().then();
        }
    }, [zoom, move]);

    useEffect(() => {
        if (ctx.zoomToMapObj) {
            const lat = ctx.zoomToMapObj.geometry.coordinates[1];
            const lon = ctx.zoomToMapObj.geometry.coordinates[0];
            map.setView([lat, lon], ZOOM_TO_MAP);
        }
    }, [ctx.zoomToMapObj]);

    async function searchByWord(query, latlng) {
        let response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/search/search`, {
            apiCache: true,
            params: {
                lat: latlng.lat,
                lon: latlng.lng,
                text: query,
                locale: i18n.language,
            },
        });
        if (response.ok) {
            let data = await response.json();
            ctx.setSearchResult(data);
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
                if (ctx.searchQuery?.type === SEARCH_TYPE_CATEGORY) {
                    const category = PoiManager.formattingPoiFilter(ctx.searchQuery?.search?.query, true);
                    removeCategory(category);
                }
            } else {
                if (ctx.searchResult?.features && ctx.searchQuery.type !== SEARCH_TYPE_CATEGORY) {
                    const layers = await createSearchLayer({
                        objList: ctx.searchResult?.features,
                    });
                    layers.addTo(map).on('click', onClick);
                }
            }
        };
        addAsyncLayers().then();
    }, [ctx.searchResult]);

    function onClick(e) {
        ctx.setCurrentObjectType(OBJECT_SEARCH);
        const poi = {
            options: e.sourceTarget.options,
            latlng: e.sourceTarget._latlng,
        };
        ctx.setSelectedWpt({ poi });
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
                const objType = obj.properties['web_type'];
                let title = obj.properties['web_name'];
                let finalIconName;
                let icon;
                if (objType === 'POI') {
                    finalIconName = PoiManager.getIconNameForPoiType({
                        iconKeyName: obj.properties[ICON_KEY_NAME],
                        typeOsmTag: obj.properties[TYPE_OSM_TAG],
                        typeOsmValue: obj.properties[TYPE_OSM_VALUE],
                        iconName: obj.properties[POI_ICON_NAME],
                    });
                    icon = await getPoiIcon(obj, innerCache, finalIconName);
                } else {
                    finalIconName = SEARCH_ICON_MAP_OBJ;
                    icon = await getSearchIcon(obj, innerCache, finalIconName);
                }
                const coord = obj.geometry.coordinates;
                return new L.Marker(new L.LatLng(coord[1], coord[0]), {
                    ...obj.properties,
                    title: title,
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

        const layers = [...mainMarkersLayers, simpleMarkersArr];

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
            if (finalIconName === SEARCH_ICON_MAP_OBJ) {
                const response = await fetch(SEARCH_ICON_MAP_OBJ_URL);
                svgData = await response.text();
                ctx.setPoiIconCache((prevState) => ({
                    ...prevState,
                    [SEARCH_ICON_MAP_OBJ]: svgData,
                }));
            }
        }
        const coloredSvg = changeIconColor(svgData, DEFAULT_ICON_COLOR);
        const iconHtml = createPoiIcon({
            color: DEFAULT_POI_COLOR,
            background: DEFAULT_POI_SHAPE,
            svgIcon: coloredSvg,
        }).options.html;
        return L.divIcon({ html: iconHtml });
    }

    function searchByCategory(category) {
        if (!ctx.showPoiCategories.includes(category)) {
            ctx.showPoiCategories.push(category);
        }
        ctx.setShowPoiCategories([...ctx.showPoiCategories]);
    }

    function removeCategory(category) {
        const index = ctx.showPoiCategories.indexOf(category);
        if (index > -1) {
            ctx.showPoiCategories.splice(index, 1);
        }
        ctx.setShowPoiCategories([...ctx.showPoiCategories]);
    }
}
