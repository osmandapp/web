import {post} from "axios";
import MarkerOptions from "../map/markers/MarkerOptions";
import Utils from "../util/Utils";
import TracksManager from "./TracksManager";

const FAVORITE_FILE_TYPE = 'FAVOURITES';
const DEFAULT_GROUP_NAME = 'favorites';
const DEFAULT_TAB_ICONS = "used";
const FAVORITE_GROUP_FOLDER = "/map/images/poi_categories";
const DEFAULT_GROUP_WPT_COLOR = '#eecc22';
const FAV_FILE_PREFIX = "favorites-";
const DEFAULT_GROUP_NAME_POINTS_GROUPS = "";
const colors = ['#10c0f0', '#1010a0', '#eecc22', '#88e030', '#eeee10', '#00842b', '#ff5020', '#8e2512', '#e044bb', '#000001', '#d00d0d', '#a71de1'];
const shapes = [MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE, MarkerOptions.BACKGROUND_WPT_SHAPE_OCTAGON, MarkerOptions.BACKGROUND_WPT_SHAPE_SQUARE];

function GroupResult(clienttimems, updatetimems, data) {
    this.clienttimems = clienttimems;
    this.updatetimems = updatetimems;
    this.data = data;
}

function getShapesSvg(color) {
    let res = {};
    shapes.forEach(shape => {
        res[`${shape}`] = MarkerOptions.getSvgBackground(color, shape);
    })
    return res;
}

async function addFavorite(data, fileName, updatetime) {
    let resp = await post(`${process.env.REACT_APP_USER_API_SITE}/mapapi/fav/add`, data,
        {
            params: {
                fileName: fileName,
                updatetime: updatetime
            }
        }
    );
    if (resp.data) {
        let data = prepareTrackData(resp.data.details.trackData);
        return new GroupResult(resp.data.clienttime, resp.data.updatetime, data);
    }
}

async function deleteFavorite(data, fileName, updatetime) {
    let resp = await post(`${process.env.REACT_APP_USER_API_SITE}/mapapi/fav/delete`, data,
        {
            params: {
                fileName: fileName,
                updatetime: updatetime
            }
        }
    );
    if (resp.data) {
        let data = prepareTrackData(resp.data.details.trackData);
        return new GroupResult(resp.data.clienttime, resp.data.updatetime, data);
    }
}

async function updateFavorite(data, wptName, oldGroupName, newGroupName, oldGroupUpdatetime, newGroupUpdatetime, ind) {
    let resp = await post(`${process.env.REACT_APP_USER_API_SITE}/mapapi/fav/update`, data,
        {
            params: {
                wptName: wptName,
                oldGroupName: oldGroupName,
                newGroupName: newGroupName,
                oldGroupUpdatetime: oldGroupUpdatetime,
                newGroupUpdatetime: newGroupUpdatetime,
                ind: ind
            }
        }
    );
    if (resp.data) {
        let newGroupResp = null;
        let oldGroupResp = null;
        let newGroup = resp.data.respNewGroup;
        let oldGroup = resp.data.respOldGroup;
        if (newGroup) {
            let data = prepareTrackData(newGroup.details.trackData);
            newGroupResp = new GroupResult(newGroup.clienttime, newGroup.updatetime, data);
        }
        if (oldGroup && oldGroup !== '') {
            let data = prepareTrackData(oldGroup.details.trackData);
            oldGroupResp = new GroupResult(oldGroup.clienttime, oldGroup.updatetime, data);
        }

        return {
            newGroupResp: newGroupResp,
            oldGroupResp: oldGroupResp,
        }
    }
}

function prepareTrackData(data) {
    if (data) {
        if (typeof data === "string") {
            return JSON.parse(data.replace(/\bNaN\b/g, '"***NaN***"'), function (key, value) {
                if (value === "***NaN***") {
                    return key === "ele" ? TracksManager.NAN_MARKER : NaN;
                } else {
                    return value;
                }
            });
        } else {
            return data;
        }
    }
}

function orderList(items, defaultItem) {
    let list = [];
    let hiddenList = [];
    items && items.forEach(i => {
        if (i.name === defaultItem) {
            list.unshift(i);
        } else if (i.hidden) {
            hiddenList.push(i);
        } else {
            list.push(i);
        }
    })
    return list.concat(hiddenList);
}

function getColorGroup(ctx, groupName) {
    let currentGroup = ctx.favorites.groups.find(g => g.name === groupName);
    if (groupName === DEFAULT_GROUP_NAME) {
        groupName = DEFAULT_GROUP_NAME_POINTS_GROUPS;
    }
    if (currentGroup && currentGroup.pointsGroups[groupName]) {
        let color = currentGroup.pointsGroups[groupName].color;
        if (color) {
            return Utils.hexToArgb(color);
        }
    }
}

function createGroup(file) {
    file.folder = file.name.split(".")[0].replace(FavoritesManager.FAV_FILE_PREFIX, '');
    let pointsGroups = FavoritesManager.prepareTrackData(file.details.pointGroups);
    return {
        name: file.folder,
        updatetimems: file.updatetimems,
        file: file,
        pointsGroups: pointsGroups,
        hidden: isHidden(pointsGroups, file.folder)
    }
}

function isHidden(pointsGroups, name) {
    let group = pointsGroups[name];
    if (group) {
        for (let point of group.points) {
            if (point.ext.extensions.hidden === "true") {
                return true;
            }
        }
    }
    return false;
}

const FavoritesManager = {
    addFavorite,
    deleteFavorite,
    updateFavorite,
    prepareTrackData,
    getShapesSvg,
    orderList,
    getColorGroup,
    createGroup,
    DEFAULT_TAB_ICONS: DEFAULT_TAB_ICONS,
    FAVORITE_GROUP_FOLDER: FAVORITE_GROUP_FOLDER,
    DEFAULT_GROUP_NAME: DEFAULT_GROUP_NAME,
    DEFAULT_GROUP_WPT_COLOR: DEFAULT_GROUP_WPT_COLOR,
    FAVORITE_FILE_TYPE: FAVORITE_FILE_TYPE,
    FAV_FILE_PREFIX: FAV_FILE_PREFIX,
    colors: colors,
    shapes: shapes
}

export default FavoritesManager;