import isEmpty from 'lodash-es/isEmpty';
import TracksManager, { mergeRouteTypes, PROFILE_LINE, ROUTER_ERROR_LINE_USED } from '../manager/track/TracksManager';
import EditablePolyline from '../map/util/creator/EditablePolyline';
import {
    hasSegmentWaitingForRouter,
    isWaitingForRouter,
    setSegmentGeometries,
    withAnsweredElevation,
} from '../manager/track/TrackOperations';

const MAX_STARTED_ROUTER_JOBS = 6;
export const GET_ANALYSIS_DEBOUNCE_MS = 1000; // don't flood get-analysis

let pointsInAnalysis = null;

export function effectControlRouterRequests({ ctx, startedRouterJobs, setStartedRouterJobs }) {
    const waiting = getWaitingSegments(ctx.selectedGpxFile.points, ctx.trackRouter);
    dropUnansweredCache(ctx, waiting);

    if (startedRouterJobs >= MAX_STARTED_ROUTER_JOBS) {
        console.debug('Too many startedRouterJobs', startedRouterJobs);
        return false;
    }

    let started = 0;
    for (const { key, start, end, geoProfile } of waiting) {
        if (ctx.routingCache[key]) {
            continue;
        }
        ctx.setProcessRouting(true);
        setStartedRouterJobs((x) => x + 1);
        ctx.mutateRoutingCache((o) => (o[key] = { busy: true }));

        routeOrLine(ctx, start, end, geoProfile).then(
            (result) => {
                setStartedRouterJobs((x) => x - 1);
                ctx.mutateRoutingCache((o) => (o[key] = { geometry: result?.points, routeTypes: result?.routeTypes }));
            },
            (error) => {
                setStartedRouterJobs((x) => x - 1);
                ctx.mutateRoutingCache((o) => (o[key] = { failed: true }));
                console.error('updateRouteBeetwenPoints failed', error);
            }
        );

        if (++started >= MAX_STARTED_ROUTER_JOBS - startedRouterJobs) {
            break;
        }
    }

    if (started > 0) {
        return true;
    }

    if (startedRouterJobs === 0) {
        ctx.setProcessRouting(false); // all done but a few Promises might still be active
    }
    return false;
}

function routeOrLine(ctx, startPoint, endPoint, geoProfile) {
    return ctx.trackRouter.updateRouteBetweenPoints(ctx, startPoint, endPoint, geoProfile).catch((error) => {
        console.error('updateRouteBetweenPoints failed, Line used', error);
        ctx.setRoutingErrorMsg(ROUTER_ERROR_LINE_USED);

        return ctx.trackRouter.updateRouteBetweenPoints(ctx, startPoint, endPoint, { profile: PROFILE_LINE });
    });
}

export function effectRefreshTrackWithRouting({ ctx, map, geoRouter, saveChanges }) {
    const { routes, routeTypes } = takeCachedAnswers(ctx.selectedGpxFile, ctx.routingCache, geoRouter);
    if (routes.length === 0) {
        return false;
    }

    const layers = ctx.selectedGpxFile.layers?.getLayers() ?? [];
    let updateLayers = false;
    routes.forEach(({ index, geometry }) => {
        const { id } = ctx.selectedGpxFile.points[index];
        const tempLine = id !== undefined && layers.find((layer) => layer.point?.id === id);
        if (tempLine) {
            const color = geoRouter.getColor(ctx.selectedGpxFile.points[index - 1]);
            refreshTempLine({ ctx, map, geometry, tempLine, color });
        } else {
            updateLayers = true;
        }
    });

    const points = setSegmentGeometries(ctx.selectedGpxFile.points, routes);
    saveChanges(null, null, null, {
        ...ctx.selectedGpxFile,
        points,
        routeTypes,
        ...(updateLayers && { updateLayers }),
    }); // mutate track with more data and call setSelectedGpxFile({...})

    return true;
}

export function withCachedRoutes(track, ctx) {
    const { routes, routeTypes } = takeCachedAnswers(track, ctx.routingCache, ctx.trackRouter);

    return { ...track, points: setSegmentGeometries(track.points, routes), routeTypes };
}

function takeCachedAnswers(track, cache, geoRouter) {
    let routeTypes = track.routeTypes;
    const routes = getWaitingSegments(track.points, geoRouter)
        .filter(({ key }) => cache[key]?.geometry)
        .map(({ index, key }) => {
            const merged = mergeRouteTypes(cache[key].geometry, cache[key].routeTypes, routeTypes);
            routeTypes = merged.routeTypes;

            return { index, geometry: merged.geometry };
        });

    return { routes, routeTypes };
}

function dropUnansweredCache(ctx, waiting) {
    const waitingKeys = new Set(waiting.map(({ key }) => key));
    const unanswered = Object.keys(ctx.routingCache).filter(
        (key) => !ctx.routingCache[key].geometry && !waitingKeys.has(key)
    );
    if (unanswered.length > 0) {
        ctx.mutateRoutingCache((o) => unanswered.forEach((key) => delete o[key]));
    }
}

export function getWaitingSegments(points, geoRouter) {
    const segments = [];
    points?.forEach((end, index) => {
        if (isWaitingForRouter(points, index)) {
            const start = points[index - 1];
            const geoProfile = geoRouter.getGeoProfile(start);
            segments.push({ index, start, end, geoProfile, key: createRoutingKey(start, end, geoProfile) });
        }
    });

    return segments;
}

function forEachCachedSegment(points, cache, geoRouter, visit) {
    if (!points) {
        return;
    }
    for (let i = 1; i < points.length; i++) {
        const startPoint = points[i - 1];
        const key = createRoutingKey(startPoint, points[i], geoRouter.getGeoProfile(startPoint));
        if (cache[key]) {
            visit(i, key, startPoint);
        }
    }
}

