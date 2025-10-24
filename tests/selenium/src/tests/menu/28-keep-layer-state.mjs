import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenContextMenu from '../../actions/map/actionOpenContextMenu.mjs';
import actionOpenFavorites from '../../actions/favorites/actionOpenFavorites.mjs';
import actionsUploadFavorites from '../../actions/favorites/actionsUploadFavorites.mjs';
import actionDeleteFavGroup from '../../actions/favorites/actionDeleteFavGroup.mjs';
import actionAddOneTrack from '../../actions/tracks/actionAddOneTrack.mjs';
import { assert, clickBy, getUrl, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { deleteTrack, getFiles } from '../../util.mjs';

const SEARCH_URL = 'search/';
const POI_URL = 'poi/';
const WEATHER_URL = 'weather/';
const FAVORITES_URL = 'mydata/favorites/';
const TRACKS_URL = 'mydata/tracks/';
const NAVIGATE_URL = 'navigate/';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const searchCategory = 'Accommodation';
    let url;

    // Step 1: Open search menu and select category
    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-search'));
    await waitBy(By.id('se-default-search-categories'));
    await clickBy(By.id(`se-default-search-categories-item-${searchCategory}`));
    await waitBy(By.id('se-search-results'));
    await waitBy(By.id('se-search-result-item'));
    url = await getUrl();
    await assert(url.includes(SEARCH_URL), `Step 1: URL should include ${SEARCH_URL}, got: ${url}`);

    // Step 2: Go to weather and open forecast
    await clickBy(By.id('se-show-menu-weather'));
    await waitByRemoved(By.id('se-loading-page'), true);
    await waitBy(By.id('se-weather-menu-name'));
    url = await getUrl();
    await assert(url.includes(WEATHER_URL), `Step 2: URL should include ${WEATHER_URL}, got: ${url}`);
    // Open forecast details
    await clickBy(By.id('se-weather-forecast-Temperature'));
    await waitBy(By.id('se-weather-forecast-details'));
    await waitBy(By.id('se-weather-forecast-graph'));

    // Step 3: Return to search and verify results are still open
    await clickBy(By.id('se-show-menu-search'));
    await waitBy(By.id('se-search-results'));
    await waitBy(By.id('se-search-result-item'));
    url = await getUrl();
    await assert(url.includes(SEARCH_URL), `Step 3: URL should include ${SEARCH_URL}, got: ${url}`);

    // Step 4: Click on first search result and wait for waypoint details
    await clickBy(By.id('se-search-result-item'));
    await waitBy(By.id('se-wpt-details'));

    // Step 5: Open map context menu and set navigation start point
    await actionOpenContextMenu();
    await clickBy(By.id('se-direction-action-from'));
    await waitBy(By.id('se-show-menu-navigation'));
    url = await getUrl();
    await assert(url.includes(NAVIGATE_URL), `Step 5: URL should include ${NAVIGATE_URL}, got: ${url}`);
    await assert(url.includes('start'), `Step 5: URL should include 'start', got: ${url}`);

    // Step 6: Return to search and verify waypoint details are still open
    await clickBy(By.id('se-show-menu-search'));
    await waitBy(By.id('se-wpt-details'));
    url = await getUrl();
    await assert(url.includes(POI_URL), `Step 6: URL should include ${POI_URL} (POI is open), got: ${url}`);

    // Step 7: Go to favorites, upload and open a group
    await actionOpenFavorites();
    url = await getUrl();
    await assert(url.includes(FAVORITES_URL), `Step 8: URL should include ${FAVORITES_URL}, got: ${url}`);
    const favorites = getFiles({ folder: 'favorites' });
    const firstFavorite = favorites[0];
    const favGroupName = firstFavorite.name.replace('favorites-', '');
    await clickBy(By.id('se-import-fav-group'));
    await actionsUploadFavorites({ files: firstFavorite.path });
    await waitBy(By.id(`se-menu-fav-${favGroupName}`));
    // Open the favorite group
    await clickBy(By.id(`se-menu-fav-${favGroupName}`));
    await waitByRemoved(By.id(`se-menu-fav-${favGroupName}`));
    await waitBy(By.id(`se-opened-fav-group-${favGroupName}`));

    // Step 8: Return to search and verify waypoint details are still open
    await clickBy(By.id('se-show-menu-search'));
    await waitBy(By.id('se-wpt-details'));
    url = await getUrl();
    await assert(url.includes(POI_URL), `Step 9: URL should include ${POI_URL} (POI is open), got: ${url}`);

    // Step 9: Return to favorites and verify group is still open
    await actionOpenFavorites();
    await waitBy(By.id(`se-opened-fav-group-${favGroupName}`));
    url = await getUrl();
    await assert(url.includes(FAVORITES_URL), `Step 9: URL should include ${FAVORITES_URL}, got: ${url}`);

    // Cleanup favorites: Close opened group and delete uploaded favorite group
    await clickBy(By.id('se-back-folder-button-favorites'));
    await waitBy(By.id(`se-menu-fav-${favGroupName}`));
    await actionDeleteFavGroup(favGroupName);
    await waitBy(By.id('se-empty-page'));

    // Step 10: Go to tracks, upload and open a track
    const trackName = 'test-routed-osrm';
    await clickBy(By.id('se-show-menu-tracks'));
    await waitBy(By.id('se-close-folder-button-tracks'));
    url = await getUrl();
    await assert(url.includes(TRACKS_URL), `Step 10: URL should include ${TRACKS_URL}, got: ${url}`);

    await actionAddOneTrack(trackName);
    await clickBy(By.id(`se-cloud-track-${trackName}`));
    await waitBy(By.id('se-infoblock-all'));

    // Step 11: Return to navigation and verify start point is still there
    await clickBy(By.id('se-show-menu-navigation'));
    url = await getUrl();
    await assert(url.includes(NAVIGATE_URL), `Step 11: URL should include ${NAVIGATE_URL}, got: ${url}`);
    await assert(url.includes('start'), `Step 11: URL should include 'start', got: ${url}`);

    // Step 12: Return to tracks and verify track infoblock is still open
    await clickBy(By.id('se-show-menu-tracks'));
    await waitBy(By.id('se-infoblock-all'));
    url = await getUrl();
    await assert(url.includes(TRACKS_URL), `Step 12: URL should include ${TRACKS_URL}, got: ${url}`);

    // Cleanup tracks: Close track and delete it
    await clickBy(By.id('se-button-back'));
    await waitByRemoved(By.id('se-infoblock-all'));
    await deleteTrack(trackName);

    // Step 13: Return to search and test layered context menus
    await clickBy(By.id('se-show-menu-search'));
    await waitBy(By.id('se-wpt-details'));

    // Close POI context menu with back button
    await clickBy(By.id('se-back-wpt-details'));
    await waitByRemoved(By.id('se-wpt-details'));
    await waitBy(By.id('se-search-results'));
    await waitBy(By.id('se-search-result-item'));

    await actionFinish();
}
