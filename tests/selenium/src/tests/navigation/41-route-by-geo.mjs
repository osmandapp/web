'use strict';

import { By } from 'selenium-webdriver';
import { enclose, clickBy, sendKeysBy, matchTextBy, navigateHash } from '../../lib.mjs';

import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionFinish from '../../actions/actionFinish.mjs';

const routes = [
    {
        zoom: 8,
        type: 'osmand',
        profile: 'line',
        A: '38.68866, -9.17676',
        B: '41.14735, -8.64030',
        check: /27\d\.\d km/, // 277.3
    },
    {
        zoom: 12,
        type: 'osmand',
        profile: 'car',
        A: '50.07097, 19.79838',
        B: '50.03543, 20.07204',
        check: /3\d\.\d km/, // 30.8
    },
    {
        zoom: 13,
        type: 'osmand',
        profile: 'pedestrian',
        A: '48.16417, 24.53622',
        B: '48.17215, 24.42149',
        check: /1\d\.\d km/, // 11.8
    },
    {
        zoom: 14,
        type: 'osmand',
        profile: 'bicycle',
        A: '52.43852, 4.90802',
        B: '52.46022, 4.87782',
        check: /[345]\.\d km/, // 4.2
    },
];

export default async function test() {
    await actionOpenMap();

    await clickBy(By.id('se-show-menu-navigation'));

    for await (const { zoom, type, profile, check, A, B } of routes) {
        await goCenter({ A, B, zoom });

        await clickBy(By.id('se-clear-route-start-point'));
        await clickBy(By.id('se-clear-route-finish-point'));

        await selectProfile({ type, profile });

        await sendKeysBy(By.id('se-route-start-point'), A + '\n');
        await sendKeysBy(By.id('se-route-finish-point'), B + '\n');
        await clickBy(By.id('se-button-back'), { optional: true });
        await matchTextBy(By.id('se-route-info'), check);

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

async function goCenter({ A, B, zoom }) {
    const [latA, lonA] = A.replaceAll(' ', '').split(',');
    const [latB, lonB] = B.replaceAll(' ', '').split(',');

    const lat = (Number(latA) + Number(latB)) / 2;
    const lon = (Number(lonA) + Number(lonB)) / 2;

    const hash = `#${zoom}/${lat.toFixed(5)}/${lon.toFixed(5)}`;
    await navigateHash(hash);
}
