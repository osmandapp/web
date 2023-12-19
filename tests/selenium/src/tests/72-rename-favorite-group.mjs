import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import { deleteFavGroup, getFiles, uploadFavorites } from '../util.mjs';
import { clickBy, enclose, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionCheckFileExist from '../actions/actionCheckFileExist.mjs';
import actionFinish from '../actions/actionFinish.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favGroupName = 'favorites-shops';
    const shortFavGroupName = 'shops';
    const suffix = '-renamed';

    const favorites = getFiles({ folder: 'favorites' });
    const { path } = favorites.find((t) => t.name === favGroupName);

    // open favorite menu
    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-favorites'));

    // delete old group when need
    const exist = await actionCheckFileExist({ id: `se-menu-fav-${shortFavGroupName}` });

    if (!exist) {
        // create folder
        await clickBy(By.id('se-import-fav-group'));
        await uploadFavorites({ files: path });
        await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));
    }

    // delete duplicate old group when need
    const existDuplicate = await actionCheckFileExist({ id: `se-menu-fav-${shortFavGroupName}${suffix}` });
    if (existDuplicate) {
        await deleteFavGroup(`${shortFavGroupName}${suffix}`);
    }

    //rename folder
    await waitBy(By.id(`se-folder-actions-button-${shortFavGroupName}`));
    await clickBy(By.id(`se-folder-actions-button-${shortFavGroupName}`));
    await waitBy(By.id('se-favorite-folder-actions'));
    await clickBy(By.id('se-folder-actions-rename'));
    await waitBy(By.id('se-rename-fav-dialog'));
    await enclose(
        async () => {
            const input = await waitBy(By.id('se-rename-fav-input'));
            await input.sendKeys(suffix);
            return true;
        },
        { tag: 'rename-fav-group' }
    );
    await clickBy(By.id('se-rename-fav-submit'));
    await waitBy(By.id(`se-actions-${shortFavGroupName}${suffix}`), { hidden: true });

    // check error "Favorite group already exists"
    await clickBy(By.id(`se-folder-actions-button-${shortFavGroupName}${suffix}`));
    await waitBy(By.id('se-favorite-folder-actions'));
    await clickBy(By.id('se-folder-actions-rename'));
    await waitBy(By.id('se-rename-fav-dialog'));
    await clickBy(By.id('se-rename-fav-submit'));
    await waitBy(By.id('se-rename-fav-input-helper-text'));

    await clickBy(By.id('se-rename-fav-cancel'));

    await deleteFavGroup(`${shortFavGroupName}${suffix}`);
    await waitBy(By.id('se-empty-page'));

    await actionFinish();
}
