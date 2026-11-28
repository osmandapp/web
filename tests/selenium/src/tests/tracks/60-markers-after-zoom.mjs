import { By } from 'selenium-webdriver';
import {
    clickBy,
    enclose,
    hasHiddenRoutePointNear,
    hasRoutePointNear,
    matchPointsCount,
    setMapCenter,
} from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenLocalTrack from '../../actions/tracks/actionOpenLocalTrack.mjs';

const TRACK = 'test-track-trkpt';
const TRACK_POINTS = 1460;
const POINT = [50.0173748, 19.8009837];
const POINT_AWAY = [49.988577, 19.8073302];

export default async function test() {
    await actionOpenMap('#14/50.0191/19.8397');
    await actionOpenLocalTrack(TRACK);
    await matchPointsCount(TRACK_POINTS);

    await setMapCenter(...POINT, 17);

    // at zoom 17 every point in view has its draggable marker
    await enclose(() => hasRoutePointNear(...POINT), { tag: 'draggable marker of the point' });

    await clickBy(By.id('se-show-track-points'));
    await enclose(() => hasHiddenRoutePointNear(...POINT), { tag: 'hidden marker of the point' });
    await setMapCenter(...POINT_AWAY, 17);

    // with "Show track points" off the markers drawn after a pan stay hidden
    await enclose(() => hasHiddenRoutePointNear(...POINT_AWAY), { tag: 'hidden marker of the point after a pan' });

    await actionFinish();
}
