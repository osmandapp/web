import TracksManager, { isPointUnrouted } from './track/TracksManager';
import Utils from '../util/Utils';
import TrackLayerProvider from '../map/util/TrackLayerProvider';
import TracksRoutingCache from '../context/TracksRoutingCache';

const deletePoint = async (index, ctx) => {
    let currentTrack = ctx.localTracks.find((t) => t.name === ctx.selectedGpxFile.name);
    if (currentTrack && TracksManager.getEditablePoints(currentTrack).length > 2 && !ctx.createTrack?.enable) {
        await deletePointByIndex(currentTrack, index, ctx);
    } else {
        await deletePointByIndex(ctx.selectedGpxFile, index, ctx);
    }
};

function deleteWpt(ind, ctx, save = false) {
    ctx.setSelectedGpxFile((o) => {
        o.wpts.splice(ind, 1);
        o.updateLayers = true;
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
                    let newGeometryFromNewPoint = await geoRouter.updateRouteBetweenPoints(ctx, point, points[i + 1]);
                    if (newGeometryFromNewPoint) {
                        points[i + 1].geometry = newGeometryFromNewPoint;
                    }
                }
            } else if (lastPoint) {
                if (points[i - 1].geometry) {
                    let newGeometryToNewPoint = await geoRouter.updateRouteBetweenPoints(ctx, points[i - 1], point);
                    if (newGeometryToNewPoint) {
                        point.geometry = newGeometryToNewPoint;
                    }
                }
            } else {
                if (points[i + 1].geometry) {
                    let newGeometryToNewPoint = await geoRouter.updateRouteBetweenPoints(ctx, points[i - 1], point);
                    if (newGeometryToNewPoint) {
                        point.geometry = newGeometryToNewPoint;
                    }
                    let newGeometryFromNewPoint = await geoRouter.updateRouteBetweenPoints(ctx, point, points[i + 1]);
                    if (newGeometryFromNewPoint) {
                        points[i + 1].geometry = newGeometryFromNewPoint;
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

const PointManager = {
    deletePoint,
    deleteWpt,
    reorder,
};

export default PointManager;
