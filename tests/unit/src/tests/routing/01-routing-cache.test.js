import {
    debouncer,
    effectControlRouterRequests,
    effectRefreshTrackWithRouting,
    effectRequestAnalysis,
    GET_ANALYSIS_DEBOUNCE_MS,
    getWaitingSegments,
} from '@map/context/TracksRoutingCache';
import L from 'leaflet';
import TracksManager, { mergeRouteTypes, ROUTER_ERROR_LINE_USED } from '@map/manager/track/TracksManager';
import { TEMP_LINE_STYLE } from '@map/map/util/TrackLayerProvider';
import { fromHistoryState, toHistoryState } from '@map/manager/track/TrackHistory';
import { apiPost } from '@map/util/HttpApi';
import { createEditorCtx, createEditorPoint, createRecordedGeometry } from '../../util/fixtures/tracks';
import { createDrawnCtx, drawnLines } from '../../util/editor';
import { settle } from '../../util/settle';

const GAP = TracksManager.PROFILE_GAP;

const point = (i, profile) => ({ ...createEditorPoint(i, { profile }), id: i });
const waitingPoint = (i, profile) => ({ ...createEditorPoint(i, { profile, geometry: [] }), id: i });
const drawn = (ctx) =>
    drawnLines(ctx).map((line) => ({
        to: line.options.pointIds.at(-1),
        lats: line.getLatLngs().map(({ lat }) => lat),
        color: line.options.color,
        dashed: !!line.options.dashArray,
    }));
const createCtx = (points) => createEditorCtx({ points });
const geoRouter = createEditorCtx().trackRouter;

const keys = (ctx) => getWaitingSegments(ctx.selectedGpxFile.points, ctx.trackRouter).map(({ key }) => key);
const answer = (ctx, key, geometry) => (ctx.routingCache[key] = { geometry });
const startRouting = (ctx) =>
    effectControlRouterRequests({ ctx, startedRouterJobs: 0, setStartedRouterJobs: jest.fn() });
const askedPairs = (ctx) =>
    ctx.trackRouter.updateRouteBetweenPoints.mock.calls.map(([, start, end]) => [start.lat, end.lat]);

test('a waiting segment is asked by its points and profile, an answered pair is reused, a recorded one is not asked', () => {
    const recorded = { ...createEditorPoint(1, { geometry: createRecordedGeometry(0, 1) }), id: 1 };
    expect(keys(createCtx([point(0), recorded]))).toEqual([]);

    const ctx = createCtx([point(0), waitingPoint(1)]);
    const [carKey] = keys(ctx);
    expect(carKey).toContain('key-car');

    answer(ctx, carKey, ['routed']);
    startRouting(ctx);
    expect(ctx.trackRouter.updateRouteBetweenPoints).not.toHaveBeenCalled();

    ctx.selectedGpxFile.points = [point(0, 'bike'), waitingPoint(1)];
    startRouting(ctx);
    expect(ctx.trackRouter.updateRouteBetweenPoints).toHaveBeenCalledTimes(1);
});

test('the router is asked for the segments without geometry, six at a time', async () => {
    const ctx = createCtx([point(0), ...Array.from({ length: 8 }, (_, i) => waitingPoint(i + 1))]);
    jest.spyOn(console, 'debug').mockImplementation(() => {});
    ctx.trackRouter.updateRouteBetweenPoints.mockResolvedValue({ points: ['routed'] });

    expect(startRouting(ctx)).toBe(true);
    expect(ctx.trackRouter.updateRouteBetweenPoints).toHaveBeenCalledTimes(6);

    // with six requests in flight nothing more is started
    expect(effectControlRouterRequests({ ctx, startedRouterJobs: 6, setStartedRouterJobs: jest.fn() })).toBe(false);
    expect(ctx.trackRouter.updateRouteBetweenPoints).toHaveBeenCalledTimes(6);

    await settle();
    expect(Object.values(ctx.routingCache).map((entry) => entry.geometry)).toEqual(Array(6).fill(['routed']));
});

test('the router is asked while the analysis is running', () => {
    const ctx = createCtx([point(0), waitingPoint(1)]);
    ctx.processingAnalytics = true;

    expect(startRouting(ctx)).toBe(true);
    expect(ctx.trackRouter.updateRouteBetweenPoints).toHaveBeenCalledTimes(1);
});

