import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import { clickBy, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../../actions/actionFinish.mjs';
import actionCheckPoi from '../../actions/map/actionCheckPoi.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const accommodation = 'Accommodation';
    const leisure = 'Leisure';

    // 1. Search home category grid: pick Accommodation, check list + map markers.
    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-search'));
    await waitBy(By.id('se-default-search-categories'));
    await clickBy(By.id(`se-default-search-categories-item-${accommodation}`));
    await waitBy(By.id('se-search-results'));
    await waitBy(By.id('se-search-result-item-accomodation-0'));
    await actionCheckPoi({ iconWpt: 'tourism_hotel', name: 'Maidan Palace Hotel' });

    // 2. Text search, tap category row, same list + map checks.
    await clickBy(By.id('se-search-input-cancel'));
    await waitBy(By.id('se-empty-search'));
    await sendKeysBy(By.id('se-search-input'), accommodation);
    await clickBy(By.id('se-search-input-search'));
    await waitByRemoved(By.id('se-loading-page'));
    const summaryRow = By.id(`se-search-result-${accommodation}`);
    await waitBy(summaryRow);
    await clickBy(summaryRow);
    await waitBy(By.id('se-search-results'));
    await waitBy(By.id('se-search-result-item-accomodation-0'));
    await actionCheckPoi({ iconWpt: 'tourism_hotel', name: 'Maidan Palace Hotel' });

    // 3. Back to main search; accommodation POIs should disappear.
    await clickBy(By.id('se-search-input-back'));
    await waitBy(By.id('se-default-search-categories'));

    // 4. All categories → Leisure; verify list + markers, then back and clear.
    await clickBy(By.id('se-search-categories-show-all'));
    await waitBy(By.id('se-search-categories-list'));
    await clickBy(By.id(`se-search-categories-list-item-${leisure}`));
    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-search-results'));
    await waitBy(By.id('se-search-result-item-entertainment-0'));
    await waitBy(By.css("[id^='se-poi-marker-icon-bench-']"));

    await clickBy(By.id('se-search-input-back'));
    await waitBy(By.id('se-default-search-categories'));
    await waitByRemoved(By.css("[id^='se-poi-marker-icon-bench-']"));

    // 5. All categories again: filter by prefix, Accommodation still listed.
    await clickBy(By.id('se-search-categories-show-all'));
    await waitBy(By.id('se-search-categories-list'));
    await sendKeysBy(By.id('se-search-input'), 'Accom' + '\n');
    await waitBy(By.id('se-search-categories-box'));
    await waitBy(By.id(`se-search-categories-list-item-${accommodation}`));

    await actionFinish();
}
