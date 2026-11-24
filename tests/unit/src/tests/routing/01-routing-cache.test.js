import TracksRoutingCache, {
    debouncer,
    effectControlRouterRequests,
    effectRefreshTrackWithRouting,
    GET_ANALYSIS_DEBOUNCE_MS,
    routeWaitingSegments,
    syncTrackWithCache,
} from '@map/context/TracksRoutingCache';
import TracksManager, { ROUTER_ERROR_LINE_USED, updateTrackRouteTypes } from '@map/manager/track/TracksManager';
import EditablePolyline from '@map/map/util/creator/EditablePolyline';
import { apiPost } from '@map/util/HttpApi';
import { createEditorCtx, createEditorPoint } from '../../util/fixtures/tracks';
import { settle } from '../../util/settle';

jest.mock('@map/map/util/creator/EditablePolyline');

const point = (i, profile) => createEditorPoint(i, { profile });
const line = () => ({
    setStyle: jest.fn(),
    setLatLngs: jest.fn(),
    removeFrom: jest.fn(),
    listens: () => true,
    options: {},
});
const mockEditablePolyline = () =>
    EditablePolyline.mockImplementation(function () {
        return { create: () => ({ _latlngs: ['latlng'] }) };
    });
const createCtx = (points) => createEditorCtx({ points });
const geoRouter = createEditorCtx().trackRouter;

const entries = (ctx) => Object.values(ctx.routingCache);

test('a segment is cached by its points and profile, a protected one is not cached', () => {
    const ctx = createCtx();
    const [a, b] = [point(0), point(1)];

    TracksRoutingCache.addRoutingToCache(a, b, null, ctx);
    expect(entries(ctx)).toEqual([]);

    TracksRoutingCache.addRoutingToCache(a, b, line(), ctx);
    expect(entries(ctx)).toMatchObject([{ geometry: null, busy: false, geoProfile: { cacheKey: 'key-car' } }]);
    // the cache keeps copies, a point dragged later does not change the cached segment
    a.lat = 49;
    expect(entries(ctx)[0].startPoint.lat).toBe(50);

    entries(ctx)[0].geometry = ['routed'];
    TracksRoutingCache.addRoutingToCache(point(0), b, line(), ctx);
    TracksRoutingCache.addRoutingToCache(point(0, 'bike'), b, line(), ctx);
    expect(entries(ctx).map((e) => e.geometry)).toEqual([['routed'], null]);
});

test('the router is asked for the segments without geometry, six at a time', async () => {
    const ctx = createCtx();
    const setStartedRouterJobs = jest.fn();
    jest.spyOn(console, 'debug').mockImplementation(() => {});
    ctx.trackRouter.updateRouteBetweenPoints.mockResolvedValue({ points: ['routed'] });
    for (let i = 0; i < 8; i++) {
        TracksRoutingCache.addRoutingToCache(point(i), point(i + 1), line(), ctx);
    }

    expect(effectControlRouterRequests({ ctx, startedRouterJobs: 0, setStartedRouterJobs })).toBe(true);
    expect(ctx.trackRouter.updateRouteBetweenPoints).toHaveBeenCalledTimes(6);
    expect(entries(ctx).filter((e) => e.busy)).toHaveLength(6);

    // with six requests in flight nothing more is started
    expect(effectControlRouterRequests({ ctx, startedRouterJobs: 6, setStartedRouterJobs })).toBe(false);
    expect(ctx.trackRouter.updateRouteBetweenPoints).toHaveBeenCalledTimes(6);

    await settle();
    expect(
        entries(ctx)
            .filter((e) => e.geometry)
            .map((e) => e.geometry)
    ).toEqual(Array(6).fill(['routed']));
});

test('nothing is sent to the router while the analysis is running', () => {
    const ctx = createCtx();
    ctx.processingAnalytics = true;
    jest.spyOn(console, 'debug').mockImplementation(() => {});
    TracksRoutingCache.addRoutingToCache(point(0), point(1), line(), ctx);

    expect(effectControlRouterRequests({ ctx, startedRouterJobs: 0, setStartedRouterJobs: jest.fn() })).toBe(false);
    expect(ctx.trackRouter.updateRouteBetweenPoints).not.toHaveBeenCalled();
});

