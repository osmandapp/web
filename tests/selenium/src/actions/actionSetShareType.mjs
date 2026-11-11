import actionIdleWait from './actionIdleWait.mjs';
import { clickBy, getTextBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test(name, type) {
    await waitBy(By.id('se-share-file-menu'));
    await waitBy(By.id(`se-share-file-item-${name}`));

    await clickBy(By.id('se-share-type'));
    await actionIdleWait();
    await waitBy(By.id('se-actions-share-type'));
    await clickBy(By.id(`se-share-type-${type}`));
    await waitByRemoved(By.id('se-actions-share-type'));
    await actionIdleWait();
    await waitBy(By.id(`se-selected-share-type-${type}`));

    await clickBy(By.id('se-share-generate-link'), { optional: true, idle: true });
    await waitBy(By.id('se-copy-link'));
    const link = await getTextBy(By.id('se-generated-link'));

    return link.split('/map/')[1];
}
