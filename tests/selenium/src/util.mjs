import { By } from 'selenium-webdriver';
import { driver, TIMEOUT_OPTIONAL } from './options.mjs';
import { clickBy, enclose, waitBy } from './lib.mjs';

import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';

export function getTracks() {
    const tracks = [];
    // convert mask (support only * as wildcard, eg *wiki*.gpx)
    const regexp = '*.gpx'.replaceAll('.', '\\.').replaceAll('*', '.*');

    readdirSync('gpx')
        .sort()
        .forEach((file) => {
            if (file.match(/\.gpx$/i) && (!'*.gpx' || file.match(regexp))) {
                const name = file.replace(/\.gpx$/i, '');
                const path = resolve('gpx', file);
                tracks.push({ file, name, path });
            }
        });
    return tracks;
}

export async function uploadCloudTracks({ files }) {
    const uploader = async () => {
        const element = await waitBy(By.id('se-upload-cloud-gpx'));
        await element.sendKeys(files);
        return true;
    };

    await enclose(uploader, { tag: 'Upload cloud track' });
}

export async function createFolder(name) {
    await clickBy(By.id('se-add-folder'));
    const input = await waitBy(By.id('se-add-folder-input'));
    await input.sendKeys(`${name}`);
    await clickBy(By.id('se-add-folder-submit'));
    await waitBy(By.id(`se-menu-cloud-${name}`));
}

export async function littleTimeout() {
    await driver.manage().setTimeouts({ implicit: TIMEOUT_OPTIONAL });
}

export async function deleteTrack(name) {
    await clickBy(By.id(`se-actions-${name}`));
    await clickBy(By.id('se-delete-cloud-track'));
    await clickBy(By.id('se-delete-track-dialog'));
    littleTimeout().then();
}