import { By } from 'selenium-webdriver';
import { clickBy, enclose, enumerateIds, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';

import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionUploadGpx from '../../actions/actionUploadGpx.mjs';
import actionLocalToCloud from '../../actions/tracks/actionLocalToCloud.mjs';
import actionDeleteTracksByPattern from '../../actions/tracks/actionDeleteTracksByPattern.mjs';
import actionRenameTrack from '../../actions/tracks/actionRenameTrack.mjs';
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

    // --- Search: renamed track is found by the new name only ---
    const suffix = '-renamed';
    const renamedTrackName = `${trackName}${suffix}`;
    const renamedTrackResultId = `se-search-result-${renamedTrackName}.gpx`;

    await clickBy(By.id('se-show-menu-tracks'));
    await waitBy(By.id(`se-cloud-track-${trackName}`));
    await actionRenameTrack(trackName, suffix);

    await submitSearchQuery(renamedTrackName);
    await waitBy(By.id('se-search-results'));
    await waitBy(By.id(renamedTrackResultId));
    await waitByRemoved(By.id(trackResultId));

    await clickBy(By.id('se-show-menu-tracks'));
    await waitBy(By.id(`se-cloud-track-${renamedTrackName}`));
    await deleteTrack(renamedTrackName);

    await submitSearchQuery(trackName);
    await assertSearchResultAbsent(By.id(renamedTrackResultId));

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

    // --- Search: tokens match word starts, more matched tokens rank first ---
    await submitSearchQuery('Amsterdam 99');
    await waitBy(By.id('se-search-results'));
    await enclose(
        async () => {
            const ids = await enumerateIds('se-search-result-fav-');
            return ids.length === 4 && ids[0] === 'se-search-result-fav-Haarlemmerstraat (Amsterdam) 99';
        },
        { tag: 'validateFavSearchRanking' }
    );

    // "dam" is inside "Amsterdam" but no name token starts with it
    await clickBy(By.id('se-show-menu-search'));
    await submitSearchQuery('dam');
    await assertSearchResultAbsent(By.css('[id^="se-search-result-fav-"]'));

    await clickBy(By.id('se-show-menu-search'));
    await submitSearchQuery(wptName);

    await waitBy(By.id('se-search-results'));
    const favResultId = `se-search-result-fav-${wptName}`;
    await clickBy(By.id(favResultId));
    await waitBy(By.id(`se-fav-item-info-${wptName}`));

    await clickBy(By.id('se-back-wpt-details'));

    await waitBy(By.id('se-search-results'));
    await waitBy(By.id(favResultId));

    // --- Search: favorite renamed from search results is updated in the list ---
    const renamedWptName = `${wptName}${suffix}`;
    const renamedFavResultId = `se-search-result-fav-${renamedWptName}`;

    await clickBy(By.id(favResultId));
    await waitBy(By.id(`se-fav-item-info-${wptName}`));
    await clickBy(By.id('se-edit-fav-item'));
    await waitBy(By.id('se-edit-fav-dialog'));
    await sendKeysBy(By.id('se-fav-name-input'), suffix);
    await clickBy(By.id('se-edit-fav-item-submit'));
    await waitBy(By.id(`se-fav-item-info-${renamedWptName}`));

    await clickBy(By.id('se-back-wpt-details'));
    await waitBy(By.id('se-search-results'));
    await waitBy(By.id(renamedFavResultId));
    await waitByRemoved(By.id(favResultId));

    // --- Search: delete favorite opened from search -> back to results without it ---
    await clickBy(By.id(renamedFavResultId));
    await waitBy(By.id(`se-fav-item-info-${renamedWptName}`));
    await deleteOpenedFavorite();

    await waitBy(By.id('se-empty-search'));

    // --- Search: delete favorite from favorites menu -> disappears from search ---
    const wptName2 = 'Michael Kors';
    const favResultId2 = `se-search-result-fav-${wptName2}`;

    // close search menu, submitSearchQuery opens it again
    await clickBy(By.id('se-show-menu-search'));
    await submitSearchQuery(wptName2);
    await waitBy(By.id(favResultId2));

    await clickBy(By.id('se-show-menu-favorites'));
    await clickBy(By.id(`se-menu-fav-${shortFavGroupName}`));
    await waitBy(By.id(`se-opened-fav-group-${shortFavGroupName}`));
    await waitBy(By.id(`se-actions-${wptName2}`), { idle: true });
    await clickBy(By.id(`se-actions-${wptName2}`));
    await waitBy(By.id('se-fav-item-actions'));
    await deleteOpenedFavorite();
    await waitByRemoved(By.id(`se-fav-item-name-${wptName2}`));
    await clickBy(By.id('se-back-folder-button-favorites'));
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));

    await submitSearchQuery(wptName2);
    await assertSearchResultAbsent(By.id(favResultId2));

    await clickBy(By.id('se-show-menu-favorites'));
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));
    await actionDeleteFavGroup(shortFavGroupName);

    await submitSearchQuery(wptName);
    await assertSearchResultAbsent(By.id(favResultId));
    await actionFinish();
}

async function deleteOpenedFavorite() {
    await clickBy(By.id('se-delete-fav-item'));
    await waitBy(By.id('se-delete-fav-dialog'));
    await clickBy(By.id('se-delete-fav-dialog-submit'));
    await waitByRemoved(By.id('se-delete-fav-dialog'));
}

async function assertSearchResultAbsent(resultBy) {
    const emptySearch = await waitBy(By.id('se-empty-search'), { optional: true });
    if (!emptySearch) {
        await waitBy(By.id('se-search-results'));
        await waitByRemoved(resultBy);
    }
}

async function submitSearchQuery(query) {
    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-search'));
    await waitBy(By.id('se-search-input'));
    await clickBy(By.id('se-search-input-cancel'), { optional: true });
    await sendKeysBy(By.id('se-search-input'), `${query}\n`);
    await waitByRemoved(By.id('se-loading-page'), { optional: true });
}
