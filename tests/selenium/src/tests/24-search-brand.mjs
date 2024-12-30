import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { clickBy, sendKeysBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import { driver } from '../options.mjs';

export default async function test() {
    await actionOpenMap("#14/50.4432/30.4995");
    await actionLogIn();

    const searchWord = 'silpo';

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-search'));

    await waitBy(By.id('se-search-input'));

    await sendKeysBy(By.id('se-search-input'), searchWord + '\n');
    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-search-results'));

    await waitBy(By.id("se-search-result-Silpo"));
    await waitBy(By.id("se-Brand (english)"));

    await clickBy(By.id('se-search-result-Silpo'));
    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-search-results'));

    const searchResultElements = await driver.findElements(By.css("[id^='se-search-result-']"));
    console.log(`Количество элементов с 'se-search-result-': ${searchResultElements.length}`);


    await actionFinish();
}