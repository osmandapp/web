import L from 'leaflet';
import { act, createElement } from 'react';
import PointManager from '@map/manager/PointManager';
import { apiGet } from '@map/util/HttpApi';
import { updateRouteBetweenPoints } from '@map/store/geoRouter/legacy/updateRouteBetweenPoints';
import TracksManager, { addDistanceToPoints, PROFILE_LINE, withEditedPoints } from '@map/manager/track/TracksManager';
import { fromHistoryState, toHistoryState } from '@map/manager/track/TrackHistory';
import TrackLayerProvider from '@map/map/util/TrackLayerProvider';
import EditableMarker from '@map/map/util/creator/EditableMarker';
import { assignPointIds, isProtectedSegment, isWaitingForRouter, setProfile } from '@map/manager/track/TrackOperations';
import EditablePolyline from '@map/map/util/creator/EditablePolyline';
import { updateLayers } from '@map/map/util/creator/LocalTrackLayerHelper';
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
import { createDragEvent, createDrawnCtx, dragPoint, map, renderCtx, routeCached } from '../../util/editor';
import { mountRoot } from '../../util/reactRoot';

const GAP = TracksManager.PROFILE_GAP;

const plain = (n) => Array.from({ length: n }, (_, i) => createEditorPoint(i));
const createCtx = (points) => createEditorCtx({ points });

const drawnLines = (ctx) => TrackLayerProvider.getPolylines(ctx.selectedGpxFile.layers.getLayers());
const routedPairs = (ctx) =>
    Object.values(ctx.routingCache).map(({ startPoint, endPoint }) => [startPoint.lat, endPoint.lat]);

const insertPoint = (ctx, line, lat) => {
    const track = ctx.selectedGpxFile;
    const editable = new EditablePolyline(map, ctx, null, line);
    editable.currentPolyline = L.stamp(line);
    editable.dragStartNewPoint(createDragEvent({ lat, lng: 30 }), track);

    return editable.dragEndNewPoint(createDragEvent({ lat, lng: 30 }), jest.fn(), track);
};

