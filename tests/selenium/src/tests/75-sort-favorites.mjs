import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import { deleteFavGroup, getFiles, uploadFavorites } from '../util.mjs';
import { clickBy, enclose, enumerateIds, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionCheckFileExist from '../actions/actionCheckFileExist.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import actionRenameFavGroup from '../actions/actionRenameFavGroup.mjs';
import actionIdleWait from '../actions/actionIdleWait.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const shortFavGroupName = 'food';
    const suffix = '-renamed';

    // open favorite menu
    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-favorites'));

    const favorites = getFiles({ folder: 'favorites' });

    const exist = await actionCheckFileExist({ id: `se-menu-fav-${shortFavGroupName}${suffix}` });
    if (exist) {
        await deleteFavGroup(`${shortFavGroupName}${suffix}`);
    }

    await deleteFavGroups(favorites);

    await uploadFavGroup(favorites);

    // check group sort
    await validateGroupOrder(favGroupsLastModified);
    await clickBy(By.id('se-sort-button-time'));
    await waitBy(By.id('se-sort-menu'));
    await clickBy(By.id('se-sort-az'));
    await uploadFavGroup(favorites, false);
    await validateGroupOrder(favGroupsAZ);
    await waitBy(By.id('se-sort-button-az'));
    await clickBy(By.id('se-sort-button-az'));
    await waitBy(By.id('se-sort-menu'));
    await clickBy(By.id('se-sort-za'));
    await uploadFavGroup(favorites, false);
    await validateGroupOrder(favGroupsZA);
    await waitBy(By.id('se-sort-button-za'));
    await clickBy(By.id('se-sort-button-za'));
    await waitBy(By.id('se-sort-menu'));
    await clickBy(By.id('se-sort-newDate'));
    await uploadFavGroup(favorites, false);
    await validateGroupOrder(favGroupsNewDate);
    await waitBy(By.id('se-sort-button-newDate'));
    await clickBy(By.id('se-sort-button-newDate'));
    await waitBy(By.id('se-sort-menu'));
    await clickBy(By.id('se-sort-oldDate'));
    await uploadFavGroup(favorites, false);
    await validateGroupOrder(favGroupsOldDate);

    // check item sort by time
    await clickBy(By.id('se-menu-fav-food'));
    await waitBy(By.id('se-opened-fav-group-food'));
    await validateItemOrder(favItemsFood);

    // check save prev groups sort
    await clickBy(By.id('se-back-folder-button'));
    await waitBy(By.id('se-sort-button-oldDate'));

    // check save prev groups sort after rename
    await actionRenameFavGroup(shortFavGroupName, suffix);
    await waitBy(By.id('se-sort-button-oldDate'));
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}${suffix}`));
    await validateGroupOrder(favGroupsOldDateAfterRename);

    // check save sort order after change hidden
    await waitBy(By.id('se-folder-actions-button-shops'));
    await clickBy(By.id('se-folder-actions-button-shops'));
    await waitBy(By.id('se-favorite-folder-actions'));
    await clickBy(By.id('se-favorite-folder-actions-show-on-map'));
    await waitBy(By.id('se-fav-menu-icon-hidden-shops'));

    await validateGroupOrder(favGroupsOldDateAfterRename);

    await deleteFavGroup(`${shortFavGroupName}${suffix}`);
    await deleteFavGroups(favorites);

    await actionFinish();
}

const favGroupsLastModified = ['se-menu-fav-shops', 'se-menu-fav-ozoo', 'se-menu-fav-food'];

const favGroupsAZ = ['se-menu-fav-food', 'se-menu-fav-ozoo', 'se-menu-fav-shops'];

const favGroupsZA = ['se-menu-fav-shops', 'se-menu-fav-ozoo', 'se-menu-fav-food'];

const favGroupsNewDate = ['se-menu-fav-shops', 'se-menu-fav-ozoo', 'se-menu-fav-food'];

const favGroupsOldDate = ['se-menu-fav-food', 'se-menu-fav-ozoo', 'se-menu-fav-shops'];

const favGroupsOldDateAfterRename = ['se-menu-fav-ozoo', 'se-menu-fav-shops', 'se-menu-fav-food-renamed'];

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

async function deleteFavGroups(favorites) {
    for (const f of favorites) {
        const shortFavGroupName = f.name.split('-')[1];
        const exist = await actionCheckFileExist({ id: `se-menu-fav-${shortFavGroupName}` });
        if (exist) {
            await deleteFavGroup(shortFavGroupName);
        }
    }
    await waitBy(By.id('se-empty-page'));
}

async function uploadFavGroup(favorites, upload = true) {
    for (const f of favorites) {
        if (upload) {
            await uploadFavorites({ files: f.path });
        }
        const shortFavGroupName = f.name.split('-')[1];
        await actionIdleWait();
        await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));
    }
}
