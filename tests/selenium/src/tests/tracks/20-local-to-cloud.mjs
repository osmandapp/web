'use strict';

import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionUploadGpx from '../../actions/actionUploadGpx.mjs';
import actionLocalToCloud from '../../actions/tracks/actionLocalToCloud.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { clickBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { deleteTrack } from '../../util.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await actionUploadGpx({ mask: 'test-routed-osrm.gpx' });
    await clickBy(By.id('se-show-menu-planroute'));
    await actionUploadGpx({ mask: 'test-track-mixed.gpx' });
    await clickBy(By.id('se-show-menu-planroute'));
    await actionUploadGpx({ mask: 'test-track-wpt.gpx' });
    await clickBy(By.id('se-show-menu-planroute'));
    await actionLocalToCloud({ mask: '*mixed*' });

    await deleteTrack('test-track-mixed');

    await actionFinish();
}
