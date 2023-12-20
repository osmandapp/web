'use strict';

import { By } from 'selenium-webdriver';
import { mobile } from '../options.mjs';
import { enclose, clickBy, sendKeysBy, matchInnerTextBy, enumerateIds } from '../lib.mjs';

import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionIdleWait from '../actions/actionIdleWait.mjs';

const routes = [
    {
        type: 'osmand',
        profile: 'bicycle',
        A: '46.58083, 31.51220',
        B: '46.42675, 31.71208',
        hasAttributes: false,
        strings: [
            'Points: 2',
            'Bicycle 24.48 km',
            'Route: 24.5 km, 1:08 min',
            // '-2 / 0 / 4 m', // ele // TODO
            // /Track.*?: 26.80 km/s, // Road // temporarily disabled // TODO
            // /Sand.*?: 8.93 km/s, // Surface // temporarily disabled // TODO
        ],
        turns: [
            'Go ahead and go 1.1 km',
            'Turn slightly left (+TSLL,TSLR) and go 0.2 km',
            'Turn slightly right (+TSLR,TSLL) and go 2.5 km',
        ],
    },
    {
        type: 'osmand',
        profile: 'car',
        A: '47.87383, 35.30130',
        B: '46.67181, 32.50930',
        hasAttributes: false,
        strings: [
            'Points: 2',
            'Car 307.42 km',
            'Route: 307.4 km, 4:59 min',
            '2 / 51 / 114 m', // ele
        ],
        turns: [
            'Go ahead and go 2.8 km',
            'Take 1 exit onto Прибережна автомагістраль and go 1.7 km',
            'Keep left (+C|+C|C) to Миколаїв;Одеса and go 0.5 km',
        ],
    },
    // {
    //     type: 'osrm',
    //     profile: 'bicycle',
    //     A: '46.58083, 31.51220',
    //     B: '46.42675, 31.71208',
    //     hasAttributes: false, // temporarily disabled // TODO
    //     strings: [
    //         'Points: 2',
    //         'Bike 28.18 km', // was 28.18
    //         'Route: 28.2 km, 4:37 min', // was 28.2
    //         '-2 / 0 / 4 m', // ele
    //         // /Track.*?: 26.80 km/s, // Road // temporarily disabled // TODO
    //         // /Sand.*?: 8.93 km/s, // Surface // temporarily disabled // TODO
    //     ],
    //     turns: [
    //         'Depart and go 1.93 km',
    //         'New name Straight to Ковалівська',
    //         'End of road Left and go 132 m',
    //         'Fork Slight right and go 2.49 km',
    //     ],
    // },
    // {
    //     type: 'osrm',
    //     profile: 'car',
    //     A: '47.87383, 35.30130',
    //     B: '46.67181, 32.50930',
    //     hasAttributes: false,
    //     strings: [
    //         'Points: 2',
    //         'Car 334.74 km',
    //         'Route: 334.7 km, 6:55 min',
    //         '3 / 55 / 115 m', // ele
    //     ],
    //     turns: [
    //         'Exit roundabout Right and go 117 m',
    //         'End of road Right to I міст Преображенського',
    //         'Turn Left and go 19.84 km',
    //         'Arrive',
    //     ],
    // },
];

const MOBILE_SKIP = /(Track|Sand)/; // bye-bye mobile version

const routeTrackPanelButtons = [
    'se-panel-button-profile-icon',
    'se-panel-button-edit-track',
    'se-panel-button-download-gpx',
];

const routeTrackInfoBlockButtons = ['se-infoblock-button-edit-track', 'se-infoblock-button-download-gpx'];

export default async function test() {
    await actionOpenMap();
    await clickBy(By.id('se-show-menu-navigation'));
    for await (const { type, profile, strings, turns, A, B, hasAttributes } of routes) {
        await clickBy(By.id('se-clear-route-start-point'));
        await clickBy(By.id('se-clear-route-finish-point'));

        await selectProfile({ type, profile });

        await sendKeysBy(By.id('se-route-start-point'), A + '\n');
        await sendKeysBy(By.id('se-route-finish-point'), B + '\n');

        await validatePanelButtons(routeTrackPanelButtons);
        await validateInfoBlockButtons(routeTrackInfoBlockButtons);

        await validateInfoBlockStrings(strings, hasAttributes);
        await validateInfoBlockTurns(turns);

        await clickBy(By.id('se-button-back'));
        await actionIdleWait();
    }
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
    await enclose(
        async () => {
            const buttons = await enumerateIds('se-panel-button-');
            return JSON.stringify(ids.sort()) === JSON.stringify(buttons.sort());
        },
        { tag: 'validatePanelButtons' }
    );
    //await clickBy(By.id('se-button-back'));
}

async function validateInfoBlockStrings(strings, hasAttributes) {
    // don't check Road/Surface on dying-mobile version
    if (hasAttributes && mobile === false) {
        await actionIdleWait({ idle: 3000 });
        await clickBy(By.id('se-show-attr-legend-Road type'));
        await actionIdleWait({ idle: 3000 });
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
