import { driver } from '../../options.mjs';
import { enclose, getMarkersNear, hoverBy, matchPointsCount, setMapCenter, waitRoutedLines } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionCreateRoute, { ROUTE_POINTS } from '../../actions/tracks/actionCreateRoute.mjs';
import actionDeletePoint from '../../actions/tracks/actionDeletePoint.mjs';

export default async function test() {
    await actionOpenMap('#15/50.4946/30.5220');
    await actionCreateRoute(ROUTE_POINTS);

    // a line drawn after a click offers a new point under the cursor
    await validateNewPointOnLine();

    await actionDeletePoint(ROUTE_POINTS[1]);
    await matchPointsCount(2);
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