test('a failed request is not repeated', async () => {
    const ctx = createCtx();
    ctx.setRoutingErrorMsg = jest.fn();
    ctx.trackRouter.updateRouteBetweenPoints.mockRejectedValue(new Error('router down'));
    jest.spyOn(console, 'error').mockImplementation(() => {});
    TracksRoutingCache.addRoutingToCache(point(0), point(1), line(), ctx);

    effectControlRouterRequests({ ctx, startedRouterJobs: 0, setStartedRouterJobs: jest.fn() });
    await settle();
    effectControlRouterRequests({ ctx, startedRouterJobs: 0, setStartedRouterJobs: jest.fn() });

    // the request and its straight line fallback
    expect(ctx.trackRouter.updateRouteBetweenPoints).toHaveBeenCalledTimes(2);
    expect(ctx.setProcessRouting).toHaveBeenLastCalledWith(false);
});

test('a router error leaves a straight line and a message', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    const ctx = createCtx();
    ctx.setRoutingErrorMsg = jest.fn();
    ctx.trackRouter.updateRouteBetweenPoints.mockRejectedValueOnce(new Error('router down'));
    TracksRoutingCache.addRoutingToCache(point(0), point(1), line(), ctx);

    effectControlRouterRequests({ ctx, startedRouterJobs: 0, setStartedRouterJobs: jest.fn() });
    await settle();

    expect(entries(ctx)[0].geometry.map(({ lat }) => lat)).toEqual([50, 50.01]);
    expect(ctx.trackRouter.updateRouteBetweenPoints).toHaveBeenLastCalledWith(
        ctx,
        expect.anything(),
        expect.anything(),
        {
            profile: TracksManager.PROFILE_LINE,
        }
    );
    expect(ctx.setRoutingErrorMsg).toHaveBeenCalledWith(ROUTER_ERROR_LINE_USED);
});

test('a segment that waits for the router without a cache entry is cached once, as a reopened track has it', () => {
    const [a, b] = [
        { ...point(0), id: 1 },
        { ...point(1), id: 2, geometry: [] },
    ];
    const ctx = createCtx([a, b]);
    const waiting = { point: b };
    ctx.selectedGpxFile.layers = { getLayers: () => [waiting] };

    routeWaitingSegments(ctx.selectedGpxFile, ctx);
    routeWaitingSegments(ctx.selectedGpxFile, ctx);

    expect(entries(ctx)).toMatchObject([{ tempLine: waiting, geometry: null, endPoint: { lat: 50.01 } }]);
});

test('a routed segment goes into the track once, the segments that are gone leave the cache', () => {
    const [a, b, gap, c, d] = [point(0), point(1), point(2, TracksManager.PROFILE_GAP), point(3), point(4)];
    const ctx = createCtx([a, b, gap, c, d]);
    const saveChanges = jest.fn();
    mockEditablePolyline();
    const [ab, gapC, old] = [line(), line(), line()];
    TracksRoutingCache.addRoutingToCache(a, b, ab, ctx);
    TracksRoutingCache.addRoutingToCache(gap, c, gapC, ctx);
    TracksRoutingCache.addRoutingToCache(c, d, line(), ctx);
    TracksRoutingCache.addRoutingToCache(point(10), point(11), old, ctx);
    TracksRoutingCache.addRoutingToCache(point(12), point(13), null, ctx);
    const [abEntry, gapEntry, cdEntry, oldEntry] = entries(ctx);
    abEntry.geometry = gapEntry.geometry = oldEntry.geometry = ['routed'];

    expect(effectRefreshTrackWithRouting({ ctx, geoRouter, saveChanges, debouncerTimer: { current: null } })).toBe(
        true
    );

    const [[, , , routed]] = saveChanges.mock.calls;
    expect(routed.points[1].geometry).toEqual(['routed']);
    expect(ab.setLatLngs).toHaveBeenCalledWith(['latlng']);
    expect(ab.setStyle).toHaveBeenCalledWith({ color: '#0000ff', dashArray: null });
    expect(abEntry.tempLine).toBeNull();
    expect(saveChanges).toHaveBeenCalledTimes(1);
    // a gap is never routed, a segment still waiting for the router is kept
    expect(routed.points[3].geometry).toBeUndefined();
    expect(gapC.setLatLngs).not.toHaveBeenCalled();
    expect(entries(ctx)).toEqual([abEntry, gapEntry, cdEntry]);

    // a second pass finds nothing new
    expect(effectRefreshTrackWithRouting({ ctx, geoRouter, saveChanges, debouncerTimer: { current: null } })).toBe(
        false
    );
    expect(saveChanges).toHaveBeenCalledTimes(1);
});

