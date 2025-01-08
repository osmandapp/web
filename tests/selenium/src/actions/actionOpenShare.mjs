import actionIdleWait from './actionIdleWait.mjs';
import { clickBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test(name) {
    await actionIdleWait();
    await waitBy(By.id(`se-actions-${name}`));
    await clickBy(By.id(`se-actions-${name}`));
    await clickBy(By.id('se-share-track'));
    await waitByRemoved(By.id(`se-actions-${name}`));
    await actionIdleWait();
}
