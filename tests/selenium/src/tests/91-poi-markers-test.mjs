import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import actionCheckPoi from '../actions/actionCheckPoi.mjs';
import { clickBy, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const category = 'Cafe and restaurant';
    const iconWpt = 'amenity_restaurant';
    const poiName = 'Public Cafe';

    await actionCheckPoi({ iconWpt, name: poiName, hidden: true });

    await waitBy(By.id('se-poi-panel-button'));
    await clickBy(By.id('se-poi-panel-button'));

    await waitBy(By.id('se-open-poi-dialog'));
    await clickBy(By.id(`se-poi-category-${category}`));

    await actionCheckPoi({ iconWpt, name: poiName });

    await actionFinish();
}
