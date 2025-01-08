import actionIdleWait from '../actionIdleWait.mjs';
import { clickBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test(name) {
    await actionIdleWait();
    await clickBy(By.id(`se-folder-actions-button-${name}`));
    await waitBy(By.id('se-favorite-folder-actions'));
    await waitBy(By.id('se-favorite-folder-actions-delete'));
    await clickBy(By.id('se-favorite-folder-actions-delete'));
    await waitBy(By.id('se-delete-fav-group-dialog'));
    await clickBy(By.id('se-delete-fav-group-submit'));
    await waitByRemoved(By.id(`se-actions-${name}`));
    await actionIdleWait();
}
