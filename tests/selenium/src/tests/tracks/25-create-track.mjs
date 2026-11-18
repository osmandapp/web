import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import {
    clickBy,
    dragBy,
    enclose,
    getMarkersNear,
    getOpenTrackName,
    getTextBy,
    getTrackLines,
    hoverBy,
    leftClickBy,
    matchTextBy,
    pointsCount,
    setMapCenter,
    validateEnabled,
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

const BICYCLE_COLOR = '#9053bd';

const INSERTED_POINT = [50.4925, 30.515];
const MOVED_POINT = [50.4925, 30.512];
const MOVED_FIRST_POINT = [50.4895, 30.517];
const AWAY_FROM_ROUTE = [50.4925, 30.505];
const LAST_POINT = [50.4965, 30.515];

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
    await editSegments();
    await dragPoints();
    await undoRedo();
    await closeTrack();
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
    await validateEnabled('se-panel-button-undo', false);
    await validateEnabled('se-panel-button-redo', false);
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

// Split, Join, Profile and Trim from the point menu on the square route drawn again
async function editSegments() {
    const [first, second, third, fourth] = SQUARE_ROUTE_POINTS;
    await leftClickBy(...first);
    await addSquarePoints();
    const routedLines = await waitRoutedLines();

    // Split after a point leaves no line to the next one, Join after routes it again
    await actionOpenPointMenu(second);
    await clickBy(By.id('se-point-context-menu-split-after'));
    await waitRoutedLines(routedLines - 1);
    await actionOpenPointMenu(second);
    await clickBy(By.id('se-point-context-menu-join-after'));
    await waitRoutedLines(routedLines);
    await validateRouteDirection(second, third);

    // Profile after routes the next segment again in the color of the new profile
    const color = await getRouteColor(third, fourth);
    await actionOpenPointMenu(third);
    await clickBy(By.id('se-point-context-menu-profile-after'));
    await selectProfile('bicycle');
    await closeProfileDialog('change');
    await enclose(async () => color !== BICYCLE_COLOR && (await getRouteColor(third, fourth)) === BICYCLE_COLOR, {
        tag: 'color of the new profile',
    });

    // Cancel gives the track its profile back
    await clickBy(By.id('se-panel-button-change-profile'));
    const profile = await getTextBy(By.id('se-track-profile-select'));
    await selectProfile('pedestrian');
    await closeProfileDialog('cancel');
    await clickBy(By.id('se-panel-button-change-profile'));
    await enclose(async () => (await getTextBy(By.id('se-track-profile-select'))) === profile, {
        tag: 'profile after Cancel',
    });
    await closeProfileDialog('cancel');

    // Trim after a point removes the points after it, Trim before removes the points before it
    await actionOpenPointMenu(third);
    await clickBy(By.id('se-point-context-menu-trim-after'));
    await validateInfoBlockStrings([pointsCount(SQUARE_ROUTE_POINTS.length - 1)]);
    await validateRoutePoint(...fourth, false);
    await waitRoutedLines(routedLines - 1);

    await actionOpenPointMenu(second);
    await clickBy(By.id('se-point-context-menu-trim-before'));
    await validateInfoBlockStrings([pointsCount(SQUARE_ROUTE_POINTS.length - 2)]);
    await validateRoutePoint(...first, false);
    await waitRoutedLines(routedLines - 2);
    await validateRouteDirection(second, third);
}

// a point dropped from the line goes into the route, a dragged point is routed in its new place
async function dragPoints() {
    const [, second, third] = SQUARE_ROUTE_POINTS;
    const routedLines = await waitRoutedLines();
    const middle = await getRouteMiddle(second, third);

    // hovering the line shows a marker to drag a new point from, leaving the line hides it
    await hoverBy(middle.lat, middle.lng);
    await validateLineMarker(middle, true);
    await hoverBy(...AWAY_FROM_ROUTE);
    await validateLineMarker(middle, false);

    await dragBy([middle.lat, middle.lng], INSERTED_POINT);
    await validateInfoBlockStrings([pointsCount(SQUARE_ROUTE_POINTS.length - 1)]);
    await validateRoutePoint(...INSERTED_POINT, true);
    await waitRoutedLines(routedLines + 1);
    await validateRouteDirection(second, INSERTED_POINT);
    await validateRouteDirection(INSERTED_POINT, third);

    await dragBy(INSERTED_POINT, MOVED_POINT);
    await validateRoutePoint(...INSERTED_POINT, false);
    await validateRoutePoint(...MOVED_POINT, true);
    await waitRoutedLines(routedLines + 1);
    await validateRouteDirection(second, MOVED_POINT);
    await validateRouteDirection(MOVED_POINT, third);

    // the first point has one segment to route
    await dragBy(second, MOVED_FIRST_POINT);
    await validateRoutePoint(...MOVED_FIRST_POINT, true);
    await waitRoutedLines(routedLines + 1);
    await validateRouteDirection(MOVED_FIRST_POINT, MOVED_POINT);
    await validateInfoBlockStrings([pointsCount(SQUARE_ROUTE_POINTS.length - 1)]);

    // a routed track shows its turns
    await waitBy(By.css("[testid='se-tab-turns']"));
}

// Undo takes back the last drag with its route, Redo brings it again, a new point drops the steps to redo
async function undoRedo() {
    const [, second] = SQUARE_ROUTE_POINTS;

    await clickBy(By.id('se-panel-button-undo'));
    await validateRoutePoint(...MOVED_FIRST_POINT, false);
    await validateRoutePoint(...second, true);
    await validateRouteDirection(second, MOVED_POINT);
    await validateEnabled('se-panel-button-redo', true);

    await clickBy(By.id('se-panel-button-redo'));
    await validateRoutePoint(...MOVED_FIRST_POINT, true);
    await validateRouteDirection(MOVED_FIRST_POINT, MOVED_POINT);

    await clickBy(By.id('se-panel-button-undo'));
    await validateRoutePoint(...second, true);
    await leftClickBy(...LAST_POINT);
    await validateInfoBlockStrings([pointsCount(SQUARE_ROUTE_POINTS.length)]);
    await validateEnabled('se-panel-button-redo', false);
}

// Back closes the editor and takes the track off the map, the track keeps its points
async function closeTrack() {
    const name = await getOpenTrackName();

    await clickBy(By.id('se-button-back'));
    await waitByRemoved(By.id('se-panel-button-undo'));
    await enclose(async () => (await getTrackLines()).length === 0, { tag: 'no lines of the closed track' });

    await clickBy(By.id('se-local-track-' + name));
    await validateInfoBlockStrings([pointsCount(SQUARE_ROUTE_POINTS.length)]);
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
    await selectProfile('car');
    await closeProfileDialog('change');

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

    // Back leaves the track opened from the list on the map, its switch takes it off, the points are kept
    await clickBy(By.id('se-button-back'));
    await waitByRemoved(By.id('se-panel-button-undo'));
    await clickBy(By.css(`[id="se-local-track-${PLAIN_TRACK}"] .MuiSwitch-root`));
    await enclose(async () => (await getTrackLines()).length === 0, { tag: 'no lines of the track switched off' });
    await clickBy(By.id('se-local-track-' + PLAIN_TRACK));
    await validateInfoBlockStrings([pointsCount(3)]);
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

async function selectProfile(profile) {
    await clickBy(By.id('se-track-profile-select'));
    await clickBy(By.id(`se-track-profile-${profile}`));
}

async function closeProfileDialog(button) {
    await clickBy(By.id(`se-change-profile-dialog-${button}`));
    await waitByRemoved(By.id('se-change-profile-dialog'));
}

async function getRouteMiddle(from, to) {
    let middle;
    await enclose(
        async () => {
            middle = (await getRoutedLine(from, to))?.middle;
            return middle;
        },
        { tag: `route from ${from} to ${to}` }
    );

    return middle;
}

async function validateLineMarker({ lat, lng }, visible) {
    await enclose(
        async () =>
            (await getMarkersNear(lat, lng)).some((marker) => marker.title === 'poly' && marker.visible === visible),
        { tag: `line marker ${visible ? 'shown' : 'hidden'}` }
    );
}

async function getRouteColor(from, to) {
    return (await getRoutedLine(from, to))?.color;
}

async function getRoutedLine(from, to) {
    const isNear = (point, [lat, lng]) => Math.abs(point.lat - lat) < 0.002 && Math.abs(point.lng - lng) < 0.002;
    const lines = await getTrackLines();

    return lines.find((line) => !line.dashed && line.size > 2 && isNear(line.start, from) && isNear(line.end, to));
}

async function validateRouteDirection(from, to) {
    await enclose(() => getRoutedLine(from, to), { tag: `route from ${from} to ${to}` });
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
