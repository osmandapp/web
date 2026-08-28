import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { clickBy, fillLoginData, waitBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { TEST_LOGIN, TEST_PASSWORD } from '../../options.mjs';

const FAVORITES_MENU_BLOCK = '#se-menu-component-favorite-block';

export default async function test() {
    await actionOpenMap();

    // open favorites menu without login
    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-favorites'));
    await waitBy(By.css(`${FAVORITES_MENU_BLOCK} #se-empty-login-page`));

    // log in from the favorites empty login page
    await clickBy(By.css(`${FAVORITES_MENU_BLOCK} #se-login-btn`));
    await fillLoginData(TEST_LOGIN, TEST_PASSWORD);
    await waitBy(By.id('se-logout-button'));

    // favorites menu is open again after login: its header is rendered only for logged in user
    await waitBy(By.css(`${FAVORITES_MENU_BLOCK} #se-fav-group-name`));

    await actionFinish();
}
