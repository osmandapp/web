import Utils, {quickNaNfix} from "../util/Utils";
import FavoritesManager from "./FavoritesManager";
import _ from "lodash";
import {apiGet, apiPost} from '../util/HttpApi';
import {compressJSON, decompressString} from "../util/GzipBase64.mjs";

const GPX_FILE_TYPE = 'GPX';
const GET_SRTM_DATA = 'get-srtm-data';
const GET_ANALYSIS = 'get-analysis';
const PROFILE_LINE = 'line';
const PROFILE_CAR = 'car';
const PROFILE_GAP = 'gap';
const NAN_MARKER = 99999;
const CHANGE_PROFILE_BEFORE = 'before';
const CHANGE_PROFILE_AFTER = 'after';
const CHANGE_PROFILE_ALL = 'all';
const LOCAL_COMPRESSED_TRACK_KEY = 'localTrack_';
const DATA_SIZE_KEY = 'dataSize';
const TRACK_VISIBLE_FLAG = 'visible';
const HOURS_24_MS = 86400000;

async function loadTracks(setLoading) {
    let localTracks = [];
    let names = Object.keys(localStorage);
    setLoading(true);
    for (let name of names) {
        if (name.includes(LOCAL_COMPRESSED_TRACK_KEY)) {
            let ind = name.split('_')[1];
            try {
                let res = await decompressString(localStorage.getItem(name));
                if (res) {
                    localTracks[ind] = JSON.parse(res);
                    localTracks = openVisibleTracks(fixLocalTracks(localTracks));
                }
            } catch {
                console.log('localStorage JSON error, ignore track: ' + name)
                localStorage.removeItem(name);
            }
        }
    }

        setLoading(false);
        return localTracks;

}

function fixLocalTracks(localTracks) {
    if (localTracks && localTracks.length !== Object.keys(localTracks).length) {
        console.log('loadTracks() workaround for localTrack_0 (hole) localTrack_X');
        const fixTracks = [];
        localTracks.forEach(t => fixTracks.push(t));
        updateLocalTracks(fixTracks).then();
        localTracks = fixTracks;
    }
    return localTracks;
}

function openVisibleTracks(localTracks) {
    let savedVisible = JSON.parse(localStorage.getItem(TRACK_VISIBLE_FLAG));
    if (savedVisible?.local) {
        for (const local of savedVisible.local) {
            for (let f of localTracks) {
                if (f.name === local.name) {
                    if (Date.now() - local.addTime < HOURS_24_MS) {
                        f.selected = true;
                        f.index = _.indexOf(localTracks, f);
                    } else {
                        f.selected = false;
                    }
                }
            }
        }
    }
    return localTracks;
}

