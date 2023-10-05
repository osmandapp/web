import { useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import AppContext, { isRouteTrack, OBJECT_TYPE_ROUTE_TRACK } from '../context/AppContext';
import TracksManager, { prepareNavigationTrack, getApproximatePoints } from '../manager/TracksManager';

export function RouteService() {
    const ctx = useContext(AppContext);

    const pinPoint = ctx.pinPoint;

    const routeObject = ctx.routeObject;
    const routeTrack = routeObject.getTrack();
    const routeTrackFile = ctx.routeTrackFile;

    const setHeaderText = ctx.setHeaderText;
    const setRoutingErrorMsg = ctx.setRoutingErrorMsg;

    function changeRouteText(processRoute, props) {
        let resultText = '';
        if (processRoute) {
            resultText = 'Route calculating…';
        } else {
            if (props) {
                const { name } = routeObject.getProfile();
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
        if (routeObject.isReady()) {
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
                obj['via'] = viaPoints.map((i) => i.lat.toFixed(6) + ',' + i.lng.toFixed(6)).join(';');
            }
            if (avoidRoads?.length > 0) {
                obj['avoid'] = avoidRoads.map(({ id }) => id).join(';');
            }

            const qs = new URLSearchParams(window.location.search);

            if (Object.keys(obj).length > 0 || (qs.get('type') && qs.get('profile'))) {
                const { type, profile } = routeObject.getProfile();
                obj.type = type;
                obj.profile = profile;

                if (routeObject.isParamsChanged()) {
                    const mode = TracksManager.formatRouteMode({
                        includeFalse: true,
                        profile: profile,
                        params: routeObject.getChangedParams(),
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
    }, [pinPoint, routeObject.getRouteEffectDeps(), routeObject.getEffectDeps()]);

    // navigate to query-string
    useEffect(() => {
        if (routeObject.isReady() && (Object.keys(routeQueryStringParams).length > 0 || routeQueryStringCleanup)) {
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
    }, [routeQueryStringParams, routeObject.isReady()]);

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
        if (routeTrackFile && routeObject.isReady()) {
            routeObject.calculateGpxRoute({
                routeTrackFile,
                changeRouteText,
                setRoutingErrorMsg,
            });
        }
    }, [routeObject.getEffectDeps(), routeTrackFile]);

    // route-by-start-finish
    useEffect(() => {
        if (!routeTrackFile && routeObject.isReady() && routeObject.isRouteReadyToCalc()) {
            routeObject.calculateRoute({
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
    }, [routeObject.getEffectDeps(), routeObject.getRouteEffectDeps(), routeTrackFile]);

    // routeTrack: approximate segments
    // routeTrack: refresh selectedGpxFile
    // routeTrack: auto-srtm will be applied by GeneralInfo
    useEffect(() => {
        async function setNavigationTrack() {
            if (routeTrack) {
                const { profile } = routeObject.getGeoProfile();
                const track = prepareNavigationTrack(routeTrack);

                // limit auto-approximate
                const props = routeObject.getRouteProps();
                if (
                    routeObject.getOption('route.map.forceApproximation') ||
                    props?.overall?.distance <= process.env.REACT_APP_MAX_APPROXIMATE_KM * 1000
                ) {
                    // approximate each segment separately
                    for (let i = 0; i < track.points.length; i++) {
                        const geometry = track.points[i].geometry;
                        if (geometry.length > 0) {
                            track.points[i].geometry = await getApproximatePoints({ points: geometry, profile });
                        }
                    }
                }

                const type = OBJECT_TYPE_ROUTE_TRACK;
                ctx.setUpdateInfoBlock(true);
                ctx.setSelectedGpxFile(track);
                ctx.setCurrentObjectType(type);
            } else {
                if (isRouteTrack(ctx)) {
                    ctx.setSelectedGpxFile({}); // close-route-track
                }
            }
        }
        setNavigationTrack();
    }, [routeTrack]);

    return null;
}
