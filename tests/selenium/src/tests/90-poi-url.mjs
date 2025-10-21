import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import { driver, url } from '../options.mjs';
import actionCheckPoi from '../actions/map/actionCheckPoi.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { assert, clickBy, matchTextBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const name = 'Львівські пляцки';
    const type = 'cafe';
    const lat = 50.44559;
    const lng = 30.517246;

    const iconWpt = 'amenity_cafe';

    let currentUrl =
        url.split('#')[0] +
        `poi/?name=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}&pin=${lat}%2C${lng}#16/50.4435/30.5190`;

    await driver.get(currentUrl);

    await matchTextBy(By.id('se-wpt-name'), name);

    await actionCheckPoi({ iconWpt, name });

    await clickBy(By.id('se-close-wpt-details'));

    await waitByRemoved(By.id('se-wpt-name'));

    await actionCheckPoi({ iconWpt, name, hidden: true });

    currentUrl = await driver.getCurrentUrl();
    await assert(!currentUrl.includes('poi/?name=') && !currentUrl.includes('&type=') && !currentUrl.includes('&pin='));

    await actionFinish();
}
