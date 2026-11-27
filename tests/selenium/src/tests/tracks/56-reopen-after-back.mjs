import { By } from 'selenium-webdriver';
import {
    clickBy,
    getTrackLines,
    leftClickBy,
    matchPointsCount,
    setMapCenter,
    waitBy,
    waitByRemoved,
} from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenLocalTrack from '../../actions/tracks/actionOpenLocalTrack.mjs';

const TRACK = 'test-track-two-segments';
const TRACK_POINTS = 20;

export default async function test() {
    await actionOpenMap();
    await actionOpenLocalTrack(TRACK);
    await matchPointsCount(TRACK_POINTS);
    const [line] = await getTrackLines();

    await setMapCenter(line.middle.lat, line.middle.lng);
    await leftClickBy(line.middle.lat + 0.003, line.middle.lng);
    await matchPointsCount(TRACK_POINTS + 1);
    await clickBy(By.id('se-button-back'));
    await waitByRemoved(By.id('se-panel-button-undo'));

    // the line left on the map opens the track with the added point
    await setMapCenter(line.middle.lat, line.middle.lng);
    await leftClickBy(line.middle.lat, line.middle.lng);
    await waitBy(By.id('se-panel-button-undo'), { idle: true });
    await matchPointsCount(TRACK_POINTS + 1);

    await actionFinish();
}
