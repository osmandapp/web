import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenDeleteAcc from '../../actions/actionOpenDeleteAcc.mjs';
import { assert, clickBy, sendKeysBy, waitBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { driver, TEST_LOGIN } from '../../options.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await actionOpenDeleteAcc();
    await waitBy(By.id('se-delete-account-dialog'));

    // a wrong code is reported under the code field, the account stays
    await sendKeysBy(By.id('username-delete'), TEST_LOGIN);
    await sendKeysBy(By.id('code'), '000000');
    await clickBy(By.xpath("//*[@id='se-delete-account-dialog']//*[text()='Delete this account']"));
    await waitBy(By.xpath("//*[@id='code-helper-text' and contains(., 'Token is not valid')]"));
    await assert((await driver.findElements(By.id('username-delete-helper-text'))).length === 0);

    await actionFinish();
}
