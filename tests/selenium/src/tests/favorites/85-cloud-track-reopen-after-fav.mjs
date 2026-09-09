import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenContextMenu from '../../actions/map/actionOpenContextMenu.mjs';
import actionAddOneTrack from '../../actions/tracks/actionAddOneTrack.mjs';
import actionOpenFavorites from '../../actions/favorites/actionOpenFavorites.mjs';
import actionDeleteAllFavorites from '../../actions/favorites/actionDeleteAllFavorites.mjs';
import { clickBy, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { deleteTrack, getFiles } from '../../util.mjs';
import actionDeleteTracksByPattern from '../../actions/tracks/actionDeleteTracksByPattern.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const trackName = 'test-routed-osrm';
    const favoriteName = 'TrackFavTest';

    await clickBy(By.id('se-show-menu-tracks'));

    for (const track of getFiles({ folder: 'gpx' })) {
        await actionDeleteTracksByPattern(track.name);
    }

    await actionAddOneTrack(trackName);

    await clickBy(By.id(`se-cloud-track-${trackName}`));
    await waitBy(By.id('se-track-context-menu'));
    await waitBy(By.className('leaflet-interactive'));
    await waitBy(By.id('se-button-back'));

    await actionOpenContextMenu();
    await clickBy(By.id('se-add-favorite-action'));
    await waitBy(By.id('se-add-fav-dialog'));
    await sendKeysBy(By.id('se-fav-name-input'), favoriteName);
    await clickBy(By.id('se-add-fav-btn'));
    await waitByRemoved(By.id('se-add-fav-dialog'));
    await waitBy(By.id(`se-fav-item-info-${favoriteName}`));

    await clickBy(By.id('se-close-wpt-details'));
    await waitByRemoved(By.id(`se-fav-item-info-${favoriteName}`));

    await waitBy(By.id('se-track-context-menu'));
    await waitBy(By.id('se-button-back'));
    await waitBy(By.className('leaflet-interactive'));

    await clickBy(By.id('se-button-back'));
    await waitByRemoved(By.id('se-track-context-menu'));

    await deleteTrack(trackName);

    await actionOpenFavorites();
    await actionDeleteAllFavorites([]); // the leftover loop removes any group, incl. those left by other tests

    await actionFinish();
}