test('a failed request is not repeated while its segment waits, a changed segment is asked again', async () => {
    const failed = [point(0), waitingPoint(1)];
    const ctx = createCtx(failed);
    ctx.setRoutingErrorMsg = jest.fn();
    ctx.trackRouter.updateRouteBetweenPoints.mockRejectedValue(new Error('router down'));
    jest.spyOn(console, 'error').mockImplementation(() => {});

    startRouting(ctx);
    await settle();
    startRouting(ctx);

    // the request and its straight line fallback
    expect(ctx.trackRouter.updateRouteBetweenPoints).toHaveBeenCalledTimes(2);
    expect(ctx.setProcessRouting).toHaveBeenLastCalledWith(false);

    ctx.selectedGpxFile.points = [point(0), point(1)];
    startRouting(ctx);
    ctx.selectedGpxFile.points = failed;
    startRouting(ctx);

    expect(ctx.trackRouter.updateRouteBetweenPoints).toHaveBeenCalledTimes(3);
});

test('a router error leaves a straight line and a message', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    const ctx = createCtx([point(0), waitingPoint(1)]);
    ctx.setRoutingErrorMsg = jest.fn();
    ctx.trackRouter.updateRouteBetweenPoints.mockRejectedValueOnce(new Error('router down'));

    startRouting(ctx);
    await settle();

    expect(Object.values(ctx.routingCache)[0].geometry.map(({ lat }) => lat)).toEqual([50, 50.01]);
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

test('a segment that waits for the router in a reopened track is asked once', () => {
    const ctx = createCtx([point(0), waitingPoint(1)]);
    let jobs = 0;
    const setStartedRouterJobs = (update) => (jobs = update(jobs));

    effectControlRouterRequests({ ctx, startedRouterJobs: jobs, setStartedRouterJobs });
    effectControlRouterRequests({ ctx, startedRouterJobs: jobs, setStartedRouterJobs });

    expect(askedPairs(ctx)).toEqual([[50, 50.01]]);
});

test('a routed segment goes into the track once, a gap is never routed, a segment still waiting is kept', () => {
    const [a, b, gap, c, d] = [point(0), waitingPoint(1), point(2, GAP), waitingPoint(3), waitingPoint(4)];
    const ctx = createDrawnCtx([a, b, gap, c, d]);
    const saveChanges = jest.fn();
    const [abKey] = keys(ctx);
    const route = [a, { lat: 50.005, lng: 30 }, b];
    answer(ctx, abKey, route);

    expect(effectRefreshTrackWithRouting({ ctx, geoRouter, saveChanges })).toBe(true);

    const [[, , , routed]] = saveChanges.mock.calls;
    expect(routed.points[1].geometry).toEqual(route);
    expect(saveChanges).toHaveBeenCalledTimes(1);
    // a gap is never routed, a segment still waiting for the router is kept
    expect(routed.points[3].geometry).toEqual([]);
    expect(routed.points[4].geometry).toEqual([]);
    ctx.selectedGpxFile = { ...routed, layers: ctx.selectedGpxFile.layers };
    const lines = drawn(ctx);
    expect(lines).toContainEqual({ to: b.id, lats: [50, 50.005, 50.01], color: '#0000ff', dashed: false });
    expect(lines).toContainEqual({ to: d.id, lats: [50.03, 50.04], color: TEMP_LINE_STYLE.color, dashed: true });
    expect(lines.filter(({ to }) => to === c.id)).toEqual([]);

    // a second pass finds nothing new
    ctx.selectedGpxFile = routed;
    expect(effectRefreshTrackWithRouting({ ctx, geoRouter, saveChanges })).toBe(false);
    expect(saveChanges).toHaveBeenCalledTimes(1);
});

test('a routed segment is put on the track and drawn as a solid line by its route', () => {
    const [a, b] = [point(0), waitingPoint(1)];
    const ctx = createCtx([a, b]);
    const saveChanges = jest.fn();
    answer(ctx, keys(ctx)[0], [a, b]);

    effectRefreshTrackWithRouting({ ctx, geoRouter, saveChanges });

    const [[, , , routed]] = saveChanges.mock.calls;
    expect(routed.points[1].geometry).toEqual([a, b]);
    ctx.selectedGpxFile = { ...routed, layers: L.featureGroup() };
    expect(drawn(ctx)).toContainEqual({ to: b.id, lats: [50, 50.01], color: '#0000ff', dashed: false });
});

test('the analysis is asked when the last waiting segment is routed, not while others still wait', () => {
    jest.useFakeTimers();
    const ctx = createCtx([point(0), waitingPoint(1), waitingPoint(2)]);
    const [abKey, bcKey] = keys(ctx);
    const debouncerTimer = { current: null };
    const analyses = () => apiPost.mock.calls.filter(([url]) => url.endsWith(`/gpx/${TracksManager.GET_ANALYSIS}`));
    const refresh = () => {
        const saveChanges = (points, wpts, layers, track) => ctx.setSelectedGpxFile(track);
        effectRefreshTrackWithRouting({ ctx, geoRouter, saveChanges });
        effectRequestAnalysis({ ctx, track: ctx.selectedGpxFile, debouncerTimer });
        jest.advanceTimersByTime(GET_ANALYSIS_DEBOUNCE_MS);
    };

    answer(ctx, abKey, ['routed']);
    refresh();
    expect(analyses()).toHaveLength(0);

    answer(ctx, bcKey, ['routed']);
    refresh();
    expect(analyses()).toHaveLength(1);
    jest.useRealTimers();
});

test('a cached route put back into a point gets the gap mark of that point', () => {
    const ctx = createCtx([point(0), waitingPoint(1, GAP), point(2), waitingPoint(3)]);
    const [toGap, toC] = keys(ctx);
    answer(ctx, toGap, [point(0), point(1)]);
    answer(ctx, toC, [point(2), point(3, GAP)]);

    effectRefreshTrackWithRouting({
        ctx,
        geoRouter,
        saveChanges: (points, wpts, layers, track) => ctx.setSelectedGpxFile(track),
    });

    const { points } = ctx.selectedGpxFile;
    expect(points[1].geometry.at(-1).profile).toBe(GAP);
    expect(points[3].geometry.at(-1).profile).toBeUndefined();
});

test('a router answer for the place a point was dragged away from is not put on the track', async () => {
    for (const order of [
        [0, 1],
        [1, 0],
    ]) {
        const a = point(0);
        const ctx = createCtx([a, waitingPoint(1)]);
        const answers = [];
        ctx.trackRouter.updateRouteBetweenPoints.mockImplementation(
            (ctx, start, end) => new Promise((resolve) => answers.push(() => resolve({ points: [`to ${end.lat}`] })))
        );
        const drag = (lat) => {
            ctx.selectedGpxFile = { ...ctx.selectedGpxFile, points: [a, { ...waitingPoint(1), lat }] };
            startRouting(ctx);
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
            });
        }

        expect(routed.points[1].geometry).toEqual(['to 50.012']);
    }
});

