import { By } from 'selenium-webdriver';
import {
    clickBy,
    enclose,
    getOpenTrackName,
    getTrackLines,
    waitBy,
    waitByRemoved,
    waitRoutedLines,
} from '../../lib.mjs';
import { driver } from '../../options.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionCreateRoute, { ROUTE_POINTS } from '../../actions/tracks/actionCreateRoute.mjs';
import actionOpenPointMenu from '../../actions/tracks/actionOpenPointMenu.mjs';

const ROUTER_URL = '/routing/update-route-between-points';

// a track saved while a segment waits for the router gets the route when it is opened again
export default async function test() {
    await actionOpenMap('#15/50.4946/30.5220');
    const routed = await actionCreateRoute(ROUTE_POINTS);
    const name = await getOpenTrackName();

    // the router never answers until the page is loaded again
    await driver.executeScript(`
        const fetch = window.fetch;
        window.fetch = function (url) {
            return String(url).includes('${ROUTER_URL}') ? new Promise(() => {}) : fetch.apply(this, arguments);
        };
    `);
    await actionOpenPointMenu(ROUTE_POINTS[1]);
    await clickBy(By.id('se-point-context-menu-profile-after'));
    await clickBy(By.id('se-track-profile-select'));
    await clickBy(By.id('se-track-profile-pedestrian'));
    await clickBy(By.id('se-change-profile-dialog-change'));
    await waitByRemoved(By.id('se-change-profile-dialog'));
    await enclose(async () => (await getTrackLines()).some((line) => line.dashed), { tag: 'segment waits' });
    await actionIdleWait();

    await driver.navigate().refresh();
    await actionIdleWait();
    await clickBy(By.id('se-local-track-' + name));
    await waitBy(By.id('se-panel-button-undo'), { idle: true });

    await waitRoutedLines(routed);

    await actionFinish();
}
