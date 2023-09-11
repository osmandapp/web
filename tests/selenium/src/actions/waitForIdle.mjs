import { Condition } from 'selenium-webdriver';
import { TIMEOUT_WAIT } from '../settings.mjs';

/**
 * Action: waitForIdle(props, [params])
 *
 * Params: idle <Number> wait after last httpApi (ms)
 *
 * test: wait for all leaflet tiles loaded
 * test: wait 1 second after last httpApi request doneA
 *
 * TODO: add other kind of idle conditions (wait for GpxGraph, etc)
 */
export default async function test(props, { idle = 1000 } = {}) {
    const { driver } = props;

    await driver.wait(
        new Condition(
            'Leaflet Tiles Loaded',
            async (driver) => (await driver.executeScript('return window.seIsTilesLoaded')) === true
        ),
        TIMEOUT_WAIT
    );

    await driver.wait(
        new Condition('One Second after httpApi', async (driver) => {
            const ts = await driver.executeScript('return window.seLastHttpApiTimestamp');
            return ts > 0 && ts + idle < Date.now();
        }),
        TIMEOUT_WAIT
    );
}
