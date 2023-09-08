// import { strict as assert } from 'node:assert';
// import { By, Key, until } from 'selenium-webdriver';

import openMapAndWaitLoaded from '../actions/openMapAndWaitLoaded.mjs';

export default async function test(props) {
    // const { driver, url } = props; // driver, url, mobile, headless

    await openMapAndWaitLoaded(props);

    // await driver.get(url);

    // await driver.actions().pause(1000).perform();
}
