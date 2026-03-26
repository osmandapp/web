import { By } from 'selenium-webdriver';
import { clickBy, waitBy, waitByRemoved, assert } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { TEST_LOGIN2, TEST_PASSWORD2 } from '../../options.mjs';

const SMART_FOLDERS = [
    {name: '1smart f length', size: 437},
    {name: '2smart f length', size: 286},
    {name: '3smart f date', size: 361},
    {name: '4smart f city', size: 0},
    {name: '5smart f width', size: 404},
];

export default async function test() {
    await actionOpenMap();
    await actionLogIn({ login: TEST_LOGIN2, password: TEST_PASSWORD2 });
    await clickBy(By.id('se-show-menu-tracks'));
    await waitByRemoved(By.id('se-loading-page'), true);
    await waitBy(By.id('se-sort-button-time-tracks'));
    await clickBy(By.id('se-sort-button-time-tracks'));
    await waitBy(By.id('se-sort-menu'));
    await clickBy(By.id('se-sort-az'));
    await waitByRemoved(By.id('se-loading-page'), true);
    for (const folder of SMART_FOLDERS) {
        const parent = await waitBy(By.id("se-menu-cloud-${folder.name}"));
        const text = await parent.getText();
        await assert(text.includes(`${folder.size} tracks`), `${folder.name} has incorrect size`);
    }
    await actionFinish();
}
