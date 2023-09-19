'use strict';

import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import actionFinish from '../actions/actionFinish.mjs';

import { TEST_LOGIN } from '../options.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn({ login: TEST_LOGIN.toUpperCase() });
    await actionFinish();
}
