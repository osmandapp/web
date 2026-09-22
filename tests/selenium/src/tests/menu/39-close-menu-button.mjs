import { By, Key } from 'selenium-webdriver';
import {
    assert,
    clickBy,
    enclose,
    enumerateIds,
    expectInputExactBy,
    getMapHash,
    leftClickBy,
    sendKeysBy,
    waitBy,
    waitByRemoved,
} from '../../lib.mjs';
import { driver } from '../../options.mjs';
import { getFiles } from '../../util.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionOpenFavorites from '../../actions/favorites/actionOpenFavorites.mjs';
import actionDeleteAllFavorites from '../../actions/favorites/actionDeleteAllFavorites.mjs';
import actionDeleteFavGroup from '../../actions/favorites/actionDeleteFavGroup.mjs';
import actionsUploadFavorites from '../../actions/favorites/actionsUploadFavorites.mjs';
import actionCreateNewFolder from '../../actions/actionCreateNewFolder.mjs';
import actionDeleteFolder from '../../actions/actionDeleteFolder.mjs';
import actionImportCloudTrack from '../../actions/tracks/actionImportCloudTrack.mjs';
import setView from '../../actions/setView.mjs';

const CLOSE_MENU_BUTTON = By.id('se-close-menu-button');

// a street is shown on the map as a search marker, not as a POI (a POI opens its own URL)
const STREET_VIEW = { lat: 52.3745, lon: 4.8963, zoom: 16 };
const STREET_QUERY = 'Damrak';
const STREET_TYPE = 'STREET';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favGroupName = 'favorites-shops';
    const shortFavGroupName = 'shops';
    const wptName = 'Test wpt';
    const trackFolder = 'close menu button';
    const trackName = 'test-routed-osrm';

    const favorites = getFiles({ folder: 'favorites' });

    // prepare
    await actionOpenFavorites();
    await actionDeleteAllFavorites(favorites);
    const { path } = favorites.find((t) => t.name === favGroupName);
    await clickBy(By.id('se-import-fav-group'));
    await actionsUploadFavorites({ files: path });
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));

    await setView({ lat: 50, lon: 25, zoom: 10 });
    await actionIdleWait();

    // --- My Places: Close closes the favorite and the menu, keeps the map, resets the opened folder ---
    await openFavoriteFromGroup(shortFavGroupName, wptName);
    await closeMenuKeepingMap(By.id(`se-fav-item-info-${wptName}`));
    await waitByRemoved(By.id(`se-opened-fav-group-${shortFavGroupName}`));

    // the next opening starts from the list of folders, not from the opened folder or favorite
    await actionOpenFavorites();
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));
    await waitByRemoved(By.id(`se-fav-item-info-${wptName}`));

    // --- Esc closes the menu the same way ---
    await openFavoriteFromGroup(shortFavGroupName, wptName);
    await waitBy(CLOSE_MENU_BUTTON);
    await driver.actions().sendKeys(Key.ESCAPE).perform();
    await waitByRemoved(By.id(`se-fav-item-info-${wptName}`));
    await waitByRemoved(CLOSE_MENU_BUTTON);

    // --- Search: Close of a result opened from the search results resets the query and the results ---
    // the results list itself has no app bar, so it has no Close (checked inside submitSearchQuery)
    await clickBy(By.id('se-show-menu-search'));
    await submitSearchQuery(wptName);
    await clickBy(By.id(`se-search-result-fav-${wptName}`));
    await waitBy(By.id(`se-fav-item-info-${wptName}`));
    await waitBy(CLOSE_MENU_BUTTON);

    await clickBy(CLOSE_MENU_BUTTON);
    await waitByRemoved(By.id(`se-fav-item-info-${wptName}`));
    await waitByRemoved(CLOSE_MENU_BUTTON);
    await clickBy(By.id('se-show-menu-search'));
    await expectCleanSearch();

    // --- Search: no Close for an object opened from the map over the search results ---
    // the object has its own X, Close and Esc would drop the whole search
    await setView(STREET_VIEW);
    await actionIdleWait({ tiles: true });
    await submitSearchQuery(STREET_QUERY);
    const street = await findSearchMarker(STREET_TYPE);
    await leftClickBy(street.lat, street.lng);
    await waitBy(By.id('se-close-wpt-details'));
    await waitByRemoved(CLOSE_MENU_BUTTON);

    await driver.actions().sendKeys(Key.ESCAPE).perform();
    await waitBy(By.id('se-close-wpt-details'), { idle: true });

    // X returns to the search results, which are left by the Back button of the search input
    await clickBy(By.id('se-close-wpt-details'));
    await waitBy(By.id('se-search-results'));
    await waitByRemoved(CLOSE_MENU_BUTTON);
    await clickBy(By.id('se-search-input-back'));
    await expectCleanSearch();

    // --- Search: a wiki place closed by Close opens again ---
    await waitByRemoved(By.id('se-wiki-place-progress'));
    await waitBy(By.id('se-wiki-places-items'));
    const [wikiPlaceId] = await enumerateIds('se-wiki-place-');
    await openWikiPlace(wikiPlaceId);
    await clickBy(CLOSE_MENU_BUTTON);
    await waitByRemoved(By.id('se-wpt-details'));
    await waitByRemoved(CLOSE_MENU_BUTTON);

    await clickBy(By.id('se-show-menu-search'));
    await openWikiPlace(wikiPlaceId);
    await clickBy(CLOSE_MENU_BUTTON);
    await waitByRemoved(By.id('se-wpt-details'));

    // --- Search: Close on the Explore list, without a selected place ---
    await clickBy(By.id('se-show-menu-search'));
    await waitBy(By.id('se-wiki-places-items'));
    await clickBy(By.id('se-show-all-wiki-place'));
    await waitBy(By.id('se-explore-menu-name'));
    await clickBy(CLOSE_MENU_BUTTON);
    await waitByRemoved(By.id('se-explore-menu-name'));
    await waitByRemoved(CLOSE_MENU_BUTTON);

    // the next opening starts from the search screen, not from the Explore list
    // (se-default-search-categories inside expectCleanSearch cannot coexist with the Explore list)
    await clickBy(By.id('se-show-menu-search'));
    await expectCleanSearch();

    // --- Tracks: Close closes the track and the menu, keeps the map, resets the opened folder ---
    await clickBy(By.id('se-show-menu-tracks'));
    await actionCreateNewFolder(trackFolder);
    await clickBy(By.id(`se-menu-cloud-${trackFolder}`));
    await waitBy(By.id('se-back-folder-button-tracks'));
    await clickBy(By.id('se-import-cloud-track'));
    await actionImportCloudTrack(getFiles({ folder: 'gpx' }), trackName);

    await clickBy(By.id(`se-cloud-track-${trackName}`));
    await waitBy(By.id('se-track-context-menu'));
    await waitBy(CLOSE_MENU_BUTTON);
    await closeMenuKeepingMap(By.id('se-track-context-menu'));

    // the next opening starts from the list of folders, not from the opened folder
    await clickBy(By.id('se-show-menu-tracks'));
    await waitBy(By.id(`se-menu-cloud-${trackFolder}`));
    await waitByRemoved(By.id('se-back-folder-button-tracks'));

    // cleanup
    await actionDeleteFolder(trackFolder);
    await actionOpenFavorites();
    await actionDeleteFavGroup(shortFavGroupName);
    await waitBy(By.id('se-empty-page'));

    await actionFinish();
}

