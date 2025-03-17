import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import actionCheckPoi from '../actions/map/actionCheckPoi.mjs';
import { clickBy, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../actions/actionFinish.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const category = 'Cafe and restaurant';
    const iconWpt = 'amenity_cafe';
    const poiName = 'Mr Grill';

    // open configure map
    await clickBy(By.id('se-show-menu-configuremap'));
    await waitBy(By.id('se-configure-map-menu-name'));

    // open POI categories
    await waitBy(By.id('se-configure-map-menu-poi-categories'));
    await clickBy(By.id('se-configure-map-menu-poi-categories'));

    await clickBy(By.id(`se-poi-category-${category}`));
    await clickBy(By.id('se-select-categories'));

    await actionCheckPoi({ iconWpt, name: poiName });
    await clickBy(By.xpath(`//*[@se-poi-name='Mr Grill']`));
    await waitBy(By.id(`se-poi-infoblock-${poiName}`));

    await actionFinish();
}
