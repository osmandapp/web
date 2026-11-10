import { checkNextSegment, roadAttributeCharts, roadAttributeRuns } from '@map/graph/track/roadAttributes';
import { hexToRgba } from '@map/util/ColorUtil';
import { createEditorPoint, createRouteSegmentPoints } from '../../util/fixtures/tracks';

const toKm = (meters) => meters / 1000;
// a display unit of 100 m keeps the sums of the bars whole
const toDisplayUnits = (meters) => meters / 100;

const SLOPE_STEP = 10;

function twoRouteSegments() {
    return Array.from({ length: 10 }, (_, i) => ({
        ...createEditorPoint(i),
        ...(i % 5 === 0 && { segment: { ext: { types: String(i / 5), length: 5 } } }),
    }));
}

function attributeGraphs(roadPoints, routeTypes, slopes, metersToX) {
    return roadAttributeCharts(roadAttributeRuns(roadPoints, routeTypes, slopes), metersToX);
}

function segmentAt(datasets, ind) {
    return datasets.find((d, i) => ind >= d.index && checkNextSegment(datasets, i, ind));
}

function bars({ datasets }) {
    return datasets.map(({ label, backgroundColor, index, size, data, totalDist }) => ({
        label,
        backgroundColor,
        index,
        size,
        data,
        totalDist,
    }));
}

test('the tooltip finds the road attribute of every segment, the last one included', () => {
    const routeTypes = [
        { tag: 'highway', value: 'primary' },
        { tag: 'highway', value: 'track' },
    ];
    const { datasets } = attributeGraphs(twoRouteSegments(), routeTypes, null, toKm).roadClass;

    expect(datasets.map((d) => d.index)).toEqual([0, 5]);
    expect(segmentAt(datasets, 2)).toBe(datasets[0]);
    expect(segmentAt(datasets, 7)).toBe(datasets[1]);
});

test('winter roads and ice roads share one graph, as in the rendering style', () => {
    const routeTypes = [
        { tag: 'winter_road', value: 'yes' },
        { tag: 'ice_road', value: 'yes' },
    ];
    const { datasets } = attributeGraphs(twoRouteSegments(), routeTypes, null, toKm).winter_ice_road;

    // the i18n stub returns the key, so the label names the style category
    expect(datasets.map((d) => [d.label, d.index])).toEqual([
        ['rendering_attr_winter_road_name', 0],
        ['rendering_attr_ice_road_name', 5],
    ]);
});

test('road type and surface bars follow the route segments, equal neighbours merge into one bar', () => {
    const routeTypes = [
        { tag: 'highway', value: 'path' },
        { tag: 'surface', value: 'ground' },
        { tag: 'bridge', value: 'yes' },
        { tag: 'highway', value: 'service' },
        { tag: 'surface', value: 'asphalt' },
        { tag: 'highway', value: 'residential' },
        { tag: 'highway', value: 'living_street' },
        { tag: 'surface', value: 'gravel' },
    ];
    // path 500 m, path on a bridge 300 m, service 400 m, residential 400 m, living street on gravel 400 m
    const points = createRouteSegmentPoints([
        ['0,1', 6],
        ['0,2,1', 4],
        ['3,4', 5],
        ['5,4', 5],
        ['6,7', 5],
    ]);
    const graphs = attributeGraphs(points, routeTypes, null, toDisplayUnits);

    expect(Object.keys(graphs)).toEqual([
        'roadClass',
        'surface',
        'steepness',
        'smoothness',
        'winter_ice_road',
        'tracktype',
        'horse_scale',
        'piste_difficulty',
        'piste_type',
    ]);

    // classes and colours of routeInfo_roadClass in default.render.xml: residential and living_street are both "street"
    const path = hexToRgba('#55000000');
    const service = hexToRgba('#e3daf6');
    const street = hexToRgba('#c1b9d1');
    expect(bars(graphs.roadClass)).toEqual([
        {
            label: 'rendering_attr_highway_class_path_name',
            backgroundColor: path,
            index: 0,
            size: 8,
            data: [8],
            totalDist: 8,
        },
        {
            label: 'rendering_attr_highway_class_service_name',
            backgroundColor: service,
            index: 8,
            size: 4,
            data: [4],
            totalDist: 12,
        },
        {
            label: 'rendering_attr_highway_class_street_name',
            backgroundColor: street,
            index: 12,
            size: 8,
            data: [8],
            totalDist: 20,
        },
    ]);
    expect(graphs.roadClass.legend).toEqual({
        rendering_attr_highway_class_path_name: { color: path, distance: 800 },
        rendering_attr_highway_class_service_name: { color: service, distance: 400 },
        rendering_attr_highway_class_street_name: { color: street, distance: 800 },
    });

    const ground = hexToRgba('#cc9900');
    const asphalt = hexToRgba('#6f687e');
    const gravel = hexToRgba('#cbcbe8');
    expect(bars(graphs.surface)).toEqual([
        {
            label: 'rendering_attr_surface_ground_name',
            backgroundColor: ground,
            index: 0,
            size: 8,
            data: [8],
            totalDist: 8,
        },
        {
            label: 'rendering_attr_surface_asphalt_name',
            backgroundColor: asphalt,
            index: 8,
            size: 8,
            data: [8],
            totalDist: 16,
        },
        {
            label: 'rendering_attr_surface_gravel_name',
            backgroundColor: gravel,
            index: 16,
            size: 4,
            data: [4],
            totalDist: 20,
        },
    ]);
    expect(graphs.surface.legend).toEqual({
        rendering_attr_surface_ground_name: { color: ground, distance: 800 },
        rendering_attr_surface_asphalt_name: { color: asphalt, distance: 800 },
        rendering_attr_surface_gravel_name: { color: gravel, distance: 400 },
    });
});

