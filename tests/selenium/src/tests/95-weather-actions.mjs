import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import { clickBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../actions/actionFinish.mjs';

export default async function test() {
    await actionOpenMap();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-weather'));

    await waitBy(By.id('se-forecast_source'));
    await clickBy(By.id('se-forecast_source'));
    await waitBy(By.id('se-weather-source-actions'));
    await clickBy(By.id('se-ECWMF'));
    await waitByRemoved(By.id('se-loading-weather-data'));
    await waitBy(By.id('se-weather-forecast-data-Wind-not-available'));
    await waitBy(By.id('se-weather-forecast-data-Cloud-not-available'));
    await waitBy(By.id('se-forecast_source'));
    await clickBy(By.id('se-forecast_source'));
    await waitBy(By.id('se-weather-source-actions'));
    await clickBy(By.id('se-GFS'));
    await waitByRemoved(By.id('se-loading-weather-data'));
    await waitBy(By.id('se-weather-forecast-data-Wind'));
    await waitBy(By.id('se-weather-forecast-data-Cloud'));

    await actionFinish();
}
