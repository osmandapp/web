import {
    getInitialView,
    getPinPointFromUrl,
    flyZoom,
    initialPosition,
    initialZoom,
} from '@map/map/util/initialMapView';

const hashView = '#12/50.4584/30.5310';

function openUrl(search, hash = '') {
    window.history.replaceState(null, '', `/map/${search}${hash}`);
}

// leaflet wraps the longitude with a float error, so the center is compared with a tolerance
function expectView([lat, lng], zoom) {
    const view = getInitialView();

    expect(view.zoom).toBe(zoom);
    expect(view.center[0]).toBeCloseTo(lat, 6);
    expect(view.center[1]).toBeCloseTo(lng, 6);
}

test('the pin defines the center, the hash only the zoom', () => {
    openUrl('?pin=35.3,138.7');
    expectView([35.3, 138.7], flyZoom);

    openUrl('?pin=35.3,138.7', hashView);
    expectView([35.3, 138.7], 12);

    openUrl('', hashView);
    expectView([50.4584, 30.531], 12);

    // the wheel zoom is fractional, the hash keeps it to hundredths
    openUrl('', '#13.65/50.4584/30.5310');
    expectView([50.4584, 30.531], 13.65);

    openUrl('');
    expectView(initialPosition, initialZoom);
});

test('a longitude out of range is wrapped for the map', () => {
    openUrl('?pin=35.3,200');

    expectView([35.3, -160], flyZoom);
});

test('a pin which is not a coordinate pair is ignored', () => {
    const broken = ['?pin=', '?pin=abc', '?pin=35.3', '?pin=35.3,138.7,9', '?pin=35.3,lng'];

    for (const search of broken) {
        openUrl(search, hashView);
        expect(getPinPointFromUrl()).toBeNull();
        expectView([50.4584, 30.531], 12);
    }
});
