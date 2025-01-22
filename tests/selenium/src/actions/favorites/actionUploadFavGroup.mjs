import actionsUploadFavorites from './actionsUploadFavorites.mjs';
import actionIdleWait from '../actionIdleWait.mjs';
import { waitBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test(favorites, upload = true) {
    for (const f of favorites) {
        if (upload) {
            await actionsUploadFavorites({ files: f.path });
        }
        const shortFavGroupName = f.name.split('-')[1];
        await actionIdleWait();
        await waitBy(By.id(`se-menu-fav-${shortFavGroupName}`));
    }
}
