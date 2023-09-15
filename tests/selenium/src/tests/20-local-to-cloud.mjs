'use strict';

import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import actionUploadGpx from '../actions/actionUploadGpx.mjs';
import actionLocalToCloud from '../actions/actionLocalToCloud.mjs';
import actionFinish from '../actions/actionFinish.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await actionUploadGpx({ mask: 'test-routed-osrm.gpx' });
    await actionUploadGpx({ mask: 'test-track-mixed.gpx' });
    await actionUploadGpx({ mask: 'test-track-wpt.gpx' });

    await actionLocalToCloud({ mask: '*mixed*' });

    await actionFinish();
}
