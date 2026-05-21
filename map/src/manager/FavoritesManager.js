import MarkerOptions, {
    changeIconSizeWpt,
    createPoiIcon,
    getBackground,
    removeShadowFromIconWpt,
} from '../map/markers/MarkerOptions';
import Utils, { getDistance, quickNaNfix } from '../util/Utils';
import { hexToRgba } from '../util/ColorUtil';
import isEmpty from 'lodash-es/isEmpty';
import { apiPost } from '../util/HttpApi';
import TracksManager from './track/TracksManager';
import { refreshGlobalFiles } from './track/SaveTrackManager';
import { OBJECT_SEARCH, OBJECT_TYPE_FAVORITE, FAVORITES_URL_PARAM_FOLDER } from '../context/AppContext';
import FavoriteHelper from '../infoblock/components/favorite/FavoriteHelper';
import { getUniqFileId, MAIN_URL_WITH_SLASH, FAVORITES_URL } from './GlobalManager';
import { getFavoriteFromDB, saveFavoriteToDB } from '../context/FavoriteStorage';

export const FAVORITE_FILE_TYPE = 'FAVOURITES';
export const DEFAULT_FAV_GROUP_NAME = 'favorites';
export const PERSONAL_FAV_GROUP_NAME = 'personal';
const DEFAULT_TAB_ICONS = 'used';
const DEFAULT_GROUP_WPT_COLOR = '#eecc22';
const FAV_FILE_PREFIX = 'favorites-';
export const LOCATION_UNAVAILABLE = 'loc_unavailable';
export const DEFAULT_GROUP_NAME_POINTS_GROUPS = '';
export const FAVORITE_PLACEHOLDER_MAP = { '_-_': ':', '_%_': '/' };

export const HIDDEN_TRUE = 'true';
export const HIDDEN_FALSE = 'false';

export function normalizeFavoritePointsGroupName(groupName) {
    return groupName === DEFAULT_FAV_GROUP_NAME ? DEFAULT_GROUP_NAME_POINTS_GROUPS : groupName;
}

const colors = [
    '#10c0f0',
    '#1010a0',
    '#eecc22',
    '#88e030',
    '#eeee10',
    '#00842b',
    '#ff5020',
    '#8e2512',
    '#e044bb',
    '#000001',
    '#d00d0d',
    '#a71de1',
];
const shapes = [
    MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE,
    MarkerOptions.BACKGROUND_WPT_SHAPE_OCTAGON,
    MarkerOptions.BACKGROUND_WPT_SHAPE_SQUARE,
];

function GroupResult(clienttimems, updatetimems, data) {
    this.clienttimems = clienttimems;
    this.updatetimems = updatetimems;
    this.data = data;
}

function getShapesSvg(color) {
    let res = {};
    // Convert OsmAnd color formats (#rrggbb / #aarrggbb) to a CSS color string
    // so SVG `fill="..."` honours alpha for transparent palette entries.
    const svgColor = hexToRgba(color);
    shapes.forEach((shape) => {
        res[shape] = getBackground(svgColor, shape);
    });
    return res;
}

