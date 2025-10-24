import { clickBy, waitBy } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import { By } from 'selenium-webdriver';
import actionImportCloudTrack from '../../actions/tracks/actionImportCloudTrack.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { deleteTrack, getFiles } from '../../util.mjs';
import actionDeleteTracksByPattern from '../../actions/tracks/actionDeleteTracksByPattern.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));

    const tracks = getFiles({ folder: 'gpx' });
    let trackName = 'test-routed-osrm';

    for (const track of tracks) {
        await actionDeleteTracksByPattern(track.name);
    }
    await actionImportCloudTrack(tracks, trackName);

    await clickBy(By.id(`se-actions-${trackName}`));
    await waitBy(By.id('se-track-actions'));
    await clickBy(By.id('se-duplicate-cloud-track'));

    await waitBy(By.id(`se-cloud-track-${trackName} - 1`));
    await deleteTrack(`${trackName} - 1`);
    await deleteTrack(trackName);

    await actionFinish();
}
