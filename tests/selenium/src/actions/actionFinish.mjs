'use strict';

import { FINAL_DELAY } from '../options.mjs';

import actionIdleWait from './actionIdleWait.mjs';

/**
 * Action: actionFinish()
 *
 * TODO: close main menu on mobile for nice screenshot
 */
export default async function test() {
    await actionIdleWait({ idle: FINAL_DELAY });
}
