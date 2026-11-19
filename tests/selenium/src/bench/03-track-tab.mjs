import { By } from 'selenium-webdriver';
import { matchPointsCount, measureInPage, waitBy } from '../lib.mjs';
import { driver } from '../options.mjs';
import { uploadGeneratedTrack } from '../util.mjs';
import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { MS, record } from '../../../bench.mjs';

// the tab of a 50k track crashes the page, so the tab is measured on 5k
const TRACK = 'bench-plain-5k';
const POINTS = 5000;

export default async function test() {
    await actionOpenMap();
    await uploadGeneratedTrack(TRACK, POINTS);
    await (await waitBy(By.id('se-local-track-' + TRACK))).click();
    await matchPointsCount(POINTS);

    const tab = await waitBy(By.css("[testid='se-tab-track']"));
    record(
        '17.5 Track tab of 5k',
        await measureInPage(() => tab.click(), "document.getElementById('se-track-point-0')"),
        MS
    );
    const scroll = await measureInPage(
        () => driver.executeScript(`document.getElementById('se-track-point-${POINTS - 1}').scrollIntoView()`),
        'true'
    );
    record('17.5 scroll the Track tab of 5k to the end', scroll, MS);

    await actionFinish();
}
