import { By } from 'selenium-webdriver';
import { assert, clickBy, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';

import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionUploadGpx from '../../actions/actionUploadGpx.mjs';
import actionLocalToCloud from '../../actions/tracks/actionLocalToCloud.mjs';
import actionDeleteTracksByPattern from '../../actions/tracks/actionDeleteTracksByPattern.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { deleteTrack } from '../../util.mjs';


export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const trackName = 'test-track-mixed';

    await actionDeleteTracksByPattern(trackName);

    await actionUploadGpx({ mask: `${trackName}.gpx` });
    await clickBy(By.id('se-show-menu-planroute'));
    await actionLocalToCloud({ mask: trackName });

    await searchForTrack(trackName);
    
    await waitBy(By.id('se-search-results'));
    const trackResultId = `se-search-result-${trackName}.gpx`;
    await clickBy(By.id(trackResultId));
    await waitBy(By.id('se-track-context-menu'));
    await waitBy(By.id(`se-track-${trackName}`));

    await clickBy(By.id('se-button-close'));

    await waitBy(By.id('se-search-results'));
    await waitBy(By.id(trackResultId));

    await clickBy(By.id('se-show-menu-tracks'));
    await waitBy(By.id(`se-cloud-track-${trackName}`));
    await deleteTrack(trackName);

    await searchForTrack(trackName);
    
    await waitBy(By.id('se-empty-search'));
    const deletedTrackResult = await waitBy(By.id(trackResultId), { optional: true, idle: true });
    await assert(!deletedTrackResult, `Deleted track "${trackName}" should be absent in search results`);

    await actionFinish();
}

async function searchForTrack(trackName) {
    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-search'));
    await waitBy(By.id('se-search-input'));
    await clickBy(By.id('se-search-input-cancel'), { optional: true });
    await sendKeysBy(By.id('se-search-input'), `${trackName}\n`);
    await waitByRemoved(By.id('se-loading-page'), { optional: true });
}