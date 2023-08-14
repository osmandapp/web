import _ from 'lodash';
import TracksManager from './TracksManager';
import TrackLayerProvider from '../map/TrackLayerProvider';
import EditablePolyline from '../map/EditablePolyline';

const STOP_CALC_ROUTING = 'stop';
const MAX_STARTED_ROUTER_JOBS = 4;

export async function controlRouterRequests({ ctx, startedRouterJobs, setStartedRouterJobs }) {
    if (startedRouterJobs > MAX_STARTED_ROUTER_JOBS) {
        console.log('max-jobs', startedRouterJobs);
        return false;
    }

    const cache = ctx.routingCache;

    for (const key in cache) {
        if (cache[key].geometry === null && cache[key].busy !== true) {
            setStartedRouterJobs((x) => x + 1);
            ctx.mutateRoutingCache((o) => o[key] && (o[key].busy = true));

            const { startPoint, endPoint, geoProfile } = cache[key];

            Promise.resolve(
                ctx.trackRouter.updateRouteBetweenPoints(ctx, startPoint, endPoint, geoProfile).then(
                    (success) => {
                        setStartedRouterJobs((x) => x - 1);
                        ctx.mutateRoutingCache((o) => o[key] && (o[key].geometry = success));
                    },
                    (error) => {
                        // keep busy=true till next init
                        setStartedRouterJobs((x) => x - 1);
                        console.debug('updateRouteBeetwenPoints failed', error);
                    }
                )
            );

            return true; // 1 run = 1 job
        }
    }

    ctx.setProcessRouting(false); // all done but a few Promises might be active

    return true;
}

export async function refreshTrackWithRouting({ ctx, map, geoRouter }) {
    let updated = 0;
    const cache = ctx.routingCache;
    const track = ctx.selectedGpxFile;
    const points = ctx.selectedGpxFile.points; // ref

    const validKeys = {};

    if (points && points.length >= 2) {
        for (let i = 1; i < points.length; i++) {
            const startPoint = points[i - 1];
            const endPoint = points[i];
            const geoProfile = startPoint.geoProfile;
            const key = createRoutingKey(startPoint, endPoint, geoProfile);

            const geometry = cache[key].geometry;
            const tempLine = cache[key].tempLine;

            validKeys[key] = true;

            if (geometry && tempLine) {
                updated++;
                endPoint.geometry = geometry;
                const polyline = new EditablePolyline(map, ctx, geometry, null, track).create();
                tempLine.setLatLngs(polyline._latlngs);
                tempLine.options.name = undefined;
                tempLine.setStyle({
                    color: geoRouter.getColor(startPoint),
                    dashArray: null,
                });
                ctx.mutateRoutingCache((o) => o[key] && (o[key].tempLine = null)); // update only once
                console.log('update', i, geometry.length, polyline._latlngs);
            }

            // const newGeometryJSON = JSON.stringify(newGeometry);
            // const oldGeometryJSON = JSON.stringify(endPoint.geometry);
        }
    }

    dropOutdatedCache({ ctx, validKeys });

    if (updated > 0) {
        ctx.setSelectedGpxFile({ ...track });
    }
}

// keep cache by validKeys or filled geometry
function dropOutdatedCache({ ctx, validKeys }) {
    const cache = ctx.routingCache;
    if (Object.keys(validKeys).length > 0) {
        for (const key in cache) {
            if (validKeys[key] || cache[key].geometry || cache[key].busy) {
                // console.log('valid', key);
                continue; // valid
            }
            console.log('outdated-cache', key);
            ctx.mutateRoutingCache((o) => delete o[key]);
        }
    }
}

