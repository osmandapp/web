'use strict';

import { FINAL_IDLE } from '../options.mjs';

import actionIdleWait from './actionIdleWait.mjs';

/**
 * Action: actionFinish()
 */
export default async function test() {
    await actionIdleWait({ idle: FINAL_IDLE });
}
