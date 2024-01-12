import { waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionDeleteFolder from '../actions/actionDeleteFolder.mjs';
import { createFolder } from '../util.mjs';

export default async function test(name) {
    await waitBy(By.id('se-track-menu'));
    await waitBy(By.id('se-loading-page'), { hidden: true });

    let found = await waitBy(By.id(`se-menu-cloud-${name}`), { idle: true, optional: true });
    if (found) {
        found = await actionDeleteFolder(name);
        if (!found || found.length === 0) {
            await createFolder(name);
        }
    } else {
        await createFolder(name);
    }
}
