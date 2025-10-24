'use strict';

import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionUploadGpx from '../../actions/actionUploadGpx.mjs';
import actionFinish from '../../actions/actionFinish.mjs';

export default async function test() {
    await actionOpenMap();
    await actionUploadGpx({ mask: '*.gpx', multiple: true });
    await actionFinish();
}
