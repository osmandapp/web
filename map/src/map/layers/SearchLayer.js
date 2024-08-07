import { apiGet } from '../../util/HttpApi';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
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
    FINAL_ICON_NAME,
    ICON_KEY_NAME,
    ICON_NAME,
    TYPE_OSM_TAG,
    TYPE_OSM_VALUE,
} from '../../infoblock/components/wpt/WptTagsProvider';
import { changeIconColor, createPoiIcon } from '../markers/MarkerOptions';

export const SEARCH_TYPE_CATEGORY = 'category';
export const SEARCH_LAYER_ID = 'search-layer';
export const SEARCH_ICON_MAP_OBJ = 'address';
export const SEARCH_ICON_MAP_OBJ_URL = '/map/images/map_icons/ic_action_marker_dark.svg';

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

    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        if (ctx.searchQuery?.search) {
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

    async function searchByWord(query, latlng) {
        let response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/search/search`, {
            apiCache: true,
            params: {
                lat: latlng.lat,
                lon: latlng.lng,
                text: query,
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
                    layers.addTo(map);
                }
            }
        };
        addAsyncLayers().then();
    }, [ctx.searchResult]);

    async function createSearchLayer({ objList }) {
        const innerCache = await createPoiCache({ poiList: objList, poiIconCache: ctx.poiIconCache });
        updatePoiCache(ctx, innerCache);

        const layers = await Promise.all(
            objList.map(async (obj) => {
                const objType = obj.properties['web_type'];
                let title = obj.properties['web_name'];
                let finalIconName;
                let icon;
                if (objType === 'POI') {
                    finalIconName = PoiManager.getIconNameForPoiType({
                        iconKeyName: obj.properties[ICON_KEY_NAME],
                        typeOsmTag: obj.properties[TYPE_OSM_TAG],
                        typeOsmValue: obj.properties[TYPE_OSM_VALUE],
                        iconName: obj.properties[ICON_NAME],
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
                    [FINAL_ICON_NAME]: finalIconName,
                });
            })
        );

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
