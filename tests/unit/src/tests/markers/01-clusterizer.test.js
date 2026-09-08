import { clusterMarkers } from '@map/map/util/Clusterizer';
import { POI_ELO } from '@map/infoblock/components/wpt/WptTagsProvider';

const LAT = 0;
const OFFSET_PX = 40; // keep the places away from the tile border the favorites are clustered by
const M_PER_DEG = (6371000 * Math.PI) / 180; // leaflet measures distances on a sphere of this radius

// meters per pixel at the equator
const mpp = (zoom) => 40075017 / (256 * 2 ** zoom);

// a place `px` screen pixels to the east of the zero meridian
function poi(px, zoom, properties = {}) {
    return {
        type: 'Feature',
        properties,
        geometry: { type: 'Point', coordinates: [((px + OFFSET_PX) * mpp(zoom)) / M_PER_DEG, LAT] },
    };
}

function wpt(px, zoom, name, inExt = false) {
    const lon = ((px + OFFSET_PX) * mpp(zoom)) / M_PER_DEG;
    return inExt ? { name, ext: { lat: LAT, lon } } : { name, lat: LAT, lon };
}

const names = (places) => places.map((p) => p.properties?.[POI_ELO] ?? p.properties?.rowNum ?? p.name);

describe('clusterMarkers: poi', () => {
    const ZOOM = 14;
    // by default the big markers are kept 64 px apart, the dots 12 px
    const places = [
        poi(0, ZOOM, { [POI_ELO]: 10 }),
        poi(20, ZOOM, { [POI_ELO]: 100 }),
        poi(100, ZOOM, { [POI_ELO]: 50 }),
        poi(105, ZOOM, { [POI_ELO]: 5 }),
    ];

    test('the most popular place takes the big marker, the ones it covers become dots', () => {
        const { mainMarkers, secondaryMarkers } = clusterMarkers({ places, zoom: ZOOM, latitude: LAT, isPoi: true });

        // 100 wins over 10 standing 20 px away, 50 is far enough for its own big marker
        expect(names(mainMarkers)).toEqual([100, 50]);
        // 10 is 20 px from a big marker - still a dot; 5 is 5 px from one - dropped
        expect(names(secondaryMarkers)).toEqual([10]);
    });

    test('the caller can ask for a denser map', () => {
        const { mainMarkers, secondaryMarkers } = clusterMarkers({
            places,
            zoom: ZOOM,
            latitude: LAT,
            isPoi: true,
            mainRadiusPx: 8,
            secondaryRadiusPx: 4,
        });

        expect(names(mainMarkers)).toEqual([100, 50, 10]);
        expect(names(secondaryMarkers)).toEqual([5]);
    });
});

describe('clusterMarkers: favorites', () => {
    test('a waypoint too close to a big marker becomes a dot, one too close to a dot is dropped', () => {
        const ZOOM = 14; // big markers 15 px apart, dots 3 px
        const places = [wpt(0, ZOOM, 'a'), wpt(5, ZOOM, 'b', true), wpt(20, ZOOM, 'c'), wpt(21, ZOOM, 'd')];

        const { mainMarkers, secondaryMarkers } = clusterMarkers({
            places,
            zoom: ZOOM,
            latitude: LAT,
            iconSize: 10,
            secondaryIconSize: 2,
            isFavorites: true,
        });

        expect(names(mainMarkers)).toEqual(['a', 'c']);
        expect(names(secondaryMarkers)).toEqual(['b']);
    });

    test('a cluster shows at most three big markers when the whole country is on the screen', () => {
        const ZOOM = 5;
        const places = [0, 2, 4, 8].map((px) => wpt(px, ZOOM, 'p' + px));

        const { mainMarkers, secondaryMarkers } = clusterMarkers({
            places,
            zoom: ZOOM,
            latitude: LAT,
            iconSize: 1,
            secondaryIconSize: 1,
            isFavorites: true,
        });

        expect(names(mainMarkers)).toEqual(['p0', 'p2', 'p4']);
        expect(names(secondaryMarkers)).toEqual(['p8']);
    });
});

describe('clusterMarkers: explore', () => {
    const ZOOM = 14;
    const places = [
        poi(0, ZOOM, { rowNum: 150 }),
        ...Array.from({ length: 25 }, (_, i) => poi((i + 1) * 200, ZOOM, { rowNum: 24 - i })),
    ];

    test('the top places take the big markers, at most twenty of them', () => {
        const given = [...places];

        const { mainMarkers, secondaryMarkers } = clusterMarkers({
            places: given,
            zoom: ZOOM,
            latitude: LAT,
            isExplore: true,
        });

        expect(names(mainMarkers)).toEqual(Array.from({ length: 20 }, (_, i) => i));
        // the place ranked below the first hundred never takes a big marker, the rest become dots
        expect(names(secondaryMarkers)).toEqual([20, 21, 22, 23, 24, 150]);
        expect(given).toEqual(places);
    });
});
