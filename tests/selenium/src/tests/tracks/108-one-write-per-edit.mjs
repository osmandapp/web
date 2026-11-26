import { assert, dragBy } from '../../lib.mjs';
import { driver } from '../../options.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionDeletePoint from '../../actions/tracks/actionDeletePoint.mjs';
import actionCreateRoute, { SQUARE_ROUTE_POINTS } from '../../actions/tracks/actionCreateRoute.mjs';

const ANALYSIS_URL = '/gpx/get-analysis';
const ROUTER_URL = '/routing/update-route-between-points';
const TRACKS_STORE = 'local_tracks';
const MOVED_POINT = [50.491, 30.525];
// an analysis is sent a second after the last change
const ANALYSIS_IDLE = 3000;

// an edit is written to the browser once its analysis is answered or failed, an edit that waits for the router at once
export default async function test() {
    await actionOpenMap('#15/50.4925/30.5150');
    await actionCreateRoute(SQUARE_ROUTE_POINTS);
    await actionIdleWait({ idle: ANALYSIS_IDLE });

    await countTrackWrites();
    await actionDeletePoint(SQUARE_ROUTE_POINTS[3]);
    await actionIdleWait({ idle: ANALYSIS_IDLE });
    const writes = await getTrackWrites();
    await assert(writes === 1, `an edit is written after its analysis, got ${writes}`);

    await stubRequests(ANALYSIS_URL, 'Promise.resolve(new Response("", { status: 502 }))');
    await countTrackWrites();
    await actionDeletePoint(SQUARE_ROUTE_POINTS[2]);
    await actionIdleWait({ idle: ANALYSIS_IDLE });
    const failedWrites = await getTrackWrites();
    await assert(failedWrites === 1, `an edit with a failed analysis is still written, got ${failedWrites}`);

    await stubRequests(ROUTER_URL, 'new Promise(() => {})');
    await countTrackWrites();
    await dragBy(SQUARE_ROUTE_POINTS[1], MOVED_POINT);
    await actionIdleWait({ idle: ANALYSIS_IDLE });
    const waitingWrites = await getTrackWrites();
    await assert(waitingWrites === 1, `an edit that waits for the router is written at once, got ${waitingWrites}`);

    await actionFinish();
}

async function countTrackWrites() {
    await driver.executeScript(`
        window.seTrackWrites = 0;
        if (!window.seCountsTrackWrites) {
            window.seCountsTrackWrites = true;
            const put = IDBObjectStore.prototype.put;
            IDBObjectStore.prototype.put = function () {
                this.name === '${TRACKS_STORE}' && window.seTrackWrites++;
                return put.apply(this, arguments);
            };
        }
    `);
}

async function getTrackWrites() {
    return await driver.executeScript('return window.seTrackWrites');
}

async function stubRequests(endpoint, answer) {
    await driver.executeScript(`
        const fetch = window.fetch;
        window.fetch = function (url) {
            return String(url).includes('${endpoint}') ? ${answer} : fetch.apply(this, arguments);
        };
    `);
}
