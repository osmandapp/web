import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenContextMenu from '../../actions/map/actionOpenContextMenu.mjs';
import { clickBy, matchTextBy, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { deleteTrack, getFiles } from '../../util.mjs';
import actionDeleteTracksByPattern from '../../actions/tracks/actionDeleteTracksByPattern.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const wptName = 'MyWaypoint';
    const trackName = getFormattedDate();

    // prepare — clean up any tracks from previous runs
    await clickBy(By.id('se-show-menu-tracks'));
    for (const track of getFiles({ folder: 'gpx' })) {
        await actionDeleteTracksByPattern(track.name);
    }

    // create new local track
    await clickBy(By.id('se-create-new-route'));

    // add waypoint via context menu
    await actionOpenContextMenu();
    await clickBy(By.id('se-add-wpt-action'));
    await waitBy(By.id('se-add-fav-dialog'));
    await sendKeysBy(By.id('se-fav-name-input'), wptName);
    await clickBy(By.id('se-add-fav-btn'));
    await waitByRemoved(By.id('se-add-fav-dialog'));
    await waitBy(By.className('leaflet-marker-icon'));

    // switch to waypoints tab
    await clickBy(By.css('[testid="se-tab-points"]'));
    await waitBy(By.id('se-waypoints-tab-content'));

    // open waypoint details by clicking on the row
    await clickBy(By.id(`se-wpt-row-${wptName}`));
    await waitBy(By.id('se-wpt-details'));

    // verify WptDetails shows correct name
    await matchTextBy(By.id('se-wpt-name'), wptName);

    // go back to track editor and save to cloud
    await clickBy(By.id('se-back-wpt-details'));
    await waitByRemoved(By.id('se-wpt-details'));
    await waitBy(By.id('se-local-track-actions-save-to-cloud'));
    await clickBy(By.id('se-local-track-actions-save-to-cloud'));
    await waitBy(By.id('se-save-track-dialog'));
    await clickBy(By.id('se-submit-save-to-cloud'));
    await waitBy(By.id('se-track-actions-edit'));
    await clickBy(By.id('se-button-back'));

    // verify track saved with 1 waypoint
    await waitBy(By.id('se-' + trackName));
    await matchTextBy(By.id('se-cloud-t-info-' + trackName), '0 · 0:00 · 1');

    // clean up
    await deleteTrack(trackName);

    await actionFinish();
}

function getFormattedDate() {
    const date = new Date();
    return date.toDateString();
}
