import {get} from "axios";
import icons from "../generated/poiicons.json";

const POI_CATEGORIES = 'poiCategories';
const TOP_POI_FILTERS = 'topPoiFilters';
const DEFAULT_POI_ICON = "craft_default";
const DEFAULT_POI_COLOR = '#f8931d';
const DEFAULT_SHAPE_COLOR = 'circle';

async function getPoiCategories() {
    let categories = JSON.parse(localStorage.getItem(POI_CATEGORIES));
    if (categories?.length > 0) {
        return categories;
    } else {
        let response = await get(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/search/get-poi-categories`);
        if (response.data) {
            localStorage.setItem(POI_CATEGORIES, JSON.stringify(response.data))
            return response.data;
        }
    }
}

async function getTopPoiFilters() {
    let filters = JSON.parse(localStorage.getItem(TOP_POI_FILTERS));
    if (filters?.length > 0) {
        return filters;
    } else {
        let response = await get(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/search/get-top-filters`);
        if (response.data) {
            localStorage.setItem(TOP_POI_FILTERS, JSON.stringify(response.data))
            return response.data;
        }
    }
}

async function searchPoiCategories(search) {
    let response = await get(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/search/search-poi-categories`,
        {
            params: {
                search: search,
            }
        }).catch();
    if (response.data) {
        return response.data;
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
        return PoiManager.DEFAULT_POI_ICON;
    }
}

function formattingPoiType(type) {
    if (type) {
        type = formattingPoiFilter(type);
        type = type.replaceAll("_", " ");
        type = type.charAt(0).toUpperCase() + type.slice(1);
    }
    return type;
}

function formattingPoiFilter(filter) {
    if (filter) {
        filter = filter.replaceAll("_filter", "");
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
    DEFAULT_POI_ICON: DEFAULT_POI_ICON,
    DEFAULT_POI_COLOR: DEFAULT_POI_COLOR,
    DEFAULT_SHAPE_COLOR: DEFAULT_SHAPE_COLOR
}

export default PoiManager;