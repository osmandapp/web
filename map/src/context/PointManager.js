import TracksManager from "./TracksManager";
import Utils from "../util/Utils";

const deletePoint = async (index, ctx) => {
    let currentTrack = ctx.localTracks.find(t => t.name === ctx.selectedGpxFile.name);
    if (currentTrack && TracksManager.getEditablePoints(currentTrack).length > 2 && !ctx.createTrack?.enable) {
        await deletePointByIndex(currentTrack, index, ctx);
    } else {
        await deletePointByIndex(ctx.selectedGpxFile, index, ctx);
    }
}

function deleteWpt (ind, ctx) {
    ctx.selectedGpxFile.wpts.splice(ind, 1);
    ctx.selectedGpxFile.updateLayers = true;
    ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
}

async function reorder(startIndex, endIndex, currentTrack, ctx) {
    let removed;
    removed = await deletePointByIndex(currentTrack, startIndex, ctx).then((res) => {
        return res;
    });
    if (removed.length > 0) {
        await insertPointToTrack(currentTrack, endIndex, removed[0], ctx);
    }
}

async function insertPointToTrack(currentTrack, index, point, ctx) {
    let lengthSum = 0;
    if (currentTrack.points) {
        await insertPoint(currentTrack.points, index, point, lengthSum, ctx)
    } else {
        for (let track of currentTrack.tracks) {
            lengthSum = await insertPoint(track.points, index, point, lengthSum, ctx);
        }
    }
}

async function insertPoint(points, index, point, lengthSum, ctx) {
    points.splice(index, 0, point);
    let firstPoint = index === 0 || index === lengthSum;
    let lastPoint = index === (points.length - 1 + lengthSum);
    for (let i = 0; i <= points.length; i++) {
        if (i + lengthSum === index && point) {
            if (firstPoint) {
                if (points[i + 1].geometry) {
                    let newGeometryFromNewPoint = await TracksManager.updateRouteBetweenPoints(ctx, point, points[i + 1]);
                    if (newGeometryFromNewPoint) {
                        points[i + 1].geometry = newGeometryFromNewPoint;
                    }
                }
            } else if (lastPoint) {
                if (points[i - 1].geometry) {
                    let newGeometryToNewPoint = await TracksManager.updateRouteBetweenPoints(ctx, points[i - 1], point);
                    if (newGeometryToNewPoint) {
                        point.geometry = newGeometryToNewPoint;
                    }
                }
            } else {
                if (points[i + 1].geometry) {
                    let newGeometryToNewPoint = await TracksManager.updateRouteBetweenPoints(ctx, points[i - 1], point);
                    if (newGeometryToNewPoint) {
                        point.geometry = newGeometryToNewPoint;
                    }
                    let newGeometryFromNewPoint = await TracksManager.updateRouteBetweenPoints(ctx, point, points[i + 1]);
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
        res = await deleteByIndex(currentTrack.points, index, lengthSum, ctx).then((res) => {
                ctx.selectedGpxFile.updateLayers = true;
                ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
                return res.deletedPoint;
            }
        );
    } else {
        for (let track of currentTrack.tracks) {
            res = await deleteByIndex(track.points, index, lengthSum, ctx).then((res) => {
                TracksManager.updateStat(currentTrack);
                TracksManager.updateTrack(currentTrack, ctx);
                TracksManager.saveTracks(ctx.localTracks);
                lengthSum = res.lengthSum;
                if (res.deletedPoint) {
                    return res.deletedPoint;
                }
            });
        }
    }
    return res;
}

async function deleteByIndex(points, index, lengthSum, ctx) {
    let res = {
        deletedPoint: null,
        lengthSum: null
    }
    let firstPoint = index === 0 || index === lengthSum;
    let lastPoint = index === (points.length - 1 + lengthSum);
    if (firstPoint) {
        if (points[index + 1].geometry) {
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
                    if (points[i].profile === TracksManager.PROFILE_LINE) {
                        let currentNewGeo = points[i].geometry;
                        currentNewGeo.pop();
                        let nextNewGeo = points[i + 1].geometry;
                        nextNewGeo.shift();
                        let resGeo = currentNewGeo.concat(nextNewGeo)

                        newGeometry = Utils.getPointsDist(resGeo);
                    } else {
                        newGeometry = await TracksManager.updateRouteBetweenPoints(ctx, points[i - 1], points[i + 1]);
                    }
                    if (newGeometry) {
                        points[i + 1].geometry = newGeometry;
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

const PointManager = {
    deletePoint,
    deleteWpt,
    reorder
}

export default PointManager;