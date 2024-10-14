import { waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import { deleteFavGroup } from '../util.mjs';

const DEFAULT_FAV_GROUP = 'favorites';

export default async function test(favorites) {
    let prevName = '';
    let exist;
    for (const f of favorites) {
        if (prevName && prevName !== '') {
            await waitByRemoved(By.id(`se-menu-fav-${prevName}`));
        }
        const shortFavGroupName = f.name?.replace('favorites-', '');
        exist = await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`), { optional: true, idle: true });
        if (exist) {
            await deleteFavGroup(shortFavGroupName);
            prevName = shortFavGroupName;
        }
    }
    // delete default group
    exist = await waitBy(By.id(`se-menu-fav-${DEFAULT_FAV_GROUP}`), { optional: true, idle: true });
    if (exist) {
        await deleteFavGroup(DEFAULT_FAV_GROUP);
    }

    await waitBy(By.id('se-empty-page'));
}
