import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { assert, clickBy, clickOnMapCenter, getUrl, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';

const CONFIGURE_URL = 'configure/';
const WEATHER_URL = 'weather/';
const TRACKS_URL = 'mydata/tracks/';
const FAVORITES_URL = 'mydata/favorites/';
const NAVIGATE_URL = 'navigate/';
const PLANROUTE_URL = 'plan/';
const SETTINGS_URL = 'settings/';
const LOGIN_URL = 'account/';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();
    let url;

    // login
    await clickBy(By.id('se-open-login-button'));
    url = await getUrl();
    await assert(url.includes(LOGIN_URL));
    await waitBy(By.id('se-login-menu-close'));
    await clickBy(By.id('se-login-menu-close'));
    url = await getUrl();
    await assert(!url.includes(LOGIN_URL));

    // configure
    await clickBy(By.id('se-show-menu-configuremap'));
    url = await getUrl();
    await assert(url.includes(CONFIGURE_URL));
    await waitBy(By.id('se-configure-map-menu-close'));
    await clickBy(By.id('se-configure-map-menu-close'));
    url = await getUrl();
    await assert(!url.includes(CONFIGURE_URL));

    // weather
    await clickBy(By.id('se-show-menu-weather'));
    url = await getUrl();
    await assert(url.includes(WEATHER_URL));
    await waitBy(By.id('se-weather-close'));
    await clickBy(By.id('se-weather-close'));
    url = await getUrl();
    await assert(!url.includes(WEATHER_URL));

    // tracks
    await clickBy(By.id('se-show-menu-tracks'));
    url = await getUrl();
    await assert(url.includes(TRACKS_URL));
    await waitBy(By.id('se-close-folder-button-visible'));
    await clickBy(By.id('se-close-folder-button-visible'));
    url = await getUrl();
    await assert(!url.includes(TRACKS_URL));

    // favorites
    await clickBy(By.id('se-show-menu-favorites'));
    url = await getUrl();
    await assert(url.includes(FAVORITES_URL));
    await waitBy(By.id('se-close-folder-button-visible'));
    await clickBy(By.id('se-close-folder-button-visible'));
    url = await getUrl();
    await assert(!url.includes(FAVORITES_URL));

    // navigation
    await clickBy(By.id('se-show-menu-navigation'));
    url = await getUrl();
    await assert(url.includes(NAVIGATE_URL));
    await clickBy(By.id('se-show-menu-navigation'));
    url = await getUrl();
    await assert(!url.includes(NAVIGATE_URL));

    // plan
    await clickBy(By.id('se-show-menu-planroute'));
    url = await getUrl();
    await assert(url.includes(PLANROUTE_URL));
    await clickBy(By.id('se-show-menu-planroute'));
    url = await getUrl();
    await assert(!url.includes(PLANROUTE_URL));

    // settings
    await clickBy(By.id('se-show-menu-settings'));
    url = await getUrl();
    await assert(url.includes(SETTINGS_URL));
    await clickBy(By.id('se-show-menu-settings'));
    url = await getUrl();
    await assert(!url.includes(SETTINGS_URL));

    // check pin
    await clickOnMapCenter();
    await waitBy(By.id('se-context-menu'));
    await clickBy(By.id('se-add-pin-action'));
    url = await getUrl();
    await assert(url.includes('pin'));
    await clickBy(By.id('se-show-menu-navigation'));
    url = await getUrl();
    await assert(url.includes('pin'));

    // check navigation
    await clickOnMapCenter();
    await waitBy(By.id('se-context-menu'));
    await clickBy(By.id('se-direction-action-from'));
    url = await getUrl();
    await assert(url.includes('pin'));
    await assert(url.includes(NAVIGATE_URL));
    await assert(url.includes('start'));
    await clickBy(By.id('se-show-menu-navigation'));
    url = await getUrl();
    await assert(url.includes('pin'));
    await assert(!url.includes(NAVIGATE_URL));
    await assert(!url.includes('start'));

    await actionFinish();
}
