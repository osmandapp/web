import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionCheckPoi from '../../actions/map/actionCheckPoi.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { clickBy, waitBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const category = 'Cafe and restaurant';
    const iconWpt = 'amenity_restaurant';
    const poiName = 'Public Cafe';

    await actionCheckPoi({ iconWpt, name: poiName, hidden: true });

    // open configure map
    await clickBy(By.id('se-show-menu-configuremap'));
    await waitBy(By.id('se-configure-map-menu-name'));

    // enable POI overlay
    await togglePoiCategory(category);
    await actionCheckPoi({ iconWpt, name: poiName });

    // disable POI overlay: markers must disappear without page reload
    await togglePoiCategory(category);
    await actionCheckPoi({ iconWpt, name: poiName, hidden: true });

    await actionFinish();
}

// open POI categories from the opened configure map, switch the category over and apply
async function togglePoiCategory(category) {
    await waitBy(By.id('se-configure-map-menu-poi-categories'));
    await clickBy(By.id('se-configure-map-menu-poi-categories'));

    await waitBy(By.id(`se-poi-category-${category}`));
    await clickBy(By.id(`se-poi-category-${category}`));
    await clickBy(By.id('se-select-categories'));

    await waitBy(By.id('se-configure-map-menu-name'));
}
