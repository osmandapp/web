import TracksManager, { ROUTER_ERROR_LINE_USED, updateTrackRouteTypes } from './track/TracksManager';
import * as TrackOperations from './track/TrackOperations';
import TrackLayerProvider from '../map/util/TrackLayerProvider';
import TracksRoutingCache, { createRoutingKey, requestAnalysisNow } from '../context/TracksRoutingCache';
import isEmpty from 'lodash-es/isEmpty';

function deleteWpt(ind, ctx, save = false) {
    ctx.setSelectedGpxFile((o) => {
        o.wpts.splice(ind, 1);
        o.updateLayers = true;
        o.wptChangedFlag++;
        if (save) {
            o.save = true;
        }
        return { ...o };
    });

    TracksManager.updateState(ctx);
}

async function reorder(startIndex, endIndex, ctx) {
    const oldNext = ctx.selectedGpxFile.points[startIndex + 1];
    const points = TrackOperations.reorder(ctx.selectedGpxFile.points, startIndex, endIndex);
    if (points === ctx.selectedGpxFile.points) {
        return;
    }
    ctx.selectedGpxFile.points = points;

    const joinedIndex = endIndex <= startIndex ? startIndex + 1 : startIndex;
    if (TrackOperations.isWaitingForRouter(points, joinedIndex)) {
        routeByCache(joinedIndex, oldNext, ctx);
    }
    await routeNow([endIndex, endIndex + 1], ctx);

    TracksManager.updateState(ctx);
    ctx.selectedGpxFile.updateLayers = true;
    ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
    requestAnalysisNow({ ctx, track: ctx.selectedGpxFile });
}

async function deletePoint(index, ctx) {
    if (!ctx.selectedGpxFile.points) {
        return;
    }
    if (ctx.selectedGpxFile.points.length === 1) {
        const emptyFile = TracksManager.clearTrack(ctx.selectedGpxFile, []);
        ctx.setSelectedGpxFile({ ...emptyFile });
        ctx.setUpdateInfoBlock(true);
        return;
    }
    const oldNext = ctx.selectedGpxFile.points[index + 1];
    const points = TrackOperations.deletePoint(ctx.selectedGpxFile.points, index);
    ctx.selectedGpxFile.points = points;
    const routed = TrackOperations.isWaitingForRouter(points, index);
    if (routed) {
        routeByCache(index, oldNext, ctx);
    }
    if (points.length === 1) {
        ctx.setUpdateInfoBlock(true);
    }
    ctx.selectedGpxFile.updateLayers = true;
    ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
    if (!routed) {
        requestAnalysisNow({ ctx, track: ctx.selectedGpxFile });
    }
}

