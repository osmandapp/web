import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import { assert, clickBy, getUrl, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../actions/actionFinish.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    let url;

    await waitBy(By.id('se-logout-button'));
    await clickBy(By.id('se-logout-button'));

    await waitBy(By.id('se-login-menu-osmand-purchases'));
    await clickBy(By.id('se-login-menu-osmand-purchases'));

    url = await getUrl();
    await assert(url.includes('purchases'));

    await waitBy(By.id('se-purchases-menu-back'));
    await waitBy(By.id('se-subs-item-OsmAnd Promo'));

    await clickBy(By.id('se-subs-item-OsmAnd Promo'));
    await waitBy(By.id('se-purchase-info-header-back'));

    url = await getUrl();
    await assert(url.includes('sub0'));

    await waitBy(By.id('se-purchase-info-expire-time'));
    await waitBy(By.id('se-purchase-info-store'));

    await clickBy(By.id('se-purchase-info-header-back'));

    url = await getUrl();
    await assert(url.includes('purchases'));

    await clickBy(By.id('se-purchases-menu-back'));

    url = await getUrl();
    await assert(url.includes('account'));

    await actionFinish();
}
