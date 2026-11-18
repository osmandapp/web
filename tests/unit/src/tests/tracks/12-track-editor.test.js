import TracksManager, {
    addDistanceToPoints,
    isPointUnrouted,
    isProtectedSegment,
    splitProtectedSegment,
    validateRoutePoints,
    PROFILE_LINE,
} from '@map/manager/track/TracksManager';
import TrackLayerProvider from '@map/map/util/TrackLayerProvider';
import {
    ADDED_POINT,
    addPointToTrack,
    addRoutedSegment,
    createNewPoint,
    initNewSelectedTrack,
    isAddPointByClick,
} from '@map/map/util/creator/LocalTrackHelper';
import { PROFILE_CAR, PROFILE_PEDESTRIAN } from '@map/store/geoRouter/profileConstants';
import { createEditorCtx, createPlainPoints, createRoutedPoints, NOW, TODAY } from '../../util/fixtures/tracks';

TrackLayerProvider.createLayersByTrackData = () => null;

const GAP = TracksManager.PROFILE_GAP;

const geoRouter = { getShortGeoProfile: ({ profile = PROFILE_CAR } = {}) => ({ profile }) };

/** The point a click on the map at `lat` adds with the profile chosen in the editor. */
const clicked = (lat, profile) => createNewPoint({ e: { latlng: { lat, lng: 30 } }, geoProfile: { profile } });

/** Geometry of a routed segment: the points the router returned between two track points. */
function geometry(...coords) {
    return coords.map(([lat, lng]) => ({ lat, lng }));
}

describe('what the editor may change', () => {
    test('a point is routed when it has a profile and a geometry', () => {
        const point = { profile: 'car', geometry: geometry([50, 30], [50.1, 30.1]) };

        expect(isPointUnrouted({ point, pointIndex: 1, prevPoint: {} })).toBe(false);
        expect(isPointUnrouted({ point: { geometry: [] }, pointIndex: 1, prevPoint: {} })).toBe(true);
        expect(isPointUnrouted({ point: { profile: 'car' }, pointIndex: 1, prevPoint: {} })).toBe(true);
    });

    test('an empty geometry is routed for the first point and after a gap', () => {
        const point = { profile: 'car', geometry: [] };

        expect(isPointUnrouted({ point, pointIndex: 0, prevPoint: null })).toBe(false);
        expect(isPointUnrouted({ point, pointIndex: 1, prevPoint: { profile: GAP } })).toBe(false);
        expect(isPointUnrouted({ point, pointIndex: 1, prevPoint: { profile: 'car' } })).toBe(true);
    });

    test('a routed segment can be changed, the others are protected', () => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
        const routed = { geometry: geometry([50, 30], [50.1, 30.1], [50.2, 30.2]) };

        expect(isProtectedSegment({ startPoint: { profile: 'car' }, endPoint: routed })).toBe(false);
        // a plain point-to-point line is not protected either
        expect(
            isProtectedSegment({ startPoint: { profile: PROFILE_LINE }, endPoint: { geometry: geometry([50, 30]) } })
        ).toBe(false);

        expect(isProtectedSegment({ startPoint: {}, endPoint: {} })).toBe(true);
        expect(isProtectedSegment({ startPoint: { profile: PROFILE_LINE }, endPoint: routed })).toBe(true);
        expect(isProtectedSegment({ startPoint: { profile: GAP }, endPoint: { geometry: [] } })).toBe(true);
        expect(isProtectedSegment({ startPoint: null, endPoint: {} })).toBe(true);
    });
});

describe('splitProtectedSegment', () => {
    function track() {
        return [
            { lat: 50, lng: 30, profile: 'car', geometry: [] },
            {
                lat: 50.3,
                lng: 30.3,
                profile: 'car',
                geometry: geometry([50, 30], [50.1, 30.1], [50.2, 30.2], [50.3, 30.3]),
            },
        ];
    }

    test('the geometry is cut in two and the new point is inserted between them', () => {
        const trackPoints = track();
        const newPoint = { lat: 50.15, lng: 30.15 };

        splitProtectedSegment({ newPoint, trackPoints, geometryIndex: 1, endPointIndex: 1 });

        expect(trackPoints.map((p) => [p.lat, p.lng])).toEqual([
            [50, 30],
            [50.15, 30.15],
            [50.3, 30.3],
        ]);
        expect(newPoint.geometry).toEqual(geometry([50, 30], [50.1, 30.1], [50.15, 30.15]));
        expect(newPoint.profile).toBe('car');
        expect(trackPoints[2].geometry).toEqual(geometry([50.15, 30.15], [50.2, 30.2], [50.3, 30.3]));
    });

    test('a part that becomes a plain line keeps a doubled point, a miss changes nothing', () => {
        const trackPoints = track();
        const newPoint = { lat: 50.05, lng: 30.05 };

        splitProtectedSegment({ newPoint, trackPoints, geometryIndex: 0, endPointIndex: 1 });
        expect(newPoint.geometry).toEqual(geometry([50, 30], [50.05, 30.05], [50.05, 30.05]));

        const untouched = track();
        splitProtectedSegment({
            newPoint: { lat: 1, lng: 1 },
            trackPoints: untouched,
            geometryIndex: -1,
            endPointIndex: 1,
        });
        expect(untouched).toHaveLength(2);
    });
});

describe('the points that go to the router', () => {
    test('plain points are taken as they are, an already routed track is not overwritten', () => {
        expect(
            validateRoutePoints([
                { lat: 50, lng: 30 },
                { lat: 50.1, lng: 30.1 },
            ])
        ).toBe(true);
        expect(validateRoutePoints([])).toBe(false);
        expect(validateRoutePoints([{ geometry: geometry([50, 30], [50.1, 30.1]) }, { geometry: [] }])).toBe(false);
    });

    test('a gap of a routed track is kept, the last point gets it', () => {
        const points = [{ geometry: [] }, { profile: GAP }];

        expect(validateRoutePoints(points)).toBe(true);
        expect(points[points.length - 1].profile).toBe(GAP);
    });
});

