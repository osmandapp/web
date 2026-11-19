import { By } from 'selenium-webdriver';
import {
    dragBy,
    getHeapMb,
    getRoutePointCount,
    leftClickBy,
    matchPointsCount,
    measureFps,
    measureInPage,
    measureLongTasks,
    pointsCountJs,
    setMapCenter,
    ROUTE_POINT_COUNT_JS,
    SETTLE_MS,
    waitBy,
} from '../lib.mjs';
import { driver } from '../options.mjs';
import { uploadGeneratedTrack } from '../util.mjs';
import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import actionIdleWait from '../actions/actionIdleWait.mjs';
import actionOpenPointMenu from '../actions/tracks/actionOpenPointMenu.mjs';
import { COUNT, FPS, generatedVertex, MB, MS, record } from '../../../bench.mjs';

const TRACK = 'bench-plain-50k';
const POINTS = 50000;
const EDITS = 50;
const DRAG_MS = 2000;

// multiples of 30: only they have markers while a track of more than 1000 points is shown below zoom 17
const DELETED = 24990;
const DRAGGED = 24960;

// two columns far from the track, going north: a click never lands on a line drawn before it
const newPoint = (k) => [50.6 + k * 0.08, k % 2 ? 31.5 : 28.5];

// about 4 min: most of it is the 50 edits, each click waits for the map to settle first
export default async function test() {
    await actionOpenMap();
    await uploadGeneratedTrack(TRACK, POINTS);

    const item = await waitBy(By.id('se-local-track-' + TRACK));
    const open = await measureInPage(() => item.click(), `${pointsCountJs(POINTS)} && ${ROUTE_POINT_COUNT_JS} > 0`);
    record('17.1 open plain 50k', open, MS);
    await actionIdleWait({ tiles: true });
    record('17.1 point markers of plain 50k', await getRoutePointCount(), COUNT);
    record('17.3 heap with plain 50k open', await getHeapMb(), MB);

    // drags first, at zoom 17: a later line breaks the drag (8.1), below 17 the press takes the line marker
    const view = await driver.executeScript(
        'const map = window.__leafletMap; return [map.getCenter().lat, map.getCenter().lng, map.getZoom()];'
    );
    const dragged = generatedVertex(DRAGGED);
    const target = [dragged[0], dragged[1] + 0.0007];
    await setMapCenter(...dragged, 17);
    const drag = await measureLongTasks(() => dragBy(dragged, target));
    record('17.2 long tasks of a drag on plain 50k with its analysis', drag, MS);
    await actionIdleWait({ tiles: true });

    const fps = await measureFps(() => dragBy(target, dragged, { duration: DRAG_MS }));
    record('17.9 frames while dragging a point of plain 50k', fps, FPS);
    await actionIdleWait({ tiles: true });
    await matchPointsCount(POINTS);

    await actionOpenPointMenu(generatedVertex(DELETED));
    const deleteItem = await waitBy(By.id('se-point-context-menu-delete'));
    record(
        '17.2 delete a point of plain 50k on the map',
        await measureInPage(() => deleteItem.click(), pointsCountJs(POINTS - 1)),
        MS
    );
    await setMapCenter(...view);

    const edit = await measureLongTasks(async () => {
        const add = await measureInPage(() => leftClickBy(...newPoint(0)), pointsCountJs(POINTS));
        record('17.2 add a point to plain 50k', add, MS);
    });
    record('17.7 long tasks of an edit of 50k with its analysis', edit, MS);

    const heapBeforeEdits = await getHeapMb();
    for (let k = 1; k <= EDITS; k++) {
        await leftClickBy(...newPoint(k));
        await matchPointsCount(POINTS + k);
    }
    await actionIdleWait({ idle: SETTLE_MS });
    record(`17.3 heap growth after ${EDITS} edits of 50k`, (await getHeapMb()) - heapBeforeEdits, MB);

    const undo = await waitBy(By.id('se-panel-button-undo'));
    record('17.3 undo on 50k', await measureInPage(() => undo.click(), pointsCountJs(POINTS + EDITS - 1)), MS);

    await actionFinish();
}
