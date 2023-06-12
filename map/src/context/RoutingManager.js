import TracksManager from "./TracksManager";
import _ from "lodash";
import TrackLayerProvider from "../map/TrackLayerProvider";
import { mergeStateObject } from "../util/Utils";

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

// called by useState()
// routeProvider definition
function initRouteProvider() {
    // always in list
    const type = 'osmand';
    const name = 'OsmAnd advanced router';

    return {
        name, // unique
        providersOSRM: [],
        providersOsmAnd: [{ type, name }],
        providers() { return this.providersOSRM.concat(this.providersOsmAnd) } // OSRM first, OsmAnd as advanced option
        // TODO find urls, etc
    };
}

// load and validate OSRM routing providers
// update providersOSRM, set default name to first OSRM provider
async function loadRouteProviders(routeProvider, setRouteProvider) {
    const response = await fetch(`${process.env.REACT_APP_ROUTING_API_SITE}/online-routing-providers.json`);
    if (response.ok) {
        const json = await response.json();
        if(json && json?.providers && json?.providers[0]?.name) {
            mergeStateObject(routeProvider, setRouteProvider, {
                    providersOSRM: json.providers,
                    name: json.providers[0].name
                })
        }
    }
}

const RoutingManager = {
    addRoutingToCash,
    getRoutingFromCash,
    validateRoutingCash,
    addSegmentToRouting,
    initRouteProvider,
    loadRouteProviders
}

export default RoutingManager;