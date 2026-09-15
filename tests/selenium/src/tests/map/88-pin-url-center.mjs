import { assert, getMapHash, getMarker } from '../../lib.mjs';
import { driver } from '../../options.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';

const pin = { lat: 35.3, lng: 138.7 }; // far from any default map position
const hashCenter = { lat: 50.4584, lng: 30.531 };
const hashZoom = 12;
const pinZoom = 9; // used when the url has no hash
const maxCenterOffset = 0.01; // degrees, the pin is the center, not just somewhere on the screen

export default async function test() {
    // shared poi link: no hash, the map is centered on the pin and the hash is built from it
    await openColdMap(`poi/?pin=${pin.lat},${pin.lng}`);
    await assertMapView(pin, pinZoom, 'pin without hash');
    await assert(
        (await getMapHash()) === `${pinZoom}/${pin.lat.toFixed(3)}/${pin.lng.toFixed(3)}`,
        'hash is not built from the pin'
    );

    // pin wins over the hash center, zoom is kept from the hash
    await openColdMap(`?pin=${pin.lat},${pin.lng}#${hashZoom}/${hashCenter.lat}/${hashCenter.lng}`);
    await assertMapView(pin, hashZoom, 'pin with hash');
    await getMarker(pin.lat, pin.lng);

    // pin without hash on the map page: default pin zoom
    await openColdMap(`?pin=${pin.lat},${pin.lng}`);
    await assertMapView(pin, pinZoom, 'pin on map page');

    // without a pin the hash still defines the view
    await openColdMap(`#${hashZoom}/${hashCenter.lat}/${hashCenter.lng}`);
    await assertMapView(hashCenter, hashZoom, 'hash without pin');

    await actionFinish();
}

async function openColdMap(customUrl) {
    await driver.get('about:blank'); // urls which differ only by hash do not reload the app
    await actionOpenMap(customUrl);
}

async function assertMapView({ lat, lng }, zoom, tag) {
    const view = await driver.executeScript(`
        const center = window.__leafletMap.getCenter();
        return { lat: center.lat, lng: center.lng, zoom: window.__leafletMap.getZoom() };
    `);
    const offset = Math.max(Math.abs(view.lat - lat), Math.abs(view.lng - lng));

    await assert(
        offset < maxCenterOffset && view.zoom === zoom,
        `${tag}: expected ${lat},${lng} zoom ${zoom}, got ${view.lat},${view.lng} zoom ${view.zoom}`
    );
}
