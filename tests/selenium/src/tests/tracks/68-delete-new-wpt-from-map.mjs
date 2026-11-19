import { By } from 'selenium-webdriver';
import { enclose, getWaypointNames, leftClickBy, waitBy } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionCreateRoute from '../../actions/tracks/actionCreateRoute.mjs';
import actionAddWpt from '../../actions/tracks/actionAddWpt.mjs';
import actionDeleteWptFromDetails from '../../actions/tracks/actionDeleteWptFromDetails.mjs';
import ignoreTest from '../../actions/actionIgnoreTest.mjs';

const ROUTE_POINT = [50.4925, 30.514];
const FIRST = { name: 'WPT-FIRST', point: [50.4925, 30.515] };
const SECOND = { name: 'WPT-SECOND', point: [50.4925, 30.516] };

export default async function test() {
    ignoreTest();

    await actionOpenMap('#17/50.4925/30.5150');
    await actionCreateRoute([ROUTE_POINT]);
    await actionAddWpt(FIRST.name, FIRST.point);
    await actionAddWpt(SECOND.name, SECOND.point);

    await leftClickBy(...FIRST.point);
    await waitBy(By.id('se-wpt-details'));
    await actionDeleteWptFromDetails();

    // the waypoint opened from the map is deleted and the other one stays
    await enclose(async () => (await getWaypointNames()).join() === SECOND.name, {
        tag: `${FIRST.name} deleted, ${SECOND.name} kept`,
    });

    await actionFinish();
}
