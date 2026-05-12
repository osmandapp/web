import { By } from 'selenium-webdriver';
import { assert, clickBy, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';

import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionsUploadFavorites from '../../actions/favorites/actionsUploadFavorites.mjs';
import actionOpenFavorites from '../../actions/favorites/actionOpenFavorites.mjs';
import actionDeleteAllFavorites from '../../actions/favorites/actionDeleteAllFavorites.mjs';
import actionDeleteFavGroup from '../../actions/favorites/actionDeleteFavGroup.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { getFiles } from '../../util.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

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

    await searchForFavorite(wptName);

    await waitBy(By.id('se-search-results'));
    const favResultId = `se-search-result-${wptName}`;
    await clickBy(By.id(favResultId));
    await waitBy(By.id(`se-fav-item-info-${wptName}`));

    await clickBy(By.id('se-close-wpt-details'));

    await waitBy(By.id('se-search-results'));
    await waitBy(By.id(favResultId));

    await clickBy(By.id('se-show-menu-favorites'));
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));
    await actionDeleteFavGroup(shortFavGroupName);

    await searchForFavorite(wptName);

    await waitBy(By.id('se-empty-search'));
    const deletedFavResult = await waitBy(By.id(favResultId), { optional: true, idle: true });
    await assert(!deletedFavResult, `Deleted favorite "${wptName}" should be absent in search results`);

    await actionFinish();
}

async function searchForFavorite(query) {
    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-search'));
    await waitBy(By.id('se-search-input'));
    await clickBy(By.id('se-search-input-cancel'), { optional: true });
    await sendKeysBy(By.id('se-search-input'), `${query}\n`);
    await waitByRemoved(By.id('se-loading-page'), { optional: true });
}