// function addRoutingToCache(startPoint, endPoint, tempLine, ctx, routingCacheRef) {
function addRoutingToCache(startPoint, endPoint, tempLine, ctx) {
    const routingKey = createRoutingKey(startPoint, endPoint, startPoint.geoProfile);
    ctx.mutateRoutingCache(
        (o) =>
            (o[routingKey] = {
                startPoint: _.cloneDeep(startPoint),
                endPoint: _.cloneDeep(endPoint),
                geoProfile: startPoint.geoProfile,
                tempLine: tempLine,
                geometry: null, // FIXME use previous geometry !
                busy: false,
            })
    );
    // // let routingList = routingCacheRef ? routingCacheRef : ctx.routingCache;
    // let routingList = ctx.routingCache;

    // routingList[routingKey] = {
    //     startPoint: _.cloneDeep(startPoint),
    //     endPoint: _.cloneDeep(endPoint),
    //     geoProfile: startPoint.geoProfile,
    //     tempLine: tempLine,
    //     geometry: null,
    //     busy: false,
    // };
    // ctx.setRoutingCache({ ...routingList });
    // return routingList;
}

function getRoutingFromCache(track, ctx, map) {
    for (let i = 0; i < track.points.length - 1; i++) {
        const start = track.points[i];
        const end = track.points[i + 1];
        if (end.geoProfile) {
            const routingKey = createRoutingKey(start, end, end.geoProfile);
            const geoCache = ctx.routingCache[routingKey]?.geometry;
            if (geoCache === STOP_CALC_ROUTING) {
                let polylineTemp = TrackLayerProvider.createEditableTempLPolyline(start, end, map, ctx);
                track.layers.addLayer(polylineTemp);
                track.updateLayers = true;
                end.geometry = [];
                updateSelectedRouting(routingKey, polylineTemp, ctx);
            } else if (geoCache) {
                end.geometry = geoCache;
            }
        }
    }
    return track;
}

function updateSelectedRouting(routingKey, polylineTemp, ctx) {
    ctx.mutateRoutingCache((o) => {
        o[routingKey].busy = false;
        o[routingKey].geometry = null; // FIXME use previous geometry !
        o[routingKey].tempLine = polylineTemp;
    });
}

// function updateSelectedRouting(segment, polylineTemp, ctx) {
//     segment.busy = false;
//     segment.geometry = null;
//     segment.tempLine = polylineTemp;
//     ctx.setRoutingCache({ ...ctx.routingCache });
// }

// function validateRoutingCache(point, ctx, routingCacheRef) {
function validateRoutingCache(point, ctx) {
    // let routingList = routingCacheRef ? routingCacheRef : ctx.routingCache;
    let routingList = ctx.routingCache;
    Object.keys(routingList).forEach((k) => {
        if (segmentHasPoint(routingList[k], point) && routingList[k].geometry === null) {
            routingList[k].geometry = 'stop';
        }
    });
}

function segmentHasPoint(segment, point) {
    return (
        TracksManager.isEqualPoints(segment.startPoint, point) || TracksManager.isEqualPoints(segment.endPoint, point)
    );
}

// key looks like query string but never used as it
function createRoutingKey(startPoint, endPoint, geoProfile) {
    if (!startPoint || !endPoint || !geoProfile) {
        console.error('createRoutingKey got empty parameter', startPoint, endPoint, geoProfile);
    }

    const ll = `startLat=${startPoint?.lat},startLng=${startPoint?.lng},endLat=${endPoint?.lat},endLng=${endPoint?.lng},`;

    // const geo = TracksManager.formatRouteMode(geoProfile); // this is not enough
    const geo = JSON.stringify(geoProfile); // include all of type/router/profile/params

    return ll + geo; // Reminder: to keep property creation order, keys must be String
}

function addSegmentToRouting(start, end, oldPoint, tempPolyline, segments) {
    const segment = {
        oldPoint: oldPoint,
        start: start,
        end: end,
        tempPolyline: tempPolyline,
    };
    segments.push(segment);
    return segments;
}

const TracksRoutingCache = {
    addRoutingToCache,
    getRoutingFromCache,
    validateRoutingCache,
    addSegmentToRouting,
};

export default TracksRoutingCache;
