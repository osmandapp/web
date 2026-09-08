import TracksRoutingCache, {
    debouncer,
    effectControlRouterRequests,
    effectRefreshTrackWithRouting,
    syncTrackWithCache,
} from '@map/context/TracksRoutingCache';
import TracksManager from '@map/manager/track/TracksManager';
import EditablePolyline from '@map/map/util/creator/EditablePolyline';

const geoRouter = {
    getGeoProfile: (point) => ({ profile: point.profile, cacheKey: `key-${point.profile}` }),
    getColor: () => '#0000ff',
};

const point = (lat, profile = 'car') => ({ lat, lng: 30, profile });
const line = () => ({ setStyle: jest.fn(), setLatLngs: jest.fn(), removeFrom: jest.fn(), options: {} });
const flush = () => new Promise((resolve) => setTimeout(resolve, 0));

function createCtx(points = []) {
    const ctx = {
        routingCache: {},
        mutateRoutingCache: (update) => update(ctx.routingCache),
        selectedGpxFile: { points, layers: {} },
        setSelectedGpxFile: jest.fn(),
        setProcessRouting: jest.fn(),
        trackRouter: { ...geoRouter, updateRouteBetweenPoints: jest.fn() },
    };

    return ctx;
}

const entries = (ctx) => Object.values(ctx.routingCache);

test('a segment is cached by its points and profile, a protected one is not cached', () => {
    const ctx = createCtx();
    const [a, b] = [point(50), point(51)];

    TracksRoutingCache.addRoutingToCache(a, b, null, ctx);
    expect(entries(ctx)).toEqual([]);

    TracksRoutingCache.addRoutingToCache(a, b, line(), ctx);
    expect(entries(ctx)).toMatchObject([{ geometry: null, busy: false, geoProfile: { cacheKey: 'key-car' } }]);
    // the cache keeps copies, a point dragged later does not change the cached segment
    a.lat = 49;
    expect(entries(ctx)[0].startPoint.lat).toBe(50);

    entries(ctx)[0].geometry = ['routed'];
    TracksRoutingCache.addRoutingToCache(point(50), b, line(), ctx);
    TracksRoutingCache.addRoutingToCache(point(50, 'bike'), b, line(), ctx);
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

    await flush();
    expect(
        entries(ctx)
            .filter((e) => e.geometry)
            .map((e) => e.geometry)
    ).toEqual(Array(6).fill(['routed']));
});

test('a failed request is not repeated', async () => {
    const ctx = createCtx();
    ctx.trackRouter.updateRouteBetweenPoints.mockRejectedValue(new Error('router down'));
    jest.spyOn(console, 'error').mockImplementation(() => {});
    TracksRoutingCache.addRoutingToCache(point(50), point(51), line(), ctx);

    effectControlRouterRequests({ ctx, startedRouterJobs: 0, setStartedRouterJobs: jest.fn() });
    await flush();
    effectControlRouterRequests({ ctx, startedRouterJobs: 0, setStartedRouterJobs: jest.fn() });

    expect(ctx.trackRouter.updateRouteBetweenPoints).toHaveBeenCalledTimes(1);
    expect(ctx.setProcessRouting).toHaveBeenLastCalledWith(false);
});

test('a routed segment goes into the track once, the segments that are gone leave the cache', () => {
    const [a, b, gap, c, d] = [point(50), point(51), point(52, TracksManager.PROFILE_GAP), point(53), point(54)];
    const ctx = createCtx([a, b, gap, c, d]);
    const saveChanges = jest.fn();
    EditablePolyline.mockImplementation(function () {
        return { create: () => ({ _latlngs: ['latlng'] }) };
    });
    const [ab, gapC, old] = [line(), line(), line()];
    TracksRoutingCache.addRoutingToCache(a, b, ab, ctx);
    TracksRoutingCache.addRoutingToCache(gap, c, gapC, ctx);
    TracksRoutingCache.addRoutingToCache(c, d, line(), ctx);
    TracksRoutingCache.addRoutingToCache(point(60), point(61), old, ctx);
    TracksRoutingCache.addRoutingToCache(point(62), point(63), null, ctx);
    const [abEntry, gapEntry, cdEntry, oldEntry] = entries(ctx);
    abEntry.geometry = gapEntry.geometry = oldEntry.geometry = ['routed'];

    expect(effectRefreshTrackWithRouting({ ctx, geoRouter, saveChanges })).toBe(true);

    expect(b.geometry).toEqual(['routed']);
    expect(ab.setLatLngs).toHaveBeenCalledWith(['latlng']);
    expect(ab.setStyle).toHaveBeenCalledWith({ color: '#0000ff', dashArray: null });
    expect(abEntry.tempLine).toBeNull();
    expect(saveChanges).toHaveBeenCalledTimes(1);
    // a gap is never routed, a segment still waiting for the router is kept
    expect(c.geometry).toBeUndefined();
    expect(gapC.setLatLngs).not.toHaveBeenCalled();
    expect(entries(ctx)).toEqual([abEntry, gapEntry, cdEntry]);

    // a second pass finds nothing new
    expect(effectRefreshTrackWithRouting({ ctx, geoRouter, saveChanges })).toBe(false);
    expect(saveChanges).toHaveBeenCalledTimes(1);
});

test('undo restores the geometry of every segment from the cache and drops the unfinished ones', () => {
    jest.useFakeTimers();
    const [a, b, gap, c, d] = [point(50), point(51), point(52, TracksManager.PROFILE_GAP), point(53), point(54)];
    const ctx = createCtx([a, b, gap, c, d]);
    const pending = line();
    TracksRoutingCache.addRoutingToCache(a, b, line(), ctx);
    TracksRoutingCache.addRoutingToCache(gap, c, line(), ctx);
    TracksRoutingCache.addRoutingToCache(c, d, pending, ctx);
    const [abEntry, gapEntry] = entries(ctx);
    abEntry.geometry = gapEntry.geometry = ['routed'];
    abEntry.tempLine = gapEntry.tempLine = null;

    syncTrackWithCache({ ctx, track: ctx.selectedGpxFile, geoRouter, debouncerTimer: { current: null } });

    expect(b.geometry).toEqual(['routed']);
    expect(c.geometry).toBeUndefined();
    expect(d.geometry).toBeUndefined();
    expect(pending.removeFrom).toHaveBeenCalledWith(ctx.selectedGpxFile.layers);
    expect(entries(ctx)).toEqual([abEntry, gapEntry]);
    jest.useRealTimers();
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
