import { clickBy, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import { uploadCloudTracks } from '../util.mjs';

export default async function test(tracks, trackName = null) {
    if (trackName) {
        const { path } = tracks.find((t) => t.name === trackName);
        await uploadCloudTracks({ files: path });
        await clickBy(By.id('se-button-back'));
        await waitBy(By.id(`se-cloud-track-${trackName}`));
    } else {
        const files = tracks.map((t) => t.path).join('\n');
        await uploadCloudTracks({ files });
    }
}
