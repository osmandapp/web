import TracksManager, { isPointUnrouted, updateTrackRouteTypes } from './track/TracksManager';
import Utils from '../util/Utils';
import TrackLayerProvider from '../map/util/TrackLayerProvider';
import TracksRoutingCache from '../context/TracksRoutingCache';

const deletePoint = (index, ctx) => deletePointByIndex(ctx.selectedGpxFile, index, ctx);

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

async function reorder(startIndex, endIndex, currentTrack, ctx) {
    let lengthSum = 0;
    let removed = await deleteByIndex(currentTrack.points, startIndex, lengthSum, ctx).then((result) => {
        if (currentTrack.points.length > 0) {
            return result.deletedPoint;
        }
    });
    if (removed.length > 0) {
        await insertPointToTrack(currentTrack, endIndex, removed[0], ctx);
    }
}

async function insertPointToTrack(currentTrack, index, point, ctx) {
    let lengthSum = 0;
    if (currentTrack.points) {
        await insertPoint(currentTrack.points, index, point, lengthSum, ctx).then(() => {
            TracksManager.updateState(ctx);

            ctx.selectedGpxFile.updateLayers = true;
            ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });

            TracksManager.getTrackWithAnalysis(
                TracksManager.GET_ANALYSIS,
                ctx,
                ctx.setLoadingContextMenu,
                currentTrack.points
            ).then((res) => {
                if (res) {
                    ctx.setUnverifiedGpxFile(() => ({ ...res }));
                }
            });
        });
    }
}

async function insertPoint(points, index, point, lengthSum, ctx) {
    const geoRouter = ctx.trackRouter;
    points.splice(index, 0, point);
    let firstPoint = index === 0 || index === lengthSum;
    let lastPoint = index === points.length - 1 + lengthSum;
    for (let i = 0; i <= points.length; i++) {
        if (i + lengthSum === index && point) {
            if (firstPoint) {
                if (points[i + 1].geometry) {
                    point.geometry = []; // nothing leads to the first point
                    let newGeometryFromNewPoint = await geoRouter.updateRouteBetweenPoints(ctx, point, points[i + 1]);
                    if (newGeometryFromNewPoint) {
                        points[i + 1].geometry = newGeometryFromNewPoint.points || [];
                        updateTrackRouteTypes(newGeometryFromNewPoint.points, newGeometryFromNewPoint.routeTypes, ctx);
                    }
                }
            } else if (lastPoint) {
                if (points[i - 1].geometry) {
                    let newGeometryToNewPoint = await geoRouter.updateRouteBetweenPoints(ctx, points[i - 1], point);
                    if (newGeometryToNewPoint) {
                        point.geometry = newGeometryToNewPoint.points || [];
                        updateTrackRouteTypes(newGeometryToNewPoint.points, newGeometryToNewPoint.routeTypes, ctx);
                    }
                }
            } else {
                if (points[i + 1].geometry) {
                    let newGeometryToNewPoint = await geoRouter.updateRouteBetweenPoints(ctx, points[i - 1], point);
                    if (newGeometryToNewPoint) {
                        point.geometry = newGeometryToNewPoint.points || [];
                        updateTrackRouteTypes(newGeometryToNewPoint.points, newGeometryToNewPoint.routeTypes, ctx);
                    }
                    let newGeometryFromNewPoint = await geoRouter.updateRouteBetweenPoints(ctx, point, points[i + 1]);
                    if (newGeometryFromNewPoint) {
                        points[i + 1].geometry = newGeometryFromNewPoint.points || [];
                        updateTrackRouteTypes(newGeometryFromNewPoint.points, newGeometryFromNewPoint.routeTypes, ctx);
                    }
                }
            }
            break;
        }
    }
    lengthSum += points.length;
    return lengthSum;
}

async function deletePointByIndex(currentTrack, index, ctx) {
    let lengthSum = 0;
    let res;
    if (currentTrack.points) {
        res = await deleteByIndex(currentTrack.points, index, lengthSum, ctx).then((result) => {
            if (currentTrack.points.length > 0) {
                if (currentTrack.points.length === 1) {
                    ctx.setUpdateInfoBlock(true);
                }

                ctx.selectedGpxFile.updateLayers = true;
                ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });

                TracksManager.getTrackWithAnalysis(
                    TracksManager.GET_ANALYSIS,
                    ctx,
                    ctx.setLoadingContextMenu,
                    currentTrack.points
                ).then((res) => {
                    if (res) {
                        ctx.setUnverifiedGpxFile(() => ({ ...res }));
                    }
                });
                return result.deletedPoint;
            } else {
                let emptyFile = TracksManager.clearTrack(ctx.selectedGpxFile, currentTrack.points);
                ctx.setSelectedGpxFile({ ...emptyFile });
                ctx.setUpdateInfoBlock(true);
            }
        });
    }
    return res;
}

