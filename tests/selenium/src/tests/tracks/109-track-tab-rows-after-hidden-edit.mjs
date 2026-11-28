import { By } from 'selenium-webdriver';
import { clickBy, matchPointsCount, waitBy, waitByRemoved } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenLocalTrack from '../../actions/tracks/actionOpenLocalTrack.mjs';

const TRACK = 'test-track-two-segments';
const TRACK_POINTS = 20;
const KEPT_POINTS = 5;

export default async function test() {
    await actionOpenMap();
    await actionOpenLocalTrack(TRACK);
    await matchPointsCount(TRACK_POINTS);
    await clickBy(By.css("[testid='se-tab-track']"));
    for (let count = TRACK_POINTS - 1; count >= KEPT_POINTS; count--) {
        await clickBy(By.id('se-track-point-delete-0'));
        await waitByRemoved(By.id(`se-track-point-${count}`));
    }

    await clickBy(By.css("[testid='se-tab-overview']"));
    await clickBy(By.id('se-panel-button-undo'));
    await matchPointsCount(KEPT_POINTS + 1);
    await clickBy(By.css("[testid='se-tab-track']"));

    // a point brought back while the Track tab is hidden gets its row when the tab is shown
    await waitBy(By.id(`se-track-point-${KEPT_POINTS}`));

    await actionFinish();
}
