import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import { clickBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../../actions/actionFinish.mjs';
import actionImportCloudTrack from '../../actions/tracks/actionImportCloudTrack.mjs';
import actionRenameTrack from '../../actions/tracks/actionRenameTrack.mjs';
import { deleteTrack, getFiles, cleanupCloud } from '../../util.mjs';

export default async function test() {
    const suffix = '-renamed';
    const tracks = getFiles({ folder: 'gpx' });
    let trackName = 'test-routed-osrm';

    try {
        await actionOpenMap();
        await actionLogIn();

        await clickBy(By.id('se-show-menu-tracks'));

        await actionImportCloudTrack(tracks, trackName);

        await actionRenameTrack(trackName, suffix);

        await deleteTrack(`${trackName}${suffix}`);

        await actionFinish();
    } finally {
        await cleanupCloud({ tracks: [trackName] });
    }
}
