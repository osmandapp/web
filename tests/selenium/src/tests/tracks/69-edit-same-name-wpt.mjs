import { By } from 'selenium-webdriver';
import { clickBy, enclose, getMarkersNear, leftClickBy, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionCreateRoute from '../../actions/tracks/actionCreateRoute.mjs';
import actionAddWpt from '../../actions/tracks/actionAddWpt.mjs';

const ROUTE_POINT = [50.4925, 30.514];
const WPT_NAME = 'WPT-SAME';
const FIRST = [50.4925, 30.515];
const SECOND = [50.4925, 30.516];

export default async function test() {
    await actionOpenMap('#17/50.4925/30.5150');
    await actionCreateRoute([ROUTE_POINT]);
    await actionAddWpt(WPT_NAME, FIRST);
    await actionAddWpt(WPT_NAME, SECOND);

    await leftClickBy(...SECOND);
    await waitBy(By.id('se-wpt-details'));
    await clickBy(By.id('se-edit-fav-item'));
    await waitBy(By.id('se-edit-fav-dialog'));
    await sendKeysBy(By.id('se-fav-name-input'), '-edited');
    await clickBy(By.id('se-edit-fav-item-submit'));
    await waitByRemoved(By.id('se-edit-fav-dialog'));

    // editing the second waypoint of the same name leaves the first one in its place
    await enclose(() => hasWptMarker(FIRST), { tag: 'first waypoint kept in place' });

    await actionFinish();
}

async function hasWptMarker(point) {
    return (await getMarkersNear(...point)).some((marker) => marker.type === 'localTracksLayers');
}
