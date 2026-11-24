import cloneDeep from 'lodash-es/cloneDeep';
import TracksManager, {
    PROFILE_LINE,
    ROUTER_ERROR_LINE_USED,
    updateTrackRouteTypes,
} from '../manager/track/TracksManager';
import EditablePolyline from '../map/util/creator/EditablePolyline';
import { isWaitingForRouter, setSegmentGeometries } from '../manager/track/TrackOperations';

const MAX_STARTED_ROUTER_JOBS = 6;
export const GET_ANALYSIS_DEBOUNCE_MS = 1000; // don't flood get-analysis

export function effectControlRouterRequests({ ctx, startedRouterJobs, setStartedRouterJobs }) {
    if (ctx.processingAnalytics) {
        console.debug('Skip routing while processingAnalytics');
        return false;
    }

    if (startedRouterJobs >= MAX_STARTED_ROUTER_JOBS) {
        console.debug('Too many startedRouterJobs', startedRouterJobs);
        return false;
    }

    let started = 0;
    const cache = ctx.routingCache;

    for (const key in cache) {
        if (cache[key].geometry === null && cache[key].busy !== true) {
            ctx.setProcessRouting(true);
            setStartedRouterJobs((x) => x + 1);
            ctx.mutateRoutingCache((o) => o[key] && (o[key].busy = true));

            const { startPoint, endPoint, geoProfile } = cache[key];

            Promise.resolve(
                routeOrLine(ctx, startPoint, endPoint, geoProfile).then(
                    (result) => {
                        setStartedRouterJobs((x) => x - 1);
                        if (result) {
                            updateTrackRouteTypes(result.points, result.routeTypes, ctx);
                        }
                        ctx.mutateRoutingCache((o) => o[key] && (o[key].geometry = result?.points));
                    },
                    (error) => {
                        // keep busy=true till next init
                        setStartedRouterJobs((x) => x - 1);
                        console.error('updateRouteBeetwenPoints failed', error);
                    }
                )
            );

            if (++started >= MAX_STARTED_ROUTER_JOBS - startedRouterJobs) {
                break;
            }
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

export function effectRefreshTrackWithRouting({ ctx, map, geoRouter, saveChanges, debouncerTimer }) {
    const validKeys = {};
    const routes = [];
    const cache = ctx.routingCache;

    forEachCachedSegment(ctx.selectedGpxFile.points, cache, geoRouter, (index, key, startPoint) => {
        const { geometry, tempLine } = cache[key];
        validKeys[key] = true;
        if (geometry && tempLine && startPoint.profile !== TracksManager.PROFILE_GAP) {
            // used when tempLine exist (segment recalculation, new points, etc), skip PROFILE_GAP
            refreshTempLine({ ctx, map, geometry, tempLine, color: geoRouter.getColor(startPoint) });
            ctx.mutateRoutingCache((o) => o[key] && (o[key].tempLine = null)); // use tempLine only once
            routes.push({ index, geometry });
        }
    });
    const track =
        routes.length > 0
            ? { ...ctx.selectedGpxFile, points: setSegmentGeometries(ctx.selectedGpxFile.points, routes) }
            : ctx.selectedGpxFile;

    dropOutdatedCache({ ctx, validKeys, killLayers: false });
    routeWaitingSegments(track, ctx);

    if (routes.length > 0) {
        saveChanges(null, null, null, track); // mutate track with more data and call setSelectedGpxFile({...})
        if (Object.keys(validKeys).every((key) => cache[key].geometry !== null)) {
            requestAnalytics({ ctx, track, debouncerTimer });
        }
    }

    return routes.length > 0;
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
    TracksManager.getTrackWithAnalysis(
        TracksManager.GET_ANALYSIS,
        { ...ctx, selectedGpxFile: track },
        ctx.setAnalysisLoading,
        track.points
    ).then((res) => {
        if (res) ctx.setUnverifiedGpxFile(() => ({ ...res }));
    });
}

export function requestAnalytics({ ctx, track, debouncerTimer }) {
    debouncer(() => requestAnalysisNow({ ctx, track }), debouncerTimer, GET_ANALYSIS_DEBOUNCE_MS);
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

// cleanup but keep: by validKeys or if geometry finished
function dropOutdatedCache({ ctx, validKeys, killLayers = false }) {
    const cache = ctx.routingCache;
    for (const key in cache) {
        if (validKeys[key]) {
            continue;
        }
        if (cache[key].geometry && cache[key].tempLine === null) {
            continue;
        }
        if (killLayers && cache[key].tempLine && ctx.selectedGpxFile.layers) {
            cache[key].tempLine.removeFrom(ctx.selectedGpxFile.layers);
        }
        ctx.mutateRoutingCache((o) => delete o[key]);
    }
}

// add start-end segment to cache, re-use cached geometry
function addRoutingToCache(startPoint, endPoint, tempLine, ctx) {
    if (tempLine === null) {
        return; // protected segment
    }
    const geoProfile = ctx.trackRouter.getGeoProfile(startPoint);
    const routingKey = createRoutingKey(startPoint, endPoint, geoProfile);
    const cachedGeometry = ctx.routingCache[routingKey]?.geometry ?? null;
    ctx.mutateRoutingCache(
        (o) =>
            (o[routingKey] = {
                tempLine: tempLine,
                startPoint: cloneDeep(startPoint),
                endPoint: cloneDeep(endPoint),
                geoProfile: geoProfile,
                geometry: cachedGeometry,
                busy: false,
            })
    );
}

export function routeWaitingSegments(track, ctx) {
    const layers = track.layers?.getLayers() ?? [];
    track.points?.forEach((end, index) => {
        if (end.id === undefined || !isWaitingForRouter(track.points, index)) {
            return;
        }
        const start = track.points[index - 1];
        const line = layers.find((layer) => layer.point?.id === end.id);
        if (line && !ctx.routingCache[createRoutingKey(start, end, ctx.trackRouter.getGeoProfile(start))]) {
            addRoutingToCache(start, end, line, ctx);
        }
    });
}

// undo/redo: one-directional sync (cache -> track)
export function syncTrackWithCache({ ctx, track, geoRouter, debouncerTimer }) {
    const cache = ctx.routingCache;
    const routes = [];

    forEachCachedSegment(track.points, cache, geoRouter, (index, key, startPoint) => {
        // skip PROFILE_GAP profile
        if (cache[key].geometry && startPoint.profile !== TracksManager.PROFILE_GAP) {
            routes.push({ index, geometry: cache[key].geometry });
        }
    });
    if (track.points) {
        track.points = setSegmentGeometries(track.points, routes);
    }

    setTimeout(() => requestAnalytics({ ctx, track, debouncerTimer }), GET_ANALYSIS_DEBOUNCE_MS); // delayed
    dropOutdatedCache({ ctx, validKeys: {}, killLayers: true });
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

function addSegmentToRouting(start, end, oldPoint, tempPolyline, segments) {
    const segment = {
        oldPoint, // purpose of oldPoint here?
        start: start,
        end: end,
        tempPolyline: tempPolyline,
    };
    segments.push(segment);
    return segments;
}

const TracksRoutingCache = {
    addRoutingToCache,
    addSegmentToRouting,
};

export default TracksRoutingCache;
