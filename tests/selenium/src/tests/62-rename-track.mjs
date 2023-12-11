import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import { clickBy, enclose, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../actions/actionFinish.mjs';
import actionImportCloudTrack from '../actions/actionImportCloudTrack.mjs';
import actionCheckFileExist from '../actions/actionCheckFileExist.mjs';
import { deleteTrack, getFiles } from '../util.mjs';

export default async function test() {
    const suffix = '-renamed';
    const tracks = getFiles({ folder: 'gpx' });
    let trackName = 'test-routed-osrm';

    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));
    const exist = await actionCheckFileExist({ id: `se-cloud-track-${trackName}` });
    if (!exist) {
        await actionImportCloudTrack(tracks, trackName);
    }

    await clickBy(By.id(`se-actions-${trackName}`));
    await waitBy(By.id('se-track-actions'));
    await clickBy(By.id('se-rename-cloud-track'));
    await waitBy(By.id('se-rename-track-dialog'));
    await enclose(
        async () => {
            const input = await waitBy(By.id('se-rename-track-input'));
            await input.sendKeys(suffix);
            return true;
        },
        { tag: 'rename-track' }
    );
    await clickBy(By.id('se-rename-track-submit'));
    await waitBy(By.id(`se-cloud-track-${trackName}${suffix}`));

    await deleteTrack(`${trackName}${suffix}`);

    await actionFinish();
}
