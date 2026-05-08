import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenContextMenu from '../../actions/map/actionOpenContextMenu.mjs';
import { assert, clickBy, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { getFiles } from '../../util.mjs';
import actionOpenFavorites from '../../actions/favorites/actionOpenFavorites.mjs';
import actionDeleteAllFavorites from '../../actions/favorites/actionDeleteAllFavorites.mjs';
import actionDeleteFavGroup from '../../actions/favorites/actionDeleteFavGroup.mjs';
import actionsUploadFavorites from '../../actions/favorites/actionsUploadFavorites.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favorites = getFiles({ folder: 'favorites' });
    const shopGroupName = 'shops';
    const foodGroupName = 'food';
    const conflictGroupName = 'shops - 1';
    const wptName = 'Test wpt';

    const { path: shopsPath } = favorites.find((t) => t.name === 'favorites-shops');
    const { path: foodPath } = favorites.find((t) => t.name === 'favorites-food');

    // prepare
    await actionOpenFavorites();
    await actionDeleteAllFavorites(favorites);

    // import shops group
    await clickBy(By.id('se-import-fav-group'));
    await actionsUploadFavorites({ files: shopsPath });
    await waitBy(By.id(`se-menu-fav-${shopGroupName}`));

    // import food group
    await clickBy(By.id('se-import-fav-group'));
    await actionsUploadFavorites({ files: foodPath });
    await waitBy(By.id(`se-menu-fav-${foodGroupName}`));

    // clean up any leftover conflict group from previous runs
    const existConflict = await waitBy(By.id(`se-menu-fav-${conflictGroupName}`), { optional: true, idle: true });
    if (existConflict) {
        await actionDeleteFavGroup(conflictGroupName);
    }

    // --- Test 1: Import with name conflict → Keep both ---
    await clickBy(By.id('se-import-fav-group'));
    await actionsUploadFavorites({ files: shopsPath });
    await waitBy(By.id('se-import-favorite-dialog'));
    await clickBy(By.id('se-import-fav-keep-both'));
    await waitByRemoved(By.id('se-import-favorite-dialog'));
    await waitBy(By.id(`se-menu-fav-${conflictGroupName}`));
    await actionDeleteFavGroup(conflictGroupName);

    // --- Test 2: Close add panel without saving ---
    await actionOpenContextMenu();
    await clickBy(By.id('se-add-favorite-action'));
    await waitBy(By.id('se-add-fav-dialog'));
    await sendKeysBy(By.id('se-fav-name-input'), 'ShouldNotExist');
    await clickBy(By.id('se-close-add-wpt-panel'));
    await waitByRemoved(By.id('se-add-fav-dialog'));
    // verify no default 'favorites' group was created (favorite was not saved)
    const notSaved = await waitBy(By.id('se-menu-fav-favorites'), { optional: true, idle: true });
    await assert(!notSaved, 'Favorite should not be saved after close without save');

    // --- Test 3: Move favorite to another group via edit ---
    await clickBy(By.id(`se-menu-fav-${shopGroupName}`));
    await waitByRemoved(By.id(`se-menu-fav-${shopGroupName}`));
    await waitBy(By.id(`se-opened-fav-group-${shopGroupName}`));
    await waitBy(By.id(`se-actions-${wptName}`), { idle: true });
    await clickBy(By.id(`se-actions-${wptName}`));
    await waitBy(By.id('se-fav-item-actions'));
    await clickBy(By.id('se-edit-fav-item'));
    await waitBy(By.id('se-edit-fav-dialog'));
    // select food group via folder selection panel
    await clickBy(By.id('se-fav-group-selector'));
    await waitBy(By.id('se-back-folder-selection-panel'));
    await clickBy(By.id(`se-fav-group-item-${foodGroupName}`));
    await clickBy(By.id('se-back-folder-selection-panel'));
    await waitByRemoved(By.id('se-back-folder-selection-panel'));
    await clickBy(By.id('se-edit-fav-item-submit'));
    await waitByRemoved(By.id('se-edit-fav-dialog'));

    // go back to favorites list from shops folder
    await clickBy(By.id('se-back-folder-button-favorites'));
    await waitBy(By.id(`se-menu-fav-${shopGroupName}`));

    // verify wpt moved to food group
    await clickBy(By.id(`se-menu-fav-${foodGroupName}`));
    await waitBy(By.id(`se-opened-fav-group-${foodGroupName}`));
    await waitBy(By.id(`se-fav-item-name-${wptName}`));
    await clickBy(By.id('se-back-folder-button-favorites'));
    await waitBy(By.id(`se-menu-fav-${shopGroupName}`));

    // verify wpt removed from shops group
    await clickBy(By.id(`se-menu-fav-${shopGroupName}`));
    await waitBy(By.id(`se-opened-fav-group-${shopGroupName}`));
    const stillInShops = await waitBy(By.id(`se-fav-item-name-${wptName}`), { optional: true, idle: true });
    await assert(!stillInShops, 'Wpt should have been removed from shops group');
    await clickBy(By.id('se-back-folder-button-favorites'));
    await waitBy(By.id(`se-menu-fav-${shopGroupName}`));

    // clean up
    await actionDeleteFavGroup(foodGroupName);
    await actionDeleteFavGroup(shopGroupName);
    await waitBy(By.id('se-empty-page'));

    await actionFinish();
}
