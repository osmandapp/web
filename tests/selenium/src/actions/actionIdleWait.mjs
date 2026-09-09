'use strict';

import { Condition } from 'selenium-webdriver';

import { driver, TIMEOUT_REQUIRED, IDLE_DELAY } from '../options.mjs';

/**
 * Action: actionIdleWait({ idle = 1000, tiles = false })
 *
 * Params: idle <Number> wait after last activity
 * Params: tiles <Boolean> also wait for leaflet tiles (map interaction, screenshot)
 *
 * failed: reached timeout before leaflet tiles loaded
 * failed: reached idle timeout after seActivityTimestamp
 */
export default async function test({ idle = IDLE_DELAY, tiles = false } = {}) {
    if (tiles) {
        await driver.wait(
            new Condition(
                'Leaflet Tiles Loaded',
                async () => (await driver.executeScript('return window.seIsTilesLoaded')) === true
            ),
            TIMEOUT_REQUIRED
        );
    }

    await driver.wait(
        new Condition(`Idle after Activity Timestamp (${idle})`, async () => {
            const ts = await driver.executeScript('return window.seActivityTimestamp');
            return ts > 0 && ts + idle < Date.now();
        }),
        TIMEOUT_REQUIRED
    );
}
