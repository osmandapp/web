import TracksManager, {
    addDistanceToPoints,
    eligibleToApplySrtm,
    getTrackPoints,
    hasSegments,
    hasSegmentTurns,
    isEmptyTrack,
    NAN_MARKER,
    validateRoutePoints,
} from '@map/manager/track/TracksManager';

const GAP = TracksManager.PROFILE_GAP;
const STEP = 1112; // meters between two points 0.01 degrees apart along a meridian

const point = (i, extra = {}) => ({ lat: 50 + i / 100, lng: 30, ...extra });
const near = (meters) => expect.closeTo(meters, -1);

describe('addDistanceToPoints', () => {
    test('a plain track counts the distance from the previous point, a gap starts a new segment', () => {
        const points = [point(0), point(1), point(2, { profile: GAP }), point(3), point(4)];

        addDistanceToPoints(points);

        expect(points.map((p) => p.dist)).toEqual([0, near(STEP), near(STEP), 0, near(STEP)]);
        expect(points.map((p) => p.distanceSegment)).toEqual([0, near(STEP), near(2 * STEP), 0, near(STEP)]);
        expect(points.map((p) => p.distanceTotal)).toEqual([
            0,
            near(STEP),
            near(2 * STEP),
            near(2 * STEP),
            near(3 * STEP),
        ]);
    });

    test('a routed point is as long as its geometry, the distances of the router are kept', () => {
        const geometry = (i, last = {}) => [point(i - 1), point(i, { distance: 1000 }), { ...point(i), ...last }];
        const points = [
            point(0, { geometry: [] }),
            point(1, { geometry: geometry(1, { profile: GAP }) }),
            point(2, { geometry: geometry(2) }),
        ];

        addDistanceToPoints(points);

        // the first point of a geometry is the previous point itself, the third is a copy of the second
        expect(points[1].geometry.map((g) => g.distance)).toEqual([0, 1000, 0]);
        expect(points.map((p) => p.dist)).toEqual([0, 1000, 1000]);
        expect(points.map((p) => p.distanceSegment)).toEqual([0, 1000, 1000]);
        expect(points.map((p) => p.distanceTotal)).toEqual([0, 1000, 2000]);
    });
});

describe('getTrackPoints', () => {
    test('the tracks of a file are joined with the total distance running on', () => {
        const first = [point(0), point(1)];
        const second = [point(5), point(6)];
        addDistanceToPoints(first);
        addDistanceToPoints(second);
        const file = { tracks: [{ points: first }, { points: second }] };

        const totals = getTrackPoints(file).map((p) => p.distanceTotal);

        expect(totals).toEqual([0, near(STEP), near(STEP), near(2 * STEP)]);
        // asking again gives the same distances, the points are not shifted a second time
        expect(getTrackPoints(file).map((p) => p.distanceTotal)).toEqual(totals);
    });

    test('the geometry of a routed track is unfolded into points', () => {
        const file = { points: [point(0), point(1, { geometry: [point(0), point(1)] })] };

        expect(getTrackPoints(file)).toHaveLength(3);
    });
});

test('the points of the editor are taken into the track only when every segment is routed', () => {
    const routed = [point(0, { geometry: [] }), point(1, { geometry: [point(0), point(1)] })];

    expect(validateRoutePoints(routed)).toBe(true);
    expect(validateRoutePoints([point(0), point(1)])).toBe(true);
    expect(validateRoutePoints([...routed, point(2, { profile: GAP })])).toBe(true);
    expect(validateRoutePoints([...routed, point(2)])).toBe(false);
    expect(validateRoutePoints([point(0, { geometry: [point(0)] }), routed[1]])).toBe(false);
    expect(validateRoutePoints([])).toBe(false);
});

describe('eligibleToApplySrtm', () => {
    const track = (eles, analysis = {}) => ({ points: eles.map((ele, i) => point(i, { ele })), analysis });

    test('srtm is offered when the elevation is missing or all zero, once', () => {
        expect(eligibleToApplySrtm({ track: track([100, 101, 102, 103, 104]) })).toBe(false);
        expect(eligibleToApplySrtm({ track: track([100, NAN_MARKER, 102, 103, 104]) })).toBe(true);
        expect(eligibleToApplySrtm({ track: track([0, 0, 0, 0, 0]) })).toBe(true);
        expect(eligibleToApplySrtm({ track: track([0, 0, 0, 0, 0], { isSrtmApplied: true }) })).toBe(false);
        // too short to bother
        expect(eligibleToApplySrtm({ track: track([0, 0, 0, 0]) })).toBe(false);
        expect(eligibleToApplySrtm({ track: track([0, 0, 0, 0], null) })).toBe(false);
    });
});

test('what counts as an empty track, a track with segments and a track with turns', () => {
    const turn = { geometry: [{ segment: { ext: { turnType: 'left' } } }] };

    expect(isEmptyTrack({})).toBe(true);
    expect(isEmptyTrack({ wpts: [{}] })).toBe(false);
    expect(isEmptyTrack({ wpts: [{}] }, false)).toBe(true);
    expect(isEmptyTrack({ tracks: [{ points: [{}] }] }, true, false)).toBe(true);
    expect(hasSegments({ tracks: [{ points: [{}, {}] }] })).toBe(true);
    expect(hasSegments({ points: [{}] })).toBe(false);
    expect(hasSegmentTurns({ track: { points: [{}, turn] } })).toBe(true);
    expect(hasSegmentTurns({ track: { tracks: [{ points: [{}] }] } })).toBe(false);
});
