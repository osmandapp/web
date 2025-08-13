import L from 'leaflet';
import { isEmpty } from 'lodash';
import { getUniqFileId } from '../../../manager/GlobalManager';
import FavoritesManager from '../../../manager/FavoritesManager';
import { GPX_FILE_EXT } from '../../../manager/track/TracksManager';

function updateSelectedFile({ ctx, result, favoriteName, selectedGroup, deleted }) {
    if (ctx.selectedWpt?.poi || ctx.selectedWpt?.wikidata) {
        return;
    }
    const newSelectedFile = Object.assign({}, ctx.selectedGpxFile);
    newSelectedFile.file =
        selectedGroup.id !== ctx.selectedGpxFile?.id ? selectedGroup.file : ctx.selectedGpxFile?.file;
    newSelectedFile.name = favoriteName;
    newSelectedFile.nameGroup = selectedGroup.name;
    newSelectedFile.editFavorite = true;
    if (result) {
        newSelectedFile.trackData = {};
        newSelectedFile.trackData.clienttimems = result.clienttimems;
        newSelectedFile.trackData.updatetimems = result.updatetimems;
        Object.keys(result.data).forEach((t) => {
            newSelectedFile.trackData[t] = result.data[t];
        });
        newSelectedFile.file.updatetimems = result.updatetimems;
    }
    newSelectedFile.id = selectedGroup.id;
    updateMarker(newSelectedFile, deleted, favoriteName);
    ctx.setSelectedGpxFile(newSelectedFile);
    ctx.setSelectedWpt(newSelectedFile);
}

function updateSelectedGroup({ favorites, selectedGroupName, result, id }) {
    let group = favorites.groups?.find((g) => g.id === id && result.data);
    if (group) {
        group = updateGroupData(group, result);
        favorites.groups = favorites.groups.map((g) => (g.id === id ? group : g));
    } else {
        const file = {};
        file.folder = selectedGroupName;
        file.clienttimems = result.clienttimems;
        file.updatetimems = result.updatetimems;
        file.name = selectedGroupName + GPX_FILE_EXT;
        file.type = FavoritesManager.FAVORITE_FILE_TYPE;

        const newGroup = {
            name: file.folder,
            updatetimems: result.updatetimems,
            clienttimems: result.clienttimems,
            file,
            pointsGroups: result.data.pointsGroups,
            hidden: false,
            id: getUniqFileId(file),
        };
        Object.keys(result.data).forEach((d) => {
            newGroup[d] = result.data[d];
        });

        favorites.groups.push(newGroup);
    }
    return favorites;
}

function updateGroupData(object, result) {
    object.updatetimems = result.updatetimems;
    object.pointsGroups = result.data.pointsGroups;
    Object.keys(result.data).forEach((d) => {
        object[d] = result.data[d];
    });

    const file = Object.assign({}, object.file);
    file.updatetimems = result.updatetimems;
    object.file = file;
    object.id = getUniqFileId(file);

    return object;
}

function updateGroupAfterChange({ ctx, result, selectedGroupId, oldGroupId }) {
    let updatedGroups = [];
    ctx.favorites.groups.forEach((g) => {
        let newGroup;
        if (g.id === oldGroupId && result.oldGroupResp?.data) {
            const file = updateFavFile(g, result.oldGroupResp);
            newGroup = createNewGroup({
                g,
                file,
                updatetimems: result.oldGroupResp.updatetimems,
                clienttimems: result.oldGroupResp.clienttimems,
                pointsGroups: result.oldGroupResp.data.pointsGroups,
            });
        } else if (g.id === selectedGroupId && result.newGroupResp) {
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
        id: getUniqFileId(file),
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
            newSelectedFile.markerCurrent.name = name;
        }
    } else {
        newSelectedFile.markerCurrent = {};
        newSelectedFile.markerCurrent.name = name;
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

const FavoriteHelper = {
    updateSelectedFile,
    updateSelectedGroup,
    updateGroupAfterChange,
    updateGroupObj,
    createGroupObj,
};

export default FavoriteHelper;
