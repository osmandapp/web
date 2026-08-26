import { By } from 'selenium-webdriver';
import { clickBy, waitBy, waitByRemoved } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionAddOneTrack from '../../actions/tracks/actionAddOneTrack.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { deleteTrack } from '../../util.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const trackName = 'test-routed-osrm';

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));

    await actionAddOneTrack(trackName);
    await clickBy(By.id(`se-cloud-track-${trackName}`));
    await waitBy(By.id('se-track-context-menu'));

    await actionIdleWait({ idle: 3000 });
    await waitByRemoved(By.id('se-loadingSrtm'));

    await waitBy(By.id('se-main-graph'));

    await clickBy(By.id('se-button-back'));
    await deleteTrack(trackName);

    await actionFinish();
}
