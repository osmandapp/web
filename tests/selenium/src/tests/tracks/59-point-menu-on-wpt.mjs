import { By } from 'selenium-webdriver';
import { enclose, leftClickBy, matchPointsCount, rightClickBy, setMapCenter } from '../../lib.mjs';
import { driver } from '../../options.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionOpenLocalTrack from '../../actions/tracks/actionOpenLocalTrack.mjs';
import actionOpenPointMenu from '../../actions/tracks/actionOpenPointMenu.mjs';

const TRACK = 'test-track-wpt';
const WPT = [50.71871, 29.588748];
const ROUTE_POINTS = [
    [50.7177, 29.5877],
    [50.7177, 29.5897],
];

export default async function test() {
    await actionOpenMap();
    await actionOpenLocalTrack(TRACK);
    await setMapCenter(...WPT, 17);
    for (const point of ROUTE_POINTS) {
        await leftClickBy(...point);
    }
    await matchPointsCount(ROUTE_POINTS.length);

    // a right click on a waypoint while the menu of a route point is open does not keep that menu
    await actionOpenPointMenu(ROUTE_POINTS[0]);
    await rightClickBy(...WPT);
    await actionIdleWait();
    await enclose(async () => (await driver.findElements(By.id('se-point-context-menu'))).length === 0, {
        tag: 'no point menu on a waypoint',
    });

    await actionFinish();
}
