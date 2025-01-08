import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import { clickBy, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../actions/actionFinish.mjs';
import actionImportCloudTrack from '../actions/tracks/actionImportCloudTrack.mjs';
import actionCheckCloudTracks from '../actions/tracks/actionCheckCloudTracks.mjs';
import actionCreateNewFolder from '../actions/actionCreateNewFolder.mjs';
import { deleteTrack, getFiles } from '../util.mjs';
import actionIdleWait from '../actions/actionIdleWait.mjs';

export const UPLOAD_TRACK = 'upload track';

export default async function test() {
    const trackName = 'test-routed-osrm';
    const tracks = getFiles({ folder: 'gpx' });
    const folder = UPLOAD_TRACK;

    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));

    await actionCreateNewFolder(folder);

    await clickBy(By.id(`se-menu-cloud-${folder}`));
    await waitBy(By.id(`se-cloud-name-track`));

    await clickBy(By.id('se-import-cloud-track'));
    // import one track
    await actionImportCloudTrack(tracks, trackName);
    await actionIdleWait();
    // import duplicate
    await actionImportCloudTrack(tracks, trackName, `${trackName} - 1`);
    // delete them
    await deleteTrack(trackName);
    await actionIdleWait();
    await deleteTrack(`${trackName} - 1`);
    // check folder is empty
    await waitBy(By.id('se-import-first-track'));
    // import list of tracks
    await actionImportCloudTrack(tracks);
    await actionCheckCloudTracks(tracks);

    await actionFinish();
}
