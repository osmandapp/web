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

    // Get initial marker count (find all visible waypoint markers on map)
    const initialMarkers = await getVisibleWaypointMarkers();
    const initialCount = initialMarkers.length;
    await assert(initialCount === 9, `Track should have 9 waypoints, got ${initialCount}`);

    // Test: Toggle first group visibility OFF
    await clickBy(By.id('se-wpt-group-visibility-groupA'));
    const afterFirstHide = await getVisibleWaypointMarkers();
    await assert(afterFirstHide.length === 6, `First group should be hidden. Expected 6, got ${afterFirstHide.length}`);

    // log out and log in again
    await actionLogOut();
    await clickBy(By.id('se-login-button'));
    await actionLogIn();

    // open track
    await clickBy(By.id('se-show-menu-tracks'));
    await clickBy(By.id('se-cloud-track-' + trackName));
    const afterReload = await getVisibleWaypointMarkers();
    await assert(afterReload.length === 6, `First group should be hidden. Expected 6, got ${afterReload.length}`);
    await clickBy(By.css("[testid='se-tab-points']"));

    // Test: Toggle second group visibility OFF
    await clickBy(By.id('se-wpt-group-visibility-groupB'));
    const afterSecondHide = await getVisibleWaypointMarkers();
    await assert(
        afterSecondHide.length === 1,
        `Both groups should be hidden. Expected 1, got ${afterSecondHide.length}`
    );

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

    const afterFirstShow = await getVisibleWaypointMarkers();
    await assert(
        afterFirstShow.length === 4,
        `First group should be visible again. Expected 4, got ${afterFirstShow.length}`
    );
    await clickBy(By.css("[testid='se-tab-points']"));

    // Test: Toggle second group visibility ON
    await clickBy(By.id('se-wpt-group-visibility-groupB'));
    const afterBothShow = await getVisibleWaypointMarkers();
    await assert(afterBothShow.length === 9, `Both groups should be visible. Expected 9, got ${afterBothShow.length}`);

    // Close track and cleanup
    await clickBy(By.id('se-button-back'));
    await deleteTrack(trackName);
}

// Helper function to count visible waypoint markers on the map
async function getVisibleWaypointMarkers() {
    await actionIdleWait({ idle: 1000 });
    // Find all waypoint markers that are visible (display !== 'none')
    const markers = await driver.findElements(By.className('leaflet-marker-icon'));

    const visibleMarkers = [];
    for (const marker of markers) {
        const display = await marker.getCssValue('display');
        if (display !== 'none') {
            visibleMarkers.push(marker);
        }
    }

    return visibleMarkers;
}
