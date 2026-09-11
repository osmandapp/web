import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import {
    clickBy,
    enclose,
    getUrl,
    leftClickBy,
    matchInnerTextBy,
    matchTextBy,
    matchValueBy,
    navigateHash,
    waitBy,
    waitByRemoved,
} from '../../lib.mjs';
import { By } from 'selenium-webdriver';

const MVT_STYLE_KEY = 'mvt-osmand';

const NOVUS = { hash: '#17/50.45146/30.52493', lat: 50.450943, lon: 30.522257, name: 'NOVUS', osmId: '1420181775' };
const STOP = { hash: '#17/50.45115/30.51999', lat: 50.451286, lon: 30.521606, id: '4477679190' };
const HOUSE = { hash: '#18/50.45094/30.52170', lat: 50.451394, lon: 30.523673, number: '2' };

async function openMvtObject({ hash, lat, lon }) {
    await navigateHash(hash);
    await leftClickBy(lat, lon);
    await waitBy(By.id('se-wpt-details'));
}

// the url is set after the object is loaded
async function waitUrlIncludes(part) {
    await enclose(async () => (await getUrl()).includes(part), { tag: `url includes ${part}` });
}

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    // switch the map to OsmAnd vector tiles
    await clickBy(By.id('se-show-menu-configuremap'));
    await waitBy(By.id('se-configure-map-menu-name'));
    await clickBy(By.id('se-configure-map-style'));
    await clickBy(By.id(`se-configure-map-style-${MVT_STYLE_KEY}`));
    await actionIdleWait({ tiles: true });
    await waitBy(By.css('.maplibregl-canvas'));

    // poi: header, tags, url
    await openMvtObject(NOVUS);
    await matchTextBy(By.id('se-wpt-name'), NOVUS.name);
    await waitBy(By.id('se-Supermarket'));
    await waitBy(By.css("#se-wpt-details image[href*='shop_supermarket']"));
    await waitBy(By.id('se-wpt-address'));
    const details = By.id(`se-poi-infoblock-${NOVUS.name}`);
    await matchInnerTextBy(details, 'novus.ua');
    await matchInnerTextBy(details, NOVUS.osmId);
    await matchInnerTextBy(details, `${NOVUS.lat}, ${NOVUS.lon}`);
    await waitUrlIncludes(`poi/?name=${NOVUS.name}&type=supermarket&pin=${NOVUS.lat},${NOVUS.lon}`);

    // add to favorites: the panel opens
    await clickBy(By.id('se-add-poi-to-fav-item'));
    await waitBy(By.id('se-add-fav-dialog'));
    await clickBy(By.id('se-close-add-wpt-panel'));
    await waitByRemoved(By.id('se-add-fav-dialog'));

    // share: the notification
    await openMvtObject(NOVUS);
    await clickBy(By.id('se-share-fav-item'));
    await waitBy(By.id('se-notification'));

    // directions from: navigation with the poi as start
    await clickBy(By.id('se-direction-from-fav-item'));
    await waitBy(By.id('se-navigation-title'));
    await matchValueBy(By.id('se-route-start-point'), NOVUS.name);
    await waitUrlIncludes('navigate/');
    await clickBy(By.id('se-button-close'));

    // navigation: the poi as finish
    await openMvtObject(NOVUS);
    await matchTextBy(By.id('se-wpt-name'), NOVUS.name);
    await clickBy(By.id('se-navigation-fav-item'));
    await waitBy(By.id('se-navigation-title'));
    await matchValueBy(By.id('se-route-finish-point'), NOVUS.name);
    await clickBy(By.id('se-button-close'));

    // transport stop: routes
    await openMvtObject(STOP);
    await waitBy(By.css("[id^='se-transport-route-']"));
    await waitUrlIncludes(`stop/?id=${STOP.id}`);

    // house: number, type, icon
    await openMvtObject(HOUSE);
    await matchTextBy(By.id('se-wpt-name'), HOUSE.number);
    await waitBy(By.id('se-House'));
    await waitBy(By.css('#se-wpt-details svg'));
    await waitBy(By.id('se-wpt-address'));
    await waitUrlIncludes('poi/?pin=');

    await actionFinish();
}
