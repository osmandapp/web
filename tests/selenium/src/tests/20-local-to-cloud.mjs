'use strict';

import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import actionUploadGpx from '../actions/actionUploadGpx.mjs';
import actionLocalToCloud from '../actions/actionLocalToCloud.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { clickBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';

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

    await actionFinish();
}
