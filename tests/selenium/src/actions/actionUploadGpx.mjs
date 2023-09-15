'use strict';

import { By } from 'selenium-webdriver';
import { resolve } from 'node:path';
import { readdirSync } from 'node:fs';

import { waitBy, clickBy, enclose } from '../lib.mjs';

import actionIdleWait from './actionIdleWait.mjs';

/**
 * Action: actionUploadGpx({ mask, multiple })
 *
 * Param: mask <String> use gpx-files by wildcard instead of upload *.gpx
 * Param: multiple <Boolean> perform multiple-upload (all-files by one form Submit request)
 *
 * test: all files should be found in Local tracks list
 */
export default async function test({ mask = '*.gpx', multiple = false } = {}) {
    const tracks = [];

    // convert mask (support only * as wildcard, eg *wiki*.gpx)
    const regexp = mask.replaceAll('.', '\\.').replaceAll('*', '.*');

    readdirSync('gpx')
        .sort()
        .forEach((file) => {
            if (file.match(/\.gpx$/i) && (!mask || file.match(regexp))) {
                const name = file.replace(/\.gpx$/i, '');
                const path = resolve('gpx', file);
                tracks.push({ file, name, path });
            }
        });

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'), { optional: true });

    if (multiple) {
        const files = tracks.map((t) => t.path).join('\n');
        await uploadTracks({ files });
    } else {
        for (let i = 0; i < tracks.length; i++) {
            const { name, path } = tracks[i];
            await uploadTracks({ files: path });
            await waitForTrack({ name });
            await actionIdleWait();
        }
    }

    // finally, all files should be loaded
    for (let i = 0; i < tracks.length; i++) {
        const { name } = tracks[i];
        await waitForTrack({ name });
    }
}

async function waitForTrack({ name }) {
    await waitBy(By.id('se-local-track-' + name));
}

async function uploadTracks({ files }) {
    const uploader = async () => {
        const element = await waitBy(By.id('se-upload-gpx'));
        await element.sendKeys(files); // upload file by sendKeys()
        return true;
    };

    await enclose(uploader, { tag: 'Upload Track' });
}
