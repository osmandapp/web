import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import { clickBy, waitBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { getFiles, cleanupCloud } from '../../util.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenFavorites from '../../actions/favorites/actionOpenFavorites.mjs';
import actionDeleteFavGroup from '../../actions/favorites/actionDeleteFavGroup.mjs';
import actionsUploadFavorites from '../../actions/favorites/actionsUploadFavorites.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favGroupName = 'favorites-shops';
    const shortFavGroupName = 'shops';

    try {
        const favorites = getFiles({ folder: 'favorites' });
        const { path } = favorites.find((t) => t.name === favGroupName);

        await actionOpenFavorites();

        // import new group
        await clickBy(By.id('se-import-fav-group'));
        await actionsUploadFavorites({ files: path });
        await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));

        // delete group
        await actionDeleteFavGroup(shortFavGroupName);
        await waitBy(By.id('se-empty-page'));

        await actionFinish();
    } finally {
        await cleanupCloud({ favorites: [shortFavGroupName] });
    }
}
