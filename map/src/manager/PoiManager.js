import { apiGet } from '../util/HttpApi';
import icons from '../resources/generated/poiicons.json';
import _ from 'lodash';

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

function getIconNameForPoiType(iconKeyName, typeOsmTag, typeOsmValue, iconName) {
    if (icons.includes(`mx_${typeOsmTag}_${typeOsmValue}.svg`)) {
        return `${typeOsmTag}_${typeOsmValue}`;
    } else if (icons.includes(`mx_${iconKeyName}.svg`)) {
        return iconKeyName;
    } else if (icons.includes(`mx_topo_${iconKeyName}.svg`)) {
        return `topo_${iconKeyName}`;
    } else if (iconName !== 'null' && icons.includes(`mx_${iconName}.svg`)) {
        return iconName;
    } else {
        return DEFAULT_POI_ICON;
    }
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
