import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { clickBy, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionCreateNewFolder from '../actions/actionCreateNewFolder.mjs';
import actionImportCloudTrack from '../actions/tracks/actionImportCloudTrack.mjs';
import { getFiles } from '../util.mjs';
import actionDeleteFolder from '../actions/actionDeleteFolder.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const folder = 'upload track';
    const trackName = 'test-routed-osrm';
    const tracks = getFiles({ folder: 'gpx' });

    await clickBy(By.id('se-show-menu-tracks'));
    // create folder
    await actionCreateNewFolder(folder);
    await clickBy(By.id(`se-menu-cloud-${folder}`));
    await waitBy(By.id(`se-cloud-name-track`));

    await clickBy(By.id('se-import-cloud-track'));
    // import one track
    await actionImportCloudTrack(tracks, trackName);
    // delete folder
    await clickBy(By.id('se-back-folder-button'));
    await waitBy(By.id(`se-menu-cloud-${folder}`));
    await actionDeleteFolder(folder);

    await actionFinish();
}
