import { apiPost } from '../../../util/HttpApi';
import { quickNaNfix } from '../../../util/Utils';
import TracksManager from '../../../context/TracksManager';

export async function updateRouteBetweenPoints(ctx, start, end, geoProfile) {
    ctx.setProcessRouting(true);

    if (!start || !end) {
        console.error('updateRouteBetweenPoints invalid points', start, end);
        ctx.setRoutingErrorMsg('Routing error, please report support');
        return;
    }

    const routeMode = TracksManager.formatRouteMode(geoProfile ?? this.getGeoProfile());
    // console.log('between/start/geo', start?.geoProfile);
    // console.log('between/end/geo', end?.geoProfile);
    // console.log('between/geoProfile', geoProfile);

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
}
