import actionOpenMap from '../actions/actionOpenMap.mjs';
import { clickBy, matchInnerTextBy, sendKeysBy, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../actions/actionFinish.mjs';
import { selectProfile } from './42-route-info-block.mjs';

const routes = [
    {
        type: 'osmand',
        profile: 'bicycle',
        A: '50.49321, 30.52429',
        B: '50.49639, 30.51174',
        hasAttributes: false,
        strings: ['Route: 1.3 km, 0:07 min.', '100 / 101 / 103 m'],
        srtm: 'Elevation (Satellite): 101 / 102 / 103 m',
    },
    {
        type: 'osmand',
        profile: 'car',
        A: '50.49321, 30.52429',
        B: '50.49631, 30.51184',
        hasAttributes: false,
        strings: ['Route: 1.4 km, 0:04 min.', '100 / 101 / 103 m'],
        srtm: 'Elevation (Satellite): 101 / 101 / 103 m',
    },
];

export default async function test() {
    await actionOpenMap();
    await clickBy(By.id('se-show-menu-navigation'));

    for await (const { type, profile, strings, A, B, srtm } of routes) {
        await clickBy(By.id('se-clear-route-start-point'));
        await clickBy(By.id('se-clear-route-finish-point'));

        await selectProfile({ type, profile });

        await sendKeysBy(By.id('se-route-start-point'), A + '\n');
        await sendKeysBy(By.id('se-route-finish-point'), B + '\n');
        await waitBy(By.className('leaflet-interactive'));
        await clickBy(By.id('se-route-more-information'));

        await validateInfoBlockStrings(strings);
        await clickBy(By.id('se-link-srtm'));
        let matched = await matchInnerTextBy(By.id('se-infoblock-all'), srtm, true);
        if (!matched) {
            console.warn(`SRTM elevation is not working (${profile}).`);
        }
        await clickBy(By.id('se-button-back'));
    }

    await actionFinish();
}

async function validateInfoBlockStrings(strings) {
    for await (const match of strings) {
        await matchInnerTextBy(By.id('se-infoblock-all'), match);
    }
}
