import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { driver } from '../options.mjs';
import { clickBy, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await waitBy(By.id('se-logout-button'));

    console.log('Logout by server');
    await driver.manage().deleteAllCookies();
    console.log('Cookies deleted');
    await waitBy(By.id('se-login-button'));
    await clickBy(By.id('se-login-button'));
    await waitBy(By.id('se-alert-login-info'));

    await actionFinish();
}
