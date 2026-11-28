import {
    enclose,
    getMapHash,
    getTrackLines,
    leftClickBy,
    matchPointsCount,
    waitRoutedLines,
    zoomMap,
} from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionCreateRoute, { SQUARE_ROUTE_POINTS } from '../../actions/tracks/actionCreateRoute.mjs';

const ZOOM = 13;

export default async function test() {
    await actionOpenMap('#15/50.4925/30.5150');
    const [first, second, third, fourth] = SQUARE_ROUTE_POINTS;
    const routedLines = await actionCreateRoute([first, second, third]);
    await leftClickBy(...fourth);
    await matchPointsCount(4);
    await waitRoutedLines(routedLines + 1);

    await zoomMap('out');
    await zoomMap('out');

    // after a zoom change all routed lines of the track have one weight
    await enclose(
        async () => {
            const zoomed = (await getMapHash()).startsWith(`${ZOOM}/`);
            const weights = (await getTrackLines()).filter((line) => line.size > 2).map((line) => line.weight);

            return zoomed && weights.length > 0 && weights.every((weight) => weight === weights[0]);
        },
        { tag: `one weight of routed lines at zoom ${ZOOM}` }
    );

    await actionFinish();
}
