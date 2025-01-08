import { clickBy, enclose, waitBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test(trackName, suffix) {
    await waitBy(By.id(`se-actions-${trackName}`));
    await clickBy(By.id(`se-actions-${trackName}`));
    await waitBy(By.id('se-track-actions'));
    await clickBy(By.id('se-rename-cloud-track'));
    await waitBy(By.id('se-rename-track-dialog'));
    await enclose(
        async () => {
            const input = await waitBy(By.id('se-rename-track-input'));
            await input.sendKeys(suffix);
            return true;
        },
        { tag: 'rename-track' }
    );
    await clickBy(By.id('se-rename-track-submit'));
    await waitBy(By.id(`se-cloud-track-${trackName}${suffix}`));
}