function deleteOldTempLayer(ctx, point) {
    let layer = ctx.selectedGpxFile.layers.getLayers().find((l) => {
        if (l.point === point) {
            return l;
        }
        return null;
    });
    if (layer) {
        layer.point = 'null';
    }
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

async function join(index, ctx) {
    ctx.selectedGpxFile.points = TrackOperations.join(ctx.selectedGpxFile.points, index);
    await routeNow([index + 1], ctx);
    applyOperation(ctx, ctx.selectedGpxFile.points);
}

function updateLastPointProfile(ctx, geoProfile) {
    const track = ctx.selectedGpxFile;
    if (track.points?.length > 0) {
        const last = track.points.length - 1;
        if (track.points[last].profile !== TracksManager.PROFILE_GAP) {
            track.points = TrackOperations.setProfile(track.points, last, geoProfile);
        }
    }
}

function changeSegmentProfile(index, polylines, geoProfile, ctx) {
    const start = ctx.selectedGpxFile.points[index];
    const end = ctx.selectedGpxFile.points[index + 1];
    const currentPolyline = TrackLayerProvider.updatePolyline(start, end, polylines, start, end);
    if (currentPolyline) {
        const updated = TrackOperations.setProfile(ctx.selectedGpxFile.points, index, geoProfile);
        ctx.selectedGpxFile.points = updated;
        TracksRoutingCache.addRoutingToCache(updated[index], updated[index + 1], currentPolyline, ctx);
    }
}

function changeSegmentsProfile(from, to, polylines, geoProfile, ctx) {
    for (let i = from; i < to; i++) {
        if (ctx.selectedGpxFile.points[i].profile !== TracksManager.PROFILE_GAP) {
            changeSegmentProfile(i, polylines, geoProfile, ctx);
        }
    }
}

async function changeProfile({ ctx, geoProfile, changeOne, changeAll }) {
    const partialEdit = [TracksManager.CHANGE_PROFILE_BEFORE, TracksManager.CHANGE_PROFILE_AFTER].includes(
        ctx.trackProfileManager?.change
    );
    if (!ctx.selectedGpxFile.layers) {
        return false; // on empty track
    }
    let polylines = TrackLayerProvider.getPolylines(ctx.selectedGpxFile.layers.getLayers());
    if (!partialEdit) {
        if (changeAll) {
            // whole track - all segments
            if (ctx.selectedGpxFile.points?.length > 1) {
                changeSegmentsProfile(0, ctx.selectedGpxFile.points.length - 1, polylines, geoProfile, ctx);
                updateLastPointProfile(ctx, geoProfile);
                return true;
            } else {
                if (ctx.selectedGpxFile.points?.length > 0) {
                    ctx.selectedGpxFile.points = TrackOperations.setProfile(ctx.selectedGpxFile.points, 0, geoProfile);
                }
                return true;
            }
        } else {
            updateLastPointProfile(ctx, geoProfile); // just update last point's profile
            return true;
        }
    } else {
        if (changeOne) {
            // before or after - one segment
            if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE) {
                changeSegmentProfile(ctx.trackProfileManager.pointInd - 1, polylines, geoProfile, ctx);
                return true;
            } else if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_AFTER) {
                changeSegmentProfile(ctx.trackProfileManager.pointInd, polylines, geoProfile, ctx);
                return true;
            }
        } else if (changeAll) {
            // before or after - all segments
            if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE) {
                changeSegmentsProfile(0, ctx.trackProfileManager.pointInd, polylines, geoProfile, ctx);
                return true;
            } else if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_AFTER) {
                changeSegmentsProfile(
                    ctx.trackProfileManager.pointInd,
                    ctx.selectedGpxFile.points.length - 1,
                    polylines,
                    geoProfile,
                    ctx
                );
                updateLastPointProfile(ctx, geoProfile);
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

function applyOperation(ctx, points) {
    ctx.selectedGpxFile.points = points;
    ctx.selectedGpxFile.updateLayers = true;
    ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
    TracksManager.updateState(ctx);
}

function routeByCache(index, oldEnd, ctx) {
    const start = ctx.selectedGpxFile.points[index - 1];
    const end = ctx.selectedGpxFile.points[index];
    const tempLine = TrackLayerProvider.createTempPolyline(start, end);
    deleteOldTempLayer(ctx, oldEnd);
    ctx.selectedGpxFile.layers.addLayer(tempLine);
    ctx.selectedGpxFile.updateLayers = true;
    TracksRoutingCache.addRoutingToCache(start, end, tempLine, ctx);
}

async function routeNow(indexes, ctx) {
    for (const index of indexes) {
        if (TrackOperations.isWaitingForRouter(ctx.selectedGpxFile.points, index)) {
            const start = ctx.selectedGpxFile.points[index - 1];
            const end = ctx.selectedGpxFile.points[index];
            const key = getSegmentKey(start, end, ctx);
            const geometry = await routeSegment(start, end, ctx);
            const routedIndex = ctx.selectedGpxFile.points.findIndex(
                (point, i) =>
                    TrackOperations.isWaitingForRouter(ctx.selectedGpxFile.points, i) &&
                    getSegmentKey(ctx.selectedGpxFile.points[i - 1], point, ctx) === key
            );
            if (routedIndex !== -1) {
                ctx.selectedGpxFile.points = TrackOperations.setSegmentGeometry(
                    ctx.selectedGpxFile.points,
                    routedIndex,
                    geometry
                );
            }
        }
    }
}

function getSegmentKey(start, end, ctx) {
    return createRoutingKey(start, end, ctx.trackRouter.getGeoProfile(start));
}

async function routeSegment(start, end, ctx) {
    try {
        const result = await ctx.trackRouter.updateRouteBetweenPoints(
            ctx,
            start,
            end,
            ctx.trackRouter.getGeoProfile(start)
        );
        if (result) {
            updateTrackRouteTypes(result.points, result.routeTypes, ctx);
        }

        return result?.points ?? [];
    } catch (e) {
        console.error('routeSegment failed', e);
        ctx.setRoutingErrorMsg(ROUTER_ERROR_LINE_USED);
        const line = await ctx.trackRouter.updateRouteBetweenPoints(ctx, start, end, {
            profile: TracksManager.PROFILE_LINE,
        });

        return line?.points ?? [];
    }
}

const PointManager = {
    deletePoint,
    deleteWpt,
    reorder,
    trimBefore,
    trimAfter,
    split,
    join,
    changeProfile,
    getPointMenuItems,
};

export default PointManager;
