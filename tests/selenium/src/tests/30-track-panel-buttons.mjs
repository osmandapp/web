'use strict';

import { By } from 'selenium-webdriver';
import { enclose, clickBy, enumerateIds } from '../lib.mjs';

import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import actionUploadGpx from '../actions/actionUploadGpx.mjs';
import actionLocalToCloud from '../actions/actionLocalToCloud.mjs';

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

    await actionLocalToCloud({ mask: TRACK });
    await clickBy(By.id('se-cloud-track-' + TRACK));
    await validatePanelButtons(cloudTrackButtons);
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

// async function openCloudTrack(name) {
//     await enclose(async () => {
//         await clickBy(By.id('se-menu-cloud-Tracks'), { optional: true });
//         const clicked = await clickBy(By.id('se-cloud-track-' + name), { optional: true });
//         return clicked && clicked !== true; // optional clickBy might return true when no click done
//     });
// }
