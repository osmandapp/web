import L from 'leaflet';
import { act, createElement } from 'react';
import PointManager from '@map/manager/PointManager';
import { apiGet } from '@map/util/HttpApi';
import { updateRouteBetweenPoints } from '@map/store/geoRouter/legacy/updateRouteBetweenPoints';
import TracksManager, { addDistanceToPoints, PROFILE_LINE, withEditedPoints } from '@map/manager/track/TracksManager';
import { fromHistoryState, toHistoryState } from '@map/manager/track/TrackHistory';
import { getWaitingSegments } from '@map/context/TracksRoutingCache';
import TrackLayerProvider from '@map/map/util/TrackLayerProvider';
import EditableMarker from '@map/map/util/creator/EditableMarker';
import { assignPointIds, isProtectedSegment, isWaitingForRouter, setProfile } from '@map/manager/track/TrackOperations';
import EditablePolyline from '@map/map/util/creator/EditablePolyline';
import { redrawTrackPoints, updateLayers } from '@map/map/util/creator/LocalTrackLayerHelper';
import MarkerOptions from '@map/map/markers/MarkerOptions';
import useUndoRedo from '@map/infoblock/useUndoRedo';
import { updateGroupsVisibility } from '@map/manager/track/TrackAppearanceManager';
import { PROFILE_BICYCLE, PROFILE_CAR, PROFILE_PEDESTRIAN } from '@map/store/geoRouter/profileConstants';
import {
    createEditorCtx,
    createEditorPoint,
    createGapPoints,
    createPlainGapPoints,
    createPlainPoints,
    createRecordedGeometry,
    createRecordedThenRoutedPoints,
    createRoutedPoint,
    createRoutedPoints,
    createRoutedThenRecordedPoints,
    lats,
    createPointsGroups,
    WPT_GROUP,
} from '../../util/fixtures/tracks';
import {
    createDragEvent,
    createDrawnCtx,
    dragPoint,
    drawnLines,
    isAnalysisAsked,
    markerOf,
    map,
    renderCtx,
    routeCached,
} from '../../util/editor';
import { mountRoot } from '../../util/reactRoot';

const GAP = TracksManager.PROFILE_GAP;

const plain = (n) => Array.from({ length: n }, (_, i) => createEditorPoint(i));
const withDistances = (points) => {
    addDistanceToPoints(points);

    return points;
};
const createCtx = (points) => createEditorCtx({ points });

const dashedLines = (ctx) => drawnLines(ctx).filter((line) => line.options.dashArray);
const lineLats = (line) => lats(line.getLatLngs());
const lineTo = (ctx, end) => drawnLines(ctx).find((line) => line.options.pointIds.at(-1) === end.id);
const waitingSegments = (ctx) => getWaitingSegments(ctx.selectedGpxFile.points, ctx.trackRouter);
const waitingPairs = (ctx) => waitingSegments(ctx).map(({ start, end }) => [start.lat, end.lat]);
const askedPairs = (ctx) =>
    ctx.trackRouter.updateRouteBetweenPoints.mock.calls.map(([, start, end]) => [start.lat, end.lat]);

const insertPoint = (ctx, line, lat) => {
    const track = ctx.selectedGpxFile;
    const editable = new EditablePolyline(map, ctx, line);
    editable.currentPolyline = line;
    editable.dragStartNewPoint(createDragEvent({ lat, lng: 30 }), track);

    return editable.dragEndNewPoint(createDragEvent({ lat, lng: 30 }), jest.fn(), track);
};

describe('deletePoint', () => {
    test('the dashed line of a segment goes away with a delete after its end point was copied', async () => {
        const points = createRoutedPoints(4);
        points[3] = { ...points[3], geometry: [] };
        const store = createDrawnCtx(points);
        expect(dashedLines(store).map(lineLats)).toEqual([[50.02, 50.03]]);
        store.selectedGpxFile.points = setProfile(store.selectedGpxFile.points, 3, { profile: PROFILE_BICYCLE });

        await PointManager.deletePoint(2, renderCtx(store));

        expect(dashedLines(store).map(lineLats)).toEqual([[50.01, 50.03]]);
    });

    test('the neighbours of a deleted point are joined, a routed segment is routed again', async () => {
        const first = createCtx(createRoutedPoints(3));
        await PointManager.deletePoint(0, first);
        expect(lats(first.selectedGpxFile.points)).toEqual([50.01, 50.02]);
        expect(first.selectedGpxFile.points[0].geometry).toEqual([]);

        const last = createCtx(createRoutedPoints(3));
        await PointManager.deletePoint(2, last);
        expect(lats(last.selectedGpxFile.points)).toEqual([50, 50.01]);

        const middle = createDrawnCtx(createRoutedPoints(3));
        await PointManager.deletePoint(1, middle);
        expect(lats(middle.selectedGpxFile.points)).toEqual([50, 50.02]);
        // the segment from the first point to the third is routed anew
        expect(middle.selectedGpxFile.points[1].geometry).toEqual([]);
        expect(waitingPairs(middle)).toEqual([[50, 50.02]]);
        expect(dashedLines(middle).map(lineLats)).toEqual([[50, 50.02]]);

        const line = createCtx(plain(3));
        await PointManager.deletePoint(1, line);
        expect(lats(line.selectedGpxFile.points)).toEqual([50, 50.02]);
        expect(waitingPairs(line)).toEqual([]);
    });

    test('a track left without points is emptied', async () => {
        const ctx = createCtx(plain(2));

        await PointManager.deletePoint(1, ctx);
        expect(ctx.setUpdateInfoBlock).toHaveBeenCalledWith(true);

        await PointManager.deletePoint(0, ctx);
        expect(ctx.selectedGpxFile.points).toEqual([]);
        expect(ctx.selectedGpxFile.name).toBe('Local');
        expect(ctx.selectedGpxFile.tracks).toBeUndefined();
    });

    test('a point without a profile is removed alone, nothing is routed', async () => {
        for (const index of [0, 1, 2]) {
            const ctx = createCtx(createPlainPoints(3));

            await PointManager.deletePoint(index, ctx);

            expect(ctx.selectedGpxFile.points).toEqual(
                withDistances(createPlainPoints(3).filter((_, i) => i !== index))
            );
            expect(waitingPairs(ctx)).toEqual([]);
        }
    });

    test('a deleted gap point passes the gap to the previous point, its neighbours are not routed', async () => {
        const ctx = createCtx(createGapPoints(5, 2));

        await PointManager.deletePoint(2, ctx);

        const points = ctx.selectedGpxFile.points;
        expect(lats(points)).toEqual([50, 50.01, 50.03, 50.04]);
        expect(points[1].profile).toBe(GAP);
        expect(points[1].geometry.at(-1).profile).toBe(GAP);
        expect(points[2].geometry).toEqual([]);
        expect(waitingPairs(ctx)).toEqual([]);
    });

    test('a deleted point after a gap stretches the gap to the next point, nothing is routed', async () => {
        const ctx = createCtx(createGapPoints(5, 2));

        await PointManager.deletePoint(3, ctx);

        const points = ctx.selectedGpxFile.points;
        expect(lats(points)).toEqual([50, 50.01, 50.02, 50.04]);
        expect(points[2].profile).toBe(GAP);
        expect(points[3].geometry).toEqual([]);
        expect(waitingPairs(ctx)).toEqual([]);
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
            expect(waitingSegments(ctx).map(({ start, end }) => [start.lat, start.profile, end.lat])).toEqual([
                [50, PROFILE_LINE, 50.02],
            ]);
        }
    });

    test('the first or the last point takes its recorded piece with it', async () => {
        const first = createCtx(createRecordedThenRoutedPoints());

        await PointManager.deletePoint(0, first);

        expect(lats(first.selectedGpxFile.points)).toEqual([50.01, 50.02]);
        expect(first.selectedGpxFile.points[0].geometry).toEqual([]);
        expect(waitingPairs(first)).toEqual([]);

        const routedGeometry = [createEditorPoint(0), createEditorPoint(1)];
        const last = createCtx([
            createEditorPoint(0, { geometry: [] }),
            createEditorPoint(1, { profile: PROFILE_LINE, geometry: routedGeometry }),
            createEditorPoint(2, { geometry: createRecordedGeometry(1, 2) }),
        ]);

        await PointManager.deletePoint(2, last);

        expect(lats(last.selectedGpxFile.points)).toEqual([50, 50.01]);
        expect(last.selectedGpxFile.points[1].geometry).toBe(routedGeometry);
        expect(waitingPairs(last)).toEqual([]);
    });
});

