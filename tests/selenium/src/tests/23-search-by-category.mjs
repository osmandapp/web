import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import { clickBy, sendKeysBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../actions/actionFinish.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const searchCategory = 'Accommodation';

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-search'));

    await waitBy(By.id('se-default-search-categories'));
    await clickBy(By.id(`se-default-search-categories-item-${searchCategory}`));

    await waitBy(By.id('se-search-results'));
    await waitBy(By.id('se-search-result-item'));

    await clickBy(By.id('se-search-input-cancel'));
    await waitBy(By.id('se-empty-search'));

    await sendKeysBy(By.id('se-search-input'), searchCategory);
    await clickBy(By.id('se-search-input-search'));

    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-search-result-item'));
    await clickBy(By.id(`se-search-result-${searchCategory}`));

    await waitBy(By.id('se-search-results'));

    await clickBy(By.id('se-search-input-back'));
    await waitBy(By.id('se-default-search-categories'));

    await clickBy(By.id('se-search-categories-show-all'));
    await waitBy(By.id('se-search-categories-list'));
    await clickBy(By.id(`se-search-categories-list-item-${searchCategory}`));

    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-search-results'));
    await clickBy(By.id('se-search-input-back'));

    await clickBy(By.id('se-search-categories-show-all'));
    await waitBy(By.id('se-search-categories-list'));

    await sendKeysBy(By.id('se-search-input'), 'Accom' + '\n');
    await waitBy(By.id(`se-search-categories-list-item-${searchCategory}`));

    await actionFinish();
}