// Try to add, refresh stale file, then retry once
async function addFavorite(data, group, ctx) {
    const fileName = normalizeGroupNameForFile(group?.file?.name ?? '');
    if (!fileName) {
        throw new Error('File name is required to add a favorite');
    }

    const postAdd = async (updatetime) => {
        try {
            return await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/fav/add`, data, {
                params: { fileName, updatetime },
                dataOnErrors: true,
                throwErrors: true,
            });
        } catch {
            return { data: null };
        }
    };

    const toResult = (resp) => {
        const td = prepareTrackData(resp.details.trackData);
        return new GroupResult(resp.clienttime, resp.updatetime, td);
    };

    try {
        let resp = await postAdd(group?.updatetimems);
        if (resp?.data) return toResult(resp.data);

        const files = await refreshGlobalFiles({
            ctx,
            type: OBJECT_TYPE_FAVORITE,
            updateMarkers: false,
        });

        const freshGroup = files.groups?.find((g) => g.name === group?.name);
        resp = await postAdd(freshGroup?.updatetimems);

        if (resp?.data) return toResult(resp.data);

        return null;
    } catch (err) {
        console.error('[addFavorite] failed:', err);
        return null;
    }
}

async function deleteFavorite(data, fileName, updatetime) {
    fileName = normalizeGroupNameForFile(fileName);
    const resp = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/fav/delete`, data, {
        params: {
            fileName,
            updatetime,
        },
    });
    if (resp.data) {
        let data = prepareTrackData(resp.data.details.trackData);
        return new GroupResult(resp.data.clienttime, resp.data.updatetime, data);
    }
}

async function updateFavorite(data, wptName, oldGroupName, newGroupName, oldGroupUpdatetime, newGroupUpdatetime, ind) {
    oldGroupName = normalizeGroupNameForFile(oldGroupName);
    newGroupName = normalizeGroupNameForFile(newGroupName);
    let resp = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/fav/update`, data, {
        params: {
            wptName: wptName,
            oldGroupName: oldGroupName,
            newGroupName: newGroupName,
            oldGroupUpdatetime: oldGroupUpdatetime,
            newGroupUpdatetime: newGroupUpdatetime,
            ind: ind,
        },
    });
    return prepareResult(resp);
}

export async function updateAllFavorites(group, data, hiddenChanged) {
    const groupName = normalizeFavoritePointsGroupName(group.name);
    let resp = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/fav/update-all-favorites`, data, {
        params: {
            fileName: group.file.name,
            groupName,
            updatetime: group.updatetimems,
            updateTimestamp: !hiddenChanged,
        },
    });
    return prepareResult(resp);
}

