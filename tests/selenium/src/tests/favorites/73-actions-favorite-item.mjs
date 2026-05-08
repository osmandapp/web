'use strict';

import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import { clickBy, enclose, matchTextBy, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { driver } from '../../options.mjs';
import { getFiles } from '../../util.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenFavorites from '../../actions/favorites/actionOpenFavorites.mjs';
import actionDeleteAllFavorites from '../../actions/favorites/actionDeleteAllFavorites.mjs';
import actionDeleteFavGroup from '../../actions/favorites/actionDeleteFavGroup.mjs';
import actionsUploadFavorites from '../../actions/favorites/actionsUploadFavorites.mjs';

const ICON_NEW = 'amenity_fire_station';
const COLOR_ORIG = 'B300FF';
const COLOR_NEW = 'eecc22';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favGroupName = 'favorites-shops';
    const shortFavGroupName = 'shops';
    const wptName = 'Test wpt';
    const wptName2 = 'Test wpt 2';

    const suffix = '-edited';

    const favorites = getFiles({ folder: 'favorites' });

    // prepare
    await actionOpenFavorites();
    await actionDeleteAllFavorites(favorites);
    const { path } = favorites.find((t) => t.name === favGroupName);

    // create folder
    await clickBy(By.id('se-import-fav-group'));
    await actionsUploadFavorites({ files: path });
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));

    // open favorite group
    await clickBy(By.id(`se-menu-fav-${shortFavGroupName}`));
    await waitByRemoved(By.id(`se-menu-fav-${shortFavGroupName}`));
    await waitBy(By.id(`se-opened-fav-group-${shortFavGroupName}`));

    // edit favorite item (rename + address) via three-dot menu
    await waitBy(By.id(`se-actions-${wptName}`), { idle: true });
    await clickBy(By.id(`se-actions-${wptName}`));
    await waitBy(By.id('se-fav-item-actions'));
    await clickBy(By.id('se-edit-fav-item'));
    await waitBy(By.id('se-edit-fav-dialog'));

    await sendKeysBy(By.id('se-fav-name-input'), suffix);
    await enclose(
        async () => {
            const input = await waitBy(By.id('se-edit-fav-dialog-address'));
            await input.sendKeys(suffix);
            return true;
        },
        { tag: 'edit-address-fav-item' }
    );
    await clickBy(By.id('se-edit-fav-item-submit'));
    await matchTextBy(By.id('se-fav-item-address'), suffix);
    await waitBy(By.id(`se-${wptName}${suffix}`));

    // open WptDetails by clicking the item — this selects the marker on map and enables preview pin
    await clickBy(By.id(`se-fav-item-name-${wptName}${suffix}`));
    await waitBy(By.id(`se-fav-item-info-${wptName}${suffix}`));

    // edit icon → verify preview marker on map
    await clickBy(By.id('se-edit-fav-item'));
    await waitBy(By.id('se-edit-fav-dialog'));
    await clickBy(By.id('se-fav-icon-row'));
    await waitBy(By.id('se-back-icon-selection-panel'));
    await clickBy(By.id(`se-fav-icon-last-used-${ICON_NEW}`));
    await waitBy(By.id(favPreviewMarkerId('circle', ICON_NEW, COLOR_ORIG)));
    await clickBy(By.id('se-back-icon-selection-panel'));
    await waitByRemoved(By.id('se-back-icon-selection-panel'));
    await clickBy(By.id('se-edit-fav-item-submit'));
    await waitBy(By.id(`se-fav-item-info-${wptName}${suffix}`));

    // edit color → verify preview marker on map
    await clickBy(By.id('se-edit-fav-item'));
    await waitBy(By.id('se-edit-fav-dialog'));
    await clickBy(By.id('se-fav-color-row'));
    await waitBy(By.id('se-back-color-selection-panel'));
    await selectColor(COLOR_NEW);
    await waitBy(By.id(favPreviewMarkerId('circle', ICON_NEW, COLOR_NEW)));
    await clickBy(By.id('se-back-color-selection-panel'));
    await waitByRemoved(By.id('se-back-color-selection-panel'));
    await clickBy(By.id('se-edit-fav-item-submit'));
    await waitBy(By.id(`se-fav-item-info-${wptName}${suffix}`));

    // color context menu: duplicate → verify → delete → verify
    await clickBy(By.id('se-edit-fav-item'));
    await waitBy(By.id('se-edit-fav-dialog'));
    await clickBy(By.id('se-fav-color-row'));
    await waitBy(By.id('se-back-color-selection-panel'));

    const colorItemForDup = await waitBy(By.css(`[id="se-color-item-${COLOR_NEW}"]`));
    await driver.actions({ async: true }).contextClick(colorItemForDup).perform();
    await waitBy(By.id('color-duplicate'));
    await clickBy(By.id('color-duplicate'));
    await enclose(
        async () => {
            const items = await driver.findElements(By.css(`[id="se-color-item-${COLOR_NEW}"]`));
            return items.length === 2;
        },
        { tag: 'color-duplicate-created' }
    );

    const colorItemForDel = (await driver.findElements(By.css(`[id="se-color-item-${COLOR_NEW}"]`)))[0];
    await driver.actions({ async: true }).contextClick(colorItemForDel).perform();
    await waitBy(By.id('color-remove'));
    await clickBy(By.id('color-remove'));
    await enclose(
        async () => {
            const items = await driver.findElements(By.css(`[id="se-color-item-${COLOR_NEW}"]`));
            return items.length === 1;
        },
        { tag: 'color-duplicate-deleted' }
    );

    await clickBy(By.id('se-back-color-selection-panel'));
    await waitByRemoved(By.id('se-back-color-selection-panel'));
    await clickBy(By.id('se-back-edit-wpt-panel'));
    await waitByRemoved(By.id('se-edit-fav-dialog'));

    // reload page and verify duplicate is gone (palette persisted to server)
    await actionOpenMap();
    await actionOpenFavorites();
    await clickBy(By.id(`se-menu-fav-${shortFavGroupName}`));
    await waitBy(By.id(`se-opened-fav-group-${shortFavGroupName}`));
    await clickBy(By.id(`se-fav-item-name-${wptName}${suffix}`));
    await waitBy(By.id(`se-fav-item-info-${wptName}${suffix}`));
    await clickBy(By.id('se-edit-fav-item'));
    await waitBy(By.id('se-edit-fav-dialog'));
    await clickBy(By.id('se-fav-color-row'));
    await waitBy(By.id('se-back-color-selection-panel'));
    await enclose(
        async () => {
            const items = await driver.findElements(By.css(`[id="se-color-item-${COLOR_NEW}"]`));
            return items.length === 1;
        },
        { tag: 'color-not-persisted-after-reload' }
    );
    await clickBy(By.id('se-back-color-selection-panel'));
    await waitByRemoved(By.id('se-back-color-selection-panel'));

    // edit shape → verify preview marker on map
    await waitBy(By.id('se-edit-fav-dialog'));
    await clickBy(By.id('se-favorite-shape-1'));
    await waitBy(By.id(favPreviewMarkerId('octagon', ICON_NEW, COLOR_NEW)));
    await clickBy(By.id('se-edit-fav-item-submit'));
    await waitBy(By.id(`se-fav-item-info-${wptName}${suffix}`));

    await clickBy(By.id('se-back-wpt-details'));
    await waitByRemoved(By.id(`se-fav-item-info-${wptName}${suffix}`));
    await waitBy(By.id(`se-fav-item-name-${wptName}${suffix}`));

    // delete favorite
    await waitBy(By.id(`se-actions-${wptName}${suffix}`), { idle: true });
    await clickBy(By.id(`se-actions-${wptName}${suffix}`));
    await waitBy(By.id('se-fav-item-actions'));
    await clickBy(By.id('se-delete-fav-item'));
    await waitBy(By.id('se-delete-fav-dialog'));
    await clickBy(By.id('se-delete-fav-dialog-submit'));
    await waitByRemoved(By.id(`se-actions-${wptName}${suffix}`));
    await waitByRemoved(By.id(`se-fav-item-name-${wptName}${suffix}`));
    // ghost pin must not reappear after deletion
    await waitByRemoved(By.css('[id^="se-selected-marker-"]'));

    await waitBy(By.id(`se-actions-${wptName2}`), { idle: true });
    await clickBy(By.id(`se-actions-${wptName2}`));
    await waitBy(By.id('se-fav-item-actions'));
    await clickBy(By.id('se-delete-fav-item'));
    await waitBy(By.id('se-delete-fav-dialog'));
    await clickBy(By.id('se-delete-fav-dialog-submit'));
    await waitByRemoved(By.id(`se-actions-${wptName2}`));
    await waitByRemoved(By.id(`se-fav-item-name-${wptName}`));

    await clickBy(By.id('se-back-folder-button-favorites'));
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));

    await actionDeleteFavGroup(shortFavGroupName);
    await waitBy(By.id('se-empty-page'));

    await actionFinish();
}

function favPreviewMarkerId(background, icon, color) {
    const c = String(color ?? '').replace(/^#/, '');
    return `se-add-fav-map-preview--${background}--${icon}--${c}`;
}

async function selectColor(colorCode) {
    const swatch = await waitBy(By.id(`se-color-item-${colorCode}`), { optional: true, idle: true });
    if (swatch) {
        await swatch.click();
    } else {
        await clickBy(By.id('se-color-add-btn'));
        await waitBy(By.id('se-color-picker-dialog'));
        await clickBy(By.id('se-color-picker-apply'));
        await waitByRemoved(By.id('se-color-picker-dialog'));
    }
}
