import actionOpenMap from '../actions/actionOpenMap.mjs';
import { clickBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../actions/actionFinish.mjs';

export default async function test() {
    await actionOpenMap();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-weather'));

    await waitByRemoved(By.id('se-loading-weather-data'));
    await waitBy(By.id('se-weather-menu-name'));
    await waitBy(By.id('se-weather-day-item-1'));
    await waitBy(By.id('se-weather-forecast-data-Precipitation'));
    await waitBy(By.id('se-weather-info'));

    await actionFinish();
}
