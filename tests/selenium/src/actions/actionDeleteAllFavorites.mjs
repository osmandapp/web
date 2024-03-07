import { waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import { deleteFavGroup } from '../util.mjs';

export default async function test(favorites) {
    let prevName = '';
    for (const f of favorites) {
        if (prevName && prevName !== '') {
            await waitByRemoved(By.id(`se-menu-fav-${prevName}`));
        }
        const shortFavGroupName = f.name?.replace('favorites-', '');
        const exist = await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`), { optional: true, idle: true });
        if (exist) {
            await deleteFavGroup(shortFavGroupName);
            prevName = shortFavGroupName;
        }
    }
    await waitBy(By.id('se-empty-page'));
}
