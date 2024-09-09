'use strict';

import { By } from 'selenium-webdriver';

import { clickBy, waitBy, fillLoginData } from '../lib.mjs';
import { TEST_LOGIN, TEST_PASSWORD } from '../options.mjs';

/**
 * Action: actionLogIn({ login, password })
 */
export default async function test({ login = TEST_LOGIN, password = TEST_PASSWORD } = {}) {
    await clickBy(By.id('se-show-main-menu'), { optional: true });

    await clickBy(By.id('se-login-button'));
    await clickBy(By.id('se-login-btn'));

    await fillLoginData(login, password);

    await waitBy(By.id('se-logout-button'));
}
