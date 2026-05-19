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
import actionIdleWait from '../../actions/actionIdleWait.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favorites = getFiles({ folder: 'favorites' });
    const shopGroupName = 'shops';
    const wptName = 'Test wpt';
    const wptName2 = 'Michael Kors';

    const { path: shopsPath } = favorites.find((t) => t.name === 'favorites-shops');

    // prepare
    await actionOpenFavorites();
    await actionDeleteAllFavorites(favorites);
    await clickBy(By.id('se-import-fav-group'));
    await actionsUploadFavorites({ files: shopsPath });
    await waitBy(By.id(`se-menu-fav-${shopGroupName}`));

    // --- Test 1: Edit → change name → tracks menu → keep editing → back button → exit → edit closes ---
    await clickBy(By.id(`se-menu-fav-${shopGroupName}`));
    await waitByRemoved(By.id(`se-menu-fav-${shopGroupName}`));
    await waitBy(By.id(`se-opened-fav-group-${shopGroupName}`));
    await waitBy(By.id(`se-actions-${wptName}`), { idle: true });
    await clickBy(By.id(`se-actions-${wptName}`));
    await waitBy(By.id('se-fav-item-actions'));
    await clickBy(By.id('se-edit-fav-item'));
    await waitBy(By.id('se-edit-fav-dialog'));
    await sendKeysBy(By.id('se-fav-name-input'), ' edited');
    // click tracks menu → navigates to tracks URL → guard intercepts → dialog appears
    await clickBy(By.id('se-show-menu-tracks'));
    await waitBy(By.id('se-exit-dialog-keep-editing'));
    await clickBy(By.id('se-exit-dialog-keep-editing'));
    // edit panel is still mounted (changes not saved)
    await waitBy(By.id('se-edit-fav-dialog'));
    // click back button in the edit panel → guard fires → exit → panel closes
    await clickBy(By.id('se-back-edit-wpt-panel'));
    await waitBy(By.id('se-exit-dialog-exit'));
    await clickBy(By.id('se-exit-dialog-exit'));
    await waitByRemoved(By.id('se-edit-fav-dialog'));
    // navigate back to favorites root
    await actionOpenFavorites();
    await clickBy(By.id('se-back-folder-button-favorites'));
    await waitBy(By.id(`se-menu-fav-${shopGroupName}`));
    // --- Test 2: Add from map → type name → open context menu again → add favorite → guard fires → dialog ---
    await actionOpenContextMenu();
    await clickBy(By.id('se-add-favorite-action'));
    await waitBy(By.id('se-add-fav-dialog'));
    await sendKeysBy(By.id('se-fav-name-input'), 'My New Favorite');
    await actionOpenContextMenu();
    await clickBy(By.id('se-add-favorite-action'));
    await waitBy(By.id('se-exit-dialog-exit'));
    await clickBy(By.id('se-exit-dialog-exit'));
    await clickBy(By.id('se-close-add-wpt-panel'));
    await waitBy(By.id(`se-menu-fav-${shopGroupName}`));
    // --- Test 3: Edit → no changes → add favorite from context menu → NO dialog ---
    await clickBy(By.id(`se-menu-fav-${shopGroupName}`));
    await waitByRemoved(By.id(`se-menu-fav-${shopGroupName}`));
    await waitBy(By.id(`se-opened-fav-group-${shopGroupName}`));
    await clickBy(By.id(`se-fav-item-name-${wptName}`));
    await waitBy(By.id(`se-fav-item-info-${wptName}`));
    await clickBy(By.id('se-edit-fav-item'));
    await waitBy(By.id('se-edit-fav-dialog'));
    await actionOpenContextMenu();
    await clickBy(By.id('se-add-favorite-action'));
    const unexpectedDialog = await waitBy(By.id('se-exit-dialog-exit'), { optional: true, idle: true });
    await assert(!unexpectedDialog, 'No exit dialog should appear when there are no changes');
    await waitByRemoved(By.id('se-edit-fav-dialog'));
    await waitBy(By.id('se-add-fav-dialog'));
    // close the add panel and go back to favorites root
    await clickBy(By.id('se-close-add-wpt-panel'));
    await clickBy(By.id('se-back-wpt-details'));
    // --- Test 4: Click map marker → edit → change name → click another map marker → guard → exit → wptName2 opens ---
    await waitBy(By.id(`se-opened-fav-group-${shopGroupName}`));
    // pan map to favorites: click wptName in list → map scrolls to it → go back to list
    await clickBy(By.id(`se-fav-item-name-${wptName}`));
    await waitBy(By.id(`se-fav-item-info-${wptName}`));
    await clickBy(By.id('se-back-wpt-details'));
    await waitByRemoved(By.id(`se-fav-item-info-${wptName}`));
    await waitBy(By.id(`se-opened-fav-group-${shopGroupName}`));
    // now markers are in viewport — click wptName map marker → WptDetails in right panel, list stays on left
    await waitBy(By.id(`se-fav-map-marker-${wptName}`), { idle: true });
    await clickBy(By.id(`se-fav-map-marker-${wptName}`));
    await waitBy(By.id(`se-fav-item-info-${wptName}`));
    await clickBy(By.id('se-edit-fav-item'));
    await waitBy(By.id('se-edit-fav-dialog'));
    await sendKeysBy(By.id('se-fav-name-input'), ' changed');
    // click wptName2 map marker → guard fires, edit panel stays open
    await clickBy(By.id(`se-fav-map-marker-${wptName2}`));

    // temp fix for tests (closing dialog after pan to marker)
    await actionIdleWait({ idle: 3000 });
    await actionIdleWait({ idle: 3000 });
    await actionIdleWait({ idle: 3000 });
    await clickBy(By.id(`se-fav-map-marker-${wptName2}`));

    await clickBy(By.id('se-exit-dialog-exit'));
    await waitByRemoved(By.id('se-edit-fav-dialog'));
    // after exit wptName2 details open
    await waitBy(By.id(`se-fav-item-info-${wptName2}`));
    // clean up
    await clickBy(By.id('se-close-wpt-details'));
    await clickBy(By.id('se-back-folder-button-favorites'));
    await waitBy(By.id(`se-menu-fav-${shopGroupName}`), { idle: true });
    await actionDeleteFavGroup(shopGroupName);
    await waitBy(By.id('se-empty-page'));

    await actionFinish();
}
