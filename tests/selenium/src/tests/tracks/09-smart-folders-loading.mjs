import { By } from 'selenium-webdriver';
import { driver } from '../../options.mjs';
import { clickBy, waitBy, waitByRemoved, assert } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import { TEST_LOGIN2, TEST_PASSWORD2 } from '../../options.mjs';

const SMART_FOLDER_NAME = 'sf5len2';
const DELAY_AFTER_REFRESH_MS = 5000;

export default async function test() {
    await actionOpenMap();
    await actionLogIn({ login: TEST_LOGIN2, password: TEST_PASSWORD2 });
    await clickBy(By.id('se-show-menu-tracks'));
    await driver.navigate().refresh();
    await waitByRemoved(By.id('se-loading-page'), true);
    const loadedInDelay = await driver
    .wait(async () => {
        const found = await driver.findElements(By.id(`se-menu-cloud-${SMART_FOLDER_NAME}`));
        return found.length > 0;
    }, DELAY_AFTER_REFRESH_MS)
        .catch(() => false);
    await assert(loadedInDelay, `Smart folders did not load within ${DELAY_AFTER_REFRESH_MS/1000} seconds after page refresh`);
    await waitByRemoved(By.id('se-loading-page'), true);
    await waitBy(By.id('se-sort-button-time-tracks'));
    await clickBy(By.id('se-sort-button-time-tracks'));
    await waitBy(By.id('se-sort-menu'));
    await clickBy(By.id('se-sort-za'));
    await actionIdleWait({ idle: 1000 });
    await actionFinish();
}
