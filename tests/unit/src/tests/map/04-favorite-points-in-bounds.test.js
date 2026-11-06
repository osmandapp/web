import L from 'leaflet';
import { filterPointsInBounds } from '@map/map/layers/FavoriteLayer';
import { quickNaNfix } from '@map/util/Utils';

function parseServerWpts(json) {
    return JSON.parse(quickNaNfix(json));
}

test('a favorite without a coordinate is left out of the points in view', () => {
    const map = { getBounds: () => L.latLngBounds([50, -1], [51, 31]) };
    const [inView, outOfView, noLat, noLon] = parseServerWpts(
        '[{"name":"In view","lat":50.45,"lon":30.52},{"name":"Out of view","lat":48.85,"lon":2.35},' +
            '{"name":"No lat","lat":NaN,"lon":30.53},{"name":"No lon","lat":50.46,"lon":NaN}]'
    );

    expect(filterPointsInBounds([inView, outOfView, noLat, noLon], map)).toEqual([inView]);
});
