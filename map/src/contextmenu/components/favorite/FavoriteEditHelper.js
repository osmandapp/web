
function updateSelectedFile(ctx, result, favoriteName, groupName, deleted) {
    let newSelectedFile = Object.assign({}, ctx.selectedGpxFile);
    let selectedGroup = ctx.favorites.groups.find(g => g.name === groupName);
    newSelectedFile.file = selectedGroup.name !== ctx.selectedGpxFile.nameGroup ? selectedGroup.file : ctx.selectedGpxFile.file;
    newSelectedFile.name = favoriteName;
    newSelectedFile.nameGroup = selectedGroup.name;
    newSelectedFile.editFavorite = true;
    if (result) {
        newSelectedFile.file.clienttimems = result.clienttimems;
        newSelectedFile.file.updatetimems = result.updatetimems;
        Object.keys(result.data).forEach(t => {
            newSelectedFile.file[`${t}`] = result.data[t];
        });
    }
    updateMarker(newSelectedFile, deleted, favoriteName);
    ctx.setSelectedGpxFile(newSelectedFile);
}

function updateSelectedGroup(groups, selectedGroupName, result) {
    groups.forEach(g => {
        if (g.name === selectedGroupName && result.data) {
            g.updatetimems = result.updatetimems;
            g.pointsGroups = result.data.pointsGroups;
            let file = g.file;
            Object.keys(result.data).forEach(d => {
                file[`${d}`] = result.data[d];
            });
            g.file = file;
        }
    })
}

function updateGroupAfterChange(ctx, result, selectedGroupName) {
    let updatedGroups = [];
    ctx.favorites.groups.forEach(g => {
        let newGroup;
        if (g.name === ctx.selectedGpxFile.nameGroup && result.oldGroupResp?.data) {
            let file = g.file;
            Object.keys(result.oldGroupResp.data).forEach(d => {
                file[`${d}`] = result.oldGroupResp.data[d];
            });
            newGroup = {
                name: g.name,
                updatetimems: result.oldGroupResp.updatetimems,
                file: file,
                pointsGroups: result.oldGroupResp.data.pointsGroups
            }
        } else if (g.name === selectedGroupName && result.newGroupResp) {
            let file = g.file;
            Object.keys(result.newGroupResp.data).forEach(d => {
                file[`${d}`] = result.newGroupResp.data[d];
            });
            newGroup = {
                name: g.name,
                updatetimems: result.newGroupResp.updatetimems,
                file: g.file,
                pointsGroups: result.newGroupResp.data.pointsGroups
            }
        } else {
            newGroup = g;
        }
        updatedGroups.push(newGroup);
    })
    return updatedGroups;
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
        newSelectedFile.markerCurrent = {}
        newSelectedFile.markerCurrent.title = name;
    }
}

const FavoriteEditHelper = {
    updateSelectedFile,
    updateSelectedGroup,
    updateGroupAfterChange
}

export default FavoriteEditHelper;