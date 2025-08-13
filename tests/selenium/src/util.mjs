import { By } from 'selenium-webdriver';
import { clickBy, waitBy, waitByRemoved } from './lib.mjs';

import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import actionIdleWait from './actions/actionIdleWait.mjs';

export function getFiles({ folder = 'gpx', filter = true }) {
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
    return filter ? files.filter((f) => f.name !== 'favorites-Castle Bromwich зміна назви ще раз    _-__-__-_') : files;
}

export function getFilesByName({ folder }) {
    const files = [];

    readdirSync(folder)
        .sort()
        .forEach((file) => {
            const name = file;
            const path = resolve(folder, file);
            files.push({ file, name, path });
        });

    return files;
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
    await waitByRemoved(By.id(`se-actions-${name}`));
    await actionIdleWait();
}
