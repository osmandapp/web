import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { clickBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import { deleteTrack, getFiles } from '../util.mjs';
import actionImportCloudTrack from '../actions/actionImportCloudTrack.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));

    const tracks = getFiles({ folder: 'gpx' });
    const trackName = 'test-routed-osrm';

    const exist = await waitBy(By.id(`se-cloud-track-${trackName}`), { optional: true, idle: true });
    if (!exist) {
        await actionImportCloudTrack(tracks, trackName);
    }

    // delete track
    await deleteTrack(trackName);

    // restore track
    await openTrash();
    await clickBy(By.id(`se-cloud-trash-actions-${trackName}`));
    await waitBy(By.id('se-trash-actions'));
    await clickBy(By.id('se-trash-actions-restore'));

    // check track
    await clickBy(By.id('se-show-menu-tracks'));
    await waitBy(By.id(`se-cloud-track-${trackName}`));

    // delete track
    await deleteTrack(trackName);

    // empty trash
    await openTrash();
    await waitBy(By.id('se-empty_trash'));
    await clickBy(By.id('se-empty_trash'));
    await waitBy(By.id('se-delete-trash-dialog'));
    await clickBy(By.id('se-delete-trash-dialog-delete'));
    await waitByRemoved(By.id('se-delete-trash-dialog'));
    await waitBy(By.id('se-empty-trash-page'));

    // create and delete track
    await clickBy(By.id('se-show-menu-tracks'));
    await actionImportCloudTrack(tracks, trackName);
    await deleteTrack(trackName);

    // check trash
    await openTrash();
    await waitBy(By.id(`se-cloud-trash-actions-${trackName}`));

    // delete trash track
    await clickBy(By.id(`se-cloud-trash-actions-${trackName}`));
    await waitBy(By.id('se-trash-actions'));
    await clickBy(By.id('se-trash-actions-delete'));
    await waitBy(By.id('se-delete-version-dialog'));
    await clickBy(By.id('se-delete-version-dialog-delete'));
    await waitByRemoved(By.id('se-delete-version-dialog'));
    await waitByRemoved(By.id(`se-cloud-trash-actions-${trackName}`));

    await actionFinish();
}

async function openTrash() {
    await clickBy(By.id('se-show-menu-settings'));
    await waitBy(By.id('se-cloud_trash'));
    await clickBy(By.id('se-cloud_trash'));
    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-cloud_trash-items'));
}
