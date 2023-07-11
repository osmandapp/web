import md5 from "blueimp-md5";
import Utils from "../../../util/Utils";
import { apiGet } from "../../../util/HttpApi";
import TracksManager from "../../../context/TracksManager";
import TrackLayerProvider from "../../../map/TrackLayerProvider";

const PROFILE_LINE = TracksManager.PROFILE_LINE;

const LINE_WAITING_STYLE = TrackLayerProvider.TEMP_LINE_STYLE;

function osrmToFeaturesCollection(osrm, style = {}) {
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
            },
            style
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

export async function calculateRoute({
    startPoint,
    endPoint,
    interPoints,
    avoidRoads,
    setRouteData,
    changeRouteText,
    setRoutingErrorMsg
}) {

    const style = { color: this.colors[this.profile] ?? 'blue' };

    if (this.profile === PROFILE_LINE) {
        return calculateRouteLine({
            startPoint,
            endPoint,
            interPoints,
            setRouteData,
            changeRouteText,
            setRoutingErrorMsg,
            style
        });
    }

    const waitingStyle = LINE_WAITING_STYLE;
    const waitingLines = makeLineFeaturesCollection({ startPoint, endPoint, interPoints, style: waitingStyle });
    setRouteData(waitingLines);

    if (this.type === 'osrm') {
        return calculateRouteOSRM.call(this, {
            startPoint,
            endPoint,
            interPoints,
            setRouteData,
            changeRouteText,
            setRoutingErrorMsg,
            style
        });
    }

    // OsmAnd (call original function)
    if (this.type === 'osmand') {
        const routeMode = {
            mode: this.profile,
            opts: this.getParams() ?? {}
        }
        return calculateRouteOsmAnd({
            routeMode,
            startPoint,
            endPoint,
            interPoints,
            avoidRoads,
            setRouteData,
            changeRouteText,
            setRoutingErrorMsg,
            style
        });
    }

    console.log('unknown calculateRoute() call');
}

async function calculateRouteOSRM({
    startPoint,
    endPoint,
    interPoints,
    setRouteData,
    changeRouteText,
    setRoutingErrorMsg,
    style
}) {
    // OSRM
    const url = this.getURL();
    const tail = '?geometries=geojson&overview=full&steps=true';

    const points = [];

    const geo = (point) => point.lng.toFixed(6) + ',' + point.lat.toFixed(6); // OSRM: lng first, lat second !

    points.push(geo(startPoint));
    interPoints?.forEach(i => points.push(geo(i)));
    points.push(geo(endPoint));

    const coordinates = points.join(';');

    setRoutingErrorMsg(null);
    changeRouteText(true, null);

    const response = await apiGet(url + coordinates + tail, { apiCache: true });

    if (response.ok) {
        const data = osrmToFeaturesCollection(await response.json(), style);
        const props = data.features[0]?.properties ?? {};
        const allData = { geojson: data, id: new Date().getTime(), props: props };
        setRouteData(allData);
        changeRouteText(false, allData);
    } else {
        setRouteData(null);
        changeRouteText(false, null);
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
    changeRouteText,
    setRoutingErrorMsg,
    style
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
    changeRouteText(true, null)
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
            data.features.forEach(f => {
                if (f.geometry?.type === 'LineString') {
                    f.style = style;
                }
            });
        }
        let allData = {geojson: data, id: new Date().getTime(), props: props};
        setRouteData(allData);
        changeRouteText(false, allData)
    } else {
        setRouteData(null);
        changeRouteText(false, null);
        setRoutingErrorMsg(`Router error. Please open settings and choose another provider/profile.`);
    }
}

async function calculateRouteLine({
    startPoint,
    endPoint,
    interPoints,
    setRouteData,
    changeRouteText,
    setRoutingErrorMsg,
    style
}) {
    const route = makeLineFeaturesCollection({ startPoint, endPoint, interPoints, style });
    changeRouteText(false, route);
    setRoutingErrorMsg(null);
    setRouteData(route);
    return route;
}

function makeLineFeaturesCollection({ startPoint, endPoint, interPoints, style = {} } = {}) {

    const coordinates = [];
    coordinates.push([startPoint.lng, startPoint.lat]);
    interPoints?.forEach(i => coordinates.push([i.lng, i.lat]));
    coordinates.push([endPoint.lng, endPoint.lat]);

    const id = md5(JSON.stringify(coordinates));

    let distance = 0, latPrev = null, lonPrev = null;
    coordinates.forEach(ll => {
        let [lon, lat] = ll; // vice-versa
        if (latPrev !== null && lonPrev !== null) {
            distance += Utils.getDistance(latPrev, lonPrev, lat, lon);
        }
        latPrev = lat;
        lonPrev = lon;
    });

    const time = 0;

    const geojson = {
        id,
        props: {
            overall: {
                time,
                distance
            }
        },
        geojson: {
            type: 'FeaturesCollection',
            features: [{
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates
                },
                properties: {
                    overall: {
                        time,
                        distance
                    }
                },
                style
            }]
        }
    };

    return geojson;
}