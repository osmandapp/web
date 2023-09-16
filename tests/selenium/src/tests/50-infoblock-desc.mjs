import actionOpenMap from '../actions/actionOpenMap.mjs';
import { matchTextBy, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionUploadGpx from '../actions/actionUploadGpx.mjs';

const TEST_GPX_FILE = 'test-infoblock-desc.gpx';
const DESC = '1 test\n' + '2 test\n' + '3 test\n' + 'www.osmand.net';
export default async function test() {
    await actionOpenMap();
    await actionUploadGpx({ mask: TEST_GPX_FILE });
    await matchTextBy(By.id('se-infoblock-desc'), DESC);
    await waitBy(By.xpath("//a[@href='http://www.osmand.net']"));
}
