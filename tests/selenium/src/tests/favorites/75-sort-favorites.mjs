import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import { getFiles } from '../../util.mjs';
import { clickBy, enclose, enumerateIds, waitBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../../actions/actionFinish.mjs';
import actionRenameFavGroup from '../../actions/favorites/actionRenameFavGroup.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionOpenFavorites from '../../actions/favorites/actionOpenFavorites.mjs';
import actionDeleteAllFavorites from '../../actions/favorites/actionDeleteAllFavorites.mjs';
import actionDeleteFavGroup from '../../actions/favorites/actionDeleteFavGroup.mjs';
import actionUploadFavGroup from '../../actions/favorites/actionUploadFavGroup.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const shortFavGroupName = 'food';
    const suffix = '-renamed';

    await actionOpenFavorites();

    const favorites = getFiles({ folder: 'favorites' });

    const exist = await waitBy(By.id(`se-menu-fav-${shortFavGroupName}${suffix}`), { optional: true, idle: true });
    if (exist) {
        await actionDeleteFavGroup(`${shortFavGroupName}${suffix}`);
    }

    await actionDeleteAllFavorites(favorites);

    await actionUploadFavGroup(favorites);

    // check group sort
    await validateGroupOrder(favGroupsLastModified);
    await clickBy(By.id('se-sort-button-time-favorites'));
    await waitBy(By.id('se-sort-menu'));
    await clickBy(By.id('se-sort-az'));
    await actionUploadFavGroup(favorites, false);
    await validateGroupOrder(favGroupsAZ);
    await waitBy(By.id('se-sort-button-az-favorites'));
    await clickBy(By.id('se-sort-button-az-favorites'));
    await waitBy(By.id('se-sort-menu'));
    await clickBy(By.id('se-sort-za'));
    await actionUploadFavGroup(favorites, false);
    await validateGroupOrder(favGroupsZA);
    await waitBy(By.id('se-sort-button-za-favorites'));
    await clickBy(By.id('se-sort-button-za-favorites'));
    await waitBy(By.id('se-sort-menu'));
    await clickBy(By.id('se-sort-newDate'));
    await actionUploadFavGroup(favorites, false);
    await validateGroupOrder(favGroupsNewDate);
    await waitBy(By.id('se-sort-button-newDate-favorites'));
    await clickBy(By.id('se-sort-button-newDate-favorites'));
    await waitBy(By.id('se-sort-menu'));
    await clickBy(By.id('se-sort-oldDate'));
    await actionUploadFavGroup(favorites, false);
    await validateGroupOrder(favGroupsOldDate);

    // check item sort by time
    await clickBy(By.id('se-menu-fav-food'));
    await waitBy(By.id('se-opened-fav-group-food'));
    await validateItemOrder(favItemsFood);

    // check save prev groups sort
    await clickBy(By.id('se-back-folder-button-favorites'));
    await waitBy(By.id('se-sort-button-oldDate-favorites'));

    // check save prev groups sort after rename
    await actionRenameFavGroup(shortFavGroupName, suffix);
    await waitBy(By.id('se-sort-button-oldDate-favorites'));
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}${suffix}`));
    await validateGroupOrder(favGroupsOldDateAfterRename);

    // check save sort order after change hidden
    await waitBy(By.id('se-folder-actions-button-shops'));
    await clickBy(By.id('se-folder-actions-button-shops'));
    await waitBy(By.id('se-favorite-folder-actions'));
    await clickBy(By.id('se-favorite-folder-actions-show-on-map'));
    await waitBy(By.id('se-fav-menu-icon-hidden-shops'));

    await validateGroupOrder(favGroupsOldDateAfterRenameHidden);

    // check pinned/unpinned group order
    // Pin ozoo group - pinned groups should appear before unpinned
    await waitBy(By.id('se-folder-actions-button-ozoo'));
    await clickBy(By.id('se-folder-actions-button-ozoo'));
    await waitBy(By.id('se-favorite-folder-actions'));
    await clickBy(By.id('se-favorite-folder-actions-pinned'));
    await actionIdleWait();
    await validateGroupOrder(favGroupsOldDateWithOZooPinned);

    // Pin shops group - both pinned groups should appear before unpinned
    await waitBy(By.id('se-folder-actions-button-shops'));
    await clickBy(By.id('se-folder-actions-button-shops'));
    await waitBy(By.id('se-favorite-folder-actions'));
    await clickBy(By.id('se-favorite-folder-actions-pinned'));
    await actionIdleWait();
    await validateGroupOrder(favGroupsOldDateWithShopsAndOZooPinned);

    // Check pinned with hidden: hide shops (pinned and hidden should appear after pinned visible)
    await waitBy(By.id('se-folder-actions-button-shops'));
    await clickBy(By.id('se-folder-actions-button-shops'));
    await waitBy(By.id('se-favorite-folder-actions'));
    await clickBy(By.id('se-favorite-folder-actions-show-on-map'));
    await waitBy(By.id('se-fav-menu-icon-hidden-shops'));
    await actionIdleWait();
    await validateGroupOrder(favGroupsOldDateWithPinnedHidden);

    // Unpin ozoo - only shops (pinned hidden) should remain pinned
    await waitBy(By.id('se-folder-actions-button-ozoo'));
    await clickBy(By.id('se-folder-actions-button-ozoo'));
    await waitBy(By.id('se-favorite-folder-actions'));
    await clickBy(By.id('se-favorite-folder-actions-pinned'));
    await actionIdleWait();
    await validateGroupOrder(favGroupsOldDateWithOnlyPinnedHidden);

    // Unpin shops - all groups should be unpinned, divider should disappear
    await waitBy(By.id('se-folder-actions-button-shops'));
    await clickBy(By.id('se-folder-actions-button-shops'));
    await waitBy(By.id('se-favorite-folder-actions'));
    await clickBy(By.id('se-favorite-folder-actions-pinned'));
    await actionIdleWait();
    await validateGroupOrder(favGroupsOldDateAfterRenameHidden);

    await actionDeleteFavGroup(`${shortFavGroupName}${suffix}`);
    await actionDeleteAllFavorites(favorites);

    await actionFinish();
}

const favGroupsLastModified = ['se-menu-fav-shops', 'se-menu-fav-ozoo', 'se-menu-fav-food'];

const favGroupsAZ = ['se-menu-fav-food', 'se-menu-fav-ozoo', 'se-menu-fav-shops'];

const favGroupsZA = ['se-menu-fav-shops', 'se-menu-fav-ozoo', 'se-menu-fav-food'];

const favGroupsNewDate = ['se-menu-fav-shops', 'se-menu-fav-ozoo', 'se-menu-fav-food'];

const favGroupsOldDate = ['se-menu-fav-food', 'se-menu-fav-ozoo', 'se-menu-fav-shops'];

const favGroupsOldDateAfterRename = ['se-menu-fav-ozoo', 'se-menu-fav-shops', 'se-menu-fav-food-renamed'];

const favGroupsOldDateAfterRenameHidden = ['se-menu-fav-ozoo', 'se-menu-fav-food-renamed', 'se-menu-fav-shops'];

const favGroupsOldDateWithOZooPinned = ['se-menu-fav-ozoo', 'se-menu-fav-food-renamed', 'se-menu-fav-shops'];

const favGroupsOldDateWithShopsAndOZooPinned = ['se-menu-fav-ozoo', 'se-menu-fav-shops', 'se-menu-fav-food-renamed'];

const favGroupsOldDateWithPinnedHidden = ['se-menu-fav-ozoo', 'se-menu-fav-shops', 'se-menu-fav-food-renamed'];

const favGroupsOldDateWithOnlyPinnedHidden = ['se-menu-fav-shops', 'se-menu-fav-ozoo', 'se-menu-fav-food-renamed'];

const favItemsFood = [
    'se-fav-item-name-111test',
    'se-fav-item-name-Józefa (Kraków) 14',
    'se-fav-item-name-Parkingtest',
    'se-fav-item-name-Plac Szczepański (Stare Miasto) 7',
    'se-fav-item-name-Świętej Katarzyny (Stare Miasto) 2',
    'se-fav-item-name-Крива Липа',
    'se-fav-item-name-ssssарарар',
    'se-fav-item-name-ывывыв',
];

async function validateGroupOrder(ids) {
    await enclose(
        async () => {
            await actionIdleWait();
            const groups = await enumerateIds('se-menu-fav-');
            return JSON.stringify(ids) === JSON.stringify(groups);
        },
        { tag: 'validateFavGroupsSort' }
    );
}

async function validateItemOrder(ids) {
    await enclose(
        async () => {
            const groups = await enumerateIds('se-fav-item-name-');
            return JSON.stringify(ids) === JSON.stringify(groups);
        },
        { tag: 'validateFavItemsSort' }
    );
}