describe('reorder', () => {
    test('a moved point is routed from its new neighbours', async () => {
        const ctx = createCtx(createRoutedPoints(4));

        PointManager.reorder(3, 1, ctx);
        await routeCached(ctx);

        const points = ctx.selectedGpxFile.points;
        expect(lats(points)).toEqual([50, 50.03, 50.01, 50.02]);
        expect(lats(points[1].geometry)).toEqual([50, 50.03]);
        expect(lats(points[2].geometry)).toEqual([50.03, 50.01]);
        expect(lats(points[3].geometry)).toEqual([50.01, 50.02]);
    });

    test('a point moved to the start has no segment leading to it', async () => {
        const ctx = createCtx(createRoutedPoints(3));

        PointManager.reorder(2, 0, ctx);
        await routeCached(ctx);

        const points = ctx.selectedGpxFile.points;
        expect(lats(points)).toEqual([50.02, 50, 50.01]);
        expect(points[0].geometry).toEqual([]);
        expect(lats(points[1].geometry)).toEqual([50.02, 50]);
    });

    test('a point moved from the middle joins its old neighbours by the router and is routed in its new place', async () => {
        const middle = createCtx(createRoutedPoints(5));

        PointManager.reorder(1, 3, middle);
        await routeCached(middle);

        const points = middle.selectedGpxFile.points;
        expect(lats(points)).toEqual([50, 50.02, 50.03, 50.01, 50.04]);
        expect(lats(points[1].geometry)).toEqual([50, 50.02]);
        expect(lats(points[2].geometry)).toEqual([50.02, 50.03]);
        expect(lats(points[3].geometry)).toEqual([50.03, 50.01]);
        expect(lats(points[4].geometry)).toEqual([50.01, 50.04]);

        const end = createCtx(createRoutedPoints(4));

        PointManager.reorder(1, 3, end);
        await routeCached(end);

        expect(lats(end.selectedGpxFile.points)).toEqual([50, 50.02, 50.03, 50.01]);
        expect(lats(end.selectedGpxFile.points[3].geometry)).toEqual([50.03, 50.01]);
    });

    test('the segments around a moved point are routed with the profile of their start point', async () => {
        const profiles = [PROFILE_BICYCLE, PROFILE_CAR, PROFILE_PEDESTRIAN, PROFILE_CAR];
        const mixed = () => createRoutedPoints(4).map((point, i) => ({ ...point, profile: profiles[i] }));
        const routedWith = async (points, from, to) => {
            const ctx = createCtx(points);
            PointManager.reorder(from, to, ctx);
            await routeCached(ctx);

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

        PointManager.reorder(3, 2, ctx);
        await routeCached(ctx);

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

            PointManager.reorder(from, to, ctx);
            await routeCached(ctx);

            expect(ctx.selectedGpxFile.points).toEqual(withDistances(expected));
            expect(ctx.routingCache).toEqual({});
            expect(ctx.trackRouter.updateRouteBetweenPoints).not.toHaveBeenCalled();
        }
    });

    test('a point moved right after a gap starts a new piece, the gap point is not routed to it', async () => {
        const ctx = createCtx(createGapPoints(5, 2));

        PointManager.reorder(4, 3, ctx);
        await routeCached(ctx);

        const points = ctx.selectedGpxFile.points;
        expect(lats(points)).toEqual([50, 50.01, 50.02, 50.04, 50.03]);
        expect(points[3].geometry).toEqual([]);
        expect(lats(points[4].geometry)).toEqual([50.04, 50.03]);
    });

    test('a moved gap point keeps the gap after it in its new place', async () => {
        const ctx = createCtx(createGapPoints(5, 2));

        PointManager.reorder(2, 3, ctx);
        await routeCached(ctx);

        const points = ctx.selectedGpxFile.points;
        expect(lats(points)).toEqual([50, 50.01, 50.03, 50.02, 50.04]);
        expect(points[3].profile).toBe(GAP);
        expect(points[3].geometry.at(-1).profile).toBe(GAP);
        expect(points[4].geometry).toEqual([]);
    });

    test('the point after a gap moved away stretches the gap to the next point, nothing is routed across it', async () => {
        const ctx = createCtx(createGapPoints(5, 2));

        PointManager.reorder(3, 1, ctx);
        await routeCached(ctx);

        const points = ctx.selectedGpxFile.points;
        expect(lats(points)).toEqual([50, 50.03, 50.01, 50.02, 50.04]);
        expect(points[4].geometry).toEqual([]);
        expect(askedPairs(ctx)).toEqual([
            [50, 50.03],
            [50.03, 50.01],
        ]);
    });

    test('a point dropped on its own place changes nothing', async () => {
        const ctx = createCtx(createRoutedPoints(3));

        PointManager.reorder(1, 1, ctx);
        await routeCached(ctx);

        expect(ctx.selectedGpxFile.points).toEqual(createRoutedPoints(3));
        expect(ctx.routingCache).toEqual({});
        expect(ctx.trackRouter.updateRouteBetweenPoints).not.toHaveBeenCalled();
    });

    test('the only point of a track dropped on its own place stays', async () => {
        const ctx = createCtx(createRoutedPoints(1));

        PointManager.reorder(0, 0, ctx);
        await routeCached(ctx);

        expect(ctx.selectedGpxFile.points).toEqual(createRoutedPoints(1));
    });

    test('deletes made before and after the moved point while reorder waits for the router stay', async () => {
        const store = createCtx(createRoutedPoints(7));

        PointManager.reorder(1, 3, renderCtx(store));
        PointManager.deletePoint(0, renderCtx(store));
        PointManager.deletePoint(5, renderCtx(store));
        await routeCached(store);

        const points = store.selectedGpxFile.points;
        expect(lats(points)).toEqual([50.02, 50.03, 50.01, 50.04, 50.05]);
        expect(lats(points[2].geometry)).toEqual([50.03, 50.01]);
        expect(lats(points[3].geometry)).toEqual([50.01, 50.04]);
    });
});

