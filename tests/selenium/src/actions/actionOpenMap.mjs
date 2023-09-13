'use strict';

import { until } from 'selenium-webdriver';

import { driver, url, TIMEOUT_WAIT } from '../options.mjs';

import actionIdleWait from './actionIdleWait.mjs';

/**
 * Action: actionOpenMap()
 *
 * test: check site's title
 * test: wait-for-idle (external action)
 */
export default async function test() {
    await driver.get(url);

    await driver.wait(until.titleIs('OsmAnd Map'), TIMEOUT_WAIT);

    await actionIdleWait();
}
