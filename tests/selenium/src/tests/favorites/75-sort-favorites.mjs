import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import { getFiles } from '../../util.mjs';
import { clickBy, enclose, enumerateIds, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { driver } from '../../options.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionRenameFavGroup from '../../actions/favorites/actionRenameFavGroup.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionOpenFavorites from '../../actions/favorites/actionOpenFavorites.mjs';
import actionDeleteAllFavorites from '../../actions/favorites/actionDeleteAllFavorites.mjs';
import actionDeleteFavGroup from '../../actions/favorites/actionDeleteFavGroup.mjs';
import actionUploadFavGroup from '../../actions/favorites/actionUploadFavGroup.mjs';
import setView from '../../actions/setView.mjs';

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

    // check item sort is kept after a point was opened and closed, and after a reload
    await clickBy(By.id('se-sort-button-time-favorites'));
    await waitBy(By.id('se-sort-menu'));
    await clickBy(By.id('se-sort-za'));
    await validateItemOrder(favItemsFoodZA);
    await clickBy(By.id('se-fav-item-name-111test'));
    await waitBy(By.id('se-fav-item-info-111test'));
    await clickBy(By.id('se-back-wpt-details'));
    await waitByRemoved(By.id('se-fav-item-info-111test'));
    await validateItemOrder(favItemsFoodZA);
    await actionOpenMap();
    await actionOpenFavorites();
    await clickBy(By.id('se-menu-fav-food'));
    await waitBy(By.id('se-opened-fav-group-food'));
    await validateItemOrder(favItemsFoodZA);

    // check item sort by nearest to map center
    // the points of the city in the map center go first, the order inside a city depends on the visible map area
    await setView({ lat: 50.4719142, lon: 30.5059648, zoom: 15 });
    await clickBy(By.id('se-sort-button-za-favorites'));
    await waitBy(By.id('se-sort-menu'));
    await clickBy(By.id('se-sort-nearestMapCenter'));
    await waitBy(By.id('se-sort-button-nearestMapCenter-favorites'));
    await validateItemClusters([favItemsFoodKyiv, favItemsFoodLviv, favItemsFoodKrakow]);
    const distancesFromKyiv = await readItemDistances();

    // check the order is kept when the map is moved
    await setView({ lat: 50.0508012, lon: 19.9421275, zoom: 15 });
    await actionIdleWait();
    await validateItemClusters([favItemsFoodKyiv, favItemsFoodLviv, favItemsFoodKrakow]);

    // check the distances follow the map center while the order is kept
    await validateDistancesChanged(distancesFromKyiv);

    // check picking the option again re-sorts the list from the new map center
    await clickBy(By.id('se-sort-button-nearestMapCenter-favorites'));
    await waitBy(By.id('se-sort-menu'));
    await clickBy(By.id('se-sort-nearestMapCenter'));
    await waitByRemoved(By.id('se-sort-menu'));
    await validateItemClusters([favItemsFoodKrakow, favItemsFoodLviv, favItemsFoodKyiv]);

    // move the map back, the open list keeps its order
    await setView({ lat: 50.4719142, lon: 30.5059648, zoom: 15 });
    await actionIdleWait();
    await validateItemClusters([favItemsFoodKrakow, favItemsFoodLviv, favItemsFoodKyiv]);

    // check item sort is restored after the group is reopened
    await clickBy(By.id('se-back-folder-button-favorites'));
    await clickBy(By.id('se-menu-fav-food'));
    await waitBy(By.id('se-opened-fav-group-food'));
    await waitBy(By.id('se-sort-button-nearestMapCenter-favorites'));

    // check reopening the group sorts the list by the distances it shows
    await validateItemsSortedByDistance(favItemsFood.length);

    // check save prev groups sort
    await clickBy(By.id('se-back-folder-button-favorites'));
    await waitBy(By.id('se-sort-button-oldDate-favorites'));

    // check save prev groups sort after rename
    await actionRenameFavGroup(shortFavGroupName, suffix);
    await waitBy(By.id('se-sort-button-oldDate-favorites'));
    await waitBy(By.id(`se-menu-fav-${shortFavGroupName}${suffix}`));
    await validateGroupOrder(favGroupsOldDateAfterRename);

    // check item sort is kept after the group is renamed
    await clickBy(By.id(`se-menu-fav-${shortFavGroupName}${suffix}`));
    await waitBy(By.id(`se-opened-fav-group-${shortFavGroupName}${suffix}`));
    await waitBy(By.id('se-sort-button-nearestMapCenter-favorites'));
    await clickBy(By.id('se-back-folder-button-favorites'));
    await waitBy(By.id('se-sort-button-oldDate-favorites'));

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
    await validateGroupOrder(favGroupsOldDateAfterRename);

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

// last modified first; the points without a time go last in name order
const favItemsFood = [
    'se-fav-item-name-Parkingtest',
    'se-fav-item-name-Plac Szczepański (Stare Miasto) 7',
    'se-fav-item-name-Józefa (Kraków) 14',
    'se-fav-item-name-Świętej Katarzyny (Stare Miasto) 2',
    'se-fav-item-name-Крива Липа',
    'se-fav-item-name-111test',
    'se-fav-item-name-ssssарарар',
    'se-fav-item-name-ывывыв',
];

const favItemsFoodZA = [
    'se-fav-item-name-ывывыв',
    'se-fav-item-name-Крива Липа',
    'se-fav-item-name-Świętej Katarzyny (Stare Miasto) 2',
    'se-fav-item-name-ssssарарар',
    'se-fav-item-name-Plac Szczepański (Stare Miasto) 7',
    'se-fav-item-name-Parkingtest',
    'se-fav-item-name-Józefa (Kraków) 14',
    'se-fav-item-name-111test',
];

const favItemsFoodKyiv = ['se-fav-item-name-ssssарарар', 'se-fav-item-name-ывывыв'];

const favItemsFoodLviv = ['se-fav-item-name-Крива Липа'];

const favItemsFoodKrakow = [
    'se-fav-item-name-111test',
    'se-fav-item-name-Józefa (Kraków) 14',
    'se-fav-item-name-Parkingtest',
    'se-fav-item-name-Plac Szczepański (Stare Miasto) 7',
    'se-fav-item-name-Świętej Katarzyny (Stare Miasto) 2',
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

async function validateItemClusters(clusters) {
    await enclose(
        async () => {
            const ids = await enumerateIds('se-fav-item-name-');
            let start = 0;

            return (
                ids.length === clusters.flat().length &&
                clusters.every((cluster) => {
                    const part = ids.slice(start, start + cluster.length);
                    start += cluster.length;

                    return part.every((id) => cluster.includes(id));
                })
            );
        },
        { tag: 'validateFavItemsNearest' }
    );
}

async function validateDistancesChanged(before) {
    await enclose(
        async () => {
            const distances = await readItemDistances();

            return distances.length === before.length && distances.every((d, i) => d !== before[i]);
        },
        { tag: 'validateFavItemsDistanceChanged' }
    );
}

async function validateItemsSortedByDistance(count) {
    await enclose(
        async () => {
            const distances = await readItemDistances();

            return (
                distances.length === count &&
                distances.every((d, i) => d !== null && (i === 0 || distances[i - 1] <= d))
            );
        },
        { tag: 'validateFavItemsSortedByDistance' }
    );
}

async function readItemDistances() {
    return await enclose(
        async () => {
            const distances = [];
            for (const id of await enumerateIds('se-fav-item-name-')) {
                const name = id.slice('se-fav-item-name-'.length);
                const spans = await driver.findElement(By.id(id)).findElements(By.id(`se-fav-item-distance-${name}`));
                distances.push(spans.length > 0 ? parseDistance(await spans[0].getText()) : null);
            }

            return distances;
        },
        { tag: 'readFavItemsDistance' }
    );
}

function parseDistance(text) {
    const match = text.match(/^([\d.]+)\s*(km|m)$/);

    return match ? Number(match[1]) * (match[2] === 'km' ? 1000 : 1) : null;
}
