import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionAddOneTrack from '../../actions/tracks/actionAddOneTrack.mjs';
import { assert, checkElementByCss, clickBy, getMapHash, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../../actions/actionFinish.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import { deleteTrack, getFiles } from '../../util.mjs';
import actionDeleteTracksByPattern from '../../actions/tracks/actionDeleteTracksByPattern.mjs';
import setView from '../../actions/setView.mjs';

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

    // set known initial map view, then remember it for back-navigation check
    await setView({ lat: 50, lon: 25, zoom: 10 });
    await actionIdleWait();
    const initialHash = await getMapHash();

    await clickBy(By.id(`se-cloud-track-${trackName}`));
    await waitBy(By.id('se-track-context-menu'));
    await waitBy(By.className('leaflet-interactive'));

    // map must zoom-to-fit the track — view must differ from the initial one
    await actionIdleWait();
    const openedHash = await getMapHash();
    await assert(
        openedHash !== initialHash,
        `Open track should zoom-to-fit (initial: ${initialHash}, opened: ${openedHash})`
    );

    await clickBy(By.id('se-button-back'));
    await checkElementByCss('img[src*="point_finish"]', false);
    await waitByRemoved(By.id('se-track-context-menu'));

    // back button must restore the map view captured before the track was opened
    await actionIdleWait();
    const restoredHash = await getMapHash();
    await assert(
        restoredHash === initialHash,
        `Back should restore initial map view (expected: ${initialHash}, got: ${restoredHash})`
    );

    await deleteTrack(trackName);

    await actionFinish();
}
