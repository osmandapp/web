import { By } from 'selenium-webdriver';
import { clickBy, waitBy, waitByRemoved, assert } from '../../lib.mjs';

import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
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

    await clickBy(By.id('se-show-menu-tracks'));
    for (const track of tracks) {
        await actionDeleteTracksByPattern(track.name);
    }

    // Upload track with multiple waypoint groups
    await actionUploadGpx({ mask: trackName + '.gpx' });

    // Test local track WPT group visibility persistence (regression: visibility lost after close/reopen)
    await clickBy(By.id(`se-local-track-${trackName}`));
    await waitBy(By.id('se-track-context-menu'));
    await clickBy(By.css("[testid='se-tab-points']"));
    await waitBy(By.id('se-waypoints-tab-content'));
    await validateVisibleWaypointCount(9, 'Local: all waypoints visible');
    await clickBy(By.id('se-wpt-group-visibility-groupA'));
    await validateVisibleWaypointCount(6, 'Local: groupA hidden');

    // Close and reopen WITHOUT page refresh — visibility must survive
    await clickBy(By.id('se-button-back'));
    await waitByRemoved(By.id('se-track-context-menu'));
    await clickBy(By.id(`se-local-track-${trackName}`));
    await waitBy(By.id('se-track-context-menu'));
    await validateVisibleWaypointCount(6, 'Local: groupA must stay hidden after close/reopen without page refresh');
    await clickBy(By.id('se-button-back'));
    await waitByRemoved(By.id('se-track-context-menu'));

    // Page refresh — IndexedDB must carry the updated pointsGroups
    await driver.navigate().refresh();
    await actionIdleWait();
    await waitBy(By.id(`se-local-track-${trackName}`));
    await clickBy(By.id(`se-local-track-${trackName}`));
    await waitBy(By.id('se-track-context-menu'));
    await validateVisibleWaypointCount(6, 'Local: groupA must stay hidden after page refresh (IndexedDB)');

    // Restore visibility and continue
    await clickBy(By.css("[testid='se-tab-points']"));
    await waitBy(By.id('se-waypoints-tab-content'));
    await clickBy(By.id('se-wpt-group-visibility-groupA'));
    await validateVisibleWaypointCount(9, 'Local: all waypoints visible after restore');
    await actionIdleWait({ idle: 1000 });
    await clickBy(By.id('se-button-back'));
    await waitByRemoved(By.id('se-track-context-menu'));

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

    // Test: Toggle first group visibility OFF, check close/reopen and page refresh
    await clickBy(By.id('se-wpt-group-visibility-groupA'));
    await validateVisibleWaypointCount(6, 'First group should be hidden');

    // close/reopen without refresh — visibility must survive in-memory
    await clickBy(By.id('se-button-back'));
    await waitByRemoved(By.id('se-track-context-menu'));
    await clickBy(By.id('se-cloud-track-' + trackName));
    await validateVisibleWaypointCount(6, 'First group must stay hidden after close/reopen');
    await driver.navigate().refresh();
    await waitBy(By.id('se-track-context-menu'));
    await waitByRemoved(By.id('se-info-files-loading'));
    await validateVisibleWaypointCount(6, 'First group should be hidden after page refresh');

    // Test: Toggle second group OFF, first group ON, verify mixed state persists after refresh
    await clickBy(By.css("[testid='se-tab-points']"));
    await clickBy(By.id('se-wpt-group-visibility-groupB'));
    await validateVisibleWaypointCount(1, 'Both groups should be hidden');
    await clickBy(By.id('se-wpt-group-visibility-groupA'));
    await actionIdleWait();
    await driver.navigate().refresh();
    await waitBy(By.id('se-track-context-menu'));
    await waitByRemoved(By.id('se-info-files-loading'));
    await validateVisibleWaypointCount(4, 'First group visible, second hidden after page refresh');
    await clickBy(By.css("[testid='se-tab-points']"));

    // Test: Toggle second group visibility ON — all visible
    await clickBy(By.id('se-wpt-group-visibility-groupB'));
    await validateVisibleWaypointCount(9, 'Both groups should be visible');

    // Test: open a wpt from the list and verify selected pin appears on map
    await clickBy(By.id('se-wpt-group-header-waypoints')); // expand the group
    await waitBy(By.id('se-wpt-row-VELO-0'));
    await clickBy(By.id('se-wpt-row-VELO-0'));
    await waitBy(By.id('se-wpt-details'));
    await waitBy(By.css('[id^="se-selected-marker-"]'));

    // close wpt details — selected pin should disappear
    await clickBy(By.id('se-back-wpt-details'));
    await waitByRemoved(By.id('se-wpt-details'));
    await waitByRemoved(By.css('[id^="se-selected-marker-"]'));

    // Close track and cleanup
    await clickBy(By.id('se-button-close'));
    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-tracks'));
    await deleteTrack(trackName);
}

async function countVisibleWaypointMarkers() {
    const markers = await driver.findElements(By.className('leaflet-marker-icon'));
    const visible = [];
    for (const marker of markers) {
        const display = await marker.getCssValue('display');
        if (display !== 'none') {
            visible.push(marker);
        }
    }
    return visible;
}

async function validateVisibleWaypointCount(expectedCount, message, timeout = 3000) {
    await actionIdleWait({ idle: 1000 });
    const deadline = Date.now() + timeout;
    let visibleMarkers = [];
    while (Date.now() < deadline) {
        visibleMarkers = await countVisibleWaypointMarkers();
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
