//save to local
import FavoritesManager from '../FavoritesManager';
import { apiGet, apiPost } from '../../util/HttpApi';
import TracksManager, {
    createTrackGroups,
    DATA_SIZE_KEY,
    isTrackExists,
    isEmptyTrack,
    LOCAL_COMPRESSED_TRACK_KEY,
    prepareLocalTrack,
    getGpxFiles,
    DEFAULT_GROUP_NAME,
} from './TracksManager';
import _ from 'lodash';
import { compressFromJSON } from '../../util/GzipBase64.mjs';
import { OBJECT_TYPE_CLOUD_TRACK, OBJECT_TYPE_LOCAL_TRACK } from '../../context/AppContext';
import Utils from '../../util/Utils';

export const EMPTY_FILE_NAME = 'empty.ignore';

export function saveTrackToLocal({ ctx, track, selected = true, overwrite = false, cloudAutoSave = false } = {}) {
    const newLocalTracks = [...ctx.localTracks];

    const originalName = track.name;
    let localName = TracksManager.prepareName(originalName, true);

    // find free name
    if (overwrite === false) {
        localName = createTrackFreeName(localName, newLocalTracks);
    }

    TracksManager.prepareTrack(track, localName, originalName);

    closeCloudTrack(ctx, track);

    if (selected === true) {
        // upload 1 gpx - edit instantly
        openNewLocalTrack({ ctx, track, cloudAutoSave });
    } else {
        // used when multi-gpx uploaded
        // generate points and save track
        track.points = TracksManager.getEditablePoints(track);
        saveTrackToLocalStorage({ ctx, track });
    }

    if (overwrite) {
        const foundIndex = newLocalTracks?.findIndex((t) => t.name === localName);
        if (foundIndex !== -1) {
            newLocalTracks[foundIndex] = track;
        } else {
            newLocalTracks.push(track);
        }
    } else {
        newLocalTracks.push(track);
    }

    ctx.setLocalTracks(newLocalTracks); // finally
}

//save to cloud
export async function saveTrackToCloud(ctx, currentFolder, fileName, type, file, open = true) {
    if (type !== FavoritesManager.FAVORITE_FILE_TYPE) {
        if (currentFolder === DEFAULT_GROUP_NAME) {
            currentFolder = '';
        } else {
            currentFolder = currentFolder + '/';
        }
    }
    if (ctx.loginUser) {
        const gpxFile = file ? file : ctx.selectedGpxFile.file ? ctx.selectedGpxFile.file : ctx.selectedGpxFile;
        if (gpxFile.points) {
            gpxFile.tracks = [{ points: gpxFile.points }];
        }
        const gpx = await TracksManager.getGpxTrack(gpxFile);
        if (gpx) {
            const convertedData = new TextEncoder().encode(gpx.data);
            const zippedResult = require('pako').gzip(convertedData, { to: 'Uint8Array' });
            const convertedZipped = zippedResult.buffer;
            const oMyBlob = new Blob([convertedZipped], { type: 'gpx' });
            const data = new FormData();

            data.append('file', oMyBlob, gpxFile.name);

            const params = {
                type: type,
                name: type === FavoritesManager.FAVORITE_FILE_TYPE ? currentFolder : currentFolder + fileName + '.gpx',
            };

            // close possibly loaded Cloud track (clean up layers)
            ctx.mutateGpxFiles((o) => o[params.name] && (o[params.name].url = null));

            const res = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/upload-file`, data, { params });

            if (res && res?.data?.status === 'ok') {
                // re-download gpx
                const downloadFile = { ...gpxFile, ...params };
                if (open) {
                    downloadAfterUpload(ctx, downloadFile).then();
                }
                TracksManager.deleteLocalTrack(ctx);
                refreshGlobalFiles(ctx, params.name).then();
                return true;
            }
        }
    }
    ctx.setTrackErrorMsg({
        title: 'Save error',
        msg: `Unable to save ${file.name}`,
    });
    ctx.setTrackLoading([...ctx.trackLoading.filter((n) => n !== file.name)]);
    return false;
}

export function createTrackFreeName(name, otherTracks, folder = null, folderName = null) {
    let occupied = null;
    let newName = name;
    for (let i = 1; i < 100; i++) {
        if (folder !== null || folderName !== null) {
            //check cloud
            occupied = isTrackExists(newName, folder, folderName, otherTracks);
        } else {
            //check local
            occupied = otherTracks?.some((t) => t.name === newName);
        }
        if (!occupied) {
            return newName;
        }
        newName = name + ' - ' + i; // try with "Track - X"
    }
    if (occupied) {
        throw new Error('TracksManager addTrack() too many same-tracks');
    }
}

export function saveTrackToLocalStorage({ ctx, track }) {
    const localTracks = ctx.localTracks;

    let currentTrackIndex = localTracks.findIndex((t) => t.name === track.name);

    if (currentTrackIndex === -1) {
        currentTrackIndex = localTracks.push(track) - 1; // mutate state, get new index
        ctx.setLocalTracks([...localTracks]); // instant call setState if you don't sure about parent
    }

    let tracksSize;
    let totalSize = JSON.parse(localStorage.getItem(DATA_SIZE_KEY));
    if (!totalSize) {
        totalSize = 0;
    }
    compressFromJSON(prepareLocalTrack(track)).then((res) => {
        tracksSize = res.length;
        let oldSize = getOldSizeTrack(currentTrackIndex);
        totalSize = totalSize - oldSize + tracksSize;
        if (((oldSize === 0 && tracksSize + totalSize) || totalSize - oldSize + tracksSize) > 5000000) {
            ctx.setRoutingErrorMsg(
                "Local tracks are too big to save! Last and all next changes won't be saved and will disappear after the page is reloaded! Please clear local tracks or delete old local tracks to save new changes."
            );
        } else {
            // ctx.setRoutingErrorMsg(null); // don't reset error message here (lose previous message)
            localStorage.setItem(LOCAL_COMPRESSED_TRACK_KEY + currentTrackIndex, res);
            localStorage.setItem(DATA_SIZE_KEY, totalSize);
        }
    });
}

export async function renameTrack(oldName, folder, newName, ctx) {
    const newFileName = folder + newName + '.gpx';
    if (newFileName !== oldName) {
        const res = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/rename-file`, {
            params: {
                oldName: oldName,
                newName: newFileName,
                type: 'GPX',
                saveCopy: false,
            },
            dataOnErrors: true,
        });
        if (res && res?.data?.status === 'ok') {
            refreshGlobalFiles(ctx, newFileName).then();
        } else {
            ctx.setTrackErrorMsg({
                title: 'Rename error',
                msg: res.data,
            });
        }
    }
}

