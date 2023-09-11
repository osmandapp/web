// import { strict as assert } from 'node:assert';
import { By } from 'selenium-webdriver'; // By, Key, until
import { clickBy } from '../lib.mjs';
import openMapAndWaitLoaded from '../actions/openMapAndWaitLoaded.mjs';
import uploadTestGpxTracks from '../actions/uploadTestGpxTracks.mjs';
import finalIdleWait from '../actions/finalIdleWait.mjs';

export default async function test(props) {
    const { mobile } = props; // driver, url, mobile, headless

    // common: startup
    await openMapAndWaitLoaded(props);

    // open main menu first (on mobile)
    mobile && (await clickBy(props, By.id('se-main-menu')));

    // open tracks menu before gpx upload
    await clickBy(props, By.id('se-menu-tracks'));

    // distinct action
    await uploadTestGpxTracks(props, { mask: '*.gpx', multiple: true });

    // common: finish
    await finalIdleWait(props);
}
