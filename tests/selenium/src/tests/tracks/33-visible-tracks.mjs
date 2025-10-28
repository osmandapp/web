import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionAddOneTrack from '../../actions/tracks/actionAddOneTrack.mjs';
import { clickBy, waitBy, waitByRemoved, checkElementByCss, getUrl, assert } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../../actions/actionFinish.mjs';
import { deleteTrack, getFiles } from '../../util.mjs';
import actionDeleteTracksByPattern from '../../actions/tracks/actionDeleteTracksByPattern.mjs';
import { driver } from '../../options.mjs';

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

    // check actions Show/Hide
    await clickBy(By.id(`se-actions-${trackName}`));
    await waitBy(By.id('se-track-actions'));
    await clickBy(By.id('se-show-track-action'));

    await waitByRemoved(By.id('se-infoblock-all'));
    await checkElementByCss('img[src*="point_finish"]');

    await clickBy(By.id(`se-actions-${trackName}`));
    await waitBy(By.id('se-track-actions'));
    await clickBy(By.id('se-hide-track-action'));

    await waitByRemoved(By.id('se-infoblock-all'));
    await checkElementByCss('img[src*="point_finish"]', false);

    // check visible tracks
    await clickBy(By.id(`se-actions-${trackName}`));
    await waitBy(By.id('se-track-actions'));
    await clickBy(By.id('se-show-track-action'));
    await waitBy(By.id('se-visible-tracks-menu'));
    await clickBy(By.id('se-visible-tracks-menu'));
    await waitBy(By.id(`se-new-visible-track-${trackName}`));
    await clickBy(By.id(`se-visible-switch-${trackName}`));
    await checkElementByCss('img[src*="point_finish"]', false);

    // check recently visible tracks
    await clickBy(By.id('se-visible-tracks-button-back-tracks'));
    await waitBy(By.id('se-visible-tracks-menu'));
    await clickBy(By.id('se-visible-tracks-menu'));
    await waitBy(By.id(`se-old-visible-track-${trackName}`));
    await waitBy(By.id('se-empty-visible'));
    await clickBy(By.id(`se-visible-switch-${trackName}`));
    await waitBy(By.className('leaflet-interactive'));
    await waitBy(By.id(`se-new-visible-track-${trackName}`));

    // check hide all
    await clickBy(By.id('se-hide-all-visible-tracks'));
    await checkElementByCss('img[src*="point_finish"]', false);

    // check show all
    await clickBy(By.id('se-show-all-visible-tracks'));
    await checkElementByCss('img[src*="point_finish"]');

    // check visible tracks from configure map menu
    await clickBy(By.id('se-show-menu-configuremap'));
    await waitBy(By.id('se-configure-map-menu-name'));
    await clickBy(By.id('se-configure-map-visible-tracks'));
    await waitBy(By.id(`se-new-visible-track-${trackName}`));
    let url = await getUrl();
    await assert(url.includes('visible-tracks'), 'URL should contain visible-tracks in configure menu');
    await waitBy(By.id('se-visible-tracks-button-back-config'));

    // return to tracks menu
    await clickBy(By.id('se-show-menu-tracks'));

    // verify visible tracks menu is still open in tracks menu
    await waitBy(By.id(`se-new-visible-track-${trackName}`));
    url = await getUrl();
    await assert(url.includes('visible-tracks'), 'URL should contain visible-tracks in tracks menu');
    await waitBy(By.id('se-visible-tracks-button-back-tracks'));
    await clickBy(By.id('se-visible-tracks-button-back-tracks'));

    // return to configure menu and verify visible tracks is still open
    await clickBy(By.id('se-show-menu-configuremap'));
    await waitBy(By.id(`se-new-visible-track-${trackName}`));

    const baseUrl = url.split('/map')[0];
    const URL = `${baseUrl}/map/visible-tracks/`;
    await driver.get(URL);
    await waitBy(By.id(`se-new-visible-track-${trackName}`));
    await waitBy(By.id('se-visible-tracks-button-close'));
    await clickBy(By.id('se-visible-tracks-button-close'));
    await clickBy(By.id('se-show-menu-tracks'));
    await deleteTrack(`${trackName}`);

    await actionFinish();
}
