import { apiGet } from "../../../util/HttpApi";
import TracksManager from "../../../context/TracksManager";

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

export async function calculateRoute({
    startPoint,
    endPoint,
    interPoints,
    avoidRoads,
    setRouteData,
    getRouteText,
    setRoutingErrorMsg
}) {

    // TODO
    if (this.profile === 'line') {
        setRouteData(null);
        getRouteText(false, null);
        setRoutingErrorMsg(`Router error. Please open settings and choose another provider/profile.`);

        console.log('line route requested');

        return;
    }

    if (this.type === 'osrm') {
        return calculateRouteOSRM.call(this, {
            startPoint,
            endPoint,
            interPoints,
            setRouteData,
            getRouteText,
            setRoutingErrorMsg
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
            getRouteText,
            setRoutingErrorMsg
        });
    }

    console.log('unknown calculateRoute() call');
}

async function calculateRouteOSRM({
    startPoint,
    endPoint,
    interPoints,
    setRouteData,
    getRouteText,
    setRoutingErrorMsg
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