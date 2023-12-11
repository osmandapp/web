import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import { clickBy, waitBy } from '../lib.mjs';
import actionCheckFileExist from '../actions/actionCheckFileExist.mjs';
import { By } from 'selenium-webdriver';
import { deleteFavGroup, getFiles, uploadFavorites } from '../util.mjs';
import actionFinish from '../actions/actionFinish.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favGroupName = 'favorites-shops';
    const shortFavGroupName = 'shops';
    const wptName = 'Test wpt';

    // open favorite menu
    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-favorites'));

    const exist = await actionCheckFileExist({ id: `se-menu-fav-${shortFavGroupName}` });

    if (!exist) {
        const favorites = getFiles({ folder: 'favorites' });
        const { path } = favorites.find((t) => t.name === favGroupName);
        // create folder
        await clickBy(By.id('se-import-fav-group'));
        await uploadFavorites({ files: path });
        await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));
    }
    // open edit dialog
    await clickBy(By.id(`se-menu-fav-${shortFavGroupName}`));
    await waitBy(By.id(`se-opened-fav-group-${shortFavGroupName}`));

    await clickBy(By.id(`se-actions-${wptName}`));
    await waitBy(By.id('se-fav-item-actions'));
    await clickBy(By.id('se-delete-fav-item'));
    await waitBy(By.id('se-delete-fav-dialog'));

    // delete favorite item
    await clickBy(By.id('se-delete-fav-dialog-submit'));
    await waitBy(By.id(`se-actions-${wptName}`), { hidden: true });
    await waitBy(By.id(`se-fav-item-${wptName}`), { hidden: true });

    await clickBy(By.id('se-back-folder-button'));
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));

    await deleteFavGroup(shortFavGroupName);
    await waitBy(By.id('se-empty-page'));

    await actionFinish();
}
