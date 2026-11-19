import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { clickBy, matchTextBy, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { deleteTrack, cleanupCloud } from '../../util.mjs';
import actionAddWpt from '../../actions/tracks/actionAddWpt.mjs';
import actionSaveLocalToCloud from '../../actions/tracks/actionSaveLocalToCloud.mjs';

const TRACK_NAME = 'se-test-edit-track-wpt';

const SELECTED_PIN = By.css('[id^="se-selected-marker-"]');
const PREVIEW_PIN = By.css('[id^="se-add-fav-map-preview--"]');
const PREVIEW_PIN_OCTAGON = By.css('[id*="--octagon--"]');

export default async function test() {
    try {
        await actionOpenMap();
        await actionLogIn();

        const wptName = 'MyWaypoint';
        const suffix = '-edited';

        await clickBy(By.id('se-show-menu-tracks'));

        // create new local track
        await clickBy(By.id('se-create-new-route'));

        // add waypoint via context menu
        await actionAddWpt(wptName);

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
        await actionSaveLocalToCloud({ name: TRACK_NAME });
        await clickBy(By.id('se-button-back'));

        // verify track saved with 1 waypoint
        await waitBy(By.id('se-' + TRACK_NAME));
        await matchTextBy(By.id('se-cloud-t-info-' + TRACK_NAME), '0 · 0:00 · 1');

        // clean up
        await deleteTrack(TRACK_NAME);

        await actionFinish();
    } finally {
        await cleanupCloud({ tracks: [TRACK_NAME] });
    }
}