export async function updateFavoriteGroup(favGroupData, group, groupName) {
    if (!favGroupData || !group) {
        return;
    }
    const resp = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/fav/update-group`, favGroupData, {
        params: {
            fileName: group.file.name,
            groupName,
            updatetime: group.updatetimems,
        },
    });
    if (resp?.data) {
        const td = prepareTrackData(resp.data.details.trackData);
        return new GroupResult(resp.data.clienttime, resp.data.updatetime, td);
    }
}

export function prepareResult(resp) {
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
        };
    }
}

function prepareTrackData(data) {
    if (data) {
        if (typeof data === 'string') {
            return JSON.parse(quickNaNfix(data));
        } else {
            return data;
        }
    }
}

function orderList(items, defaultItem) {
    let list = [];
    let hiddenList = [];
    items &&
        items.forEach((i) => {
            if (i.name === defaultItem) {
                list.unshift(i);
            } else if (i.hidden) {
                hiddenList.push(i);
            } else {
                list.push(i);
            }
        });
    return list.concat(hiddenList);
}

function getColorGroup({ selectedFile = null, favoritesGroup = null, gpxFile = null, groupName }) {
    let color;
    groupName = normalizeFavoritePointsGroupName(groupName);
    if (selectedFile) {
        const currentGroup =
            selectedFile?.pointsGroups && !isEmpty(selectedFile?.pointsGroups) && selectedFile.pointsGroups[groupName];
        if (currentGroup) {
            color = currentGroup.color;
        }
    } else if (gpxFile || favoritesGroup) {
        const file = gpxFile || favoritesGroup;
        const currentGroup = file?.pointsGroups && !isEmpty(file?.pointsGroups) && file.pointsGroups[groupName];
        if (currentGroup) {
            color = currentGroup.color;
        }
    }
    if (color) {
        return hexToRgba(color);
    }
}

function createGroup(file) {
    file.folder = extractBaseFavFileName(file.name);
    return {
        id: getUniqFileId(file),
        sharedWithMe: file.sharedWithMe,
        name: file.folder,
        updatetimems: file.updatetimems,
        clienttimems: file.clienttimems,
        file,
        pointsGroups: {},
    };
}

function addHidden({ pointsGroups, groupName, favArr, mapId, menuId }) {
    groupName = normalizeFavoritePointsGroupName(groupName);
    let hidden = false;
    if (pointsGroups?.[groupName]) {
        if (pointsGroups[groupName].hidden !== undefined) {
            hidden = pointsGroups[groupName].hidden;
        } else {
            hidden = isHidden(pointsGroups, groupName);
        }
    }
    hidden = hidden ? HIDDEN_TRUE : HIDDEN_FALSE;
    // for map
    favArr.mapObjs[mapId].hidden = hidden;
    // for menu
    favArr.groups[menuId].hidden = hidden;

    return favArr;
}

function removePinnedFalse(pointsGroups, groupName) {
    const isPersonalGroup = groupName === PERSONAL_FAV_GROUP_NAME;
    const currentGroup = pointsGroups[groupName];

    if (!isPersonalGroup && currentGroup?.pinned === false) {
        delete currentGroup.pinned;
    }
}

export async function updateFavGroupPinned({ group, updatedPointsGroups, groupName, ctx }) {
    removePinnedFalse(updatedPointsGroups, groupName);

    const favGroupData = { pointsGroups: updatedPointsGroups };
    const result = await updateFavoriteGroup(favGroupData, group, groupName);
    if (!result) {
        return;
    }

    ctx.setFavorites((prev) => {
        const groups = prev.groups.map((g) => {
            const newPinnedGroup = result.data?.pointsGroups?.[groupName];
            if (g.id === group.id) {
                return {
                    ...g,
                    pinned: newPinnedGroup ? newPinnedGroup.pinned : g.pinned,
                    updatetimems: result.updatetimems ?? g.updatetimems,
                    clienttimems: result.clienttimems ?? g.clienttimems,
                };
            }
            return g;
        });
        return { ...prev, groups };
    });
}

function addPinned({ pointsGroups, groupName, favArr, menuId }) {
    const normalizedGroupName = normalizeFavoritePointsGroupName(groupName);
    const groupEntry = pointsGroups?.[normalizedGroupName];
    if (!groupEntry) {
        return favArr;
    }

    if (normalizedGroupName === PERSONAL_FAV_GROUP_NAME && groupEntry.pinned === undefined) {
        favArr.groups[menuId].pinned = true;
        return favArr;
    }

    favArr.groups[menuId].pinned = groupEntry.pinned;

    return favArr;
}

function getFavGroupName(pointsGroups, fileName) {
    const preparedFileName =
        fileName === DEFAULT_FAV_GROUP_NAME ? DEFAULT_GROUP_NAME_POINTS_GROUPS : extractBaseFavFileName(fileName);
    const groupName = Object.keys(pointsGroups).find(
        (groupName) => normalizeGroupNameForFile(groupName) === preparedFileName
    );
    if (groupName && fileName !== DEFAULT_FAV_GROUP_NAME) {
        return groupName;
    }
    return fileName;
}

export function normalizeGroupNameForFile(groupName) {
    let res = groupName;
    for (const [placeholder, original] of Object.entries(FAVORITE_PLACEHOLDER_MAP)) {
        res = res.replaceAll(original, placeholder);
    }
    return res;
}

export function decodeGroupNameFromFile(groupName) {
    let res = groupName;
    for (const [placeholder, original] of Object.entries(FAVORITE_PLACEHOLDER_MAP)) {
        res = res.replaceAll(placeholder, original);
    }
    return res;
}

export function extractBaseFavFileName(name) {
    return name.replace(new RegExp(`^${FavoritesManager.FAV_FILE_PREFIX}`), '').replace(/\.gpx$/, '');
}

export async function saveFavoriteGroup(data, groupName, ctx) {
    if (data.pointsGroups[groupName]) {
        groupName = normalizeGroupNameForFile(groupName);
        const resp = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/fav/add-group`, data, {
            params: {
                groupName,
            },
        });
        if (resp.data) {
            const res = resp.data;
            const refreshed = await refreshGlobalFiles({
                ctx,
                currentFileName: groupName,
                type: OBJECT_TYPE_FAVORITE,
            });
            return refreshed?.groups?.find((g) => g.file?.name === res.name) ?? FavoritesManager.createGroup(res);
        }
    }
}

export function createFavGroupFreeName(name, groups) {
    let occupied = null;
    let newName = name;
    for (let i = 1; i < 100; i++) {
        if (groups) {
            occupied = isFavGroupExists(newName, groups);
        }
        if (!occupied) {
            return newName;
        }
        newName = name + ' - ' + i; // try with "Track - X"
    }

    if (occupied) {
        throw new Error('FavoritesManager addTrack() too many same-tracks');
    }
    return newName;
}

export function isFavGroupExists(name, groups) {
    return groups && groups.some((g) => g.name === name);
}

function isHidden(pointsGroups, name) {
    let group = pointsGroups[name];
    if (group && group.points) {
        for (let point of group.points) {
            if (point.ext.extensions.hidden === 'true') {
                return true;
            }
        }
    }
    return false;
}

