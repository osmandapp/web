import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import {
    clickBy,
    enclose,
    getTextBy,
    leftClickBy,
    matchTextBy,
    rightClickBy,
    setMapCenter,
    waitBy,
    waitByRemoved,
} from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { driver } from '../../options.mjs';

import { deleteTrack } from '../../util.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionDeleteTracksByPattern from '../../actions/tracks/actionDeleteTracksByPattern.mjs';
import actionUploadGpx from '../../actions/actionUploadGpx.mjs';

const TRACK_NAME = 'se-test-create-track';

const strings3 = [/Points: 3/, /Distance: [1-9]\.[0-9]+ km/];
const strings4 = [/Points: 4/, /Distance: [1-9]\.[0-9]+ km/];

const EDITOR_PANEL_BUTTONS = [
    'se-panel-button-change-profile',
    'se-panel-button-undo',
    'se-panel-button-redo',
    'se-panel-button-delete-track',
];

const PLAIN_TRACK = 'test-track-trkpt';
const PLAIN_TRACK_POINTS = 1460;
const EXTENDED_TRACK_POINTS = PLAIN_TRACK_POINTS + 1;

export default async function test() {
    await actionOpenMap('#15/50.4946/30.5220');
    await actionLogIn();

    // remove the track left by a previous failed run, otherwise save asks to update it
    await clickBy(By.id('se-show-menu-tracks'));
    await actionDeleteTracksByPattern(TRACK_NAME);
    await clickBy(By.id('se-show-menu-tracks'));

    // Create local track with 3 points
    await rightClickBy(50.492409, 30.525041);
    await waitBy(By.id('se-context-menu'));
    await clickBy(By.id('se-create-route-action'));

    await leftClickBy(50.496149, 30.514956);
    await leftClickBy(50.501308, 30.514183);

    await waitBy(By.className('leaflet-interactive'));
    await waitBy(By.id('se-track-context-menu'));
    await validateInfoBlockStrings(strings3);
    await validateRoutedLines(2);

    // a click on the map while the menu of a point is open adds no point
    await rightClickBy(50.496149, 30.514956);
    await waitBy(By.id('se-point-context-menu'));
    await leftClickBy(50.494, 30.53);
    await waitByRemoved(By.id('se-point-context-menu'));
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

    await createEmptyTrack();
    await addPointsToPlainTrack();

    await actionFinish();
}

// a track created by the button gets its first point by a click
async function createEmptyTrack() {
    await clickBy(By.id('se-create-new-route'));
    for (const id of EDITOR_PANEL_BUTTONS) {
        await waitBy(By.id(id));
    }
    await setMapCenter(50.49, 30.51);
    await leftClickBy(50.49, 30.51);
    await validateInfoBlockStrings([/Points: 1\b/]);
}

async function addPointsToPlainTrack() {
    await actionUploadGpx({ mask: PLAIN_TRACK + '.gpx' });
    await clickBy(By.id('se-local-track-' + PLAIN_TRACK));
    await waitBy(By.id('se-panel-button-undo'), { idle: true });
    await validateInfoBlockStrings([`Points: ${PLAIN_TRACK_POINTS}`]);
    await setMapCenter(50.0191, 19.8397);
    const recordedDistance = await getDistance();

    // a Line point extends the recorded line
    await leftClickBy(50.0132, 19.8493);
    await validateInfoBlockStrings([`Points: ${EXTENDED_TRACK_POINTS}`]);
    await validateLine(EXTENDED_TRACK_POINTS);
    await enclose(async () => (await getDistance()) > recordedDistance, { tag: 'distance after a Line point' });
    const lineDistance = await getDistance();

    await clickBy(By.id('se-panel-button-change-profile'));
    await clickBy(By.id('se-track-profile-select'));
    await clickBy(By.id('se-track-profile-car'));
    await clickBy(By.id('se-change-profile-dialog-change'));
    await waitByRemoved(By.id('se-change-profile-dialog'));

    // a router point on a recorded track asks first, Cancel keeps the track
    await leftClickBy(50.025, 19.83);
    await clickBy(By.id('se-add-routing-dialog-cancel'));
    await waitByRemoved(By.id('se-add-routing-dialog'));
    await validateInfoBlockStrings([`Points: ${EXTENDED_TRACK_POINTS}`]);

    // Continue puts the recorded points into one segment and routes the new one
    const routedLines = (await getTrackLines()).filter((line) => line.size > 2).length;
    await leftClickBy(50.025, 19.83);
    await clickBy(By.id('se-add-routing-dialog-continue'));
    await waitByRemoved(By.id('se-add-routing-dialog'));
    await validateInfoBlockStrings([/Points: 3\b/]);
    await validateRoutedLines(routedLines + 1);
    await validateLine(EXTENDED_TRACK_POINTS);
    await enclose(async () => (await getDistance()) > lineDistance, { tag: 'distance after the routed segment' });
}

async function saveLocalToCloud({ name = null, overwrite = false } = {}) {
    // disabled while a segment is being routed
    await clickBy(By.css('#se-local-track-actions-save-to-cloud:not([disabled])'));
    if (name) {
        const input = await waitBy(By.id('se-save-track-name'));
        await driver.actions().click(input).click(input).click(input).perform();
        await input.sendKeys(name);
    }
    if (!overwrite) {
        await clickBy(By.id('se-submit-save-to-cloud'));
    }
    await waitBy(By.id('se-track-actions-edit'));
    // saving to cloud reopens the track and refreshes the list
    await actionIdleWait();
}

async function validateInfoBlockStrings(strings) {
    for await (const match of strings) {
        await matchTextBy(By.id('se-track-context-menu'), match);
    }
}

async function validateRoutedLines(count) {
    await enclose(
        async () => {
            const lines = await getTrackLines();
            return !lines.some((line) => line.dashed) && lines.filter((line) => line.size > 2).length === count;
        },
        { tag: 'routed segments' }
    );
}

async function validateLine(size) {
    await enclose(async () => (await getTrackLines()).some((line) => line.size === size), { tag: `line of ${size}` });
}

async function getTrackLines() {
    return await driver.executeScript(`
        return Object.values(window.__leafletMap._layers)
            .filter((layer) => typeof layer.getLatLngs === 'function' && layer.options.type === 'localTracksLayers')
            .map((layer) => ({ size: layer.getLatLngs().flat(Infinity).length, dashed: !!layer.options.dashArray }));
    `);
}

async function getDistance() {
    const text = await getTextBy(By.id('se-track-context-menu'));

    return parseFloat(text.match(/Distance: ([\d.]+) km/)?.[1]);
}
