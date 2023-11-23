import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import { clickBy, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../actions/actionFinish.mjs';
import actionImportCloudTrack from '../actions/actionImportCloudTrack.mjs';
import actionCheckCloudTracks from '../actions/actionCheckCloudTracks.mjs';
import actionDeleteCloudTrack from '../actions/actionDeleteCloudTrack.mjs';
import actionCreateNewFolder from '../actions/actionCreateNewFolder.mjs';
import { deleteTrack, getTracks } from '../util.mjs';

export default async function test() {
    const trackName = 'test-routed-osrm';
    const tracks = getTracks();
    const folder = 'uploud track';

    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));

    await actionCreateNewFolder(folder);

    await clickBy(By.id(`se-menu-cloud-${folder}`), { optional: true });
    await waitBy(By.id(`se-cloud-track-name`));

    await clickBy(By.id('se-import-cloud-track'));
    await actionImportCloudTrack(tracks, trackName);
    await actionImportCloudTrack(tracks);
    await actionCheckCloudTracks(tracks);
    await actionDeleteCloudTrack(tracks);

    //delete last extra track
    const lastName = `${trackName} - 1`;
    await deleteTrack(lastName);
    await waitBy(By.id('se-import-first-track'));

    await actionFinish();
}