export async function duplicateTrack(oldName, folderName, newName, ctx) {
    newName = createTrackFreeName(newName, ctx.tracksGroups, null, folderName);
    let folder = folderName !== '' ? `${folderName}/` : '';
    const newFileName = folder + newName + '.gpx';
    if (newFileName !== oldName) {
        const res = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/rename-file`, {
            params: {
                oldName: oldName,
                newName: newFileName,
                type: 'GPX',
                saveCopy: true,
            },
            dataOnErrors: true,
        });
        if (res && res?.data?.status === 'ok') {
            refreshGlobalFiles(ctx, newFileName).then();
        } else {
            ctx.setTrackErrorMsg({
                title: 'Duplicate error',
                msg: res.data,
            });
        }
    }
}

export async function saveEmptyTrack(folderName, ctx) {
    //create empty file
    const convertedData = new TextEncoder().encode('');
    const zippedResult = require('pako').gzip(convertedData, { to: 'Uint8Array' });
    const convertedZipped = zippedResult.buffer;
    const oMyBlob = new Blob([convertedZipped], { type: 'gpx' });

    //create data
    const data = new FormData();
    data.append('file', oMyBlob, 'empty');
    const params = {
        type: 'GPX',
        name: `${folderName}/${EMPTY_FILE_NAME}`,
    };
    //save empty file with new folder's name
    const res = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/upload-file`, data, { params });
    if (res && res?.data?.status === 'ok') {
        refreshGlobalFiles(ctx, params.name).then();
        return true;
    }
}

