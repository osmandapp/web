import { By } from 'selenium-webdriver';
import { measureInPage, pointsCountJs, ROUTE_POINT_COUNT_JS, waitBy } from '../lib.mjs';
import { uploadGeneratedTrack } from '../util.mjs';
import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { MS, record } from '../../../bench.mjs';

const TRACK = 'bench-route-200';
const ROUTE_POINTS = 200;
const VERTICES = 100000;
const STEP = 0.00005;

export default async function test() {
    await actionOpenMap();
    const routeIndexes = Array.from({ length: ROUTE_POINTS }, (_, k) =>
        Math.round((k * (VERTICES - 1)) / (ROUTE_POINTS - 1))
    );
    await uploadGeneratedTrack(TRACK, VERTICES, { step: STEP, routeIndexes });

    const item = await waitBy(By.id('se-local-track-' + TRACK));
    const open = await measureInPage(
        () => item.click(),
        `${pointsCountJs(ROUTE_POINTS)} && ${ROUTE_POINT_COUNT_JS} > 0`
    );
    record('17.4 open a route of 200 points, 100k vertices', open, MS);

    await actionFinish();
}
