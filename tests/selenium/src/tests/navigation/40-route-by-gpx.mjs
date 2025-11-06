'use strict';

import { resolve } from 'node:path';
import { By } from 'selenium-webdriver';

import { enclose, waitBy, clickBy, matchTextBy, matchValueBy, navigateHash } from '../../lib.mjs';

import actionOpenMap from '../../actions/map/actionOpenMap.mjs';

const TEST_GPX_FILE = 'test-routed-osrm.gpx';
const GO_CENTER_HASH = '#14/50.3837/30.4944';
const CHECK_START = /50\.(39743|39753|39737), 30\.(50982|50947|51001)/;
const CHECK_END = '50.36917, 30.52727';
const CAR = /1[12]\.[0-9] km, 0:2[0-9] min/;
const BIKE = /1[12]\.[0-9] km, 0:5[0-9] min/;
const FOOT = /1[12]\.[0-9] km, [34]:[0-9][0-9] min/;

export default async function test() {
    await actionOpenMap();

    await clickBy(By.id('se-show-menu-navigation'));

    // upload and move map to the center of gpx track
    await enclose(uploader, { tag: 'upload gpx' });
    await navigateHash(GO_CENTER_HASH);

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
    await validateRouteInfo('car', CAR);
    await validateRouteInfo('bicycle', BIKE);
    await validateRouteInfo('pedestrian', FOOT, true);
}

const uploader = async () => {
    const element = await waitBy(By.id('contained-button-route'));
    await element.sendKeys(resolve('gpx', TEST_GPX_FILE));
    return true;
};

const validateRouteInfo = async (profile, km, fromMenu = false) => {
    if (fromMenu) {
        await clickBy(By.id('se-route-profile-dots'));
        await waitBy(By.id('se-route-profile-menu-' + profile));
        await clickBy(By.id('se-route-profile-menu-' + profile));
    } else {
        await waitBy(By.id('se-route-profile-' + profile));
        await clickBy(By.id('se-route-profile-' + profile));
    }
    await matchTextBy(By.id('se-route-info'), km);
};
