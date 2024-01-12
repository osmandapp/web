import { waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionDeleteFolder from '../actions/actionDeleteFolder.mjs';
import { createFolder } from '../util.mjs';
import actionIdleWait from './actionIdleWait.mjs';

export default async function test(name) {
    await waitBy(By.id('se-track-menu'));
    await waitByRemoved(By.id('se-loading-page'));
    await actionIdleWait();
    let found = await waitBy(By.id(`se-menu-cloud-${name}`), { idle: true, optional: true });
    if (found) {
        await actionDeleteFolder(name);
    }
    await actionIdleWait();
    await createFolder(name);
}
