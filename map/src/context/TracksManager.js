import Utils, { quickNaNfix } from '../util/Utils';
import FavoritesManager from './FavoritesManager';
import _ from 'lodash';
import { apiGet, apiPost } from '../util/HttpApi';
import { compressFromJSON, decompressToJSON } from '../util/GzipBase64.mjs';
import { confirm } from '../dialogs/GlobalConfirmationDialog';
import L from 'leaflet';
import MarkerOptions from '../map/markers/MarkerOptions';

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
const AUTO_SRTM_MAX_POINTS = 10000;
const FIT_BOUNDS_OPTIONS = { maxZoom: 17 }; // don't fitBounds closer

async function loadTracks(setLoading) {
    let localTracks = [];
    let names = Object.keys(localStorage);
    setLoading(true);
    for (let name of names) {
        if (name.includes(LOCAL_COMPRESSED_TRACK_KEY)) {
            let ind = name.split('_')[1];
            try {
                const json = await decompressToJSON(localStorage.getItem(name));
                if (json) {
                    localTracks[ind] = json;
                } else {
                    console.error('loadTracks empty track: ' + name);
                    localStorage.removeItem(name);
                }
            } catch {
                console.error('loadTracks JSON/decompress error: ' + name);
                localStorage.removeItem(name);
            }
        }
    }

    localTracks = fixLocalTracks(localTracks); // fix holes
    localTracks = openVisibleTracks(localTracks); // mark visible

    setLoading(false);
    return localTracks;
}

function fixLocalTracks(localTracks) {
    if (localTracks && localTracks.length !== Object.keys(localTracks).length) {
        console.error('loadTracks localTrack_0 (hole) localTrack_X workaround');
        const fixTracks = [];
        localTracks.forEach((t) => fixTracks.push(t));
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
                    } else {
                        f.selected = false;
                    }
                }
            }
        }
    }
    return localTracks;
}

function saveLocalTrack({ ctx, track }) {
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
        let res = await compressFromJSON(prepareLocalTrack(track));
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
        tracks: prepareTrack.tracks,
        wpts: prepareTrack.wpts,
        pointsGroups: prepareTrack.pointsGroups,
        ext: prepareTrack.ext,
        analysis: prepareAnalysis(prepareTrack.analysis),
        selected: false,
        originalName: prepareTrack.originalName,
        hasGeo: prepareTrack.hasGeo,
    };
}

function prepareAnalysis(analysis) {
    let newAnalysis = Object.assign({}, analysis);
    newAnalysis.avgElevationSrtm = -1;
    newAnalysis.maxElevationSrtm = -1;
    newAnalysis.minElevationSrtm = -1;
    newAnalysis.srtmAnalysis = false;
    newAnalysis.isSrtmApplied = false; // additionally this flag is absent after GET_ANALYSIS request
    return newAnalysis;
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
    ctx.localTracks.forEach((t) => {
        if (t.name.split(' - ')[0] === date) {
            let sp = parseInt(t.name.split(' - ')[1], 10);
            count++;
            if (sp > maxNumber) {
                maxNumber = sp;
            }
        }
    });
    name = count > 0 ? date + ' - ' + (count + 1) : date;
    ctx.localTracks.forEach((t) => {
        if (t.name === name) {
            name = date + ' - ' + (maxNumber + 1);
        }
    });

    return name;
}

function getFileName(currentFile) {
    let file = Object.assign('', currentFile);
    return prepareName(file.name, file.local);
}

function prepareName(name, local) {
    const result = name.replace(/.gpx/, '');
    if (result.includes('/')) {
        return result.split('/')[1];
    } else if (local && result.includes(':')) {
        return result.split(':')[1];
    } else {
        return result;
    }
}

function getGroup(name, local) {
    const result = name.replace(/.gpx/, '');
    if (result.includes('/')) {
        return result.split('/')[0];
    } else if (local && result.includes(':')) {
        return result.split(':')[0];
    } else {
        return 'Tracks';
    }
}

