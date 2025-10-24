'use strict';

import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();
    await actionFinish();
}
