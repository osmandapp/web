import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import { clickBy, matchTextBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../actions/actionFinish.mjs';

const TEMPERATURE = /^-?(50(\.0{1,2})?|[1-4]?[0-9](\.\d{1,2})?|0(\.\d{1,2})?)$/; // -50..50 with optional decimal values
const PRECIPITATION = /^(0(\.\d{1,2})?|[1-9][0-9]?(\.\d{1,2})?|1[0-9]{2}(\.\d{1,2})?|200(\.0{1,2})?)$/; // 0..200 mm with optional decimal values
const WIND = /^(0|[1-2]?[0-9](\.\d{1,2})?|30(\.0{1,2})?)$/; // 0..30 m/s with optional decimal values
const PRESSURE = /^(500|5[0-9]{2}(\.\d{1,2})?|[6-9][0-9]{2}(\.\d{1,2})?|1[0-4][0-9]{2}(\.\d{1,2})?|1500(\.0{1,2})?)$/; // 500..1500 mmHg with optional decimal values
const CLOUD = /^([0-9]|[1-9][0-9]|100)(\.\d{1,2})$/; // 0..100% with optional decimal values

export default async function test() {
    await actionOpenMap();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-weather'));
    await waitByRemoved(By.id('se-loading-weather-data'));

    await waitBy(By.id('se-weather-forecast-data-Temperature'));
    await matchTextBy(By.id('se-weather-forecast-data-Temperature'), TEMPERATURE);
    await waitBy(By.id('se-weather-forecast-data-Precipitation'));
    await matchTextBy(By.id('se-weather-forecast-data-Precipitation'), PRECIPITATION);
    await waitBy(By.id('se-weather-forecast-data-Wind'));
    await matchTextBy(By.id('se-weather-forecast-data-Wind'), WIND);
    await waitBy(By.id('se-weather-forecast-data-Air pressure'));
    await matchTextBy(By.id('se-weather-forecast-data-Air pressure'), PRESSURE);
    await waitBy(By.id('se-weather-forecast-data-Cloud'));
    await matchTextBy(By.id('se-weather-forecast-data-Cloud'), CLOUD);

    await clickBy(By.id('se-forecast_source'));
    await waitBy(By.id('se-weather-source-actions'));
    await clickBy(By.id('se-ECWMF'));

    await waitByRemoved(By.id('se-loading-weather-data'));
    await waitBy(By.id('se-weather-forecast-data-Wind-not-available'));
    await waitBy(By.id('se-weather-forecast-data-Cloud-not-available'));
    await waitBy(By.id('se-weather-forecast-data-Temperature'));
    await matchTextBy(By.id('se-weather-forecast-data-Temperature'), TEMPERATURE);
    await waitBy(By.id('se-weather-forecast-data-Precipitation'));
    await matchTextBy(By.id('se-weather-forecast-data-Precipitation'), PRECIPITATION);
    await waitBy(By.id('se-weather-forecast-data-Air pressure'));
    await matchTextBy(By.id('se-weather-forecast-data-Air pressure'), PRESSURE);

    await actionFinish();
}