function saveLocalTrack(tracks, ctx) {
    let currentTrackIndex = tracks.findIndex(t => t.name === ctx.selectedGpxFile.name);
    let track;
    if (currentTrackIndex !== -1) {
        track = ctx.selectedGpxFile;
    } else {
        track = tracks[tracks.length - 1];
    }
    let tracksSize;
    let totalSize = JSON.parse(localStorage.getItem(DATA_SIZE_KEY));
    if (!totalSize) {
        totalSize = 0;
    }
    compressJSON(prepareLocalTrack(track)).then(res => {
        tracksSize = res.length;
        let oldSize = getOldSizeTrack(currentTrackIndex);
        totalSize = totalSize - oldSize + tracksSize;
        if (((oldSize === 0 && (tracksSize + totalSize)) || ((totalSize - oldSize) + tracksSize)) > 5000000) {
            ctx.setRoutingErrorMsg("Local tracks are too big to save! Last and all next changes won't be saved and will disappear after the page is reloaded! Please clear local tracks or delete old local tracks to save new changes.");
        } else {
            ctx.setRoutingErrorMsg(null);
            localStorage.setItem(LOCAL_COMPRESSED_TRACK_KEY + currentTrackIndex, res);
            localStorage.setItem(DATA_SIZE_KEY, totalSize);
        }
    });
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

async function updateLocalTracks(tracks) {
    deleteLocalTracks();
    let totalSize = 0;
    for (let track of tracks) {
        let res = await compressJSON(prepareLocalTrack(track));
        if (res) {
            localStorage.setItem(LOCAL_COMPRESSED_TRACK_KEY + _.indexOf(tracks, track), res);
            let tracksSize = res.length;
            totalSize += tracksSize;
            localStorage.setItem(DATA_SIZE_KEY, totalSize);
        }
    }
}

function prepareLocalTrack(track) {
    const prepareTrack = _.cloneDeep(track);
    return {
        name: prepareTrack.name,
        id: prepareTrack.id,
        metaData: prepareTrack.metaData,
        points: prepareTrack.points,
        tracks: prepareTrack.track,
        wpts: prepareTrack.wpts,
        pointsGroups: prepareTrack.pointsGroups,
        ext: prepareTrack.ext,
        analysis: prepareTrack.analysis,
        selected: false,
        originalName: prepareTrack.originalName,
        hasGeo: prepareTrack.hasGeo,
    };
}

function deleteLocalTracks() {
    let keys = Object.keys(localStorage);
    for (let k of keys) {
        if (k.includes(LOCAL_COMPRESSED_TRACK_KEY)) {
            localStorage.removeItem(k);
        }
    }
}

function createName(ctx) {
    let date = new Date().toDateString();
    let count = 0;
    let name;
    let maxNumber = 0;
    ctx.localTracks.forEach(t => {
        if (t.name.split(' - ')[0] === date) {
            let sp = parseInt(t.name.split(' - ')[1], 10);
            count++;
            if (sp > maxNumber) {
                maxNumber = sp;
            }
        }
    })
    name = count > 0 ? (date + ' - ' + (count + 1)) : date;
    ctx.localTracks.forEach(t => {
        if (t.name === name) {
            name = date + ' - ' + (maxNumber + 1);
        }
    })

    return name;
}

function getFileName(currentFile) {
    let file = Object.assign('', currentFile);
    return prepareName(file.name, file.local);
}

function prepareName(name, local) {
    name = name.replace(/.gpx/, '');
    if (name.includes('/')) {
        return name.split('/')[1]
    } else if (local && name.includes(':')) {
        return name.split(':')[1]
    } else {
        return name;
    }
}

function getGroup(name, local) {
    name = name.replace(/.gpx/, '');
    if (name.includes('/')) {
        return name.split('/')[0]
    } else if (local && name.includes(':')) {
        return name.split(':')[0]
    } else {
        return "Tracks";
    }
}

async function getTrackData(file) {
    let formData = new FormData();
    formData.append('file', file);
    const response = await apiGet(`${process.env.REACT_APP_GPX_API}/gpx/process-track-data`, {
        method: 'POST',
        credentials: 'include',
        body: formData
    });

    let track = null;
    if (response.ok) {
        let resp = await response.text();
        if (resp) {
            let data = JSON.parse(quickNaNfix(resp));
            if (data) {
                track = data.gpx_data;
            }
        }
    }
    return track;
}

function addTrack(ctx, track) {
    prepareTrack(track);
    ctx.localTracks.push(track);
    ctx.setLocalTracks([...ctx.localTracks]);
    openNewLocalTrack(ctx);
    closeCloudTrack(ctx, track);
}

function prepareTrack(track) {
    track.hasGeo = hasGeo(track);
    track.originalName = _.cloneDeep(track.name);
    track.name = TracksManager.prepareName(track.name, true);
    track.id = track.name;
    addDistance(track);
}

function hasGeo(track) {
    if (!_.isEmpty(track.points)) {
        track.points.forEach(p => {
            if (p.geometry?.length > 0) {
                return true;
            }
        })
    } else {
        if (track.tracks) {
            track.tracks.forEach(t => {
                if (t.points) {
                    t.points.forEach(p => {
                        if (p.geometry?.length > 0) {
                            return true;
                        }
                    })
                }
            })
        }
    }
    return false;
}

function openNewLocalTrack(ctx) {
    let type = ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK;
    ctx.setCurrentObjectType(type);
    let selectedTrack = ctx.localTracks[ctx.localTracks.length - 1];
    selectedTrack.selected = true;
    selectedTrack.index = ctx.localTracks.length - 1;
    ctx.setCreateTrack({
        enable: true,
        edit: true
    })
    ctx.setSelectedGpxFile(Object.assign({}, selectedTrack));
}

function closeCloudTrack(ctx, track) {
    if (ctx.gpxFiles[track.originalName]) {
        ctx.gpxFiles[track.originalName].url = null;
        ctx.setGpxFiles({...ctx.gpxFiles});
    }
}

function getTrackPoints(track) {
    let points = [];
    if (track.tracks) {
        track.tracks.forEach(track => {
            if (track.points) {
                track.points.forEach(point => {
                    if (point.geometry) {
                        point.geometry.forEach(trk => {
                            points.push(trk);
                        })
                    } else {
                        points.push(point);
                    }
                })
            }
        })
    }
    return points;
}

function getEditablePoints(track) {
    let points = [];
    if (track.tracks) {
        track.tracks.forEach(track => {
            track.points?.forEach(point => {
                points.push(point);
            })
        })
    }
    return points;
}

function addDistance(track) {
    if (track.tracks) {
        track.tracks.forEach(t => {
            if (!_.isEmpty(t.points)) {
                addDistanceToPoints(t.points);
            }
        })
    }
}

function addDistanceToPoints(points) {
    let distanceFromStart = 0;
    let prevGapInd = 0;
    for (let point of points) {
        if (point.geometry) {
            point.dist = 0;
            point.geometry.forEach(p => {
                point.dist += p.distance;
            })
            distanceFromStart += point.dist;
            point.distanceFromStart = distanceFromStart;
            if (point.geometry[point.geometry.length - 1]?.profile === TracksManager.PROFILE_GAP) {
                distanceFromStart = 0;
            }
        } else {
            let ind = _.indexOf(points, point);
            if (ind !== 0) {
                let prevPoint = points[ind - 1];
                if (prevGapInd !== ind) {
                    point.dist = Utils.getDistance(point.lat, point.lng, prevPoint.lat, prevPoint.lng);
                    distanceFromStart += point.dist;
                    point.distanceFromStart = distanceFromStart;
                } else {
                    point.dist = 0;
                    point.distanceFromStart = distanceFromStart;
                }
            } else {
                point.dist = 0;
                point.distanceFromStart = 0;
            }
            if (point.profile === TracksManager.PROFILE_GAP) {
                let segPoints = points.slice(prevGapInd, ind);
                prevGapInd = ind + 1;
                Utils.getPointsDist(segPoints);
                distanceFromStart = 0;
            }
        }
    }
}

async function getGpxTrack(file) {
    let trackData = {
        tracks: file.points ? [{points: file.points}] : file.tracks,
        wpts: file.wpts,
        metaData: file.metaData,
        pointsGroups: file.pointsGroups,
        ext: file.ext,
        analysis: null
    }

    if (!trackData.metaData?.name) {
        if (!trackData.metaData) {
            trackData.metaData = {};
        }
        trackData.metaData.name = file.name;
    }

    return await apiPost(`${process.env.REACT_APP_GPX_API}/gpx/save-track-data`, trackData,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });
}

