import TracksManager, { publishEditedTrack } from './track/TracksManager';
import * as TrackOperations from './track/TrackOperations';
import { requestAnalysisNow } from '../context/TracksRoutingCache';
import isEmpty from 'lodash-es/isEmpty';

function deleteWpt(ind, ctx) {
    if (ind === -1) return;
    ctx.setSelectedGpxFile((track) => ({
        ...track,
        wpts: track.wpts.filter((_, i) => i !== ind),
        updateLayers: true,
        wptChangedFlag: (track.wptChangedFlag || 0) + 1,
    }));

    TracksManager.updateState(ctx);
}

function deleteAllWpts(ctx) {
    ctx.setSelectedGpxFile((track) => ({
        ...track,
        wpts: [],
        pointsGroups: {},
        updateLayers: true,
        wptChangedFlag: (track.wptChangedFlag || 0) + 1,
    }));
    TracksManager.updateState(ctx);
}

function reorder(startIndex, endIndex, ctx) {
    const points = TrackOperations.reorder(ctx.selectedGpxFile.points, startIndex, endIndex);
    if (points === ctx.selectedGpxFile.points) {
        return;
    }
    const joinedIndex = endIndex <= startIndex ? startIndex + 1 : startIndex;
    applyOperation(ctx, points, [joinedIndex, endIndex, endIndex + 1]);
}

function deletePoint(index, ctx) {
    if (!ctx.selectedGpxFile.points) {
        return;
    }
    if (ctx.selectedGpxFile.points.length === 1) {
        deleteAllPoints(ctx);
        return;
    }
    const points = TrackOperations.deletePoint(ctx.selectedGpxFile.points, index);
    if (points.length === 1) {
        ctx.setUpdateInfoBlock(true);
    }
    applyOperation(ctx, points, [index]);
}

function deleteAllPoints(ctx) {
    ctx.setSelectedGpxFile(TracksManager.clearTrack(ctx.selectedGpxFile, []));
    ctx.setUpdateInfoBlock(true);
    TracksManager.updateState(ctx);
}

function trimBefore(index, ctx) {
    if (index !== -1 && index !== 0) {
        applyOperation(ctx, TrackOperations.trimBefore(ctx.selectedGpxFile.points, index));
    }
}

function trimAfter(index, ctx) {
    if (index !== -1 && index !== ctx.selectedGpxFile.points.length - 1) {
        applyOperation(ctx, TrackOperations.trimAfter(ctx.selectedGpxFile.points, index));
    }
}

function split(index, ctx) {
    applyOperation(ctx, TrackOperations.split(ctx.selectedGpxFile.points, index));
}

function join(index, ctx) {
    applyOperation(ctx, TrackOperations.join(ctx.selectedGpxFile.points, index), [index + 1]);
}

function updateLastPointProfile(track, geoProfile) {
    if (track.points?.length > 0) {
        const last = track.points.length - 1;
        if (track.points[last].profile !== TracksManager.PROFILE_GAP) {
            track.points = TrackOperations.setProfile(track.points, last, geoProfile);
        }
    }
}

function changeSegmentProfile(track, index, geoProfile) {
    changeSegmentsProfile(track, index, index + 1, geoProfile);
}

function changeSegmentsProfile(track, from, to, geoProfile) {
    const points = track.points;
    const changed = [];
    for (let i = from; i < to; i++) {
        if (!TrackOperations.isProtectedSegment({ startPoint: points[i], endPoint: points[i + 1] })) {
            changed.push(i);
        }
    }
    track.points = TrackOperations.setSegmentsProfile(points, changed, geoProfile);
}

function changeProfile({ ctx, geoProfile, changeOne, changeAll }) {
    if (!ctx.selectedGpxFile.points?.length) {
        return false; // on empty track
    }
    const track = { ...ctx.selectedGpxFile, zoom: false };
    const changed = changeTrackProfile({ track, ctx, geoProfile, changeOne, changeAll });
    if (changed) {
        ctx.setSelectedGpxFile(track);
        TracksManager.updateState(ctx);
    }

    return changed;
}

function changeTrackProfile({ track, ctx, geoProfile, changeOne, changeAll }) {
    const partialEdit = [TracksManager.CHANGE_PROFILE_BEFORE, TracksManager.CHANGE_PROFILE_AFTER].includes(
        ctx.trackProfileManager?.change
    );
    if (!partialEdit) {
        if (changeAll) {
            // whole track - all segments
            if (track.points?.length > 1) {
                changeSegmentsProfile(track, 0, track.points.length - 1, geoProfile);
                updateLastPointProfile(track, geoProfile);
                return true;
            } else {
                if (track.points?.length > 0) {
                    track.points = TrackOperations.setProfile(track.points, 0, geoProfile);
                }
                return true;
            }
        } else {
            updateLastPointProfile(track, geoProfile); // just update last point's profile
            return true;
        }
    } else {
        if (changeOne) {
            // before or after - one segment
            if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE) {
                changeSegmentProfile(track, ctx.trackProfileManager.pointInd - 1, geoProfile);
                return true;
            } else if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_AFTER) {
                changeSegmentProfile(track, ctx.trackProfileManager.pointInd, geoProfile);
                return true;
            }
        } else if (changeAll) {
            // before or after - all segments
            if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE) {
                changeSegmentsProfile(track, 0, ctx.trackProfileManager.pointInd, geoProfile);
                return true;
            } else if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_AFTER) {
                changeSegmentsProfile(track, ctx.trackProfileManager.pointInd, track.points.length - 1, geoProfile);
                updateLastPointProfile(track, geoProfile);
                return true;
            }
        }
    }
    return false;
}

function getPointMenuItems(points, index) {
    const isGap = (i) => points[i]?.profile === TracksManager.PROFILE_GAP;
    const isRecorded = (end) =>
        end > 0 && TrackOperations.isRecordedSegment({ startPoint: points[end - 1], endPoint: points[end] });
    const last = points.length - 1;

    return {
        trimBefore: index > 0 && !isGap(index) && !isGap(index - 1),
        splitBefore:
            index >= 2 &&
            index < last &&
            !isGap(index) &&
            !isGap(index - 1) &&
            !isGap(index - 2) &&
            !isEmpty(points[index].geometry) &&
            !isRecorded(index),
        joinBefore: isGap(index - 1),
        profileBefore: index > 0 && !isGap(index - 1) && !isRecorded(index),
        trimAfter: index < last && !isGap(index) && !isGap(index - 1),
        splitAfter:
            index >= 1 &&
            index < last - 1 &&
            !isGap(index) &&
            !isGap(index - 1) &&
            !isGap(index + 1) &&
            !isEmpty(points[index].geometry) &&
            !isRecorded(index + 1),
        joinAfter: isGap(index),
        profileAfter: index < last && !isGap(index) && !isRecorded(index + 1),
    };
}

function applyOperation(ctx, points, indexes = []) {
    const track = { ...ctx.selectedGpxFile, points };
    publishEditedTrack(ctx, track);
    if (!indexes.some((index) => TrackOperations.isWaitingForRouter(points, index))) {
        requestAnalysisNow({ ctx, track });
    }
}

const PointManager = {
    deletePoint,
    deleteAllPoints,
    deleteWpt,
    deleteAllWpts,
    reorder,
    trimBefore,
    trimAfter,
    split,
    join,
    changeProfile,
    getPointMenuItems,
};

export default PointManager;
