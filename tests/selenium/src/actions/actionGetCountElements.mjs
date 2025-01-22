import { driver } from '../options.mjs';
import { By } from 'selenium-webdriver';

export default async function test({ id }) {
    return await driver.findElements(By.css(`[id^='${id}']`));
}
