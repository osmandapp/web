import TracksManager, {
    addDistanceToPoints,
    isPointUnrouted,
    isProtectedSegment,
    splitProtectedSegment,
    validateRoutePoints,
    PROFILE_LINE,
} from '@map/manager/track/TracksManager';

const GAP = TracksManager.PROFILE_GAP;

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