async function getTrackData(file) {
    let formData = new FormData();
    formData.append('file', file);
    const response = await apiGet(`${process.env.REACT_APP_GPX_API}/gpx/process-track-data`, {
        apiCache: true,
        method: 'POST',
        credentials: 'include',
        body: formData,
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

// handle "Edit Cloud Track" buttons
// show overwrite-confirmation dialog
// called from GeneralInfo and PanelButtons
function handleEditCloudTrack(ctx) {
    const track = { ...ctx.selectedGpxFile }; // prepare copy
    const name = prepareName(track.name, true); // get local name
    const localTrackNotFound = !ctx.localTracks.find((t) => t.name === name);

    function proceed() {
        addTrack({ ctx, track, overwrite: true });
        ctx.setUpdateInfoBlock(true);
    }

    confirm({
        ctx,
        callback: proceed,
        skip: localTrackNotFound,
        text: name + ' - Local track found. Overwrite?',
    });
}

function addTrack({ ctx, track, overwrite = false } = {}) {
    const newLocalTracks = [...ctx.localTracks];

    const originalName = track.name;
    const firstName = prepareName(originalName, true);
    let localName = firstName;

    // find free name
    if (overwrite === false) {
        let occupied = null;
        for (let i = 1; i < 100; i++) {
            occupied = newLocalTracks?.find((t) => t.name === localName);
            if (!occupied) {
                break; // found
            }
            localName = firstName + ' - ' + i; // try with "Track - X"
        }
        if (occupied) {
            throw new Error('TracksManager addTrack() too many same-tracks');
        }
    }

    prepareTrack(track, localName, originalName);

    closeCloudTrack(ctx, track);
    openNewLocalTrack(ctx, track, overwrite);

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

function prepareTrack(track, localName = null, originalName = null) {
    track.originalName = originalName ?? track.name;
    track.name = localName ?? prepareName(track.name, true);
    track.id = track.name;

    track.hasGeo = hasGeo(track);
    addDistance(track);
}

function hasGeo(track) {
    let hasGeo;
    if (!_.isEmpty(track.points)) {
        track.points.forEach((p) => {
            if (p.geometry?.length > 0 && !hasGeo) {
                hasGeo = true;
                return true;
            }
        });
    } else {
        if (track.tracks) {
            track.tracks.forEach((t) => {
                if (t.points && !hasGeo) {
                    t.points.forEach((p) => {
                        if (p.geometry?.length > 0 && !hasGeo) {
                            hasGeo = true;
                            return true;
                        }
                    });
                }
            });
        }
    }
    return hasGeo;
}

// set copy of track with .overwrite <bool> and .selected = true
// overwrite flag used later when re-uploading (save to cloud)
// set type of current object, enable editor with "edit" flag
function openNewLocalTrack(ctx, track, overwrite = false) {
    const createState = {
        enable: true, // start-editor
        edit: true,
        cloudAutoSave: overwrite,
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

    ctx.setCurrentObjectType(ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK);
}

function closeCloudTrack(ctx, track) {
    if (ctx.gpxFiles[track.originalName]) {
        ctx.gpxFiles[track.originalName].url = null;
        ctx.setGpxFiles({ ...ctx.gpxFiles });
    }
}

function getTrackPoints(track) {
    let points = [];
    if (track.tracks) {
        track.tracks.forEach((track) => {
            if (track.points) {
                track.points.forEach((point) => {
                    if (point.geometry) {
                        point.geometry.forEach((trk) => {
                            points.push(trk);
                        });
                    } else {
                        points.push(point);
                    }
                });
            }
        });
    }
    return points;
}

function getEditablePoints(track) {
    let points = [];
    if (track.tracks) {
        track.tracks.forEach((track) => {
            track.points?.forEach((point) => {
                points.push(point);
            });
        });
    }
    return points;
}

function addDistance(track) {
    if (track.tracks) {
        track.tracks.forEach((t) => {
            if (!_.isEmpty(t.points)) {
                addDistanceToPoints(t.points);
            }
        });
    }
}

function addDistanceToPoints(points) {
    let distanceTotal = 0;
    let distanceSegment = 0;
    let prevGapInd = 0;
    for (let point of points) {
        if (point.geometry) {
            point.dist = 0;
            point.geometry.forEach((p) => {
                point.dist += p.distance;
            });
            distanceTotal += point.dist;
            distanceSegment += point.dist;
            point.distanceTotal = distanceTotal;
            point.distanceSegment = distanceSegment;
            if (point.geometry[point.geometry.length - 1]?.profile === TracksManager.PROFILE_GAP) {
                distanceSegment = 0;
            }
        } else {
            let ind = _.indexOf(points, point);
            if (ind !== 0) {
                let prevPoint = points[ind - 1];
                if (prevGapInd !== ind) {
                    point.dist = Utils.getDistance(point.lat, point.lng, prevPoint.lat, prevPoint.lng);
                    distanceTotal += point.dist;
                    distanceSegment += point.dist;
                    point.distanceTotal = distanceTotal;
                    point.distanceSegment = distanceSegment;
                } else {
                    point.dist = 0;
                    point.distanceTotal = distanceTotal;
                    point.distanceSegment = distanceSegment;
                }
            } else {
                point.dist = 0;
                point.distanceSegment = 0;
                point.distanceTotal = distanceTotal;
            }
            if (point.profile === TracksManager.PROFILE_GAP) {
                let segPoints = points.slice(prevGapInd, ind);
                prevGapInd = ind + 1;
                Utils.getPointsDist(segPoints);
                distanceSegment = 0;
            }
        }
    }
}

async function getGpxTrack(file) {
    let trackData = {
        tracks: file.points ? [{ points: file.points }] : file.tracks,
        wpts: file.wpts,
        metaData: file.metaData,
        pointsGroups: file.pointsGroups,
        ext: file.ext,
        analysis: null,
    };

    if (!trackData.metaData?.name) {
        if (!trackData.metaData) {
            trackData.metaData = {};
        }
        trackData.metaData.name = file.name;
    }

    return await apiPost(`${process.env.REACT_APP_GPX_API}/gpx/save-track-data`, trackData, {
        apiCache: true,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

async function saveTrack(ctx, currentFolder, fileName, type, file) {
    if (type !== FavoritesManager.FAVORITE_FILE_TYPE) {
        if (currentFolder === 'Tracks') {
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
        const gpx = await getGpxTrack(gpxFile);
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

            const res = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/upload-file`, data, { params });

            if (res && res?.data?.status === 'ok') {
                // re-download gpx
                const downloadFile = { ...gpxFile, ...params };
                downloadAfterUpload(ctx, downloadFile);
                deleteLocalTrack(ctx);

                // refresh list-files but skip if uploaded file is already there
                if (!ctx.listFiles.uniqueFiles?.find((f) => f.name === params.name)) {
                    const respGetFiles = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/list-files`, {});
                    const resJson = await respGetFiles.json();
                    if (resJson && resJson.uniqueFiles) {
                        ctx.setListFiles(resJson);
                    }
                }

                return true;

                // API request /list-files is too slow for this moment... commented!
                // const respGetFiles = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/list-files`, {});
                // const resJson = await respGetFiles.json();
                // if (resJson && resJson.uniqueFiles) {
                //     ctx.setListFiles(resJson);
                //     const file = resJson.uniqueFiles.find((f) => f.name === fileName + '.gpx');
                //     if (file) {
                //         downloadAfterUpload(ctx, file);
                //         deleteLocalTrack(ctx);
                //         return true;
                //     }
                // }
            }
        }
    }
    return false;
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
        const type = ctx.OBJECT_TYPE_CLOUD_TRACK;
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

function deleteLocalTrack(ctx) {
    const currentTrackIndex = ctx.localTracks.findIndex((t) => t.name === ctx.selectedGpxFile.name);
    if (currentTrackIndex !== -1) {
        localStorage.removeItem(LOCAL_COMPRESSED_TRACK_KEY + currentTrackIndex);
        ctx.localTracks.splice(currentTrackIndex, 1);
        if (ctx.localTracks.length > 0) {
            updateLocalTracks(ctx.localTracks);
        } else {
            localStorage.removeItem(DATA_SIZE_KEY);
        }
        ctx.setLocalTracks([...ctx.localTracks]);
    } else {
        // console.debug('deleteLocalTrack unable to find track');
    }
}

function formatRouteMode({ profile = 'car', params }) {
    let routeModeStr = profile ?? 'car';
    if (params) {
        Object.keys(params).forEach((o) => {
            if (params[o]?.value === true) {
                routeModeStr += ',' + o;
            } else if (params[o]?.value === false) {
                // skip
            } else {
                routeModeStr += ',' + o + '=' + params[o].value;
            }
        });
    }
    return routeModeStr;
}

// return params updated with parsed routeMode
function decodeRouteMode({ routeMode, params }) {
    const draft = { ...params };

    routeMode.split(',').forEach((p) => {
        // assume empty as true (see formatRouteMode)
        const [key, val = true] = p.split('=');
        if (draft[key]) {
            draft[key].value = val;
        }
    });

    return draft;
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
        if (typeof result.data === 'string') {
            data = JSON.parse(quickNaNfix(result.data));
        }
        updateGapProfileAllSegments(data.points);
        return data.points;
    } else {
        console.error('updateRoute fallback');
        return points;
    }
}

function updateGapProfileAllSegments(points) {
    if (points) {
        points.forEach((p) => {
            updateGapProfileOneSegment(p, p.geometry);
        });
    }
}

function updateGapProfileOneSegment(routePoint, points) {
    if (routePoint.profile === PROFILE_GAP) {
        points[points.length - 1].profile = PROFILE_GAP;
    }
}

function updateStat(track) {
    addDistance(track);
    let activePoints = track.points;
    if (track.analysis?.totalDistance) {
        track.analysis.totalDistance = activePoints[activePoints.length - 1].distanceTotal;
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
                        let ele = getEle(g, 'ele', p.geometry);
                        track.analysis.minElevation = Math.min(ele, track.analysis.minElevation);
                        if (ele > 0) {
                            totalEleSum += ele;
                            track.analysis.maxElevation = Math.max(ele, track.analysis.maxElevation);
                            eleCount++;
                        }
                    }
                } else {
                    let ele = getEle(p, 'ele', t.points);
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
                return Number(prevP[elevation]);
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
    return Number(ele);
}

function isEmptyEle(ele) {
    return ele === NAN_MARKER || isNaN(ele) || ele === null || ele === undefined;
}

function isNonZeroEle(ele) {
    return ele !== NAN_MARKER && (ele > 0.01 || ele < -0.01);
}

export function eligibleToApplySrtm({ track }) {
    /**
     * 1) Apply SRTM if any geometry or any point have empty elevation #2156
     * 2) Apply SRTM if all points have exactly zero elevaton (gpx-bug) #2136
     */
    function detectNoElevation(track) {
        function checkPoints(points) {
            let nonZeroPoints = 0;
            if (points && points.length >= 2) {
                for (let p = 1; p < points.length; p++) {
                    const geometry = points[p].geometry;
                    if (geometry && geometry.length > 0) {
                        for (let g = 0; g < geometry.length; g++) {
                            if (isEmptyEle(geometry[g].ele)) {
                                return true; // check empty geometry
                            }
                            if (isNonZeroEle(geometry[g].ele)) {
                                nonZeroPoints++; // count non-zero elevation (gpx bug)
                            }
                        }
                    } else {
                        // check points if empty geo
                        if (isEmptyEle(points[p].ele)) {
                            return true;
                        }
                        if (isNonZeroEle(points[p].ele)) {
                            nonZeroPoints++;
                        }
                    }
                }
            }
            return nonZeroPoints === 0 ? true : false; // fix all-zero-elevation gpx problem
        }

        if (track.points) {
            return checkPoints(track.points);
        }

        if (track.tracks && track.tracks.length > 0) {
            for (let t = 0; t < track.tracks.length; t++) {
                if (checkPoints(track.tracks[t].points)) {
                    return true;
                }
            }
        }

        return false;
    }

    function checkMaxTotalPoints(track) {
        let totalPoints = 0;
        function countPointsAndGeo(points) {
            totalPoints += points?.length ?? 0;
            points?.forEach((p) => (totalPoints += p.geometry?.length ?? 0));
        }

        countPointsAndGeo(track.points); // count points

        if (totalPoints === 0) {
            // count all tracks[].points if no track.points
            track.tracks?.forEach((t) => countPointsAndGeo(t.points));
        }

        return totalPoints <= AUTO_SRTM_MAX_POINTS;
    }

    const analysis = track.analysis;

    if (!track || isEmptyTrack(track, false)) {
        return false; // empty track w/o points
    }

    if (analysis && analysis.isSrtmApplied) {
        return false; // already applied
    }

    if (analysis && checkMaxTotalPoints(track) && detectNoElevation(track)) {
        return true; // ok - apply
    }

    return false; // no apply
}

export async function applySrtmElevation({ track, setLoading }) {
    function latlngKey(point) {
        return Number(point.lat).toFixed(4) + ',' + Number(point.lng).toFixed(4); // ~11m (<30m SRTM precision)
    }
    function parseSrtmPoints(track) {
        const cache = {};
        function parse(p) {
            if (p && p.lat && p.lng && (isNonZeroEle(p.srtmEle) || isNonZeroEle(p.ele))) {
                const key = latlngKey(p);
                // additionally, try to keep original gpx elevation
                const val = Number(Number(isNonZeroEle(p.ele) ? p.ele : p.srtmEle).toFixed(2)); // =1cm precision
                cache[key] = val;
            }
        }
        track.points?.forEach((p) => parse(p));
        track.points?.forEach((p) => p.geometry?.forEach((g) => parse(g)));
        track.tracks?.forEach((t) => t.points?.forEach((p) => parse(p)));
        track.tracks?.forEach((t) => t.points?.forEach((p) => p.geometry?.forEach((g) => parse(g))));
        return cache;
    }
    function applySrtmPoints({ track, cache }) {
        function apply(p) {
            if (p && p.lat && p.lng) {
                const key = latlngKey(p);
                if (cache[key]) {
                    p.ele = cache[key];
                }
            }
        }
        track.points?.forEach((p) => apply(p));
        track.points?.forEach((p) => p.geometry?.forEach((g) => apply(g)));
        track.tracks?.forEach((t) => t.points?.forEach((p) => apply(p)));
        track.tracks?.forEach((t) => t.points?.forEach((p) => p.geometry?.forEach((g) => apply(g))));
    }
    const fakeCtx = { selectedGpxFile: track };
    const newGpxFile = await getTrackWithAnalysis(GET_SRTM_DATA, fakeCtx, setLoading, track.points);
    if (newGpxFile.analysis) {
        const analysis = newGpxFile.analysis; // ref

        // convert srtm-to-main
        if (analysis.srtmAnalysis) {
            // swap flags
            analysis.hasElevationData = true;
            analysis.srtmAnalysis = false; // allow recalc by user

            // swap min/avg/max
            analysis.minElevation = analysis.minElevationSrtm;
            analysis.avgElevation = analysis.avgElevationSrtm;
            analysis.maxElevation = analysis.maxElevationSrtm;
            analysis.minElevationSrtm = -1;
            analysis.avgElevationSrtm = -1;
            analysis.maxElevationSrtm = -1;

            // swap points and geometry
            const cache = parseSrtmPoints(newGpxFile);
            applySrtmPoints({ track: newGpxFile, cache });
        }

        analysis.isSrtmApplied = true; // mark as already applied
    }
    return newGpxFile;
}

async function getTrackWithAnalysis(path, ctx, setLoading, points) {
    setLoading(true);
    const wpts = _.cloneDeep(ctx.selectedGpxFile.wpts);
    const pointsGroups = _.cloneDeep(ctx.selectedGpxFile.pointsGroups);
    const postData = {
        tracks: points ? [{ points: points }] : ctx.selectedGpxFile.tracks,
        metaData: ctx.selectedGpxFile.metaData,
        ext: ctx.selectedGpxFile.ext,
        analysis: ctx.selectedGpxFile.analysis,
    };

    if (postData.analysis) {
        // zero every-time-unique variables for better caching
        postData.analysis.startTime = postData.analysis.endTime = 0;
    }

    const resp = await apiPost(`${process.env.REACT_APP_GPX_API}/gpx/${path}`, postData, {
        apiCache: true,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (resp.data) {
        setLoading(false);

        // data will be mutated, use cloneDeep to avoid apiCache mutations
        const data = FavoritesManager.prepareTrackData(_.cloneDeep(resp.data));

        const newGpxFile = { ...ctx.selectedGpxFile }; // don't modify state

        Object.keys(data.data).forEach((t) => {
            newGpxFile[`${t}`] = data.data[t];
        });

        newGpxFile.update = true;
        newGpxFile.wpts = wpts;
        newGpxFile.pointsGroups = pointsGroups;

        // auto-srtm
        if (path === GET_ANALYSIS) {
            const track = newGpxFile;
            if (eligibleToApplySrtm({ track })) {
                return applySrtmElevation({ track, setLoading });
            }
        }

        return newGpxFile;
    } else {
        setLoading(false);
        console.error('getTrackWithAnalysis fallback', path);
        return ctx.selectedGpxFile;
    }
}

function createTrack(ctx, latlng) {
    let createState = {
        enable: true, // start-editor
    };
    if (latlng) {
        createState.latlng = latlng;
    }
    // cleanup
    if (ctx.createTrack?.enable && ctx.selectedGpxFile) {
        createState.closePrev = {
            file: _.cloneDeep(ctx.selectedGpxFile),
        };
    }
    ctx.setCreateTrack({ ...createState });

    ctx.trackRouter.escapeFromLineProfile();
}

function createGpxTracks() {
    let res = [];
    res.push({ points: [] });
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
    return (!allFiles || !allFiles.uniqueFiles ? [] : allFiles.uniqueFiles).filter((item) => {
        return (
            (item.type === 'gpx' || item.type === 'GPX') &&
            (item.name.slice(-4) === '.gpx' || item.name.slice(-4) === '.GPX')
        );
    });
}

function getFavoriteGroups(allFiles) {
    return (!allFiles || !allFiles.uniqueFiles ? [] : allFiles.uniqueFiles).filter((item) => {
        return item.type === FavoritesManager.FAVORITE_FILE_TYPE && item.name.slice(-4) === '.gpx';
    });
}

function isEqualPoints(point1, point2) {
    return point1.lat === point2.lat && point1.lng === point2.lng;
}

function updateState(ctx) {
    ctx.trackState.update = true;
    ctx.setTrackState({ ...ctx.trackState });
}

// check: geo-points, way-points, gpx-trkpt
export function isEmptyTrack(track, checkWpts = true, checkPoints = true) {
    let hasPoints;
    let hasWpts;
    if (checkPoints) {
        hasPoints = track?.points?.length > 0 || (track?.tracks?.length > 0 && track.tracks[0].points?.length > 0);
        if (!checkWpts) {
            return !hasPoints;
        }
    }
    if (checkWpts) {
        hasWpts = track?.wpts?.length > 0 || (track?.tracks?.length > 0 && track.tracks[0].wpts?.length > 0);
        if (!checkPoints) {
            return !hasWpts;
        }
    }
    return !hasPoints && !hasWpts;
}

function showSelectedPointOnMap(ctxTrack, map, selectedPointMarker, setSelectedPointMarker) {
    if (ctxTrack?.showPoint?.layer) {
        map.setView([ctxTrack.showPoint.layer._latlng.lat, ctxTrack.showPoint.layer._latlng.lng], 17);
    } else {
        if (selectedPointMarker) {
            map.removeLayer(selectedPointMarker.marker);
        }
        let marker = createPointMarkerOnMap(ctxTrack, map);
        setSelectedPointMarker({ marker: marker, trackName: ctxTrack.name });
    }
}

function createPointMarkerOnMap(ctxTrack, map) {
    return new L.marker(
        {
            lng: ctxTrack.showPoint.lng,
            lat: ctxTrack.showPoint.lat,
        },
        {
            icon: MarkerOptions.options.pointerIcons,
        }
    ).addTo(map);
}

const TracksManager = {
    loadTracks,
    saveTracks: saveLocalTrack,
    getFileName,
    prepareName,
    getTrackData,
    handleEditCloudTrack,
    addTrack,
    getTrackPoints,
    getGpxTrack,
    saveTrack,
    getEditablePoints,
    updateGapProfileOneSegment,
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
    decodeRouteMode,
    getTracks,
    getFavoriteGroups,
    isEqualPoints,
    updateState,
    prepareAnalysis,
    showSelectedPointOnMap,
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
    TRACK_VISIBLE_FLAG: TRACK_VISIBLE_FLAG,
    FIT_BOUNDS_OPTIONS: FIT_BOUNDS_OPTIONS,
};

export default TracksManager;
