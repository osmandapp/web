import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import { clickBy, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../../actions/actionFinish.mjs';

export default async function test() {
    await actionOpenMap('#13/50.4587/30.4720');
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-search'));
    await waitBy(By.id('se-search-input'));

    // 1. Search "Stolperstein": expect category filter + one POI result.
    await sendKeysBy(By.id('se-search-input'), 'Stolperstein' + '\n');
    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-search-results'));
    await waitBy(By.id('se-search-result-Stolperstein'));
    await waitBy(By.id('se-search-result-item'));

    // 2. Click category filter — should open filtered results.
    await clickBy(By.id('se-search-result-Stolperstein'));
    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-search-results'));

    // 3. Go back to main search.
    await clickBy(By.id('se-search-input-back'));
    await waitBy(By.id('se-default-search-categories'));

    // 4. Search "Memorial": expect Memorial category, then Stolperstein category, then POI results.
    await sendKeysBy(By.id('se-search-input'), 'Memorial' + '\n');
    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-search-results'));
    await waitBy(By.id('se-search-result-Memorial'));
    await waitBy(By.id('se-search-result-Stolperstein'));

    await actionFinish();
}
