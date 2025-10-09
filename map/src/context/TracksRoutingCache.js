import cloneDeep from 'lodash-es/cloneDeep';
import TracksManager from '../manager/track/TracksManager';
import EditablePolyline from '../map/util/creator/EditablePolyline';
import { DEFAULT_TRACK_LINE_WEIGHT } from '../map/util/TrackLayerProvider';

const MAX_STARTED_ROUTER_JOBS = 6;
export const GET_ANALYSIS_DEBOUNCE_MS = 1000; // don't flood get-analysis

export function effectControlRouterRequests({ ctx, startedRouterJobs, setStartedRouterJobs }) {
    if (startedRouterJobs > MAX_STARTED_ROUTER_JOBS) {
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
                ctx.trackRouter.updateRouteBetweenPoints(ctx, startPoint, endPoint, geoProfile).then(
                    (result) => {
                        setStartedRouterJobs((x) => x - 1);
                        if (result) {
                            updateTrackRouteTypes(result, ctx);
                        }
                        ctx.mutateRoutingCache((o) => o[key] && (o[key].geometry = result));
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

    ctx.setProcessRouting(false); // all done but a few Promises might still be active
    return false;
}

function updateTrackRouteTypes(newGeo, ctx) {
    const updatedTypes = processGeometryPoints(newGeo, ctx.selectedGpxFile.routeTypes ?? []);
    ctx.setSelectedGpxFile((prev) => {
        return { ...prev, routeTypes: updatedTypes };
    });
}

function processGeometryPoints(result, routeTypes) {
    let segmentRouteTypes = null;
    result.forEach((point) => {
        if (point.segment) {
            const segment = point.segment;

            segmentRouteTypes = segmentRouteTypes || segment.routeTypes;

            const segmentTypes = segment.ext.types ?? null;
            const segmentPointTypes = segment.ext.pointTypes ?? null;
            const segmentNames = segment.ext.names ?? null;

            let updatedSegmentRouteTypes = new Map();
            segmentRouteTypes.map((type, oldIndex) => {
                let newIndex;
                const existingTypeIndex = routeTypes.findIndex(
                    (globalType) => globalType.tag === type.tag && globalType.value === type.value
                );
                if (existingTypeIndex !== -1) {
                    newIndex = existingTypeIndex;
                } else {
                    routeTypes.push(type);
                    newIndex = routeTypes.length - 1;
                }
                updatedSegmentRouteTypes.set(oldIndex, newIndex);
            });

            if (segmentTypes) {
                segment.ext.types = updateIndexes(segmentTypes, updatedSegmentRouteTypes);
            }
            if (segmentPointTypes) {
                segment.ext.pointTypes = updateIndexes(segmentPointTypes, updatedSegmentRouteTypes);
            }
            if (segmentNames) {
                segment.ext.names = updateIndexes(segmentNames, updatedSegmentRouteTypes);
            }

            delete segment.routeTypes;
        }
    });
    return routeTypes;
}

function updateIndexes(value, updatedSegmentRouteTypes) {
    return value.replace(/\d+/g, (match) => {
        const index = parseInt(match, 10);
        return updatedSegmentRouteTypes.has(index) ? updatedSegmentRouteTypes.get(index) : index;
    });
}

export function effectRefreshTrackWithRouting({ ctx, geoRouter, saveChanges, debouncerTimer }) {
    let updated = 0;
    const validKeys = {};
    const cache = ctx.routingCache;
    const track = ctx.selectedGpxFile; // ref
    const points = ctx.selectedGpxFile.points; // ref

    if (points && points.length >= 2) {
        for (let i = 1; i < points.length; i++) {
            const startPoint = points[i - 1];
            const endPoint = points[i];
            const geoProfile = geoRouter.getGeoProfile(startPoint);
            const key = createRoutingKey(startPoint, endPoint, geoProfile);

            if (cache[key]) {
                const geometry = cache[key].geometry;
                const tempLine = cache[key].tempLine;

                validKeys[key] = true;

                if (geometry && tempLine && startPoint.profile !== TracksManager.PROFILE_GAP) {
                    // used when tempLine exist (segment recalculation, new points, etc), skip PROFILE_GAP
                    refreshTempLine({ ctx, geometry, track, tempLine, color: geoRouter.getColor(startPoint) });
                    ctx.mutateRoutingCache((o) => o[key] && (o[key].tempLine = null)); // use tempLine only once
                    endPoint.geometry = geometry; // mutate
                    updated++;
                }
            }
        }
    }

    dropOutdatedCache({ ctx, validKeys, killLayers: false });

    if (updated > 0) {
        saveChanges(null, null, null, track); // mutate track with more data and call setSelectedGpxFile({...})
    }

    return updated > 0;
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

export function requestAnalytics({ ctx, track, debouncerTimer }) {
    const analysis = () => {
        TracksManager.getTrackWithAnalysis(
            TracksManager.GET_ANALYSIS,
            ctx,
            ctx.setLoadingContextMenu,
            track.points
        ).then((res) => {
            if (res) ctx.setUnverifiedGpxFile(() => ({ ...res }));
        });
    };

    debouncer(analysis, debouncerTimer, GET_ANALYSIS_DEBOUNCE_MS);
}

// refresh fresh data to previously created "temp-line" layer
function refreshTempLine({ ctx, geometry, track, tempLine, color }) {
    // don't destroy tempLine (empty geo)
    if (geometry && geometry.length > 0) {
        const polyline = new EditablePolyline(null, ctx, geometry, null, track).create(); // latlngs-only
        tempLine.setStyle({ color, dashArray: null });
        tempLine.setLatLngs(polyline._latlngs);
        tempLine.options.name = undefined;
    } else {
        tempLine.setStyle({ color });
    }
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

// undo/redo: one-directional sync (cache -> track)
export function syncTrackWithCache({ ctx, track, geoRouter, debouncerTimer }) {
    const cache = ctx.routingCache;
    const points = track.points; // ref

    if (points && points.length >= 2) {
        for (let i = 1; i < points.length; i++) {
            const startPoint = points[i - 1];
            const endPoint = points[i];
            const geoProfile = geoRouter.getGeoProfile(startPoint);
            const key = createRoutingKey(startPoint, endPoint, geoProfile);

            if (cache[key] && cache[key].geometry && startPoint.profile !== TracksManager.PROFILE_GAP) {
                endPoint.geometry = cache[key].geometry; // mutate (but skip PROFILE_GAP profile)
            }
        }
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
