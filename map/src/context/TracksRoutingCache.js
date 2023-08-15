import _ from 'lodash';
import TracksManager from './TracksManager';
import TrackLayerProvider from '../map/TrackLayerProvider';
import EditablePolyline from '../map/EditablePolyline';

const STOP_CALC_ROUTING = 'stop';
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
            setStartedRouterJobs((x) => x + 1);
            ctx.mutateRoutingCache((o) => o[key] && (o[key].busy = true));

            const { startPoint, endPoint, geoProfile } = cache[key];

            Promise.resolve(
                ctx.trackRouter.updateRouteBetweenPoints(ctx, startPoint, endPoint, geoProfile).then(
                    (success) => {
                        setStartedRouterJobs((x) => x - 1);
                        ctx.mutateRoutingCache((o) => o[key] && (o[key].geometry = success));
                    },
                    (error) => {
                        // keep busy=true till next init
                        setStartedRouterJobs((x) => x - 1);
                        console.debug('updateRouteBeetwenPoints failed', error);
                    }
                )
            );

            if (++started >= MAX_STARTED_ROUTER_JOBS - startedRouterJobs) {
                break;
            }
        }
    }

    if (started > 0) {
        // console.log('started', started);
        return true;
    }

    ctx.setProcessRouting(false); // all done but a few Promises might still be active
    return false;
}

export function effectRefreshTrackWithRouting({ ctx, geoRouter, saveChanges, debouncerTimer }) {
    let updated = 0;
    const cache = ctx.routingCache;
    const track = ctx.selectedGpxFile;
    const points = ctx.selectedGpxFile.points; // ref

    const validKeys = {};

    if (points && points.length >= 2) {
        for (let i = 1; i < points.length; i++) {
            const startPoint = points[i - 1];
            const endPoint = points[i];
            const geoProfile = startPoint.geoProfile;
            const key = createRoutingKey(startPoint, endPoint, geoProfile);

            if (cache[key]) {
                const geometry = cache[key].geometry;
                const tempLine = cache[key].tempLine;

                validKeys[key] = true;

                if (geometry && tempLine) {
                    updated++;
                    endPoint.geometry = geometry; // mutate ref
                    refreshTempLine({ ctx, geometry, track, tempLine, color: geoRouter.getColor(startPoint) });
                    ctx.mutateRoutingCache((o) => o[key] && (o[key].tempLine = null)); // update tempLine only once
                }
            }
        }
    }

    dropOutdatedCache({ ctx, validKeys });

    if (updated > 0) {
        // console.log('updated', updated);
        requestAnalytics({ ctx, track, debouncerTimer });
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

function requestAnalytics({ ctx, track, debouncerTimer }) {
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
    const polyline = new EditablePolyline(null, ctx, geometry, null, track).create();
    tempLine.setStyle({ color, dashArray: null });
    tempLine.setLatLngs(polyline._latlngs);
    tempLine.options.name = undefined;
}

// keep cache by validKeys or filled geometry
function dropOutdatedCache({ ctx, validKeys }) {
    const cache = ctx.routingCache;
    if (Object.keys(validKeys).length > 0) {
        for (const key in cache) {
            if (validKeys[key] || cache[key].geometry || cache[key].busy) {
                continue; // valid
            }
            ctx.mutateRoutingCache((o) => delete o[key]);
            // console.log('drop-outdated-cache');
        }
    }
}

function addRoutingToCache(startPoint, endPoint, tempLine, ctx) {
    const routingKey = createRoutingKey(startPoint, endPoint, startPoint.geoProfile);
    const cachedGeometry = ctx.routingCache[routingKey]?.geometry ?? null;
    ctx.mutateRoutingCache(
        (o) =>
            (o[routingKey] = {
                tempLine: tempLine,
                startPoint: _.cloneDeep(startPoint),
                endPoint: _.cloneDeep(endPoint),
                geoProfile: startPoint.geoProfile,
                geometry: cachedGeometry,
                busy: false,
            })
    );
}

function getRoutingFromCache(track, ctx, map) {
    for (let i = 0; i < track.points.length - 1; i++) {
        const start = track.points[i];
        const end = track.points[i + 1];
        if (end.geoProfile) {
            const routingKey = createRoutingKey(start, end, end.geoProfile);
            const geoCache = ctx.routingCache[routingKey]?.geometry;
            if (geoCache === STOP_CALC_ROUTING) {
                let polylineTemp = TrackLayerProvider.createEditableTempLPolyline(start, end, map, ctx);
                track.layers.addLayer(polylineTemp);
                track.updateLayers = true;
                end.geometry = [];
                updateSelectedRouting(routingKey, polylineTemp, ctx);
            } else if (geoCache) {
                end.geometry = geoCache;
            }
        }
    }
    return track;
}

function updateSelectedRouting(routingKey, polylineTemp, ctx) {
    ctx.mutateRoutingCache((o) => {
        o[routingKey].busy = false;
        o[routingKey].geometry = null;
        o[routingKey].tempLine = polylineTemp;
    });
}

// function updateSelectedRouting(segment, polylineTemp, ctx) {
//     segment.busy = false;
//     segment.geometry = null;
//     segment.tempLine = polylineTemp;
//     ctx.setRoutingCache({ ...ctx.routingCache });
// }

// key looks like query string but never used as it
function createRoutingKey(startPoint, endPoint, geoProfile) {
    if (!startPoint || !endPoint || !geoProfile) {
        console.error('createRoutingKey got empty parameter', startPoint, endPoint, geoProfile);
    }

    const ll = `startLat=${startPoint?.lat},startLng=${startPoint?.lng},endLat=${endPoint?.lat},endLng=${endPoint?.lng},`;
    const geo = JSON.stringify(geoProfile); // include all of type/router/profile/params

    return ll + geo; // Reminder: to keep property creation order, keys must be String
}

function addSegmentToRouting(start, end, oldPoint, tempPolyline, segments) {
    const segment = {
        oldPoint: oldPoint,
        start: start,
        end: end,
        tempPolyline: tempPolyline,
    };
    segments.push(segment);
    return segments;
}

const TracksRoutingCache = {
    addRoutingToCache,
    getRoutingFromCache,
    addSegmentToRouting,
};

export default TracksRoutingCache;
