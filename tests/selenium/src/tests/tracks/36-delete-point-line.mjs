import { By } from 'selenium-webdriver';
import { driver } from '../../options.mjs';
import {
    clickBy,
    enclose,
    getMarkersNear,
    hoverBy,
    matchTextBy,
    rightClickBy,
    setMapCenter,
    waitRoutedLines,
} from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionCreateRoute from '../../actions/tracks/actionCreateRoute.mjs';
import ignoreTest from '../../actions/actionIgnoreTest.mjs';

const POINTS = [
    [50.492409, 30.525041],
    [50.496149, 30.514956],
    [50.501308, 30.514183],
];

export default async function test() {
    ignoreTest();

    await actionOpenMap('#15/50.4946/30.5220');
    await actionCreateRoute(POINTS);

    // a line drawn after a click offers a new point under the cursor
    await validateNewPointOnLine();

    await rightClickBy(...POINTS[1]);
    await clickBy(By.id('se-point-context-menu-delete'));
    await matchTextBy(By.id('se-track-context-menu'), /Points: 2\b/);
    await waitRoutedLines(1);

    // so does the line left by a deleted point
    await validateNewPointOnLine();

    await actionFinish();
}

async function validateNewPointOnLine() {
    const { lat, lng } = await driver.executeScript(`
        const line = Object.values(window.__leafletMap._layers).find(
            (layer) => typeof layer.getLatLngs === 'function' && layer.options.type === 'localTracksLayers' && layer.getLatLngs().length > 2
        );
        const latlngs = line.getLatLngs();
        return latlngs[Math.floor(latlngs.length / 2)];
    `);
    await setMapCenter(lat, lng);
    await hoverBy(lat, lng);
    await enclose(
        async () => (await getMarkersNear(lat, lng)).some((marker) => marker.title === 'poly' && marker.visible),
        { tag: 'new point on the line' }
    );
}
