import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenDeleteAcc from '../../actions/actionOpenDeleteAcc.mjs';
import { clickBy, fillLoginData, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { TEST_LOGIN, TEST_PASSWORD } from '../../options.mjs';

export default async function test() {
    await actionOpenMap();

    await actionOpenDeleteAcc();
    await waitBy(By.id('se-empty-login-page'));
    await waitBy(By.id('se-alert-login-info'));

    await clickBy(By.id('se-login-btn'));
    await fillLoginData(TEST_LOGIN, TEST_PASSWORD);
    await waitByRemoved(By.id('se-login-menu-name'));

    await waitBy(By.id('se-delete-account-dialog'));

    await actionFinish();
}
