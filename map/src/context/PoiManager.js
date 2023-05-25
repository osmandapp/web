import {get} from "axios";
import icons from "../generated/poiicons.json";

const POI_CATEGORIES = 'poiCategories';
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
    if (icons.includes(`mx_${iconKeyName}.svg`)) {
        return iconKeyName;
    } else if (icons.includes(`mx_${typeOsmTag} ${typeOsmValue}.svg`)) {
        return `${typeOsmTag} ${typeOsmValue}`;
    } else if (iconName !== 'null' && icons.includes(`mx_${iconName}.svg`)) {
        return iconName;
    } else {
        return PoiManager.DEFAULT_POI_ICON;
    }
}

const PoiManager = {
    getPoiCategories,
    searchPoiCategories,
    getIconNameForPoiType,
    DEFAULT_POI_ICON: DEFAULT_POI_ICON,
    DEFAULT_POI_COLOR: DEFAULT_POI_COLOR,
    DEFAULT_SHAPE_COLOR: DEFAULT_SHAPE_COLOR
}

export default PoiManager;