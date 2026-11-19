import { By } from 'selenium-webdriver';
import { clickBy, waitByRemoved } from '../../lib.mjs';

/**
 * Action: actionDeleteWptFromTab(name)
 *
 * Deletes the waypoint `name` by the button of its row in the open Waypoints tab.
 */
export default async function test(name) {
    await clickBy(By.css(`#se-wpt-row-${name} button`));
    await clickBy(By.id('se-global-confirmation-ok'));
    await waitByRemoved(By.id('se-global-confirmation-ok'));
}
