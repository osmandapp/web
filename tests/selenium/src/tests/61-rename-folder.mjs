import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import { clickBy, enclose, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionPrepareFolder from '../actions/actionPrepareFolder.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import actionDeleteFolder from '../actions/actionDeleteFolder.mjs';
import { getFiles } from '../util.mjs';
import actionDeleteTracksByPattern from '../actions/tracks/actionDeleteTracksByPattern.mjs';

export default async function test() {
    const folder = 'rename';
    const suffix = '-renamed';
    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));

    for (const track of getFiles({ folder: 'gpx' })) {
        await actionDeleteTracksByPattern(track.name);
    }

    await actionPrepareFolder(folder);

    await clickBy(By.id(`se-folder-actions-button-${folder}`));
    await waitBy(By.id('se-folder-actions'));
    await clickBy(By.id('se-folder-actions-rename'));
    await waitBy(By.id('se-rename-group-dialog'));
    await enclose(
        async () => {
            const input = await waitBy(By.id('se-rename-group-input'));
            await input.sendKeys(suffix);
            return true;
        },
        { tag: 'rename-group' }
    );
    await clickBy(By.id('se-rename-group-submit'));
    await waitBy(By.id(`se-menu-cloud-${folder}${suffix}`));

    await actionDeleteFolder(`${folder}${suffix}`);

    await actionFinish();
}
