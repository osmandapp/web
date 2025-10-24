import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import { getFiles } from '../../util.mjs';
import { clickBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenFavorites from '../../actions/favorites/actionOpenFavorites.mjs';
import actionsUploadFavorites from '../../actions/favorites/actionsUploadFavorites.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favGroupName = 'favorites-shops';
    const shortFavGroupName = 'shops';

    const favoriteName = 'Test wpt';

    await actionOpenFavorites();

    const exist = await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`), { optional: true, idle: true });
    if (!exist) {
        const favorites = getFiles({ folder: 'favorites' });
        const { path } = favorites.find((t) => t.name === favGroupName);
        // create folder
        await clickBy(By.id('se-import-fav-group'));
        await actionsUploadFavorites({ files: path });
        await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));
    }
    // open group
    await clickBy(By.id(`se-menu-fav-${shortFavGroupName}`));
    await waitByRemoved(By.id(`se-menu-fav-${shortFavGroupName}`));
    await waitBy(By.id(`se-opened-fav-group-${shortFavGroupName}`));
    // open favorite
    await clickBy(By.id(`se-fav-item-name-${favoriteName}`));
    await waitBy(By.id(`se-fav-item-info-${favoriteName}`));

    await waitBy(By.className('leaflet-marker-icon'));

    // open configure map
    await clickBy(By.id('se-show-menu-configuremap'));
    await waitBy(By.id('se-configure-map-menu-name'));

    // hide favorites
    await clickBy(By.id('se-configure-map-menu-favorite-switch'));
    await waitByRemoved(By.className('leaflet-marker-icon'));
    // show favorite again
    await clickBy(By.id('se-configure-map-menu-favorite-switch'));
    await waitBy(By.className('leaflet-marker-icon'));

    await actionFinish();
}
