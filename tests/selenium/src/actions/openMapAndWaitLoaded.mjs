import { until, Condition } from 'selenium-webdriver';

import { TIMEOUT_WAIT } from '../settings.mjs';

export default async function test(props) {
    const { driver, url } = props;

    await driver.get(url);

    await driver.wait(until.titleIs('OsmAnd Map'), TIMEOUT_WAIT);

    await driver.wait(
        new Condition('One Second after httpApi', async (driver) => {
            const ts = await driver.executeScript('return window.seLastHttpApiTimestamp');
            return ts > 0 && ts + 1000 < Date.now();
        }),
        TIMEOUT_WAIT
    );

    await driver.wait(
        new Condition(
            'Leaflet Tiles Loaded',
            async (driver) => (await driver.executeScript('return window.seIsTilesLoaded')) === true
        ),
        TIMEOUT_WAIT
    );
}
