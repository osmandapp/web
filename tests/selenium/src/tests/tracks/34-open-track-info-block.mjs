import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionAddOneTrack from '../../actions/tracks/actionAddOneTrack.mjs';
import {
    assert,
    checkElementByCss,
    clickBy,
    countMapItemsByOpacity,
    getMapHash,
    waitBy,
    waitByRemoved,
} from '../../lib.mjs';
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

    // ===== Focus mode: dim other tracks by default, hide them via Focus toggle =====
    // Two existing tracks in different regions — wide view to keep both polylines on screen.
    await actionAddOneTrack('test-routed-osrm');
    await actionAddOneTrack('test-routed-osmand');

    // Set wide view BEFORE making the "other" track visible — otherwise its wpts/polyline
    // are filtered out by the current (narrow) bbox in addTrackToMap.
    await setView({ lat: 49.5, lon: 27, zoom: 7 });
    await actionIdleWait();

    // Make the "other" track visible on the map via track actions (Make track visible).
    // Action menu closes and the visible-tracks link appears in the tracks list.
    await clickBy(By.id('se-actions-test-routed-osmand'));
    await waitBy(By.id('se-track-actions'));
    await clickBy(By.id('se-show-track-action'));
    await waitBy(By.id('se-visible-tracks-menu'));
    await actionIdleWait();

    // Open one track — the other (already visible) must become dimmed by default
    await clickBy(By.id('se-cloud-track-test-routed-osrm'));
    await waitBy(By.id('se-track-context-menu'));
    await waitBy(By.className('leaflet-interactive'));

    // Opening the track zooms-to-fit onto it; restore the wide view so the second
    // track is back in the current bbox before counting items.
    await setView({ lat: 49.5, lon: 27, zoom: 7 });
    await actionIdleWait();

    const dimmed = await countMapItemsByOpacity();
    await assert(dimmed.dim > 0, `Other track should be dimmed by default, got: ${JSON.stringify(dimmed)}`);
    await assert(dimmed.hidden === 0, `No items should be hidden by default, got: ${JSON.stringify(dimmed)}`);

    // Focus ON — other track must become fully hidden
    await clickBy(By.id('se-focus-toggle'));
    await actionIdleWait();
    const hidden = await countMapItemsByOpacity();
    await assert(hidden.hidden > 0, `Other track should be hidden after Focus ON, got: ${JSON.stringify(hidden)}`);

    // Focus OFF — other track must reappear as dimmed
    await clickBy(By.id('se-focus-toggle'));
    await actionIdleWait();
    const dimmedAgain = await countMapItemsByOpacity();
    await assert(dimmedAgain.dim > 0, `Other track should be dimmed again, got: ${JSON.stringify(dimmedAgain)}`);
    await assert(
        dimmedAgain.hidden === 0,
        `No items should be hidden after Focus OFF, got: ${JSON.stringify(dimmedAgain)}`
    );

    // Cleanup
    await clickBy(By.id('se-button-back'));
    await waitByRemoved(By.id('se-track-context-menu'));
    await deleteTrack('test-routed-osrm');
    await deleteTrack('test-routed-osmand');

    await actionFinish();
}
