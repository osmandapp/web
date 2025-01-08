import { driver } from '../options.mjs';
import { By } from 'selenium-webdriver';

export default async function test(id) {
    const element = await driver.findElement(By.id(id));
    return (await element.getAttribute('disabled')) !== null;
}
