import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { clickBy, leftClickBy, matchTextBy, rightClickBy, waitBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { driver } from '../../options.mjs';

import { deleteTrack } from '../../util.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';

const TRACK_NAME = 'se-test-create-track';

const strings3 = [/Points: 3/, /Distance: [1-9]\.[0-9]+ km/];
const strings4 = [/Points: 4/, /Distance: [1-9]\.[0-9]+ km/];

export default async function test() {
    await actionOpenMap('#15/50.4946/30.5220');
    await actionLogIn();

    // Create local track with 3 points
    await rightClickBy(50.492409, 30.525041);
    await waitBy(By.id('se-context-menu'));
    await clickBy(By.id('se-create-route-action'));

    await leftClickBy(50.496149, 30.514956);
    await leftClickBy(50.501308, 30.514183);

    await waitBy(By.className('leaflet-interactive'));
    await waitBy(By.id('se-track-context-menu'));
    await validateInfoBlockStrings(strings3);

    await waitBy(By.id('se-main-graph'));
    await waitBy(By.id('se-road-attributes-graph'));

    // save to cloud → edit → save again → cloud must reflect update
    await saveLocalToCloud({ name: TRACK_NAME });

    await clickBy(By.id('se-track-actions-edit'));
    await waitBy(By.id('se-track-context-menu'));

    await leftClickBy(50.497, 30.52);
    await waitBy(By.className('leaflet-interactive'));
    await waitBy(By.id('se-track-context-menu'));
    await validateInfoBlockStrings(strings4);
    await actionIdleWait();
    await saveLocalToCloud({ overwrite: true });
    await validateInfoBlockStrings(strings4);
    await actionIdleWait();
    await clickBy(By.id('se-button-back'));
    await deleteTrack(TRACK_NAME);

    await actionFinish();
}

async function saveLocalToCloud({ name = null, overwrite = false } = {}) {
    await clickBy(By.id('se-local-track-actions-save-to-cloud'));
    if (name) {
        const input = await waitBy(By.id('se-save-track-name'));
        await driver.actions().click(input).click(input).click(input).perform();
        await input.sendKeys(name);
    }
    if (!overwrite) {
        await clickBy(By.id('se-submit-save-to-cloud'));
    }
    await waitBy(By.id('se-track-actions-edit'));
}

async function validateInfoBlockStrings(strings) {
    for await (const match of strings) {
        await matchTextBy(By.id('se-track-context-menu'), match);
    }
}