async function saveTrack(ctx, currentFolder, fileName, type, file) {
    if (type !== FavoritesManager.FAVORITE_FILE_TYPE) {
        if (currentFolder === "Tracks") {
            currentFolder = "";
        } else {
            currentFolder = currentFolder + "/";
        }
    }
    if (ctx.loginUser) {
        let gpxFile = file ? file : (ctx.selectedGpxFile.file ? ctx.selectedGpxFile.file : ctx.selectedGpxFile);
        if (gpxFile.points) {
            gpxFile.tracks = [{points: gpxFile.points}];
        }
        let gpx = await getGpxTrack(gpxFile);
        if (gpx) {
            let convertedData = new TextEncoder().encode(gpx.data);
            let zippedResult = require('pako').gzip(convertedData, {to: "Uint8Array"});
            let convertedZipped = zippedResult.buffer;
            let oMyBlob = new Blob([convertedZipped], {type: "gpx"});
            let data = new FormData();
            data.append('file', oMyBlob, gpxFile.name);
            let res;
            res = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/upload-file`, data,
                {
                    params: {
                        name: type === FavoritesManager.FAVORITE_FILE_TYPE ? currentFolder : (currentFolder + fileName + ".gpx"),
                        type: type,
                    }
                }
            );

            if (res && res?.data?.status === 'ok') {
                const respGetFiles = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/list-files`, {});
                const resJson = await respGetFiles.json();
                ctx.setListFiles(resJson);
                deleteLocalTrack(ctx);
                return true;
            }
        }
    }
}

