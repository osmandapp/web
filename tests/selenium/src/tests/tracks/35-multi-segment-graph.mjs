import { By } from 'selenium-webdriver';
import { clickBy, enclose, matchInnerTextBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { driver } from '../../options.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionAddOneTrack from '../../actions/tracks/actionAddOneTrack.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { deleteTrack } from '../../util.mjs';

const TRACK_NAME = 'test-track-two-segments';
const POINTS = 20;
const SEGMENT_END = 9;
const SLOPE_TOLERANCE = 0.05;
const graphCheckbox = (key) => By.id(`se-graph-${key}`);

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-menu-tracks'));
    await actionAddOneTrack(TRACK_NAME);
    await clickBy(By.id(`se-cloud-track-${TRACK_NAME}`));
    await waitBy(By.id('se-track-context-menu'));
    await actionIdleWait({ idle: 3000 });
    await waitByRemoved(By.id('se-loadingSrtm'));

    await matchInnerTextBy(By.id('se-track-context-menu'), `Points: ${POINTS}`);
    await matchInnerTextBy(By.id('se-track-context-menu'), '201 / 216 / 248 m');
    await waitBy(By.id('se-main-graph'));

    await enclose(validateGraph, { tag: 'validateGraph' });

    await clickBy(graphCheckbox('Elevation'));
    await clickBy(graphCheckbox('Slope'));
    await clickBy(By.id('se-link-srtm'));
    await waitByRemoved(By.id('se-loadingSrtm'));
    await waitBy(graphCheckbox('ElevationSRTM'));
    await actionIdleWait({ idle: 3000 });
    await enclose(() => checkboxesAre({ Elevation: false, Slope: true }), { tag: 'checkboxes kept after recalculate' });

    await clickBy(By.id('se-button-back'));
    await deleteTrack(TRACK_NAME);

    await actionFinish();
}

async function validateGraph() {
    const points = await driver.executeScript(`
        const graph = window.seGraphData;
        return graph?.profile.map((p, i) => ({ dist: p.distance, ele: p.elevation, slope: graph.slopes?.pointSlopes[i] ?? null })) ?? null;
    `);
    if (points?.length !== POINTS) {
        return false;
    }
    const ele = points.map((p) => p.ele);
    const slope = points.map((p) => p.slope);
    const gapIsEmpty = ele[SEGMENT_END] === null && ele[SEGMENT_END + 1] === null;
    const neighboursHaveEle = ele[SEGMENT_END - 1] !== null && ele[SEGMENT_END + 2] !== null;
    const distanceGrows = points.every((p, i) => i === 0 || p.dist >= points[i - 1].dist);
    const slopeIsFlatAtGap = Math.abs(slope[SEGMENT_END] - slope[SEGMENT_END + 2]) <= SLOPE_TOLERANCE;

    return gapIsEmpty && neighboursHaveEle && distanceGrows && slopeIsFlatAtGap;
}

async function checkboxesAre(expected) {
    for (const [key, checked] of Object.entries(expected)) {
        const input = await waitBy(graphCheckbox(key));
        if ((await input.isSelected()) !== checked) {
            return false;
        }
    }

    return true;
}
