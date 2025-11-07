'use strict';

import { By } from 'selenium-webdriver';
import { assert, clickBy, matchValueBy, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';

import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionFinish from '../../actions/actionFinish.mjs';

const A = '50.45000, 30.52340';
const B = '50.46000, 30.53340';
const VIA = '50.49500, 30.52840';
const ROUTE_SUMMARY_SELECTOR = By.id('se-route-summary-info');

export default async function test() {
    await actionOpenMap();
    await clickBy(By.id('se-show-menu-navigation'));

    await sendKeysBy(By.id('se-route-start-point'), A + '\n');
    await sendKeysBy(By.id('se-route-finish-point'), B + '\n');
    await waitBy(ROUTE_SUMMARY_SELECTOR);

    const initialRouteInfo = await getRouteInfo();
    const initialDistance = getRouteDistance(initialRouteInfo);

    await clickBy(By.id('se-route-start-point-swap'));
    await actionIdleWait();

    await matchValueBy(By.id('se-route-start-point'), B);
    await matchValueBy(By.id('se-route-finish-point'), A);

    const swappedRouteInfo = await getRouteInfo();
    const swappedDistance = getRouteDistance(swappedRouteInfo);
    await assert(initialDistance !== swappedDistance, 'Route distance should change after swap');

    await clickBy(By.id('se-route-start-point-swap'));
    await actionIdleWait();
    await matchValueBy(By.id('se-route-start-point'), A);
    await matchValueBy(By.id('se-route-finish-point'), B);

    await clickBy(By.id('se-route-finish-point-add'));
    await actionIdleWait();

    await sendKeysBy(By.id('se-route-via-point-0'), VIA + '\n');
    await actionIdleWait();

    await matchValueBy(By.id('se-route-via-point-0'), VIA);

    const routeWithViaInfo = await getRouteInfo();
    const distanceWithVia = getRouteDistance(routeWithViaInfo);
    await assert(initialDistance !== distanceWithVia, 'Route distance should change after adding via point');

    await clickBy(By.id('se-route-via-point-0-remove'));
    await actionIdleWait();

    const routeAfterRemoveInfo = await getRouteInfo();
    const distanceAfterRemove = getRouteDistance(routeAfterRemoveInfo);
    await assert(distanceWithVia !== distanceAfterRemove, 'Route distance should change after removing via point');

    await clickBy(By.id('se-route-finish-point'));
    await clickBy(By.id('se-route-finish-point-clear'));
    await actionIdleWait();
    const finishInput = await waitBy(By.id('se-route-finish-point'));
    const finishValue = await finishInput.getAttribute('value');
    await assert(finishValue === '', `Finish point should be empty, got "${finishValue}"`);
    await waitByRemoved(ROUTE_SUMMARY_SELECTOR);

    await sendKeysBy(By.id('se-route-finish-point'), B + '\n');
    await waitBy(ROUTE_SUMMARY_SELECTOR);

    await clickBy(By.id('se-route-start-point'));
    await clickBy(By.id('se-route-start-point-clear'));
    await actionIdleWait();
    const startInput = await waitBy(By.id('se-route-start-point'));
    const startValue = await startInput.getAttribute('value');
    await assert(startValue === '', `Start point should be empty, got "${startValue}"`);
    await waitByRemoved(ROUTE_SUMMARY_SELECTOR);

    await actionFinish();
}

async function getRouteInfo() {
    const element = await waitBy(ROUTE_SUMMARY_SELECTOR);
    return await element.getText();
}

function getRouteDistance(routeInfo) {
    // Extract distance from route info like "Line 1.2 km, 0:05 min" -> "1.2 km"
    const match = routeInfo.match(/(\d+\.?\d*)\s*km/);
    return match ? match[1] : null;
}