function deleteLocalTrack(ctx) {
    let currentTrackIndex = ctx.localTracks.findIndex(t => t.name === ctx.selectedGpxFile.name);
    if (currentTrackIndex !== -1) {
        localStorage.removeItem(LOCAL_COMPRESSED_TRACK_KEY + currentTrackIndex);
        ctx.localTracks.splice(currentTrackIndex, 1);
        if (ctx.localTracks.length > 0) {
            updateLocalTracks(ctx.localTracks);
        } else {
            localStorage.removeItem(DATA_SIZE_KEY);
        }
        ctx.setLocalTracks([...ctx.localTracks]);
        return true;
    }
    return false;
}

function formatRouteMode(routeMode) {
    let routeModeStr = routeMode.mode;
    Object.keys(routeMode.opts).forEach(o => {
        if (routeMode.opts[o]?.value === true) {
            routeModeStr += ',' + o;
        } else if (routeMode.opts[o]?.value === false) {
            // skip
        } else {
            routeModeStr += ',' + o + '=' + routeMode.opts[o].value;
        }
    });
    return routeModeStr;
}

async function updateRouteBetweenPoints(ctx, start, end, settings) {
    ctx.setProcessRouting(true);
    let routeMode = settings ? formatRouteMode(settings) : formatRouteMode(ctx.creatingRouteMode);
    let result = await apiPost(`${process.env.REACT_APP_GPX_API}/routing/update-route-between-points`, '',
        {
            params: {
                start: JSON.stringify({latitude: start.lat, longitude: start.lng}),
                end: JSON.stringify({latitude: end.lat, longitude: end.lng}),
                routeMode: routeMode,
                hasRouting: start.segment !== null || end.segment !== null,
                maxDist: process.env.REACT_APP_MAX_ROUTE_DISTANCE
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    if (result) {
        let data = result?.data; // points
        if (typeof result?.data === "string") {
            data = JSON.parse(quickNaNfix(result.data));
        }
        if (data?.msg) {
            ctx.setRoutingErrorMsg(data?.msg);
        }
        updateGapProfileOneSegment(end, data?.points);
        return data?.points;
    }
}

async function updateRoute(points) {
    let result;
    if (points?.length > 0) {
        result = await apiGet(`${process.env.REACT_APP_GPX_API}/routing/get-route`, {
            method: 'POST',
            data: points,
        });
    }
    if (result && result.data) {
        let data = result.data; // points
        if (typeof result.data === "string") {
            data = JSON.parse(quickNaNfix(result.data));
        }
        updateGapProfileAllSegments(data.points);
        return data.points;
    } else {
        console.log('updateRoute fallback');
        return points;
    }
}

function updateGapProfileAllSegments(points) {
    if (points) {
        points.forEach(p => {
            updateGapProfileOneSegment(p, p.geometry);
        })
    }
}

function updateGapProfileOneSegment(routPoint, points) {
    if (routPoint.profile === PROFILE_GAP) {
        points[points.length - 1].profile = PROFILE_GAP;
    }
}

function updateStat(track) {
    addDistance(track);
    let activePoints = track.points;
    if (track.analysis?.totalDistance) {
        track.analysis.totalDistance = activePoints[activePoints.length - 1].distanceFromStart;
    }
    track.analysis.timeMoving = null;
    track.analysis.diffElevationUp = null;
    track.analysis.diffElevationDown = null;
    if (track.analysis.hasSpeedData) {
        let totalSpeedSum = 0;
        let speedCount = 0;
        for (let t of track.tracks) {
            for (let p of t.points) {
                if (p.geometry) {
                    for (let g of p.geometry) {
                        let speed = g.ext.speed;
                        track.analysis.minSpeed = Math.min(speed, track.analysis.minSpeed);
                        if (speed > 0) {
                            totalSpeedSum += speed;
                            track.analysis.maxSpeed = Math.max(speed, track.analysis.maxSpeed);
                            speedCount++;
                        }
                    }
                } else {
                    let speed = p.ext.speed;
                    track.analysis.minSpeed = Math.min(speed, track.analysis.minSpeed);
                    if (speed > 0) {
                        totalSpeedSum += speed;
                        track.analysis.maxSpeed = Math.max(speed, track.analysis.maxSpeed);
                        speedCount++;
                    }
                }
            }
        }
        track.analysis.avgSpeed = totalSpeedSum / speedCount;
    }

    if (track.analysis.hasElevationData) {
        let totalEleSum = 0;
        let eleCount = 0;
        for (let t of track.tracks) {
            for (let p of t.points) {
                if (p.geometry) {
                    for (let g of p.geometry) {
                        let ele = getEle(g, "ele", p.geometry);
                        track.analysis.minElevation = Math.min(ele, track.analysis.minElevation);
                        if (ele > 0) {
                            totalEleSum += ele;
                            track.analysis.maxElevation = Math.max(ele, track.analysis.maxElevation);
                            eleCount++;
                        }
                    }
                } else {
                    let ele = getEle(p, "ele", t.points);
                    track.analysis.minElevation = Math.min(ele, track.analysis.minElevation);
                    if (ele > 0) {
                        totalEleSum += ele;
                        track.analysis.maxElevation = Math.max(ele, track.analysis.maxElevation);
                        eleCount++;
                    }
                }
            }
        }
        track.analysis.avgElevation = totalEleSum / eleCount;
    }
}

function getEle(point, elevation, array) {
    let ele = point[elevation];
    let ind = array.indexOf(point);
    //value smoothing
    while (isNaN(ele) || ele === NAN_MARKER) {
        if (array && ind !== 0) {
            let prevP = array[ind - 1];
            if (prevP && !isNaN(prevP[elevation]) && prevP[elevation] !== NAN_MARKER) {
                return prevP[elevation];
            } else {
                if (ind - array.indexOf(point) > 2) {
                    return undefined;
                } else {
                    ind++;
                }
            }
        } else {
            ele = 0;
        }
    }
    return ele;
}

async function getTrackWithAnalysis(path, ctx, setLoading, points) {
    setLoading(true);
    const wpts = _.cloneDeep(ctx.selectedGpxFile.wpts);
    const pointsGroups = _.cloneDeep(ctx.selectedGpxFile.pointsGroups);
    let data = {
        tracks: points ? [{points: points}] : ctx.selectedGpxFile.tracks,
        metaData: ctx.selectedGpxFile.metaData,
        ext: ctx.selectedGpxFile.ext,
        analysis: ctx.selectedGpxFile.analysis
    }
    let resp = await apiPost(`${process.env.REACT_APP_GPX_API}/gpx/${path}`, data,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    if (resp.data) {
        setLoading(false);
        let data = FavoritesManager.prepareTrackData(resp.data);
        Object.keys(data.data).forEach(t => {
            ctx.selectedGpxFile[`${t}`] = data.data[t];
        });
        ctx.selectedGpxFile.update = true;
        if (path !== TracksManager.GET_SRTM_DATA) {
            ctx.selectedGpxFile.analysis.srtmAnalysis = false;
        }
        ctx.selectedGpxFile.wpts = wpts;
        ctx.selectedGpxFile.pointsGroups = pointsGroups;
        return ctx.selectedGpxFile;
    } else {
        setLoading(false);
        console.log('getTrackWithAnalysis fallback');
        return ctx.selectedGpxFile;
    }
}

async function getLocalTrackAnalysis(f) {
    let data = {
        tracks: f.tracks,
        metaData: f.metaData,
        ext: f.ext
    }
    let resp = await apiPost(`${process.env.REACT_APP_GPX_API}/gpx/${GET_ANALYSIS}`, data,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    if (resp.data) {
        let data = FavoritesManager.prepareTrackData(resp.data);
        Object.keys(data.data).forEach(t => {
            f[`${t}`] = data.data[t];
        });
        return f;
    } else {
        console.log('getLocalTrackAnalysis fallback');
        return f;
    }
}

function createTrack(ctx, latlng) {
    let createState = {
        enable: true
    }
    if (latlng) {
        createState.latlng = latlng;
    }
    if (ctx.selectedGpxFile) {
        createState.closePrev = {
            file: _.cloneDeep(ctx.selectedGpxFile)
        }
    }
    ctx.setCreateTrack({...createState});
}

function createGpxTracks() {
    let res = [];
    res.push({points: []})
    return res;
}

function clearTrack(file, points) {
    let emptyFile = {};
    emptyFile.name = file.name;
    emptyFile.points = points ? points : [];
    emptyFile.tracks = TracksManager.createGpxTracks();
    emptyFile.layers = file.layers;
    emptyFile.updateLayers = true;

    return emptyFile;
}

function getTracks(allFiles) {
    return (!allFiles || !allFiles.uniqueFiles ? [] :
        allFiles.uniqueFiles).filter((item) => {
        return (item.type === 'gpx' || item.type === 'GPX')
            && (item.name.slice(-4) === '.gpx' || item.name.slice(-4) === '.GPX');
    });
}

function getFavoriteGroups(allFiles) {
    return (!allFiles || !allFiles.uniqueFiles ? [] :
        allFiles.uniqueFiles).filter((item) => {
        return item.type === FavoritesManager.FAVORITE_FILE_TYPE && item.name.slice(-4) === '.gpx';
    });
}

function isEqualPoints(point1, point2) {
    return point1.lat === point2.lat && point1.lng === point2.lng;
}

function updateState(ctx) {
    ctx.trackState.update = true;
    ctx.setTrackState({...ctx.trackState});
}

function updateGlobalProfileState(ctx, profile) {
    ctx.setCreatingRouteMode({
        mode: profile,
        modes: ctx.creatingRouteMode.modes,
        opts: ctx.creatingRouteMode.modes[profile]?.params,
        colors: ctx.creatingRouteMode.colors
    })
}

const TracksManager = {
    loadTracks,
    saveTracks: saveLocalTrack,
    getFileName,
    prepareName,
    getTrackData,
    addTrack,
    getTrackPoints,
    getGpxTrack,
    saveTrack,
    getEditablePoints,
    updateRouteBetweenPoints,
    updateRoute,
    updateStat,
    getEle,
    deleteLocalTrack,
    createName,
    getTrackWithAnalysis,
    prepareTrack,
    addDistance,
    addDistanceToPoints,
    createTrack,
    createGpxTracks,
    clearTrack,
    getGroup,
    formatRouteMode,
    getTracks,
    getFavoriteGroups,
    isEqualPoints,
    updateState,
    getLocalTrackAnalysis,
    updateGlobalProfileState,
    GPX_FILE_TYPE: GPX_FILE_TYPE,
    GET_SRTM_DATA: GET_SRTM_DATA,
    GET_ANALYSIS: GET_ANALYSIS,
    PROFILE_LINE: PROFILE_LINE,
    PROFILE_GAP: PROFILE_GAP,
    PROFILE_CAR: PROFILE_CAR,
    NAN_MARKER: NAN_MARKER,
    CHANGE_PROFILE_BEFORE: CHANGE_PROFILE_BEFORE,
    CHANGE_PROFILE_AFTER: CHANGE_PROFILE_AFTER,
    CHANGE_PROFILE_ALL: CHANGE_PROFILE_ALL,
    TRACK_VISIBLE_FLAG: TRACK_VISIBLE_FLAG
};

export default TracksManager;
