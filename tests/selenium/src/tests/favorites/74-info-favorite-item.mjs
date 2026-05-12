import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import {
    assert,
    clickBy,
    countMapItemsByOpacity,
    enclose,
    getMapHash,
    matchTextBy,
    sendKeysBy,
    waitBy,
    waitByRemoved,
} from '../../lib.mjs';
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

    // ===== Focus mode: dim other groups by default, hide them via Focus toggle =====
    // Two existing groups in different cities — view zoom must be wide enough to cover both.
    const food = favorites.find((t) => t.name === 'favorites-food');
    const shopsFile = favorites.find((t) => t.name === 'favorites-shops');

    await clickBy(By.id('se-import-fav-group'));
    await actionsUploadFavorites({ files: food.path });
    await waitBy(By.id('se-menu-fav-food'));
    await clickBy(By.id('se-import-fav-group'));
    await actionsUploadFavorites({ files: shopsFile.path });
    await waitBy(By.id('se-menu-fav-shops'));

    // Wide view to keep markers of both groups on the map
    await setView({ lat: 51, lon: 12, zoom: 5 });
    await actionIdleWait();

    // Open food — zoom-to-fit will narrow the bbox onto food's markers
    await clickBy(By.id('se-menu-fav-food'));
    await waitBy(By.id('se-opened-fav-group-food'));

    // Restore the wide view so markers from both groups are back in the current bbox
    // (FavoriteLayer.addMarkersOnMap filters by mapBounds — narrow view drops the other group).
    await setView({ lat: 51, lon: 12, zoom: 5 });
    await actionIdleWait();

    const dimmed = await countMapItemsByOpacity();
    await assert(dimmed.dim > 0, `Other group should be dimmed by default, got: ${JSON.stringify(dimmed)}`);
    await assert(dimmed.hidden === 0, `No items should be hidden by default, got: ${JSON.stringify(dimmed)}`);

    // Focus ON — other group must become fully hidden
    await clickBy(By.id('se-focus-toggle'));
    await actionIdleWait();
    const hidden = await countMapItemsByOpacity();
    await assert(hidden.hidden > 0, `Other group should be hidden after Focus ON, got: ${JSON.stringify(hidden)}`);

    // Focus OFF — other group must reappear as dimmed
    await clickBy(By.id('se-focus-toggle'));
    await actionIdleWait();
    const dimmedAgain = await countMapItemsByOpacity();
    await assert(dimmedAgain.dim > 0, `Other group should be dimmed again, got: ${JSON.stringify(dimmedAgain)}`);
    await assert(
        dimmedAgain.hidden === 0,
        `No items should be hidden after Focus OFF, got: ${JSON.stringify(dimmedAgain)}`
    );

    // Cleanup
    await clickBy(By.id('se-back-folder-button-favorites'));
    await actionDeleteFavGroup('food');
    await actionDeleteFavGroup('shops');
    await waitBy(By.id('se-empty-page'));

    await actionFinish();
}
