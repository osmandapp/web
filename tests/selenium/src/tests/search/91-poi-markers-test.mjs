import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionCheckPoi from '../../actions/map/actionCheckPoi.mjs';
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

    // open POI categories
    await waitBy(By.id('se-configure-map-menu-poi-categories'));
    await clickBy(By.id('se-configure-map-menu-poi-categories'));

    await waitBy(By.id(`se-poi-category-${category}`));
    await clickBy(By.id(`se-poi-category-${category}`));
    await clickBy(By.id('se-select-categories'));

    await actionCheckPoi({ iconWpt, name: poiName });

    await actionFinish();
}
