import { By } from 'selenium-webdriver';
import { clickBy, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';

import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionUploadGpx from '../../actions/actionUploadGpx.mjs';
import actionLocalToCloud from '../../actions/tracks/actionLocalToCloud.mjs';
import actionDeleteTracksByPattern from '../../actions/tracks/actionDeleteTracksByPattern.mjs';
import actionsUploadFavorites from '../../actions/favorites/actionsUploadFavorites.mjs';
import actionOpenFavorites from '../../actions/favorites/actionOpenFavorites.mjs';
import actionDeleteAllFavorites from '../../actions/favorites/actionDeleteAllFavorites.mjs';
import actionDeleteFavGroup from '../../actions/favorites/actionDeleteFavGroup.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { deleteTrack, getFiles } from '../../util.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();
  // --- Search: track appears, then disappears after delete ---
    const trackName = 'test-track-mixed';

    await actionDeleteTracksByPattern(trackName);

    await actionUploadGpx({ mask: `${trackName}.gpx` });
    await clickBy(By.id('se-show-menu-planroute'));
    await actionLocalToCloud({ mask: trackName });

    await submitSearchQuery(trackName);

    await waitBy(By.id('se-search-results'));
    const trackResultId = `se-search-result-${trackName}.gpx`;
    await clickBy(By.id(trackResultId));
    await waitBy(By.id('se-track-context-menu'));
    await waitBy(By.id(`se-track-${trackName}`));

    await clickBy(By.id('se-button-back'));

    await waitBy(By.id('se-search-results'));
    await waitBy(By.id(trackResultId));

    await clickBy(By.id('se-show-menu-tracks'));
    await waitBy(By.id(`se-cloud-track-${trackName}`));
    await deleteTrack(trackName);

    await submitSearchQuery(trackName);

    let emptySearch = await waitBy(By.id('se-empty-search'), { optional: true });
    if (!emptySearch) {
        await waitBy(By.id('se-search-results'));
        await waitByRemoved(By.id(trackResultId));
    }

    // --- Search: favorite appears, then disappears after group delete ---
    const favGroupName = 'favorites-shops';
    const shortFavGroupName = 'shops';
    const wptName = 'Primark';

    const favorites = getFiles({ folder: 'favorites' });
    const { path } = favorites.find((t) => t.name === favGroupName);

    await actionOpenFavorites();
    await actionDeleteAllFavorites(favorites);

    await clickBy(By.id('se-import-fav-group'));
    await actionsUploadFavorites({ files: path });
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));

    await submitSearchQuery(wptName);

    await waitBy(By.id('se-search-results'));
    const favResultId = `se-search-result-fav-${wptName}`;
    await clickBy(By.id(favResultId));
    await waitBy(By.id(`se-fav-item-info-${wptName}`));

    await clickBy(By.id('se-back-wpt-details'));

    await waitBy(By.id('se-search-results'));
    await waitBy(By.id(favResultId));

    await clickBy(By.id('se-show-menu-favorites'));
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));
    await actionDeleteFavGroup(shortFavGroupName);

    await submitSearchQuery(wptName);

    emptySearch = await waitBy(By.id('se-empty-search'), { optional: true });
    if (!emptySearch) {
        await waitBy(By.id('se-search-results'));
        await waitByRemoved(By.id(favResultId));
    }
    await actionFinish();
}

async function submitSearchQuery(query) {
    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-search'));
    await waitBy(By.id('se-search-input'));
    await clickBy(By.id('se-search-input-cancel'), { optional: true });
    await sendKeysBy(By.id('se-search-input'), `${query}\n`);
    await waitByRemoved(By.id('se-loading-page'), { optional: true });
}
