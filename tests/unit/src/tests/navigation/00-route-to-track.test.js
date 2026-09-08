import { convertRouteToTrack } from '@map/store/geoObject/convert/convertRouteToTrack';
import { NAN_MARKER } from '@map/manager/track/TracksManager';

const line = (coordinates, properties = {}) => ({ geometry: { type: 'LineString', coordinates }, properties });
const route = (...features) => ({ features });
const geoProfile = { profile: 'car', cacheKey: 'car' };
const point = (lat, lng, name) => ({ lat, lng, name });

// lng, lat, ele - as GeoJSON has it
const LINE = [
    [30, 50, 100],
    [30, 50.01, 110],
    [30, 50.02, 120],
    [30, 50.03, 130],
];

function convert({ start, finish, viaPoints = [], features = [line(LINE)] }) {
    return convertRouteToTrack({
        id: 1,
        route: route(...features),
        trackName: 'Ride',
        geoProfile,
        start,
        finish,
        viaPoints,
    });
}

test('the route is cut into segments at its points, the alternatives are left out', () => {
    const track = convert({
        start: point(50, 30, 'Home'),
        finish: point(50.03, 30, 'Work'),
        viaPoints: [point(50.0201, 30, 'Shop'), null],
        features: [line(LINE, { diffElevationUp: 30, diffElevationDown: 0 }), line([[31, 51]], { alternative: true })],
    });

    expect(track).toMatchObject({ id: 1, name: 'Ride' });
    expect(track.tracks[0].points).toBe(track.points);
    expect(track.points.map((p) => p.name)).toEqual(['Home', 'Shop', 'Work']);
    expect(track.points.map((p) => p.profile)).toEqual(['car', 'car', 'car']);
    // the via point off the line snaps to the nearest point of the route, the geometry ends there
    expect(track.points.map((p) => p.geometry.map((g) => g.lat))).toEqual([[], [50, 50.01, 50.02], [50.02, 50.03]]);
    expect(track.analysis).toEqual({
        minElevation: 100,
        maxElevation: 130,
        avgElevation: 116,
        hasElevationData: true,
        diffElevationUp: 30,
        diffElevationDown: 0,
    });
});

test('without its own points the route starts and ends where the line does', () => {
    const track = convert({ start: null, finish: null });

    expect(track.points.map((p) => [p.lat, p.lng])).toEqual([
        [50, 30],
        [50.03, 30],
    ]);
    expect(convert({ start: null, finish: null, features: [line([])] })).toBeNull();
});

test('a missing elevation at the ends of the line is borrowed from the neighbour', () => {
    const track = convert({
        start: null,
        finish: null,
        features: [
            line([
                [30, 50],
                [30, 50.01, 110],
                [30, 50.02],
            ]),
        ],
    });

    expect(track.points[1].geometry.map((g) => g.ele)).toEqual([110, 110, 110]);
    expect(track.points[1].geometry[0].ext).toEqual({ ele: 110, extensions: {} });

    const flat = convert({
        start: null,
        finish: null,
        features: [
            line([
                [30, 50],
                [30, 50.01],
            ]),
        ],
    });
    expect(flat.points[1].geometry.map((g) => g.ele)).toEqual([NAN_MARKER, NAN_MARKER]);
    expect(flat.analysis).toEqual({});
});
