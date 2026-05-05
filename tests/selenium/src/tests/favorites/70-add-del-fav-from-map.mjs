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

const PREVIEW_DEFAULT_ICON = 'special_star';
const PREVIEW_DEFAULT_COLOR_PART = 'eecc22';
const PREVIEW_DEFAULT_SHAPE = 'circle';
const PREVIEW_SELECTED_SHAPE = 'octagon';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favorites = getFiles({ folder: 'favorites' });
    const favoriteName = 'Apple';
    const favoriteAddress = 'One Apple Park Way, Cupertino, CA 95014, USA';
    const favoriteDescription =
        'Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services.';
    const favoriteGroupName = 'Tech Companies';

    const idPreviewCircleDefault = favPreviewMarkerId(
        PREVIEW_DEFAULT_SHAPE,
        PREVIEW_DEFAULT_ICON,
        PREVIEW_DEFAULT_COLOR_PART
    );

    // prepare
    await actionOpenFavorites();
    await actionDeleteAllFavorites(favorites, favoriteGroupName);

    // add favorite — cancel once: preview must disappear
    await actionOpenContextMenu();
    await clickBy(By.id('se-add-favorite-action'));
    await waitBy(By.id('se-add-fav-dialog'));
    await waitBy(By.id(idPreviewCircleDefault));
    await clickBy(By.id('se-close-add-wpt-panel'));
    await waitByRemoved(By.id('se-add-fav-dialog'));
    await waitByRemoved(By.id(idPreviewCircleDefault));
    // add favorite
    await actionOpenContextMenu();
    await clickBy(By.id('se-add-favorite-action'));
    await waitBy(By.id('se-add-fav-dialog'));
    await sendKeysBy(By.id('se-fav-name-input'), favoriteName);
    await sendKeysBy(By.id('se-edit-fav-dialog-address'), favoriteAddress);
    // open description panel, type, save and return
    await clickBy(By.id('se-add-fav-add-desc-btn'));
    await waitBy(By.id('se-back-description-panel'));
    await sendKeysBy(By.id('se-edit-fav-dialog-desc'), favoriteDescription);
    await clickBy(By.id('se-back-description-panel'));
    await waitByRemoved(By.id('se-back-description-panel'));
    // create new favorite group
    await clickBy(By.id('se-add-new-fav-group'));
    await waitBy(By.id('se-add-new-fav-group-dialog'));
    await sendKeysBy(By.id('se-fav-group-name-input'), favoriteGroupName);
    await clickBy(By.id('se-add-new-fav-group-btn'));
    await waitByRemoved(By.id('se-add-new-fav-group-dialog'));
    // pick a color (palette panel; empty palette → add via color picker)
    await selectFavoriteColor();
    // open icon selection panel, pick first icon, go back
    await clickBy(By.id('se-fav-icon-row'));
    await waitBy(By.id('se-back-icon-selection-panel'));
    await waitBy(By.id(`se-fav-icon-last-used-${PREVIEW_DEFAULT_ICON}`));
    await clickBy(By.id(`se-fav-icon-last-used-${PREVIEW_DEFAULT_ICON}`));
    await clickBy(By.id('se-back-icon-selection-panel'));
    await waitByRemoved(By.id('se-back-icon-selection-panel'));
    await clickBy(By.id('se-favorite-shape-1'));
    const idPreviewComplete = favPreviewMarkerId(
        PREVIEW_SELECTED_SHAPE,
        PREVIEW_DEFAULT_ICON,
        PREVIEW_DEFAULT_COLOR_PART
    );
    await waitBy(By.id(idPreviewComplete));
    await clickBy(By.id('se-add-fav-btn'));
    await waitByRemoved(By.id('se-add-fav-dialog'));
    // check favorite info
    await waitBy(By.id(`se-fav-item-info-${favoriteName}`));
    await matchTextBy(By.id('se-wpt-group'), `${favoriteGroupName} (1)`);
    await matchTextBy(By.id('se-wpt-address'), favoriteAddress);
    await clickBy(By.id('se-close-wpt-details'));
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

function favPreviewMarkerId(background, icon, color) {
    const c = String(color ?? '').replace(/^#/, '');
    return `se-add-fav-map-preview--${background}--${icon}--${c}`;
}

async function selectFavoriteColor() {
    await clickBy(By.id('se-fav-color-row'));
    await waitBy(By.id('se-back-color-selection-panel'));
    const swatch = await waitBy(By.id(`se-color-item-${PREVIEW_DEFAULT_COLOR_PART}`), { optional: true, idle: true });
    if (swatch) {
        await swatch.click();
    } else {
        await clickBy(By.id('se-color-add-btn'));
        await waitBy(By.id('se-color-picker-dialog'));
        await clickBy(By.id('se-color-picker-apply'));
        await waitByRemoved(By.id('se-color-picker-dialog'));
    }
    await clickBy(By.id('se-back-color-selection-panel'));
    await waitByRemoved(By.id('se-back-color-selection-panel'));
}
