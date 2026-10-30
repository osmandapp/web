import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenFavorites from '../../actions/favorites/actionOpenFavorites.mjs';
import actionDeleteAllFavorites from '../../actions/favorites/actionDeleteAllFavorites.mjs';
import actionDeleteFavGroup from '../../actions/favorites/actionDeleteFavGroup.mjs';
import actionsUploadFavorites from '../../actions/favorites/actionsUploadFavorites.mjs';
import { clickBy, enclose, getUrl, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { getFiles } from '../../util.mjs';

const GROUP = 'shops';
const WPT = 'Test wpt';
const WPT2 = 'Michael Kors';
const FOLDER_URL = `/map/mydata/favorites/?folder=${GROUP}`;

// favorite info url: /map/mydata/favorites/info/<base64 group>/<base64 name>, see encodeString() in map/src/util/Utils.js
const encode = (name) => encodeURIComponent(Buffer.from(name).toString('base64'));

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favorites = getFiles({ folder: 'favorites' });
    const { path } = favorites.find((t) => t.name === `favorites-${GROUP}`);

    // prepare
    await actionOpenFavorites();
    await actionDeleteAllFavorites(favorites);
    await clickBy(By.id('se-import-fav-group'));
    await actionsUploadFavorites({ files: path });
    await waitBy(By.id(`se-menu-fav-${GROUP}`));

    // favorite opened from the folder list, then two favorites clicked on the map in a row
    await clickBy(By.id(`se-menu-fav-${GROUP}`));
    await waitBy(By.id(`se-opened-fav-group-${GROUP}`));
    await clickBy(By.id(`se-fav-item-name-${WPT}`));
    await waitBy(By.id(`se-fav-item-info-${WPT}`));
    await waitBy(By.id(`se-fav-map-marker-${WPT2}`), { idle: true });
    await clickBy(By.id(`se-fav-map-marker-${WPT2}`));
    await waitBy(By.id(`se-fav-item-info-${WPT2}`));
    await clickBy(By.id(`se-fav-map-marker-${WPT}`));
    await waitBy(By.id(`se-fav-item-info-${WPT}`));
    await clickBy(By.id('se-close-wpt-details'));
    await waitByRemoved(By.id(`se-fav-item-info-${WPT}`));
    await waitBy(By.id(`se-opened-fav-group-${GROUP}`));
    await assertUrl(FOLDER_URL);

    // favorite opened by its link, closed with the Close button
    await actionOpenMap(`mydata/favorites/info/${encode(GROUP)}/${encode(WPT)}?folder=${GROUP}#17/52.35546/4.89296`);
    await waitBy(By.id(`se-fav-item-info-${WPT}`));
    await clickBy(By.id('se-close-wpt-details'));
    await waitByRemoved(By.id(`se-fav-item-info-${WPT}`));
    await waitBy(By.id(`se-opened-fav-group-${GROUP}`));
    await assertUrl(FOLDER_URL);

    // clean up
    await clickBy(By.id('se-back-folder-button-favorites'));
    await waitBy(By.id(`se-menu-fav-${GROUP}`));
    await actionDeleteFavGroup(GROUP);
    await waitBy(By.id('se-empty-page'));

    await actionFinish();
}

async function assertUrl(expected) {
    await enclose(async () => (await getUrl()).split('#')[0].endsWith(expected), { tag: `url ${expected}` });
}
