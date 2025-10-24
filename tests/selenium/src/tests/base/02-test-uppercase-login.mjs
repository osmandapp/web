'use strict';

import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';

import { TEST_LOGIN } from '../../options.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn({ login: TEST_LOGIN.toUpperCase() });
    await actionFinish();
}
