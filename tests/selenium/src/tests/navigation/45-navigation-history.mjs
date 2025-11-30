import {
    clickBy,
    expectInputExactBy,
    formatLatLon,
    leftClickBy,
    matchTextBy,
    sendKeysBy,
    waitBy,
    waitByRemoved,
} from '../../lib.mjs';
import { By, Key } from 'selenium-webdriver';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';

const START_LATLNG = { lat: 50.45225, lon: 30.5231 };
const NEW_START_LATLNG = { lat: 50.45208, lon: 30.52587 };
const FINISH_LATLNG = { lat: 50.44837, lon: 30.52539 };

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-navigation'));

    // Create route with start point to populate history
    await leftClickBy(START_LATLNG.lat, START_LATLNG.lon);
    await actionIdleWait();

    await leftClickBy(FINISH_LATLNG.lat, FINISH_LATLNG.lon);
    await actionIdleWait();

    await waitByRemoved(By.id('se-progress-route-calculation'));

    await clickBy(By.id('se-route-start-point'));
    await clickBy(By.id('se-route-start-point-clear'));

    await leftClickBy(NEW_START_LATLNG.lat, NEW_START_LATLNG.lon);
    await actionIdleWait();

    await waitByRemoved(By.id('se-progress-route-calculation'));

    // Use history to restore start point
    await clickBy(By.id('se-route-start-point'));
    await sendKeysBy(By.id('se-route-start-point'), Key.END + Key.BACK_SPACE + Key.BACK_SPACE + Key.BACK_SPACE);
    await actionIdleWait();

    await waitBy(By.id('se-route-start-point-history-item-0'), { idle: true });
    await matchTextBy(By.id('se-route-start-point-history-item-0'), formatLatLon(NEW_START_LATLNG));

    await clickBy(By.id('se-navigation-title'));

    await clickBy(By.id('se-route-start-point'));
    await clickBy(By.id('se-route-start-point-clear'));
    await clickBy(By.id('se-route-start-point'));

    await actionIdleWait();
    await waitBy(By.id('se-route-start-point-history-item-3'), { idle: true });
    await matchTextBy(By.id('se-route-start-point-history-item-3'), formatLatLon(START_LATLNG));

    await actionIdleWait();
    await clickBy(By.id('se-route-start-point-history-item-3'));

    await expectInputExactBy(By.id('se-route-start-point'), formatLatLon(START_LATLNG));

    await clickBy(By.id('se-navigation-title'));

    // Clear history
    await clickBy(By.id('se-route-start-point'));
    await clickBy(By.id('se-route-start-point-clear'));

    await clickBy(By.id('se-navigation-title'));

    await clickBy(By.id('se-route-finish-point'));
    await clickBy(By.id('se-route-finish-point-clear'));

    await waitBy(By.id('se-route-finish-point-history-clear'), { idle: true });
    await clickBy(By.id('se-route-finish-point-history-clear'));

    await clickBy(By.id('se-route-finish-point'));
    await waitByRemoved(By.id('se-route-finish-point-history-item-0'), { optional: true });

    await actionFinish();
}
