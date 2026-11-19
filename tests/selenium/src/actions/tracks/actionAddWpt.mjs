import { By } from 'selenium-webdriver';
import { clickBy, enclose, getWaypointNames, rightClickBy, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';
import actionOpenContextMenu from '../map/actionOpenContextMenu.mjs';

/**
 * Action: actionAddWpt(name, [lat, lng])
 *
 * Param: point <Array> where the map context menu opens, the map center when omitted
 *
 * test: the edited track gets one more waypoint named `name` on the map
 */
export default async function test(name, point) {
    const countNamed = async () => (await getWaypointNames()).filter((wpt) => wpt === name).length;
    const before = await countNamed();

    if (point) {
        await rightClickBy(...point);
        await waitBy(By.id('se-context-menu'));
    } else {
        await actionOpenContextMenu();
    }
    await clickBy(By.id('se-add-wpt-action'));
    await waitBy(By.id('se-add-fav-dialog'));
    await sendKeysBy(By.id('se-fav-name-input'), name);
    await clickBy(By.id('se-add-fav-btn'));
    await waitByRemoved(By.id('se-add-fav-dialog'));
    await enclose(async () => (await countNamed()) > before, { tag: `waypoint ${name}` });
}