function createDefaultWptGroup(wptGroup) {
    if (!wptGroup) {
        return {
            name: FavoritesManager.DEFAULT_GROUP_NAME,
        };
    } else {
        return wptGroup;
    }
}

function getGroupSize(group) {
    const name = normalizeFavoritePointsGroupName(group.name);
    const pointsGroup = group?.pointsGroups?.[name];
    if (pointsGroup?.groupSize) {
        return Number(pointsGroup.groupSize);
    } else {
        const wpts = pointsGroup?.points;
        if (wpts) {
            return wpts.length > 0 ? wpts.length : 0;
        }
        return 0;
    }
}

export async function updateFavGroups(listFiles, ctx, updateMarkers = true) {
    if (!isEmpty(listFiles)) {
        const files = TracksManager.getFavoriteGroups(listFiles);
        let newFavoritesFiles = {
            groups: [],
            mapObjs: {},
        };
        for (const favFile of files) {
            const id = getUniqFileId(favFile);
            const group = FavoritesManager.createGroup(favFile);
            if (ctx.favorites.mapObjs[id]) {
                if (favFile.updatetimems !== ctx.favorites.mapObjs[id].updatetimems) {
                    newFavoritesFiles.groups.push(group);
                    newFavoritesFiles = await createFavGroupObj(group, newFavoritesFiles);
                } else {
                    newFavoritesFiles.groups.push(ctx.favorites.groups.find((g) => g.id === id));
                    newFavoritesFiles.mapObjs[id] = ctx.favorites.mapObjs[id];
                }
            } else {
                newFavoritesFiles.groups.push(group);
                newFavoritesFiles = await createFavGroupObj(group, newFavoritesFiles);
            }
        }
        if (updateMarkers) {
            ctx.setUpdateMarkers(newFavoritesFiles);
        }
        return newFavoritesFiles;
    } else {
        ctx.setFavorites([]);
    }
}

export function isNoValue(value) {
    return value === undefined || value === 'null' || value === null;
}

export function prepareColor(value) {
    return isNoValue(value) ? MarkerOptions.DEFAULT_WPT_COLOR : value;
}

export function prepareBackground(value) {
    return isNoValue(value) ? MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE : value;
}

export function prepareIcon(value) {
    return isNoValue(value) ? MarkerOptions.DEFAULT_WPT_ICON : value;
}

/**
 * Resolves wpt color, icon and background with a consistent priority:
 *   1. wpt's own value (from ext)
 *   2. pointsGroup value (group settings)
 *   3. default value
 */
export function resolveWptAppearance(wpt, pointsGroups) {
    const category = wpt?.category ?? '';
    const group = pointsGroups?.[category];
    return {
        color: isNoValue(wpt?.color) ? (group?.color ?? MarkerOptions.DEFAULT_WPT_COLOR) : wpt.color,
        background: isNoValue(wpt?.background)
            ? (group?.backgroundType ?? group?.background ?? MarkerOptions.BACKGROUND_WPT_SHAPE_CIRCLE)
            : wpt.background,
        icon: isNoValue(wpt?.icon) ? (group?.iconName ?? group?.icon ?? MarkerOptions.DEFAULT_WPT_ICON) : wpt.icon,
    };
}

/**
 * Asynchronously adds favorite groups to the map.
 *
 * @param {Object} favGroups - The favorite groups to add.
 * @returns {Object} - The updated favorite groups.
 */
export async function addFavGroupsToMap(favGroups) {
    let newFavGroups = { ...favGroups };

    let newSavedFavGroups = {};

    const promises = favGroups.groups.map(async (g) => {
        const key = getFavGroupKey(g);
        const cachedGroup = await getFavoriteFromDB(key);
        if (cachedGroup) {
            newFavGroups = addExistFavGroup(cachedGroup, g, favGroups);
        } else {
            newFavGroups = await createFavGroupObj(g, newFavGroups);
            newSavedFavGroups[key] = newFavGroups.mapObjs[g.id];
            await saveFavoriteToDB(key, newSavedFavGroups[key]);
        }
    });
    await Promise.all(promises);

    return newFavGroups;
}

