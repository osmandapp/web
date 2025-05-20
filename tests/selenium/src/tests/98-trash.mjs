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
    console.log(`Tracks menu opened`);
    const tracks = getFiles({ folder: 'gpx' });
    const trackName = 'test-routed-osrm';
    console.log(`Track ${trackName} created`);
    for (const track of tracks) {
        await actionDeleteTracksByPattern(track.name);
    }
    console.log(`All tracks deleted`);
    await actionImportCloudTrack(tracks, trackName);

    // delete track
    await deleteTrack(trackName);
    console.log(`Track ${trackName} deleted`);
    // restore track
    await openTrash();
    await waitBy(By.id('se-cloud-trash-items'));
    await clickBy(By.id(`se-cloud-trash-actions-${trackName}`));
    await waitBy(By.id('se-trash-actions'));
    await clickBy(By.id('se-trash-actions-restore'));
    console.log(`Track ${trackName} restored`);
    // check track
    await clickBy(By.id('se-show-menu-tracks'));
    await waitBy(By.id(`se-cloud-track-${trackName}`));
    console.log(`Track ${trackName} exists`);
    // delete track
    await deleteTrack(trackName);
    console.log(`Track ${trackName} deleted`);
    // empty trash
    await openTrash();
    await waitBy(By.id('se-cloud-trash-items'));
    await waitBy(By.id('se-empty_trash'));
    await clearTrash();
    console.log(`Trash cleared`);
    // create and delete track
    await clickBy(By.id('se-show-menu-tracks'));
    await actionImportCloudTrack(tracks, trackName);
    await deleteTrack(trackName);
    console.log(`Track ${trackName} deleted`);
    // check trash
    await openTrash();
    await waitBy(By.id('se-cloud-trash-items'));
    await waitBy(By.id(`se-cloud-trash-actions-${trackName}`));
    console.log(`Track ${trackName} exists in trash`);
    // delete trash track
    await clickBy(By.id(`se-cloud-trash-actions-${trackName}`));
    await waitBy(By.id('se-trash-actions'));
    await clickBy(By.id('se-trash-actions-delete'));
    await waitBy(By.id('se-delete-version-dialog'));
    await clickBy(By.id('se-delete-version-dialog-delete'));
    await waitByRemoved(By.id('se-delete-version-dialog'));
    await waitByRemoved(By.id(`se-cloud-trash-actions-${trackName}`));
    console.log(`Track ${trackName} deleted from trash`);
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
    console.log(`All tracks deleted`);
    const folders = [UPLOAD_SORT, UPLOAD_TRACK];

    for (const name of folders) {
        let existFolder = await waitBy(By.id(`se-menu-cloud-${name}`), { optional: true, idle: true });
        if (existFolder) {
            await actionDeleteFolder(name);
        }
    }
    console.log(`All folders deleted`);
    await waitBy(By.id('se-empty-page'));
    console.log(`All folders deleted`);
    await openTrash();
    console.log(`Trash opened`);
    let emptyTrash = await waitBy(By.id('se-empty-trash-page'), { optional: true, idle: true });
    if (!emptyTrash) {
        await clearTrash();
    }
    console.log(`Trash cleared`);
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
