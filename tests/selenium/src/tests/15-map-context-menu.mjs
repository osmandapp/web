import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import { clickBy, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../actions/actionFinish.mjs';
import setView from '../actions/setView.mjs';
import { getUrl } from '../lib.mjs';
import actionOpenContextMenu from '../actions/map/actionOpenContextMenu.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    // Where I am
    await actionOpenContextMenu();
    await clickBy(By.id('se-where-i-am'));
    await waitBy(By.id('se-geojson-search'));

    // Open weather
    await actionOpenContextMenu();
    await clickBy(By.id('se-open-weather-action'));
    await waitBy(By.id('se-weather-menu-name'));
    await waitBy(By.id('se-weather-close'));
    await clickBy(By.id('se-weather-close'));

    // Create new route
    await actionOpenContextMenu();
    await clickBy(By.id('se-create-route-action'));
    await waitBy(By.id('se-infoblock-all'));
    await clickBy(By.id('se-show-menu-planroute'));

    // Add favorite
    await actionOpenContextMenu();
    await clickBy(By.id('se-add-favorite-action'));
    await waitBy(By.id('se-add-fav-dialog'));
    await clickBy(By.id('se-add-fav-dialog-close'));

    // Direction from/to
    await actionOpenContextMenu();
    await clickBy(By.id('se-direction-action-from'));
    await setView({ lat: 49.9847, lon: 28.7849, zoom: 13 });
    await actionOpenContextMenu();
    await clickBy(By.id('se-direction-action-to'));
    await waitBy(By.id('se-route-info'));
    await clickBy(By.id('se-show-menu-navigation'));

    // Add pin
    await actionOpenContextMenu();
    await clickBy(By.id('se-add-pin-action'));
    await checkPin();

    //Show regions
    await actionOpenContextMenu();
    await clickBy(By.id('se-show-regions-action'));
    await waitBy(By.className('leaflet-popup'));

    await actionFinish();
}

async function checkPin() {
    const url = await getUrl();
    return url.includes('pin');
}