test('the analysis is asked when the last waiting segment is routed, not while others still wait', () => {
    jest.useFakeTimers();
    const [a, b, c] = [point(0), point(1), point(2)];
    const ctx = createCtx([a, b, c]);
    ctx.selectedGpxFile.tracks = [{ points: [] }];
    mockEditablePolyline();
    TracksRoutingCache.addRoutingToCache(a, b, line(), ctx);
    TracksRoutingCache.addRoutingToCache(b, c, line(), ctx);
    const [abEntry, bcEntry] = entries(ctx);
    const debouncerTimer = { current: null };
    const analyses = () => apiPost.mock.calls.filter(([url]) => url.endsWith(`/gpx/${TracksManager.GET_ANALYSIS}`));
    const refresh = () => {
        effectRefreshTrackWithRouting({ ctx, geoRouter, saveChanges: jest.fn(), debouncerTimer });
        jest.advanceTimersByTime(GET_ANALYSIS_DEBOUNCE_MS);
    };

    abEntry.geometry = ['routed'];
    refresh();
    expect(analyses()).toHaveLength(0);

    bcEntry.geometry = ['routed'];
    refresh();
    expect(analyses()).toHaveLength(1);
    jest.useRealTimers();
});

test('a cached route put back into a point gets the gap mark of that point', () => {
    const GAP = TracksManager.PROFILE_GAP;
    const [a, gap, b, c] = [point(0), point(1, GAP), point(2), point(3)];
    const ctx = createCtx([a, gap, b, c]);
    TracksRoutingCache.addRoutingToCache(a, gap, line(), ctx);
    TracksRoutingCache.addRoutingToCache(b, c, line(), ctx);
    const [toGap, toC] = entries(ctx);
    toGap.geometry = [point(0), point(1)];
    toC.geometry = [point(2), point(3, GAP)];

    const { points } = syncTrackWithCache({
        ctx,
        track: ctx.selectedGpxFile,
        geoRouter,
        debouncerTimer: { current: null },
    });
    expect(points[1].geometry.at(-1).profile).toBe(GAP);
    expect(points[3].geometry.at(-1).profile).toBeUndefined();
});

test('a router answer for the place a point was dragged away from is not put on the track', async () => {
    for (const order of [
        [0, 1],
        [1, 0],
    ]) {
        const [a, b] = [point(0), point(1)];
        const ctx = createCtx([a, b]);
        const answers = [];
        mockEditablePolyline();
        ctx.trackRouter.updateRouteBetweenPoints.mockImplementation(
            (ctx, start, end) => new Promise((resolve) => answers.push(() => resolve({ points: [`to ${end.lat}`] })))
        );
        const drag = (lat) => {
            b.lat = lat;
            TracksRoutingCache.addRoutingToCache(a, b, line(), ctx);
            effectControlRouterRequests({ ctx, startedRouterJobs: 0, setStartedRouterJobs: jest.fn() });
        };

        let routed;
        drag(50.015);
        drag(50.012);
        for (const index of order) {
            answers[index]();
            await settle();
            effectRefreshTrackWithRouting({
                ctx,
                geoRouter,
                saveChanges: (points, wpts, layers, track) => (routed = track),
                debouncerTimer: { current: null },
            });
        }

        expect(routed.points[1].geometry).toEqual(['to 50.012']);
    }
});

