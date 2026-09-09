'use strict';

import { FINAL_DELAY } from '../options.mjs';

import actionIdleWait from './actionIdleWait.mjs';

/**
 * Action: actionFinish()
 */
export default async function test() {
    await actionIdleWait({ idle: FINAL_DELAY, tiles: true });
}
