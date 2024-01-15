import { clickBy, enclose, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test(shortFavGroupName, suffix) {
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
    await waitByRemoved(By.id(`se-actions-${shortFavGroupName}${suffix}`));
}