test('steepness bars follow the slope classes of the style, as on the phone', () => {
    // [slope, up to metres]: a 6 % climb, a -10 % descent with a -25 % drop, flat to the end of the track at 2000 m
    const parts = [
        [6, 1040],
        [-10, 1540],
        [-25, 1740],
        [-10, 1940],
        [0, Infinity],
    ];
    const slopeAt = (distance) => parts.find(([, end]) => distance < end)[0];
    const grid = Array.from({ length: 201 }, (_, k) => k * SLOPE_STEP).map((distance) => ({
        distance,
        slope: slopeAt(distance),
        index: Math.round(distance / 100),
    }));
    const points = createRouteSegmentPoints([['0', 21]]);
    const { steepness } = attributeGraphs(
        points,
        [{ tag: 'highway', value: 'path' }],
        { step: SLOPE_STEP, grid },
        toDisplayUnits
    );

    // classes and colours of routeInfo_steepness, bounds as RouteStatisticsHelper.BOUNDARIES_ARRAY on Android;
    // a bar covers the points from the one before its slope begins to the start of the next bar
    const up = hexToRgba('#f2ad82');
    const down = hexToRgba('#7fa74e');
    const steep = hexToRgba('#028306');
    const flat = hexToRgba('#d3c07f');
    expect(
        steepness.datasets.map(({ label, backgroundColor, index, size }) => [label, backgroundColor, index, size])
    ).toEqual([
        ['5_8', up, 0, 10],
        ['-11_-8', down, 10, 5],
        ['-100_-20', steep, 15, 2],
        ['-11_-8', down, 17, 2],
        ['-3_0', flat, 19, 1],
    ]);
    expect(Object.entries(steepness.legend).map(([label, { color }]) => [label, color])).toEqual([
        ['4% ➞ 8%', up],
        ['-12% ➞ -8%', down],
        ['-100% ➞ -20%', steep],
        ['-4% ➞ 0%', flat],
    ]);

    // every part is as long as on the track, to the slope step
    const barLengths = [1040, 500, 200, 200, 60];
    steepness.datasets.forEach((d, i) =>
        expect(Math.abs(Math.round(d.data[0] * 100) - barLengths[i])).toBeLessThanOrEqual(SLOPE_STEP)
    );
    const legendLengths = [1040, 700, 200, 60];
    Object.values(steepness.legend).forEach(({ distance }, i) =>
        expect(Math.abs(distance - legendLengths[i])).toBeLessThanOrEqual(SLOPE_STEP)
    );
    expect(Math.abs(Math.round(steepness.datasets.at(-1).totalDist * 100) - 2000)).toBeLessThanOrEqual(SLOPE_STEP);
});
