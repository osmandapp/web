import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionGetCountElements from '../../actions/actionGetCountElements.mjs';
import { clickBy, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import actionCheckPoi from '../../actions/map/actionCheckPoi.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';

export default async function test() {
    await actionOpenMap('#14/50.4432/30.4995');
    await actionLogIn();

    const searchWord1 = 'Silpo';
    const searchWord2 = 'Сільпо';

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-search'));
    await actionIdleWait();
    await waitBy(By.id('se-search-input'));

    await sendKeysBy(By.id('se-search-input'), searchWord1 + '\n');
    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-search-results'));

    await waitBy(By.id(`se-search-result-${searchWord1}`));
    await waitBy(By.id('se-Brand (english)'));

    await clickBy(By.id(`se-search-result-${searchWord1}`));
    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-search-results'));

    let searchResultElements = await actionGetCountElements({ id: 'se-search-result-' });
    if (searchResultElements.length < 7) {
        throw new Error('Search results not enough');
    }

    await actionCheckPoi({ iconWpt: 'shop_supermarket', name: searchWord2 });
    await actionIdleWait();
    await waitBy(By.id('se-search-input-back'));
    await clickBy(By.id('se-search-input-back'));
    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-search-input'));

    await sendKeysBy(By.id('se-search-input'), searchWord2 + '\n');
    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-search-results'));

    await waitBy(By.id(`se-search-result-${searchWord2}`));
    await waitBy(By.id('se-Brand'));

    await clickBy(By.id(`se-search-result-${searchWord2}`));
    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-search-results'));

    searchResultElements = await actionGetCountElements({ id: 'se-search-result-' });
    if (searchResultElements.length < 7) {
        throw new Error('Search results not enough');
    }

    await actionCheckPoi({ iconWpt: 'shop_supermarket', name: searchWord2 });

    await actionFinish();
}
