import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import actionOpenDeleteAcc from '../actions/actionOpenDeleteAcc.mjs';
import { waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await actionOpenDeleteAcc();
    await waitBy(By.id('se-delete-account-dialog'));

    await actionFinish();
}
