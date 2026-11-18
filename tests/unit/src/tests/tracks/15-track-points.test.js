import L from 'leaflet';
import PointManager from '@map/manager/PointManager';
import { apiGet } from '@map/util/HttpApi';
import { updateRouteBetweenPoints } from '@map/store/geoRouter/legacy/updateRouteBetweenPoints';
import TracksManager, { isProtectedSegment, PROFILE_LINE } from '@map/manager/track/TracksManager';
import TrackLayerProvider from '@map/map/util/TrackLayerProvider';
import { PROFILE_BICYCLE, PROFILE_CAR, PROFILE_PEDESTRIAN } from '@map/store/geoRouter/profileConstants';
import {
    createEditorCtx,
    createEditorPoint,
    createGapPoints,
    createPlainPoints,
    createRecordedGeometry,
    createRecordedThenRoutedPoints,
    createRoutedPoint,
    createRoutedPoints,
    createRoutedThenRecordedPoints,
} from '../../util/fixtures/tracks';

TrackLayerProvider.createTempPolyline = () => ({ temp: true });

const GAP = TracksManager.PROFILE_GAP;

const plain = (n) => Array.from({ length: n }, (_, i) => createEditorPoint(i));
const createCtx = (points) => createEditorCtx({ points });

const lats = (points) => points.map((p) => p.lat);

describe('deletePoint', () => {
    test('the neighbours of a deleted point are joined, a routed segment is routed again', async () => {
        const first = createCtx(createRoutedPoints(3));
        await PointManager.deletePoint(0, first);
        expect(lats(first.selectedGpxFile.points)).toEqual([50.01, 50.02]);
        expect(first.selectedGpxFile.points[0].geometry).toEqual([]);

        const last = createCtx(createRoutedPoints(3));
        await PointManager.deletePoint(2, last);
        expect(lats(last.selectedGpxFile.points)).toEqual([50, 50.01]);

        const middle = createCtx(createRoutedPoints(3));
        await PointManager.deletePoint(1, middle);
        expect(lats(middle.selectedGpxFile.points)).toEqual([50, 50.02]);
        // the segment from the first point to the third is routed anew
        expect(middle.selectedGpxFile.points[1].geometry).toEqual([]);
        expect(Object.values(middle.routingCache)).toMatchObject([
            { startPoint: { lat: 50 }, endPoint: { lat: 50.02 }, geometry: null },
        ]);
        expect(middle.selectedGpxFile.layers.addLayer).toHaveBeenCalledTimes(1);
        expect(middle.selectedGpxFile.updateLayers).toBe(true);

        const line = createCtx(plain(3));
        await PointManager.deletePoint(1, line);
        expect(lats(line.selectedGpxFile.points)).toEqual([50, 50.02]);
        expect(line.routingCache).toEqual({});
    });

    test('a track left without points is emptied', async () => {
        const ctx = createCtx(plain(2));

        await PointManager.deletePoint(1, ctx);
        expect(ctx.setUpdateInfoBlock).toHaveBeenCalledWith(true);

        await PointManager.deletePoint(0, ctx);
        expect(ctx.selectedGpxFile.points).toEqual([]);
        expect(ctx.selectedGpxFile.name).toBe('Local');
        expect(ctx.selectedGpxFile.tracks).toBeDefined();
    });

    test('a point without a profile is removed alone, nothing is routed', async () => {
        for (const index of [0, 1, 2]) {
            const ctx = createCtx(createPlainPoints(3));

            await PointManager.deletePoint(index, ctx);

            expect(ctx.selectedGpxFile.points).toEqual(createPlainPoints(3).filter((_, i) => i !== index));
            expect(ctx.routingCache).toEqual({});
        }
    });

    test.failing(
        'a deleted gap point passes the gap to the previous point, its neighbours are not routed',
        async () => {
            const ctx = createCtx(createGapPoints(5, 2));

            await PointManager.deletePoint(2, ctx);

            const points = ctx.selectedGpxFile.points;
            expect(lats(points)).toEqual([50, 50.01, 50.03, 50.04]);
            expect(points[1].profile).toBe(GAP);
            expect(points[1].geometry.at(-1).profile).toBe(GAP);
            expect(points[2].geometry).toEqual([]);
            expect(ctx.routingCache).toEqual({});
        }
    );

    test.failing('a deleted point after a gap stretches the gap to the next point, nothing is routed', async () => {
        const ctx = createCtx(createGapPoints(5, 2));

        await PointManager.deletePoint(3, ctx);

        const points = ctx.selectedGpxFile.points;
        expect(lats(points)).toEqual([50, 50.01, 50.02, 50.04]);
        expect(points[2].profile).toBe(GAP);
        expect(points[3].geometry).toEqual([]);
        expect(ctx.routingCache).toEqual({});
    });

    test('a point next to a recorded piece is replaced by a segment with the profile of the previous point', async () => {
        const betweenPieces = createCtx([
            createEditorPoint(0, { profile: PROFILE_LINE, geometry: [] }),
            createEditorPoint(1, { profile: PROFILE_LINE, geometry: createRecordedGeometry(0, 1) }),
            createEditorPoint(2, { geometry: createRecordedGeometry(1, 2) }),
        ]);
        const pieceAndRoute = createCtx(createRecordedThenRoutedPoints());

        for (const ctx of [betweenPieces, pieceAndRoute]) {
            await PointManager.deletePoint(1, ctx);

            expect(lats(ctx.selectedGpxFile.points)).toEqual([50, 50.02]);
            expect(ctx.selectedGpxFile.points[1].geometry).toEqual([]);
            expect(Object.values(ctx.routingCache)).toMatchObject([
                { startPoint: { lat: 50, profile: PROFILE_LINE }, endPoint: { lat: 50.02 }, geometry: null },
            ]);
        }
    });

    test('the first or the last point takes its recorded piece with it', async () => {
        const first = createCtx(createRecordedThenRoutedPoints());

        await PointManager.deletePoint(0, first);

        expect(lats(first.selectedGpxFile.points)).toEqual([50.01, 50.02]);
        expect(first.selectedGpxFile.points[0].geometry).toEqual([]);
        expect(first.routingCache).toEqual({});

        const routedGeometry = [createEditorPoint(0), createEditorPoint(1)];
        const last = createCtx([
            createEditorPoint(0, { geometry: [] }),
            createEditorPoint(1, { profile: PROFILE_LINE, geometry: routedGeometry }),
            createEditorPoint(2, { geometry: createRecordedGeometry(1, 2) }),
        ]);

        await PointManager.deletePoint(2, last);

        expect(lats(last.selectedGpxFile.points)).toEqual([50, 50.01]);
        expect(last.selectedGpxFile.points[1].geometry).toBe(routedGeometry);
        expect(last.routingCache).toEqual({});
    });
});

