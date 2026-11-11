import { By } from 'selenium-webdriver';
import { clickBy } from '../../lib.mjs';
import actionLogIn from './actionLogIn.mjs';
import actionLogOut from './actionLogOut.mjs';

export default async function test(credentials) {
    await actionLogOut();
    await clickBy(By.id('se-login-button'));
    await actionLogIn(credentials);
}
