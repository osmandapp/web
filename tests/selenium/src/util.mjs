import { By } from 'selenium-webdriver';
import { clickBy, enclose, waitBy } from './lib.mjs';

import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import actionIdleWait from './actions/actionIdleWait.mjs';

export function getFiles({ folder = 'gpx' }) {
    const files = [];
    // convert mask (support only * as wildcard, eg *wiki*.gpx)
    const regexp = '*.gpx'.replaceAll('.', '\\.').replaceAll('*', '.*');

    readdirSync(folder)
        .sort()
        .forEach((file) => {
            if (file.match(/\.gpx$/i) && (!'*.gpx' || file.match(regexp))) {
                const name = file.replace(/\.gpx$/i, '');
                const path = resolve(folder, file);
                files.push({ file, name, path });
            }
        });
    return files;
}

export async function uploadCloudTracks({ files }) {
    const uploader = async () => {
        const element = await waitBy(By.id('se-upload-cloud-gpx'));
        await element.sendKeys(files);
        return true;
    };

    await enclose(uploader, { tag: 'Upload cloud track' });
}

export async function uploadFavorites({ files }) {
    const uploader = async () => {
        const element = await waitBy(By.id('se-upload-fav-group'));
        await element.sendKeys(files);
        return true;
    };

    await enclose(uploader, { tag: 'Upload favorite group' });
}

export async function createFolder(name) {
    await clickBy(By.id('se-add-folder'));
    const input = await waitBy(By.id('se-add-folder-input'));
    await input.sendKeys(`${name}`);
    await clickBy(By.id('se-add-folder-submit'));
    await waitBy(By.id(`se-menu-cloud-${name}`));
}

export async function deleteTrack(name) {
    await actionIdleWait();
    await waitBy(By.id(`se-actions-${name}`));
    await clickBy(By.id(`se-actions-${name}`));
    await clickBy(By.id('se-delete-cloud-track'));
    await clickBy(By.id('se-delete-track-dialog'));
    await waitBy(By.id(`se-actions-${name}`), { hidden: true });
    await actionIdleWait();
}

export async function deleteFavGroup(name) {
    await actionIdleWait();
    await waitBy(By.id(`se-folder-actions-button-${name}`));
    await clickBy(By.id(`se-folder-actions-button-${name}`));
    await waitBy(By.id(`se-favorite-folder-actions`));
    await clickBy(By.id('se-favorite-folder-actions-delete'));
    await waitBy(By.id(`se-delete-fav-group-dialog`));
    await clickBy(By.id('se-delete-fav-group-submit'));
    await waitBy(By.id(`se-actions-${name}`), { hidden: true });
    await actionIdleWait();
}
