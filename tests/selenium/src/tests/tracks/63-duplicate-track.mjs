import { clickBy, waitBy } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import { By } from 'selenium-webdriver';
import actionImportCloudTrack from '../../actions/tracks/actionImportCloudTrack.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { deleteTrack, getFiles, cleanupCloud } from '../../util.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-menu-tracks'));

    const tracks = getFiles({ folder: 'gpx' });
    let trackName = 'test-routed-osrm';

    try {
        await actionImportCloudTrack(tracks, trackName);

        await clickBy(By.id(`se-actions-${trackName}`));
        await waitBy(By.id('se-track-actions'));
        await clickBy(By.id('se-duplicate-cloud-track'));

        await waitBy(By.id(`se-cloud-track-${trackName} - 1`));
        await deleteTrack(`${trackName} - 1`);
        await deleteTrack(trackName);

        await actionFinish();
    } finally {
        await cleanupCloud({ tracks: [trackName] });
    }
}
