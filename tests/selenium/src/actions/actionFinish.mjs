'use strict';

import { By } from 'selenium-webdriver';

import { clickBy } from '../lib.mjs';
import { mobile, FINAL_DELAY } from '../options.mjs';

import actionIdleWait from './actionIdleWait.mjs';

/**
 * Action: actionFinish()
 */
export default async function test() {
    mobile && (await clickBy(By.id('se-hide-main-menu'), { optional: true })); // nice screenshot
    await actionIdleWait({ idle: FINAL_DELAY });
}
