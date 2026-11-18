import { By } from 'selenium-webdriver';
import { clickBy, enclose, getOpenTrackName, waitBy } from '../../lib.mjs';
import { driver } from '../../options.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionCreateRoute, { ROUTE_POINTS } from '../../actions/tracks/actionCreateRoute.mjs';
import ignoreTest from '../../actions/actionIgnoreTest.mjs';

const SUFFIX = '-renamed';

export default async function test() {
    ignoreTest();

    await actionOpenMap('#15/50.4946/30.5220');
    await actionCreateRoute(ROUTE_POINTS);
    const name = await getOpenTrackName();

    await clickBy(By.id(`se-actions-${name}`));
    await clickBy(By.id('se-rename-local-track'));
    const input = await waitBy(By.id('se-rename-track-input'));
    await input.sendKeys(SUFFIX);
    await clickBy(By.id('se-rename-track-submit'));
    await waitBy(By.id(`se-actions-${name}${SUFFIX}`));

    // an undo after a rename keeps one track, under the new name
    await clickBy(By.id('se-panel-button-undo'));
    await actionIdleWait();
    await clickBy(By.id('se-show-menu-planroute'));
    await waitBy(By.id(`se-local-track-${name}${SUFFIX}`));
    await enclose(async () => (await driver.findElements(By.id(`se-local-track-${name}`))).length === 0, {
        tag: 'no track under the old name',
    });

    await actionFinish();
}
