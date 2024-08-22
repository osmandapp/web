import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import { clickBy, sendKeysBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../actions/actionFinish.mjs';

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
    await waitBy(By.id('se-search-result-Fast food'));

    await clickBy(By.id('se-search-input-cancel'));
    await waitBy(By.id('se-empty-search'));

    await clickBy(By.id('se-search-input-back'));
    await waitBy(By.id('se-default-search-categories'));

    await actionFinish();
}
