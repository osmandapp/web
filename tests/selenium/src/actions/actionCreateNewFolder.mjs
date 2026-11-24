import { waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import { createFolder } from '../util.mjs';
import actionIdleWait from './actionIdleWait.mjs';

export default async function test(name) {
    await waitBy(By.id('se-track-menu'));
    await waitByRemoved(By.id('se-loading-page'));
    await actionIdleWait();
    await createFolder(name);
}
