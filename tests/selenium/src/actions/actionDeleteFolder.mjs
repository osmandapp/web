import { clickBy, enclose, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import { driver } from '../options.mjs';
import actionIdleWait from './actionIdleWait.mjs';

export default async function test(name) {
    await waitBy(By.id(`se-menu-cloud-${name}`));
    await clickBy(By.id(`se-folder-actions-button-${name}`));
    await waitBy(By.id('se-folder-actions'));
    await clickBy(By.id('se-folder-actions-delete'));
    await waitBy(By.id('se-delete-folder-dialog'));
    await clickBy(By.id('se-delete-folder-submit'));
    await waitBy(By.id('se-loading-page'), { hidden: true });

    await enclose(
        async () => {
            await actionIdleWait();
            const found = await driver.findElements(By.id(`se-menu-cloud-${name}`));
            return !found || found.length === 0;
        },
        { tag: 'wait-folder-deleted' }
    );
}
