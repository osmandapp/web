'use strict';

import { resolve } from 'node:path';
import { By } from 'selenium-webdriver';

import { enclose, waitBy, clickBy, matchTextBy, matchValueBy, navigateHash } from '../lib.mjs';

import actionOpenMap from '../actions/actionOpenMap.mjs';

const TEST_GPX_FILE = 'test-routed-osrm.gpx';
const GO_CENTER_HASH = '#14/50.3837/30.4944';
const CHECK_START = '50.39743, 30.50982';
const CHECK_END = '50.36917, 30.52727';
const CAR = /12\.7 km, 0:23 min/;
const BIKE = /12\.8 km, 0:56 min/;
const FOOT = /13\.6 km, 4:03 min/;

export default async function test() {
    await actionOpenMap();

    await clickBy(By.id('se-show-menu-navigation'));

    // upload and move map to the center of gpx track
    await enclose(uploader, { tag: 'upload gpx' });
    await navigateHash(GO_CENTER_HASH);

    // validate start, end points, and profiles
    await validateRouteInfo('car', CAR);
    await validateRouteInfo('bicycle', BIKE);
    await validateRouteInfo('pedestrian', FOOT);

    // wait for and close info-block (optional)
    // match coordinates of start/finish points
    await enclose(
        async () => {
            await clickBy(By.id('se-button-back'), { optional: true });
            return (
                (await matchValueBy(By.id('se-route-start-point'), CHECK_START)) &&
                (await matchValueBy(By.id('se-route-finish-point'), CHECK_END))
            );
        },
        { tag: 'check-start-finish' }
    );
}

const uploader = async () => {
    const element = await waitBy(By.id('contained-button-route'));
    await element.sendKeys(resolve('gpx', TEST_GPX_FILE));
    return true;
};

const validateRouteInfo = async (profile, km) => {
    // clickBy() seems unstable with MUI <Select>
    // await clickBy(By.id('se-route-select')); // <Select> list is not always open
    // await clickBy(By.id('se-route-profile-' + profile)); // often failed on waitBy()

    // enclose-wrapper
    // wait for success click
    const clicker = async () => {
        await clickBy(By.id('se-button-back'), { optional: true });
        await clickBy(By.id('se-route-select'), { optional: true });
        const clicked = await clickBy(By.id('se-route-profile-' + profile), { optional: true });

        // clickBy (optional) might return true when the element was not found
        if (clicked && clicked !== true) {
            return clicked;
        }

        return false;
    };

    await enclose(clicker, { tag: 'clicker ' });

    await matchTextBy(By.id('se-route-info'), km); // Route: 157.7 km
};
