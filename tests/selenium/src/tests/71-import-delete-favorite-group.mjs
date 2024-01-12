import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import { clickBy, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import { deleteFavGroup, getFiles, uploadFavorites } from '../util.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import actionOpenFavorites from '../actions/actionOpenFavorites.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favGroupName = 'favorites-shops';
    const shortFavGroupName = 'shops';

    const favorites = getFiles({ folder: 'favorites' });
    const { path } = favorites.find((t) => t.name === favGroupName);

    await actionOpenFavorites();

    // delete old group when need
    const exist = await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`), { optional: true, idle: true });
    if (exist) {
        await deleteFavGroup(shortFavGroupName);
        await waitBy(By.id('se-empty-page'));
    }

    // import new group
    await clickBy(By.id('se-import-fav-group'));
    await uploadFavorites({ files: path });
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));

    // delete group
    await deleteFavGroup(shortFavGroupName);
    await waitBy(By.id('se-empty-page'));

    await actionFinish();
}