async function deleteByIndex(points, index, lengthSum, ctx) {
    let res = {
        deletedPoint: null,
        lengthSum: null,
    };
    let firstPoint = index === 0 || index === lengthSum;
    let lastPoint = index === points.length - 1 + lengthSum;
    if (firstPoint) {
        if (points.length > 1 && points[index + 1].geometry) {
            points[index + 1].geometry = [];
        }
        res.deletedPoint = points.splice(0, 1);
        return res;
    } else if (lastPoint) {
        res.deletedPoint = points.splice(points.length - 1, 1);
        return res;
    } else {
        for (let i = 0; i <= points.length - 1; i++) {
            if (i + lengthSum === index) {
                if (points[i].geometry) {
                    let newGeometry;
                    if (isPointUnrouted({ point: points[i], pointIndex: i, prevPoint: points[i - 1] })) {
                        // FIXME this if is never happened
                        // FIXME need to process PROFILE_GAP
                        let currentNewGeo = points[i].geometry;
                        currentNewGeo.pop();
                        let nextNewGeo = points[i + 1].geometry;
                        nextNewGeo.shift();
                        let resGeo = currentNewGeo.concat(nextNewGeo);
                        newGeometry = Utils.getPointsDist(resGeo);
                        points[i + 1].geometry = newGeometry;
                    } else {
                        let tempLine = TrackLayerProvider.createTempPolyline(points[i - 1], points[i + 1]);
                        deleteOldTempLayer(ctx, points[i + 1]);
                        ctx.selectedGpxFile.layers.addLayer(tempLine);
                        ctx.selectedGpxFile.updateLayers = true;
                        TracksRoutingCache.addRoutingToCache(points[i - 1], points[i + 1], tempLine, ctx);
                        points[i + 1].geometry = [];
                    }
                }
                res.deletedPoint = points.splice(i, 1);
                return res;
            }
        }
    }
    lengthSum += points.length;
    res.lengthSum = lengthSum;
    return res;
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
        ctx.selectedGpxFile.points.splice(0, index);
        let geo = ctx.selectedGpxFile.points[0].geometry;
        if (geo?.length > 0) {
            ctx.selectedGpxFile.points[0].geometry = [];
        }
        ctx.selectedGpxFile.updateLayers = true;
        ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
        TracksManager.updateState(ctx);
    }
}

function trimAfter(index, ctx) {
    if (index !== -1 && index !== ctx.selectedGpxFile.points.length - 1) {
        ctx.selectedGpxFile.points.splice(index + 1, ctx.selectedGpxFile.points.length - index);
        ctx.selectedGpxFile.updateLayers = true;
        ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
        TracksManager.updateState(ctx);
    }
}

function split(index, ctx) {
    const geometryLength = ctx.selectedGpxFile.points[index].geometry.length;
    ctx.selectedGpxFile.points[index].geometry[geometryLength - 1].profile = TracksManager.PROFILE_GAP;
    ctx.selectedGpxFile.points[index].profile = TracksManager.PROFILE_GAP;

    ctx.selectedGpxFile.points[index + 1].geometry = [];

    ctx.selectedGpxFile.updateLayers = true;
    ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });

    TracksManager.updateState(ctx);
}

async function join(point1, point2, ctx) {
    const result = await ctx.trackRouter.updateRouteBetweenPoints(ctx, point1, point2);
    point2.geometry = result?.points || [];
    if (result) {
        updateTrackRouteTypes(result.points, result.routeTypes, ctx);
    }
    point1.profile = point2.profile;
    point1.geoProfile = point2.geoProfile;
    if (point1.geometry?.length > 0) {
        delete point1.geometry[point1.geometry.length - 1].profile;
    }
    ctx.selectedGpxFile.updateLayers = true;
    ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
    TracksManager.updateState(ctx);
}

function updateLastPointProfile(ctx, geoProfile) {
    const track = ctx.selectedGpxFile;
    if (track.points?.length > 0) {
        const last = track.points.length - 1;
        if (track.points[last].profile !== TracksManager.PROFILE_GAP) {
            track.points[last].geoProfile = geoProfile;
            track.points[last].profile = geoProfile.profile;
        }
    }
}

function changeSegmentProfile(start, end, polylines, geoProfile, ctx) {
    const currentPolyline = TrackLayerProvider.updatePolyline(start, end, polylines, start, end);
    if (currentPolyline) {
        start.geoProfile = geoProfile;
        start.profile = geoProfile.profile;
        TracksRoutingCache.addRoutingToCache(start, end, currentPolyline, ctx);
    }
}

function changeSegmentsProfile(from, to, polylines, geoProfile, ctx) {
    const points = ctx.selectedGpxFile.points;
    for (let i = from; i < to; i++) {
        if (points[i].profile !== TracksManager.PROFILE_GAP) {
            changeSegmentProfile(points[i], points[i + 1], polylines, geoProfile, ctx);
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
                    ctx.selectedGpxFile.points[0].geoProfile = geoProfile;
                    ctx.selectedGpxFile.points[0].profile = geoProfile.profile;
                }
                return true;
            }
        } else {
            updateLastPointProfile(ctx, geoProfile); // just update last point's profile
        }
    } else {
        if (changeOne) {
            // before or after - one segment
            let currentPoint = ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd];
            let prevPoint = ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd - 1];
            let nextPoint = ctx.selectedGpxFile.points[ctx.trackProfileManager.pointInd + 1];
            if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_BEFORE) {
                changeSegmentProfile(prevPoint, currentPoint, polylines, geoProfile, ctx);
                return true;
            } else if (ctx.trackProfileManager?.change === TracksManager.CHANGE_PROFILE_AFTER) {
                changeSegmentProfile(currentPoint, nextPoint, polylines, geoProfile, ctx);
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

const PointManager = {
    deletePoint,
    deleteWpt,
    reorder,
    trimBefore,
    trimAfter,
    split,
    join,
    changeProfile,
};

export default PointManager;
