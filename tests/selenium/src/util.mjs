import { By } from 'selenium-webdriver';
import { clickBy, waitBy, waitByRemoved } from './lib.mjs';
import { captureTestScreenshot, setCleaning } from './options.mjs';

import { mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import actionIdleWait from './actions/actionIdleWait.mjs';
import actionUploadGpx from './actions/actionUploadGpx.mjs';
import actionOpenMap from './actions/map/actionOpenMap.mjs';
import actionLogIn from './actions/login/actionLogIn.mjs';
import actionSwitchUser from './actions/login/actionSwitchUser.mjs';
import actionDeleteTracksByPattern from './actions/tracks/actionDeleteTracksByPattern.mjs';
import actionDeleteFolder from './actions/actionDeleteFolder.mjs';
import actionOpenFavorites from './actions/favorites/actionOpenFavorites.mjs';
import actionDeleteFavGroupsByPattern from './actions/favorites/actionDeleteFavGroupsByPattern.mjs';
import { generatedVertex } from '../../bench.mjs';

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
    await waitBy(By.id(`se-menu-cloud-${name}`), { failOnError: true });
}

export async function deleteTrack(name) {
    await actionIdleWait();
    await waitBy(By.id(`se-actions-${name}`));
    await clickBy(By.id(`se-actions-${name}`));
    await clickBy(By.id('se-delete-cloud-track'));
    await clickBy(By.id('se-delete-track-dialog'));
    await waitByRemoved(By.id(`se-actions-${name}`), false, { failOnError: true });
    await actionIdleWait();
}

// shoots the page for the report, then deletes the tracks and favorite groups by name prefix and the folders by name
export async function cleanupCloud({ tracks = [], folders = [], favorites = [], mainUser = false }) {
    setCleaning(true);
    try {
        await captureTestScreenshot();
        await actionOpenMap();
        if (mainUser) {
            if (await waitBy(By.id('se-logout-button'), { optional: true, idle: true })) {
                await actionSwitchUser();
            } else {
                await actionLogIn();
            }
        }
        if (tracks.length > 0 || folders.length > 0) {
            await clickBy(By.id('se-show-menu-tracks'));
            // the root list is shown once the files are loaded, empty or not
            await waitBy(By.id('se-track-menu'), { idle: true });
            for (const name of tracks) {
                await actionDeleteTracksByPattern(name);
            }
            for (const name of folders) {
                if (await waitBy(By.id(`se-menu-cloud-${name}`), { optional: true, idle: true })) {
                    await actionDeleteFolder(name);
                }
            }
        }
        if (favorites.length > 0) {
            await actionOpenFavorites();
            for (const name of favorites) {
                await actionDeleteFavGroupsByPattern(name.replace('favorites-', ''));
            }
        }
    } catch (e) {
        console.log('cleanupCloud: ' + e.message);
    } finally {
        setCleaning(false);
    }
}

/**
 * Uploads a generated track of `count` vertices as a local track.
 * `routeIndexes` are the vertices that are its route points, as OsmAnd saves a planned route.
 */
export async function uploadGeneratedTrack(name, count, { step, routeIndexes = [] } = {}) {
    const trkpts = Array.from({ length: count }, (_, i) => generatedVertex(i, step));
    await actionUploadGpx({ mask: name + '.gpx', folder: writeGpx(name, trkpts, routeIndexes) });
}

function writeGpx(name, trkpts, routeIndexes) {
    const folder = join(tmpdir(), 'osmand-bench');
    const point = (tag, [lat, lon], extensions = '') => `<${tag} lat="${lat}" lon="${lon}">${extensions}</${tag}>`;
    const rtepts = routeIndexes.map((i) =>
        point(
            'rtept',
            trkpts[i],
            `<extensions><osmand:profile>car</osmand:profile><osmand:trkpt_idx>${i}</osmand:trkpt_idx></extensions>`
        )
    );
    const rte = rtepts.length > 0 ? `<rte>${rtepts.join('')}</rte>` : '';
    const trk = `<trk><trkseg>${trkpts.map((trkpt) => point('trkpt', trkpt)).join('')}</trkseg></trk>`;
    mkdirSync(folder, { recursive: true });
    writeFileSync(
        join(folder, name + '.gpx'),
        `<?xml version="1.0" encoding="UTF-8"?><gpx version="1.1" creator="OsmAnd" xmlns="http://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net">${rte}${trk}</gpx>`
    );

    return folder;
}
