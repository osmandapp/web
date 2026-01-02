import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import { clickBy, getTextBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import actionImportCloudTrack from '../../actions/tracks/actionImportCloudTrack.mjs';
import actionCheckDisabled from '../../actions/actionCheckDisabled.mjs';
import { deleteTrack, getFiles } from '../../util.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { TEST_LOGIN2, TEST_PASSWORD2 } from '../../options.mjs';
import actionLogOut from '../../actions/login/actionLogOut.mjs';
import actionOpenShare from '../../actions/actionOpenShare.mjs';
import actionDeleteAllFavorites from '../../actions/favorites/actionDeleteAllFavorites.mjs';
import actionOpenFavorites from '../../actions/favorites/actionOpenFavorites.mjs';
import actionUploadFavGroup from '../../actions/favorites/actionUploadFavGroup.mjs';
import actionDeleteTracksByPattern from '../../actions/tracks/actionDeleteTracksByPattern.mjs';

export default async function test() {
    const tracks = getFiles({ folder: 'gpx' });
    const trackName = 'test-track-mixed';
    const trackName2 = 'test-wiki-kyiv';

    const favorites = getFiles({ folder: 'favorites' });
    const favNameShort = 'shops';
    const favName2Short = 'food';

    const userName = 'osmandtest2';

    let linkTrack1;
    let linkTrack2;
    let linkFav1;
    let linkFav2;

    //start
    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));

    // prepared tracks
    for (const track of tracks) {
        await actionDeleteTracksByPattern(track.name);
    }

    await actionImportCloudTrack(tracks, trackName);
    await actionImportCloudTrack(tracks, trackName2);

    // create shared track
    await actionOpenShare(trackName);

    linkTrack1 = await createShareFile(trackName);

    // check owner can open shared track
    await actionOpenMap(linkTrack1);
    await waitBy(By.id('se-share-file'));
    await clickBy(By.id('se-close-share-file'));

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));

    await actionOpenShare(trackName2);
    linkTrack2 = await createShareFile(trackName2);

    // prepared favorites

    await actionOpenFavorites();
    await actionDeleteAllFavorites(favorites);
    await actionUploadFavGroup(favorites);

    await actionOpenShare(favNameShort, 'favorite-folder');
    linkFav1 = await createShareFile(favNameShort);

    await clickBy(By.id('se-close-share-menu'));

    await actionOpenShare(favName2Short, 'favorite-folder');
    linkFav2 = await createShareFile(favName2Short);

    // send request to access from another user
    await actionLogOut();
    await clickBy(By.id('se-login-button'));
    await actionLogIn({ login: TEST_LOGIN2, password: TEST_PASSWORD2 });

    await actionOpenMap(linkTrack1);
    await waitBy(By.id('se-request-access-error'));
    await clickBy(By.id('se-request-access-btn'));

    await actionOpenMap(linkTrack2);
    await waitBy(By.id('se-request-access-error'));
    await clickBy(By.id('se-request-access-btn'));

    await actionOpenMap(linkFav1);
    await waitBy(By.id('se-request-access-error'));
    await clickBy(By.id('se-request-access-btn'));

    await actionOpenMap(linkFav2);
    await waitBy(By.id('se-request-access-error'));
    await clickBy(By.id('se-request-access-btn'));

    await actionLogOut();
    await clickBy(By.id('se-login-button'));
    // approve access
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));
    await approveAccessTrack(trackName, userName);
    await approveAccessTrack(trackName2, userName);

    await clickBy(By.id('se-show-menu-favorites'));
    await approveAccessFav(favNameShort, userName);
    await approveAccessFav(favName2Short, userName);

    await actionLogOut();
    await clickBy(By.id('se-login-button'));
    // check shared with me
    await actionLogIn({ login: TEST_LOGIN2, password: TEST_PASSWORD2 });
    // check shared link
    await actionOpenMap(linkTrack1);
    await waitBy(By.id('se-share-file'));
    await clickBy(By.id('se-close-share-file'));

    // check shared track
    await clickBy(By.id('se-show-menu-tracks'));
    await waitBy(By.id('se-smart-folder-share-track'));
    await clickBy(By.id('se-smart-folder-share-track'));
    await waitBy(By.id('se-tracks-folder'));
    await waitBy(By.id('se-cloud-track-' + trackName));
    await waitBy(By.id('se-cloud-track-' + trackName2));

    // check shared favorites
    await clickBy(By.id('se-show-menu-favorites'));
    await waitBy(By.id('se-smart-folder-share-favorite'));
    await clickBy(By.id('se-smart-folder-share-favorite'));
    await waitBy(By.id(`se-menu-fav-${favNameShort}`));
    await waitBy(By.id(`se-menu-fav-${favName2Short}`));

    await actionLogOut();
    await clickBy(By.id('se-login-button'));
    await actionLogIn();
    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));

    await deleteTrack(trackName);
    await deleteTrack(trackName2);

    await clickBy(By.id('se-show-menu-favorites'));
    await actionDeleteAllFavorites(favorites);

    await actionFinish();
}

async function createShareFile(name) {
    await waitBy(By.id('se-share-file-menu'));
    await waitBy(By.id(`se-share-file-item-${name}`));
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
    return link.split('/map/')[1];
}

async function approveAccessTrack(name, userName) {
    await actionOpenShare(name);
    await clickBy(By.id('se-pending-tab'));
    await waitBy(By.id(`se-user-access-item-${userName}`));
    await clickBy(By.id('se-approve-access'));
    await waitByRemoved(By.id(`se-user-access-item-${userName}`));
    await clickBy(By.id('se-approved-tab'));
    await waitBy(By.id(`se-user-access-item-${userName}`));
    await clickBy(By.id('se-close-share-menu'));
}

async function approveAccessFav(name, userName) {
    await actionOpenShare(name, 'favorite-folder');
    await clickBy(By.id('se-pending-tab'));
    await waitBy(By.id(`se-user-access-item-${userName}`));
    await clickBy(By.id('se-approve-access'));
    await waitByRemoved(By.id(`se-user-access-item-${userName}`));
    await clickBy(By.id('se-approved-tab'));
    await waitBy(By.id(`se-user-access-item-${userName}`));
    await clickBy(By.id('se-close-share-menu'));
}