describe('reorder', () => {
    test('a moved point is routed from its new neighbours', async () => {
        const ctx = createCtx(createRoutedPoints(4));

        await PointManager.reorder(3, 1, ctx.selectedGpxFile, ctx);

        const points = ctx.selectedGpxFile.points;
        expect(lats(points)).toEqual([50, 50.03, 50.01, 50.02]);
        expect(lats(points[1].geometry)).toEqual([50, 50.03]);
        expect(lats(points[2].geometry)).toEqual([50.03, 50.01]);
        expect(lats(points[3].geometry)).toEqual([50.01, 50.02]);
    });

    test('a point moved to the start has no segment leading to it', async () => {
        const ctx = createCtx(createRoutedPoints(3));

        await PointManager.reorder(2, 0, ctx.selectedGpxFile, ctx);

        const points = ctx.selectedGpxFile.points;
        expect(lats(points)).toEqual([50.02, 50, 50.01]);
        expect(points[0].geometry).toEqual([]);
        expect(lats(points[1].geometry)).toEqual([50.02, 50]);
    });

    test('a point moved from the middle joins its old neighbours by the router and is routed in its new place', async () => {
        const middle = createCtx(createRoutedPoints(5));

        await PointManager.reorder(1, 3, middle.selectedGpxFile, middle);

        const points = middle.selectedGpxFile.points;
        expect(lats(points)).toEqual([50, 50.02, 50.03, 50.01, 50.04]);
        expect(points[1].geometry).toEqual([]);
        expect(Object.values(middle.routingCache)).toMatchObject([
            { startPoint: { lat: 50 }, endPoint: { lat: 50.02 }, geometry: null },
        ]);
        expect(lats(points[2].geometry)).toEqual([50.02, 50.03]);
        expect(lats(points[3].geometry)).toEqual([50.03, 50.01]);
        expect(lats(points[4].geometry)).toEqual([50.01, 50.04]);

        const end = createCtx(createRoutedPoints(4));

        await PointManager.reorder(1, 3, end.selectedGpxFile, end);

        expect(lats(end.selectedGpxFile.points)).toEqual([50, 50.02, 50.03, 50.01]);
        expect(lats(end.selectedGpxFile.points[3].geometry)).toEqual([50.03, 50.01]);
    });

    test.failing('the segments around a moved point are routed with the profile of their start point', async () => {
        const profiles = [PROFILE_BICYCLE, PROFILE_CAR, PROFILE_PEDESTRIAN, PROFILE_CAR];
        const mixed = () => createRoutedPoints(4).map((point, i) => ({ ...point, profile: profiles[i] }));
        const routedWith = async (points, from, to) => {
            const ctx = createCtx(points);
            await PointManager.reorder(from, to, ctx.selectedGpxFile, ctx);

            return ctx.trackRouter.routed.map(({ start, profile }) => [start.profile, profile]);
        };

        const calls = [
            ...(await routedWith(mixed(), 1, 2)),
            ...(await routedWith(mixed(), 1, 3)),
            ...(await routedWith(createRecordedThenRoutedPoints(), 2, 1)),
        ];

        expect(calls.length).toBeGreaterThan(0);
        for (const [start, used] of calls) {
            expect(used).toBe(start);
        }
    });

    test('a recorded piece the moved point does not touch keeps its geometry', async () => {
        const points = createRecordedThenRoutedPoints(4);
        const recorded = points[1].geometry;
        const ctx = createCtx(points);

        await PointManager.reorder(3, 2, ctx.selectedGpxFile, ctx);

        expect(lats(ctx.selectedGpxFile.points)).toEqual([50, 50.01, 50.03, 50.02]);
        expect(ctx.selectedGpxFile.points[1].geometry).toBe(recorded);
    });

    test('points without a profile are moved without routing', async () => {
        for (const [from, to] of [
            [1, 2],
            [3, 0],
            [0, 3],
        ]) {
            const ctx = createCtx(createPlainPoints(4));
            const expected = createPlainPoints(4);
            expected.splice(to, 0, ...expected.splice(from, 1));

            await PointManager.reorder(from, to, ctx.selectedGpxFile, ctx);

            expect(ctx.selectedGpxFile.points).toEqual(expected);
            expect(ctx.routingCache).toEqual({});
            expect(ctx.trackRouter.updateRouteBetweenPoints).not.toHaveBeenCalled();
        }
    });

    test.failing('a point moved right after a gap starts a new piece, the gap point is not routed to it', async () => {
        const ctx = createCtx(createGapPoints(5, 2));

        await PointManager.reorder(4, 3, ctx.selectedGpxFile, ctx);

        const points = ctx.selectedGpxFile.points;
        expect(lats(points)).toEqual([50, 50.01, 50.02, 50.04, 50.03]);
        expect(points[3].geometry).toEqual([]);
        expect(lats(points[4].geometry)).toEqual([50.04, 50.03]);
    });

    test.failing('a moved gap point keeps the gap after it in its new place', async () => {
        const ctx = createCtx(createGapPoints(5, 2));

        await PointManager.reorder(2, 3, ctx.selectedGpxFile, ctx);

        const points = ctx.selectedGpxFile.points;
        expect(lats(points)).toEqual([50, 50.01, 50.03, 50.02, 50.04]);
        expect(points[3].profile).toBe(GAP);
        expect(points[3].geometry.at(-1).profile).toBe(GAP);
        expect(points[4].geometry).toEqual([]);
    });

    test.failing(
        'the point after a gap moved away stretches the gap to the next point, nothing is routed across it',
        async () => {
            const ctx = createCtx(createGapPoints(5, 2));

            await PointManager.reorder(3, 1, ctx.selectedGpxFile, ctx);

            const points = ctx.selectedGpxFile.points;
            expect(lats(points)).toEqual([50, 50.03, 50.01, 50.02, 50.04]);
            expect(points[4].geometry).toEqual([]);
            expect(ctx.routingCache).toEqual({});
        }
    );

    test.failing('a point dropped on its own place changes nothing', async () => {
        const ctx = createCtx(createRoutedPoints(3));

        await PointManager.reorder(1, 1, ctx.selectedGpxFile, ctx);

        expect(ctx.selectedGpxFile.points).toEqual(createRoutedPoints(3));
        expect(ctx.routingCache).toEqual({});
        expect(ctx.trackRouter.updateRouteBetweenPoints).not.toHaveBeenCalled();
    });

    test.failing('the only point of a track dropped on its own place stays', async () => {
        const ctx = createCtx(createRoutedPoints(1));

        await PointManager.reorder(0, 0, ctx.selectedGpxFile, ctx);

        expect(ctx.selectedGpxFile.points).toEqual(createRoutedPoints(1));
    });
});

