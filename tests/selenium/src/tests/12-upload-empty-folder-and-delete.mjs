'use strict';

import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { clickBy, getTracks, uploadCloudTracks } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionLogIn from '../actions/actionLogIn.mjs';
import actionDeleteFolder from '../actions/actionDeleteFolder.mjs';
import actionCreateNewFolder from '../actions/actionCreateNewFolder.mjs';

export default async function test() {
    const folder = 'new';
    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));

    await actionCreateNewFolder(folder);
    await clickBy(By.id(`se-menu-cloud-${folder}`));

    // import first track
    await clickBy(By.id('se-import-first-track'));
    const { path } = getTracks().find((t) => t.name === 'test-routed-osrm');
    await uploadCloudTracks({ files: path });
    await clickBy(By.id('se-button-back'));
    await clickBy(By.id('se-back-folder-button'));

    await actionDeleteFolder(folder);

    await actionFinish();
}
