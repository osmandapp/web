import { clickBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionCheckFileExist from './actionCheckFileExist.mjs';
import actionImportCloudTrack from './actionImportCloudTrack.mjs';
import { getFiles } from '../util.mjs';

export default async function test(trackName) {
    const tracks = getFiles({ folder: 'gpx' });

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));
    const exist = await actionCheckFileExist({ id: `se-cloud-track-${trackName}` });
    if (!exist) {
        await actionImportCloudTrack(tracks, trackName);
    }
}
