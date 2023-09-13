'use strict';

import { By } from 'selenium-webdriver';

import { clickBy } from '../lib.mjs';
import { mobile } from '../options.mjs';

import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionUploadGpx from '../actions/actionUploadGpx.mjs';
import actionFinish from '../actions/actionFinish.mjs';

export default async function test() {
    // common: startup
    await actionOpenMap();

    // open main menu first (on mobile)
    mobile && (await clickBy(By.id('se-main-menu')));

    // open tracks menu before gpx upload
    await clickBy(By.id('se-menu-tracks'));

    // distinct action
    await actionUploadGpx({ mask: '*.gpx', multiple: false });

    // common: finish
    await actionFinish();
}
