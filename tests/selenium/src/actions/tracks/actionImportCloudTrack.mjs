import { clickBy, waitBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import actionIdleWait from '../actionIdleWait.mjs';
import actionUploadCloudTracks from './actionUploadCloudTracks.mjs';
import actionDeleteTracksByPattern from './actionDeleteTracksByPattern.mjs';
import { driver } from '../../options.mjs';

const MAX_BACK_ATTEMPTS = 3;

/**
 * Return from the track menu to the list of the folder the track was uploaded into.
 *
 * A single-file upload is opened by the site (useGpxImport: selected = files.length === 1),
 * so the track menu covers the folder list. saveTrackToCloud() keeps working after that menu
 * shows up - downloadAfterUpload/refreshGlobalFiles/syncCloudTrackInfo are not awaited - and
 * clicking back while they are still running lets them re-open the track over the list.
 * Waiting for the site to go idle first, and checking where we ended up after the click,
 * removes both the early click and the assumption that the upload opens the track at all.
 */
async function actionBackToFolder(newName) {
    const listItem = By.id(`se-cloud-track-${newName}`);
    for (let attempt = 1; attempt <= MAX_BACK_ATTEMPTS; attempt++) {
        await actionIdleWait();
        if (await waitBy(By.id('se-track-context-menu'), { optional: true })) {
            await clickBy(By.id('se-button-back'));
            await actionIdleWait();
            if (await waitBy(By.id('se-track-context-menu'), { optional: true })) {
                console.log(`Track menu re-opened after back, attempt #${attempt}`);
                continue;
            }
        }
        return await waitBy(listItem);
    }
    throw new Error(`Unable to leave the track menu after importing ${newName}`);
}

export default async function test(tracks, trackName = null, newName = trackName) {
    await actionIdleWait();
    if (!trackName) {
        const files = tracks.map((t) => t.path).join('\n');
        return actionUploadCloudTracks({ files });
    }

    const { path } = tracks.find((t) => t.name === trackName);
    let retries = 0;
    const maxRetries = 3;

    while (retries < maxRetries) {
        await actionUploadCloudTracks({ files: path });
        await actionBackToFolder(newName);

        const elems = await driver.findElements(By.css(`[id^="se-cloud-track-${newName}"]`));
        if (elems.length <= 1) {
            return;
        }
        console.log(`Duplicate detected, deletion attempt #${retries + 1}`);
        await actionDeleteTracksByPattern(newName);
        retries++;
    }
}
