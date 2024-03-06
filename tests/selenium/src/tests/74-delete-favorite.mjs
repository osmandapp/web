import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import { clickBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import { deleteFavGroup, getFiles, uploadFavorites } from '../util.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import actionOpenFavorites from '../actions/actionOpenFavorites.mjs';
import actionDeleteAllFavorites from '../actions/actionDeleteAllFavorites.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favGroupName = 'favorites-shops';
    const shortFavGroupName = 'shops';
    const wptName = 'Test wpt';

    const favorites = getFiles({ folder: 'favorites' });

    await actionOpenFavorites();
    await actionDeleteAllFavorites(favorites);

    const { path } = favorites.find((t) => t.name === favGroupName);
    // create folder
    await clickBy(By.id('se-import-fav-group'));
    await uploadFavorites({ files: path });
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));

    // open edit dialog
    await clickBy(By.id(`se-menu-fav-${shortFavGroupName}`));
    await waitBy(By.id(`se-opened-fav-group-${shortFavGroupName}`));

    await clickBy(By.id(`se-actions-${wptName}`));
    await waitBy(By.id('se-fav-item-actions'));
    await clickBy(By.id('se-delete-fav-item'));
    await waitBy(By.id('se-delete-fav-dialog'));

    // delete favorite item
    await clickBy(By.id('se-delete-fav-dialog-submit'));
    await waitByRemoved(By.id(`se-actions-${wptName}`));
    await waitByRemoved(By.id(`se-fav-item-name-${wptName}`));

    await clickBy(By.id('se-back-folder-button'));
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));

    await deleteFavGroup(shortFavGroupName);
    await waitBy(By.id('se-empty-page'));

    await actionFinish();
}