function addExistFavGroup(obj, g, favGroups) {
    favGroups.mapObjs[g.id] = obj;

    const ind = favGroups.groups.findIndex((obj) => obj.name === g.name);
    favGroups.groups[ind].pointsGroups = obj.pointsGroups;
    favGroups.groups[ind].name = obj.name;

    favGroups = addHidden({
        pointsGroups: obj.pointsGroups,
        groupName: g.name,
        favArr: favGroups,
        mapId: g.id,
        menuId: ind,
    });

    favGroups = addPinned({
        pointsGroups: obj.pointsGroups,
        groupName: g.name,
        favArr: favGroups,
        menuId: ind,
    });

    return favGroups;
}

export function getFavGroupKey(g) {
    return g.id + '/' + g.updatetimems;
}

/**
 * Asynchronously creates a new favorite group object based on the provided group data and updates the given favorite groups.
 *
 * @param {Object} g - The group data.
 * @param {Object} favGroups - The existing favorite groups.
 * @returns {Object} - The updated favorite groups with the new group object.
 */
async function createFavGroupObj(g, favGroups) {
    if (!favGroups.mapObjs) {
        favGroups.mapObjs = {};
    }
    // Create a new entry in the mapObjs property with details from the provided group data.
    favGroups.mapObjs[g.id] = {
        url: createFavGroupUrl(g),
        clienttimems: g.file.clienttimems,
        updatetimems: g.file.updatetimems,
        name: g.file.name,
    };
    // If file data is available, process and update the favorite groups.
    const gpxFile = await Utils.getFileData(favGroups.mapObjs[g.id]);
    if (gpxFile) {
        const favoriteFile = new File([gpxFile], g.file.name, {
            type: 'text/plain',
        });
        const ind = favGroups.groups.findIndex((obj) => obj.name === g.name);
        const favData = await TracksManager.getTrackData(favoriteFile);
        if (favData) {
            const pointsGroups = favData.pointsGroups;
            favData.name = g.file.name;
            favGroups.groups[ind].pointsGroups = pointsGroups;

            Object.keys(favData).forEach((t) => {
                favGroups.mapObjs[g.id][`${t}`] = favData[t];
            });
            const groupName = getFavGroupName(pointsGroups, g.file.folder);
            favGroups.mapObjs[g.id].name = groupName;
            favGroups.groups[ind].name = groupName;
            favGroups = addHidden({
                pointsGroups,
                groupName,
                favArr: favGroups,
                mapId: g.id,
                menuId: ind,
            });

            favGroups = addPinned({
                pointsGroups,
                groupName,
                favArr: favGroups,
                menuId: ind,
            });
        }
    }
    return favGroups;
}

function createFavGroupUrl(group) {
    const sharedFile = group.sharedWithMe;
    return `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(
        group.file.type
    )}&name=${encodeURIComponent(group.file.name)}&shared=${sharedFile ? 'true' : 'false'}`;
}

export async function addOpenedFavoriteGroups(files, setUpdateMarkers, setProcessingGroups) {
    let newFavoritesFiles = {
        groups: [],
    };
    files.forEach((file) => {
        setProcessingGroups(true);
        const group = FavoritesManager.createGroup(file);
        newFavoritesFiles.groups.push(group);
    });
    newFavoritesFiles.mapObjs = {};
    const newGroups = await addFavGroupsToMap(newFavoritesFiles);
    if (newGroups) {
        setUpdateMarkers(newGroups);
    }
}

export function updateFavoriteGroups({
    result,
    selectedGroupId,
    oldGroupId = null,
    ctx,
    useSelected = false,
    favoriteName = null,
}) {
    ctx.favorites.groups = FavoriteHelper.updateGroupAfterChange({
        ctx,
        result,
        selectedGroupId,
        oldGroupId,
    });
    const selectedGroup = ctx.favorites.groups.find((g) => g.id === selectedGroupId);

    if (result.oldGroupResp) {
        ctx.favorites.mapObjs[oldGroupId] = FavoriteHelper.updateGroupObj(
            ctx.favorites.mapObjs[oldGroupId],
            result.oldGroupResp
        );
    }
    if (!ctx.favorites.mapObjs[selectedGroupId]) {
        ctx.favorites.mapObjs[selectedGroupId] = FavoriteHelper.createGroupObj(result.newGroupResp, selectedGroup);
    } else {
        ctx.favorites.mapObjs[selectedGroupId] = FavoriteHelper.updateGroupObj(
            ctx.favorites.mapObjs[selectedGroupId],
            result.newGroupResp
        );
    }
    if (useSelected && favoriteName) {
        FavoriteHelper.updateSelectedFile({
            ctx,
            result: null,
            favoriteName,
            selectedGroup,
            deleted: false,
        });
    }
    ctx.setUpdateMarkers({ ...ctx.favorites });
}

