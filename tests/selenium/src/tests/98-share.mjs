import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import { clickBy, getTextBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionImportCloudTrack from '../actions/tracks/actionImportCloudTrack.mjs';
import actionCheckDisabled from '../actions/actionCheckDisabled.mjs';
import { deleteTrack, getFiles, openShare } from '../util.mjs';
import actionIdleWait from '../actions/actionIdleWait.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { TEST_LOGIN2, TEST_PASSWORD2 } from '../options.mjs';
import actionLogOut from '../actions/login/actionLogOut.mjs';

export default async function test() {
    const trackName = 'test-routed-osrm';
    const tracks = getFiles({ folder: 'gpx' });
    const userName = 'osmandtest2';

    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));

    const exist = await waitBy(By.id(`se-cloud-track-${trackName}`), { optional: true, idle: true });
    if (exist) {
        await deleteTrack(trackName);
    }
    await actionImportCloudTrack(tracks, trackName);

    await openShare(trackName);

    await waitBy(By.id('se-share-file-menu'));
    await waitBy(By.id(`se-share-file-item-${trackName}`));
    await waitBy(By.id('se-share-type-Private'));
    await waitBy(By.id('se-private-access-list'));
    await waitByRemoved(By.id('se-public-access-list'));
    await waitByRemoved(By.id('se-user-access-list'));
    await actionCheckDisabled('se-share-generate-link');

    await clickBy(By.id('se-share-type'));

    await actionIdleWait();
    await waitBy(By.id('se-actions-share-type'));
    await clickBy(By.id('se-share-type-Request Only'));
    await waitByRemoved(By.id('se-actions-share-type'));
    await actionIdleWait();

    await waitBy(By.id('se-share-type-Request Only'));
    await waitByRemoved(By.id('se-private-access-list'));
    await waitByRemoved(By.id('se-public-access-list'));
    await waitBy(By.id('se-user-access-list'));

    await clickBy(By.id('se-share-generate-link'));
    await waitBy(By.id('se-copy-link'));

    let link = await getTextBy(By.id('se-generated-link'));
    link = link.split('/map/')[1];
    await actionOpenMap(link);
    await waitBy(By.id('se-share-file'));
    await clickBy(By.id('se-close-share-file'));

    await actionLogOut();
    await actionLogIn({ login: TEST_LOGIN2, password: TEST_PASSWORD2 });
    await actionOpenMap(link);

    await waitBy(By.id('se-request-access-error'));
    await clickBy(By.id('se-request-access-btn'));
    await actionLogOut();
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));
    await openShare(trackName);
    await clickBy(By.id('se-pending-tab'));
    await waitBy(By.id(`se-user-access-item-${userName}`));
    await clickBy(By.id('se-approve-access'));
    await waitByRemoved(By.id(`se-user-access-item-${userName}`));
    await clickBy(By.id('se-approved-tab'));
    await waitBy(By.id(`se-user-access-item-${userName}`));

    await actionLogOut();
    await actionLogIn({ login: TEST_LOGIN2, password: TEST_PASSWORD2 });
    await actionOpenMap(link);
    await waitBy(By.id('se-share-file'));
    await clickBy(By.id('se-close-share-file'));

    await actionLogOut();
    await actionLogIn();
    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));

    await deleteTrack(trackName);

    await actionFinish();
}
