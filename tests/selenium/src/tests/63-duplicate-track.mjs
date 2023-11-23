import { clickBy, deleteTrack, getTracks, waitBy } from '../lib.mjs';
import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import { By } from 'selenium-webdriver';
import actionCheckTrackExist from '../actions/actionCheckTrackExist.mjs';
import actionImportCloudTrack from '../actions/actionImportCloudTrack.mjs';
import actionFinish from '../actions/actionFinish.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));

    const tracks = getTracks();
    let trackName = 'test-routed-osrm';
    const exist = await actionCheckTrackExist(trackName);
    if (!exist) {
        await actionImportCloudTrack(tracks, trackName);
    }

    await clickBy(By.id(`se-actions-${trackName}`));
    await waitBy(By.id('se-track-actions'));
    await clickBy(By.id('se-duplicate-cloud-track'));

    await waitBy(By.id(`se-cloud-track-${trackName} - 1`));
    await deleteTrack(`${trackName} - 1`);

    await actionFinish();
}
