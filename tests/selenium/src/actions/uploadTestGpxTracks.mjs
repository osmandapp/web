// import { strict as assert } from 'node:assert';
import { By } from 'selenium-webdriver';
import { resolve } from 'node:path';
import { readdirSync } from 'node:fs';
import waitForIdle from './waitForIdle.mjs';
import { waitBy, enclose } from '../lib.mjs';

/**
 * Action: uploadTestGpxTracks(props, [params])
 *
 * Param: mask <String> use gpx-files by wildcard instead of upload *.gpx
 * Param: multiple <Boolean> perform multiple-upload (all-files by one form Submit request)
 *
 * test: all files should be found in Local tracks list
 */
export default async function test(props, { mask = '*.gpx', multiple = false } = {}) {
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

    if (multiple) {
        const files = tracks.map((t) => t.path).join('\n');
        await uploadTracks(props, { files });
    } else {
        for (let i = 0; i < tracks.length; i++) {
            const { name, path } = tracks[i];
            await uploadTracks(props, { files: path });
            await waitForTrack(props, { name });
            await waitForIdle(props);
        }
    }

    // finally, all files should be loaded
    for (let i = 0; i < tracks.length; i++) {
        const { name } = tracks[i];
        await waitForTrack(props, { name });
    }
}

async function waitForTrack(props, { name }) {
    await waitBy(props, By.id('se-local-track-' + name));
}

async function uploadTracks(props, { files }) {
    const uploader = async (driver) => {
        const element = await waitBy({ driver }, By.id('se-upload-gpx'));
        await element.sendKeys(files); // upload file by sendKeys()
        return true;
    };

    await enclose(props, 'Upload Track', uploader);
}
