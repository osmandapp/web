import actionOpenMap from '../actions/actionOpenMap.mjs';
import { clickBy, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../actions/actionFinish.mjs';

export default async function test() {
    await actionOpenMap();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-weather'));

    await clickBy(By.id('se-weather-forecast-Temperature'));
    await waitBy(By.id('se-weather-forecast-details'));
    await waitBy(By.id('se-weather-forecast-graph'));
    await waitBy(By.id('se-weather-forecast-week-details'));

    await actionFinish();
}
