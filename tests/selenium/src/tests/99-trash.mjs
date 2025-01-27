import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { clickBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import { deleteTrack, getFiles } from '../util.mjs';
import actionImportCloudTrack from '../actions/tracks/actionImportCloudTrack.mjs';
import { readdirSync } from 'node:fs';
import actionDeleteFolder from '../actions/actionDeleteFolder.mjs';
import { UPLOAD_SORT } from './14-sort-tracks.mjs';
import { UPLOAD_TRACK } from './13-uploud-track-to-cloud.mjs';
import actionDeleteTracksByPattern from '../actions/tracks/actionDeleteTracksByPattern.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));

    const tracks = getFiles({ folder: 'gpx' });
    const trackName = 'test-routed-osrm';

    for (const track of tracks) {
        await actionDeleteTracksByPattern(track.name);
    }

    await actionImportCloudTrack(tracks, trackName);

    // delete track
    await deleteTrack(trackName);

    // restore track
    await openTrash();
    await waitBy(By.id('se-cloud-trash-items'));
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
    await waitBy(By.id('se-cloud-trash-items'));
    await waitBy(By.id('se-empty_trash'));
    await clearTrash();

    // create and delete track
    await clickBy(By.id('se-show-menu-tracks'));
    await actionImportCloudTrack(tracks, trackName);
    await deleteTrack(trackName);

    // check trash
    await openTrash();
    await waitBy(By.id('se-cloud-trash-items'));
    await waitBy(By.id(`se-cloud-trash-actions-${trackName}`));

    // delete trash track
    await clickBy(By.id(`se-cloud-trash-actions-${trackName}`));
    await waitBy(By.id('se-trash-actions'));
    await clickBy(By.id('se-trash-actions-delete'));
    await waitBy(By.id('se-delete-version-dialog'));
    await clickBy(By.id('se-delete-version-dialog-delete'));
    await waitByRemoved(By.id('se-delete-version-dialog'));
    await waitByRemoved(By.id(`se-cloud-trash-actions-${trackName}`));

    // clear all files
    await clickBy(By.id('se-show-menu-tracks'));
    let testsTracks = [];
    const mask = '*.gpx';
    const regexp = mask.replaceAll('.', '\\.').replaceAll('*', '.*');
    readdirSync('gpx')
        .sort()
        .forEach((file) => {
            if (file.match(/\.gpx$/i) && (!mask || file.match(regexp))) {
                const name = file.replace(/\.gpx$/i, '');
                testsTracks.push(name);
            }
        });
    for (const name of testsTracks) {
        let existTrack = await waitBy(By.id(`se-cloud-track-${name}`), { optional: true, idle: true });
        if (existTrack) {
            await deleteTrack(name);
        }
    }

    const folders = [UPLOAD_SORT, UPLOAD_TRACK];

    for (const name of folders) {
        let existFolder = await waitBy(By.id(`se-menu-cloud-${name}`), { optional: true, idle: true });
        if (existFolder) {
            await actionDeleteFolder(name);
        }
    }

    await waitBy(By.id('se-empty-page'));

    await openTrash();

    let emptyTrash = await waitBy(By.id('se-empty-trash-page'), { optional: true, idle: true });
    if (!emptyTrash) {
        await clearTrash();
    }

    await actionFinish();
}

async function openTrash() {
    await clickBy(By.id('se-show-menu-settings'));
    await waitBy(By.id('se-cloud_trash'));
    await clickBy(By.id('se-cloud_trash'));
    await waitByRemoved(By.id('se-loading-page'));
}

async function clearTrash() {
    await clickBy(By.id('se-empty_trash'));
    await waitBy(By.id('se-delete-trash-dialog'));
    await clickBy(By.id('se-delete-trash-dialog-delete'));
    await waitByRemoved(By.id('se-delete-trash-dialog'));
    await waitBy(By.id('se-empty-trash-page'));
}
