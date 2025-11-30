'use strict';

import { By } from 'selenium-webdriver';
import { mobile, ROUTE_SUMMARY_SELECTOR } from '../../options.mjs';
import { enclose, clickBy, sendKeysBy, matchInnerTextBy, enumerateIds, waitBy } from '../../lib.mjs';

import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';

const routes = [
    {
        type: 'osmand',
        profile: 'bicycle',
        A: '50.49301, 30.52445',
        B: '50.50810, 30.51207',
        hasAttributes: false,
        strings: [
            'Points: 2',
            /Bicycle 2\.(0\d|1\d?) km/, // 2.09 km
            /Route: 2\.1\d? km, 0:09 min/,
        ],
        turns: [
            'Go ahead and go 0.0 km',
            'Turn left and go 0.0 km',
            'Turn slightly left (+TSLL,TSLR) and go 0.1 km',
            'Turn right and go 0.0 km',
            'Turn left and go 0.0 km',
            'Turn right onto Оболонська набережна and go 0.0 km',
            'Turn left onto Оболонська набережна and go 0.3 km',
            'Keep left (+C,TSLR) onto Оболонська набережна and go 0.7 km',
            'Keep left (+C,TSLR) onto Оболонська набережна and go 0.0 km',
            'Keep left (+C,TSLR) and go 0.8 km',
            'Turn left and go 0.0 km',
            'Keep left (+C,TSLR) and go 0.1 km',
        ],
    },
    {
        type: 'osmand',
        profile: 'car',
        A: '53.68702, 9.16646',
        B: '55.67320, 12.56426',
        hasAttributes: false,
        strings: [
            'Points: 2',
            /Car 47[0123]\.\d+ km/,
            /Route: 47[0123]\.\d+ km, 5:[2-4]\d min/,
            /[-10] \/ 2[45] \/ 85 m/, // ele
        ],
        turns: [
            'Go ahead onto Gottlieb-Daimler-Straße and go 0.1 km',
            'Keep left (+C|+C,TSLR) onto Sønderjyske Motorvej E 45 and go 74.0 km',
            'Turn slightly left (+TSLL,C|C) onto Banegårdspladsen and go 0.2 km',
        ],
    },
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
    for (const { profile, strings, turns, A, B, hasAttributes } of routes) {
        await clickBy(By.id('se-route-start-point'));
        await clickBy(By.id('se-route-start-point-clear'), { optional: true });

        await clickBy(By.id('se-navigation-title'));

        await clickBy(By.id('se-route-finish-point'));
        await clickBy(By.id('se-route-finish-point-clear'), { optional: true });

        await selectProfile({ profile });

        await sendKeysBy(By.id('se-route-start-point'), A + '\n');
        await sendKeysBy(By.id('se-route-finish-point'), B + '\n');

        await waitBy(ROUTE_SUMMARY_SELECTOR);

        // Navigation InfoBlock is disabled by default
        await clickBy(By.id('se-route-more-information'));
        await validatePanelButtons(routeTrackPanelButtons);
        await validateInfoBlockButtons(routeTrackInfoBlockButtons);

        await validateInfoBlockStrings(strings, hasAttributes);
        await validateInfoBlockTurns(turns);

        await clickBy(By.id('se-button-back'));
        await actionIdleWait();
    }
}

export async function selectProfile({ profile }) {
    const profileButton = await clickBy(By.id('se-route-profile-' + profile), { optional: true });

    if (!profileButton || profileButton === true) {
        await clickBy(By.id('se-route-profile-dots'));
        await clickBy(By.id('se-route-profile-menu-' + profile));
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
