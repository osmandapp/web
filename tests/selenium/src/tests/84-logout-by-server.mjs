import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { driver } from '../options.mjs';
import { clickBy, waitBy } from '../lib.mjs';
import { By, until } from 'selenium-webdriver';

export default async function test() {
    await driver.manage().deleteAllCookies();
    await actionOpenMap();
    await actionLogIn();

    await waitBy(By.id('se-logout-button'));

    const cookies = await driver.manage().getCookies();
    for (let cookie of cookies) {
        await driver.manage().deleteCookie(cookie.name);
    }
    await driver.wait(until.elementLocated(By.id('se-login-button')), 5000);

    await clickBy(By.id('se-login-button'));
    await waitBy(By.id('se-alert-login-info'));

    await actionFinish();
}
