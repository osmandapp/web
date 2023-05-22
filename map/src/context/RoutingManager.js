import TracksManager from "./TracksManager";
import _ from "lodash";
import TrackLayerProvider from "../map/TrackLayerProvider";


const STOP_CALC_ROUTING = 'stop';

function addRoutingToCash(startPoint, endPoint, tempLine, ctx, routingCashRef) {
    const routingKey = createRoutingKey(startPoint, endPoint, ctx.creatingRouteMode);
    let routingList = routingCashRef ? routingCashRef : ctx.routingCash;

    routingList[routingKey] = {
        startPoint: _.cloneDeep(startPoint),
        endPoint: _.cloneDeep(endPoint),
        routeMode: _.cloneDeep(ctx.creatingRouteMode),
        tempLine: tempLine,
        geometry: null
    }

    ctx.setRoutingCash({...routingList});
    return routingList;
}

function getRoutingFromCash(track, ctx, map) {
    for (let i = 0; i < track.points.length - 1; i++) {
        const start = track.points[i];
        const end = track.points[i + 1];
        if (end.routeMode) {
            const routingKey = createRoutingKey(start, end, end.routeMode);
            const geoCash = ctx.routingCash[routingKey]?.geometry;
            if (geoCash === STOP_CALC_ROUTING) {
                let polylineTemp = TrackLayerProvider.createEditableTempLPolyline(start, end, map, ctx);
                track.layers.addLayer(polylineTemp);
                track.updateLayers = true;
                end.geometry = [];
                updateSelectedRouting(ctx.routingCash[routingKey], polylineTemp, ctx);
            } else if (geoCash) {
                end.geometry = geoCash;
            }
        }
    }
    return track;
}

function updateSelectedRouting(segment, polylineTemp, ctx) {
    segment.geometry = null;
    segment.tempLine = polylineTemp;
    ctx.setRoutingCash({...ctx.routingCash});
}

function validateRoutingCash(point, ctx, routingCashRef) {
    let routingList = routingCashRef ? routingCashRef : ctx.routingCash;
    Object.keys(routingList).forEach(k => {
        if (segmentHasPoint(routingList[k], point) && (routingList[k].geometry === null)) {
            routingList[k].geometry = 'stop';
        }
    })
}

function segmentHasPoint(segment, point) {
    return TracksManager.isEqualPoints(segment.startPoint, point) || TracksManager.isEqualPoints(segment.endPoint, point);
}

function createRoutingKey(startPoint, endPoint, routeMode) {
    return `startLat=${startPoint.lat},startLng=${startPoint.lng},endLat=${endPoint.lat},endLng=${endPoint.lng},${TracksManager.formatRouteMode(routeMode)}`;
}

function addSegmentToRouting(start, end, oldPoint, tempPolyline, segments) {
    const segment = {
        oldPoint: oldPoint,
        start: start,
        end: end,
        tempPolyline:tempPolyline
    }
    segments.push(segment);
    return segments;
}

const RoutingManager = {
    addRoutingToCash,
    getRoutingFromCash,
    validateRoutingCash,
    addSegmentToRouting
}

export default RoutingManager;