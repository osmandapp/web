import { By } from 'selenium-webdriver';
import { clickBy, leftClickBy, setMapCenter, waitBy } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenLocalTrack from '../../actions/tracks/actionOpenLocalTrack.mjs';
import actionDeleteWptFromDetails from '../../actions/tracks/actionDeleteWptFromDetails.mjs';
import actionDeleteTracksByPattern from '../../actions/tracks/actionDeleteTracksByPattern.mjs';
import ignoreTest from '../../actions/actionIgnoreTest.mjs';

const TRACK = 'test-track-wpt';
const WPT = [50.71871, 29.588748];

export default async function test() {
    ignoreTest();

    await actionOpenMap();
    await actionLogIn();
    await clickBy(By.id('se-show-menu-tracks'));
    await actionDeleteTracksByPattern(TRACK);

    await actionOpenLocalTrack(TRACK);
    await setMapCenter(...WPT, 17);
    await leftClickBy(...WPT);
    await waitBy(By.id('se-wpt-details'));
    await actionDeleteWptFromDetails();
    await waitBy(By.id('se-track-context-menu'), { idle: true });
    await clickBy(By.id('se-button-back'));
    if (!(await waitBy(By.id('se-menu-component-cloud_track-block'), { optional: true, idle: true }))) {
        await clickBy(By.id('se-show-menu-tracks'));
    }
    await actionDeleteTracksByPattern(TRACK);
    await clickBy(By.id('se-show-menu-planroute'));

    // the track stays local after a waypoint opened from the map is deleted
    await waitBy(By.id('se-local-track-' + TRACK));

    await actionFinish();
}
