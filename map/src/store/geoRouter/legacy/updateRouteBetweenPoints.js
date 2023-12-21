import { apiGet, apiPost } from '../../../util/HttpApi';
import Utils, { quickNaNfix } from '../../../util/Utils';
import TracksManager from '../../../manager/track/TracksManager';
import { defaultPointExtras } from '../../geoObject/convert/convertRouteToTrack';

const PROFILE_LINE = TracksManager.PROFILE_LINE;

export async function updateRouteBetweenPoints(ctx, start, end, geoProfile = this?.getGeoProfile()) {
    const routers = {
        osrm: updateRouteBetweenPointsOSRM,
        osmand: updateRouteBetweenPointsOsmAnd,
        [PROFILE_LINE]: updateRouteBetweenPointsLine,
    };

    const type = geoProfile?.profile === PROFILE_LINE ? PROFILE_LINE : geoProfile?.type;

    if (type && routers[type] && start && end && geoProfile) {
        const result = await routers[type].call(this, { ctx, start, end, geoProfile });

        // don't allow empty geometry
        if (result && result.length > 0) {
            return result;
        } else {
            // console.error('Router error, Line used');
            ctx.setRoutingErrorMsg('Router error, Line used');
            return routers[PROFILE_LINE]({ ctx, start, end, geoProfile });
        }
    }

    throw new Error('updateRouteBetweenPoints unknown router');
}

function osrmToPoints(osrm) {
    const points = [];
    let totalDistance = 0;
    osrm?.routes?.forEach((r) => {
        let distance = 0; // 1st point = 0
        const coordinates = r.geometry?.coordinates;
        coordinates?.forEach(([lng, lat], i) => {
            if (i > 0) {
                const [prevLng, prevLat] = coordinates[i - 1];
                distance = Utils.getDistance(lat, lng, prevLat, prevLng);
                totalDistance += distance;
            }
            points.push({
                lat,
                lng,
                distance,
                ...defaultPointExtras,
            });
        });
    });
    return { points, totalDistance: parseFloat(totalDistance).toFixed(0) };
}

async function updateRouteBetweenPointsOSRM({ start, end, geoProfile, ctx }) {
    const url = this.getURL(geoProfile);
    const tail = '?geometries=geojson&overview=full&steps=false';

    const geo = (point) => point.lng.toFixed(6) + ',' + point.lat.toFixed(6); // OSRM lng+lat
    const points = [geo(start), geo(end)];
    const coordinates = points.join(';');

    const response = await apiGet(url + coordinates + tail, { apiCache: true, dataOnErrors: true });

    if (response.ok) {
        const { points, totalDistance } = osrmToPoints(await response.json());
        if (points.length >= 2) {
            TracksManager.updateGapProfileOneSegment(end, points);

            if (totalDistance > process.env.REACT_APP_MAX_APPROXIMATE_KM * 1000) {
                return points;
            }

            const approximateResult = await apiPost(`${process.env.REACT_APP_GPX_API}/routing/approximate`, points, {
                apiCache: true,
                params: {
                    routeMode: geoProfile.profile,
                    nPoints: points.length,
                    totalDistance,
                    src: 'track',
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            return approximateResult && approximateResult.data?.points?.length >= 2
                ? approximateResult.data.points
                : points;
        }
        if (points.message) {
            ctx.setRoutingErrorMsg(points.message);
        }
    } else {
        try {
            const json = JSON.parse(response.data);
            if (json.message) {
                ctx.setRoutingErrorMsg(json.message + ' (please try another provider/profile)');
            }
        } catch (e) {
            console.error('OSRM fatal error', e);
        }
    }

    return null;
}

async function updateRouteBetweenPointsLine({ start, end }) {
    const distance = Utils.getDistance(start.lat, start.lng, end.lat, end.lng);
    return [
        { lat: start.lat, lng: start.lng, distance: 0, ...defaultPointExtras },
        { lat: end.lat, lng: end.lng, distance, ...defaultPointExtras },
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
            maxDist: '100', // compatability-only
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
        } else {
            ctx.setRoutingErrorMsg(null);
        }
        TracksManager.updateGapProfileOneSegment(end, data?.points);
        return data?.points;
    }

    return null;
}