describe('trim', () => {
    test('trim before a middle point removes the points before it, the new first point has no segment', () => {
        const ctx = createCtx(createRoutedPoints(4));
        const kept = ctx.selectedGpxFile.points[3].geometry;

        PointManager.trimBefore(2, ctx);

        const points = ctx.selectedGpxFile.points;
        expect(lats(points)).toEqual([50.02, 50.03]);
        expect(points[0].geometry).toEqual([]);
        expect(points[1].geometry).toBe(kept);
        expect(ctx.selectedGpxFile.updateLayers).toBe(true);
        expect(ctx.trackState.update).toBe(true);
    });

    test('trim after a middle point removes the tail', () => {
        const ctx = createCtx(createRoutedPoints(4));
        const kept = ctx.selectedGpxFile.points[1].geometry;

        PointManager.trimAfter(1, ctx);

        expect(lats(ctx.selectedGpxFile.points)).toEqual([50, 50.01]);
        expect(ctx.selectedGpxFile.points[1].geometry).toBe(kept);
        expect(ctx.trackState.update).toBe(true);
    });

    test('trim before the start of a recorded piece keeps the piece protected', () => {
        const ctx = createCtx(createRoutedThenRecordedPoints());
        const recorded = ctx.selectedGpxFile.points[2].geometry;

        PointManager.trimBefore(1, ctx);

        const [start, end] = ctx.selectedGpxFile.points;
        expect(end.geometry).toBe(recorded);
        expect(isProtectedSegment({ startPoint: start, endPoint: end })).toBe(true);
    });
});

