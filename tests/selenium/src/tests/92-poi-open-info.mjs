import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import actionCheckPoi from '../actions/actionCheckPoi.mjs';
import { clickBy, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../actions/actionFinish.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const category = 'Cafe and restaurant';
    const iconWpt = 'amenity_restaurant';
    const poiName = 'Public Cafe';

    await waitBy(By.id('se-poi-panel-button'));
    await clickBy(By.id('se-poi-panel-button'));

    await waitBy(By.id('se-open-poi-dialog'));
    await clickBy(By.id(`se-poi-category-${category}`));

    await actionCheckPoi({ iconWpt, name: poiName });
    await clickBy(By.id(`se-wpt-marker-icon-${iconWpt}-#ffffff-${poiName}`));
    await waitBy(By.id(`se-poi-infoblock-${poiName}`));

    await actionFinish();
}
