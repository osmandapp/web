import { clickOnMapCenter, waitBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test() {
    await clickOnMapCenter();
    await waitBy(By.id('se-context-menu'));
}
