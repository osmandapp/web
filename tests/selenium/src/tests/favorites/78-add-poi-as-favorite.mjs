import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { clickBy, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { driver } from '../../options.mjs';
import actionOpenFavorites from '../../actions/favorites/actionOpenFavorites.mjs';
import actionDeleteFavGroup from '../../actions/favorites/actionDeleteFavGroup.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favoriteName = 'TestPoiFavorite';

    // open search and find a POI
    await clickBy(By.id('se-show-menu-search'));
    await waitBy(By.id('se-search-input'));
    await sendKeysBy(By.id('se-search-input'), 'silpo\n');
    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-search-results'));

    // open first search result (POI details)
    const items = await driver.findElements(By.css("[id^='se-search-result-item']"));
    await items[0].click();
    await waitBy(By.id('se-wpt-details'));
    await waitBy(By.id('se-add-poi-to-fav-item'));

    // test cancel: open panel, close it — POI details should remain visible
    await clickBy(By.id('se-add-poi-to-fav-item'));
    await waitBy(By.id('se-add-fav-dialog'));
    await clickBy(By.id('se-close-add-wpt-panel'));
    await waitByRemoved(By.id('se-add-fav-dialog'));
    await waitBy(By.id('se-wpt-details'));
    await waitBy(By.id('se-add-poi-to-fav-item'));

    // add POI to favorites
    await clickBy(By.id('se-add-poi-to-fav-item'));
    await waitBy(By.id('se-add-fav-dialog'));
    await sendKeysBy(By.id('se-fav-name-input'), favoriteName);
    await clickBy(By.id('se-add-fav-btn'));
    await waitByRemoved(By.id('se-add-fav-dialog'));

    // verify POI details still showing after save (not redirected to main menu)
    await waitBy(By.id('se-wpt-details'));
    await waitBy(By.id('se-add-poi-to-fav-item'));

    // open favorites and verify the new favorite exists in the default group
    await actionOpenFavorites();
    await clickBy(By.id('se-menu-fav-favorites'));
    await waitBy(By.id('se-opened-fav-group-favorites'));
    await waitBy(By.id(`se-fav-item-name-Silpo${favoriteName}`));

    // clean up
    await clickBy(By.id('se-back-folder-button-favorites'));
    await waitBy(By.id('se-menu-fav-favorites'));
    await actionDeleteFavGroup('favorites');
    await waitBy(By.id('se-empty-page'));

    await actionFinish();
}
