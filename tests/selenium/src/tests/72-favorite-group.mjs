import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import { getFiles } from '../util.mjs';
import { clickBy, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../actions/actionFinish.mjs';
import actionRenameFavGroup from '../actions/favorites/actionRenameFavGroup.mjs';
import actionOpenFavorites from '../actions/favorites/actionOpenFavorites.mjs';
import actionDeleteAllFavorites from '../actions/favorites/actionDeleteAllFavorites.mjs';
import actionDeleteFavGroup from '../actions/favorites/actionDeleteFavGroup.mjs';
import actionsUploadFavorites from '../actions/favorites/actionsUploadFavorites.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favGroupName = 'favorites-shops';
    const shortFavGroupName = 'shops';
    const suffix = '-renamed';

    const favorites = getFiles({ folder: 'favorites' });
    const { path } = favorites.find((t) => t.name === favGroupName);

    // prepare
    await actionOpenFavorites();
    await actionDeleteAllFavorites(favorites);

    // create folder
    await clickBy(By.id('se-import-fav-group'));
    await actionsUploadFavorites({ files: path });
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));

    // delete duplicate old group when need
    const existDuplicate = await waitBy(By.id(`se-menu-fav-${shortFavGroupName}${suffix}`), {
        optional: true,
        idle: true,
    });
    if (existDuplicate) {
        await actionDeleteFavGroup(`${shortFavGroupName}${suffix}`);
    }

    //rename folder
    await actionRenameFavGroup(shortFavGroupName, suffix);

    // check error "Favorite group already exists"
    await clickBy(By.id(`se-folder-actions-button-${shortFavGroupName}${suffix}`));
    await waitBy(By.id('se-favorite-folder-actions'));
    await clickBy(By.id('se-folder-actions-rename'));
    await waitBy(By.id('se-rename-fav-dialog'));
    await clickBy(By.id('se-rename-fav-submit'));
    await waitBy(By.id('se-rename-fav-input-helper-text'));

    await clickBy(By.id('se-rename-fav-cancel'));

    await actionDeleteFavGroup(`${shortFavGroupName}${suffix}`);
    await waitBy(By.id('se-empty-page'));

    await actionFinish();
}
