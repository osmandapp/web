import { useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import AppContext from '../context/AppContext';
import TracksManager from '../context/TracksManager';

export function RouteService() {
    const context = useContext(AppContext);

    const pinPoint = context.pinPoint;

    const routeObject = context.routeObject;
    const routeRouter = context.routeRouter;
    const routeTrackFile = context.routeTrackFile;

    const setHeaderText = context.setHeaderText;
    const setRoutingErrorMsg = context.setRoutingErrorMsg;

    function changeRouteText(processRoute, props) {
        let resultText = '';
        if (processRoute) {
            resultText = 'Route calculating…';
        } else {
            if (props) {
                const { name } = routeRouter.getProfile();
                const dist = props.overall?.distance ? props.overall?.distance : props.distance;
                resultText = `Route ${Math.round(dist / 100) / 10.0} km for ${name} is found.`;
            }
        }
        setHeaderText((prevState) => ({
            ...prevState,
            route: { text: resultText },
        }));
    }

    const url = useLocation();
    const navigate = useNavigate();
    const [routeQueryStringParams, setRouteQueryStringParams] = useState({});
    const [routeQueryStringCleanup, setRouteQueryStringCleanup] = useState(false);

    // set query-string
    useEffect(() => {
        if (routeRouter.isReady()) {
            let obj = {};

            const startPoint = routeObject.getOption('route.points.start');
            const finishPoint = routeObject.getOption('route.points.finish');
            const viaPoints = routeObject.getOption('route.points.viaPoints');
            const avoidRoads = routeObject.getOption('route.points.avoidRoads');

            if (startPoint) {
                obj['start'] = startPoint.lat.toFixed(6) + ',' + startPoint.lng.toFixed(6);
            }
            if (finishPoint) {
                obj['finish'] = finishPoint.lat.toFixed(6) + ',' + finishPoint.lng.toFixed(6);
            }
            if (viaPoints?.length > 0) {
                obj['inter'] = viaPoints.map((i) => i.lat.toFixed(6) + ',' + i.lng.toFixed(6)).join(';');
            }
            if (avoidRoads?.length > 0) {
                obj['avoid'] = avoidRoads.map(({ id }) => id).join(';');
            }

            const qs = new URLSearchParams(window.location.search);

            if (Object.keys(obj).length > 0 || (qs.get('type') && qs.get('profile'))) {
                const { type, profile } = routeRouter.getProfile();
                obj.type = type;
                obj.profile = profile;

                if (routeRouter.isParamsChanged()) {
                    const mode = TracksManager.formatRouteMode({
                        includeFalse: true,
                        profile: profile,
                        params: routeRouter.getChangedParams(),
                    });
                    obj['params'] = mode.toString().replaceAll('=', ':'); // pretty-url
                }
            }

            // allow-lonely-pin
            if (pinPoint) {
                obj['pin'] = pinPoint.lat.toFixed(6) + ',' + pinPoint.lng.toFixed(6);
            }

            if (Object.keys(obj).length > 0 || routeQueryStringCleanup) {
                setRouteQueryStringCleanup(true);
                setRouteQueryStringParams(obj);
            }
        }
    }, [pinPoint, routeObject.getRouteEffectDeps(), routeRouter.getEffectDeps()]);

    // navigate to query-string
    useEffect(() => {
        if (routeRouter.isReady() && (Object.keys(routeQueryStringParams).length > 0 || routeQueryStringCleanup)) {
            if (Object.keys(routeQueryStringParams).length === 0) {
                setRouteQueryStringCleanup(false); // only once
            }
            const pretty = new URLSearchParams(Object.entries(routeQueryStringParams))
                .toString()
                .replaceAll('%2C', ',')
                .replaceAll('%3A', ':')
                .replaceAll('%3B', ';');
            navigate({
                hash: url.hash,
                search: '?' + pretty,
            });
        }
    }, [routeQueryStringParams, routeRouter.isReady()]);

    // parse query-string
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);

        if (searchParams.get('start')) {
            const [lat, lng] = searchParams.get('start').split(',');
            routeObject.setOption('route.points.start', { lat: parseFloat(lat), lng: parseFloat(lng) });
        }

        if (searchParams.get('finish') || searchParams.get('end')) {
            const finish = searchParams.get('finish') || searchParams.get('end');
            const [lat, lng] = finish.split(',');
            routeObject.setOption('route.points.finish', { lat: parseFloat(lat), lng: parseFloat(lng) });
        }

        if (searchParams.get('via') || searchParams.get('inter')) {
            const via = searchParams.get('via') || searchParams.get('inter');
            const viaPoints = [];
            via.split(';').forEach((ll) => {
                const [lat, lng] = ll.split(',');
                viaPoints.push({ lat: parseFloat(lat), lng: parseFloat(lng) });
            });
            routeObject.setOption('route.points.viaPoints', viaPoints);
        }

        if (searchParams.get('avoid')) {
            const avoidRoads = [];
            searchParams
                .get('avoid')
                .split(';')
                .forEach((id) => {
                    avoidRoads.push({ id, name: 'Way ' + Math.trunc(id / 64) });
                });
            routeObject.setOption('route.points.avoidRoads', avoidRoads);
        }
    }, []);

    // route-by-gpx
    useEffect(() => {
        if (routeTrackFile && routeRouter.isReady()) {
            routeRouter.calculateGpxRoute({
                routeObject,
                routeTrackFile,
                changeRouteText,
                setRoutingErrorMsg,
            });
        }
    }, [routeRouter.getEffectDeps(), routeTrackFile]);

    // route-by-start-finish
    useEffect(() => {
        if (!routeTrackFile && routeRouter.isReady() && routeObject.isRouteReadyToCalc()) {
            routeRouter.calculateRoute({
                routeObject,
                changeRouteText,
                setRoutingErrorMsg,
            });
        } else {
            if (!routeTrackFile) {
                setHeaderText((prevState) => ({
                    ...prevState,
                    route: { text: '' },
                }));
            }
        }
    }, [routeRouter.getEffectDeps(), routeObject.getRouteEffectDeps(), routeTrackFile]);

    return null;
}
