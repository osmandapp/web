import { analyzerProfile, trackProfile } from '@map/graph/model/profile';
import { computeSlopes } from '@map/graph/model/slopes';
import { sampleSeries } from '@map/graph/model/sampling';
import { graphUnits } from '@map/graph/units';
import TracksManager, { NAN_MARKER } from '@map/manager/track/TracksManager';
import { createEditorPoint, createPointAt, createRoutedPoints } from '../../util/fixtures/tracks';

const METERS_BETWEEN_EDITOR_POINTS = 1112.26;

function point(i, ele, extra = {}) {
    return { ...createEditorPoint(i), ele, ...extra };
}

test('the distance skips the gap between segments and tracks, a point without elevation has no value', () => {
    const first = [point(0, 100), point(1, null), point(2, 120, { profile: TracksManager.PROFILE_GAP }), point(5, 130)];
    const second = [point(9, undefined), point(10, NAN_MARKER)];
    const profile = trackProfile({ tracks: [{ points: first }, { points: second }] });

    expect(profile.map((p) => p.distance)).toEqual(
        [0, 1, 2, 2, 2, 3].map((i) => expect.closeTo(i * METERS_BETWEEN_EDITOR_POINTS, 0))
    );
    expect(profile.map((p) => p.elevation)).toEqual([100, null, 120, 130, null, null]);

    const routed = trackProfile({ points: createRoutedPoints(3) });
    expect(routed.map((p) => p.distance)).toEqual(
        [0, 1, 1, 2].map((i) => expect.closeTo(i * METERS_BETWEEN_EDITOR_POINTS, 0))
    );

    const analyzer = analyzerProfile([
        { lat: 50, lon: 30, ele: 100 },
        { lat: 50.01, lon: 30, ele: 110, distance: 1112 },
    ]);
    expect(analyzer.map((p) => [p.distance, p.lng])).toEqual([
        [0, 30],
        [1112, 30],
    ]);
});

test('the slope runs through the points without elevation, from the first point', () => {
    const profile = trackProfile({
        points: [point(0, 100), point(1, 110), point(2, null), point(3, 130), point(4, 140)],
    });
    const climb = (10 / METERS_BETWEEN_EDITOR_POINTS) * 100;

    const { pointSlopes } = computeSlopes(profile);

    expect(pointSlopes).toEqual(profile.map(() => expect.closeTo(climb, 1)));
    expect(computeSlopes(trackProfile({ points: [point(0, null), point(1, null)] }))).toBeNull();
});

test('the tooltip shows the values of the slope line', () => {
    const profile = trackProfile({
        points: [
            [0, 100],
            [40, 100],
            [50, 103],
            [60, 100],
            [200, 100],
        ].map(([meters, ele]) => createPointAt(meters, { ele })),
    });

    const { grid, pointSlopes } = computeSlopes(profile);
    const lineAt = (distance) => grid.filter((s) => s.distance <= distance).at(-1).slope;

    expect(pointSlopes).toEqual(profile.map((p) => lineAt(p.distance)));
    expect(grid.filter((s) => [40, 50, 200].includes(Math.round(s.distance))).map((s) => s.index)).toEqual([1, 2, 4]);
});

test('sampling keeps the points with a value when the gaps fall on the sampling step', () => {
    const gappy = Array.from({ length: 1002 }, (_, i) => ({ x: i, y: i % 2 ? 100 + i : null }));
    const full = Array.from({ length: 6 }, (_, i) => ({ x: i, y: 100 + i }));

    const sampled = sampleSeries(gappy, 250);

    expect(sampled).toHaveLength(251);
    expect(sampled.every((p) => Number.isFinite(p.y))).toBe(true);
    expect(sampleSeries(full, 3).map((p) => p.x)).toEqual([0, 2, 4]);
});

test('the graph shows the distance, the elevation and the speed in the units of the settings', () => {
    const imperial = graphUnits({ len: 'si_mi_feet', speed: 'si_mph' });
    const metric = graphUnits({ len: 'si_km_m', speed: 'si_kmh' });

    expect(imperial.distance(1609.344)).toBeCloseTo(1, 3);
    expect(imperial.elevation(100)).toBeCloseTo(328.08, 1);
    expect(imperial.speed(10)).toBeCloseTo(22.37, 1);
    expect(imperial.largeToSmall(0.5)).toBeCloseTo(2640, 0);
    expect([imperial.elevation(null), imperial.speed(null)]).toEqual([null, null]);
    expect([metric.distance(1500), metric.elevation(100), metric.speed(10)]).toEqual([1.5, 100, 36]);
});
