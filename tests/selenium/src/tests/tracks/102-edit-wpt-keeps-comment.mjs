import { By } from 'selenium-webdriver';
import { clickBy, matchTextBy, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenLocalTrack from '../../actions/tracks/actionOpenLocalTrack.mjs';

const TRACK = 'test-track-wpt';
const WPT = 'VELO-0';
const COMMENT = /Comment\s+6\/13\/2016 9:32:27 PM/;
const DETAILS = By.css('[id^="se-wpt-item-info-"]');

export default async function test() {
    await actionOpenMap();
    await actionOpenLocalTrack(TRACK);
    await clickBy(By.css("[testid='se-tab-points']"));
    await clickBy(By.id('se-wpt-group-header-waypoints'));
    await clickBy(By.id('se-wpt-row-' + WPT));
    await matchTextBy(DETAILS, COMMENT);

    await clickBy(By.id('se-edit-fav-item'));
    await waitBy(By.id('se-edit-fav-dialog'));
    await sendKeysBy(By.id('se-fav-name-input'), '-edited');
    await clickBy(By.id('se-edit-fav-item-submit'));
    await waitByRemoved(By.id('se-edit-fav-dialog'));

    // an edited waypoint keeps its comment
    await matchTextBy(DETAILS, COMMENT);

    await actionFinish();
}
