import L from 'leaflet';
import PointManager from '@map/manager/PointManager';
import TracksManager, { addDistance, getTrackPoints, PROFILE_LINE } from '@map/manager/track/TracksManager';
import TracksRoutingCache, { effectRefreshTrackWithRouting } from '@map/context/TracksRoutingCache';
import { saveTrackToLocalStorage } from '@map/context/LocalTrackStorage';
import { addPointToTrack } from '@map/map/util/creator/LocalTrackHelper';
import { apiPost } from '@map/util/HttpApi';
import { cloneTrackObject } from '@map/util/Utils';
import { PROFILE_CAR } from '@map/store/geoRouter/profileConstants';
import { BYTES, GENERATED_STEP, generatedVertex, MS, measure, record } from '../../../bench.mjs';
import { createEditorCtx } from '../util/fixtures/tracks';
import { createDrawnCtx, dragPoint } from '../util/editor';
import { fakeIndexedDbStore, removeIndexedDb } from '../util/indexedDb';
import { findRequest } from '../util/requests';
import { settle } from '../util/settle';

const POINTS = 50000;
const MIDDLE = POINTS / 2;
const ROUTE_POINTS = 200;
const ROUTE_VERTICES = 100000;

const ANALYSIS_URL = `/gpx/${TracksManager.GET_ANALYSIS}`;

const at = (i) => {
    const [lat, lng] = generatedVertex(i);

    return { lat, lng };
};

const createPlainTrackPoints = (n = POINTS) => Array.from({ length: n }, (_, i) => at(i));

/** Route points `perSegment` vertices apart, each with the geometry of the segment leading to it. */
function createRouteTrackPoints(n = POINTS, perSegment = 1) {
    return Array.from({ length: n }, (_, i) => ({
        ...at(i * perSegment),
        profile: PROFILE_CAR,
        geometry: i === 0 ? [] : Array.from({ length: perSegment + 1 }, (_, k) => at((i - 1) * perSegment + k)),
    }));
}

const createTrack = (points) => ({ name: 'Big', points, wpts: [] });

const TRACK_KINDS = [
    { kind: 'plain', createPoints: createPlainTrackPoints, newPoint: 'a Line point', profile: PROFILE_LINE },
    { kind: 'routed', createPoints: createRouteTrackPoints, newPoint: 'a routed point', profile: PROFILE_CAR },
];

test('17.2 add, delete and drag a point on 50k', async () => {
    for (const { kind, createPoints, newPoint, profile } of TRACK_KINDS) {
        const add = await measure((track) => addPointToTrack(track, { ...at(POINTS), profile, geometry: [] }), {
            prepare: () => createTrack(createPoints()),
        });
        record(`17.2 add ${newPoint} to ${kind} 50k`, add, MS);

        const deleted = await measure((ctx) => PointManager.deletePoint(MIDDLE, ctx), {
            prepare: () => createEditorCtx({ points: createPoints() }),
        });
        record(`17.2 delete a point of ${kind} 50k`, deleted, MS);

        const dragged = await measure((ctx) => dragPoint(ctx, MIDDLE, at(MIDDLE).lat + GENERATED_STEP / 2), {
            prepare: () => createDrawnCtx(createPoints()),
        });
        record(`17.2 drag a point of ${kind} 50k`, dragged, MS);
    }
});

test('17.4 router answers of 200 route points with 100k vertices', async () => {
    const perSegment = ROUTE_VERTICES / ROUTE_POINTS;
    const answered = createRouteTrackPoints(ROUTE_POINTS, perSegment);

    const apply = await measure(
        (ctx) =>
            effectRefreshTrackWithRouting({
                ctx,
                geoRouter: ctx.trackRouter,
                saveChanges: () => {},
                debouncerTimer: { current: null },
            }),
        {
            prepare: () => {
                const points = answered.map(({ lat, lng, profile }) => ({ lat, lng, profile, geometry: [] }));
                const ctx = createEditorCtx({ points });
                for (let i = 1; i < points.length; i++) {
                    const tempLine = L.polyline([points[i - 1], points[i]]);
                    TracksRoutingCache.addRoutingToCache(points[i - 1], points[i], tempLine, ctx);
                }
                Object.values(ctx.routingCache).forEach((entry, i) => (entry.geometry = answered[i + 1].geometry));

                return ctx;
            },
        }
    );
    record('17.4 apply router answers of 200 points, 100k vertices', apply, MS);
});

test('17.6 save routed 50k to the local storage', async () => {
    fakeIndexedDbStore();
    const ctx = { localTracks: [], setLocalTracks: jest.fn(), setRoutingErrorMsg: jest.fn() };
    const track = createTrack(createRouteTrackPoints());

    const save = await measure(async () => {
        saveTrackToLocalStorage({ ctx, track });
        await settle();
    });
    record('17.6 save routed 50k to IndexedDB', save, MS);
    removeIndexedDb();
});

test('17.7 the analysis request of routed 50k', async () => {
    apiPost.mockResolvedValue(null);
    const ctx = createEditorCtx({ points: createRouteTrackPoints() });
    ctx.selectedGpxFile.tracks = [{ points: [] }];
    ctx.setProcessingAnalytics = jest.fn();

    const prepare = await measure(() =>
        TracksManager.getTrackWithAnalysis(TracksManager.GET_ANALYSIS, ctx, jest.fn(), ctx.selectedGpxFile.points)
    );
    record('17.7 analysis request of routed 50k', prepare, MS);
    record('17.7 analysis request size of routed 50k', findRequest(apiPost, ANALYSIS_URL).body.size, BYTES);
});

test('17.8 pure functions on routed 50k', async () => {
    const track = createTrack(createRouteTrackPoints());

    record('17.8 getTrackPoints of routed 50k', await measure(() => getTrackPoints(track)), MS);
    record('17.8 addDistance of routed 50k', await measure(() => addDistance(track)), MS);
    record('17.8 cloneTrackObject of routed 50k', await measure(() => cloneTrackObject(track)), MS);
});
