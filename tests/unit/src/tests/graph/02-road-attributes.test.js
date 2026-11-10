import { checkNextSegment, roadAttributesData } from '@map/graph/track/roadAttributes';
import { createEditorPoint } from '../../util/fixtures/tracks';

const toKm = (meters) => meters / 1000;

function twoRouteSegments() {
    return Array.from({ length: 10 }, (_, i) => ({
        ...createEditorPoint(i),
        ...(i % 5 === 0 && { segment: { ext: { types: String(i / 5), length: 5 } } }),
    }));
}

function segmentAt(datasets, ind) {
    return datasets.find((d, i) => ind >= d.index && checkNextSegment(datasets, i, ind));
}

test('the tooltip finds the road attribute of every segment, the last one included', () => {
    const routeTypes = [
        { tag: 'highway', value: 'primary' },
        { tag: 'highway', value: 'track' },
    ];
    const { datasets } = roadAttributesData(twoRouteSegments(), routeTypes, null, toKm).roadClass;

    expect(datasets.map((d) => d.index)).toEqual([0, 5]);
    expect(segmentAt(datasets, 2)).toBe(datasets[0]);
    expect(segmentAt(datasets, 7)).toBe(datasets[1]);
});

test('winter roads and ice roads share one graph, as in the rendering style', () => {
    const routeTypes = [
        { tag: 'winter_road', value: 'yes' },
        { tag: 'ice_road', value: 'yes' },
    ];
    const { datasets } = roadAttributesData(twoRouteSegments(), routeTypes, null, toKm).winter_ice_road;

    // the i18n stub returns the key, so the label names the style category
    expect(datasets.map((d) => [d.label, d.index])).toEqual([
        ['rendering_attr_winter_road_name', 0],
        ['rendering_attr_ice_road_name', 5],
    ]);
});
