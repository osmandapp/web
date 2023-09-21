import md5 from 'blueimp-md5';
import Utils from '../../../util/Utils';
import { apiGet } from '../../../util/HttpApi';
import TracksManager from '../../../context/TracksManager';
import TrackLayerProvider from '../../../map/TrackLayerProvider';

const PROFILE_LINE = TracksManager.PROFILE_LINE;

const LINE_WAITING_STYLE = TrackLayerProvider.TEMP_LINE_STYLE;

export async function calculateRoute({
    startPoint,
    endPoint,
    interPoints,
    avoidRoads,
    routeObject,
    changeRouteText,
    setRoutingErrorMsg,
}) {
    const style = { color: this.colors[this.profile] ?? 'blue' };

    if (this.profile === PROFILE_LINE) {
        return calculateRouteLine({
            startPoint,
            endPoint,
            interPoints,
            routeObject,
            changeRouteText,
            setRoutingErrorMsg,
            style,
        });
    }

    const waitingStyle = LINE_WAITING_STYLE;
    const waitingLines = makeLineFeaturesCollection({ startPoint, endPoint, interPoints, style: waitingStyle });
    routeObject.putRoute(waitingLines.geojson);

    if (this.preview) {
        return;
    }

    if (this.type === 'osrm') {
        return calculateRouteOSRM.call(this, {
            startPoint,
            endPoint,
            interPoints,
            routeObject,
            changeRouteText,
            setRoutingErrorMsg,
            style,
        });
    }

    // OsmAnd (call original function)
    if (this.type === 'osmand') {
        const geoProfile = {
            profile: this.profile,
            params: this.getParams() ?? {},
        };
        return calculateRouteOsmAnd({
            geoProfile,
            startPoint,
            endPoint,
            interPoints,
            avoidRoads,
            routeObject,
            changeRouteText,
            setRoutingErrorMsg,
            style,
        });
    }

    console.error('unknown calculateRoute() call');
}

async function calculateRouteOSRM({
    startPoint,
    endPoint,
    interPoints,
    routeObject,
    changeRouteText,
    setRoutingErrorMsg,
    style,
}) {
    // OSRM
    const url = this.getURL();
    const tail = '?geometries=geojson&overview=full&steps=true';

    const points = [];

    const geo = (point) => point.lng.toFixed(6) + ',' + point.lat.toFixed(6); // OSRM: lng first, lat second !

    points.push(geo(startPoint));
    interPoints?.forEach((i) => points.push(geo(i)));
    points.push(geo(endPoint));

    const coordinates = points.join(';');

    setRoutingErrorMsg(null);
    changeRouteText(true, null);

    const response = await apiGet(url + coordinates + tail, { apiCache: true, dataOnErrors: true });

    if (response.ok) {
        const osrm = await response.json();
        const { route } = routeObject.putRouteOsrm({ osrm, style });
        changeRouteText(false, routeObject.getRouteProps(route));
    } else {
        routeObject.reset();
        changeRouteText(false, null);
        try {
            const json = JSON.parse(response.data);
            if (json.message) {
                setRoutingErrorMsg(json.message + ' (please try another provider/profile)');
            }
        } catch (e) {
            console.error('OSRM fatal error', e);
        }
    }
}

async function calculateRouteOsmAnd({
    startPoint,
    endPoint,
    interPoints,
    avoidRoads,
    geoProfile,
    routeObject,
    changeRouteText,
    setRoutingErrorMsg,
    style,
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
    changeRouteText(true, null);
    const maxDist = `&maxDist=${process.env.REACT_APP_MAX_ROUTE_DISTANCE}`;
    const routeModeStr = TracksManager.formatRouteMode(geoProfile);
    const response = await apiGet(
        `${process.env.REACT_APP_ROUTING_API_SITE}/routing/route?` +
            `routeMode=${routeModeStr}&${starturl}${inter}&${endurl}${avoidRoadsUrl}${maxDist}`,
        {
            apiCache: true,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }
    );
    if (response.ok && response.data?.features) {
        let data = await response.json();
        if (data.msg) {
            setRoutingErrorMsg(data.msg);
            data = data.features;
        }
        if (data.features.length > 0) {
            data.features.forEach((f) => {
                if (f.geometry?.type === 'LineString') {
                    f.style = style;
                }
            });
        }
        const { route } = routeObject.putRoute(data);
        changeRouteText(false, routeObject.getRouteProps(route));
    } else {
        routeObject.reset();
        changeRouteText(false, null);
        setRoutingErrorMsg(`Router error. Please open settings and choose another provider/profile.`);
    }
}

async function calculateRouteLine({
    startPoint,
    endPoint,
    interPoints,
    routeObject,
    changeRouteText,
    setRoutingErrorMsg,
    style,
}) {
    const draft = makeLineFeaturesCollection({ startPoint, endPoint, interPoints, style });
    const { route } = routeObject.putRoute(draft.geojson);
    changeRouteText(false, routeObject.getRouteProps(route));
    setRoutingErrorMsg(null);
    return draft;
}

function makeLineFeaturesCollection({ startPoint, endPoint, interPoints, style = {} } = {}) {
    const coordinates = [];
    coordinates.push([startPoint.lng, startPoint.lat]);
    interPoints?.forEach((i) => coordinates.push([i.lng, i.lat]));
    coordinates.push([endPoint.lng, endPoint.lat]);

    const id = md5(JSON.stringify(coordinates));

    let distance = 0,
        latPrev = null,
        lonPrev = null;

    coordinates.forEach((ll) => {
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
                distance,
            },
        },
        geojson: {
            type: 'FeaturesCollection',
            features: [
                {
                    type: 'Feature',
                    geometry: {
                        type: 'LineString',
                        coordinates,
                    },
                    properties: {
                        overall: {
                            time,
                            distance,
                        },
                    },
                    style,
                },
            ],
        },
    };

    return geojson;
}
