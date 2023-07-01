import TracksManager from "./TracksManager";
import _ from "lodash";
import TrackLayerProvider from "../map/TrackLayerProvider";
import { apiGet } from '../util/HttpApi';

const STOP_CALC_ROUTING = 'stop';

function addRoutingToCash(startPoint, endPoint, tempLine, ctx, routingCashRef) {
    const routingKey = createRoutingKey(startPoint, endPoint, startPoint.routeMode);
    let routingList = routingCashRef ? routingCashRef : ctx.routingCash;

    routingList[routingKey] = {
        startPoint: _.cloneDeep(startPoint),
        endPoint: _.cloneDeep(endPoint),
        routeMode: startPoint.routeMode,
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

function osrmToFeaturesCollection(osrm) {
/*
    convert OSRM routes[] to features[] "LineString"
    convert OSRM legs[].steps[] to features[] "Point" (OSRM's turns)
    convert OSRM waypoints[] to features[] "Point" (OSRM's start-end)
    convert OSRM duration/distance to properties

    now support only 1st of routes[]
*/
    const features = [];

    const cap = (s) => s && s[0].toUpperCase() + s.slice(1);

    const maneuver = (s) => {
        // imperative
        const type = cap(s?.maneuver?.type ?? ''); // Turn
        const modifier = cap(s?.maneuver?.modifier ?? ''); // Left

        // target
        const name = s?.name ?? ''; // Street
        const ref = s?.ref ? ` (${s.ref})` : ''; // (REF)

        // go
        const distance = s?.distance ?? '';

        const imperative = type + ' ' + modifier;
        const target = name ? 'to ' + name + ' ' + ref : '';
        const go = distance > 0 ? 'and go ' + distance + ' meters' : '';

        return `${imperative} ${target} ${go}`; // Turn Left to Street and go 621 meters
    }

    osrm?.routes?.forEach(r => {
        // parse geo
        features.push({
            type: 'Feature',
            geometry: r.geometry,
            properties: {
                overall: {
                    time: r.duration,
                    distance: r.distance
                }
            }
        });
        // parse turns
        r.legs?.forEach(l => {
            l.steps?.forEach(s => {
                features.push({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: s.maneuver?.location
                    },
                    properties: {
                        description: maneuver(s)
                    }
                });
            })
        });
    });

    // parse points (really need?)
    osrm?.waypoints?.forEach(w => {
        features.push({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: w.location
            },
            properties: {
                description: w.name
            }
        });
    });

    return { type: 'FeatureCollection', features };
}

async function calculateRoute({
    routeProviders,
    startPoint,
    endPoint,
    interPoints,
    avoidRoads,
    routeMode,
    setRouteData,
    getRouteText,
    setRoutingErrorMsg
}) {
    // OsmAnd (call original function)
    if (routeProviders.type === 'osmand') {
        return calculateRouteOsmAnd({
            startPoint,
            endPoint,
            interPoints,
            avoidRoads,
            routeMode,
            setRouteData,
            getRouteText,
            setRoutingErrorMsg
        });
    }

    // OSRM
    const url = routeProviders.getURL();
    const tail = '?geometries=geojson&overview=full&steps=true';

    const points = [];

    const geo = (point) => point.lng.toFixed(6) + ',' + point.lat.toFixed(6); // OSRM: lng first, lat second !

    points.push(geo(startPoint));
    interPoints?.forEach(i => points.push(geo(i)));
    points.push(geo(endPoint));

    const coordinates = points.join(';');

    setRoutingErrorMsg(null);
    getRouteText(true, null);

    const response = await apiGet(url + coordinates + tail, { apiCache: true });

    if (response.ok) {
        const data = osrmToFeaturesCollection(await response.json());
        const props = data.features[0]?.properties ?? {};
        const allData = { geojson: data, id: new Date().getTime(), props: props };
        setRouteData(allData);
        getRouteText(false, allData);
    } else {
        setRouteData(null);
        getRouteText(false, null);
        setRoutingErrorMsg(`Router error. Please open settings and choose another provider/profile.`);
    }
}

async function calculateRouteOsmAnd({
    startPoint,
    endPoint,
    interPoints,
    avoidRoads,
    routeMode,
    setRouteData,
    getRouteText,
    setRoutingErrorMsg
}) {
    setRoutingErrorMsg(null);
    const starturl = `points=${startPoint.lat.toFixed(6)},${startPoint.lng.toFixed(6)}`;
    let inter = '';
    interPoints.forEach((i) => {
        inter += `&points=${i.lat.toFixed(6)},${i.lng.toFixed(6)}`;
    });
    const endurl = `points=${endPoint.lat.toFixed(6)},${endPoint.lng.toFixed(6)}`;
    let avoidRoadsUrl = '';
    avoidRoads.forEach((i) => {
        avoidRoadsUrl += ',' + i.id;
    });
    if (avoidRoadsUrl !== '') {
        avoidRoadsUrl = '&avoidRoads=' + avoidRoadsUrl.substring(1);
    }
    getRouteText(true, null)
    const maxDist = `maxDist=${process.env.REACT_APP_MAX_ROUTE_DISTANCE}`
    const response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/route?`
        + `routeMode=${TracksManager.formatRouteMode(routeMode)}&${starturl}${inter}&${endurl}&${avoidRoadsUrl}${maxDist}`, {
        apiCache: true,
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok && response.data?.features) {
        let data = await response.json();
        let props = {};
        if (data.msg) {
            setRoutingErrorMsg(data.msg);
            data = data.features;
        }
        if (data.features.length > 0) {
            props = data.features[0]?.properties;
        }
        let allData = {geojson: data, id: new Date().getTime(), props: props};
        setRouteData(allData);
        getRouteText(false, allData)
    } else {
        setRouteData(null);
        getRouteText(false, null);
        setRoutingErrorMsg(`Router error. Please open settings and choose another provider/profile.`);
    }
}

/*
    calculateGpxRoute() processes GPX-data via API-request /routing/gpx-approximate
    OSRM profiles car/bicycle/pedestrian are compatible and supported by API
    OsmAnd profiles (ex-routeMode) are supported as is
*/
async function calculateGpxRoute({
    routeMode,
    routeTrackFile,
    setRouteData,
    setStartPoint,
    setEndPoint,
    setInterPoints
}) {
    let formData = new FormData();
    formData.append('file', routeTrackFile);
    const response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/gpx-approximate?routeMode=${TracksManager.formatRouteMode(routeMode)}`, {
        apiCache: true,
        method: 'POST',
        body: formData
    });
    if (response.ok) {
        let data = await response.json();
        let start, end;
        let props = {};
        if (data?.features?.length > 0) {
            let coords = data?.features[0].geometry.coordinates;
            if (coords.length > 0) {
                start = {lat: coords[0][1], lng: coords[0][0]};
                end = {lat: coords[coords.length - 1][1], lng: coords[coords.length - 1][0]};
            }
            props = data.features[0]?.properties;
        }
        setStartPoint(start);
        setEndPoint(end);
        setInterPoints([]);
        setRouteData({geojson: data, id: new Date().getTime(), props: props});
    } else {
        let message = await response.text();
        alert(message);
    }
}

function routeModeCompatible(routeProviders) {
    const compatible = {
        mode: routeProviders.profile,
        opts: routeProviders.getParams() ?? {} // compatible opts can't be undefined
    }
    return compatible;
}

const RoutingManager = {
    addRoutingToCash,
    getRoutingFromCash,
    validateRoutingCash,
    addSegmentToRouting,
    routeModeCompatible,
    calculateGpxRoute,
    calculateRoute
}

export default RoutingManager;