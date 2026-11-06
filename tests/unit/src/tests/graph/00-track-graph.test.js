import { getGraphData } from '@map/graph/track/GpxGraphProvider';
import { DISTANCE, ELEVATION, ELEVATION_SRTM, SLOPE } from '@map/graph/GraphManager';
import { addDistanceToPoints } from '@map/manager/track/TracksManager';
import { createEditorPoint } from '../../util/fixtures/tracks';

const CTX = { unitsSettings: { len: 'si_km_m' } };
const KM_BETWEEN_POINTS = 1.112;

function trackPoints(values, key = 'ele') {
    const points = values.map((value, i) => ({ ...createEditorPoint(i), [key]: value }));
    addDistanceToPoints(points);

    return points;
}

function graphData(points, options) {
    return getGraphData({ trackData: { data: points }, ctx: CTX, ...options });
}

test('a point without elevation is a gap in the graph, not a zero or the height of a neighbour', () => {
    const { res, minEle, maxEle } = graphData(trackPoints([null, 210.4, 204.4, undefined, 200.6, 247.6]), {
        hasEle: true,
    });

    expect(res.map((p) => p[ELEVATION])).toEqual([undefined, 210.4, 204.4, undefined, 200.6, 247.6]);
    expect([minEle, maxEle]).toEqual([200.6, 247.6]);
    expect(res.map((p) => p[DISTANCE])).toEqual(
        [0, 1, 2, 3, 4, 5].map((i) => expect.closeTo(i * KM_BETWEEN_POINTS, 2))
    );
});

test('the slope runs through the points without elevation, a track with no elevation keeps its graph', () => {
    const { res, slopes } = graphData(trackPoints([null, 110, 120, undefined, 140, 150]), { hasEle: true });
    const climb = res[2][SLOPE];
    const drawn = slopes.map((s) => s.slope);

    expect(climb).toBeGreaterThan(0);
    expect(res[3][SLOPE]).toBeCloseTo(climb, 1);
    expect(res[4][SLOPE]).toBeCloseTo(climb, 1);
    expect(Math.min(...drawn)).toBeCloseTo(0, 1);
    expect(Math.max(...drawn)).toBeCloseTo(climb, 1);

    const { res: srtm } = graphData(trackPoints([110, 120, 130], 'srtmEle'), { hasSrtm: true });

    expect(srtm.map((p) => p[ELEVATION_SRTM])).toEqual([110, 120, 130]);
});
