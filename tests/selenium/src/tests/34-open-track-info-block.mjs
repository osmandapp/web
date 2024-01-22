import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import actionAddOneTrack from '../actions/actionAddOneTrack.mjs';
import { checkElementByCss, clickBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../actions/actionFinish.mjs';
import { deleteTrack } from '../util.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const trackName = 'test-routed-osrm';

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
