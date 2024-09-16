import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { driver } from '../options.mjs';
import { clickBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await waitBy(By.id('se-logout-button'));

    const cookies = await driver.manage().getCookies();
    for (let cookie of cookies) {
        console.log(cookie);
        await driver.manage().deleteCookie(cookie.name);
    }
    console.log(cookies);
    await waitByRemoved(By.id('se-logout-button'));

    await waitBy(By.id('se-login-button'));
    await clickBy(By.id('se-login-button'));
    await waitBy(By.id('se-alert-login-info'));

    await actionFinish();
}
