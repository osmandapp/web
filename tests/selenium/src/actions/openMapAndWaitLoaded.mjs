import { until } from 'selenium-webdriver';
import waitForIdle from './waitForIdle.mjs';
import { TIMEOUT_WAIT } from '../settings.mjs';

/**
 * Action: openMapAndWaitLoaded(props)
 *
 * test: check site's title
 * test: wait-for-idle (external action)
 */
export default async function test(props) {
    const { driver, url } = props;

    await driver.get(url);

    await driver.wait(until.titleIs('OsmAnd Map'), TIMEOUT_WAIT);

    await waitForIdle(props);
}
