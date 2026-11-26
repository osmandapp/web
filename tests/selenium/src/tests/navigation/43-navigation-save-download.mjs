'use strict';

import { By } from 'selenium-webdriver';
import actionIdleWait from '../../actions/actionIdleWait.mjs';

import { clickBy, waitBy, waitByRemoved, assert, enclose, replaceTextBy } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionBuildRoute from '../../actions/navigation/actionBuildRoute.mjs';
import actionOpenRouteInfoBlock from '../../actions/navigation/actionOpenRouteInfoBlock.mjs';
import actionEditRoute from '../../actions/navigation/actionEditRoute.mjs';
import { deleteTrack, cleanupCloud } from '../../util.mjs';

const ROUTE_TRACK = 'se-test-navigation-route';
const INFO_BLOCK_TRACK = 'se-test-navigation-route-info';

const START_COORDS = '50.45010, 30.52340';
const FINISH_COORDS = '50.45466, 30.51660';

export default async function test() {
    try {
        await actionOpenMap();
        await actionLogIn();

        await returnToNavigation();

        await actionBuildRoute({ start: START_COORDS, finish: FINISH_COORDS });

        await saveRouteToCloud('se-route-save-to-cloud', ROUTE_TRACK);
        await verifyTrackInCloud(ROUTE_TRACK);

        await returnToNavigation();
        await verifyDownloadDialog('se-route-download-track');

        await navigateToTracks();
        await deleteTrack(ROUTE_TRACK);

        await returnToNavigation();
        await actionOpenRouteInfoBlock();
        await verifyDownloadDialog('se-route-track-actions-download');
        await saveRouteToCloud('se-route-track-actions-save-to-cloud', INFO_BLOCK_TRACK);
        // save from InfoBlock opens the cloud track, go back to the list
        await waitBy(By.id('se-track-actions-edit'));
        await actionIdleWait(); // let save-to-cloud finish refreshing the list before leaving the track
        await clickBy(By.id('se-button-back'));
        await verifyCloudTrackInfo(INFO_BLOCK_TRACK);
        await deleteTrack(INFO_BLOCK_TRACK);

        await returnToNavigation();
        await actionOpenRouteInfoBlock();
        await actionEditRoute();

        await actionFinish();
    } finally {
        await cleanupCloud({ tracks: [ROUTE_TRACK, INFO_BLOCK_TRACK] });
    }
}

async function verifyDownloadDialog(buttonId) {
    await clickBy(By.id(buttonId));
    await waitBy(By.id('se-download-track-full'));
    await clickBy(By.id('se-close-download-dialog'));
    await waitByRemoved(By.id('se-download-track-full'));
}

async function saveRouteToCloud(buttonId, trackName) {
    await clickBy(By.id(buttonId));
    await waitBy(By.id('se-save-track-dialog'));
    await replaceTextBy(By.id('se-save-track-name'), trackName);

    await clickBy(By.id('se-submit-save-to-cloud'));
    // a track left by a killed run asks to be updated
    await clickBy(By.id('se-overwrite-cloud-track'), { optional: true });
    await waitByRemoved(By.id('se-save-track-dialog'));
}

async function verifyTrackInCloud(routeName) {
    await navigateToTracks();
    await verifyCloudTrackInfo(routeName);
}

async function verifyCloudTrackInfo(routeName) {
    await waitBy(By.id(`se-${routeName}`));
    let infoText;
    await enclose(
        async () => {
            const infoElement = await waitBy(By.id(`se-cloud-t-info-${routeName}`));
            infoText = await infoElement.getText();
            return /([\d.,]+)\s*km/.test(infoText);
        },
        { tag: `cloudTrackInfo-${routeName}` }
    );

    const distance = parseFloat(infoText.match(/([\d.,]+)\s*km/)[1].replace(',', '.'));
    await assert(distance > 0, `Cloud track distance is zero: ${infoText}`);
}

async function returnToNavigation() {
    await clickBy(By.id('se-show-menu-navigation'));
}

async function navigateToTracks() {
    await clickBy(By.id('se-show-menu-tracks'));
}
