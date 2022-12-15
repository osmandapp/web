import MarkerOptions from "../map/markers/MarkerOptions";

const DEFAULT_GROUP_NAME = 'favorites';
const DEFAULT_TAB_ICONS = "used";
const FAVORITE_GROUP_FOLDER = "/map/images/poi_categories";
const DEFAULT_GROUP_WPT_COLOR = '#eecc22';
const colors = ['#10c0f0', '#1010a0', '#eecc22', '#88e030', '#eeee10', '#00842b', '#ff5020', '#8e2512', '#e044bb', '#000001', '#d00d0d', '#a71de1'];
const shapes = [MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE, MarkerOptions.BACKGROUND_WPT_SHAPE_OCTAGON, MarkerOptions.BACKGROUND_WPT_SHAPE_SQUARE];

function getShapesSvg(color) {
    let res = {};
    shapes.forEach(shape => {
        res[`${shape}`] = MarkerOptions.getSvgBackground(color, shape);
    })
    return res;
}

function getGroupNameFromPointsGroups(name) {
    return name === DEFAULT_GROUP_NAME ? "" : name;
}

const FavoriteManager = {
    getShapesSvg,
    getGroupNameFromPointsGroups,
    DEFAULT_TAB_ICONS: DEFAULT_TAB_ICONS,
    FAVORITE_GROUP_FOLDER: FAVORITE_GROUP_FOLDER,
    DEFAULT_GROUP_NAME:DEFAULT_GROUP_NAME,
    DEFAULT_GROUP_WPT_COLOR:DEFAULT_GROUP_WPT_COLOR,
    colors: colors,
    shapes: shapes,
}

export default FavoriteManager;