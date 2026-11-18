import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import {
    clickBy,
    enclose,
    getMarkersNear,
    getTextBy,
    getTrackLines,
    leftClickBy,
    matchTextBy,
    pointsCount,
    setMapCenter,
    waitBy,
    waitByRemoved,
    waitNoPointsCount,
    waitRoutedLines,
} from '../../lib.mjs';
import { By, Key } from 'selenium-webdriver';
import { driver } from '../../options.mjs';

import { deleteTrack } from '../../util.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionDeleteTracksByPattern from '../../actions/tracks/actionDeleteTracksByPattern.mjs';
import actionUploadGpx from '../../actions/actionUploadGpx.mjs';
import actionCreateRoute, { ROUTE_POINTS, SQUARE_ROUTE_POINTS } from '../../actions/tracks/actionCreateRoute.mjs';
import actionDeletePoint from '../../actions/tracks/actionDeletePoint.mjs';
import actionOpenPointMenu from '../../actions/tracks/actionOpenPointMenu.mjs';

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
    await actionCreateRoute(ROUTE_POINTS);
    await validateInfoBlockStrings(strings3);

    // a click on the map while the menu of a point is open adds no point
    await actionOpenPointMenu(ROUTE_POINTS[1]);
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
    await addSquarePoints();
    await deletePoints();
    await dragFirstPoint();
    await deleteAllPoints();
    await addPointsToPlainTrack();

    await actionFinish();
}

// a track created by the button gets its first point by a click
async function createEmptyTrack() {
    await clickBy(By.id('se-create-new-route'));
    for (const id of EDITOR_PANEL_BUTTONS) {
        await waitBy(By.id(id));
    }
    const [lat, lng] = SQUARE_ROUTE_POINTS[0];
    await setMapCenter(lat, lng);
    await leftClickBy(lat, lng);
    await validateInfoBlockStrings([pointsCount(1)]);
}

async function addSquarePoints() {
    for (const [lat, lng] of SQUARE_ROUTE_POINTS.slice(1)) {
        await leftClickBy(lat, lng);
    }
    await validateInfoBlockStrings([pointsCount(SQUARE_ROUTE_POINTS.length)]);
}

async function deletePoints() {
    const routedLines = await waitRoutedLines();

    // a middle point deleted from its menu is gone, its neighbours are routed anew
    const [middleLat, middleLng] = SQUARE_ROUTE_POINTS[1];
    await validateRoutePoint(middleLat, middleLng, true);
    await actionDeletePoint(SQUARE_ROUTE_POINTS[1]);
    await validateInfoBlockStrings([pointsCount(SQUARE_ROUTE_POINTS.length - 1)]);
    await validateRoutePoint(middleLat, middleLng, false);
    await waitRoutedLines(routedLines - 1);

    // the delete button of a row in the Track tab deletes the point of that row
    const [firstLat, firstLng] = SQUARE_ROUTE_POINTS[0];
    await validateRoutePoint(firstLat, firstLng, true);
    await clickBy(By.css("[testid='se-tab-track']"));
    await clickBy(By.id('se-track-point-delete-0'));
    await clickBy(By.css("[testid='se-tab-overview']"));
    await validateInfoBlockStrings([pointsCount(SQUARE_ROUTE_POINTS.length - 2)]);
    await validateRoutePoint(firstLat, firstLng, false);
    await waitRoutedLines(routedLines - 2);
}

// the first row dragged one place down in the Track tab takes its point there, the track is routed in the new order
async function dragFirstPoint() {
    const [first, second] = SQUARE_ROUTE_POINTS.slice(2);
    await validateRouteDirection(first, second);
    await clickBy(By.css("[testid='se-tab-track']"));
    await actionIdleWait();

    const row = await waitBy(By.id('se-track-point-0'));
    await driver.executeScript('arguments[0].focus()', row);
    await driver.actions().sendKeys(Key.SPACE).sendKeys(Key.ARROW_DOWN).sendKeys(Key.SPACE).perform();

    await validateRouteDirection(second, first);
    await clickBy(By.css("[testid='se-tab-overview']"));
    await validateInfoBlockStrings([pointsCount(SQUARE_ROUTE_POINTS.length - 2)]);
}

// a track left without points keeps nothing on the map and shows no point count
async function deleteAllPoints() {
    const routedLines = await waitRoutedLines();
    await clickBy(By.css("[testid='se-tab-track']"));
    for (const [lat, lng] of [SQUARE_ROUTE_POINTS[3], SQUARE_ROUTE_POINTS[2]]) {
        await clickBy(By.id('se-track-point-delete-0'));
        await validateRoutePoint(lat, lng, false);
    }
    await clickBy(By.css("[testid='se-tab-overview']"));
    await waitNoPointsCount();
    await waitRoutedLines(routedLines - 1);
}

async function addPointsToPlainTrack() {
    await actionUploadGpx({ mask: PLAIN_TRACK + '.gpx' });
    await clickBy(By.id('se-local-track-' + PLAIN_TRACK));
    await waitBy(By.id('se-panel-button-undo'), { idle: true });
    await validateInfoBlockStrings([pointsCount(PLAIN_TRACK_POINTS)]);
    await setMapCenter(50.0191, 19.8397);
    const recordedDistance = await getDistance();

    // a Line point extends the recorded line
    await leftClickBy(50.0132, 19.8493);
    await validateInfoBlockStrings([pointsCount(EXTENDED_TRACK_POINTS)]);
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
    await validateInfoBlockStrings([pointsCount(EXTENDED_TRACK_POINTS)]);

    // Continue puts the recorded points into one segment and routes the new one
    const routedLines = await waitRoutedLines();
    await leftClickBy(50.025, 19.83);
    await clickBy(By.id('se-add-routing-dialog-continue'));
    await waitByRemoved(By.id('se-add-routing-dialog'));
    await validateInfoBlockStrings([pointsCount(3)]);
    await waitRoutedLines(routedLines + 1);
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

async function validateLine(size) {
    await enclose(async () => (await getTrackLines()).some((line) => line.size === size), { tag: `line of ${size}` });
}

async function validateRouteDirection(from, to) {
    const isNear = (point, [lat, lng]) => Math.abs(point.lat - lat) < 0.002 && Math.abs(point.lng - lng) < 0.002;
    await enclose(
        async () =>
            (await getTrackLines()).some(
                (line) => !line.dashed && line.size > 2 && isNear(line.start, from) && isNear(line.end, to)
            ),
        { tag: `route from ${from} to ${to}` }
    );
}

async function validateRoutePoint(lat, lng, present) {
    const isOnMap = async () =>
        (await getMarkersNear(lat, lng)).some(
            (marker) => marker.type === 'localTracksLayers' && marker.draggable && marker.title !== 'poly'
        );
    await enclose(async () => (await isOnMap()) === present, { tag: `route point ${lat}, ${lng}` });
}

async function getDistance() {
    const text = await getTextBy(By.id('se-track-context-menu'));

    return parseFloat(text.match(/Distance: ([\d.]+) km/)?.[1]);
}
