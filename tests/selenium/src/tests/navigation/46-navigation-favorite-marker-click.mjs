import { By } from 'selenium-webdriver';

import { clickBy, expectInputExactBy, leftClickBy, waitBy, waitByRemoved } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionOpenFavorites from '../../actions/favorites/actionOpenFavorites.mjs';
import actionDeleteAllFavorites from '../../actions/favorites/actionDeleteAllFavorites.mjs';
import actionsUploadFavorites from '../../actions/favorites/actionsUploadFavorites.mjs';
import { getFiles } from '../../util.mjs';

const FAVORITE_NAME = 'Test wpt • shops';
const FAVORITE_COORDS = { lat: 52.3554606, lon: 4.8929554 };

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favGroupName = 'favorites-shops';
    const favorites = getFiles({ folder: 'favorites' });
    const { path } = favorites.find((t) => t.name === favGroupName);

    await actionOpenFavorites();
    await actionDeleteAllFavorites(favorites);

    await clickBy(By.id('se-import-fav-group'));
    await actionsUploadFavorites({ files: path });
    await waitBy(By.id('se-menu-fav-shops'));
    await actionIdleWait();

    await clickBy(By.id('se-menu-fav-shops'));
    await actionIdleWait();

    // Open navigation menu
    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-navigation'));
    await waitBy(By.id('se-route-start-point'));

    // Click on favorite marker on map
    await leftClickBy(FAVORITE_COORDS.lat, FAVORITE_COORDS.lon);
    await actionIdleWait();

    // Check that favorite name appears in start input
    await expectInputExactBy(By.id('se-route-start-point'), FAVORITE_NAME);
    await expectInputExactBy(By.id('se-route-finish-point'), '');

    // Click on another place to set finish
    await leftClickBy(FAVORITE_COORDS.lat + 0.01, FAVORITE_COORDS.lon + 0.01);
    await actionIdleWait();

    await expectInputExactBy(By.id('se-route-start-point'), FAVORITE_NAME);
    await waitByRemoved(By.id('se-progress-route-calculation'));

    await actionOpenFavorites();
    await clickBy(By.id('se-back-folder-button-favorites'));
    await waitBy(By.id('se-menu-fav-shops'));
    await actionDeleteAllFavorites(favorites);

    await actionFinish();
}
