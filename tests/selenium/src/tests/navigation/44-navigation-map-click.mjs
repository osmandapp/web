'use strict';

import { By } from 'selenium-webdriver';

import {
    assert,
    clickBy,
    expectInputExactBy,
    formatLatLon,
    getUrl,
    leftClickBy,
    waitBy,
    waitByRemoved,
} from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { ROUTE_SUMMARY_SELECTOR } from '../../options.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';

const START_LATLNG = { lat: 50.45225, lon: 30.5231 };
const FINISH_LATLNG = { lat: 50.448378, lon: 30.525395 };
const NEW_START_LATLNG = { lat: 50.452087, lon: 30.525877 };

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await leftClickBy(START_LATLNG.lat, START_LATLNG.lon);
    await actionIdleWait();
    await assertNoStartInUrl();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));
    await waitBy(By.id('se-close-folder-button-tracks'));

    await leftClickBy(FINISH_LATLNG.lat, FINISH_LATLNG.lon);
    await actionIdleWait();
    await assertNoStartInUrl();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-navigation'));

    await leftClickBy(START_LATLNG.lat, START_LATLNG.lon);
    await actionIdleWait();

    await expectInputExactBy(By.id('se-route-start-point'), formatLatLon(START_LATLNG));
    await expectInputExactBy(By.id('se-route-finish-point'), '');

    await leftClickBy(FINISH_LATLNG.lat, FINISH_LATLNG.lon);
    await actionIdleWait();

    await waitByRemoved(By.id('se-progress-route-calculation'));
    await waitBy(ROUTE_SUMMARY_SELECTOR);
    await expectInputExactBy(By.id('se-route-finish-point'), formatLatLon(FINISH_LATLNG));

    await clickBy(By.id('se-route-start-point'));
    await clickBy(By.id('se-route-start-point-clear'));
    await waitByRemoved(ROUTE_SUMMARY_SELECTOR);
    await expectInputExactBy(By.id('se-route-start-point'), '');
    await expectInputExactBy(By.id('se-route-finish-point'), formatLatLon(FINISH_LATLNG));

    await leftClickBy(NEW_START_LATLNG.lat, NEW_START_LATLNG.lon);
    await actionIdleWait();

    await waitBy(ROUTE_SUMMARY_SELECTOR);
    await expectInputExactBy(By.id('se-route-start-point'), formatLatLon(NEW_START_LATLNG));
    await expectInputExactBy(By.id('se-route-finish-point'), formatLatLon(FINISH_LATLNG));

    await actionFinish();
}

async function assertNoStartInUrl() {
    const currentUrl = await getUrl();
    await assert(!currentUrl.includes('start='), `URL should not contain start=, got "${currentUrl}"`);
}
