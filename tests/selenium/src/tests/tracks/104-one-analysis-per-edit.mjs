import { assert, dragBy, waitRoutedLines } from '../../lib.mjs';
import { driver } from '../../options.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionCreateRoute, { ROUTE_POINTS } from '../../actions/tracks/actionCreateRoute.mjs';

const ANALYSIS_URL = '/gpx/get-analysis';
const MOVED_POINT = [50.499, 30.52];
// a late analysis request came 4 s after the router answer
const LATE_REQUEST_IDLE = 5000;

// a drag of a routed point asks for one analysis, sent with the routed segments
export default async function test() {
    await actionOpenMap('#15/50.4946/30.5220');
    const routed = await actionCreateRoute(ROUTE_POINTS);
    await actionIdleWait({ idle: LATE_REQUEST_IDLE });

    await driver.executeScript(`
        window.seAnalysisBodies = [];
        const fetch = window.fetch;
        window.fetch = function (url, options) {
            if (String(url).includes('${ANALYSIS_URL}')) {
                const stream = options.body.stream().pipeThrough(new DecompressionStream('gzip'));
                window.seAnalysisBodies.push(new Response(stream).json());
            }
            return fetch.apply(this, arguments);
        };
    `);
    await dragBy(ROUTE_POINTS.at(-1), MOVED_POINT);
    await waitRoutedLines(routed);
    await actionIdleWait({ idle: LATE_REQUEST_IDLE });

    const requestsWithRoutes = await driver.executeScript(`
        return Promise.all(window.seAnalysisBodies).then((bodies) =>
            bodies.map((body) => body.tracks[0].points.slice(1).every((point) => point.geometry?.length > 0))
        );
    `);
    await assert(requestsWithRoutes.length === 1, `one analysis after the drag, got ${requestsWithRoutes.length}`);
    await assert(requestsWithRoutes[0], 'the analysis is sent with the routed segments');

    await actionFinish();
}
