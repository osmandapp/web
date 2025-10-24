'use strict';

import { By } from 'selenium-webdriver';
import { enclose, clickBy, enumerateIds } from '../../lib.mjs';

import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionUploadGpx from '../../actions/actionUploadGpx.mjs';
import actionLocalToCloud from '../../actions/tracks/actionLocalToCloud.mjs';
import { deleteTrack } from '../../util.mjs';
import actionFinish from '../../actions/actionFinish.mjs';

const TRACK = 'test-routed-osrm';

const localTrackButtons = [
    'se-panel-button-change-profile',
    'se-panel-button-save-to-cloud',
    'se-panel-button-undo',
    'se-panel-button-redo',
    'se-panel-button-download-gpx',
    'se-panel-button-delete-track',
    'se-panel-button-close-track',
];
const cloudTrackButtons = [
    'se-panel-button-edit-icon',
    'se-panel-button-edit-track',
    'se-panel-button-download-gpx',
    'se-panel-button-delete-track',
    'se-panel-button-close-track',
];

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await actionUploadGpx({ mask: TRACK + '.gpx' });
    await clickBy(By.id('se-local-track-' + TRACK));
    await validatePanelButtons(localTrackButtons);
    await clickBy(By.id('se-show-menu-planroute'));
    await actionLocalToCloud({ mask: TRACK });
    await clickBy(By.id('se-cloud-track-' + TRACK));
    await validatePanelButtons(cloudTrackButtons);

    await deleteTrack(TRACK);
    await actionFinish();
}

async function validatePanelButtons(ids) {
    await enclose(
        async () => {
            const buttons = await enumerateIds('se-panel-button-');
            return JSON.stringify(ids.sort()) === JSON.stringify(buttons.sort());
        },
        { tag: 'validatePanelButtons' }
    );
    await clickBy(By.id('se-button-back'));
}
