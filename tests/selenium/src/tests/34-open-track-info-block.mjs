import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import actionAddOneTrack from '../actions/tracks/actionAddOneTrack.mjs';
import { checkElementByCss, clickBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../actions/actionFinish.mjs';
import { deleteTrack, getFiles } from '../util.mjs';
import actionDeleteTracksByPattern from '../actions/tracks/actionDeleteTracksByPattern.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const trackName = 'test-routed-osrm';

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));

    for (const track of getFiles({ folder: 'gpx' })) {
        await actionDeleteTracksByPattern(track.name);
    }

    await actionAddOneTrack(trackName);

    await clickBy(By.id(`se-cloud-track-${trackName}`));
    await waitBy(By.id('se-infoblock-all'));
    await waitBy(By.className('leaflet-interactive'));
    await clickBy(By.id('se-button-back'));
    await checkElementByCss('img[src*="point_finish"]', false);
    await waitByRemoved(By.id('se-infoblock-all'));

    await deleteTrack(trackName);

    await actionFinish();
}
