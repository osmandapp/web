import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenDeleteAcc from '../../actions/actionOpenDeleteAcc.mjs';
import { assert, clickBy, sendKeysBy, waitBy } from '../../lib.mjs';
import { By, Key } from 'selenium-webdriver';
import { driver, TEST_LOGIN } from '../../options.mjs';

const DELETE_BUTTON = By.xpath("//*[@id='se-delete-account-dialog']//*[text()='Delete account']");

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await actionOpenDeleteAcc();
    await waitBy(By.id('se-delete-account-dialog'));

    await driver.executeScript(`
        window.seDeleteRequests = 0;
        const fetch = window.fetch;
        window.fetch = function (url) {
            String(url).includes('/mapapi/auth/delete-account') && window.seDeleteRequests++;
            return fetch.apply(this, arguments);
        };
    `);

    // an empty or a foreign email is rejected on the web, nothing is sent
    await clickBy(DELETE_BUTTON);
    await waitBy(By.xpath("//*[@id='username-delete-helper-text' and text()='Please enter valid email']"));

    await sendKeysBy(By.id('username-delete'), TEST_LOGIN + 'x');
    await clickBy(DELETE_BUTTON);
    await waitBy(By.xpath("//*[@id='username-delete-helper-text' and text()='Email does not match']"));
    await assert((await driver.executeScript('return window.seDeleteRequests')) === 0);

    // a wrong code is reported under the code field, the account stays
    await sendKeysBy(By.id('username-delete'), Key.BACK_SPACE);
    await sendKeysBy(By.id('code'), '000000');
    await clickBy(DELETE_BUTTON);
    await waitBy(By.xpath("//*[@id='code-helper-text' and contains(., 'Token is not valid')]"));
    await assert((await driver.findElements(By.id('username-delete-helper-text'))).length === 0);
    await assert((await driver.executeScript('return window.seDeleteRequests')) === 1);

    await actionFinish();
}
