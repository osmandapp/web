import { By } from 'selenium-webdriver';
import { clickBy, sendKeysBy, waitBy } from '../../lib.mjs';
import { ROUTE_SUMMARY_SELECTOR } from '../../options.mjs';

/**
 * Action: actionBuildRoute({ start, finish })
 *
 * Param: start, finish <String> 'lat, lng' typed into the route inputs
 *
 * test: the route between the typed points is built and its summary is shown
 */
export default async function test({ start, finish }) {
    await clickBy(By.id('se-route-start-point'));
    await clickBy(By.id('se-route-start-point-clear'), { optional: true });
    await clickBy(By.id('se-navigation-title'));
    await clickBy(By.id('se-route-finish-point'));
    await clickBy(By.id('se-route-finish-point-clear'), { optional: true });

    await sendKeysBy(By.id('se-route-start-point'), start + '\n');
    await sendKeysBy(By.id('se-route-finish-point'), finish + '\n');

    await waitBy(ROUTE_SUMMARY_SELECTOR);
}