async function refreshGlobalFiles(ctx, currentFileName) {
    // refresh list-files but skip if uploaded file is already there
    if (!ctx.listFiles.uniqueFiles?.find((f) => f.name === currentFileName)) {
        const respGetFiles = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/list-files`, {});
        const resJson = await respGetFiles.json();
        if (resJson && resJson.uniqueFiles) {
            ctx.setListFiles(resJson);
        }
        updateTrackGroups(resJson, ctx);
    } else {
        const updatedTrackGroups = updateUpdatetimemsInGroups(ctx.tracksGroups, currentFileName, Date.now());
        ctx.setTracksGroups(updatedTrackGroups);
    }
}

function getOldSizeTrack(currentTrackIndex) {
    if (currentTrackIndex !== -1) {
        let old = localStorage.getItem(LOCAL_COMPRESSED_TRACK_KEY + currentTrackIndex);
        if (old) {
            return old.length;
        }
    }
    return 0;
}

// after success upload from Local to Cloud
// download it and use as current Cloud track
async function downloadAfterUpload(ctx, file) {
    const createState = {
        enable: false, // stop-editor
    };

    // cleanup
    if (ctx.createTrack?.enable && ctx.selectedGpxFile) {
        createState.closePrev = {
            file: _.cloneDeep(ctx.selectedGpxFile),
        };
    }

    ctx.setCreateTrack({ ...createState });

    const URL = `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-file`;
    const qs = `?type=${encodeURIComponent(file.type)}&name=${encodeURIComponent(file.name)}`;
    const newGpxFiles = Object.assign({}, ctx.gpxFiles);
    newGpxFiles[file.name] = {
        url: URL + qs,
        clienttimems: file.clienttimems,
        updatetimems: file.updatetimems,
        name: file.name,
        type: 'GPX',
    };
    const f = await Utils.getFileData(newGpxFiles[file.name]);
    const gpxfile = new File([f], file.name, {
        type: 'text/plain',
    });
    const track = await TracksManager.getTrackData(gpxfile);
    if (isEmptyTrack(track) === false) {
        const type = OBJECT_TYPE_CLOUD_TRACK;
        ctx.setUpdateInfoBlock(true);
        ctx.setCurrentObjectType(type);
        track.name = file.name;
        Object.keys(track).forEach((t) => {
            newGpxFiles[file.name][`${t}`] = track[t];
        });
        newGpxFiles[file.name].analysis = TracksManager.prepareAnalysis(newGpxFiles[file.name].analysis);
        ctx.setGpxFiles(newGpxFiles);
        ctx.setSelectedGpxFile(Object.assign({}, newGpxFiles[file.name]));
    }
}

function updateTrackGroups(listFiles, ctx) {
    if (!_.isEmpty(listFiles)) {
        //get gpx files
        let files = getGpxFiles(listFiles);
        //get groups
        let trackGroups = createTrackGroups(files);
        ctx.setTracksGroups(trackGroups, ctx);
    } else {
        ctx.setTracksGroups([]);
    }
}

function updateUpdatetimemsInGroups(groups, fileName, newUpdatetimems) {
    return groups.map((group) => {
        if (group.subfolders.length > 0) {
            const updatedSubfolders = updateUpdatetimemsInGroups(group.subfolders, fileName, newUpdatetimems);

            return {
                ...group,
                subfolders: updatedSubfolders,
                groupFiles: group.groupFiles.map((file) =>
                    file.name === fileName ? { ...file, updatetimems: newUpdatetimems } : file
                ),
                files: group.files.map((file) =>
                    file.name === fileName ? { ...file, updatetimems: newUpdatetimems } : file
                ),
            };
        } else {
            return {
                ...group,
                groupFiles: group.groupFiles.map((file) =>
                    file.name === fileName ? { ...file, updatetimems: newUpdatetimems } : file
                ),
                files: group.files.map((file) =>
                    file.name === fileName ? { ...file, updatetimems: newUpdatetimems } : file
                ),
            };
        }
    });
}

function closeCloudTrack(ctx, track) {
    if (ctx.gpxFiles[track.originalName]) {
        ctx.gpxFiles[track.originalName].url = null;
        ctx.setGpxFiles({ ...ctx.gpxFiles });
    }
}

// set copy of track with .overwrite <bool> and .selected = true
// overwrite flag used later when re-uploading (save to cloud)
// set type of current object, enable editor with "edit" flag
function openNewLocalTrack({ ctx, track, cloudAutoSave = false }) {
    const createState = {
        enable: true, // start-editor
        edit: true,
        cloudAutoSave,
    };

    // cleanup
    if (ctx.createTrack?.enable && ctx.selectedGpxFile) {
        createState.closePrev = {
            file: _.cloneDeep(ctx.selectedGpxFile),
        };
    }

    ctx.setCreateTrack(createState);

    // parent needs our track.selected = true
    track.selected = true; // track is ref
    ctx.setSelectedGpxFile({ ...track });

    ctx.setCurrentObjectType(OBJECT_TYPE_LOCAL_TRACK);
}
