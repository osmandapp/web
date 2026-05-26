import { By, Key } from 'selenium-webdriver';
import { clickBy, enclose, waitBy, waitByRemoved, assert } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import { TEST_LOGIN2, TEST_PASSWORD2 } from '../../options.mjs';

/**
 * Test files are stored in the database under the TEST_LOGIN2 account.
 * The files were manually synchronized from the Android app.
 * There are 437 files, filtered into 5 Smart Folders using different criteria.
 * The SMART_FOLDERS array contains each folder name and the expected number of files in that folder.
 * Name of folder contains the filter name.
 */

const SMART_FOLDERS = [
    { name: '1smart f length 8646', size: 437 },
    { name: '2smart f length 888', size: 286 },
    { name: '3smart f date', size: 146 },
    { name: '4smart f city', size: 0 },
    { name: '5smart f width', size: 404 },
    { name: '6smart f activity car', size: 13 },
    { name: '7smart f uphill 100', size: 265 },
];

const SMART_FOLDER_ORIGINAL = '1smart f length 8646';
const SMART_FOLDER_RENAMED = '1smart f length 8646 renamed';

export default async function test() {
    await actionOpenMap();
    await actionLogIn({ login: TEST_LOGIN2, password: TEST_PASSWORD2 });
    await clickBy(By.id('se-show-menu-tracks'));
    await waitBy(By.id('se-smart-folders-progress'), { optional: true });
    await waitByRemoved(By.id('se-loading-page'), true);
    await waitByRemoved(By.id('se-smart-folders-progress'), true);
    await waitBy(By.id('se-sort-button-time-tracks'));
    await clickBy(By.id('se-sort-button-time-tracks'));
    await waitBy(By.id('se-sort-menu'));
    await clickBy(By.id('se-sort-az'));
    await actionIdleWait({ idle: 3000 });
    for (const folder of SMART_FOLDERS) {
        const parent = await waitBy(By.id(`se-menu-cloud-${folder.name}`), { optional: true });
        const text = await parent.getText();
        await assert(text.includes(`${folder.size} tracks`), `${folder.name} has incorrect size`);
    }

    await renameSmartFolder(SMART_FOLDER_ORIGINAL, SMART_FOLDER_RENAMED);
    let parent = await waitBy(By.id(`se-menu-cloud-${SMART_FOLDER_RENAMED}`));
    let text = await parent.getText();
    await assert(text.includes('437 tracks'), `${SMART_FOLDER_RENAMED} has incorrect size after rename`);

    await renameSmartFolder(SMART_FOLDER_RENAMED, SMART_FOLDER_ORIGINAL);
    parent = await waitBy(By.id(`se-menu-cloud-${SMART_FOLDER_ORIGINAL}`));
    text = await parent.getText();
    await assert(text.includes('437 tracks'), `${SMART_FOLDER_ORIGINAL} has incorrect size after rename back`);

    await actionFinish();
}

async function renameSmartFolder(folderName, newName) {
    await clickBy(By.id(`se-folder-actions-button-${folderName}`));
    await waitBy(By.id('se-folder-actions'));
    await clickBy(By.id('se-folder-actions-rename'));
    await waitBy(By.id('se-rename-group-dialog'));
    await enclose(
        async () => {
            const input = await waitBy(By.id('se-rename-group-input'));
            await input.click();
            await input.sendKeys(Key.chord(Key.CONTROL, 'a'));
            await input.sendKeys(Key.DELETE);
            await input.sendKeys(newName);
            return true;
        },
        { tag: 'rename-smart-folder' }
    );
    await clickBy(By.id('se-rename-group-submit'));
    await waitByRemoved(By.id('se-rename-group-dialog'), true);
    await actionIdleWait({ idle: 3000 });
}