describe('split', () => {
    test('split before or after a point puts a gap after it and drops only the geometry of the split segment', () => {
        for (const index of [1, 2]) {
            const ctx = createCtx(createRoutedPoints(5));

            PointManager.split(index, ctx);

            expect(ctx.selectedGpxFile.points).toEqual(createGapPoints(5, index));
            expect(ctx.trackRouter.updateRouteBetweenPoints).not.toHaveBeenCalled();
            expect(ctx.routingCache).toEqual({});
            expect(ctx.trackState.update).toBe(true);
        }
    });

    test('a split right after a recorded piece keeps the piece', () => {
        const ctx = createCtx(createRecordedThenRoutedPoints(4));

        PointManager.split(1, ctx);

        const [start, end] = ctx.selectedGpxFile.points;
        expect(lats(end.geometry)).toEqual(lats(createRecordedGeometry(0, 1)));
        expect(isProtectedSegment({ startPoint: start, endPoint: end })).toBe(true);
    });

    // the issue hides Split on a recorded piece instead, with that fix this case is dropped, not flipped
    test.failing('a split at the start of a recorded piece keeps its recorded points', () => {
        const ctx = createCtx([...createRoutedThenRecordedPoints(), createRoutedPoint(3)]);

        PointManager.split(1, ctx);

        const vertices = ctx.selectedGpxFile.points.flatMap((point) => point.geometry);
        expect(lats(vertices)).toEqual(expect.arrayContaining(lats(createRecordedGeometry(1, 2))));
    });
});

