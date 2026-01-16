import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import { assert, clickBy, leftClickBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { driver } from '../../options.mjs';

const STOP_1_COORDS = { lat: 50.450974, lon: 30.525448 };
const STOP_2_COORDS = { lat: 50.44954, lon: 30.523281 };

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-menu-configuremap'));
    await waitBy(By.id('se-configure-map-menu-name'));

    await clickBy(By.id('se-configure-map-menu-transport_stops'));
    await actionIdleWait();
    await waitBy(By.className('leaflet-marker-icon'));

    await leftClickBy(STOP_1_COORDS.lat, STOP_1_COORDS.lon);
    await actionIdleWait();
    await waitBy(By.id('se-wpt-details'));

    await waitBy(By.css("[id^='se-transport-route-']"));
    const routeElements = await driver.findElements(By.css("[id^='se-transport-route-']"));
    await assert(routeElements.length > 0, 'Transport stop should have routes');

    await routeElements[0].click();
    await actionIdleWait();

    const hasRouteOnMap = await driver.executeScript(`
        const layers = Object.values(window.__leafletMap._layers || {});
        return layers.some(layer => layer instanceof L.Polyline && layer.options && layer.options.color);
    `);
    await assert(hasRouteOnMap, 'Transport route line should appear on map');

    await leftClickBy(STOP_2_COORDS.lat, STOP_2_COORDS.lon);
    await actionIdleWait();
    await waitBy(By.id('se-wpt-details'));

    await actionIdleWait();
    const routeStillOnMap = await driver.executeScript(`
        const layers = Object.values(window.__leafletMap._layers || {});
        const previousRoute = layers.find(layer => layer instanceof L.Polyline && layer.options && layer.options.color === '#237BFF');
        return previousRoute !== undefined;
    `);
    await assert(!routeStillOnMap, 'Previous transport route should disappear from map');

    await clickBy(By.id('se-show-menu-configuremap'));
    await clickBy(By.id('se-show-menu-configuremap'));
    await waitBy(By.id('se-configure-map-menu-name'));

    await clickBy(By.id('se-configure-map-menu-transport_stops'));
    await actionIdleWait();
    await waitByRemoved(By.className('leaflet-marker-icon'));

    await actionFinish();
}
