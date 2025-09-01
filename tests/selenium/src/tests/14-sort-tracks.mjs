import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { clickBy, enclose, enumerateIds, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import { getFiles } from '../util.mjs';
import actionImportCloudTrack from '../actions/tracks/actionImportCloudTrack.mjs';
import actionCheckCloudTracks from '../actions/tracks/actionCheckCloudTracks.mjs';
import actionCreateNewFolder from '../actions/actionCreateNewFolder.mjs';
import actionIdleWait from '../actions/actionIdleWait.mjs';
import actionDeleteFolder from '../actions/actionDeleteFolder.mjs';
import actionRenameTrack from '../actions/tracks/actionRenameTrack.mjs';

export const UPLOAD_SORT = 'upload-sort';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));

    const tracks = getFiles({ folder: 'gpx' });
    const folder = UPLOAD_SORT;
    let trackName = 'test-infoblock-desc';
    const suffix = '-renamed';

    await actionCreateNewFolder(folder);
    await clickBy(By.id(`se-menu-cloud-${folder}`));
    await waitBy(By.id(`se-cloud-name-track`));
    // import list of tracks
    await actionImportCloudTrack(tracks);
    await actionIdleWait();
    for (const t of tracks) {
        await waitByRemoved(By.id('se-import-loading-' + t.name));
    }

    await waitBy(By.id('se-sort-button-time-tracks'));
    await actionIdleWait();
    await actionCheckCloudTracks(tracks);
    await actionRenameTrack(trackName, suffix);
    await validateGroupOrder(trackGroupsLastModified, 'LastModified');
    await waitBy(By.id('se-sort-button-time-tracks'));
    await clickBy(By.id('se-sort-button-time-tracks'));
    await waitBy(By.id('se-sort-menu'));
    await clickBy(By.id('se-sort-longest'));
    await validateGroupOrder(trackGroupsLongest, 'Longest');
    await waitBy(By.id('se-sort-button-longest-tracks'));
    await clickBy(By.id('se-sort-button-longest-tracks'));
    await waitBy(By.id('se-sort-menu'));
    await clickBy(By.id('se-sort-shortest'));
    await validateGroupOrder(trackGroupsShortest, 'Shortest');
    await waitBy(By.id('se-back-folder-button-tracks'));
    await clickBy(By.id('se-back-folder-button-tracks'));
    await waitBy(By.id(`se-menu-cloud-${folder}`));
    await actionDeleteFolder(folder);

    await actionFinish();
}

const trackGroupsLastModified = [
    'se-cloud-track-test-infoblock-desc-renamed',
    'se-cloud-track-test-routed-osmand',
    'se-cloud-track-test-wiki-kyiv',
    'se-cloud-track-test-track-trkpt',
    'se-cloud-track-test-track-mixed',
    'se-cloud-track-test-routed-osrm',
    'se-cloud-track-test-track-wpt',
];

const trackGroupsLongest = [
    'se-cloud-track-test-routed-osmand',
    'se-cloud-track-test-track-trkpt',
    'se-cloud-track-test-track-mixed',
    'se-cloud-track-test-routed-osrm',
    'se-cloud-track-test-wiki-kyiv',
    'se-cloud-track-test-infoblock-desc-renamed',
    'se-cloud-track-test-track-wpt',
];

const trackGroupsShortest = [
    'se-cloud-track-test-infoblock-desc-renamed',
    'se-cloud-track-test-track-wpt',
    'se-cloud-track-test-wiki-kyiv',
    'se-cloud-track-test-routed-osrm',
    'se-cloud-track-test-track-mixed',
    'se-cloud-track-test-track-trkpt',
    'se-cloud-track-test-routed-osmand',
];

async function validateGroupOrder(ids, sortName) {
    await enclose(
        async () => {
            await actionIdleWait();
            const groups = await enumerateIds('se-cloud-track');
            if (groups.length > 0) {
                if (sortName === 'LastModified') {
                    return JSON.stringify(ids[0]) === JSON.stringify(groups[0]);
                } else {
                    return JSON.stringify(ids) === JSON.stringify(groups);
                }
            }
        },
        { tag: `validateTrackGroupsSort-${sortName}` }
    );
}
