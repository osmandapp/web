import {get} from "axios";

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

const PoiManager = {
    getPoiCategories,
    DEFAULT_POI_ICON: DEFAULT_POI_ICON,
    DEFAULT_POI_COLOR: DEFAULT_POI_COLOR,
    DEFAULT_SHAPE_COLOR: DEFAULT_SHAPE_COLOR
}

export default PoiManager;