describe('deletePoint', () => {
    test('the dashed line of a segment goes away with a delete after its end point was copied', async () => {
        const store = createDrawnCtx(createRoutedPoints(4));
        const dashed = { point: store.selectedGpxFile.points[3] };
        store.selectedGpxFile.layers.addLayer(dashed);
        store.selectedGpxFile.points = setProfile(store.selectedGpxFile.points, 3, { profile: PROFILE_BICYCLE });

        await PointManager.deletePoint(2, renderCtx(store));

        expect(dashed.point).toBeNull();
    });

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

    test('a deleted gap point passes the gap to the previous point, its neighbours are not routed', async () => {
        const ctx = createCtx(createGapPoints(5, 2));

        await PointManager.deletePoint(2, ctx);

        const points = ctx.selectedGpxFile.points;
        expect(lats(points)).toEqual([50, 50.01, 50.03, 50.04]);
        expect(points[1].profile).toBe(GAP);
        expect(points[1].geometry.at(-1).profile).toBe(GAP);
        expect(points[2].geometry).toEqual([]);
        expect(ctx.routingCache).toEqual({});
    });

    test('a deleted point after a gap stretches the gap to the next point, nothing is routed', async () => {
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

            expect(ctx.selectedGpxFile.points).toEqual(expected);
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
        expect(
            Object.values(ctx.routingCache).map(({ startPoint, endPoint }) => [startPoint.lat, endPoint.lat])
        ).toEqual([
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
});

describe('join', () => {
    const createJoinCtx = () => {
        const points = createGapPoints(4, 1);
        points[2].profile = PROFILE_BICYCLE;

        return createCtx(points);
    };

    test('join across a gap gives the gap point the profile of the next point and removes the gap marker', async () => {
        const ctx = createJoinCtx();

        PointManager.join(1, ctx);
        await routeCached(ctx);

        const [, gap, next] = ctx.selectedGpxFile.points;
        expect(gap.profile).toBe(PROFILE_BICYCLE);
        expect(gap.geometry.at(-1).profile).toBeUndefined();
        expect(lats(next.geometry)).toEqual([50.01, 50.02]);
        expect(ctx.selectedGpxFile.updateLayers).toBe(true);
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
        expect(Object.values(store.routingCache).map(({ geoProfile }) => geoProfile.cacheKey)).toEqual([
            'other params',
        ]);
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

            const landed = store.selectedGpxFile.layers.getLayers().find((layer) => layer.point?.id === endId);
            expect(landed.options.dashArray).toBeNull();
            expect(landed.listens('mousemove')).toBe(true);
        }
    });

    test('a marker dragged while join waits for the router keeps the join', async () => {
        const store = createDrawnCtx(createGapPoints(5, 1));
        store.setPointContextMenu = jest.fn();
        const layer = new EditableMarker(null, store, store.selectedGpxFile.points[4], null).create();
        store.selectedGpxFile.layers.addLayer(layer);
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
            const dashed = drawnLines(ctx).map((line) => !!line.options.dashArray);
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
        store.setPointContextMenu = jest.fn();
        const marker = new EditableMarker(null, store, store.selectedGpxFile.points[3], null);
        const layer = marker.create();
        store.selectedGpxFile.layers.addLayer(layer);
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
        store.setPointContextMenu = jest.fn();
        const [line] = drawnLines(store);
        const route = [
            createEditorPoint(0),
            { lat: 50.004, lng: 30.001 },
            { lat: 50.008, lng: 30.001 },
            createEditorPoint(1),
        ];
        store.trackRouter.updateRouteBetweenPoints.mockResolvedValueOnce({ points: route });

        await PointManager.changeProfile({ ctx: store, geoProfile: BICYCLE, changeAll: true });
        await routeCached(store);
        await insertPoint(store, line, 50.009);

        expect(lats(line.getLatLngs())).toHaveLength(4);
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
});

describe('drag a point', () => {
    test('the first point of a new track is moved while the track has no layers yet', () => {
        const store = createEditorCtx({ points: assignPointIds(createRoutedPoints(1)) });
        store.setPointContextMenu = jest.fn();
        const track = store.selectedGpxFile;
        const layer = new EditableMarker(null, store, track.points[0], null).create();
        track.layers = undefined;

        layer.fire('dragstart');
        layer.setLatLng({ lat: 50.005, lng: 30 });
        layer.fire('dragend');

        expect(lats(store.selectedGpxFile.points)).toEqual([50.005]);
    });

    test('a plain point is moved in its line, its elevation is dropped and the analysis is asked again', () => {
        const ctx = createDrawnCtx(createPlainPoints(3).map((point) => ({ ...point, ele: 100 })));
        const [line] = drawnLines(ctx);

        dragPoint(ctx, 1, 50.015);

        expect(lats(line.getLatLngs())).toEqual([50, 50.015, 50.02]);
        expect(ctx.selectedGpxFile.points[1].ele).toBeUndefined();
        expect(ctx.selectedGpxFile.refreshAnalytics).toBe(true);
        expect(ctx.routingCache).toEqual({});
    });

    test('a plain point of the first segment of a plain track is moved in its line', () => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
        const ctx = createDrawnCtx(createPlainGapPoints(4, 1));
        const [firstSegment] = drawnLines(ctx);

        dragPoint(ctx, 0, 49.995);

        expect(lats(firstSegment.getLatLngs())).toEqual([49.995, 50.01]);
    });

    test('a routed point sends both of its segments to the router as dashed lines', () => {
        const ctx = createDrawnCtx(createRoutedPoints(3));

        dragPoint(ctx, 1, 50.015);

        const points = ctx.selectedGpxFile.points;
        expect(points[1].lat).toBe(50.015);
        expect(points[1].geometry).toEqual([]);
        expect(points[2].geometry).toEqual([]);
        expect(routedPairs(ctx)).toEqual([
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
        expect(routedPairs(lineBefore)).toEqual([[50.015, 50.02]]);

        const lineAfter = createDrawnCtx([
            createEditorPoint(0, { geometry: [] }),
            createRoutedPoint(1, { profile: PROFILE_LINE }),
            createRoutedPoint(2),
        ]);

        dragPoint(lineAfter, 1, 50.015);

        expect(lats(lineAfter.selectedGpxFile.points[2].geometry)).toEqual([50.015, 50.02]);
        expect(routedPairs(lineAfter)).toEqual([[50, 50.015]]);
    });

    test('a recorded piece keeps its points and gets the dragged point as its last vertex', () => {
        const ctx = createDrawnCtx(createRecordedThenRoutedPoints());
        const recorded = lats(ctx.selectedGpxFile.points[1].geometry);

        dragPoint(ctx, 1, 50.012);

        const points = ctx.selectedGpxFile.points;
        expect(lats(points[1].geometry)).toEqual([...recorded.slice(0, -1), 50.012]);
        expect(isProtectedSegment({ startPoint: points[0], endPoint: points[1] })).toBe(true);
        expect(routedPairs(ctx)).toEqual([[50.012, 50.02]]);
    });

    test('the gap side of a dragged point stays untouched', () => {
        const afterGap = createDrawnCtx(createGapPoints(4, 1));

        dragPoint(afterGap, 2, 50.025);

        expect(afterGap.selectedGpxFile.points[2].geometry).toEqual([]);
        expect(routedPairs(afterGap)).toEqual([[50.025, 50.03]]);

        const gap = createDrawnCtx(createGapPoints(4, 1));

        dragPoint(gap, 1, 50.015);

        expect(gap.selectedGpxFile.points[1].profile).toBe(GAP);
        expect(gap.selectedGpxFile.points[2].geometry).toEqual([]);
        expect(routedPairs(gap)).toEqual([[50, 50.015]]);
    });

    test('the first and the last point have one segment to route', () => {
        const first = createDrawnCtx(createRoutedPoints(3));

        dragPoint(first, 0, 49.995);

        expect(first.selectedGpxFile.points[0].geometry).toEqual([]);
        expect(routedPairs(first)).toEqual([[49.995, 50.01]]);

        const last = createDrawnCtx(createRoutedPoints(3));

        dragPoint(last, 2, 50.025);

        expect(routedPairs(last)).toEqual([[50.01, 50.025]]);
    });

    test('a dragged waypoint gets its new place, the route points stay', () => {
        const ctx = createDrawnCtx(createRoutedPoints(2));
        const track = ctx.selectedGpxFile;
        track.wpts = [{ lat: 50.005, lon: 30.001, name: 'wpt' }];
        const marker = new EditableMarker(null, ctx, null, null);

        marker.dragStartPoint(createDragEvent({ lat: 50.005, lng: 30.001 }), track);
        marker.dragEndPoint(createDragEvent({ lat: 50.006, lng: 30.002 }), track);

        expect(track.wpts[0]).toMatchObject({ lat: 50.006, lon: 30.002 });
        const ids = ctx.selectedGpxFile.points.map(({ id }) => id);
        expect(ctx.selectedGpxFile.points).toEqual(createRoutedPoints(2).map((point, i) => ({ ...point, id: ids[i] })));
        expect(ctx.routingCache).toEqual({});
    });
});

describe('insert a point from the line', () => {
    test('a point dropped on a line drawn before a new point was added keeps the new point', async () => {
        const store = createDrawnCtx(createRoutedPoints(3));
        store.setPointContextMenu = jest.fn();
        const [line] = drawnLines(store);
        const editable = new EditablePolyline(map, store, null, line);
        editable.create();
        const added = { ...createRoutedPoint(3), id: 'added' };
        store.setSelectedGpxFile({ ...store.selectedGpxFile, points: [...store.selectedGpxFile.points, added] });

        editable.currentPolyline = L.stamp(line);
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
        const [line] = drawnLines(ctx);

        await insertPoint(ctx, line, 50.015);

        expect(lats(ctx.selectedGpxFile.points)).toEqual([50, 50.01, 50.015, 50.02, 50.03]);
        expect(lats(line.getLatLngs())).toEqual([50, 50.01, 50.015, 50.02, 50.03]);
        expect(ctx.selectedGpxFile.refreshAnalytics).toBe(true);
    });

    test('a point dropped on the second segment of a plain track goes into that line at its place', async () => {
        const ctx = createDrawnCtx(createPlainGapPoints(5, 1));
        const [, secondSegment] = drawnLines(ctx);

        await insertPoint(ctx, secondSegment, 50.035);

        expect(lats(secondSegment.getLatLngs())).toEqual([50.02, 50.03, 50.035, 50.04]);
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
        const dashedLines = drawnLines(ctx).filter((line) => line.options.dashArray);
        expect(dashedLines.map((line) => lats(line.getLatLngs()))).toEqual([
            [50.01, 50.015],
            [50.015, 50.02],
        ]);
        expect(routedPairs(ctx)).toEqual([
            [50.01, 50.015],
            [50.015, 50.02],
        ]);
    });

    test('the nearest segment of a line is the one the point lies on', () => {
        const segments = createPlainPoints(4);

        const nearest = new EditablePolyline().findTheNearestSegment({ point: { lat: 50.025, lng: 30 }, segments });

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
        const ctx = createCtx(points);
        ctx.trackRouter.getColor = ({ profile }) => profile;
        const view = { ...map, getZoom: () => zoom, getBounds: () => bounds };
        const layers = [];
        TrackLayerProvider.parsePoints({ map: view, ctx, points, layers, draggable: true });

        return layers;
    };
    const markers = (layers) => layers.filter((layer) => layer instanceof L.Marker);
    const lines = (layers) => TrackLayerProvider.getPolylines(layers);

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

    test('deleting the last point keeps the waypoints, their groups, the id and the metadata', async () => {
        const ctx = createCtx(createRoutedPoints(1));
        const metaData = { name: 'Local', desc: 'About the track' };
        Object.assign(ctx.selectedGpxFile, {
            id: 'Local',
            metaData,
            wpts: createWpts(),
            pointsGroups: createPointsGroups(),
        });

        await PointManager.deletePoint(0, ctx);

        expect(ctx.selectedGpxFile.wpts).toEqual(createWpts());
        expect(ctx.selectedGpxFile.pointsGroups).toEqual(createPointsGroups());
        expect(ctx.selectedGpxFile.id).toBe('Local');
        expect(ctx.selectedGpxFile.metaData).toEqual({ name: 'Local', desc: 'About the track' });
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
        ]) {
            const ctx = createDrawnCtx(points);

            await operate(ctx);

            expect(ctx.trackState.update).toBe(true);
        }
    });

    test('undo restores the points of a step and keeps the name, metadata and analysis tracks of the open track', () => {
        const wpts = [{ lat: 50.005, lon: 30.001, name: 'wpt' }];
        const earlier = createPlainPoints(3);
        const step = toHistoryState({ name: 'Old', points: earlier, wpts, tracks: [{ points: earlier }] });
        const moved = [{ ...earlier[0], lat: 49.99 }, earlier[1], earlier[2]];
        const current = { name: 'New', id: 'New', metaData: { name: 'New' }, points: moved, tracksPoints: moved };
        Object.assign(current, { tracks: [{ points: [] }], layers: {} });
        addDistanceToPoints(current.points);

        const restored = fromHistoryState(step, current);

        expect(step.tracks).toBeNull();
        expect(restored).toMatchObject({ name: 'New', id: 'New', metaData: { name: 'New' }, syncRouting: true });
        expect(restored.layers).toBe(current.layers);
        expect(restored.tracks).toBe(current.tracks);
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