export function debouncer(f, timerRef, ms) {
    if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
    }
    if (timerRef.current === null) {
        timerRef.current = setTimeout(() => {
            timerRef.current = null;
            f();
        }, ms);
    }
}

export function requestAnalysisNow({ ctx, track }) {
    pointsInAnalysis = track.points;
    TracksManager.getTrackWithAnalysis(
        TracksManager.GET_ANALYSIS,
        { ...ctx, selectedGpxFile: track },
        ctx.setRunningEditorAnalyses
    ).then((answer) => {
        if (pointsInAnalysis === track.points) {
            pointsInAnalysis = null;
        }
        const answered = answer?.analysisPoints === track.points;
        if (answered) {
            applyAnalysisAnswer(ctx, answer);
        } else {
            ctx.setSelectedGpxFile((current) => withUnansweredAnalysis(current, track.points));
        }
    });
}

export function requestAnalytics({ ctx, track, debouncerTimer }) {
    debouncer(() => requestAnalysisNow({ ctx, track }), debouncerTimer, GET_ANALYSIS_DEBOUNCE_MS);
}

export function effectRequestAnalysis({ ctx, track, debouncerTimer }) {
    if (track?.points === pointsInAnalysis) {
        clearTimeout(debouncerTimer.current);
        debouncerTimer.current = null;
    } else if (isAnalysisWanted(track)) {
        requestAnalytics({ ctx, track, debouncerTimer });
    }
}

export function isAnalysisWanted(track) {
    if (!track?.points || track.points === track.analysisPoints) {
        return false;
    }
    const newTrackWithoutSegment = !track.analysisPoints && track.points.length < 2;

    return !newTrackWithoutSegment && !hasSegmentWaitingForRouter(track.points);
}

export function applyAnalysisAnswer(ctx, answer) {
    ctx.setSelectedGpxFile((current) => withAnalysisAnswer(current, answer));
    addElevationToCache({ ctx, points: answer?.points, geoRouter: ctx.trackRouter });
}

function withAnalysisAnswer(current, answer) {
    if (!answer || !current) {
        return current;
    }
    const sameTrack =
        answer.name === current.name &&
        answer.selected === current.selected &&
        answer.metaData?.desc === current.metaData?.desc;
    if (!sameTrack) {
        return current;
    }
    if (current.points) {
        if (answer.analysisPoints !== current.points) {
            return current;
        }
        const points = withAnsweredElevation(current.points, answer.points);

        return {
            ...current,
            analysis: answer.analysis,
            analysisTracks: answer.analysisTracks,
            points,
            analysisPoints: points,
            ...(current.tracks && { tracks: answer.tracks }),
        };
    }
    if (!isPointsHaveSameGeo(answer.tracks?.[0]?.points, current.tracks?.[0]?.points)) {
        return current;
    }

    return { ...current, analysis: answer.analysis, tracks: answer.tracks };
}

function withUnansweredAnalysis(current, points) {
    if (current?.points !== points) {
        return current;
    }

    return { ...current, analysisPoints: points, analysisTracks: undefined };
}

function isPointsHaveSameGeo(p1, p2) {
    if (!p1 || !p2 || p1.length !== p2.length) {
        return false;
    }
    for (let i = 0; i < p1.length; i++) {
        if (TracksManager.isEqualPoints(p1[i], p2[i]) === false) {
            return false;
        }
    }
    for (let i = 0; i < p1.length; i++) {
        const g1 = p1[i].geometry;
        const g2 = p2[i].geometry;
        if (!g1 && !g2) {
            continue; // both w/o geometry = ok
        }
        if (!g1 || !g2 || g1.length !== g2.length) {
            return false;
        }
        for (let j = 0; j < g1.length; j++) {
            if (TracksManager.isEqualPoints(g1[j], g2[j]) === false) {
                return false;
            }
        }
    }

    return true; // all-the-same
}

// refresh fresh data to previously created "temp-line" layer
function refreshTempLine({ ctx, map, geometry, tempLine, color }) {
    // don't destroy tempLine (empty geo)
    if (geometry && geometry.length > 0) {
        const polyline = new EditablePolyline(null, ctx, geometry, null).create(); // latlngs-only
        tempLine.setStyle({ color, dashArray: null });
        tempLine.setLatLngs(polyline._latlngs);
        tempLine.options.name = undefined;
        if (!isEditableLine(tempLine)) {
            new EditablePolyline(map, ctx, null, tempLine).create();
        }
    } else {
        tempLine.setStyle({ color });
    }
}

function isEditableLine(line) {
    return line.listens('mousemove');
}

export function addElevationToCache({ ctx, points, geoRouter }) {
    const cache = ctx.routingCache;
    if (isEmpty(cache)) {
        return;
    }
    forEachCachedSegment(points, cache, geoRouter, (index, key) => {
        const cached = cache[key].geometry;
        const answered = points[index].geometry;
        if (cached && cached.length === answered?.length) {
            const geometry = withAnsweredElevation(cached, answered);
            if (geometry !== cached) {
                ctx.mutateRoutingCache((o) => o[key] && (o[key].geometry = geometry));
            }
        }
    });
}

// key looks like query string but never used as it
function createRoutingKey(startPoint, endPoint, geoProfile) {
    if (!startPoint || !endPoint || !geoProfile) {
        console.error('createRoutingKey got empty parameter', startPoint, endPoint, geoProfile);
    }

    const ll = `startLat=${startPoint?.lat},startLng=${startPoint?.lng},endLat=${endPoint?.lat},endLng=${endPoint?.lng},`;
    const geo = geoProfile.cacheKey;

    return ll + geo;
}
