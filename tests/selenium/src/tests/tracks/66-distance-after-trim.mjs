import { By } from 'selenium-webdriver';
import { clickBy, enclose, getTrackDistance, matchPointsCount } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenLocalTrack from '../../actions/tracks/actionOpenLocalTrack.mjs';
import actionOpenPointMenu from '../../actions/tracks/actionOpenPointMenu.mjs';
import ignoreTest from '../../actions/actionIgnoreTest.mjs';

const TRACK = 'test-routed-osmand';
const TRACK_POINTS = 16;
const TRIM_POINT_INDEX = 7;
const TRIM_POINT = [48.5986357, 23.9110565];

export default async function test() {
    ignoreTest();

    await actionOpenMap('#10/48.5/23.72');
    await actionOpenLocalTrack(TRACK);
    await matchPointsCount(TRACK_POINTS);
    const distance = await enclose(getTrackDistance, { tag: 'distance of the track' });

    await actionOpenPointMenu(TRIM_POINT);
    await clickBy(By.id('se-point-context-menu-trim-after'));
    await matchPointsCount(TRIM_POINT_INDEX + 1);

    // Trim after makes the distance of the track shorter
    await enclose(async () => (await getTrackDistance()) < distance, { tag: 'shorter distance after Trim after' });

    await actionFinish();
}