describe('trim', () => {
    test('trim before a middle point removes the points before it, the new first point has no segment', () => {
        const ctx = createDrawnCtx(createRoutedPoints(4));
        const kept = ctx.selectedGpxFile.points[3].geometry;

        PointManager.trimBefore(2, ctx);

        const points = ctx.selectedGpxFile.points;
        expect(lats(points)).toEqual([50.02, 50.03]);
        expect(points[0].geometry).toEqual([]);
        expect(points[1].geometry).toBe(kept);
        expect(drawnLines(ctx).map(lineLats)).toEqual([[50.02, 50.03]]);
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

            expect(ctx.selectedGpxFile.points).toEqual(withDistances(createGapPoints(5, index)));
            expect(ctx.trackRouter.updateRouteBetweenPoints).not.toHaveBeenCalled();
            expect(waitingPairs(ctx)).toEqual([]);
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
});

describe('join', () => {
    const createJoinCtx = () => {
        const points = createGapPoints(4, 1);
        points[2].profile = PROFILE_BICYCLE;

        return createCtx(points);
    };

    test('join across a gap gives the gap point the profile of the next point and removes the gap marker', async () => {
        const ctx = createDrawnCtx(createJoinCtx().selectedGpxFile.points);

        PointManager.join(1, ctx);
        await routeCached(ctx);

        const [, gap, next] = ctx.selectedGpxFile.points;
        expect(gap.profile).toBe(PROFILE_BICYCLE);
        expect(gap.geometry.at(-1).profile).toBeUndefined();
        expect(lats(next.geometry)).toEqual([50.01, 50.02]);
        expect(lineLats(lineTo(ctx, next))).toEqual([50.01, 50.02]);
        expect(ctx.trackState.update).toBe(true);
    });

    test('join across a gap routes the segment with the profile of the next point', async () => {
        const ctx = createJoinCtx();

        PointManager.join(1, ctx);
        await routeCached(ctx);

        expect(ctx.trackRouter.routed.map(({ profile }) => profile)).toEqual([PROFILE_BICYCLE]);
    });

    test('a router answer without points in join leaves a straight line and a message', async () => {
        const ctx = createJoinCtx();
        ctx.setRoutingErrorMsg = jest.fn();
        ctx.trackRouter.getURL = () => 'osrm/';
        ctx.trackRouter.getGeoProfile = () => ({ type: 'osrm', profile: PROFILE_BICYCLE });
        ctx.trackRouter.updateRouteBetweenPoints = updateRouteBetweenPoints;
        apiGet.mockResolvedValue({ ok: true, json: async () => ({ routes: [] }) });

        PointManager.join(1, ctx);
        await routeCached(ctx);

        expect(lats(ctx.selectedGpxFile.points[2].geometry)).toEqual([50.01, 50.02]);
        expect(ctx.setRoutingErrorMsg).toHaveBeenCalledWith('Router error, Line used');
    });

    test('a router error in join leaves a straight line and a message', async () => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
        const ctx = createJoinCtx();
        ctx.setRoutingErrorMsg = jest.fn();
        ctx.trackRouter.updateRouteBetweenPoints.mockRejectedValueOnce(new Error('no route'));

        PointManager.join(1, ctx);
        await routeCached(ctx);

        expect(lats(ctx.selectedGpxFile.points[2].geometry)).toEqual([50.01, 50.02]);
        expect(ctx.setRoutingErrorMsg).toHaveBeenCalled();
    });

    test('a join next to recorded pieces keeps their geometry', async () => {
        const before = createCtx(createRecordedThenRoutedPoints(4));
        PointManager.split(1, before);

        PointManager.join(1, before);
        await routeCached(before);

        const [recordedStart, gap] = before.selectedGpxFile.points;
        expect(lats(gap.geometry)).toEqual(lats(createRecordedGeometry(0, 1)));
        expect(isProtectedSegment({ startPoint: recordedStart, endPoint: gap })).toBe(true);

        const after = createCtx(createRoutedThenRecordedPoints(2));
        const recorded = after.selectedGpxFile.points[3].geometry;
        PointManager.split(1, after);

        PointManager.join(1, after);
        await routeCached(after);

        const [, , afterNext, recordedEnd] = after.selectedGpxFile.points;
        expect(recordedEnd.geometry).toBe(recorded);
        expect(isProtectedSegment({ startPoint: afterNext, endPoint: recordedEnd })).toBe(true);
    });

    test('a trim and a delete made while join waits for the router stay', async () => {
        const store = createCtx(createGapPoints(5, 1));

        PointManager.join(1, renderCtx(store));
        PointManager.trimAfter(3, renderCtx(store));
        PointManager.deletePoint(3, renderCtx(store));
        await routeCached(store);

        const points = store.selectedGpxFile.points;
        expect(lats(points)).toEqual([50, 50.01, 50.02]);
        expect(lats(points[2].geometry)).toEqual([50.01, 50.02]);
    });

    test('the segment of join is routed with the new params of its profile when they change meanwhile', async () => {
        const store = createDrawnCtx(createGapPoints(4, 1));
        const getGeoProfile = store.trackRouter.getGeoProfile;

        PointManager.join(1, renderCtx(store));
        store.trackRouter.getGeoProfile = (point) => ({ ...getGeoProfile(point), cacheKey: 'other params' });
        await routeCached(store);
        await routeCached(store);

        expect(lats(store.selectedGpxFile.points[2].geometry)).toEqual([50.01, 50.02]);
        const askedParams = store.trackRouter.updateRouteBetweenPoints.mock.calls.map(([, , , geo]) => geo.cacheKey);
        expect(askedParams).toEqual(['other params']);
    });

    test('the route line that lands after a join or a delete takes new points', async () => {
        for (const [points, operation, end] of [
            [createGapPoints(4, 1), (ctx) => PointManager.join(1, ctx), 2],
            [createRoutedPoints(4), (ctx) => PointManager.deletePoint(1, ctx), 1],
        ]) {
            const store = createDrawnCtx(points);

            operation(renderCtx(store));
            const endId = store.selectedGpxFile.points[end].id;
            await routeCached(store);

            const landed = lineTo(store, { id: endId });
            expect(!!landed.options.dashArray).toBe(false);
            expect(landed.listens('mousemove')).toBe(true);
        }
    });

    test('a marker dragged while join waits for the router keeps the join', async () => {
        const store = createDrawnCtx(createGapPoints(5, 1));
        const layer = markerOf(store, store.selectedGpxFile.points[4]);
        store.setSelectedGpxFile({ ...store.selectedGpxFile });

        PointManager.join(1, renderCtx(store));
        layer.fire('dragstart');
        layer.setLatLng({ lat: 50.045, lng: 30 });
        layer.fire('dragend');
        await routeCached(store);

        const points = store.selectedGpxFile.points;
        expect(lats(points)).toEqual([50, 50.01, 50.02, 50.03, 50.045]);
        expect(points[1].profile).not.toBe(GAP);
        expect(lats(points[2].geometry)).toEqual([50.01, 50.02]);
    });
});

describe('changeProfile', () => {
    const BICYCLE = { profile: PROFILE_BICYCLE };
    const { CHANGE_PROFILE_AFTER, CHANGE_PROFILE_ALL, CHANGE_PROFILE_BEFORE } = TracksManager;

    const createProfileCtx = (points, change, pointInd) => {
        const ctx = createDrawnCtx(points);
        ctx.trackProfileManager = { change, pointInd };

        return ctx;
    };
    const profiles = (ctx) => ctx.selectedGpxFile.points.map((point) => point.profile);
    const waitingWithProfile = (ctx) =>
        waitingSegments(ctx).map(({ start, end, geoProfile }) => [start.lat, end.lat, geoProfile.profile]);

    test('one segment before or after a point gets the new profile on its start point and is routed again', async () => {
        for (const [change, pointInd] of [
            [CHANGE_PROFILE_AFTER, 1],
            [CHANGE_PROFILE_BEFORE, 2],
        ]) {
            const ctx = createProfileCtx(createRoutedPoints(4), change, pointInd);

            expect(await PointManager.changeProfile({ ctx, geoProfile: BICYCLE, changeOne: true })).toBe(true);

            expect(profiles(ctx)).toEqual([PROFILE_CAR, PROFILE_BICYCLE, PROFILE_CAR, PROFILE_CAR]);
            expect(ctx.selectedGpxFile.points[1].geoProfile).toBe(BICYCLE);
            expect(waitingWithProfile(ctx)).toEqual([[50.01, 50.02, PROFILE_BICYCLE]]);
            const dashed = drawnLines(ctx).map((line) => !!line.options.dashArray);
            expect(dashed).toEqual([false, true, false]);
        }
    });

    test('all segments before or after a point skip the gap, the last point gets the profile for "after" only', async () => {
        const after = createProfileCtx(createGapPoints(5, 1), CHANGE_PROFILE_AFTER, 0);

        await PointManager.changeProfile({ ctx: after, geoProfile: BICYCLE, changeAll: true });

        expect(profiles(after)).toEqual([PROFILE_BICYCLE, GAP, PROFILE_BICYCLE, PROFILE_BICYCLE, PROFILE_BICYCLE]);
        expect(waitingWithProfile(after)).toEqual([
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
        expect(waitingWithProfile(ctx)).toEqual([
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
        expect(waitingPairs(one)).toEqual([]);

        const whole = createProfileCtx(createRecordedThenRoutedPoints(), CHANGE_PROFILE_ALL);
        const wholeRecorded = whole.selectedGpxFile.points[1].geometry;

        await PointManager.changeProfile({ ctx: whole, geoProfile: BICYCLE, changeAll: true });

        expect(profiles(whole)).toEqual([PROFILE_LINE, PROFILE_BICYCLE, PROFILE_BICYCLE]);
        expect(whole.selectedGpxFile.points[1].geometry).toBe(wholeRecorded);
        expect(waitingWithProfile(whole)).toEqual([[50.01, 50.02, PROFILE_BICYCLE]]);
    });

    test('a profile change of the next segments reports that the track has changed', async () => {
        const ctx = createProfileCtx(createRoutedPoints(3), CHANGE_PROFILE_ALL);

        expect(await PointManager.changeProfile({ ctx, geoProfile: BICYCLE, changeOne: true })).toBe(true);
    });

    test('a profile change leaves the changed segment waiting for the router, so a track saved meanwhile is routed again', async () => {
        const ctx = createProfileCtx(createRoutedPoints(4), CHANGE_PROFILE_AFTER, 1);

        await PointManager.changeProfile({ ctx, geoProfile: BICYCLE, changeOne: true });

        const points = ctx.selectedGpxFile.points;
        expect(points.map((point, index) => isWaitingForRouter(points, index))).toEqual([false, false, true, false]);
    });

    test('a point dragged after a profile change keeps the new profile', async () => {
        const store = createProfileCtx(createRoutedPoints(5), CHANGE_PROFILE_AFTER, 1);
        const layer = markerOf(store, store.selectedGpxFile.points[3]);
        store.setSelectedGpxFile({ ...store.selectedGpxFile });

        await PointManager.changeProfile({ ctx: renderCtx(store), geoProfile: BICYCLE, changeOne: true });
        layer.fire('dragstart');
        layer.setLatLng({ lat: 50.035, lng: 30 });
        layer.fire('dragend');

        expect(lats(store.selectedGpxFile.points)).toEqual([50, 50.01, 50.02, 50.035, 50.04]);
        expect(profiles(store)).toEqual([PROFILE_CAR, PROFILE_BICYCLE, PROFILE_CAR, PROFILE_CAR, PROFILE_CAR]);
    });

    test('a point dropped on the route of a plain line rerouted by a profile change is put into the track', async () => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
        const store = createProfileCtx(createPlainPoints(2).map((point) => ({ ...point, profile: PROFILE_LINE })));
        store.trackProfileManager = { change: CHANGE_PROFILE_ALL };
        const route = [
            createEditorPoint(0),
            { lat: 50.004, lng: 30.001 },
            { lat: 50.008, lng: 30.001 },
            createEditorPoint(1),
        ];
        store.trackRouter.updateRouteBetweenPoints.mockResolvedValueOnce({ points: route });

        await PointManager.changeProfile({ ctx: store, geoProfile: BICYCLE, changeAll: true });
        await routeCached(store);
        const line = lineTo(store, store.selectedGpxFile.points[1]);
        expect(lineLats(line)).toHaveLength(4);
        await insertPoint(store, line, 50.009);

        expect(lats(store.selectedGpxFile.points)).toEqual([50, 50.009, 50.01]);
    });

    test('a track of one point gets the new profile on its point', async () => {
        for (const changeAll of [true, false]) {
            const ctx = createProfileCtx(createRoutedPoints(1), CHANGE_PROFILE_ALL);

            await PointManager.changeProfile({ ctx, geoProfile: BICYCLE, changeOne: !changeAll, changeAll });

            expect(profiles(ctx)).toEqual([PROFILE_BICYCLE]);
            expect(ctx.selectedGpxFile.points[0].geoProfile).toBe(BICYCLE);
        }
    });

    test('points of the Line profile without geometry are routed with the new profile', async () => {
        const line = createPlainPoints(3).map((point) => ({ ...point, profile: PROFILE_LINE }));
        const ctx = createProfileCtx(line, CHANGE_PROFILE_ALL);

        await PointManager.changeProfile({ ctx, geoProfile: BICYCLE, changeAll: true });

        expect(profiles(ctx)).toEqual([PROFILE_BICYCLE, PROFILE_BICYCLE, PROFILE_BICYCLE]);
        expect(waitingWithProfile(ctx)).toEqual([
            [50, 50.01, PROFILE_BICYCLE],
            [50.01, 50.02, PROFILE_BICYCLE],
        ]);
    });
});

describe('drag a point', () => {
    test('the first point of a new track is moved while the track has no layers yet', () => {
        const store = createDrawnCtx(createRoutedPoints(1));
        const track = store.selectedGpxFile;
        const layer = markerOf(store, track.points[0]);
        track.layers = undefined;

        layer.fire('dragstart');
        layer.setLatLng({ lat: 50.005, lng: 30 });
        layer.fire('dragend');

        expect(lats(store.selectedGpxFile.points)).toEqual([50.005]);
    });

    test('a plain point is moved in its line, its elevation is dropped and the analysis is asked again', () => {
        const ctx = createDrawnCtx(createPlainPoints(3).map((point) => ({ ...point, ele: 100 })));
        ctx.selectedGpxFile.analysisPoints = ctx.selectedGpxFile.points;

        dragPoint(ctx, 1, 50.015);

        const [line] = drawnLines(ctx);
        expect(lineLats(line)).toEqual([50, 50.015, 50.02]);
        expect(ctx.selectedGpxFile.points[1].ele).toBeUndefined();
        expect(isAnalysisAsked(ctx)).toBe(true);
        expect(waitingPairs(ctx)).toEqual([]);
    });

    test('a plain point of the first segment of a plain track is moved in its line', () => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
        const ctx = createDrawnCtx(createPlainGapPoints(4, 1));

        dragPoint(ctx, 0, 49.995);

        const [firstSegment] = drawnLines(ctx);
        expect(lineLats(firstSegment)).toEqual([49.995, 50.01]);
    });

    test('a routed point sends both of its segments to the router as dashed lines', () => {
        const ctx = createDrawnCtx(createRoutedPoints(3));

        dragPoint(ctx, 1, 50.015);

        const points = ctx.selectedGpxFile.points;
        expect(points[1].lat).toBe(50.015);
        expect(points[1].geometry).toEqual([]);
        expect(points[2].geometry).toEqual([]);
        expect(waitingPairs(ctx)).toEqual([
            [50, 50.015],
            [50.015, 50.02],
        ]);
        expect(drawnLines(ctx).map((line) => !!line.options.dashArray)).toEqual([true, true]);
        expect(ctx.trackState.update).toBe(true);
    });

    test('a segment with the Line profile moves its end vertex and is not routed', () => {
        const lineBefore = createDrawnCtx([
            createEditorPoint(0, { profile: PROFILE_LINE, geometry: [] }),
            createRoutedPoint(1),
            createRoutedPoint(2),
        ]);

        dragPoint(lineBefore, 1, 50.015);

        expect(lats(lineBefore.selectedGpxFile.points[1].geometry)).toEqual([50, 50.015]);
        expect(waitingPairs(lineBefore)).toEqual([[50.015, 50.02]]);

        const lineAfter = createDrawnCtx([
            createEditorPoint(0, { geometry: [] }),
            createRoutedPoint(1, { profile: PROFILE_LINE }),
            createRoutedPoint(2),
        ]);

        dragPoint(lineAfter, 1, 50.015);

        expect(lats(lineAfter.selectedGpxFile.points[2].geometry)).toEqual([50.015, 50.02]);
        expect(waitingPairs(lineAfter)).toEqual([[50, 50.015]]);
    });

    test('a recorded piece keeps its points and gets the dragged point as its last vertex', () => {
        const ctx = createDrawnCtx(createRecordedThenRoutedPoints());
        const recorded = lats(ctx.selectedGpxFile.points[1].geometry);

        dragPoint(ctx, 1, 50.012);

        const points = ctx.selectedGpxFile.points;
        expect(lats(points[1].geometry)).toEqual([...recorded.slice(0, -1), 50.012]);
        expect(isProtectedSegment({ startPoint: points[0], endPoint: points[1] })).toBe(true);
        expect(waitingPairs(ctx)).toEqual([[50.012, 50.02]]);
    });

    test('the gap side of a dragged point stays untouched', () => {
        const afterGap = createDrawnCtx(createGapPoints(4, 1));

        dragPoint(afterGap, 2, 50.025);

        expect(afterGap.selectedGpxFile.points[2].geometry).toEqual([]);
        expect(waitingPairs(afterGap)).toEqual([[50.025, 50.03]]);

        const gap = createDrawnCtx(createGapPoints(4, 1));

        dragPoint(gap, 1, 50.015);

        expect(gap.selectedGpxFile.points[1].profile).toBe(GAP);
        expect(gap.selectedGpxFile.points[2].geometry).toEqual([]);
        expect(waitingPairs(gap)).toEqual([[50, 50.015]]);
    });

    test('the first and the last point have one segment to route', () => {
        const first = createDrawnCtx(createRoutedPoints(3));

        dragPoint(first, 0, 49.995);

        expect(first.selectedGpxFile.points[0].geometry).toEqual([]);
        expect(waitingPairs(first)).toEqual([[49.995, 50.01]]);

        const last = createDrawnCtx(createRoutedPoints(3));

        dragPoint(last, 2, 50.025);

        expect(waitingPairs(last)).toEqual([[50.01, 50.025]]);
    });

    test('a dragged waypoint gets its new place, the route points stay', () => {
        const ctx = createDrawnCtx(createRoutedPoints(2));
        const track = ctx.selectedGpxFile;
        track.wpts = [{ lat: 50.005, lon: 30.001, name: 'wpt' }];
        const marker = new EditableMarker(null, ctx);

        marker.dragStartPoint(createDragEvent({ lat: 50.005, lng: 30.001 }), track);
        marker.dragEndPoint(createDragEvent({ lat: 50.006, lng: 30.002 }), track);

        expect(track.wpts[0]).toMatchObject({ lat: 50.006, lon: 30.002 });
        const ids = ctx.selectedGpxFile.points.map(({ id }) => id);
        expect(ctx.selectedGpxFile.points).toEqual(
            withDistances(createRoutedPoints(2).map((point, i) => ({ ...point, id: ids[i] })))
        );
        expect(waitingPairs(ctx)).toEqual([]);
    });

    test('a marker being dragged stays on the map while a router answer redraws the track', async () => {
        const points = createRoutedPoints(4);
        points[3] = { ...points[3], geometry: [] };
        const store = createDrawnCtx(points);
        const point = store.selectedGpxFile.points[1];
        const marker = markerOf(store, point);

        marker.fire('dragstart');
        marker.setLatLng({ lat: 50.015, lng: 30 });
        await routeCached(store);

        expect(dashedLines(store)).toEqual([]);
        expect(markerOf(store, point)).toBe(marker);
        marker.fire('dragend');
        expect(lats(store.selectedGpxFile.points)).toEqual([50, 50.015, 50.02, 50.03]);
    });
});

describe('insert a point from the line', () => {
    test('a point dropped on a line drawn before a new point was added keeps the new point', async () => {
        const store = createDrawnCtx(createRoutedPoints(3));
        const [line] = drawnLines(store);
        const editable = new EditablePolyline(map, store, line);
        editable.create();
        const added = { ...createRoutedPoint(3), id: 'added' };
        store.setSelectedGpxFile({ ...store.selectedGpxFile, points: [...store.selectedGpxFile.points, added] });

        editable.currentPolyline = line;
        editable.dragStartNewPoint(createDragEvent({ lat: 50.005, lng: 30 }), store.selectedGpxFileRef.current);
        await editable.dragEndNewPoint(
            createDragEvent({ lat: 50.005, lng: 30 }),
            jest.fn(),
            store.selectedGpxFileRef.current
        );

        expect(lats(store.selectedGpxFile.points)).toEqual([50, 50.005, 50.01, 50.02, 50.03]);
    });

    test('a point dropped on a plain line goes into the line and into the points at its place', async () => {
        const ctx = createDrawnCtx(createPlainPoints(4));
        ctx.selectedGpxFile.analysisPoints = ctx.selectedGpxFile.points;
        await insertPoint(ctx, drawnLines(ctx)[0], 50.015);

        expect(lats(ctx.selectedGpxFile.points)).toEqual([50, 50.01, 50.015, 50.02, 50.03]);
        const [line] = drawnLines(ctx);
        expect(lineLats(line)).toEqual([50, 50.01, 50.015, 50.02, 50.03]);
        expect(isAnalysisAsked(ctx)).toBe(true);
    });

    test('a point dropped on the second segment of a plain track goes into that line at its place', async () => {
        const ctx = createDrawnCtx(createPlainGapPoints(5, 1));
        await insertPoint(ctx, drawnLines(ctx)[1], 50.035);

        const [, secondSegment] = drawnLines(ctx);
        expect(lineLats(secondSegment)).toEqual([50.02, 50.03, 50.035, 50.04]);
    });

    test('a point dropped on a routed line takes the profile of the previous point, both new segments are routed', async () => {
        const routed = createRoutedPoints(3);
        routed[1].profile = PROFILE_BICYCLE;
        const ctx = createDrawnCtx(routed);
        const [, segment] = drawnLines(ctx);

        await insertPoint(ctx, segment, 50.015);

        const points = ctx.selectedGpxFile.points;
        expect(lats(points)).toEqual([50, 50.01, 50.015, 50.02]);
        expect(points[2]).toMatchObject({ profile: PROFILE_BICYCLE, geometry: [] });
        expect(points[3].geometry).toEqual([]);
        expect(dashedLines(ctx).map(lineLats)).toEqual([
            [50.01, 50.015],
            [50.015, 50.02],
        ]);
        expect(waitingPairs(ctx)).toEqual([
            [50.01, 50.015],
            [50.015, 50.02],
        ]);
    });

    test('a point is dragged out of a solid line, a dashed line waiting for the router gives none', () => {
        const points = createRoutedPoints(3);
        points[2] = { ...points[2], geometry: [] };

        const [routed, waiting] = drawnLines(createDrawnCtx(points));

        expect(routed.listens('mousemove')).toBe(true);
        expect(waiting.listens('mousemove')).toBe(false);
    });

    test('a point dragged out of a line goes into the track after the editor has drawn the track anew', async () => {
        const ctx = createDrawnCtx(createPlainPoints(3));
        const track = ctx.selectedGpxFile;
        const [line] = drawnLines(ctx);
        const editable = new EditablePolyline(map, ctx, line);
        editable.currentPolyline = line;
        const view = { ...map, eachLayer: () => {}, addLayer: () => {} };

        updateLayers({ map: view, ctx, ctxTrack: track, points: track.points, trackLayers: track.layers });
        expect(drawnLines(ctx)).not.toContain(line);
        editable.dragStartNewPoint(createDragEvent({ lat: 50.015, lng: 30 }), track);
        await editable.dragEndNewPoint(createDragEvent({ lat: 50.015, lng: 30 }), jest.fn(), track);

        expect(lats(ctx.selectedGpxFile.points)).toEqual([50, 50.01, 50.015, 50.02]);
    });

    test('the nearest segment of a line is the one the point lies on', () => {
        const segments = createPlainPoints(4);

        const nearest = new EditablePolyline(map, createCtx([])).findTheNearestSegment({
            point: { lat: 50.025, lng: 30 },
            segments,
        });

        expect(nearest.index).toBe(2);
        expect([nearest.start.lat, nearest.end.lat]).toEqual([50.02, 50.03]);
    });

    test('no line is drawn across a gap, imported or split, so no point can be dropped there', () => {
        for (const points of [createGapPoints(4, 1), createPlainGapPoints(4, 1)]) {
            const lines = drawnLines(createDrawnCtx(points)).map((line) => lats(line.getLatLngs()));

            expect(lines).not.toContainEqual(expect.arrayContaining([50.01, 50.02]));
        }
    });
});

describe('the menu of a point', () => {
    const offered = (points, index) =>
        Object.entries(PointManager.getPointMenuItems(points, index))
            .filter(([, shown]) => shown)
            .map(([item]) => item);

    test('a routed track offers trim, split and profile by the place of the point', () => {
        const points = createRoutedPoints(5);

        expect([0, 1, 2, 3, 4].map((index) => offered(points, index))).toEqual([
            ['trimAfter', 'profileAfter'],
            ['trimBefore', 'profileBefore', 'trimAfter', 'splitAfter', 'profileAfter'],
            ['trimBefore', 'splitBefore', 'profileBefore', 'trimAfter', 'splitAfter', 'profileAfter'],
            ['trimBefore', 'splitBefore', 'profileBefore', 'trimAfter', 'profileAfter'],
            ['trimBefore', 'profileBefore'],
        ]);
    });

    test('next to a gap only join goes across it, trim and split stay away from it', () => {
        const points = createGapPoints(5, 2);

        expect([1, 2, 3].map((index) => offered(points, index))).toEqual([
            ['trimBefore', 'profileBefore', 'trimAfter', 'profileAfter'],
            ['profileBefore', 'joinAfter'],
            ['joinBefore', 'profileAfter'],
        ]);
    });

    test('split and profile are not offered on a recorded piece', () => {
        const points = [...createRoutedThenRecordedPoints(), createRoutedPoint(3)];

        expect(PointManager.getPointMenuItems(points, 1)).toMatchObject({ splitAfter: false, profileAfter: false });
        expect(PointManager.getPointMenuItems(points, 2)).toMatchObject({ splitBefore: false, profileBefore: false });
    });
});

describe('drawing in the editor', () => {
    const WORLD = L.latLngBounds([-90, -180], [90, 180]);

    const draw = (points, { zoom = 15, bounds = WORLD } = {}) => {
        const ctx = createCtx(assignPointIds(points));
        ctx.trackRouter.getColor = ({ profile }) => profile;
        const view = { ...map, getZoom: () => zoom, getBounds: () => bounds };
        const trackLayers = L.featureGroup();
        redrawTrackPoints({ map: view, ctx, points: ctx.selectedGpxFile.points, trackLayers });

        return trackLayers.getLayers();
    };
    const markers = (layers) => layers.filter((layer) => layer instanceof L.Marker);
    const lines = (layers) => layers.filter((layer) => layer instanceof L.Polyline);

    test('every point in view has a marker, a track of more than 1000 points shows every 30th below zoom 17', () => {
        const big = createPlainPoints(1001);

        expect(markers(draw(createPlainPoints(1000), { zoom: 16 }))).toHaveLength(1000);
        expect(lats(markers(draw(big, { zoom: 16 })).map((marker) => marker.getLatLng()))).toEqual(
            lats(big.filter((_, i) => i % 30 === 0))
        );
        expect(markers(draw(big, { zoom: 17 }))).toHaveLength(1001);
        expect(markers(draw(createPlainPoints(3), { bounds: L.latLngBounds([0, 0], [1, 1]) }))).toEqual([]);
    });

    test('a line has the color of the profile of its start point, a plain run the color of Line', () => {
        const profiles = [PROFILE_CAR, PROFILE_BICYCLE, PROFILE_PEDESTRIAN, PROFILE_CAR];
        const routed = createRoutedPoints(4).map((point, i) => ({ ...point, profile: profiles[i] }));

        expect(lines(draw(routed)).map((line) => line.options.color)).toEqual(profiles.slice(0, 3));
        expect(lines(draw(createPlainPoints(3))).map((line) => line.options.color)).toEqual([PROFILE_LINE]);
    });

    test('a segment waiting for the router is a dashed line from its start point', () => {
        const points = createRoutedPoints(3);
        points[2].geometry = [];

        const [routed, waiting] = lines(draw(points));

        expect(routed.options.dashArray).toBeFalsy();
        expect(waiting.options.dashArray).toBeTruthy();
        expect(lats(waiting.getLatLngs())).toEqual([50.01, 50.02]);
    });

    test('the edited track has no start and finish markers, a track shown on the map has them', () => {
        const points = createRoutedPoints(3);
        const icons = (layers) => markers(layers).map((marker) => marker.options.icon);
        const view = { ...map, getBounds: () => WORLD, getCenter: () => L.latLng(50, 30) };

        const shown = TrackLayerProvider.createLayersByTrackData({
            data: { name: 'Track', tracks: [{ points }] },
            ctx: createCtx(points),
            map: view,
        });

        expect(icons(draw(points)).every((icon) => icon === MarkerOptions.options.route)).toBe(true);
        expect(icons(shown.getLayers())).toEqual(
            expect.arrayContaining([MarkerOptions.options.trackStart, MarkerOptions.options.trackEnd])
        );
    });

    describe('a track shown on the map', () => {
        const view = { ...map, getBounds: () => WORLD, getCenter: () => L.latLng(50, 30) };
        const show = (data) => {
            const ctx = createCtx([]);
            ctx.trackRouter.getColor = ({ profile }) => profile;

            return TrackLayerProvider.createLayersByTrackData({ data: { name: 'Track', ...data }, ctx, map: view });
        };
        const shownLines = (layers) => lines(layers.getLayers()).filter((line) => line.getLatLngs().length > 0);
        const drawnPieces = (layers) =>
            shownLines(layers).map((line) => [lats(line.getLatLngs()), !!line.options.dashArray]);
        const ICON_NAMES = new Map([
            [MarkerOptions.options.trackStart, 'start'],
            [MarkerOptions.options.trackEnd, 'finish'],
        ]);
        const flags = (layers) =>
            markers(layers.getLayers())
                .map((marker) => [marker.getLatLng().lat, ICON_NAMES.get(marker.options.icon)])
                .sort(([a], [b]) => a - b);

        test('a gap ends one piece and starts the next, a segment waiting for the router is dashed', () => {
            const routed = createGapPoints(5, 2);
            routed[4].geometry = [];
            const shownRouted = show({ tracks: [{ points: routed }] });

            expect(drawnPieces(shownRouted)).toEqual([
                [[50, 50.01], false],
                [[50.01, 50.02], false],
                [[50.03, 50.04], true],
            ]);
            expect(flags(shownRouted)).toEqual([
                [50, 'start'],
                [50.02, 'finish'],
                [50.03, 'start'],
                [50.04, 'finish'],
            ]);

            const shownPlain = show({ tracks: [{ points: createPlainGapPoints(5, 1) }] });

            expect(drawnPieces(shownPlain)).toEqual([
                [[50, 50.01], false],
                [[50.02, 50.03, 50.04], false],
            ]);
            expect(flags(shownPlain)).toEqual([
                [50, 'start'],
                [50.01, 'finish'],
                [50.02, 'start'],
                [50.04, 'finish'],
            ]);
        });

        test('the lines take the color of the appearance of the track, start and finish can be turned off', () => {
            const points = createRoutedPoints(3);

            const shown = show({ tracks: [{ points }], info: { color: '#ff0000', show_start_finish: false } });

            expect(shownLines(shown).map((line) => line.options.color)).toEqual(['rgb(255 0 0)', 'rgb(255 0 0)']);
            expect(flags(shown)).toEqual([]);
            expect(flags(show({ tracks: [{ points }] }))).toEqual([
                [50, 'start'],
                [50.02, 'finish'],
            ]);
        });
    });

    test('the line weight follows the zoom', () => {
        const weights = [10, 13, 15, 17].map((zoom) => lines(draw(createRoutedPoints(2), { zoom }))[0].options.weight);

        expect(weights).toEqual([2, 5, 6, 7]);
    });

    test('a point picked in the Track tab gets a pointer on the map, the previous pointer goes away', () => {
        const view = { addLayer: jest.fn(), removeLayer: jest.fn() };
        let selected = null;
        const pick = (i) =>
            TracksManager.showSelectedPointOnMap(
                { name: 'Local', showPoint: createEditorPoint(i) },
                view,
                selected,
                (marker) => (selected = marker)
            );

        pick(1);
        const first = selected.marker;
        pick(2);

        expect(view.removeLayer).toHaveBeenCalledWith(first);
        expect(selected.marker.getLatLng().lat).toBe(50.02);
    });
});

describe('the waypoints of the edited track', () => {
    const createWpts = () => [{ lat: 50.005, lon: 30.001, name: 'wpt', category: WPT_GROUP }];

    test('a hidden group hides its waypoints in the editor and is kept in the info of the track', () => {
        const ctx = createDrawnCtx(createRoutedPoints(2));
        ctx.createTrack = { enable: true };
        ctx.selectedGpxFile.pointsGroups = createPointsGroups();
        ctx.localTracks = [ctx.selectedGpxFile];
        const view = {
            ...map,
            eachLayer: () => {},
            addLayer: () => {},
            getBounds: () => ({ contains: () => true }),
            getCenter: () => L.latLng(50, 30),
        };

        updateGroupsVisibility(ctx, [WPT_GROUP], true, { current: null });
        const drawn = updateLayers({
            map: view,
            ctx,
            localLayers: {},
            ctxTrack: ctx.selectedGpxFile,
            points: ctx.selectedGpxFile.points,
            wpts: [WPT_GROUP, 'Other group'].map((category) => ({ lat: 50, lon: 30, name: category, category })),
            trackLayers: L.featureGroup(),
        });

        expect(ctx.selectedGpxFile.updateLayers).toBe(true);
        expect(ctx.selectedGpxFile.info.pointsGroups[WPT_GROUP].hidden).toBe(true);
        expect(
            drawn
                .getLayers()
                .filter((layer) => layer.options.wpt)
                .map((layer) => layer.options.category)
        ).toEqual(['Other group']);
    });

    test('the point operations keep the waypoints and their groups', async () => {
        for (const [points, operate] of [
            [createRoutedPoints(4), (ctx) => PointManager.deletePoint(1, ctx)],
            [createRoutedPoints(4), (ctx) => PointManager.reorder(1, 2, ctx)],
            [createRoutedPoints(4), (ctx) => PointManager.trimBefore(1, ctx)],
            [createRoutedPoints(4), (ctx) => PointManager.trimAfter(1, ctx)],
            [createRoutedPoints(4), (ctx) => PointManager.split(1, ctx)],
            [createGapPoints(4, 1), (ctx) => PointManager.join(1, ctx)],
            [createRoutedPoints(4), (ctx) => dragPoint(ctx, 1, 50.015)],
            [createRoutedPoints(4), (ctx) => insertPoint(ctx, drawnLines(ctx)[1], 50.015)],
        ]) {
            const ctx = createDrawnCtx(points);
            Object.assign(ctx.selectedGpxFile, { wpts: createWpts(), pointsGroups: createPointsGroups() });

            await operate(ctx);

            expect(ctx.selectedGpxFile.wpts).toEqual(createWpts());
            expect(ctx.selectedGpxFile.pointsGroups).toEqual(createPointsGroups());
        }
    });

    test('clearing the waypoints drops their groups too and asks for a snapshot', () => {
        const ctx = createCtx([]);
        Object.assign(ctx.selectedGpxFile, { wpts: createWpts(), pointsGroups: createPointsGroups() });

        PointManager.deleteAllWpts(ctx);

        expect(ctx.selectedGpxFile.wpts).toEqual([]);
        expect(ctx.selectedGpxFile.pointsGroups).toEqual({});
        expect(ctx.selectedGpxFile).toMatchObject({ updateLayers: true, wptChangedFlag: 1 });
        expect(ctx.trackState.update).toBe(true);
    });

    test('deleting the last point keeps the waypoints, their groups and the saved fields of the track', async () => {
        const ctx = createCtx(createRoutedPoints(1));
        const metaData = { name: 'Local', desc: 'About the track' };
        Object.assign(ctx.selectedGpxFile, {
            id: 'Local',
            metaData,
            routeTypes: [{ tag: 'highway', value: 'primary' }],
            wpts: createWpts(),
            pointsGroups: createPointsGroups(),
            ext: { color: '#ff0000' },
            info: { color: '#ff0000', width: '3' },
            trkExt: { name: 'Morning ride' },
            originalName: 'Local.gpx',
            selected: true,
        });

        await PointManager.deletePoint(0, ctx);

        expect(ctx.selectedGpxFile.wpts).toEqual(createWpts());
        expect(ctx.selectedGpxFile.pointsGroups).toEqual(createPointsGroups());
        expect(ctx.selectedGpxFile).toMatchObject({
            id: 'Local',
            metaData: { name: 'Local', desc: 'About the track' },
            routeTypes: [{ tag: 'highway', value: 'primary' }],
            ext: { color: '#ff0000' },
            info: { color: '#ff0000', width: '3' },
            trkExt: { name: 'Morning ride' },
            originalName: 'Local.gpx',
            selected: true,
        });
    });
});

describe('the history of the editor', () => {
    test('every point operation asks for a snapshot', async () => {
        for (const [points, operate] of [
            [createRoutedPoints(4), (ctx) => PointManager.trimBefore(1, ctx)],
            [createRoutedPoints(4), (ctx) => PointManager.trimAfter(1, ctx)],
            [createRoutedPoints(4), (ctx) => PointManager.split(1, ctx)],
            [createGapPoints(4, 1), (ctx) => PointManager.join(1, ctx)],
            [createRoutedPoints(4), (ctx) => PointManager.reorder(1, 2, ctx)],
            [createRoutedPoints(4), (ctx) => dragPoint(ctx, 1, 50.015)],
            [createRoutedPoints(4), (ctx) => insertPoint(ctx, drawnLines(ctx)[1], 50.015)],
            [createRoutedPoints(4), (ctx) => PointManager.deleteAllPoints(ctx)],
        ]) {
            const ctx = createDrawnCtx(points);

            await operate(ctx);

            expect(ctx.trackState.update).toBe(true);
        }
    });

    test('undo restores the points of a step and keeps the name, metadata, route types and analysis tracks of the open track', () => {
        const wpts = [{ lat: 50.005, lon: 30.001, name: 'wpt' }];
        const earlier = createPlainPoints(3);
        const step = toHistoryState({
            name: 'Old',
            points: earlier,
            wpts,
            analysisTracks: [{ points: earlier }],
            analysisPoints: earlier,
            routeTypes: [],
        });
        const moved = [{ ...earlier[0], lat: 49.99 }, earlier[1], earlier[2]];
        const current = { name: 'New', id: 'New', metaData: { name: 'New' }, points: moved, analysisPoints: moved };
        Object.assign(current, {
            analysisTracks: [{ points: [] }],
            layers: {},
            routeTypes: [{ tag: 'highway', value: 'primary' }],
        });
        addDistanceToPoints(current.points);
        const ctx = createEditorCtx();
        ctx.selectedGpxFile = current;

        const restored = fromHistoryState(step, ctx);

        expect(step.analysisTracks).toBeNull();
        expect(restored).toMatchObject({ name: 'New', id: 'New', metaData: { name: 'New' }, updateLayers: true });
        expect(restored.layers).toBe(current.layers);
        expect(restored.analysisTracks).toBe(current.analysisTracks);
        expect(restored.routeTypes).toBe(current.routeTypes);
        // the analysis tracks describe other points, so the graph is drawn from the restored points
        expect(withEditedPoints(restored).tracks).toEqual([{ points: earlier }]);
        const fresh = createPlainPoints(3);
        addDistanceToPoints(fresh);
        expect(earlier.map((point) => point.distanceTotal)).toEqual(fresh.map((point) => point.distanceTotal));
        expect(restored.wpts).toEqual(wpts);
        expect(restored.wpts).not.toBe(step.wpts);
    });

    test('the history keeps the last 50 steps', async () => {
        let history;
        const Probe = () => {
            history = useUndoRedo();

            return null;
        };
        const { root, unmount } = mountRoot();
        await act(async () => root.render(createElement(Probe)));

        for (let step = 1; step <= 55; step++) {
            await act(async () => history.setState({ step }));
        }

        expect(history.pastStates.map(({ step }) => step)).toEqual(Array.from({ length: 50 }, (_, i) => i + 5));
        unmount();
    });
});

test('deleteWpt removes the waypoint and asks for a redraw of the map and of the list each time', () => {
    const ctx = createCtx([]);
    ctx.selectedGpxFile.wpts = [{ name: 'a' }, { name: 'b' }, { name: 'c' }];

    PointManager.deleteWpt(0, ctx, true);

    expect(ctx.selectedGpxFile).toMatchObject({
        wpts: [{ name: 'b' }, { name: 'c' }],
        updateLayers: true,
        wptChangedFlag: 1,
        save: true,
    });
    expect(ctx.setTrackState).toHaveBeenCalledWith({ update: true });

    PointManager.deleteWpt(0, ctx);

    expect(ctx.selectedGpxFile).toMatchObject({ wpts: [{ name: 'c' }], wptChangedFlag: 2 });
});
