import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { getFiles } from '../util.mjs';
import actionOpenFavorites from '../actions/favorites/actionOpenFavorites.mjs';
import actionDeleteAllFavorites from '../actions/favorites/actionDeleteAllFavorites.mjs';
import actionDeleteFavGroup from '../actions/favorites/actionDeleteFavGroup.mjs';
import { clickBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionsUploadFavorites from '../actions/favorites/actionsUploadFavorites.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favGroupName = 'favorites-Castle Bromwich зміна назви ще раз    _-__-__-_';
    const shortFavGroupName = 'Castle Bromwich зміна назви ще раз    :::';

    const favorites = getFiles({ folder: 'favorites', filter: false });
    const { path } = favorites.find((t) => t.name === favGroupName);

    // prepare
    await actionOpenFavorites();
    await actionDeleteAllFavorites(favorites);

    await clickBy(By.id('se-import-fav-group'));
    await actionsUploadFavorites({ files: path });

    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));
    await waitBy(By.id('se-fav-group-size-2 points'));

    await clickBy(By.id(`se-menu-fav-${shortFavGroupName}`));
    await waitByRemoved(By.id(`se-menu-fav-${shortFavGroupName}`));
    await waitBy(By.id(`se-opened-fav-group-${shortFavGroupName}`));

    await clickBy(By.id('se-back-folder-button-favorites'));

    await actionDeleteFavGroup(`${shortFavGroupName}`);
    await waitBy(By.id('se-empty-page'));

    await actionFinish();
}
