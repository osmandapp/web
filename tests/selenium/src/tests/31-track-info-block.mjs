'use strict';

import { By } from 'selenium-webdriver';
import { mobile } from '../options.mjs';
import { clickBy, enclose, enumerateIds, matchInnerTextBy } from '../lib.mjs';

import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import actionUploadGpx from '../actions/actionUploadGpx.mjs';
import actionLocalToCloud from '../actions/actionLocalToCloud.mjs';

const TRACKS = [
    {
        gpx: 'test-routed-osrm.gpx',
        strings: [
            'Points: 29',
            'Distance: 12.0 km',
            '113 / 151 / 185 m', // ele
        ],
    },
    {
        gpx: 'test-track-trkpt.gpx',
        strings: [
            'Points: 1460',
            'Distance: 25.6 km',
            '195 / 216 / 257 m', // ele
        ],
    },
    {
        gpx: 'test-wiki-kyiv.gpx',
        strings: [
            'Points: 5',
            'Distance: 6.4 km',
            '173 / 184 / 191 m', // ele
            /Street.*?: 6.08 km/s, // Waytypes stats
            /Asphalt.*?: 3.28 km/s, // Surfaces stats
        ],
    },
    {
        gpx: 'test-routed-osmand.gpx',
        strings: [
            'Points: 16',
            'Distance: 152.1 km',
            '312 / 884 / 1731 m', // ele
            /Path.*?: 20.96 km/s, // Waytypes stats
            /Gravel.*?: 16.00 km/s, // Surfaces stats
        ],
    },
];

const MOBILE_SKIP = /(Path|Gravel|Street|Asphalt)/; // bye-bye mobile version

const localTrackButtons = [
    'se-infoblock-button-save-to-cloud',
    'se-infoblock-button-download-gpx',
    'se-infoblock-button-close-track',
    'se-infoblock-button-delete-track',
];
const cloudTrackButtons = [
    'se-infoblock-button-edit-track',
    'se-infoblock-button-download-gpx',
    'se-infoblock-button-close-track',
    'se-infoblock-button-delete-track',
];

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    for await (const { gpx, strings } of TRACKS) {
        const name = gpx.replace('.gpx', '');

        await actionUploadGpx({ mask: gpx });
        await clickBy(By.id('se-local-track-' + name));
        await clickBy(By.id('se-show-attr-legend-Road type'), { optional: true });
        await clickBy(By.id('se-show-attr-legend-Surface'), { optional: true });
        await validateInfoBlockStrings(strings);
        await validateInfoBlockButtons(localTrackButtons);
        await clickBy(By.id('se-button-back'));
        await clickBy(By.id('se-show-menu-planroute'));
        await actionLocalToCloud({ mask: name });
        await clickBy(By.id('se-cloud-track-' + name));
        await clickBy(By.id('se-show-attr-legend-Road type'), { optional: true });
        await clickBy(By.id('se-show-attr-legend-Surface'), { optional: true });
        await validateInfoBlockStrings(strings);
        await validateInfoBlockButtons(cloudTrackButtons);
    }
}

async function validateInfoBlockStrings(strings) {
    for await (const match of strings) {
        if (mobile && match.toString().match(MOBILE_SKIP)) {
            continue;
        }
        await matchInnerTextBy(By.id('se-infoblock-all'), match);
    }
}

async function validateInfoBlockButtons(ids) {
    await enclose(
        async () => {
            const buttons = await enumerateIds('se-infoblock-button-');
            return JSON.stringify(ids.sort()) === JSON.stringify(buttons.sort());
        },
        { tag: 'validateInfoBlockButtons' }
    );
}
