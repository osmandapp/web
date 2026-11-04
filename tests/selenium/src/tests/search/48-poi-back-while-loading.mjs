import { By } from 'selenium-webdriver';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import setView from '../../actions/setView.mjs';
import { clickBy, enclose, getUrl, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { driver } from '../../options.mjs';

// Back of a POI card opened from search works while the card is still loading
export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const poi = By.xpath("//*[@id='se-search-result-item'][contains(., 'Erdre-en-Anjou')]");
    const loadingUnderHeader = By.xpath(
        "//header[.//*[@id='se-back-wpt-details']]/following-sibling::*[@id='se-loading-page']"
    );

    await setView({ lat: 47.60026, lon: -0.83927, zoom: 14 });
    await clickBy(By.id('se-show-menu-search'));
    await waitBy(By.id('se-search-input'));
    await sendKeysBy(By.id('se-search-input'), "Pharmacie de l'Espérance\n");
    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(poi);

    // a slow network keeps the card loading past the Loading delay
    await driver.setNetworkConditions({
        offline: false,
        latency: 5000,
        download_throughput: 10 * 1024 * 1024,
        upload_throughput: 10 * 1024 * 1024,
    });

    await clickBy(poi);
    await clickBy(By.id('se-back-wpt-details'));
    await waitForSearchResultsUrl('back-before-loading');

    await clickBy(poi);
    await waitBy(loadingUnderHeader);
    await clickBy(By.id('se-back-wpt-details'));
    await waitForSearchResultsUrl('back-on-loading');

    await driver.deleteNetworkConditions();
    await actionFinish();
}

async function waitForSearchResultsUrl(tag) {
    await enclose(async () => (await getUrl()).includes('/search/result/'), { tag });
}
