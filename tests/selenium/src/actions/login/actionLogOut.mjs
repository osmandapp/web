import { clickBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test() {
    await clickBy(By.id('se-logout-button'));
    await clickBy(By.id('se-logout-btn'));
    await waitByRemoved(By.id('se-login-dialog'));
}
