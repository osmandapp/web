import Utils, { quickNaNfix } from '../../util/Utils';
import FavoritesManager from '../FavoritesManager';
import _ from 'lodash';
import { apiGet, apiPost } from '../../util/HttpApi';
import { compressFromJSON, decompressToJSON } from '../../util/GzipBase64.mjs';
import { isCloudTrack, isRouteTrack, OBJECT_TYPE_LOCAL_TRACK } from '../../context/AppContext';
import { confirm } from '../../dialogs/GlobalConfirmationDialog';
import { saveTrackToLocal } from './SaveTrackManager';
import L from 'leaflet';
import MarkerOptions from '../../map/markers/MarkerOptions';
import anchorme from 'anchorme';

export const GPX_FILE_TYPE = 'GPX';
export const EMPTY_FILE_NAME = '__folder__.info';
const GET_SRTM_DATA = 'get-srtm-data';
const GET_ANALYSIS = 'get-analysis';
export const PROFILE_LINE = 'line';
const PROFILE_CAR = 'car';
const PROFILE_GAP = 'gap';
export const NAN_MARKER = 99999;
const CHANGE_PROFILE_BEFORE = 'before';
const CHANGE_PROFILE_AFTER = 'after';
const CHANGE_PROFILE_ALL = 'all';
export const LOCAL_COMPRESSED_TRACK_KEY = 'localTrack_';
export const DATA_SIZE_KEY = 'dataSize';
const TRACK_VISIBLE_FLAG = 'visible';
const HOURS_24_MS = 86400000;
const AUTO_SRTM_MAX_POINTS = 10000; // don't overload Auto-SRTM API with huge OSRM tracks
const AUTO_SRTM_MIN_BAD_POINTS_PERCENT = 10; // limit by % of no-elevation points (type=osmand might have up to 10%)
const FIT_BOUNDS_MAX_ZOOM = 17;
export const DEFAULT_GROUP_NAME = '';

export function fitBoundsOptions(ctx) {
    return {
        maxZoom: FIT_BOUNDS_MAX_ZOOM,
        paddingTopLeft: [ctx.fitBoundsPadding.left, ctx.fitBoundsPadding.top],
        paddingBottomRight: [ctx.fitBoundsPadding.right, ctx.fitBoundsPadding.bottom],
    };
}

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
                    fixNanEleWpt(json);
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