describe('join', () => {
    const createJoinCtx = () => {
        const points = createGapPoints(4, 1);
        points[2].profile = PROFILE_BICYCLE;

        return createCtx(points);
    };

    test('join across a gap gives the gap point the profile of the next point and removes the gap marker', async () => {
        const ctx = createJoinCtx();
        const [, gap, next] = ctx.selectedGpxFile.points;

        await PointManager.join(gap, next, ctx);

        expect(gap.profile).toBe(PROFILE_BICYCLE);
        expect(gap.geometry.at(-1).profile).toBeUndefined();
        expect(lats(next.geometry)).toEqual([50.01, 50.02]);
        expect(ctx.trackState.update).toBe(true);
    });

    test.failing('join across a gap routes the segment with the profile of the next point', async () => {
        const ctx = createJoinCtx();
        const [, gap, next] = ctx.selectedGpxFile.points;

        await PointManager.join(gap, next, ctx);

        expect(ctx.trackRouter.routed.map(({ profile }) => profile)).toEqual([PROFILE_BICYCLE]);
    });

    test('a router answer without points in join leaves a straight line and a message', async () => {
        const ctx = createJoinCtx();
        ctx.setRoutingErrorMsg = jest.fn();
        ctx.trackRouter.getURL = () => 'osrm/';
        ctx.trackRouter.getGeoProfile = () => ({ type: 'osrm', profile: PROFILE_BICYCLE });
        ctx.trackRouter.updateRouteBetweenPoints = updateRouteBetweenPoints;
        apiGet.mockResolvedValue({ ok: true, json: async () => ({ routes: [] }) });
        const [, gap, next] = ctx.selectedGpxFile.points;

        await PointManager.join(gap, next, ctx);

        expect(lats(next.geometry)).toEqual([50.01, 50.02]);
        expect(ctx.setRoutingErrorMsg).toHaveBeenCalledWith('Router error, Line used');
    });

    test.failing('a router error in join leaves a straight line and a message', async () => {
        const ctx = createJoinCtx();
        ctx.setRoutingErrorMsg = jest.fn();
        ctx.trackRouter.updateRouteBetweenPoints.mockRejectedValueOnce(new Error('no route'));
        const [, gap, next] = ctx.selectedGpxFile.points;

        await PointManager.join(gap, next, ctx);

        expect(lats(next.geometry)).toEqual([50.01, 50.02]);
        expect(ctx.setRoutingErrorMsg).toHaveBeenCalled();
    });

    test('a join next to recorded pieces keeps their geometry', async () => {
        const before = createCtx(createRecordedThenRoutedPoints(4));
        PointManager.split(1, before);
        const [recordedStart, gap, next] = before.selectedGpxFile.points;

        await PointManager.join(gap, next, before);

        expect(lats(gap.geometry)).toEqual(lats(createRecordedGeometry(0, 1)));
        expect(isProtectedSegment({ startPoint: recordedStart, endPoint: gap })).toBe(true);

        const after = createCtx(createRoutedThenRecordedPoints(2));
        const recorded = after.selectedGpxFile.points[3].geometry;
        PointManager.split(1, after);
        const [, afterGap, afterNext, recordedEnd] = after.selectedGpxFile.points;

        await PointManager.join(afterGap, afterNext, after);

        expect(recordedEnd.geometry).toBe(recorded);
        expect(isProtectedSegment({ startPoint: afterNext, endPoint: recordedEnd })).toBe(true);
    });
});

