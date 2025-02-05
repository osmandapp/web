import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import actionOpenContextMenu from '../actions/map/actionOpenContextMenu.mjs';
import { clickBy, matchTextBy, sendKeysBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionOpenFavorites from '../actions/favorites/actionOpenFavorites.mjs';
import actionDeleteAllFavorites from '../actions/favorites/actionDeleteAllFavorites.mjs';
import { deleteTrack, getFiles } from '../util.mjs';
import actionDeleteTracksByPattern from '../actions/tracks/actionDeleteTracksByPattern.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favorites = getFiles({ folder: 'favorites' });
    const favoriteName = 'Apple';
    const trackName = getFormattedDate();

    // prepare
    await actionOpenFavorites();
    await actionDeleteAllFavorites(favorites);

    await clickBy(By.id('se-show-menu-tracks'));
    for (const track of getFiles({ folder: 'gpx' })) {
        await actionDeleteTracksByPattern(track.name);
    }

    await clickBy(By.id('se-create-new-route'));

    // add wpt
    await actionOpenContextMenu();
    await clickBy(By.id('se-add-wpt-action'));
    await waitBy(By.id('se-add-fav-dialog'));
    await sendKeysBy(By.id('se-fav-name-input'), favoriteName);
    await clickBy(By.id('se-add-fav-btn'));
    await waitByRemoved(By.id('se-add-fav-dialog'));
    await waitBy(By.className('leaflet-marker-icon'));
    await clickBy(By.id('se-infoblock-button-save-to-cloud'));
    await waitBy(By.id('se-save-track-dialog'));
    await clickBy(By.id('se-submit-save-to-cloud'));
    await waitBy(By.id('se-panel-button-edit-track'));
    await clickBy(By.id('se-button-back'));

    await waitBy(By.id('se-' + trackName));
    await matchTextBy(By.id('se-cloud-track-info-' + trackName), '0 · 0:00 · 1');
    await deleteTrack(trackName);

    await actionFinish();
}

function getFormattedDate() {
    const date = new Date();
    return date.toDateString();
}
