import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { clickBy, waitBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await waitBy(By.id('se-logout-button'));
    await clickBy(By.id('se-logout-button'));

    await waitBy(By.id('se-login-menu-osmand-purchases'));
    await waitBy(By.id('se-login-menu-user-item'));

    await clickBy(By.id('se-login-menu-user-item-actions'));
    await waitBy(By.id('se-login-menu-user-item-actions'));

    await waitBy(By.id('se-account-change-email'));
    await clickBy(By.id('se-account-change-email'));

    await waitBy(By.id('se-change-email-dialog'));
    await clickBy(By.id('se-change-email-dialog-close-btn'));

    await actionFinish();
}
