import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import { assert, waitBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../../actions/actionFinish.mjs';
import { driver, ROUTE_SUMMARY_SELECTOR, url } from '../../options.mjs';

const routes = [
    {
        type: 'osmand',
        profile: 'bicycle',
        A: '50.49321, 30.52429',
        B: '50.49639, 30.51174',
        distance: 1.3,
    },
    {
        type: 'osmand',
        profile: 'car',
        A: '50.49321, 30.52429',
        B: '50.49631, 30.51184',
        distance: 1.4,
    },
];

export default async function test() {
    await actionOpenMap();

    for (const { profile, A, B, distance } of routes) {
        const newUrl =
            url.split('#')[0] +
            `navigate/?start=${encodeURIComponent(A)}&end=${encodeURIComponent(B)}&profile=${profile}#16/50.4948/30.5132`;

        await driver.get(newUrl);

        await waitBy(By.className('leaflet-interactive'));
        await validateDistance(distance);
    }

    await actionFinish();
}

async function validateDistance(expected) {
    const el = await waitBy(ROUTE_SUMMARY_SELECTOR);
    const text = await el.getText();
    const actual = Number(text.match(/(\d+(?:\.\d+)?)\s*km/)?.[1]);

    await assert(Math.abs(actual - expected) <= 0.1, `Expected route distance ${expected} km, got "${text}"`);
}