// the search menu must be open; the results list has no app bar, so Close is not shown there
async function submitSearchQuery(query) {
    await waitBy(By.id('se-search-input'));
    await sendKeysBy(By.id('se-search-input'), `${query}\n`);
    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-search-results'));
    await waitByRemoved(CLOSE_MENU_BUTTON);
}

// Close closes the opened object and the menu, the map stays where it is
async function closeMenuKeepingMap(openedObject) {
    await actionIdleWait();
    const hashBeforeClose = await getMapHash();

    await clickBy(CLOSE_MENU_BUTTON);
    await waitByRemoved(openedObject);
    await waitByRemoved(CLOSE_MENU_BUTTON);

    await actionIdleWait();
    const hashAfterClose = await getMapHash();
    await assert(
        hashAfterClose === hashBeforeClose,
        `Close should not move the map (before: ${hashBeforeClose}, after: ${hashAfterClose})`
    );
}

// the search opens without the previous query and results
async function expectCleanSearch() {
    await waitBy(By.id('se-default-search-categories'));
    await waitByRemoved(By.id('se-search-results'));
    await expectInputExactBy(By.id('se-search-input'), '');
}

// the first map marker of the search results of the given type
async function findSearchMarker(type) {
    return await enclose(
        async () =>
            await driver.executeScript(
                `const layer = Object.values(window.__leafletMap._layers || {}).find(
                    (l) => typeof l.getLatLng === 'function' && l.options?.web_type === arguments[0]
                );
                return layer ? { lat: layer.getLatLng().lat, lng: layer.getLatLng().lng } : null;`,
                type
            ),
        { tag: 'findSearchMarker' }
    );
}

// the search menu with the wiki places must be open
async function openWikiPlace(id) {
    await clickBy(By.id(id));
    await waitBy(By.id('se-wpt-details'));
    await waitBy(CLOSE_MENU_BUTTON);
}

async function openFavoriteFromGroup(groupName, wptName) {
    await clickBy(By.id(`se-menu-fav-${groupName}`));
    await waitBy(By.id(`se-opened-fav-group-${groupName}`));
    await clickBy(By.id(`se-fav-item-name-${wptName}`));
    await waitBy(By.id(`se-fav-item-info-${wptName}`));
    await waitBy(CLOSE_MENU_BUTTON);
}
