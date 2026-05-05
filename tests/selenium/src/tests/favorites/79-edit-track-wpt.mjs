import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenContextMenu from '../../actions/map/actionOpenContextMenu.mjs';
import { clickBy, matchTextBy, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { deleteTrack, getFiles } from '../../util.mjs';
import actionDeleteTracksByPattern from '../../actions/tracks/actionDeleteTracksByPattern.mjs';

const SELECTED_PIN = By.css('[id^="se-selected-marker-"]');
const PREVIEW_PIN = By.css('[id^="se-add-fav-map-preview--"]');
const PREVIEW_PIN_OCTAGON = By.css('[id*="--octagon--"]');

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const wptName = 'MyWaypoint';
    const suffix = '-edited';
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

    // selected pin should appear on map when wpt details open
    await waitBy(SELECTED_PIN);

    // open edit dialog
    await clickBy(By.id('se-edit-fav-item'));
    await waitBy(By.id('se-edit-fav-dialog'));

    // preview pin should appear on map during edit
    await waitBy(PREVIEW_PIN);

    // change shape to octagon — preview pin id should update accordingly
    await clickBy(By.id('se-favorite-shape-1'));
    await waitBy(PREVIEW_PIN_OCTAGON);

    // edit waypoint name and save
    await sendKeysBy(By.id('se-fav-name-input'), suffix);
    await clickBy(By.id('se-edit-fav-item-submit'));
    await matchTextBy(By.id('se-wpt-name'), `${wptName}${suffix}`);

    // selected pin should still be on map after saving edit
    await waitBy(SELECTED_PIN);

    // go back to track editor and save to cloud
    await clickBy(By.id('se-back-wpt-details'));
    await waitByRemoved(By.id('se-wpt-details'));
    // selected pin should disappear after closing wpt details
    await waitByRemoved(SELECTED_PIN);
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
