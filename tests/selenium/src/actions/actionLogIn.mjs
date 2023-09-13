'use strict';

import { By } from 'selenium-webdriver';

import { clickBy, waitBy, enclose } from '../lib.mjs';
import { mobile, TEST_LOGIN, TEST_PASSWORD } from '../options.mjs';

/**
 * Action: actionLogIn({ login, password })
 */
export default async function test({ login = TEST_LOGIN, password = TEST_PASSWORD } = {}) {
    mobile && (await clickBy(By.id('se-main-menu')));

    await clickBy(By.id('se-login-button'));

    await enclose(
        async () => {
            const input = await waitBy(By.id('username'));
            await input.sendKeys(login);
            return true;
        },
        { tag: 'login' }
    );

    await enclose(
        async () => {
            const input = await waitBy(By.id('pwd'));
            await input.sendKeys(password);
            return true;
        },
        { tag: 'password' }
    );

    await clickBy(By.id('se-submit-login'));

    await waitBy(By.id('se-logout-button'));
}
