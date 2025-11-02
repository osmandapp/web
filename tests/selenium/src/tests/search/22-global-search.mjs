import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import { clickBy, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../../actions/actionFinish.mjs';
import setView from '../../actions/setView.mjs';
import { driver, IDLE_DELAY } from '../../options.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const searchWord = 'food';

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-search'));

    await waitBy(By.id('se-search-input'));

    await sendKeysBy(By.id('se-search-input'), searchWord + '\n');
    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-search-results'));
    await waitBy(By.id('se-search-result-Food'));

    await clickBy(By.id('se-search-input-cancel'));
    await waitBy(By.id('se-empty-search'));

    await clickBy(By.id('se-search-input-back'));
    await waitBy(By.id('se-default-search-categories'));

    // Search for Bukovel in Kyiv area - expect empty results
    await setView({ lat: 50.45, lon: 30.52, zoom: 10 });
    await driver.actions().pause(IDLE_DELAY).perform();
    await waitBy(By.id('se-search-input'));
    await sendKeysBy(By.id('se-search-input'), 'Bukovel');
    await clickBy(By.id('se-search-input-search'));
    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-empty-search'));

    // Move map to Lviv area
    await setView({ lat: 49.84, lon: 24.03, zoom: 10 });
    await clickBy(By.id('se-search-input'));
    await clickBy(By.id('se-search-input-search'));
    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-search-results'));

    await actionFinish();
}
