import { By } from 'selenium-webdriver';
import { clickBy, waitBy, assert } from '../../lib.mjs';

import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionLogOut from '../../actions/login/actionLogOut.mjs';
import actionUploadGpx from '../../actions/actionUploadGpx.mjs';
import actionLocalToCloud from '../../actions/tracks/actionLocalToCloud.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionDeleteTracksByPattern from '../../actions/tracks/actionDeleteTracksByPattern.mjs';
import { deleteTrack, getFiles } from '../../util.mjs';
import { driver } from '../../options.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const tracks = getFiles({ folder: 'gpx' });
    const trackName = 'test-track-wpt';

    for (const track of tracks) {
        await actionDeleteTracksByPattern(track.name);
    }

    // Upload track with multiple waypoint groups
    await actionUploadGpx({ mask: trackName + '.gpx' });
    await clickBy(By.id('se-show-menu-planroute'));
    await actionLocalToCloud({ mask: trackName });

    // Open track
    await clickBy(By.id('se-cloud-track-' + trackName));

    // Open Waypoints tab
    await clickBy(By.css("[testid='se-tab-points']"));
    await waitBy(By.id('se-waypoints-tab-content'));

    const massSwitch = await driver.findElement(By.id('se-wpt-mass-visibility-switch'));
    const isOn = await massSwitch.isSelected(); // true = ON, false = OFF
    // Toggle mass visibility switch all groups should be visible after
    if (isOn) {
        await massSwitch.click();
        await massSwitch.click();
    } else {
        await massSwitch.click();
    }
    const isOnAfter = await massSwitch.isSelected();
    await assert(isOnAfter, 'Switch should be ON after click');

    await validateVisibleWaypointCount(9, 'Track should have 9 waypoints');

    // Test: Toggle first group visibility OFF
    await clickBy(By.id('se-wpt-group-visibility-groupA'));
    await validateVisibleWaypointCount(6, 'First group should be hidden');

    // log out and log in again
    await actionLogOut();
    await clickBy(By.id('se-login-button'));
    await actionLogIn();

    // open track
    await clickBy(By.id('se-show-menu-tracks'));
    await clickBy(By.id('se-cloud-track-' + trackName));
    await validateVisibleWaypointCount(6, 'First group should be hidden after reload');
    await clickBy(By.css("[testid='se-tab-points']"));

    // Test: Toggle second group visibility OFF
    await clickBy(By.id('se-wpt-group-visibility-groupB'));
    await validateVisibleWaypointCount(1, 'Both groups should be hidden');

    // Test: Toggle first group visibility ON
    await clickBy(By.id('se-wpt-group-visibility-groupA'));
    await actionIdleWait({ idle: 1000 });

    // log out and log in again
    await actionLogOut();
    await clickBy(By.id('se-login-button'));
    await actionLogIn();

    // open track
    await clickBy(By.id('se-show-menu-tracks'));
    await clickBy(By.id('se-cloud-track-' + trackName));
    await validateVisibleWaypointCount(4, 'First group should be visible again');
    await clickBy(By.css("[testid='se-tab-points']"));

    // Test: Toggle second group visibility ON
    await clickBy(By.id('se-wpt-group-visibility-groupB'));
    await validateVisibleWaypointCount(9, 'Both groups should be visible');

    // Close track and cleanup
    await clickBy(By.id('se-button-back'));
    await deleteTrack(trackName);
}

async function validateVisibleWaypointCount(expectedCount, message) {
    const countMarkers = async () => {
        const markers = await driver.findElements(By.className('leaflet-marker-icon'));
        const visible = [];
        for (const marker of markers) {
            const display = await marker.getCssValue('display');
            if (display !== 'none') {
                visible.push(marker);
            }
        }
        return visible;
    };

    await actionIdleWait({ idle: 1000 });

    const TIMEOUT_VISIBLE_MARKERS_MS = 3000;
    const deadline = Date.now() + TIMEOUT_VISIBLE_MARKERS_MS;
    let visibleMarkers = [];
    while (Date.now() < deadline) {
        visibleMarkers = await countMarkers();
        if (visibleMarkers.length === expectedCount) {
            break;
        }
        await actionIdleWait({ idle: 300 });
    }

    await assert(
        visibleMarkers.length === expectedCount,
        `${message}. Expected ${expectedCount}, got ${visibleMarkers.length}`
    );
}