test('every point carries the length of its segment and of the track, a gap starts a new segment', () => {
    // the gap is marked on the last point of the geometry, not on the track point
    const gapGeometry = geometry([50, 30], [50, 30.1]);
    gapGeometry[gapGeometry.length - 1].profile = GAP;
    const points = [{ geometry: gapGeometry }, { geometry: geometry([50, 30.1], [50, 30.2]) }];

    addDistanceToPoints(points);

    expect(points[0].dist).toBeGreaterThan(0);
    expect(points[1].distanceSegment).toBe(points[1].dist);
    expect(points[1].distanceTotal).toBeCloseTo(points[0].dist + points[1].dist, 1);
});

describe('a new track of the editor', () => {
    beforeEach(() => jest.useFakeTimers({ now: NOW }));
    afterEach(() => jest.useRealTimers());

    test('a track created on the map starts with the clicked point and is stored, one created by the button is empty', () => {
        const ctx = createEditorCtx();
        ctx.localTracks = [];
        ctx.setSelectedLocalTrackObj = jest.fn();
        const create = (createTrack) => {
            ctx.createTrack = createTrack;
            initNewSelectedTrack({ ctx, map: null, geoRouter, selectedGpxFile: {}, setRegisteredLayers: jest.fn() });
        };

        create({ enable: true, latlng: { lat: 50, lng: 30 } });

        expect(ctx.selectedGpxFile).toMatchObject({
            name: TODAY,
            points: [
                {
                    lat: 50,
                    lng: 30,
                    ele: TracksManager.NAN_MARKER,
                    profile: PROFILE_CAR,
                    geoProfile: { profile: PROFILE_CAR },
                    geometry: [],
                },
            ],
        });
        expect(ctx.localTracks.map((t) => t.name)).toEqual([TODAY]);

        create({ enable: true });

        expect(ctx.selectedGpxFile).toMatchObject({ name: `${TODAY} - 2`, points: [] });
        // an empty track is stored with its first point, not before
        expect(ctx.localTracks).toHaveLength(1);
    });
});

describe('a click on the map in the editor', () => {
    test('the first point starts the track, the next one gives its profile to the previous point and goes to the router', () => {
        const track = { points: [] };
        const first = clicked(50, PROFILE_CAR);

        expect(addPointToTrack(track, first)).toBe(ADDED_POINT.FIRST);
        expect(track.points).toEqual([first]);

        const second = clicked(50.01, PROFILE_PEDESTRIAN);

        expect(addPointToTrack(track, second)).toBe(ADDED_POINT.ROUTED);
        expect(track.points).toEqual([first, second]);
        expect(first).toMatchObject({ profile: PROFILE_PEDESTRIAN, geoProfile: { profile: PROFILE_PEDESTRIAN } });
        // filled in by the router
        expect(second.geometry).toEqual([]);
        expect(track.hasGeo).toBe(true);
    });

    test('a Line point on a plain track extends the line without routing', () => {
        const track = { points: createPlainPoints(3) };
        const point = clicked(50.05, PROFILE_LINE);

        expect(addPointToTrack(track, point)).toBe(ADDED_POINT.LINE);
        expect(track.points).toEqual([
            ...createPlainPoints(2),
            { lat: 50.02, lng: 30, profile: PROFILE_LINE, geoProfile: { profile: PROFILE_LINE } },
            point,
        ]);
        expect(point).not.toHaveProperty('geometry');
    });

    test('a router point on a plain track asks first: Continue puts the recorded points into one protected segment', () => {
        const points = createPlainPoints(4);
        const point = clicked(50.05, PROFILE_CAR);

        // Cancel leaves the track as it is
        expect(addPointToTrack({ points }, point)).toBe(ADDED_POINT.ASK_ROUTING);
        expect(points).toEqual(createPlainPoints(4));

        const routed = addRoutedSegment({ points, newPoint: point, geoRouter });

        expect(routed).toHaveLength(3);
        expect(routed[0]).toEqual({
            lat: 50,
            lng: 30,
            profile: PROFILE_LINE,
            geoProfile: { profile: PROFILE_LINE },
            geometry: [],
        });
        expect(routed[1]).toMatchObject({ lat: 50.03, profile: PROFILE_CAR, geoProfile: { profile: PROFILE_CAR } });
        expect(routed[1].geometry).toEqual(createPlainPoints(4));
        expect(isProtectedSegment({ startPoint: routed[0], endPoint: routed[1] })).toBe(true);
        expect(routed[2]).toBe(point);
    });

    test('a click on a point of the track adds nothing', () => {
        const track = { points: createRoutedPoints(2) };

        expect(addPointToTrack(track, clicked(50.01, PROFILE_CAR))).toBeNull();
        expect(track.points).toEqual(createRoutedPoints(2));
    });

    test('a click adds a point only while the editor is on and neither the point menu nor the map menu is open', () => {
        const editor = { createTrack: { enable: true }, pointContextMenu: {} };

        expect(isAddPointByClick(editor)).toBeTruthy();
        expect(isAddPointByClick({ ...editor, pointContextMenu: { coord: { lat: 50, lng: 30 } } })).toBeFalsy();
        expect(isAddPointByClick({ ...editor, openContextMenu: true })).toBeFalsy();
        expect(isAddPointByClick({ ...editor, createTrack: { enable: false } })).toBeFalsy();
    });
});
