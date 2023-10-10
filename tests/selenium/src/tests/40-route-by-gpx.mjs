'use strict';

import { resolve } from 'node:path';
import { By } from 'selenium-webdriver';

import { enclose, waitBy, clickBy, matchTextBy, matchValueBy, navigateHash } from '../lib.mjs';

import actionOpenMap from '../actions/actionOpenMap.mjs';

const TEST_GPX_FILE = 'test-routed-osmand.gpx';
const GO_CENTER_HASH = '#10/48.4716/23.7064';
const CHECK_START = '48.61650, 23.68181';
const CHECK_END = '48.61421, 23.70352';
const CAR = /157.[79] km/;
const BIKE = /162.[348] km/;
const FOOT = '161.1 km';

export default async function test() {
    await actionOpenMap();

    await clickBy(By.id('se-show-menu-navigation'));

    // upload and move map to the center of gpx track
    await enclose(uploader, { tag: 'upload gpx' });
    await navigateHash(GO_CENTER_HASH);

    await clickBy(By.id('se-button-back'));
    // validate start, end points, and profiles
    await matchValueBy(By.id('se-route-start-point'), CHECK_START);
    await matchValueBy(By.id('se-route-finish-point'), CHECK_END);
    await validateRouteInfo('car', CAR);
    await validateRouteInfo('bicycle', BIKE);
    await validateRouteInfo('pedestrian', FOOT);
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
        await clickBy(By.id('se-route-select'), { optional: true });
        const clicked = await clickBy(By.id('se-route-profile-' + profile), { optional: true });

        // clickBy (optional) might return true when the element was not found
        if (clicked && clicked !== true) {
            return clicked;
        }

        return false;
    };

    await enclose(clicker);
    await clickBy(By.id('se-button-back'), { optional: true });
    await matchTextBy(By.id('se-route-info'), km); // Route: 157.7 km
};
