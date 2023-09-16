'use strict';

import { resolve } from 'node:path';
import { By } from 'selenium-webdriver';

import { enclose, waitBy, clickBy, matchTextBy, matchValueBy, navigateHash } from '../lib.mjs';

import actionOpenMap from '../actions/actionOpenMap.mjs';

const TEST_GPX_FILE = 'test-routed-osmand.gpx';
const GO_CENTER_HASH = '#10/48.4716/23.7064';
const CHECK_START = '48.61650, 23.68181';
const CHECK_END = '48.61421, 23.70352';
const CAR = '157.7 km';
const BIKE = '162.3 km';
const FOOT = '161.1 km';

export default async function test() {
    await actionOpenMap();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-route'), { optional: true });

    // upload and move map to the center of gpx track
    await enclose(uploader, { tag: 'upload gpx' });
    await navigateHash(GO_CENTER_HASH);

    // validate start, end points, and profiles
    await matchValueBy(By.id('se-route-start-point'), CHECK_START);
    await matchValueBy(By.id('se-route-end-point'), CHECK_END);
    await validateRouteInfo('car', CAR);
    await validateRouteInfo('bicycle', BIKE);
    await validateRouteInfo('pedestrian', FOOT);
}

const validateRouteInfo = async (profile, km) => {
    await clickBy(By.id('se-route-select'));
    await clickBy(By.id('se-route-profile-' + profile));
    await matchTextBy(By.id('se-route-info'), km); // Route: 157.7 km
};

const uploader = async () => {
    const element = await waitBy(By.id('contained-button-route'));
    await element.sendKeys(resolve('gpx', TEST_GPX_FILE));
    return true;
};
