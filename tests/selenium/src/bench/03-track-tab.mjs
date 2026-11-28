import { By } from 'selenium-webdriver';
import { matchPointsCount, measureInPage, waitBy } from '../lib.mjs';
import { driver } from '../options.mjs';
import { uploadGeneratedTrack } from '../util.mjs';
import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { MS, record } from '../../../bench.mjs';

const TRACKS = [
    { name: 'bench-plain-5k', points: 5000, size: '5k' },
    { name: 'bench-track-tab-50k', points: 50000, size: '50k' },
];
const SCROLL_TO_END = `
    const scroller = document.getElementById('se-tab-panels-scroller');
    scroller.scrollTop = scroller.scrollHeight;
`;

export default async function test() {
    for (const { name, points, size } of TRACKS) {
        await actionOpenMap();
        await uploadGeneratedTrack(name, points);
        await (await waitBy(By.id('se-local-track-' + name))).click();
        await matchPointsCount(points);

        const tab = await waitBy(By.css("[testid='se-tab-track']"));
        record(
            `17.5 Track tab of ${size}`,
            await measureInPage(() => tab.click(), "document.getElementById('se-track-point-0')"),
            MS
        );
        const scroll = await measureInPage(
            () => driver.executeScript(SCROLL_TO_END),
            `document.getElementById('se-track-point-${points - 1}')`
        );
        record(`17.5 scroll the Track tab of ${size} to the end`, scroll, MS);
    }

    await actionFinish();
}
