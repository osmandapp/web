'use strict';

import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();
}
