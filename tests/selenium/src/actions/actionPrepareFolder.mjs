import { createFolder, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test(name) {
    await waitBy(By.id(`se-track-menu`));

    let found = await waitBy(By.id(`se-menu-cloud-${name}`), { optional: true });
    if (found) {
        return true;
    } else {
        await createFolder(name);
    }
}
