import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import { clickBy, matchTextBy, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionFinish from '../actions/actionFinish.mjs';
import actionImportCloudTrack from '../actions/tracks/actionImportCloudTrack.mjs';
import actionCreateNewFolder from '../actions/actionCreateNewFolder.mjs';
import { deleteTrack, getFilesByName } from '../util.mjs';
import actionDeleteFolder from '../actions/actionDeleteFolder.mjs';

export const UPLOAD_TRACK = 'upload track';

export default async function test() {
    const trackName = 'atv-2024-poltava-kh';
    const trackNameWithExt = `${trackName}.kmz`;
    const files = getFilesByName({ folder: 'other' });

    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));

    await actionCreateNewFolder(UPLOAD_TRACK);

    await clickBy(By.id(`se-menu-cloud-${UPLOAD_TRACK}`));
    await waitBy(By.id(`se-cloud-name-track`));

    await clickBy(By.id('se-import-cloud-track'));

    await actionImportCloudTrack(files, trackNameWithExt, trackName);
    await matchTextBy(By.id('se-cloud-t-info-' + trackName), '225.67 km · 0:00');

    await deleteTrack(trackName);

    await waitBy(By.id('se-import-first-track'));

    await clickBy(By.id('se-back-folder-button-visible'));
    await waitBy(By.id(`se-menu-cloud-${UPLOAD_TRACK}`));
    await actionDeleteFolder(UPLOAD_TRACK);

    await actionFinish();
}
