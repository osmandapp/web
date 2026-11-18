import { By } from 'selenium-webdriver';
import { rightClickBy, waitBy } from '../../lib.mjs';

/**
 * Action: actionOpenPointMenu([lat, lng])
 *
 * test: the menu of the track point at [lat, lng] is open
 */
export default async function test(point) {
    await rightClickBy(...point);
    await waitBy(By.id('se-point-context-menu'));
}