test.failing('the dashed line of a pair that starts at a gap is removed, not left', () => {
    const [gap, c] = [point(0, TracksManager.PROFILE_GAP), point(1)];
    const ctx = createCtx([gap, c]);
    const gapC = line();
    TracksRoutingCache.addRoutingToCache(gap, c, gapC, ctx);
    entries(ctx)[0].geometry = ['routed'];

    effectRefreshTrackWithRouting({ ctx, geoRouter, saveChanges: jest.fn(), debouncerTimer: { current: null } });

    expect(gapC.removeFrom).toHaveBeenCalledWith(ctx.selectedGpxFile.layers);
});

test('the route types of an answer join the track, the indexes in its segments follow them', () => {
    const ctx = createCtx();
    ctx.selectedGpxFile.routeTypes = [{ tag: 'highway', value: 'primary' }];
    const answer = [{ lat: 50, lng: 30, segment: { ext: { types: '0,1', pointTypes: '1', names: '0' } } }];

    updateTrackRouteTypes(
        answer,
        [
            { tag: 'highway', value: 'residential' },
            { tag: 'highway', value: 'primary' },
        ],
        ctx
    );

    expect(ctx.selectedGpxFile.routeTypes).toEqual([
        { tag: 'highway', value: 'primary' },
        { tag: 'highway', value: 'residential' },
    ]);
    expect(answer[0].segment.ext).toEqual({ types: '1,0', pointTypes: '0', names: '1' });
});

test('undo restores the geometry of every segment from the cache and drops the unfinished ones', () => {
    jest.useFakeTimers();
    const [a, b, gap, c, d] = [point(0), point(1), point(2, TracksManager.PROFILE_GAP), point(3), point(4)];
    const ctx = createCtx([a, b, gap, c, d]);
    const pending = line();
    TracksRoutingCache.addRoutingToCache(a, b, line(), ctx);
    TracksRoutingCache.addRoutingToCache(gap, c, line(), ctx);
    TracksRoutingCache.addRoutingToCache(c, d, pending, ctx);
    const [abEntry, gapEntry] = entries(ctx);
    abEntry.geometry = gapEntry.geometry = ['routed'];
    abEntry.tempLine = gapEntry.tempLine = null;

    const { points } = syncTrackWithCache({
        ctx,
        track: ctx.selectedGpxFile,
        geoRouter,
        debouncerTimer: { current: null },
    });
    expect(points[1].geometry).toEqual(['routed']);
    expect(points[3].geometry).toBeUndefined();
    expect(points[4].geometry).toBeUndefined();
    expect(pending.removeFrom).toHaveBeenCalledWith(ctx.selectedGpxFile.layers);
    expect(entries(ctx)).toEqual([abEntry, gapEntry]);
    jest.useRealTimers();
});

test('a segment still waiting for the router when it was undone is routed after a redo', () => {
    jest.useFakeTimers();
    const [a, b] = [
        { ...point(0), id: 1 },
        { ...point(1), id: 2 },
    ];
    const dragged = { ...b, lat: 50.02, geometry: [] };
    const ctx = createCtx([a, dragged]);
    TracksRoutingCache.addRoutingToCache(a, dragged, line(), ctx);
    const sync = (points) =>
        syncTrackWithCache({ ctx, track: { points }, geoRouter, debouncerTimer: { current: null } });

    sync([a, b]);
    sync([a, dragged]);
    // the redraw after the redo draws a dashed line to the waiting point
    ctx.selectedGpxFile.layers = { getLayers: () => [{ point: dragged }] };
    effectRefreshTrackWithRouting({ ctx, geoRouter, saveChanges: jest.fn(), debouncerTimer: { current: null } });
    effectControlRouterRequests({ ctx, startedRouterJobs: 0, setStartedRouterJobs: jest.fn() });
    jest.useRealTimers();

    expect(ctx.trackRouter.updateRouteBetweenPoints).toHaveBeenCalled();
});

test('only the last call of a burst runs', () => {
    jest.useFakeTimers();
    const timer = { current: null };
    const calls = [];

    debouncer(() => calls.push(1), timer, 100);
    jest.advanceTimersByTime(50);
    debouncer(() => calls.push(2), timer, 100);
    jest.advanceTimersByTime(99);
    expect(calls).toEqual([]);
    jest.advanceTimersByTime(1);

    expect(calls).toEqual([2]);
    expect(timer.current).toBeNull();
    jest.useRealTimers();
});
