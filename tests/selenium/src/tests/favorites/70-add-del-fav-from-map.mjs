import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenContextMenu from '../../actions/map/actionOpenContextMenu.mjs';
import { clickBy, matchTextBy, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import actionOpenFavorites from '../../actions/favorites/actionOpenFavorites.mjs';
import actionDeleteAllFavorites from '../../actions/favorites/actionDeleteAllFavorites.mjs';
import { getFiles } from '../../util.mjs';
import actionDeleteFavGroup from '../../actions/favorites/actionDeleteFavGroup.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favorites = getFiles({ folder: 'favorites' });
    const favoriteName = 'Apple';
    const favoriteAddress = 'One Apple Park Way, Cupertino, CA 95014, USA';
    const favoriteDescription =
        'Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services.';
    const favoriteGroupName = 'Tech Companies';

    // prepare
    await actionOpenFavorites();
    await actionDeleteAllFavorites(favorites, favoriteGroupName);

    // add favorite
    await actionOpenContextMenu();
    await clickBy(By.id('se-add-favorite-action'));
    await waitBy(By.id('se-add-fav-dialog'));
    await sendKeysBy(By.id('se-fav-name-input'), favoriteName);
    await clickBy(By.id('se-add-fav-add-address-btn'));
    await sendKeysBy(By.id('se-edit-fav-dialog-address'), favoriteAddress);
    await clickBy(By.id('se-add-fav-add-desc-btn'));
    await sendKeysBy(By.id('se-edit-fav-dialog-desc'), favoriteDescription);
    // create new favorite group
    await clickBy(By.id('se-add-new-fav-group'));
    await waitBy(By.id('se-add-new-fav-group-dialog'));
    await sendKeysBy(By.id('se-fav-group-name-input'), favoriteGroupName);
    await clickBy(By.id('se-add-new-fav-group-btn'));
    await waitByRemoved(By.id('se-add-new-fav-group-dialog'));
    // add favorite to group
    await clickBy(By.id('se-select-fav-color-0'));
    await clickBy(By.id('se-favorite-icon-0'));
    await clickBy(By.id('se-favorite-shape-1'));
    await clickBy(By.id('se-add-fav-btn'));
    await waitByRemoved(By.id('se-add-fav-dialog'));
    // check favorite info
    await waitBy(By.id(`se-fav-item-info-${favoriteName}`));
    await matchTextBy(By.id('se-wpt-group'), `${favoriteGroupName} (1)`);
    await matchTextBy(By.id('se-wpt-address'), favoriteAddress);
    await waitBy(By.className('leaflet-marker-icon'));
    await clickBy(By.id('se-back-wpt-details'));
    // check new favorite group
    await waitByRemoved(By.id(`se-fav-item-info-${favoriteName}`));
    await waitBy(By.className('leaflet-marker-icon'));
    await actionOpenFavorites();
    await waitBy(By.id(`se-menu-fav-${favoriteGroupName}`));
    await waitBy(By.id('se-fav-group-size-1 points'));

    // remove favorite from map
    await clickBy(By.className('leaflet-marker-icon'));
    await waitBy(By.id(`se-fav-item-info-${favoriteName}`));
    await clickBy(By.id('se-delete-fav-item'));
    await waitBy(By.id('se-delete-fav-dialog'));
    await clickBy(By.id('se-delete-fav-dialog-submit'));
    await waitByRemoved(By.className('leaflet-marker-icon'));
    await waitByRemoved(By.id(`se-fav-item-info-${favoriteName}`));

    await actionOpenFavorites();
    // clean up
    await actionDeleteFavGroup(favoriteGroupName);
    await waitBy(By.id('se-empty-page'));

    await actionFinish();
}
