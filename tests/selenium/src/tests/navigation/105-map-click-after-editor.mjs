import { By } from 'selenium-webdriver';
import { clickBy, expectInputExactBy, formatLatLon, leftClickBy, waitBy, waitByRemoved } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionCreateRoute, { ROUTE_POINTS } from '../../actions/tracks/actionCreateRoute.mjs';

const START_LATLNG = { lat: 50.4935, lon: 30.5235 };

// the track editor keeps the map clicks of the other layers: Navigation picks a point after it
export default async function test() {
    await actionOpenMap('#15/50.4946/30.5220');
    await actionCreateRoute(ROUTE_POINTS);
    await waitBy(By.id('se-track-context-menu'));
    await clickBy(By.id('se-button-back'));
    await waitByRemoved(By.id('se-panel-button-undo'));

    await clickBy(By.id('se-show-menu-navigation'));
    await leftClickBy(START_LATLNG.lat, START_LATLNG.lon);
    await actionIdleWait();
    await expectInputExactBy(By.id('se-route-start-point'), formatLatLon(START_LATLNG));

    await actionFinish();
}
