import md5 from 'blueimp-md5';
import Utils from '../../../util/Utils';
import { apiGet } from '../../../util/HttpApi';
import TracksManager from '../../../manager/track/TracksManager';
import TrackLayerProvider from '../../../map/util/TrackLayerProvider';

const PROFILE_LINE = TracksManager.PROFILE_LINE;

const LINE_WAITING_STYLE = TrackLayerProvider.TEMP_LINE_STYLE;

export async function calculateRoute({ changeRouteText, setRoutingErrorMsg }) {
    const style = { color: this.colors[this.profile] ?? 'blue' };

    const waitingStyle = LINE_WAITING_STYLE;
    const waitingLines = makeLineFeatureCollection.call(this, { style: waitingStyle });
    this.putRoute({ route: waitingLines.geojson, skipConversion: true });

    // don't show anything more than Line
    // used for drag-and-drop (see events.js)
    if (this.preview) {
        return;
    }

    if (this.profile === PROFILE_LINE) {
        return calculateRouteLine.call(this, {
            changeRouteText,
            setRoutingErrorMsg,
            style,
        });
    }

    if (this.type === 'osrm') {
        return calculateRouteOSRM.call(this, {
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
        return calculateRouteOsmAnd.call(this, {
            geoProfile,
            changeRouteText,
            setRoutingErrorMsg,
            style,
        });
    }

    console.error('unknown calculateRoute() call');
}

async function calculateRouteOSRM({ changeRouteText, setRoutingErrorMsg, style }) {
    // OSRM
    const url = this.getURL();
    const tail = '?geometries=geojson&overview=full&steps=true';

    const points = [];

    const geo = (point) => point.lng.toFixed(6) + ',' + point.lat.toFixed(6); // OSRM: lng first, lat second !

    const startPoint = this.getOption('route.points.start');
    const finishPoint = this.getOption('route.points.finish');
    const viaPoints = this.getOption('route.points.viaPoints');

    points.push(geo(startPoint));
    viaPoints?.forEach((i) => points.push(geo(i)));
    points.push(geo(finishPoint));

    const coordinates = points.join(';');

    setRoutingErrorMsg(null);
    changeRouteText(true, null);

    const response = await apiGet(url + coordinates + tail, { apiCache: true, dataOnErrors: true });

    if (response.ok) {
        const osrm = await response.json();
        const { route } = this.putRouteOsrm({ osrm, style });
        changeRouteText(false, this.getRouteProps(route));
    } else {
        this.resetRoute();
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

async function calculateRouteOsmAnd({ geoProfile, changeRouteText, setRoutingErrorMsg, style }) {
    setRoutingErrorMsg(null);

    const startPoint = this.getOption('route.points.start');
    const finishPoint = this.getOption('route.points.finish');
    const viaPoints = this.getOption('route.points.viaPoints');
    const avoidRoads = this.getOption('route.points.avoidRoads');

    const starturl = `points=${startPoint.lat.toFixed(6)},${startPoint.lng.toFixed(6)}`;
    let inter = '';
    viaPoints.forEach((i) => {
        inter += `&points=${i.lat.toFixed(6)},${i.lng.toFixed(6)}`;
    });
    const endurl = `points=${finishPoint.lat.toFixed(6)},${finishPoint.lng.toFixed(6)}`;

    let avoidRoadsUrl = '';
    avoidRoads.forEach((i) => {
        avoidRoadsUrl += ',' + i.id;
    });
    if (avoidRoadsUrl !== '') {
        avoidRoadsUrl = '&avoidRoads=' + avoidRoadsUrl.substring(1);
    }
    changeRouteText(true, null);
    const maxDist = '&maxDist=100'; // compatibility-only
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
        const { route } = this.putRoute({ route: data });
        changeRouteText(false, this.getRouteProps(route));
    } else {
        this.resetRoute();
        changeRouteText(false, null);
        setRoutingErrorMsg(`Router error. Please open settings and choose another provider/profile.`);
    }
}

async function calculateRouteLine({ changeRouteText, setRoutingErrorMsg, style }) {
    const draft = makeLineFeatureCollection.call(this, { style });
    const { route } = this.putRoute({ route: draft.geojson });
    changeRouteText(false, this.getRouteProps(route));
    setRoutingErrorMsg(null);
    return draft;
}

function makeLineFeatureCollection({ style = {} } = {}) {
    const startPoint = this.getOption('route.points.start');
    const finishPoint = this.getOption('route.points.finish');
    const viaPoints = this.getOption('route.points.viaPoints');

    const coordinates = [];
    coordinates.push([startPoint.lng, startPoint.lat]);
    viaPoints?.forEach((i) => coordinates.push([i.lng, i.lat]));
    coordinates.push([finishPoint.lng, finishPoint.lat]);

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
            type: 'FeatureCollection',
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
