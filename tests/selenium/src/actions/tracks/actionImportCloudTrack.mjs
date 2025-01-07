import { clickBy, waitBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { uploadCloudTracks } from '../../util.mjs';
import actionIdleWait from '../actionIdleWait.mjs';

export default async function test(tracks, trackName = null, newName = trackName) {
    await actionIdleWait();
    if (trackName) {
        const { path } = tracks.find((t) => t.name === trackName);
        await uploadCloudTracks({ files: path });
        await clickBy(By.id('se-button-back'));
        await waitBy(By.id(`se-cloud-track-${newName}`));
    } else {
        const files = tracks.map((t) => t.path).join('\n');
        await uploadCloudTracks({ files });
    }
}
