// import { strict as assert } from 'node:assert';
import { By } from 'selenium-webdriver'; // By, Key, until

import { click } from '../lib.mjs';
import openMapAndWaitLoaded from '../actions/openMapAndWaitLoaded.mjs';

export default async function test(props) {
    const { driver } = props; // driver, url, mobile, headless

    await openMapAndWaitLoaded(props);

    await click(props, By.id('se-menu-tracks'));

    await click(props, By.id('se-button-upload-gpx'));

    await driver.actions().pause(1000).perform();
}
