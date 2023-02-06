import Utils from "../util/Utils";
import {post} from "axios";
import FavoritesManager from "./FavoritesManager";
import _ from "lodash";

const GPX_FILE_TYPE = 'GPX';
const GET_SRTM_DATA = 'get-srtm-data';
const GET_ANALYSIS = 'get-analysis';
const PROFILE_LINE = 'line';
const PROFILE_GAP = 'gap';
const NAN_MARKER = 99999;

function loadTracks() {
    return localStorage.getItem('localTracks') !== null ? JSON.parse(localStorage.getItem('localTracks')) : [];
}

function saveTracks(tracks) {
    if (tracks.length > 0) {
        let res = [];
        tracks.forEach(function (t) {
            let track = _.cloneDeep(t);
            res.push({
                name: track.name,
                id: track.id,
                metaData: track.metaData,
                tracks: track.points ? [{points: track.points}] : track.tracks,
                wpts: track.wpts,
                ext: track.ext,
                analysis: track.analysis,
                selected: false,
                hasOnlyTrk: track.hasOnlyTrk
            })
        })
        localStorage.setItem('localTracks', JSON.stringify(res));
    } else {
        localStorage.clear();
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

async function getTrackData(file) {
    let formData = new FormData();
    formData.append('file', file);
    const response = await Utils.fetchUtil(`${process.env.REACT_APP_GPX_API}/gpx/process-track-data`, {
        method: 'POST',
        credentials: 'include',
        body: formData
    });

    let track = null;
    if (response.ok) {
        let resp = await response.text();
        if (resp) {
            let data = JSON.parse(resp.replace(/\bNaN\b/g, '"***NaN***"'), function (key, value) {
                if (value === "***NaN***") {
                    return key === "ele" ? NAN_MARKER : NaN;
                } else {
                    return value;
                }
            });
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
    TracksManager.saveTracks(ctx.localTracks);
}

function prepareTrack(track) {
    track.originalName = _.cloneDeep(track.name);
    track.name = TracksManager.prepareName(track.name, true);
    track.id = track.name;
    addDistance(track);
}

function openNewLocalTrack(ctx) {
    let type = ctx.OBJECT_TYPE_LOCAL_CLIENT_TRACK;
    ctx.setCurrentObjectType(type);
    let selectedTrack = ctx.localTracks[ctx.localTracks.length - 1];
    selectedTrack.selected = true;
    selectedTrack.index = ctx.localTracks.length - 1;
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
            track.points.forEach(point => {
                if (point.geometry) {
                    point.geometry.forEach(trk => {
                        points.push(trk);
                    })
                } else {
                    points.push(point);
                }
            })
        })
    }
    return points;
}

function getEditablePoints(track) {
    let points = [];
    if (track.tracks) {
        track.tracks.forEach(track => {
            track.points.forEach(point => {
                points.push(point);
            })
        })
    }
    return points;
}

function addDistance(track) {
    if (track.tracks) {
        track.tracks.forEach(t => {
            if (!track.hasOnlyTrk) {
                addDistanceToPoints(t.points, track);
            } else {
                t.points = Utils.getPointsDist(t.points);
            }
        })
    }
}

function addDistanceToPoints(points, track) {
    let distanceFromStart = 0;
    for (let point of points) {
        if (point.geometry) {
            if (point.geometry.length > 0) {
                point.geometry.forEach(trk => {
                    let currIndex = point.geometry.indexOf(trk);
                    if ((!trk.distance || trk.distance === 0) && currIndex !== 0) {
                        trk.distance = Utils.getDistance(trk.lat, trk.lng, point.geometry[currIndex - 1].lat, point.geometry[currIndex - 1].lng);
                    } else {
                        trk.distance = 0;
                    }
                    distanceFromStart += trk.distance;
                    point.distanceFromStart = distanceFromStart;
                    point.distance += trk.distance;
                })
            } else {
                if (track) {
                    track.hasOnlyTrk = true;
                }
                point.distanceFromStart = 0;
            }
        } else {
            points = Utils.getPointsDist(points);
            break;
        }
    }
}

async function getGpxTrack(file) {

    let trackData = {
        tracks: file.tracks,
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

    return await post(`${process.env.REACT_APP_GPX_API}/gpx/save-track-data`, trackData,
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
        let gpx = await getGpxTrack(gpxFile);
        if (gpx) {
            let convertedData = new TextEncoder().encode(gpx.data);
            let zippedResult = require('pako').gzip(convertedData, {to: "Uint8Array"});
            let convertedZipped = zippedResult.buffer;
            let oMyBlob = new Blob([convertedZipped], {type: "gpx"});
            let data = new FormData();
            data.append('file', oMyBlob, gpxFile.name);
            let res;
            res = await post(`${process.env.REACT_APP_GPX_API}/mapapi/upload-file`, data,
                {
                    params: {
                        name: type === FavoritesManager.FAVORITE_FILE_TYPE ? currentFolder : (currentFolder + fileName + ".gpx"),
                        type: type,
                    }
                }
            );

            if (res) {
                const respGetFiles = await Utils.fetchUtil(`${process.env.REACT_APP_USER_API_SITE}/mapapi/list-files`, {});
                const resJson = await respGetFiles.json();
                ctx.setListFiles(resJson);
                deleteLocalTrack(ctx);
                ctx.setSelectedGpxFile({});
                return true;
            }
        }
    }
}

function deleteLocalTrack(ctx) {
    let currentTrackIndex = ctx.localTracks.findIndex(t => t.name === ctx.selectedGpxFile.name);
    if (currentTrackIndex !== -1) {
        ctx.localTracks.splice(currentTrackIndex, 1);
        TracksManager.saveTracks(ctx.localTracks);
        ctx.setLocalTracks([...ctx.localTracks]);
        return true;
    }
    return false;
}


async function updateRouteBetweenPoints(ctx, start, end) {
    let result = await post(`${process.env.REACT_APP_GPX_API}/routing/update-route-between-points`, '',
        {
            params: {
                start: JSON.stringify({latitude: start.lat, longitude: start.lng}),
                end: JSON.stringify({latitude: end.lat, longitude: end.lng}),
                routeMode: start.profile ? start.profile : ctx.routeMode.mode,
                hasSpeed: start?.ext?.speed !== 0 || end?.ext?.speed !== 0,
                hasRouting: start.segment !== null || end.segment !== null
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    if (result) {
        result = JSON.parse(result.data.replace(/\bNaN\b/g, '"***NaN***"'), function (key, value) {
            return value === "***NaN***" ? NaN : value;
        });
        return result.points;
    }
}

function updateStat(track) {
    addDistance(track);
    let activePoints = getEditablePoints(track);
    if (track.analysis.totalDistance) {
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
            if (prevP && prevP[elevation]) {
                ele = prevP[elevation];
            } else {
                if (ind - array.indexOf(point) > 2) {
                    ele = 0
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

async function getTrackWithAnalysis(path, ctx, setLoading) {
    setLoading(true);
    let data = {
        tracks: ctx.selectedGpxFile.points ? [{points: ctx.selectedGpxFile.points}] : ctx.selectedGpxFile.tracks,
        wpts: ctx.selectedGpxFile.wpts,
        metaData: ctx.selectedGpxFile.metaData,
        pointsGroups: ctx.selectedGpxFile.pointsGroups,
        ext: ctx.selectedGpxFile.ext,
        analysis: ctx.selectedGpxFile.analysis
    }
    let resp = await post(`${process.env.REACT_APP_GPX_API}/gpx/${path}`, data,
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
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
    }
}

function updateTrack(currentTrack, ctx) {
    currentTrack.updated = true;
    currentTrack.tracks.forEach(track => {
        track.points = Utils.getPointsDist(track.points);
    })
    ctx.setLocalTracks([...ctx.localTracks]);
    ctx.setSelectedGpxFile(Object.assign({}, currentTrack));
}

const TracksManager = {
    loadTracks,
    saveTracks,
    getFileName,
    prepareName,
    getTrackData,
    addTrack,
    getTrackPoints,
    getGpxTrack,
    saveTrack,
    getEditablePoints,
    updateRouteBetweenPoints,
    updateStat,
    getEle,
    deleteLocalTrack,
    createName,
    getTrackWithAnalysis,
    prepareTrack,
    addDistance,
    addDistanceToPoints,
    updateTrack,
    GPX_FILE_TYPE: GPX_FILE_TYPE,
    GET_SRTM_DATA: GET_SRTM_DATA,
    GET_ANALYSIS: GET_ANALYSIS,
    PROFILE_LINE: PROFILE_LINE,
    PROFILE_GAP: PROFILE_GAP,
    NAN_MARKER: NAN_MARKER
};

export default TracksManager;
