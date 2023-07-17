import { apiGet, apiPost } from '../../../util/HttpApi';
import Utils, { quickNaNfix } from '../../../util/Utils';
import TracksManager from '../../../context/TracksManager';

const PROFILE_LINE = TracksManager.PROFILE_LINE;

export async function updateRouteBetweenPoints(ctx, start, end, geoProfile = this.getGeoProfile()) {
    const routers = {
        osrm: updateRouteBetweenPointsOSRM,
        osmand: updateRouteBetweenPointsOsmAnd,
        [PROFILE_LINE]: updateRouteBetweenPointsLine,
    };

    const type = geoProfile?.profile === PROFILE_LINE ? PROFILE_LINE : geoProfile?.type;

    if (type && routers[type] && start && end && geoProfile) {
        ctx.setProcessRouting(true);

        const result = await routers[type].call(this, { ctx, start, end, geoProfile });

        if (result) {
            return result;
        } else {
            console.error('Router error, Line used');
            ctx.setRoutingErrorMsg('Router error, Line used');
            return routers[PROFILE_LINE]({ ctx, start, end, geoProfile });
        }
    }

    throw new Error('updateRouteBetweenPoints unknown router');
}

function osrmToPoints(osrm) {
    const points = [];
    osrm?.routes?.forEach((r) => {
        let distance = 0; // 1st point = 0
        const coordinates = r.geometry?.coordinates;
        coordinates?.forEach(([lng, lat], i) => {
            if (i > 0) {
                distance = Utils.getDistance(lat, lng, coordinates[i - 1][1], coordinates[i - 1][0]);
            }
            points.push({
                lat,
                lng,
                distance,

                // Note: distance will be recalculated later.
                // More fields will be filled later by GET_ANALYSIS.

                // srtmEle: null,
                // ele: TracksManager.NAN_MARKER,
                // ext: { ele: TracksManager.NAN_MARKER },
            });
        });
    });
    return points;
}

async function updateRouteBetweenPointsOSRM({ start, end, geoProfile }) {
    const url = this.getURL(geoProfile);
    const tail = '?geometries=geojson&overview=simplified&steps=false';

    const geo = (point) => point.lng.toFixed(6) + ',' + point.lat.toFixed(6); // OSRM lng+lat
    const points = [geo(start), geo(end)];
    const coordinates = points.join(';');

    const response = await apiGet(url + coordinates + tail, { apiCache: true });

    if (response.ok) {
        const points = osrmToPoints(await response.json());
        // TracksManager.updateGapProfileOneSegment(end, data?.points); FIXME
        return points;
    }

    return null;
}

async function updateRouteBetweenPointsLine({ start, end }) {
    return [
        { lat: start.lat, lng: start.lng },
        { lat: end.lat, lng: end.lng },
    ];
}

async function updateRouteBetweenPointsOsmAnd({ ctx, start, end, geoProfile }) {
    const routeMode = TracksManager.formatRouteMode(geoProfile ?? this.getGeoProfile());

    const result = await apiPost(`${process.env.REACT_APP_GPX_API}/routing/update-route-between-points`, '', {
        apiCache: true,
        params: {
            start: JSON.stringify({ latitude: start.lat, longitude: start.lng }),
            end: JSON.stringify({ latitude: end.lat, longitude: end.lng }),
            routeMode: routeMode,
            hasRouting: start.segment !== null || end.segment !== null,
            maxDist: process.env.REACT_APP_MAX_ROUTE_DISTANCE,
        },
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (result) {
        let data = result?.data; // points
        if (typeof result?.data === 'string') {
            data = JSON.parse(quickNaNfix(result.data));
        }
        if (data?.msg) {
            ctx.setRoutingErrorMsg(data?.msg);
        }
        TracksManager.updateGapProfileOneSegment(end, data?.points);
        return data?.points;
    }

    return null;
}
