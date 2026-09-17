import { By, Key } from 'selenium-webdriver';
import { assert, clickBy, expectInputExactBy, getMapHash, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { driver } from '../../options.mjs';
import { getFiles } from '../../util.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionOpenFavorites from '../../actions/favorites/actionOpenFavorites.mjs';
import actionDeleteAllFavorites from '../../actions/favorites/actionDeleteAllFavorites.mjs';
import actionDeleteFavGroup from '../../actions/favorites/actionDeleteFavGroup.mjs';
import actionsUploadFavorites from '../../actions/favorites/actionsUploadFavorites.mjs';
import setView from '../../actions/setView.mjs';

const CLOSE_MENU_BUTTON = By.id('se-close-menu-button');

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favGroupName = 'favorites-shops';
    const shortFavGroupName = 'shops';
    const wptName = 'Test wpt';

    const favorites = getFiles({ folder: 'favorites' });

    // prepare
    await actionOpenFavorites();
    await actionDeleteAllFavorites(favorites);
    const { path } = favorites.find((t) => t.name === favGroupName);
    await clickBy(By.id('se-import-fav-group'));
    await actionsUploadFavorites({ files: path });
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));

    await setView({ lat: 50, lon: 25, zoom: 10 });
    await actionIdleWait();

    // --- My Places: Close closes the favorite and the menu, keeps the map, resets the opened folder ---
    await openFavoriteFromGroup(shortFavGroupName, wptName);
    await actionIdleWait();
    const hashBeforeClose = await getMapHash();

    await clickBy(CLOSE_MENU_BUTTON);
    await waitByRemoved(By.id(`se-fav-item-info-${wptName}`));
    await waitByRemoved(CLOSE_MENU_BUTTON);
    await waitByRemoved(By.id(`se-opened-fav-group-${shortFavGroupName}`));

    await actionIdleWait();
    const hashAfterClose = await getMapHash();
    await assert(
        hashAfterClose === hashBeforeClose,
        `Close should not move the map (before: ${hashBeforeClose}, after: ${hashAfterClose})`
    );

    // the next opening starts from the list of folders, not from the opened folder or favorite
    await actionOpenFavorites();
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));
    await waitByRemoved(By.id(`se-fav-item-info-${wptName}`));

    // --- Esc closes the menu the same way ---
    await openFavoriteFromGroup(shortFavGroupName, wptName);
    await waitBy(CLOSE_MENU_BUTTON);
    await driver.actions().sendKeys(Key.ESCAPE).perform();
    await waitByRemoved(By.id(`se-fav-item-info-${wptName}`));
    await waitByRemoved(CLOSE_MENU_BUTTON);

    // --- Search: Close resets the query and the results ---
    await clickBy(By.id('se-show-menu-search'));
    await waitBy(By.id('se-search-input'));
    await sendKeysBy(By.id('se-search-input'), `${wptName}\n`);
    await waitByRemoved(By.id('se-loading-page'), { optional: true });
    await waitBy(By.id('se-search-results'));
    await clickBy(By.id(`se-search-result-fav-${wptName}`));
    await waitBy(By.id(`se-fav-item-info-${wptName}`));

    await clickBy(CLOSE_MENU_BUTTON);
    await waitByRemoved(By.id(`se-fav-item-info-${wptName}`));
    await waitByRemoved(CLOSE_MENU_BUTTON);

    await clickBy(By.id('se-show-menu-search'));
    await waitBy(By.id('se-default-search-categories'));
    await waitByRemoved(By.id('se-search-results'));
    await expectInputExactBy(By.id('se-search-input'), '');

    // cleanup
    await actionOpenFavorites();
    await actionDeleteFavGroup(shortFavGroupName);
    await waitBy(By.id('se-empty-page'));

    await actionFinish();
}

async function openFavoriteFromGroup(groupName, wptName) {
    await clickBy(By.id(`se-menu-fav-${groupName}`));
    await waitBy(By.id(`se-opened-fav-group-${groupName}`));
    await clickBy(By.id(`se-fav-item-name-${wptName}`));
    await waitBy(By.id(`se-fav-item-info-${wptName}`));
    await waitBy(CLOSE_MENU_BUTTON);
}
