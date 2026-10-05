import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import { matchTextBy, waitBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../../actions/actionFinish.mjs';
import { driver, ROUTE_SUMMARY_SELECTOR, url } from '../../options.mjs';

const routes = [
    {
        type: 'osmand',
        profile: 'bicycle',
        A: '50.49321, 30.52429',
        B: '50.49639, 30.51174',
        check: /1\.[1-3] km/, // 1.2
    },
    {
        type: 'osmand',
        profile: 'car',
        A: '50.49321, 30.52429',
        B: '50.49631, 30.51184',
        check: /1\.[3-5] km/, // 1.4
    },
];

export default async function test() {
    await actionOpenMap();

    for (const { profile, A, B, check } of routes) {
        const newUrl =
            url.split('#')[0] +
            `navigate/?start=${encodeURIComponent(A)}&end=${encodeURIComponent(B)}&profile=${profile}#16/50.4948/30.5132`;

        await driver.get(newUrl);

        await waitBy(By.className('leaflet-interactive'));
        await matchTextBy(ROUTE_SUMMARY_SELECTOR, check);
    }

    await actionFinish();
}
