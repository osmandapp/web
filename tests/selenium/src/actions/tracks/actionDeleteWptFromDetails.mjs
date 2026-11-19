import { By } from 'selenium-webdriver';
import { clickBy, waitByRemoved } from '../../lib.mjs';

/**
 * Action: actionDeleteWptFromDetails()
 *
 * Deletes the waypoint whose details are open.
 */
export default async function test() {
    await clickBy(By.id('se-delete-fav-item'));
    await clickBy(By.id('se-delete-fav-dialog-submit'));
    await waitByRemoved(By.id('se-delete-fav-dialog'));
}
