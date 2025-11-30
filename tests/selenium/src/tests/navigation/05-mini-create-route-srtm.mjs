import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import { clickBy, matchInnerTextBy, sendKeysBy, waitBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../../actions/actionFinish.mjs';
import { selectProfile } from './42-route-info-block.mjs';
import { ROUTE_SUMMARY_SELECTOR } from '../../options.mjs';

const routes = [
    {
        type: 'osmand',
        profile: 'bicycle',
        A: '50.49321, 30.52429',
        B: '50.49639, 30.51174',
        hasAttributes: false,
        strings: [/Route: 1\.[234] km, 0:0[678] min/, '100 / 101 / 103 m'],
        srtm: 'Elevation (Satellite): 101 / 102 / 103 m',
    },
    {
        type: 'osmand',
        profile: 'car',
        A: '50.49321, 30.52429',
        B: '50.49631, 30.51184',
        hasAttributes: false,
        strings: [/Route: 1\.[456] km, 0:0[345] min/, '101 / 101 / 103 m'],
        srtm: 'Elevation (Satellite): 101 / 101 / 103 m',
    },
];

export default async function test() {
    await actionOpenMap();
    await clickBy(By.id('se-show-menu-navigation'));

    for (const { profile, strings, A, B, srtm } of routes) {
        await clickBy(By.id('se-route-start-point'));
        await clickBy(By.id('se-route-start-point-clear'), { optional: true });

        await clickBy(By.id('se-navigation-title'));

        await clickBy(By.id('se-route-finish-point'));
        await clickBy(By.id('se-route-finish-point-clear'), { optional: true });

        await selectProfile({ profile });

        await sendKeysBy(By.id('se-route-start-point'), A + '\n');
        await sendKeysBy(By.id('se-route-finish-point'), B + '\n');
        await waitBy(By.className('leaflet-interactive'));
        await waitBy(ROUTE_SUMMARY_SELECTOR);
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
    for (const match of strings) {
        await matchInnerTextBy(By.id('se-infoblock-all'), match);
    }
}