function fixNanEleWpt(obj) {
    obj.wpts?.forEach((wpt) => {
        if (wpt?.ele === NAN_MARKER) {
            wpt.ele = null;
        }
        if (wpt?.ext?.ele === NAN_MARKER) {
            wpt.ext.ele = null;
        }
    });
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
                        addDistance(f); // recalc-distance-local-visible
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

export function prepareLocalTrack(track) {
    const prepareTrack = _.cloneDeep(track);
    return {
        name: prepareTrack.name,
        id: prepareTrack.id,
        metaData: prepareTrack.metaData,
        points: prepareTrack.points,
        // tracks: prepareTrack.tracks, // tracks[] will be back
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

export function prepareName(name, local = false) {
    const result = name.replace(/.gpx/, '');
    if (result.includes('/')) {
        const groups = result.split('/');
        return groups[groups.length - 1];
    } else if (local && result.includes(':')) {
        return result.split(':')[1];
    } else {
        return result;
    }
}

function getGroup(name, local) {
    const result = name.replace(/.gpx/, '');
    if (result.includes('/')) {
        const groups = result.split('/');
        //remove name
        groups.splice(-1);
        return groups.join('/');
    } else if (local && result.includes(':')) {
        return result.split(':')[0];
    } else {
        return DEFAULT_GROUP_NAME;
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
                addDistance(track); // recalc-distance-cloud-download
            }
        }
    }
    return track;
}

// handle "Edit Cloud Track" buttons
// show overwrite-confirmation dialog
// called from GeneralInfo and PanelButtons
function handleEditCloudTrack(ctx) {
    return new Promise((resolve) => {
        const track = { ...ctx.selectedGpxFile };
        const name = prepareName(track.name, true);
        const localTrackNotFound = !ctx.localTracks.find((t) => t.name === name);

        function proceed() {
            if (isRouteTrack(ctx)) {
                ctx.setCurrentObjectType(OBJECT_TYPE_LOCAL_TRACK);
                ctx.routeObject.setOption('route.map.conceal', true);
            }
            saveTrackToLocal({ ctx, track, overwrite: true, cloudAutoSave: isCloudTrack(ctx) });
            ctx.setUpdateInfoBlock(true);
            resolve(true);
        }

        confirm({
            ctx,
            callback: proceed,
            skip: localTrackNotFound,
            text: name + ' - Local track found. Overwrite?',
        });
    });
}

function prepareTrack(track, localName = null, originalName = null) {
    track.originalName = originalName ?? track.name;
    track.name = localName ?? prepareName(track.name, true);
    track.id = track.name;

    track.hasGeo = hasGeo(track);
    addDistance(track); // recalc-distance-local-initial
}

// prepare internal structures including distance
export function prepareNavigationTrack(track) {
    track.analysis = prepareAnalysis(track.analysis ?? {});
    track.hasGeo = hasGeo(track);
    addDistance(track);
    return track;
}

export async function getApproximatePoints({ points, profile }) {
    const totalDistance = parseFloat(points.reduce((a, p) => a + p.distance, 0)).toFixed(0);
    const approximateResult = await apiPost(`${process.env.REACT_APP_GPX_API}/routing/approximate`, points, {
        apiCache: true,
        params: {
            routeMode: profile,
            nPoints: points.length,
            totalDistance,
            src: 'route',
        },
        headers: { 'Content-Type': 'application/json' },
    });
    return approximateResult && approximateResult.data?.points?.length >= 2
        ? _.cloneDeep(approximateResult.data.points) // avoid poisoning cache
        : points;
}

function hasGeo(track) {
    if (!_.isEmpty(track.points)) {
        return track.points.some((p) => p.geometry?.length > 0);
    } else {
        if (track.tracks) {
            return track.tracks.some((t) => {
                if (t.points) {
                    return t.points.some((p) => p.geometry?.length > 0);
                }
                return false;
            });
        }
    }
    return false;
}

export function getTrackPoints(track) {
    let points = [];
    if (track.tracks) {
        track.tracks.forEach((track) => {
            if (track.points) {
                points = getAllPoints(track.points);
            }
        });
    } else if (track.points) {
        points = getAllPoints(track.points);
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

export function getAllPoints(points) {
    let res = [];
    points.forEach((point) => {
        if (point.geometry) {
            point.geometry.forEach((trk) => {
                res.push(trk);
            });
        } else {
            res.push(point);
        }
    });
    return res;
}

export function equalsPoints(arr1, arr2) {
    return arr1?.length === arr2?.length && JSON.stringify(arr1) === JSON.stringify(arr2);
}

function addDistance(track) {
    if (track.points && track.points.length > 0) {
        addDistanceToPoints(track.points);
    }
    if (track.tracks) {
        track.tracks.forEach((t) => {
            if (t.points && t.points.length > 0) {
                addDistanceToPoints(t.points);
            }
        });
    }
}

export function addDistanceToPoints(points) {
    let distanceTotal = 0;
    let distanceSegment = 0;
    let prevGapInd = 0;
    for (let point of points) {
        if (point.geometry) {
            point.dist = 0;

            if (point.geometry.length > 0) {
                const geo = point.geometry; // ref
                geo[0].distance = 0;
                if (geo.length > 1) {
                    for (let i = 1; i < geo.length; i++) {
                        // keep original if possible
                        if (geo[i].distance === 0 || geo[i].distance === undefined) {
                            const current = geo[i];
                            const previous = geo[i - 1];
                            geo[i].distance = Utils.getDistance(current.lat, current.lng, previous.lat, previous.lng);
                        }
                        if (geo[i].distance > 0) {
                            point.dist += geo[i].distance;
                        }
                    }
                }
            }

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

export async function getGpxFileFromTrackData(file) {
    let trackData = prepareTrackData({ file });

    return await apiPost(`${process.env.REACT_APP_GPX_API}/gpx/save-track-data`, trackData, {
        apiCache: true,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export function updateMetadata({ file, name = null }) {
    if (!file.metaData) {
        file.metaData = {};
    }
    if (name) {
        file.metaData.name = name;
    }
    return file;
}

function prepareTrackData({ file, getAnalysis = false }) {
    // add updated points to track
    if (file.tracks && file.tracks[0] && validateRoutePoints(file.points)) {
        file.tracks[0].points = file.points;
    }

    // add metaData name if it isn't exist
    if (!file.metaData?.name) {
        if (!file.metaData) {
            file.metaData = {};
        }
        file.metaData.name = file.name;
    }

    return {
        tracks: file.tracks,
        wpts: file.wpts,
        metaData: file.metaData,
        pointsGroups: file.pointsGroups,
        ext: file.ext,
        analysis: getAnalysis ? file.analysis : null,
    };
}

export function createTrackGroups(files) {
    const trackGroups = [];
    const tracks = [];

    files.forEach((file) => {
        const parts = file.name.split('/');
        const isFile = parts.length === 1;

        if (isFile) {
            tracks.push(file);
        } else {
            let currentGroups = trackGroups;
            let fullName = '';
            for (let i = 0; i < parts.length - 1; i++) {
                const folder = parts[i];
                fullName += folder + '/';
                // find existing group by name or create a new one
                let existingGroup = currentGroups.find((group) => group.name === folder);
                if (!existingGroup) {
                    existingGroup = {
                        name: folder,
                        subfolders: [],
                        groupFiles: [],
                        lastModifiedMs: null,
                        lastModifiedData: null,
                    };
                    currentGroups.push(existingGroup);
                }

                currentGroups = existingGroup.subfolders;
                existingGroup.fullName = fullName.substring(0, fullName.length - 1);
                existingGroup.groupFiles.push(file);
            }
        }
    });

    if (tracks.length > 0) {
        const defaultGroup = {
            name: DEFAULT_GROUP_NAME,
            fullName: DEFAULT_GROUP_NAME,
            files: tracks,
            groupFiles: tracks,
            lastModifiedMs: null,
            lastModifiedData: null,
        };
        defaultGroup.subfolders = trackGroups.filter((group) => group.name !== DEFAULT_GROUP_NAME);
        trackGroups.push(defaultGroup);
    }

    addFilesAndCalculateLastModified(trackGroups);
    return trackGroups;
}

function addFilesAndCalculateLastModified(groups) {
    groups.forEach((group) => {
        group.files = group.files || [];
        group.groupFiles = group.groupFiles || [];
        group.subfolders = group.subfolders || [];

        if (group.subfolders.length > 0) {
            addFilesAndCalculateLastModified(group.subfolders);

            // remove files from group.groupFiles if they belong to subfolders
            group.groupFiles = group.groupFiles.filter((file) => {
                return !group.subfolders.some((subfolder) =>
                    subfolder.files.some((subfile) => subfile.name === file.name)
                );
            });

            group.files.push(...group.subfolders.reduce((acc, subfolder) => acc.concat(subfolder.files), []));
        }
        group.groupFiles.forEach((file) => {
            if (!group.files.some((groupFile) => groupFile.name === file.name)) {
                group.files.push(file);
            }
        });
        group.realSize = group.files.filter(
            (file) => !(file.name.endsWith(EMPTY_FILE_NAME) && file.filesize === 0)
        ).length;
        calculateLastModified(group);
    });
}

function calculateLastModified(group) {
    if (!group.files || group.files.length === 0) {
        group.lastModifiedMs = null;
        group.lastModifiedData = null;
        return;
    }

    let minMs = Infinity;
    let minData = null;
    for (const file of group.files) {
        if (file.updatetimems < minMs) {
            minMs = file.updatetimems;
            minData = file.updatetime;
        }
    }
    group.lastModifiedMs = minMs;
    group.lastModifiedData = minData;
}

export function findGroupByName(groups, groupName) {
    for (const group of groups) {
        if (group.fullName === groupName) {
            return group;
        }
        if (group.subfolders && group.subfolders.length > 0) {
            const foundInSubfolders = findGroupByName(group.subfolders, groupName);
            if (foundInSubfolders) {
                return foundInSubfolders;
            }
        }
    }
    return null;
}

export function validName(name) {
    return name !== '' && name.trim().length > 0;
}

export function isTrackExists(name, folder, folderName, tracks) {
    const foundFolder = findGroupByName(
        tracks,
        folderName !== null ? folderName : folder?.title ? folder?.title : folder
    );
    return foundFolder ? foundFolder.groupFiles.some((f) => TracksManager.prepareName(f.name) === name) : false;
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

export function clearAllLocalTracks(ctx) {
    if (ctx.localTracks.find((t) => t.name === ctx.selectedGpxFile.name)) {
        ctx.setSelectedGpxFile({});
    }
    ctx.setLocalTracks([]);
    localStorage.removeItem(DATA_SIZE_KEY);
    localStorage.removeItem(TRACK_VISIBLE_FLAG);
    deleteLocalTracks(); // delete from localStorage
}

function formatRouteMode({ profile = 'car', params, includeFalse = false }) {
    let routeModeStr = profile ?? 'car';
    if (params) {
        Object.keys(params).forEach((o) => {
            if (params[o]?.value === true) {
                routeModeStr += ',' + o;
            } else if (params[o]?.value === false) {
                if (includeFalse) {
                    routeModeStr += ',' + o + '=' + params[o].value;
                }
            } else {
                routeModeStr += ',' + o + '=' + params[o].value;
            }
        });
    }
    return routeModeStr;
}

// return params updated with parsed routeMode
function decodeRouteMode({ profile, routeMode, params }) {
    const draft = { ...params };

    const oldRoutingTypeParams = {
        hhoff: false,
        calcmode: false,
        nativerouting: false,
    };

    routeMode.split(',').forEach((p) => {
        // assume empty as true (see formatRouteMode)
        let [key, val = true] = p.split('=');
        val === 'false' && (val = false);
        val === 'true' && (val = true);
        if (draft[key]) {
            draft[key].value = val;
        } else if (oldRoutingTypeParams[key] !== undefined) {
            oldRoutingTypeParams[key] = val;
        } else {
            if (key !== profile) {
                // allow hidden boolean params such as `hhonly` (skip when `key` is `profile`)
                draft[key] = { section: 'Hidden', label: key, key, type: 'boolean', value: val };
            }
        }
    });

    const oldRoutingType = parseOldRoutingType(profile, oldRoutingTypeParams);
    oldRoutingType && (draft.routing.value = oldRoutingType);

    return draft;
}

// enum OsmAndMapsService.ServerRoutingTypes
function parseOldRoutingType(profile, params) {
    const defaultRouting = 'hh_java';

    let astar = profile === 'car' ? '2phase' : 'normal';
    params.calcmode === 'COMPLEX' && (astar = '2phase');
    params.calcmode === 'NORMAL' && (astar = 'normal');

    const type = params.hhoff === true ? 'astar_' + astar : 'hh';

    const lib = params.nativerouting === true ? 'cpp' : 'java';

    const routing = type + '_' + lib;

    return routing == defaultRouting ? undefined : routing;
}

function updateGapProfileOneSegment(routePoint, points) {
    if (routePoint.profile === PROFILE_GAP) {
        points[points.length - 1].profile = PROFILE_GAP;
        return true;
    }
    return false;
}

function getEle(point, elevation, array) {
    let ele = point[elevation];
    let ind = array.indexOf(point);
    //value smoothing
    while (isNaN(ele) || ele === NAN_MARKER || ele === null || ele === undefined) {
        if (array && ind !== 0) {
            let prevP = array[ind - 1];
            if (prevP && prevP[elevation] && !isNaN(prevP[elevation]) && prevP[elevation] !== NAN_MARKER) {
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

export function isNonZeroEle(ele) {
    return ele !== NAN_MARKER && (ele > 0.01 || ele < -0.01);
}

export function eligibleToApplySrtm({ track }) {
    function detectNoElevation(track) {
        function checkPoints(points) {
            let badPoints = 0; // empty ele
            let goodPoints = 0; // non-zero ele
            let totalPoints = 0; // total points
            if (points && points.length >= 2) {
                for (let p = 0; p < points.length; p++) {
                    const geometry = points[p].geometry;
                    if (geometry && geometry.length > 0) {
                        for (let g = 0; g < geometry.length; g++) {
                            if (isEmptyEle(geometry[g].ele)) {
                                badPoints++;
                            }
                            if (isNonZeroEle(geometry[g].ele)) {
                                goodPoints++; // count non-zero elevation (gpx bug)
                            }
                            totalPoints++;
                        }
                    } else {
                        // is geometry empty or undefined (p>0)
                        // is geometry strictly undefined (p==0)
                        if (geometry === undefined || p > 0) {
                            if (isEmptyEle(points[p].ele)) {
                                badPoints++;
                            }
                            if (isNonZeroEle(points[p].ele)) {
                                goodPoints++;
                            }
                            totalPoints++;
                        }
                    }
                }
            }
            if (totalPoints > 0) {
                // Apply SRTM if >N% of total point have empty elevation Issue #2156
                if ((badPoints / totalPoints) * 100 > AUTO_SRTM_MIN_BAD_POINTS_PERCENT) {
                    return true;
                }
                // Apply SRTM if all points have exactly zero elevaton (gpx-bug) Issue #2136
                if (goodPoints === 0) {
                    return true;
                }
            }
            return false; // auto-srtm is not required
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

        return totalPoints <= AUTO_SRTM_MAX_POINTS && totalPoints > 4; // avoid Line-only [2 points = 2 geometry points]
    }

    const analysis = track.analysis;

    if (!track || isEmptyTrack(track, false)) {
        // console.debug('eligible-srtm-empty');
        return false; // empty track w/o points
    }

    if (analysis && analysis.isSrtmApplied) {
        // console.debug('eligible-srtm-already');
        return false; // already applied
    }

    if (analysis && checkMaxTotalPoints(track) && detectNoElevation(track)) {
        // console.debug('eligible-srtm-OK-apply');
        return true; // ok - apply
    }

    // console.debug('eligible-srtm-false');
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

export function validateRoutePoints(points) {
    if (!points || points.length === 0) {
        return false;
    }

    const trackWithGeometry = points[0].geometry && Array.isArray(points[0].geometry);

    if (trackWithGeometry && points[0].geometry.length !== 0) {
        return false;
    }

    for (let i = 0; i < points.length; i++) {
        if (!points[i].geometry) {
            const hasGap = updateGapProfileOneSegment(points[i], points);
            if (!hasGap && trackWithGeometry) {
                return false;
            }
        }
    }
    return true;
}

async function getTrackWithAnalysis(path, ctx, setLoading, points) {
    setLoading(true);

    const cloneFile = _.cloneDeep(ctx.selectedGpxFile);

    if (cloneFile.tracks === undefined || cloneFile.tracks.length === 0) {
        return cloneFile; // no tracks = nothing to analyze
    }

    const wpts = cloneFile.wpts;
    const pointsGroups = cloneFile.pointsGroups;
    if (validateRoutePoints(points)) {
        cloneFile.tracks[0].points = points;
    }

    const postData = prepareTrackData({ file: cloneFile, getAnalysis: true });

    // time vs better cache
    let saveStartTime = null;
    let saveEndTime = null;
    if (postData.analysis) {
        saveStartTime = postData.analysis.startTime;
        saveEndTime = postData.analysis.endTime;
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

        // restore previously saved time
        if (data.data && data.data.analysis) {
            if (data.data.analysis.startTime === 0 && saveStartTime > 0) {
                data.data.analysis.startTime = saveStartTime;
            }
            if (data.data.analysis.endTime === 0 && saveEndTime > 0) {
                data.data.analysis.endTime = saveEndTime;
            }
        }

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

export function hasSegments(track) {
    return track?.points?.length >= 2 || (track?.tracks?.length > 0 && track.tracks[0].points?.length >= 2);
}

export function hasSegmentTurns({ track = null }) {
    // Unknown: tracks[0].segments[0] - for cloud tracks (only)
    // Good: points[].geometry[].segment.ext.turnType - for local tracks
    // Good: track.tracks[0].points[].geometry[].segment.ext.turnType - for cloud tracks
    function checkPointsGeometrySegments(points) {
        return points.some((p) => {
            if (p.geometry && p.geometry.length > 0) {
                return p.geometry.some((g) => {
                    return !!g.segment?.ext?.turnType;
                });
            }
            return false;
        });
    }
    if (track && track.points && track.points.length > 0) {
        return checkPointsGeometrySegments(track.points);
    }
    if (
        track &&
        track.tracks &&
        track.tracks.length > 0 &&
        track.tracks[0].points &&
        track.tracks[0].points.length > 0
    ) {
        return checkPointsGeometrySegments(track.tracks[0].points);
    }
    return false;
}

export function isPointUnrouted({ point, pointIndex, prevPoint }) {
    return (
        !point.profile || // empty profile is Unrouted but PROFILE_LINE is Routed
        !point.geometry || // undefined geometry (null, undefined) is always Unrouted
        // empty geometry is Unrouted, but first point or previous PROFILE_GAP is Routed
        (pointIndex > 0 && point.geometry?.length === 0 && prevPoint.profile !== PROFILE_GAP)
    );
}

export function isProtectedSegment({ startPoint, endPoint }) {
    if (!startPoint || !endPoint) {
        console.error('isProtectedSegment got empty point');
        return true;
    }

    // gpx (just loaded)
    if (!endPoint.geometry && !startPoint.profile) {
        // console.debug('protect-gpx-plain');
        return true;
    }

    // gpx (after routing): protect Line-segments with more-than-line geometry
    if (startPoint.profile === PROFILE_LINE && endPoint.geometry?.length > 2) {
        // console.debug('protect-gpx-geometry');
        return true;
    }

    // gap-profile should be protected
    if (startPoint.profile === PROFILE_GAP) {
        // console.debug('protect-gap-profile');
        return true;
    }

    return false;
}

export function splitProtectedSegment({ newPoint, trackPoints, geometryIndex, endPointIndex }) {
    if (geometryIndex !== -1 && endPointIndex >= 1 && newPoint && trackPoints && trackPoints.length >= 2) {
        // newPoint should have previous geometry (up to geometryIndex) + newPoint at the end
        newPoint.geometry = trackPoints[endPointIndex].geometry.slice(0, geometryIndex + 1);
        newPoint.geometry.push({ lat: newPoint.lat, lng: newPoint.lng });
        if (newPoint.geometry.length <= 2) {
            // in case when new segment becomes Line "point-to-point"
            // duplicate newPoint geometry to keep the segment protected
            // dupe-geometry tested: GPX, Cloud, Android OsmAnd app, Garmin
            newPoint.geometry.push({ lat: newPoint.lat, lng: newPoint.lng });
        }

        // endPoint should have newPoint at the begin and the rest of previous geometry (next to geometryIndex)
        trackPoints[endPointIndex].geometry = trackPoints[endPointIndex].geometry.slice(geometryIndex + 1);
        trackPoints[endPointIndex].geometry.unshift({ lat: newPoint.lat, lng: newPoint.lng });
        if (trackPoints[endPointIndex].geometry.length <= 2) {
            // keep the segment protected (see comment for similar case before)
            trackPoints[endPointIndex].geometry.unshift({ lat: newPoint.lat, lng: newPoint.lng });
        }

        // duplicate profile string (from previous to endPoint)
        newPoint.profile = trackPoints[endPointIndex - 1].profile;

        // insert newPoint into trackPoints
        trackPoints.splice(endPointIndex, 0, newPoint);
    }
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

let monthNames = {};

function evaluateMonthNames() {
    if (Object.keys(monthNames).length > 0) {
        return monthNames;
    }
    for (var i = 0; i < 12; i++) {
        var objDate = new Date();
        objDate.setDate(1);
        objDate.setMonth(i);
        monthNames[objDate.toLocaleString('en-us', { month: 'short' })] = i + 1;
        monthNames[
            objDate.toLocaleString(window.navigator.userLanguage || window.navigator.language, { month: 'short' })
        ] = i + 1;
    }
    return monthNames;
}

export const getGpxTime = ({ f, reverse = false, creationTime = false, isFavGroups = false }) => {
    const raw = [];
    // fill in raw timestamps (unixtime * 1000), including undefined values
    if (creationTime) {
        raw.push(f?.details?.metadata?.time); // gpx - meta (cloud track)
        raw.push(f?.metaData?.ext?.time); // gpx - meta (local track)
        raw.push(f?.clienttimems); // uploaded (cloud timestamp?)
        raw.push(f?.file?.clienttimems); // uploaded for favorites group(cloud timestamp?)
        raw.push(f?.ext?.time); // uploaded for favorites group(cloud timestamp?)
    } else {
        if (isFavGroups) {
            raw.push(f?.clienttimems ?? f?.updatetimems);
        } else {
            raw.push(getAnalysisData(f)?.startTime); // cloud - stored analysis
            raw.push(f?.details?.metadata?.time); // gpx - meta (cloud track)
            raw.push(f?.metaData?.ext?.time); // gpx - meta (local track)
            raw.push(f?.clienttimems); // uploaded (cloud timestamp?)
            raw.push(f?.file?.clienttimems); // uploaded for favorites group(cloud timestamp?)
            raw.push(f?.updatetimems); // updated (cloud timestamp?)
            raw.push(f?.ext?.time); // updated for favorites group(cloud timestamp?)
        }
    }

    // validate raw to avoid using illegal values
    const minAllowed = new Date(2002, 1, 1).getTime(); // GPX was initiated
    const maxAllowed = Date.now() + 365 * 86400 * 1000; // now plus add 1 year
    const valid = raw.filter((t) => t > 0 && t > minAllowed && t < maxAllowed);

    if (valid.length > 0) {
        // use MAX for reversed sorting and MIN for direct
        return reverse ? Math.max(...valid) : Math.min(...valid);
    }

    // parse by filename
    try {
        const date = new Date();

        const yyyymmdd =
            f.name.match(/(20\d\d)-(\d\d)-(\d\d)/) ?? // 2023-08-29
            f.name.match(/(20\d\d)(\d\d)(\d\d)/); // 2023 08 29
        if (yyyymmdd) {
            date.setFullYear(parseInt(yyyymmdd[1]));
            date.setMonth(parseInt(yyyymmdd[2]) - 1);
            date.setDate(parseInt(yyyymmdd[3]));
            date.setHours(0, 0, 0);
            return date.getTime();
        }

        const monthNames = evaluateMonthNames();

        const ddMMMyyyy = f.name.match(/(\d\d) (...) (20\d\d)/); // 28 Aug 2023
        if (ddMMMyyyy && monthNames[ddMMMyyyy[2]]) {
            date.setFullYear(parseInt(ddMMMyyyy[3]));
            date.setMonth(monthNames[ddMMMyyyy[2]] - 1);
            date.setDate(parseInt(ddMMMyyyy[1]));
            date.setHours(0, 0, 0);
            return date.getTime();
        }

        const MMMddyyyy = f.name.match(/(...) (\d\d) (20\d\d)/); // Aug 28 2023
        if (MMMddyyyy && monthNames[MMMddyyyy[1]]) {
            date.setFullYear(parseInt(MMMddyyyy[3]));
            date.setMonth(monthNames[MMMddyyyy[1]] - 1);
            date.setDate(parseInt(MMMddyyyy[2]));
            date.setHours(0, 0, 0);
            return date.getTime();
        }
    } catch (e) {
        console.error('getGpxTime', e);
    }
    return 0;
};

export function getAnalysisData(file) {
    return file.details?.analysis?.parameters ?? file.details?.analysis ?? file?.analysis;
}

export function prepareDesc(trackDesc) {
    return trackDesc && typeof trackDesc === 'string'
        ? anchorme({
              input: trackDesc.replace(/\n/g, '<br />'),
              options: {
                  attributes: {
                      target: '_blank',
                  },
              },
          })
        : null;
}

export function getGpxFiles(listFiles) {
    return (!listFiles || !listFiles.uniqueFiles ? [] : listFiles.uniqueFiles).filter((item) => {
        return (
            (item.type === 'gpx' || item.type === 'GPX') &&
            (item.name.slice(-4) === '.gpx' || item.name.slice(-4) === '.GPX' || item.name.endsWith(EMPTY_FILE_NAME))
        );
    });
}

export function updateLoadingTracks(ctx, group) {
    ctx.setTrackLoading([
        ...ctx.trackLoading.filter(
            (name) =>
                !group.some((file) => {
                    let parts = file.name.split('/');
                    return parts[parts.length - 1] === name;
                })
        ),
    ]);
}

const TracksManager = {
    loadTracks,
    getFileName,
    prepareName,
    getTrackData,
    handleEditCloudTrack,
    getTrackPoints,
    getEditablePoints,
    updateGapProfileOneSegment,
    getEle,
    deleteLocalTrack,
    createName,
    getTrackWithAnalysis,
    prepareTrack,
    addDistance,
    createTrack,
    createGpxTracks,
    clearTrack,
    getGroup,
    formatRouteMode,
    decodeRouteMode,
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
};

export default TracksManager;
