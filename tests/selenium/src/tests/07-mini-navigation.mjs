import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import { waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../actions/actionFinish.mjs';
import { driver, url } from '../options.mjs';

const routes = [
    {
        type: 'osmand',
        profile: 'bicycle',
        A: '50.49321, 30.52429',
        B: '50.49639, 30.51174',
        hasAttributes: false,
    },
    {
        type: 'osmand',
        profile: 'car',
        A: '50.49321, 30.52429',
        B: '50.49631, 30.51184',
        hasAttributes: false,
    },
];

export default async function test() {
    await actionOpenMap();

    for await (const { profile, A, B } of routes) {
        const newUrl =
            url.split('#')[0] +
            `navigate/?start=${encodeURIComponent(A)}&end=${encodeURIComponent(B)}&profile=${profile}#16/50.4948/30.5132`;

        await driver.get(newUrl);

        await waitBy(By.className('leaflet-interactive'));
        await validateInfo();
    }

    await actionFinish();
}

async function validateInfo() {
    try {
        const el = await driver.findElement(By.id('se-route-info'));
        const text = await el.getText();

        // get all numbers from the text
        const numbers = text.match(/\d+(\.\d+)?/g)?.map(Number) || [];

        // check that all numbers are positive
        return numbers.length > 0 && numbers.every((n) => n > 0);
    } catch {
        return false;
    }
}
