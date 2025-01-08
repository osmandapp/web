import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import actionAddOneTrack from '../actions/tracks/actionAddOneTrack.mjs';
import { clickBy, waitBy, waitByRemoved, checkElementByCss } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../actions/actionFinish.mjs';
import { deleteTrack } from '../util.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const trackName = 'test-routed-osrm';

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
    await clickBy(By.id('se-close-visible-tracks'));
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

    await clickBy(By.id('se-close-visible-tracks'));
    await deleteTrack(`${trackName}`);

    await actionFinish();
}
