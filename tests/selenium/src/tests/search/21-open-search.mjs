import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import { clickBy, waitBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../../actions/actionFinish.mjs';
import actionCheckMarker from '../../actions/map/actionCheckMarker.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-search'));

    await waitBy(By.id('se-search-input'));
    await waitBy(By.id('se-default-search-categories'));
    await waitBy(By.id('se-wiki-places-items'));

    await actionCheckMarker({ class: 'wikiIconLarge' });

    await waitBy(By.id('se-search-input-close'));
    await clickBy(By.id('se-search-input-close'));
    await waitBy(By.id('se-menu-component-search-none'));
    await waitBy(By.id('se-open-search-button'));
    await clickBy(By.id('se-open-search-button'));
    await waitBy(By.id('se-search-input'));

    await actionFinish();
}
