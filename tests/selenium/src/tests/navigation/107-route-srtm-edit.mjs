import { By } from 'selenium-webdriver';
import { assert, clickBy, countRequests, getRequestCount, matchInnerTextBy } from '../../lib.mjs';
import { driver } from '../../options.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionBuildRoute from '../../actions/navigation/actionBuildRoute.mjs';
import actionOpenRouteInfoBlock from '../../actions/navigation/actionOpenRouteInfoBlock.mjs';
import actionEditRoute from '../../actions/navigation/actionEditRoute.mjs';
import actionSaveLocalToCloud from '../../actions/tracks/actionSaveLocalToCloud.mjs';
import { cleanupCloud } from '../../util.mjs';

const TRACK = 'se-test-route-srtm-edit';
const START = '50.45010, 30.52340';
const FINISH = '50.45466, 30.51660';

const ROUTE_URL = '/routing/route';
const SRTM_URL = '/gpx/get-srtm-data';

// a route without heights takes them from srtm, Edit keeps them, so the track saved from the editor asks no srtm again
export default async function test() {
    try {
        await actionOpenMap();
        await actionLogIn();
        await dropRouteElevation();
        await countRequests(SRTM_URL);

        await clickBy(By.id('se-show-menu-navigation'));
        await actionBuildRoute({ start: START, finish: FINISH });
        await actionOpenRouteInfoBlock();
        await matchInnerTextBy(By.id('se-track-context-menu'), 'Elevation (min/avg/max)');
        const routeRequests = await getRequestCount();
        await assert(routeRequests === 1, `the route without heights takes them from srtm, got ${routeRequests}`);

        await actionEditRoute();
        await actionSaveLocalToCloud({ name: TRACK });
        const savedRequests = await getRequestCount();
        await assert(savedRequests === 1, `the saved track keeps the heights of srtm, got ${savedRequests}`);

        await actionFinish();
    } finally {
        await cleanupCloud({ tracks: [TRACK] });
    }
}

async function dropRouteElevation() {
    await driver.executeScript(`
        const fetch = window.fetch;
        window.fetch = async function (url) {
            const response = await fetch.apply(this, arguments);
            if (!response.ok || !String(url).includes('${ROUTE_URL}')) {
                return response;
            }
            const route = JSON.parse((await response.text()).replace(/\\bNaN\\b/g, 'null'));
            route.features.forEach(
                (feature) => feature.geometry?.type === 'LineString' && feature.geometry.coordinates.forEach((c) => c.splice(2))
            );
            return new Response(JSON.stringify(route), { headers: { 'Content-Type': 'application/json' } });
        };
    `);
}
