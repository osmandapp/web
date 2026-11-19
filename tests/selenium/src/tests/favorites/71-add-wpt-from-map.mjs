import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { clickBy, matchTextBy, waitBy, waitNoPointsCount } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { deleteTrack, cleanupCloud } from '../../util.mjs';
import actionAddWpt from '../../actions/tracks/actionAddWpt.mjs';
import actionSaveLocalToCloud from '../../actions/tracks/actionSaveLocalToCloud.mjs';

const TRACK_NAME = 'se-test-add-wpt-from-map';

export default async function test() {
    try {
        await actionOpenMap();
        await actionLogIn();

        const favoriteName = 'Apple';

        await clickBy(By.id('se-show-menu-tracks'));

        await clickBy(By.id('se-create-new-route'));

        // add wpt
        await actionAddWpt(favoriteName);
        // the waypoint is not a point of the route
        await waitNoPointsCount();
        await actionSaveLocalToCloud({ name: TRACK_NAME });
        await clickBy(By.id('se-button-back'));

        await waitBy(By.id('se-' + TRACK_NAME));
        await matchTextBy(By.id('se-cloud-t-info-' + TRACK_NAME), '0 · 0:00 · 1');
        await deleteTrack(TRACK_NAME);

        await actionFinish();
    } finally {
        await cleanupCloud({ tracks: [TRACK_NAME] });
    }
}
