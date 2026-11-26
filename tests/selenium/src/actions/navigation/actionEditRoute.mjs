import { By } from 'selenium-webdriver';
import { clickBy, waitBy, waitByRemoved } from '../../lib.mjs';

/**
 * Action: actionEditRoute()
 *
 * test: Edit in the route info opens the route as a local track in the editor
 */
export default async function test() {
    await clickBy(By.id('se-route-track-actions-edit'));
    await waitByRemoved(By.id('se-route-track-actions-edit'));
    await waitBy(By.id('se-local-track-actions-save-to-cloud'));
}
