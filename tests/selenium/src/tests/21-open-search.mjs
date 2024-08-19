import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import { clickBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-search'));

    await waitBy(By.id('se-search-input'));
    await waitBy(By.id('se-default-search-categories'));
    await waitBy(By.id('se-wiki_places-items'));

    await waitBy(By.id('se-search-input-close'));
    await clickBy(By.id('se-search-input-close'));

    await waitByRemoved(By.id('se-search-input'));

    await waitBy(By.id('se-open-search-button'));
    await clickBy(By.id('se-open-search-button'));
    await waitBy(By.id('se-search-input'));
}