import { By } from 'selenium-webdriver';
import { clickBy } from '../../lib.mjs';
import actionOpenPointMenu from './actionOpenPointMenu.mjs';

/**
 * Action: actionDeletePoint([lat, lng])
 *
 * Deletes the track point at [lat, lng] from its menu.
 */
export default async function test(point) {
    await actionOpenPointMenu(point);
    await clickBy(By.id('se-point-context-menu-delete'));
}
