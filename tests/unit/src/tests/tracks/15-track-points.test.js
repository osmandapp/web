import PointManager from '@map/manager/PointManager';
import TracksManager, { PROFILE_LINE } from '@map/manager/track/TracksManager';
import TrackLayerProvider from '@map/map/util/TrackLayerProvider';
import { PROFILE_BICYCLE, PROFILE_CAR, PROFILE_PEDESTRIAN } from '@map/store/geoRouter/profileConstants';
import {
    createEditorCtx,
    createEditorPoint,
    createGapPoints,
    createPlainPoints,
    createRecordedGeometry,
    createRecordedThenRoutedPoints,
    createRoutedPoints,
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
        const points = [
            ...createRecordedThenRoutedPoints(),
            createEditorPoint(3, { geometry: [createEditorPoint(2), createEditorPoint(3)] }),
        ];
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
