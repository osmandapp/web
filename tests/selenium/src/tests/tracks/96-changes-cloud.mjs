import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import { clickBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import actionImportCloudTrack from '../../actions/tracks/actionImportCloudTrack.mjs';
import { deleteTrack, getFiles, cleanupCloud } from '../../util.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-menu-tracks'));

    const tracks = getFiles({ folder: 'gpx' });
    const trackName = 'test-routed-osrm';

    try {
        // create track
        await actionImportCloudTrack(tracks, trackName);

        // check version "Added"
        await openChanges();
        await waitBy(By.id(`se-cloud_change-${trackName}-Added`));

        // delete track
        await clickBy(By.id('se-show-menu-tracks'));
        await deleteTrack(trackName);

        // check version "Deleted"
        await openChanges();
        await waitBy(By.id(`se-cloud_change-${trackName}-Deleted`));

        // delete version "Deleted"
        await clickBy(By.id(`se-cloud-changes-actions-${trackName}`));
        await waitBy(By.id('se-changes-actions'));
        await clickBy(By.id('se-changes-actions-delete'));
        await actionIdleWait(); // leaving settings refreshes the list, let the server apply the change first

        // check track
        await clickBy(By.id('se-show-menu-tracks'));
        await waitBy(By.id(`se-cloud-track-${trackName}`));

        // delete track
        await deleteTrack(trackName);

        // restore track
        await openChanges();
        await clickBy(By.id(`se-cloud-changes-actions-${trackName}`));
        await waitBy(By.id('se-changes-actions'));
        await clickBy(By.id('se-changes-actions-restore'));
        await actionIdleWait();

        // check track
        await clickBy(By.id('se-show-menu-tracks'));
        await waitBy(By.id(`se-cloud-track-${trackName}`));

        await actionFinish();
    } finally {
        await cleanupCloud({ tracks: [trackName] });
    }
}

async function openChanges() {
    await clickBy(By.id('se-show-menu-settings'));
    await waitBy(By.id('se-cloud_changes'));
    await clickBy(By.id('se-cloud_changes'));
    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-cloud_changes-items'));
}
