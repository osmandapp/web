'use strict';

import { Condition } from 'selenium-webdriver';

import { driver, TIMEOUT_WAIT } from '../options.mjs';

/**
 * Action: actionIdleWait({ idle = 1000 })
 *
 * Params: idle <Number> wait after last activity
 *
 * failed: reached timeout before leaflet tiles loaded
 * failed: reached idle timeout after seActivityTimestamp
 */
export default async function test({ idle = 1000 } = {}) {
    await driver.wait(
        new Condition(
            'Leaflet Tiles Loaded',
            async () => (await driver.executeScript('return window.seIsTilesLoaded')) === true
        ),
        TIMEOUT_WAIT
    );

    await driver.wait(
        new Condition('Idle after Activity Timestamp', async () => {
            const ts = await driver.executeScript('return window.seActivityTimestamp');
            return ts > 0 && ts + idle < Date.now();
        }),
        TIMEOUT_WAIT
    );
}
