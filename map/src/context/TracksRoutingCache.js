import _ from 'lodash';
import TracksManager from './TracksManager';
import TrackLayerProvider from '../map/TrackLayerProvider';

const STOP_CALC_ROUTING = 'stop';

function addRoutingToCache(startPoint, endPoint, tempLine, ctx, routingCacheRef) {
    const routingKey = createRoutingKey(startPoint, endPoint, startPoint.geoProfile);
    let routingList = routingCacheRef ? routingCacheRef : ctx.routingCache;

    routingList[routingKey] = {
        startPoint: _.cloneDeep(startPoint),
        endPoint: _.cloneDeep(endPoint),
        geoProfile: startPoint.geoProfile,
        tempLine: tempLine,
        geometry: null,
    };
    ctx.setRoutingCache({ ...routingList });
    return routingList;
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
                updateSelectedRouting(ctx.routingCache[routingKey], polylineTemp, ctx);
            } else if (geoCache) {
                end.geometry = geoCache;
            }
        }
    }
    return track;
}

function updateSelectedRouting(segment, polylineTemp, ctx) {
    segment.geometry = null;
    segment.tempLine = polylineTemp;
    ctx.setRoutingCache({ ...ctx.routingCache });
}

function validateRoutingCache(point, ctx, routingCacheRef) {
    let routingList = routingCacheRef ? routingCacheRef : ctx.routingCache;
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

    return ll + geo;
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
