import { clickBy, enclose, enumerateIds, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import { driver } from '../options.mjs';
import actionDeleteFolder from '../actions/actionDeleteFolder.mjs';
import actionIdleWait from './actionIdleWait.mjs';

export default async function test(name) {
    await waitBy(By.id(`se-track-menu`));

    let found = await driver.findElements(By.id(`se-menu-cloud-${name}`));
    if (found && found.length > 0) {
        found = await actionDeleteFolder(name);
        if (!found || found.length === 0) {
            await add(name);
        }
    } else {
        await add(name);
    }
}

async function add(name) {
    await clickBy(By.id('se-add-folder'));
    const input = await waitBy(By.id('se-add-folder-input'));
    await input.sendKeys(`${name}`);
    await clickBy(By.id('se-add-folder-submit'));
    await waitBy(By.id(`se-menu-cloud-${name}`));
    await clickBy(By.id(`se-menu-cloud-${name}`));
}