export function getColorLocation(location) {
    return location === LOCATION_UNAVAILABLE ? '#ff8800' : '#237bff';
}

export function getSize(group, t) {
    return FavoritesManager.getGroupSize(group) > 0
        ? `${FavoritesManager.getGroupSize(group)} ${t('shared_string_gpx_points').toLowerCase()}`
        : 'empty';
}

/** Build icon HTML for a favorite waypoint marker in the menu list. */
export function getFavoriteMenuIconHtml({ wpt = null, icon, color, background } = {}) {
    const rawHtml = createPoiIcon({
        point: wpt ?? {},
        icon,
        color,
        background,
        hasBackgroundLight: false,
    }).options.html;

    return changeIconSizeWpt(removeShadowFromIconWpt(rawHtml), 18, 30, background);
}

export function getFavMenuListByLayers({ layers, wpts, currentLoc, pointsGroups = null }) {
    let markerList = [];
    Object.values(layers).forEach((value) => {
        // Only process waypoint markers (skip route points, track points, polylines, start/end markers)
        if (!value?.options?.name) {
            return;
        }
        const wpt = getWptByTitle(value.options.name, wpts);
        if (!wpt) {
            return;
        }
        const appearance = resolveWptAppearance(wpt, pointsGroups);
        const marker = {
            name: value.options.name,
            icon: getFavoriteMenuIconHtml({ wpt, ...appearance }),
            layer: value,
            color: appearance.color,
            background: appearance.background,
        };
        markerList.push(marker);
    });
    return addLocDist({ location: currentLoc, markers: markerList });
}

export function getWptByTitle(title, wpts) {
    return wpts.find((wpt) => wpt.name === title);
}

/** Build menu marker + group for opening a favorite from search (requires map markers loaded). */
export function resolveFavoriteMarkerForSearch(ctx, groupId, wptName) {
    const group = ctx.favorites?.groups?.find((g) => g.id === groupId);
    const mapObj = ctx.favorites?.mapObjs?.[groupId];
    if (!group || !mapObj?.wpts || !mapObj?.markers?._layers) {
        return null;
    }
    const wpt = getWptByTitle(wptName, mapObj.wpts);
    if (!wpt) {
        return null;
    }
    const layer = Object.values(mapObj.markers._layers).find((l) => l.options?.name === wptName);
    if (!layer) {
        return null;
    }
    const appearance = resolveWptAppearance(wpt, mapObj.pointsGroups);
    const marker = {
        name: wptName,
        icon: getFavoriteMenuIconHtml({
            wpt,
            icon: appearance.icon,
            color: appearance.color,
            background: appearance.background,
        }),
        layer,
        color: appearance.color,
        background: appearance.background,
    };
    return { group, marker };
}

export function addLocDist({ location, markers = null, wpts = null }) {
    let res = [];
    if (location && location !== LOCATION_UNAVAILABLE) {
        if (markers && markers.length > 0) {
            markers.forEach((m) => {
                if (m?.layer?._latlng) {
                    m.locDist = getDistance(
                        location.lat,
                        location.lng,
                        m.layer._latlng.lat,
                        m.layer._latlng.lng
                    ).toFixed(0);
                }
                res.push(m);
            });
        } else if (wpts && wpts.length > 0) {
            wpts.forEach((w) => {
                if (w.latlng) {
                    w.locDist = getDistance(location.lat, location.lng, w.latlng.lat, w.latlng.lng).toFixed(0);
                }
                res.push(w);
            });
        }
    }
    if (isEmpty(res)) {
        if (markers) {
            return markers;
        } else if (wpts) {
            return wpts;
        }
    }
    return res;
}

export function addShareFavoriteToMap(marker, ctx) {
    const newSelectedGpxFile = ctx.selectedGpxFile;
    newSelectedGpxFile.name = marker.name;
    newSelectedGpxFile.zoom = true;
    newSelectedGpxFile.markerCurrent = marker;
    newSelectedGpxFile.favItem = true;
    ctx.setSelectedGpxFile((prev) => ({ ...prev, ...newSelectedGpxFile }));
    ctx.setSelectedWpt(newSelectedGpxFile);
}

