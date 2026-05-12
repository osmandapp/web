import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import { assert, clickBy, enclose, getMapHash, matchTextBy, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { getFiles } from '../../util.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionOpenFavorites from '../../actions/favorites/actionOpenFavorites.mjs';
import actionDeleteAllFavorites from '../../actions/favorites/actionDeleteAllFavorites.mjs';
import actionDeleteFavGroup from '../../actions/favorites/actionDeleteFavGroup.mjs';
import actionsUploadFavorites from '../../actions/favorites/actionsUploadFavorites.mjs';
import setView from '../../actions/setView.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favGroupName = 'favorites-shops';
    const shortFavGroupName = 'shops';
    const wptName = 'Test wpt';
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

    // set known initial map view, then remember it for back-navigation check
    await setView({ lat: 50, lon: 25, zoom: 10 });
    await actionIdleWait();
    const initialHash = await getMapHash();

    // open favorite group
    await clickBy(By.id(`se-menu-fav-${shortFavGroupName}`));
    await waitByRemoved(By.id(`se-menu-fav-${shortFavGroupName}`));
    await waitBy(By.id(`se-opened-fav-group-${shortFavGroupName}`));

    // map must zoom-to-fit the group — view must differ from the initial one
    await actionIdleWait();
    const openedHash = await getMapHash();
    await assert(
        openedHash !== initialHash,
        `Open group should zoom-to-fit (initial: ${initialHash}, opened: ${openedHash})`
    );

    // open favorite item info
    await clickBy(By.id(`se-fav-item-name-${wptName}`));
    await waitBy(By.id(`se-fav-item-info-${wptName}`));

    // edit favorite item
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
    await matchTextBy(By.id('se-wpt-name'), `${wptName}${suffix}`);
    await matchTextBy(By.id('se-wpt-address'), `test address${suffix}`);
    await clickBy(By.id('se-back-wpt-details'));
    await waitByRemoved(By.id(`se-fav-item-info-${wptName}${suffix}`));
    await waitBy(By.id(`se-fav-item-name-${wptName}${suffix}`));

    // delete favorite item
    await clickBy(By.id(`se-fav-item-name-${wptName}${suffix}`));
    await clickBy(By.id('se-delete-fav-item'));
    await waitBy(By.id('se-delete-fav-dialog'));
    await clickBy(By.id('se-delete-fav-dialog-submit'));
    await waitByRemoved(By.id(`se-fav-item-info-${wptName}${suffix}`));

    await clickBy(By.id('se-back-folder-button-favorites'));

    // back button must restore the map view captured before the group was opened
    await actionIdleWait();
    const restoredHash = await getMapHash();
    await assert(
        restoredHash === initialHash,
        `Back should restore initial map view (expected: ${initialHash}, got: ${restoredHash})`
    );

    await actionDeleteFavGroup(shortFavGroupName);
    await waitBy(By.id('se-empty-page'));

    await actionFinish();
}
