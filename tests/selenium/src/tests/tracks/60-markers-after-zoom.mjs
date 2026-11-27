import { enclose, hasRoutePointNear, matchPointsCount, setMapCenter } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenLocalTrack from '../../actions/tracks/actionOpenLocalTrack.mjs';

const TRACK = 'test-track-trkpt';
const TRACK_POINTS = 1460;
const POINT = [50.0173748, 19.8009837];

export default async function test() {
    await actionOpenMap('#14/50.0191/19.8397');
    await actionOpenLocalTrack(TRACK);
    await matchPointsCount(TRACK_POINTS);

    await setMapCenter(...POINT, 17);

    // at zoom 17 every point in view has its draggable marker
    await enclose(() => hasRoutePointNear(...POINT), { tag: 'draggable marker of the point' });

    await actionFinish();
}