export function getFavoriteId(layer) {
    const { lat, lng } = layer.getLatLng();
    return `fav:${lat}:${lng}`;
}

export function buildFavoriteSelection({
    group,
    marker,
    ctx,
    sharedFile = false,
    mapObj = false,
    openedFolder = undefined,
}) {
    const selection = {};
    if (marker?.layer) {
        marker.latlng = marker.layer.getLatLng();
    }
    selection.markerCurrent = { ...marker, groupId: group.id };
    if (!ctx.selectedGpxFile.markerPrev || ctx.selectedGpxFile.markerPrev !== ctx.selectedGpxFile.markerCurrent) {
        selection.markerPrev = ctx.selectedGpxFile.markerCurrent;
    }
    let trackData;
    Object.keys(ctx.favorites.mapObjs).forEach((fileId) => {
        if (fileId === group.id) {
            selection.nameGroup = group.name;
            Object.values(ctx.favorites.mapObjs[fileId].markers._layers).forEach((m) => {
                if (m.options.name === marker.name) {
                    trackData = ctx.favorites.mapObjs[fileId];
                }
            });
        }
    });
    selection.id = group.id;
    selection.key = `${group.id}:${marker.name}`;
    selection.trackData = trackData;
    selection.sharedWithMe = sharedFile;
    selection.file = ctx.favorites.groups.find((g) => g.name === group.name).file;
    selection.name = marker.name;
    selection.prevState = ctx.selectedGpxFile;
    selection.favItem = true;
    selection.mapObj = mapObj;
    selection.openedFolder = openedFolder;

    return selection;
}

export function addFavoriteToMap({ group, marker, ctx, sharedFile = false, mapObj = false, openedFolder = undefined }) {
    openFavoriteObj(ctx, buildFavoriteSelection({ group, marker, ctx, sharedFile, mapObj, openedFolder }));
}

/** Open favorite from search list; keeps selectedSearchObj for back navigation. */
export function openFavoriteFromSearch(ctx, { group, marker }) {
    const selection = buildFavoriteSelection({ group, marker, ctx, mapObj: false });
    ctx.setSelectedSearchObj({ type: OBJECT_TYPE_FAVORITE, object: selection });
    openFavoriteObj(ctx, selection, { fromSearch: true });
}

export function openFavoriteObj(ctx, object, options = {}) {
    const fromSearch = options.fromSearch === true;
    ctx.setCurrentObjectType(fromSearch ? OBJECT_SEARCH : OBJECT_TYPE_FAVORITE);
    const selectionId = getFavoriteId(object.markerCurrent?.layer);
    ctx.setSelectedWpt({ ...object, selectionId, id: selectionId, groupId: object.id });
    ctx.setSelectedGpxFile({ ...object });
}

export function navigateToFavoritesMenu(navigate, ctx) {
    const favGroup = ctx.selectedGpxFile.nameGroup;
    if (favGroup) {
        const savedParams = ctx.pageParams?.[OBJECT_TYPE_FAVORITE];
        if (savedParams?.includes(FAVORITES_URL_PARAM_FOLDER)) {
            navigate(MAIN_URL_WITH_SLASH + FAVORITES_URL + savedParams + globalThis.location.hash);
        }
    } else {
        navigate(MAIN_URL_WITH_SLASH + FAVORITES_URL + globalThis.location.hash);
    }
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
    createDefaultWptGroup,
    getGroupSize,
    DEFAULT_TAB_ICONS: DEFAULT_TAB_ICONS,
    DEFAULT_GROUP_NAME: DEFAULT_FAV_GROUP_NAME,
    DEFAULT_GROUP_WPT_COLOR: DEFAULT_GROUP_WPT_COLOR,
    FAVORITE_FILE_TYPE: FAVORITE_FILE_TYPE,
    FAV_FILE_PREFIX: FAV_FILE_PREFIX,
    DEFAULT_GROUP_NAME_POINTS_GROUPS: DEFAULT_GROUP_NAME_POINTS_GROUPS,
    colors: colors,
    shapes: shapes,
};

export default FavoritesManager;
