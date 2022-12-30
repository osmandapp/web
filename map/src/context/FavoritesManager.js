import {post} from "axios";

function GroupResult(clienttimems, updatetimems, data) {
    this.clienttimems = clienttimems;
    this.updatetimems = updatetimems;
    this.data = data;
}

async function addFavorite(data, fileName, updatetime) {
    let resp = await post(`${process.env.REACT_APP_GPX_API}/mapapi/fav/add`, data,
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
    let resp = await post(`${process.env.REACT_APP_GPX_API}/mapapi/fav/delete`, data,
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
    let resp = await post(`${process.env.REACT_APP_GPX_API}/mapapi/fav/update`, data,
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
    return data && JSON.parse(data.replace(/\bNaN\b/g, '"***NaN***"'), function (key, value) {
        if (value === "***NaN***") {
            return key === "ele" ? 99999 : NaN;
        } else {
            return value;
        }
    });
}

const FavoritesManager = {
    addFavorite,
    deleteFavorite,
    updateFavorite,
    prepareTrackData
}

export default FavoritesManager;