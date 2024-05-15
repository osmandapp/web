import { apiGet } from '../util/HttpApi';
import icons from '../resources/generated/poiicons.json';
import _ from 'lodash';
import { ICON_KEY_NAME, ICON_NAME, TYPE_OSM_TAG, TYPE_OSM_VALUE } from '../infoblock/components/wpt/WptTagsProvider';
import { getIconUrlByName } from '../map/markers/MarkerOptions';

const POI_CATEGORIES = 'poiCategories';
const TOP_POI_FILTERS = 'topPoiFilters';
export const DEFAULT_POI_ICON = 'craft_default';
export const DEFAULT_POI_COLOR = '#f8931d';
export const DEFAULT_ICON_COLOR = '#ffffff';
export const DEFAULT_POI_SHAPE = 'circle';

const poiFilters = {
    accomodation: ['Accomodation'],
    cafe_and_restaurant: ['Cafe and restaurant'],
    charging_station: ['Charging station'],
    emergency: ['Emergency'],
    entertainment: ['Entertainment', 'Leisure'],
    filling_station: ['Filling station'],
    finance: ['Finance'],
    healthcare: ['Healthcare'],
    parking: ['Parking'],
    personal_transport: ['Personal transport'],
    public_transport: ['Public transport'],
    routes: ['Routes'],
    seamark: ['Seamark', 'Nautical'],
    shop: ['Shop'],
    shop_food: ['Shop food', 'Convenience store and supermarket'],
    sightseeing: ['Sightseeing'],
    sport: ['Sport'],
    sustenance: ['Sustenance', 'Food'],
    tourism: ['Tourism'],
    water_filter: ['Water filter', 'Water'],
};

async function getPoiCategories() {
    let categories = JSON.parse(localStorage.getItem(POI_CATEGORIES));
    if (
        categories &&
        typeof categories === 'object' &&
        Object.keys(categories).length > 0 &&
        categories.entertainment?.length > 0
    ) {
        return categories; // thoroughly verified categories from localStorage
    } else {
        let response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/search/get-poi-categories`);
        if (response.data) {
            localStorage.setItem(POI_CATEGORIES, JSON.stringify(response.data));
            return response.data;
        }
    }
}

async function getTopPoiFilters() {
    let filters = JSON.parse(localStorage.getItem(TOP_POI_FILTERS));
    if (filters?.length > 0) {
        return filters;
    } else {
        let response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/search/get-top-filters`);
        if (response.data) {
            localStorage.setItem(TOP_POI_FILTERS, JSON.stringify(response.data));
            return response.data;
        }
    }
}

async function searchPoiCategories(search) {
    let response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/search/search-poi-categories`, {
        params: {
            search: search,
        },
    });
    if (!_.isEmpty(response?.data)) {
        return response.data;
    } else {
        console.error(`Poi category not found`);
    }
}

function getIconNameForPoiType({ iconKeyName, typeOsmTag = '', typeOsmValue = '', iconName = '', useDefault = true }) {
    if (icons.includes(`mx_${typeOsmTag}_${typeOsmValue}.svg`)) {
        return `${typeOsmTag}_${typeOsmValue}`;
    } else if (icons.includes(`mx_${iconKeyName}.svg`)) {
        return iconKeyName;
    } else if (icons.includes(`mx_topo_${iconKeyName}.svg`)) {
        return `topo_${iconKeyName}`;
    } else if (iconName !== 'null' && icons.includes(`mx_${iconName}.svg`)) {
        return iconName;
    } else {
        return useDefault ? DEFAULT_POI_ICON : null;
    }
}

export function getIconName(obj) {
    if (icons.includes(`mx_${obj.key}.svg`)) {
        return obj.key;
    } else if (icons.includes(`mx_${obj.value}.svg`)) {
        return obj.value;
    }
    return null;
}

function formattingPoiFilter(type, rename) {
    if (type) {
        if (rename) {
            type = poiFilters[type].length > 1 ? poiFilters[type][1] : poiFilters[type][0];
        } else {
            type = poiFilters[type][0];
        }
    }
    return type;
}

function formattingPoiType(type) {
    if (type) {
        type = type.replaceAll('_', ' ');
        type = type.charAt(0).toUpperCase() + type.slice(1);
    }
    return type;
}

function preparePoiFilterIcon(filter) {
    if (filter === 'water_filter') {
        return 'amenity_drinking_water';
    }
    return filter;
}

/**
 * Asynchronously creates a cache of Point of Interest (POI) icons.
 *
 * @param {Array} poiList - The list of POIs for which icons should be cached.
 * @param {Object} obj - An optional object representing a single POI.
 * @param {Object} poiIconCache - The existing cache of POI icons.
 * @param {String} icon - An optional icon name.
 * @returns {Object} - The updated cache of POI icons.
 */
export async function createPoiCache({ poiList = null, obj = null, poiIconCache, icon = null }) {
    const iconCache = {};
    const arr = icon ? [icon] : poiList ?? [obj];
    for (const poi of arr) {
        let iconWpt;
        if (icon) {
            iconWpt = icon;
        } else if (obj) {
            iconWpt = getIconName(obj);
        } else {
            iconWpt = getIconNameForPoiType({
                iconKeyName: poi.properties[ICON_KEY_NAME],
                typeOsmTag: poi.properties[TYPE_OSM_TAG],
                typeOsmValue: poi.properties[TYPE_OSM_VALUE],
                iconName: poi.properties[ICON_NAME],
            });
        }
        if (iconWpt) {
            // If the icon is already in the existing cache, copy it to the updated cache
            if (poiIconCache[iconWpt]) {
                iconCache[iconWpt] = poiIconCache[iconWpt];
            } else {
                // If the icon is not in the existing cache and not yet in the updated cache
                if (!iconCache[iconWpt]) {
                    try {
                        const response = await fetch(getIconUrlByName('poi', iconWpt));
                        iconCache[iconWpt] = await response.text();
                    } catch (error) {
                        console.error(`Failed to fetch SVG for iconWpt ${iconWpt}: ${error}`);
                    }
                }
            }
        }
    }
    return iconCache;
}

export function updatePoiCache(ctx, newData) {
    ctx.poiIconCache = {
        ...ctx.poiIconCache,
        ...newData,
    };
    ctx.setPoiIconCache({ ...ctx.poiIconCache });
}

const PoiManager = {
    getPoiCategories,
    searchPoiCategories,
    getIconNameForPoiType,
    getTopPoiFilters,
    formattingPoiType,
    formattingPoiFilter,
    preparePoiFilterIcon,
    poiFilters,
};

export default PoiManager;