describe('changeProfile', () => {
    const BICYCLE = { profile: PROFILE_BICYCLE };
    const { CHANGE_PROFILE_AFTER, CHANGE_PROFILE_ALL, CHANGE_PROFILE_BEFORE } = TracksManager;

    const createProfileCtx = (points, change, pointInd) => {
        const ctx = createCtx(points);
        const polylines = points
            .filter((point) => point.geometry?.length > 0)
            .map(({ geometry }) => L.polyline(geometry));
        ctx.selectedGpxFile.layers.getLayers = () => polylines;
        ctx.trackProfileManager = { change, pointInd };

        return ctx;
    };
    const profiles = (ctx) => ctx.selectedGpxFile.points.map((point) => point.profile);
    const cached = (ctx) =>
        Object.values(ctx.routingCache).map(({ startPoint, endPoint, geoProfile }) => [
            startPoint.lat,
            endPoint.lat,
            geoProfile.profile,
        ]);

    test('one segment before or after a point gets the new profile on its start point and is routed again', async () => {
        for (const [change, pointInd] of [
            [CHANGE_PROFILE_AFTER, 1],
            [CHANGE_PROFILE_BEFORE, 2],
        ]) {
            const ctx = createProfileCtx(createRoutedPoints(4), change, pointInd);

            expect(await PointManager.changeProfile({ ctx, geoProfile: BICYCLE, changeOne: true })).toBe(true);

            expect(profiles(ctx)).toEqual([PROFILE_CAR, PROFILE_BICYCLE, PROFILE_CAR, PROFILE_CAR]);
            expect(ctx.selectedGpxFile.points[1].geoProfile).toBe(BICYCLE);
            expect(cached(ctx)).toEqual([[50.01, 50.02, PROFILE_BICYCLE]]);
            const dashed = ctx.selectedGpxFile.layers.getLayers().map((polyline) => !!polyline.options.dashArray);
            expect(dashed).toEqual([false, true, false]);
        }
    });

    test('all segments before or after a point skip the gap, the last point gets the profile for "after" only', async () => {
        const after = createProfileCtx(createGapPoints(5, 1), CHANGE_PROFILE_AFTER, 0);

        await PointManager.changeProfile({ ctx: after, geoProfile: BICYCLE, changeAll: true });

        expect(profiles(after)).toEqual([PROFILE_BICYCLE, GAP, PROFILE_BICYCLE, PROFILE_BICYCLE, PROFILE_BICYCLE]);
        expect(cached(after)).toEqual([
            [50, 50.01, PROFILE_BICYCLE],
            [50.02, 50.03, PROFILE_BICYCLE],
            [50.03, 50.04, PROFILE_BICYCLE],
        ]);

        const before = createProfileCtx(createGapPoints(5, 1), CHANGE_PROFILE_BEFORE, 4);

        await PointManager.changeProfile({ ctx: before, geoProfile: BICYCLE, changeAll: true });

        expect(profiles(before)).toEqual([PROFILE_BICYCLE, GAP, PROFILE_BICYCLE, PROFILE_BICYCLE, PROFILE_CAR]);
    });

    test('the whole track skips the gap and gives the last point the new profile', async () => {
        const ctx = createProfileCtx(createGapPoints(4, 1), CHANGE_PROFILE_ALL);

        expect(await PointManager.changeProfile({ ctx, geoProfile: BICYCLE, changeAll: true })).toBe(true);

        expect(profiles(ctx)).toEqual([PROFILE_BICYCLE, GAP, PROFILE_BICYCLE, PROFILE_BICYCLE]);
        expect(cached(ctx)).toEqual([
            [50, 50.01, PROFILE_BICYCLE],
            [50.02, 50.03, PROFILE_BICYCLE],
        ]);
    });

    test('a recorded piece keeps its profile and geometry', async () => {
        const one = createProfileCtx(createRecordedThenRoutedPoints(), CHANGE_PROFILE_AFTER, 0);
        const recorded = one.selectedGpxFile.points[1].geometry;

        await PointManager.changeProfile({ ctx: one, geoProfile: BICYCLE, changeOne: true });

        expect(profiles(one)).toEqual([PROFILE_LINE, PROFILE_CAR, PROFILE_CAR]);
        expect(one.selectedGpxFile.points[1].geometry).toBe(recorded);
        expect(one.routingCache).toEqual({});

        const whole = createProfileCtx(createRecordedThenRoutedPoints(), CHANGE_PROFILE_ALL);
        const wholeRecorded = whole.selectedGpxFile.points[1].geometry;

        await PointManager.changeProfile({ ctx: whole, geoProfile: BICYCLE, changeAll: true });

        expect(profiles(whole)).toEqual([PROFILE_LINE, PROFILE_BICYCLE, PROFILE_BICYCLE]);
        expect(whole.selectedGpxFile.points[1].geometry).toBe(wholeRecorded);
        expect(cached(whole)).toEqual([[50.01, 50.02, PROFILE_BICYCLE]]);
    });

    test('a track of one point gets the new profile on its point', async () => {
        for (const changeAll of [true, false]) {
            const ctx = createProfileCtx(createRoutedPoints(1), CHANGE_PROFILE_ALL);

            await PointManager.changeProfile({ ctx, geoProfile: BICYCLE, changeOne: !changeAll, changeAll });

            expect(profiles(ctx)).toEqual([PROFILE_BICYCLE]);
            expect(ctx.selectedGpxFile.points[0].geoProfile).toBe(BICYCLE);
        }
    });
});

test('deleteWpt removes the waypoint and asks for a redraw', () => {
    const ctx = createCtx([]);
    ctx.selectedGpxFile.wpts = [{ name: 'a' }, { name: 'b' }];
    ctx.selectedGpxFile.wptChangedFlag = 0;

    PointManager.deleteWpt(0, ctx, true);

    expect(ctx.selectedGpxFile).toMatchObject({
        wpts: [{ name: 'b' }],
        updateLayers: true,
        wptChangedFlag: 1,
        save: true,
    });
    expect(ctx.setTrackState).toHaveBeenCalledWith({ update: true });
});
