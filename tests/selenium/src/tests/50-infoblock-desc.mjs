import actionOpenMap from '../actions/actionOpenMap.mjs';
import { clickBy, enclose, matchTextBy, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import { resolve } from 'node:path';
import actionIdleWait from '../actions/actionIdleWait.mjs';
import { driver } from '../options.mjs';

const TEST_GPX_FILE = 'test-infoblock-desc.gpx';
const DESC = '1 test\n' + '2 test\n' + '3 test\n' + 'www.osmand.net';
export default async function test() {
    await actionOpenMap();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'), { optional: true });

    await enclose(uploader, { tag: 'upload gpx' });
    await actionIdleWait();
    await matchTextBy(By.id('se-infoblock-desc'), DESC);
    await driver.findElement(By.xpath("//a[@href='http://www.osmand.net']")).click();
}

const uploader = async () => {
    const element = await waitBy(By.id('se-upload-gpx'));
    await element.sendKeys(resolve('gpx', TEST_GPX_FILE));
    return true;
};
