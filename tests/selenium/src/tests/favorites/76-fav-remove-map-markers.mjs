import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenFavorites from '../../actions/favorites/actionOpenFavorites.mjs';
import actionDeleteAllFavorites from '../../actions/favorites/actionDeleteAllFavorites.mjs';
import { getFiles } from '../../util.mjs';
import { clickBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import actionsUploadFavorites from '../../actions/favorites/actionsUploadFavorites.mjs';
import actionDeleteFavGroup from '../../actions/favorites/actionDeleteFavGroup.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favGroupName = 'favorites-shops';
    const shortFavGroupName = 'shops';

    const favorites = getFiles({ folder: 'favorites' });
    const { path } = favorites.find((t) => t.name === favGroupName);

    // prepare
    await actionOpenFavorites();
    await actionDeleteAllFavorites(favorites);

    await clickBy(By.id('se-import-fav-group'));
    await actionsUploadFavorites({ files: path });
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));

    await clickBy(By.id(`se-menu-fav-${shortFavGroupName}`));
    await waitByRemoved(By.id(`se-menu-fav-${shortFavGroupName}`));
    await waitBy(By.id(`se-opened-fav-group-${shortFavGroupName}`));

    await waitBy(By.className('leaflet-marker-icon'));

    await clickBy(By.id('se-back-folder-button-favorites'));
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));

    await actionDeleteFavGroup(shortFavGroupName);
    await waitBy(By.id('se-empty-page'));

    await waitByRemoved(By.className('leaflet-marker-icon'));

    await actionFinish();
}
