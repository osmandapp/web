import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import ignoreTest from '../actions/actionIgnoreTest.mjs';
import { driver } from '../options.mjs';
import { clickBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test() {
    ignoreTest();

    await driver.manage().deleteAllCookies();
    await actionOpenMap();
    await actionLogIn();

    await waitBy(By.id('se-logout-button'));

    const cookies = await driver.manage().getCookies();
    for (let cookie of cookies) {
        await driver.manage().deleteCookie(cookie.name);
    }
    await waitByRemoved(By.id('se-logout-button'));

    await waitBy(By.id('se-login-button'));
    await clickBy(By.id('se-login-button'));
    await waitBy(By.id('se-alert-login-info'));

    await actionFinish();
}