test('the dashed line of a pair that starts at a gap is removed, not left', () => {
    const ctx = createDrawnCtx([point(0), waitingPoint(1)]);
    expect(drawn(ctx).filter(({ dashed }) => dashed)).toHaveLength(1);

    ctx.selectedGpxFile.points = [point(0, GAP), waitingPoint(1)];

    expect(drawn(ctx).filter(({ dashed }) => dashed)).toEqual([]);
});

test('the route types of an answer join the track, the indexes in its segments follow them, the answer is kept', () => {
    const answered = [{ lat: 50, lng: 30, segment: { ext: { types: '0,1', pointTypes: '1', names: '0' } } }];
    const segmentTypes = [
        { tag: 'highway', value: 'residential' },
        { tag: 'highway', value: 'primary' },
    ];

    const { geometry, routeTypes } = mergeRouteTypes(answered, segmentTypes, [{ tag: 'highway', value: 'primary' }]);

    expect(routeTypes).toEqual([
        { tag: 'highway', value: 'primary' },
        { tag: 'highway', value: 'residential' },
    ]);
    expect(geometry[0].segment.ext).toEqual({ types: '1,0', pointTypes: '0', names: '1' });
    expect(answered[0].segment.ext).toEqual({ types: '0,1', pointTypes: '1', names: '0' });
});

test('after an undo the waiting segments take their cached routes at once, the others are asked again', () => {
    const [a, b, gap, c, d] = [point(0), waitingPoint(1), point(2, GAP), waitingPoint(3), waitingPoint(4)];
    const ctx = createCtx([a, b, gap, c, d]);
    const [abKey] = keys(ctx);
    const route = [
        { lat: 50, lng: 30 },
        { lat: 50.01, lng: 30 },
    ];
    answer(ctx, abKey, route);

    ctx.selectedGpxFile = fromHistoryState(toHistoryState(ctx.selectedGpxFile), ctx);
    startRouting(ctx);

    const { points } = ctx.selectedGpxFile;
    expect(points[1].geometry).toEqual(route);
    expect(points[3].geometry).toEqual([]);
    expect(askedPairs(ctx)).toEqual([[50.03, 50.04]]);
});

test('a segment still waiting for the router when it was undone is routed after a redo', () => {
    const [a, b] = [point(0), point(1)];
    const dragged = { ...b, lat: 50.02, geometry: [] };
    const ctx = createCtx([a, dragged]);

    ctx.selectedGpxFile = { ...ctx.selectedGpxFile, points: [a, b] };
    startRouting(ctx);
    ctx.selectedGpxFile = { ...ctx.selectedGpxFile, points: [a, dragged] };
    startRouting(ctx);

    expect(askedPairs(ctx)).toEqual([[50, 50.02]]);
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
