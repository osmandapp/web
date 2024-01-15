import { clickBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test() {
    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-favorites'));
    await waitByRemoved(By.id('se-progress'));
}
