import { By } from 'selenium-webdriver';
import { clickBy, waitBy, waitByRemoved } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenLocalTrack from '../../actions/tracks/actionOpenLocalTrack.mjs';
import actionDeleteWptFromTab from '../../actions/tracks/actionDeleteWptFromTab.mjs';

const TRACK = 'test-track-wpt';
const GROUP = 'groupA';
const [FIRST, SECOND] = ['VELO-6', 'VELO-7'];

export default async function test() {
    await actionOpenMap();
    await actionOpenLocalTrack(TRACK);
    await clickBy(By.css("[testid='se-tab-points']"));
    await waitBy(By.id('se-waypoints-tab-content'));
    await clickBy(By.id('se-wpt-group-header-' + GROUP));

    await actionDeleteWptFromTab(FIRST);
    await waitByRemoved(By.id('se-wpt-row-' + FIRST));

    await actionDeleteWptFromTab(SECOND);
    // the second waypoint deleted from the list leaves the list too
    await waitByRemoved(By.id('se-wpt-row-' + SECOND));

    await actionFinish();
}
