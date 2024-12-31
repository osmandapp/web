'use strict';

import { until } from 'selenium-webdriver';

import { driver, url, TIMEOUT_REQUIRED } from '../options.mjs';

import actionIdleWait from './actionIdleWait.mjs';

/**
 * Action: actionOpenMap()
 *
 * test: check site's title
 * test: wait-for-idle (external action)
 */
export default async function test(customUrl = null) {
    const newUrl = customUrl ? url.split('#')[0] + customUrl : url;
    await driver.get(newUrl);

    await driver.wait(until.titleIs('OsmAnd Map'), TIMEOUT_REQUIRED);

    await actionIdleWait();
}
