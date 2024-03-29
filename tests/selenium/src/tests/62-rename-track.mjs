import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import { clickBy, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../actions/actionFinish.mjs';
import actionImportCloudTrack from '../actions/actionImportCloudTrack.mjs';
import actionRenameTrack from '../actions/actionRenameTrack.mjs';
import { deleteTrack, getFiles } from '../util.mjs';

export default async function test() {
    const suffix = '-renamed';
    const tracks = getFiles({ folder: 'gpx' });
    let trackName = 'test-routed-osrm';

    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));
    const exist = await waitBy(By.id(`se-cloud-track-${trackName}`), { optional: true, idle: true });
    if (!exist) {
        await actionImportCloudTrack(tracks, trackName);
    }

    await actionRenameTrack(trackName, suffix);

    await deleteTrack(`${trackName}${suffix}`);

    await actionFinish();
}
