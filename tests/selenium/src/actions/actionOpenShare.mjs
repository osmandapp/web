import actionIdleWait from './actionIdleWait.mjs';
import { clickBy, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test(name, type = 'track') {
    await actionIdleWait();
    if (type === 'track') {
        await waitBy(By.id(`se-actions-${name}`));
        await clickBy(By.id(`se-actions-${name}`));
    } else if (type === 'favorite-folder') {
        await clickBy(By.id(`se-folder-actions-button-${name}`));
        await waitBy(By.id('se-favorite-folder-actions'));
    } else {
        throw new Error(`Unknown type: ${type}`);
    }
    await clickBy(By.id(`se-share-${type}`));
    await actionIdleWait();
}
