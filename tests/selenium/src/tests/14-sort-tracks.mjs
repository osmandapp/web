import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { clickBy, enclose, enumerateIds, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import { getFiles } from '../util.mjs';
import actionImportCloudTrack from '../actions/actionImportCloudTrack.mjs';
import actionCheckCloudTracks from '../actions/actionCheckCloudTracks.mjs';
import actionCreateNewFolder from '../actions/actionCreateNewFolder.mjs';
import actionIdleWait from '../actions/actionIdleWait.mjs';
import actionDeleteFolder from '../actions/actionDeleteFolder.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));

    const tracks = getFiles({ folder: 'gpx' });
    const folder = 'uploud track';

    await actionCreateNewFolder(folder);

    await clickBy(By.id(`se-menu-cloud-${folder}`));
    await waitBy(By.id(`se-cloud-name-track`));

    // import list of tracks
    await actionImportCloudTrack(tracks);
    for (let i = 0; i < tracks.length; i++) {
        const { name } = tracks[i];
        await waitBy(By.id('se-import-loading' + name), { hidden: true });
    }

    await waitBy(By.id('se-sort-button-time'));
    await actionCheckCloudTracks(tracks);
    await validateGroupOrder(trackGroupsLastModified, 'LastModified');
    await waitBy(By.id('se-sort-button-time'));
    await clickBy(By.id('se-sort-button-time'));
    await waitBy(By.id('se-sort-menu'));
    await clickBy(By.id('se-sort-longest'));
    await actionCheckCloudTracks(tracks);
    await validateGroupOrder(trackGroupsLongest, 'Longest');
    await waitBy(By.id('se-sort-button-longest'));
    await clickBy(By.id('se-sort-button-longest'));
    await waitBy(By.id('se-sort-menu'));
    await clickBy(By.id('se-sort-shortest'));
    await actionCheckCloudTracks(tracks);
    await validateGroupOrder(trackGroupsShortest, 'Shortest');

    await actionDeleteFolder(folder);

    await actionFinish();
}

const trackGroupsLastModified = [
    'se-cloud-track-test-routed-osmand',
    'se-cloud-track-test-wiki-kyiv',
    'se-cloud-track-test-track-trkpt',
    'se-cloud-track-test-track-mixed',
    'se-cloud-track-test-routed-osrm',
    'se-cloud-track-test-track-wpt',
    'se-cloud-track-test-infoblock-desc',
];

const trackGroupsLongest = [
    'se-cloud-track-test-routed-osmand',
    'se-cloud-track-test-track-trkpt',
    'se-cloud-track-test-track-mixed',
    'se-cloud-track-test-routed-osrm',
    'se-cloud-track-test-wiki-kyiv',
    'se-cloud-track-test-infoblock-desc',
    'se-cloud-track-test-track-wpt',
];

const trackGroupsShortest = [
    'se-cloud-track-test-infoblock-desc',
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
                return JSON.stringify(ids) === JSON.stringify(groups);
            }
        },
        { tag: `validateTrackGroupsSort-${sortName}` }
    );
}
