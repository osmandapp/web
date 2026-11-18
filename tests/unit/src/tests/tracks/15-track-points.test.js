import PointManager from '@map/manager/PointManager';
import TracksManager, { PROFILE_LINE } from '@map/manager/track/TracksManager';
import TrackLayerProvider from '@map/map/util/TrackLayerProvider';
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
