import { By } from 'selenium-webdriver';
import { assert, clickBy, countRequests, enclose, getRequestCount, getTextBy, waitBy } from '../../lib.mjs';
import { driver } from '../../options.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenLocalTrack from '../../actions/tracks/actionOpenLocalTrack.mjs';

const TRACK = 'test-track-trkpt';
const ANALYSIS_URL = '/gpx/get-analysis';
// an analysis asked on opening is sent a second later
const LATE_REQUEST_IDLE = 3000;

const movingTime = async () => (await getTextBy(By.id('se-track-context-menu'))).match(/Time moving: (\S+)/)?.[1];

// a recorded local track opened after a page reload keeps its saved analysis and asks for no new one
export default async function test() {
    await actionOpenMap();
    await actionOpenLocalTrack(TRACK);
    const imported = await enclose(movingTime, { tag: 'time moving of the imported track' });

    await driver.navigate().refresh();
    await countRequests(ANALYSIS_URL);
    await actionIdleWait();
    await clickBy(By.id('se-local-track-' + TRACK));
    await waitBy(By.id('se-panel-button-undo'), { idle: true });
    await actionIdleWait({ idle: LATE_REQUEST_IDLE });

    const requests = await getRequestCount();
    await assert(requests === 0, `no analysis after the reload, got ${requests}`);
    await assert((await movingTime()) === imported, `time moving ${imported} is kept`);

    await actionFinish();
}
