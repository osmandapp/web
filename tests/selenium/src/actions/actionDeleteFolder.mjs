import { clickBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test(name) {
    await waitBy(By.id(`se-menu-cloud-${name}`));
    await clickBy(By.id(`se-folder-actions-button-${name}`));
    await waitBy(By.id('se-folder-actions'));
    await clickBy(By.id('se-folder-actions-delete'));
    await waitBy(By.id('se-delete-folder-dialog'));
    await clickBy(By.id('se-delete-folder-submit'));

    await waitByRemoved(By.id('se-delete-folder-dialog'));
    await waitByRemoved(By.id(`se-menu-cloud-${name}`));
}
