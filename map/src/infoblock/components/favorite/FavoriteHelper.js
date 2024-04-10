import L from 'leaflet';
import FavoritesManager from '../../../manager/FavoritesManager';
import { isEmpty } from 'lodash';

function updateSelectedFile({ ctx, favorites, result, favoriteName, groupName, deleted }) {
    let newSelectedFile = Object.assign({}, ctx.selectedGpxFile);
    let selectedGroup = favorites.groups.find((g) => g.name === groupName);
    newSelectedFile.file =
        selectedGroup.name !== ctx.selectedGpxFile?.nameGroup ? selectedGroup.file : ctx.selectedGpxFile?.file;
    newSelectedFile.name = favoriteName;
    newSelectedFile.nameGroup = selectedGroup.name;
    newSelectedFile.editFavorite = true;
    if (result) {
        newSelectedFile.file.clienttimems = result.clienttimems;
        newSelectedFile.file.updatetimems = result.updatetimems;
        Object.keys(result.data).forEach((t) => {
            newSelectedFile.file[`${t}`] = result.data[t];
        });
    }
    updateMarker(newSelectedFile, deleted, favoriteName);
    ctx.setSelectedGpxFile(newSelectedFile);
    ctx.setSelectedWpt(newSelectedFile);
}

function updateSelectedGroup(favorites, selectedGroupName, result) {
    let group = favorites.groups?.find((g) => g.name === selectedGroupName && result.data);
    if (group) {
        updateGroupData(group, result);
    } else {
        let file = {};
        Object.keys(result.data).forEach((d) => {
            file[d] = result.data[d];
        });
        file.folder = selectedGroupName;
        file.name = selectedGroupName + '.gpx';
        file.type = FavoritesManager.FAVORITE_FILE_TYPE;
        let newGroup = {
            name: file.folder,
            updatetimems: result.updatetimems,
            file: file,
            pointsGroups: result.data.pointsGroups,
            hidden: false,
        };
        favorites.groups.push(newGroup);
    }
    return favorites;
}

function updateGroupData(object, result) {
    object.updatetimems = result.updatetimems;
    object.pointsGroups = result.data.pointsGroups;
    let file = Object.assign({}, object.file);
    Object.keys(result.data).forEach((d) => {
        file[d] = result.data[d];
    });
    object.file = file;
}

function updateGroupAfterChange({ ctx, result, selectedGroupName, oldGroupName }) {
    let updatedGroups = [];
    ctx.favorites.groups.forEach((g) => {
        let newGroup;
        if (g.name === oldGroupName && result.oldGroupResp?.data) {
            const file = updateFavFile(g, result.oldGroupResp);
            newGroup = createNewGroup({
                g,
                file,
                updatetimems: result.oldGroupResp.updatetimems,
                clienttimems: result.oldGroupResp.clienttimems,
                pointsGroups: result.oldGroupResp.data.pointsGroups,
            });
        } else if (g.name === selectedGroupName && result.newGroupResp) {
            const file = updateFavFile(g, result.newGroupResp);
            newGroup = createNewGroup({
                g,
                file,
                updatetimems: result.newGroupResp.updatetimems,
                clienttimems: result.newGroupResp.clienttimems,
                pointsGroups: result.newGroupResp.data.pointsGroups,
            });
        } else {
            newGroup = g;
        }
        updatedGroups.push(newGroup);
    });
    return updatedGroups;
}

function updateFavFile(group, res) {
    let file = group.file;
    Object.keys(res.data).forEach((d) => {
        file[d] = res.data[d];
        file.updatetimems = res.updatetimems;
        file.clienttimems = res.clienttimems;
    });
    return file;
}

function createNewGroup({ g, file, updatetimems, clienttimems, pointsGroups }) {
    let newGroup = {
        name: g.name,
        updatetimems: updatetimems,
        clienttimems: clienttimems,
        file: file,
        pointsGroups: pointsGroups,
    };
    if (!isEmpty(file.wpts)) {
        newGroup.hidden = file.wpts[0].hidden;
    } else {
        delete newGroup.hidden;
    }

    return newGroup;
}

function updateMarker(newSelectedFile, deleted, name) {
    if (newSelectedFile.markerCurrent) {
        if (deleted) {
            newSelectedFile.markerPrev = newSelectedFile.markerCurrent;
            delete newSelectedFile.markerCurrent;
        } else {
            newSelectedFile.markerCurrent.title = name;
        }
    } else {
        newSelectedFile.markerCurrent = {};
        newSelectedFile.markerCurrent.title = name;
    }
}

function updateGroupObj(selectedGroup, result) {
    const group = Object.assign({}, selectedGroup);
    group.oldMarkers = Object.assign(new L.FeatureGroup(), group.markers);
    Object.keys(result.data).forEach((t) => {
        group[`${t}`] = result.data[t];
    });
    if (!isEmpty(group.wpts)) {
        group.hidden = group.wpts[0].hidden;
    } else {
        delete group.hidden;
    }
    group.clienttimems = result.clienttimems;
    group.updatetimems = result.updatetimems;

    delete group.markers;

    return group;
}

function createGroupObj(result, selectedGroup) {
    let group;
    group = result.data;
    group.url = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file?type=${encodeURIComponent(
        selectedGroup.file.type
    )}&name=${encodeURIComponent(selectedGroup.file.name)}`;
    group.clienttimems = result.clienttimems;
    group.updatetimems = result.updatetimems;

    return group;
}

export function getFavGroupUpdateTimeByWpts(wpts) {
    if (wpts) {
        let maxTime = 0;
        wpts.forEach((wpt) => {
            if (wpt.ext && wpt.ext.time) {
                const timeValue = parseInt(wpt.ext.time);
                maxTime = Math.max(maxTime, timeValue);
            }
        });
        return maxTime;
    }
    return null;
}

const FavoriteHelper = {
    updateSelectedFile,
    updateSelectedGroup,
    updateGroupAfterChange,
    updateGroupObj,
    createGroupObj,
};

export default FavoriteHelper;
