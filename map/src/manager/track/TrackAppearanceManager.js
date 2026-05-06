import { apiPost } from '../../util/HttpApi';
import { getResolvedPointsGroups, INFO_FILE_EXT, GPX_FILE_TYPE } from './TracksManager';
import { isCloudTrack, isLocalTrack } from '../../context/AppContext';
import { saveTrackToLocalStorage } from '../../context/LocalTrackStorage';
import isEmpty from 'lodash-es/isEmpty';

const VISIBILITY_DEBOUNCE_MS = 1000;
const TRACKS_PREFIX = '/tracks/';

/** Strip `points` arrays from groups and their `ext` (they are large and not needed in `.info`). */
export function sanitizePointsGroups(pointsGroups = {}) {
    const result = {};
    for (const [name, group] of Object.entries(pointsGroups)) {
        const { points: _pts, ext: _ext, ...rest } = group || {};
        result[name] = rest;
    }
    return result;
}

function buildGpxTrackInfo(gpxFileInfo, name) {
    return {
        type: gpxFileInfo?.type ?? GPX_FILE_TYPE,
        file: gpxFileInfo?.file ?? TRACKS_PREFIX + name,
        subtype: gpxFileInfo?.subtype ?? GPX_FILE_TYPE.toLowerCase(),
        ...gpxFileInfo,
    };
}

/** Build the canonical `.info` payload for a track (pointsGroups + future fields). */
export function buildInfoPayload(gpxFile) {
    const pointsGroups = getResolvedPointsGroups(gpxFile);
    const info = buildGpxTrackInfo(gpxFile?.info, gpxFile?.name);
    return {
        ...info,
        pointsGroups: isEmpty(pointsGroups) ? {} : sanitizePointsGroups(pointsGroups),
    };
}

export function findInfoFile(ctx, fileName) {
    return ctx.listFiles?.uniqueFiles?.find((f) => f?.name === fileName + INFO_FILE_EXT);
}

/**
 * Upload (create or update) a track's `.info` file on the server.
 *
 * @param {Object} ctx              App context (used to register newly created `.info` in `listFiles`)
 * @param {Object} gpxFile          Object with at least `name` and `info` (the payload to persist)
 * @param {string} fileName         Cloud path for the `.info` file similar to the .gpx file
 * @param {Object|null} infoFile    Existing file entry from `listFiles` (carries `updatetimems` for update)
 * @returns {Promise<boolean>}
 */
export async function createOrUpdateInfoFile(ctx, gpxFile, fileName, infoFile) {
    if (!gpxFile?.name) {
        return false;
    }
    const infoFileName = fileName + INFO_FILE_EXT;
    const convertedData = new TextEncoder().encode(JSON.stringify(gpxFile.info));
    const zipped = require('pako').gzip(convertedData, { to: 'Uint8Array' });
    const blob = new Blob([zipped.buffer], { type: 'application/json' });
    const body = new FormData();
    body.append('file', blob, infoFileName);

    const updatetime = infoFile?.updatetimems ?? null;
    const params = updatetime == null ? { name: infoFileName } : { name: infoFileName, updatetime };

    const res = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/update-info`, body, { params });

    if (res?.data?.updatetime) {
        if (infoFile) {
            infoFile.updatetimems = res.data.updatetime;
            infoFile.details = { ...infoFile.details, data: gpxFile.info };
        } else {
            ctx.listFiles?.uniqueFiles?.push({
                name: infoFileName,
                updatetimems: res.data.updatetime,
                details: { data: gpxFile.info },
            });
        }
        return true;
    }
    return false;
}

/**
 * Sync the current track's `.info` to cloud after GPX upload.
 * Skips the request when nothing has changed (infoChanged flag).
 */
export async function syncCloudTrackInfo(ctx, cloudGpxName) {
    const selectedFile = ctx.selectedGpxFile;
    if (!selectedFile) return;

    const infoFile = findInfoFile(ctx, cloudGpxName);

    if (infoFile && !selectedFile.infoChanged) return;

    const payload = buildInfoPayload(selectedFile);

    if (!infoFile && isEmpty(payload.pointsGroups)) return;

    const success = await createOrUpdateInfoFile(
        ctx,
        { name: selectedFile?.name || cloudGpxName, info: payload },
        cloudGpxName,
        infoFile
    );
    if (success) {
        ctx.setSelectedGpxFile((prev) => ({ ...prev, infoChanged: false }));
    }
}

/**
 * Toggle `hidden` flag on waypoint groups and persist the change.
 * - Local track: sets `updateLayers` flag to rebuild map markers.
 * - Cloud track: debounces and uploads `.info` to the server.
 */
export function updateGroupsVisibility(ctx, groupNames, hidden, debouncerTimer) {
    ctx.setSelectedGpxFile((prevFile) => {
        const updatedPointsGroups = sanitizePointsGroups(getResolvedPointsGroups(prevFile) || {});

        (groupNames || Object.keys(updatedPointsGroups)).forEach((name) => {
            const group = updatedPointsGroups[name] || {};
            updatedPointsGroups[name] = { ...group, hidden };
        });

        const info = buildGpxTrackInfo(prevFile.info, prevFile.name);
        const updatedGpxFile = {
            ...prevFile,
            infoChanged: true,
            info: {
                ...info,
                pointsGroups: updatedPointsGroups,
            },
        };

        if (isLocalTrack(ctx)) {
            if (ctx.createTrack?.enable) {
                updatedGpxFile.updateLayers = true;
            }
            const idx = ctx.localTracks.findIndex((t) => t?.name === prevFile?.name);
            if (idx !== -1) {
                ctx.localTracks[idx].info = updatedGpxFile.info;
                saveTrackToLocalStorage({ ctx, track: ctx.localTracks[idx] });
            }
        }

        if (isCloudTrack(ctx)) {
            const infoFile = findInfoFile(ctx, updatedGpxFile.name);
            if (debouncerTimer.current) {
                clearTimeout(debouncerTimer.current);
            }
            debouncerTimer.current = setTimeout(async () => {
                debouncerTimer.current = null;
                const success = await createOrUpdateInfoFile(ctx, updatedGpxFile, updatedGpxFile.name, infoFile);
                if (success) {
                    ctx.setSelectedGpxFile((cur) => ({ ...cur, cloudRedrawWpts: true, infoChanged: false }));
                } else {
                    ctx.setTrackErrorMsg({
                        title: 'Visibility error',
                        msg: 'Failed to save waypoint group visibility. Please try again.',
                    });
                }
            }, VISIBILITY_DEBOUNCE_MS);
        }

        return updatedGpxFile;
    });
}
