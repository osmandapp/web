import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import { clickBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../../actions/actionFinish.mjs';
import actionImportCloudTrack from '../../actions/tracks/actionImportCloudTrack.mjs';
import actionRenameTrack from '../../actions/tracks/actionRenameTrack.mjs';
import { deleteTrack, getFiles } from '../../util.mjs';
import actionDeleteTracksByPattern from '../../actions/tracks/actionDeleteTracksByPattern.mjs';

export default async function test() {
    const suffix = '-renamed';
    const tracks = getFiles({ folder: 'gpx' });
    let trackName = 'test-routed-osrm';

    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));

    for (const track of tracks) {
        await actionDeleteTracksByPattern(track.name);
    }

    await actionImportCloudTrack(tracks, trackName);

    await actionRenameTrack(trackName, suffix);

    await deleteTrack(`${trackName}${suffix}`);

    await actionFinish();
}
