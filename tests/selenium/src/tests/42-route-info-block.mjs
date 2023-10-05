'use strict';

import { By } from 'selenium-webdriver';
import { mobile } from '../options.mjs';
import { enclose, clickBy, sendKeysBy, matchInnerTextBy, enumerateIds } from '../lib.mjs';

import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionIdleWait from '../actions/actionIdleWait.mjs';
import actionFinish from '../actions/actionFinish.mjs';

const routes = [
    {
        type: 'osrm',
        profile: 'bicycle',
        A: '46.58083, 31.51220',
        B: '46.42675, 31.71208',
        hasAttributes: true,
        strings: [
            'Points: 2',
            'Bike 28.18 km',
            'Route: 28.2 km, 4:37 min',
            '-2.0 / 0.5 / 4.0 m', // ele
            /Track.*?: 26.80 km/s, // Road
            /Sand.*?: 8.93 km/s, // Surface
        ],
        turns: [
            'Depart and go 1.93 km',
            'New name Straight to Ковалівська',
            'End of road Left and go 132 m',
            'Fork Slight right and go 2.49 km',
        ],
    },
    {
        type: 'osrm',
        profile: 'car',
        A: '47.87383, 35.30130',
        B: '46.67181, 32.50930',
        hasAttributes: false,
        strings: [
            'Points: 2',
            'Car 334.74 km',
            'Route: 334.7 km, 6:55 min',
            '3.0 / 55.3 / 115.0 m', // ele
        ],
        turns: [
            'Exit roundabout Right and go 117 m',
            'End of road Right to I міст Преображенського',
            'Turn Left and go 19.84 km',
            'Arrive',
        ],
    },
];

const MOBILE_SKIP = /(Track|Sand)/; // bye-bye mobile version

const routeTrackPanelButtons = [
    'se-panel-button-edit-icon',
    'se-panel-button-edit-track',
    'se-panel-button-download-gpx',
];

const routeTrackInfoBlockButtons = ['se-infoblock-button-edit-track', 'se-infoblock-button-download-gpx'];

export default async function test() {
    await actionOpenMap();

    for await (const { type, profile, strings, turns, A, B, hasAttributes } of routes) {
        await clickBy(By.id('se-show-main-menu'), { optional: true });
        await clickBy(By.id('se-show-menu-route'), { optional: true });

        await clickBy(By.id('se-clear-route-start-point'));
        await clickBy(By.id('se-clear-route-finish-point'));

        await selectProfile({ type, profile });

        await sendKeysBy(By.id('se-route-start-point'), A + '\n');
        await sendKeysBy(By.id('se-route-finish-point'), B + '\n');

        await validatePanelButtons(routeTrackPanelButtons);
        await validateInfoBlockButtons(routeTrackInfoBlockButtons);

        await validateInfoBlockStrings(strings, hasAttributes);
        await validateInfoBlockTurns(turns);

        // funny way to close mobile info-block after turns tab open
        if (mobile) {
            await clickBy(By.id('se-show-menu-weather'));
            await clickBy(By.id('se-hide-menu-weather'));
        }

        await actionIdleWait();
    }

    await actionFinish();
}

// { type, profile } note: type support later
export async function selectProfile({ profile }) {
    const clicker = async () => {
        await clickBy(By.id('se-route-select'), { optional: true });
        const clicked = await clickBy(By.id('se-route-profile-' + profile), { optional: true });

        // clickBy (optional) might return true when the element was not found
        if (clicked && clicked !== true) {
            return clicked;
        }

        return false;
    };

    await enclose(clicker);
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

async function validatePanelButtons(ids) {
    await clickBy(By.id('se-hide-main-menu'));
    await enclose(
        async () => {
            const buttons = await enumerateIds('se-panel-button-');
            return JSON.stringify(ids.sort()) === JSON.stringify(buttons.sort());
        },
        { tag: 'validatePanelButtons' }
    );
    await clickBy(By.id('se-show-main-menu'));
}

async function validateInfoBlockStrings(strings, hasAttributes) {
    // don't check Road/Surface on dying-mobile version
    if (hasAttributes && mobile === false) {
        await clickBy(By.id('se-show-attr-legend-Road type'));
        await clickBy(By.id('se-show-attr-legend-Surface'));
    }
    for await (const match of strings) {
        if (mobile && match.toString().match(MOBILE_SKIP)) {
            continue;
        }
        await matchInnerTextBy(By.id('se-infoblock-all'), match);
    }
}

async function validateInfoBlockTurns(strings) {
    await clickBy(By.xpath('//*[contains(@id, "-T-turns")]'));
    for await (const match of strings) {
        if (mobile && match.toString().match(MOBILE_SKIP)) {
            continue;
        }
        await matchInnerTextBy(By.id('se-turns-all'), match);
    }
    await clickBy(By.xpath('//*[contains(@id, "-T-general")]'));
}
