import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import { clickBy, enclose, matchTextBy, sendKeysBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import { getFiles } from '../util.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import actionOpenFavorites from '../actions/favorites/actionOpenFavorites.mjs';
import actionDeleteAllFavorites from '../actions/favorites/actionDeleteAllFavorites.mjs';
import actionDeleteFavGroup from '../actions/favorites/actionDeleteFavGroup.mjs';
import actionsUploadFavorites from '../actions/favorites/actionsUploadFavorites.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favGroupName = 'favorites-shops';
    const shortFavGroupName = 'shops';
    const wptName = 'Test wpt';
    const wptName2 = 'Test wpt 2';

    const suffix = '-edited';

    const favorites = getFiles({ folder: 'favorites' });

    // prepare
    await actionOpenFavorites();
    await actionDeleteAllFavorites(favorites);
    const { path } = favorites.find((t) => t.name === favGroupName);

    // create folder
    await clickBy(By.id('se-import-fav-group'));
    await actionsUploadFavorites({ files: path });
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));

    // open favorite group
    await clickBy(By.id(`se-menu-fav-${shortFavGroupName}`));
    await waitByRemoved(By.id(`se-menu-fav-${shortFavGroupName}`));
    await waitBy(By.id(`se-opened-fav-group-${shortFavGroupName}`));

    // edit favorite item
    await clickBy(By.id(`se-actions-${wptName}`));
    await waitBy(By.id('se-fav-item-actions'));
    await clickBy(By.id('se-edit-fav-item'));
    await waitBy(By.id('se-edit-fav-dialog'));

    // edit favorite
    await sendKeysBy(By.id('se-fav-name-input'), suffix);
    await enclose(
        async () => {
            const input = await waitBy(By.id('se-edit-fav-dialog-address'));
            await input.sendKeys(suffix);
            return true;
        },
        { tag: 'edit-address-fav-item' }
    );
    await clickBy(By.id('se-edit-fav-item-submit'));
    await matchTextBy(By.id('se-fav-item-address'), suffix);
    await waitBy(By.id(`se-${wptName}${suffix}`));
    // delete favorite
    await clickBy(By.id(`se-actions-${wptName}${suffix}`));
    await waitBy(By.id('se-fav-item-actions'));
    await clickBy(By.id('se-delete-fav-item'));
    await waitBy(By.id('se-delete-fav-dialog'));
    await clickBy(By.id('se-delete-fav-dialog-submit'));
    await waitByRemoved(By.id(`se-actions-${wptName}${suffix}`));
    await waitByRemoved(By.id(`se-fav-item-name-${wptName}${suffix}`));

    await clickBy(By.id(`se-actions-${wptName2}`));
    await waitBy(By.id('se-fav-item-actions'));
    await clickBy(By.id('se-delete-fav-item'));
    await waitBy(By.id('se-delete-fav-dialog'));
    await clickBy(By.id('se-delete-fav-dialog-submit'));
    await waitByRemoved(By.id(`se-actions-${wptName2}`));
    await waitByRemoved(By.id(`se-fav-item-name-${wptName}`));

    await clickBy(By.id('se-back-folder-button'));
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));

    await actionDeleteFavGroup(shortFavGroupName);
    await waitBy(By.id('se-empty-page'));

    await actionFinish();
}
