import { waitBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test(tracks) {
    for (let i = 0; i < tracks.length; i++) {
        const { name } = tracks[i];
        await waitForTrack(name);
    }
}

async function waitForTrack(name) {
    await waitBy(By.id('se-cloud-track-' + name));
    await waitBy(By.id(`se-actions-${name}`));
}
