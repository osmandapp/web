'use strict';

import { By } from 'selenium-webdriver';
import { driver } from '../../options.mjs';
import { enclose, clickBy, enumerateIds, waitBy } from '../../lib.mjs';

import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionUploadGpx from '../../actions/actionUploadGpx.mjs';
import actionLocalToCloud from '../../actions/tracks/actionLocalToCloud.mjs';
import { deleteTrack } from '../../util.mjs';
import actionFinish from '../../actions/actionFinish.mjs';

const TRACK = 'test-routed-osrm';

const localTrackButtons = ['se-panel-button-undo', 'se-panel-button-redo', 'se-panel-button-delete-track'];
const cloudTrackActionButtons = [
    'se-track-actions-visibility',
    'se-track-actions-appearance',
    'se-track-actions-edit',
    'se-track-actions-share',
    'se-track-actions-download',
];

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await actionUploadGpx({ mask: TRACK + '.gpx' });
    await clickBy(By.id('se-local-track-' + TRACK));
    await waitBy(By.id('se-panel-button-undo'), { idle: true });
    await validatePanelButtons(localTrackButtons);
    await clickBy(By.id('se-show-menu-planroute'));
    await actionLocalToCloud({ mask: TRACK });
    await clickBy(By.id('se-cloud-track-' + TRACK));
    await validateNoPanelButtons();
    await validateTrackActionButtons(cloudTrackActionButtons);
    await clickBy(By.id('se-button-back'));

    await deleteTrack(TRACK);
    await actionFinish();
}

const LOCAL_PANEL_OPTIONAL_IDS = ['se-panel-button-change-profile'];

async function validatePanelButtons(requiredIds) {
    await enclose(
        async () => {
            const buttons = await enumerateIds('se-panel-button-');
            const actual = [...new Set(buttons)].sort();
            const requiredSorted = [...requiredIds].sort();
            const allowed = new Set([...requiredIds, ...LOCAL_PANEL_OPTIONAL_IDS]);
            const hasAllRequired = requiredSorted.every((id) => actual.includes(id));
            const noExtras = actual.every((id) => allowed.has(id));
            return hasAllRequired && noExtras && actual.length >= requiredSorted.length;
        },
        { tag: 'validatePanelButtons' }
    );
    await clickBy(By.id('se-button-back'));
}

async function validateNoPanelButtons() {
    await enclose(
        async () => {
            const found = await driver.findElements(By.xpath('//*[starts-with(@id, "se-panel-button-")]'));
            if (found.length === 0) {
                return true;
            }
            for (let i = 0; i < found.length; i++) {
                if ((await found[i].getCssValue('visibility')) !== 'hidden') {
                    return false;
                }
            }
            return true;
        },
        { tag: 'validateNoPanelButtons' }
    );
}

async function validateTrackActionButtons(ids) {
    for (const id of ids) {
        await waitBy(By.id(id));
    }
}
