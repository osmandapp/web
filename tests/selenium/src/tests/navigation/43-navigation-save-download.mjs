'use strict';

import { By } from 'selenium-webdriver';

import { clickBy, waitBy, waitByRemoved, sendKeysBy, assert } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { deleteTrack } from '../../util.mjs';
import { ROUTE_SUMMARY_SELECTOR } from '../../options.mjs';

const START_COORDS = '50.45010, 30.52340';
const FINISH_COORDS = '50.45466, 30.51660';
export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await returnToNavigation();

    await buildRoute();

    const trackName = await saveRouteToCloud();
    await verifyTrackInCloud(trackName);

    await returnToNavigation();
    await verifyDownloadDialog();

    await navigateToTracks();
    await deleteTrack(trackName);

    await actionFinish();
}

async function buildRoute() {
    await clickBy(By.id('se-route-start-point'));
    await clickBy(By.id('se-route-start-point-clear'), { optional: true });
    await clickBy(By.id('se-route-finish-point'));
    await clickBy(By.id('se-route-finish-point-clear'), { optional: true });

    await sendKeysBy(By.id('se-route-start-point'), START_COORDS + '\n');
    await sendKeysBy(By.id('se-route-finish-point'), FINISH_COORDS + '\n');

    await waitBy(ROUTE_SUMMARY_SELECTOR);
}

async function verifyDownloadDialog() {
    await clickBy(By.id('se-route-download-track'));
    await waitBy(By.id('se-download-track-full'));
    await clickBy(By.id('se-close-download-dialog'));
    await waitByRemoved(By.id('se-download-track-full'));
}

async function saveRouteToCloud() {
    await clickBy(By.id('se-route-save-to-cloud'));
    await waitBy(By.id('se-save-track-dialog'));

    const nameInput = await waitBy(By.id('se-save-track-name'));
    const trackName = await nameInput.getAttribute('value');

    await clickBy(By.id('se-submit-save-to-cloud'));
    await waitByRemoved(By.id('se-save-track-dialog'));
    return trackName;
}

async function verifyTrackInCloud(routeName) {
    await navigateToTracks();
    await waitBy(By.id(`se-${routeName}`));
    const infoElement = await waitBy(By.id(`se-cloud-t-info-${routeName}`));
    const infoText = await infoElement.getText();

    const distanceMatch = infoText.match(/([\d.,]+)\s*km/);
    await assert(distanceMatch !== null, `Cloud track info missing distance: ${infoText}`);
    const distance = parseFloat(distanceMatch[1].replace(',', '.'));
    await assert(distance > 0, `Cloud track distance is zero: ${infoText}`);
}

async function returnToNavigation() {
    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-navigation'));
}

async function navigateToTracks() {
    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));
}

