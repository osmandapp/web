import { By } from 'selenium-webdriver';
import { waitBy } from '../../lib.mjs';
import actionDeleteFavGroup from './actionDeleteFavGroup.mjs';

/**
 * Action: actionDeleteFavGroupsByPattern(name)
 *
 * Deletes every favorite group of the open list whose name starts with `name`, every group with ''.
 */
export default async function test(name) {
    let group;
    while ((group = await waitBy(By.css(`[id^="se-menu-fav-${name}"]`), { optional: true, idle: true }))) {
        await actionDeleteFavGroup((await group.getAttribute('id')).replace('se-menu-fav-', ''));
    }
}
