import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import { clickBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { deleteTrack, getFiles } from '../../util.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenFavorites from '../../actions/favorites/actionOpenFavorites.mjs';
import actionDeleteAllFavorites from '../../actions/favorites/actionDeleteAllFavorites.mjs';
import actionDeleteFavGroup from '../../actions/favorites/actionDeleteFavGroup.mjs';
import actionsUploadFavorites from '../../actions/favorites/actionsUploadFavorites.mjs';
import actionUploadGpx from '../../actions/actionUploadGpx.mjs';
import actionLocalToCloud from '../../actions/tracks/actionLocalToCloud.mjs';
import actionDeleteTracksByPattern from '../../actions/tracks/actionDeleteTracksByPattern.mjs';

const GROUP_NAME = 'ozoo';
const GROUP_COLOR = '00FF00';
const GROUP_ICON = 'amenity_fire_station';
const GROUP_BG = 'square';

const POINTS = [
    { name: 'Ведмежий притулок Домажир', bg: 'square', icon: 'special_star' },
    { name: 'Водоспад Шипіт', bg: 'circle', icon: 'suburb' },
    { name: 'Скеля Довбуша', bg: GROUP_BG, icon: 'special_star' }, // no bg → from group
    { name: 'Озеро Синевир', bg: 'octagon', icon: GROUP_ICON }, // no icon → from group
];

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const favorites = getFiles({ folder: 'favorites' });

    // prepare — delete all favorites
    await actionOpenFavorites();
    await actionDeleteAllFavorites(favorites);

    // upload ozoo group
    const { path } = favorites.find((t) => t.name === `favorites-${GROUP_NAME}`);
    await clickBy(By.id('se-import-fav-group'));
    await actionsUploadFavorites({ files: path });
    await waitBy(By.id(`se-menu-fav-${GROUP_NAME}`));

    await waitBy(By.id(`se-fav-group-icon-${GROUP_NAME}-rgb(0 255 0)`)); // hexToRgba('#00FF00') → rgb(0 255 0)

    // open group folder
    await clickBy(By.id(`se-menu-fav-${GROUP_NAME}`));
    await waitByRemoved(By.id(`se-menu-fav-${GROUP_NAME}`));
    await waitBy(By.id(`se-opened-fav-group-${GROUP_NAME}`));

    // check each point: open → edit → verify preview marker id (bg--icon--color)
    for (const point of POINTS) {
        const expectedPreviewId = favPreviewMarkerId(point.bg, point.icon, GROUP_COLOR);

        await clickBy(By.id(`se-fav-item-name-${point.name}`));
        await waitBy(By.id(`se-fav-item-info-${point.name}`));

        await clickBy(By.id('se-edit-fav-item'));
        await waitBy(By.id('se-edit-fav-dialog'));

        // preview marker must show group color + resolved bg + resolved icon
        await waitBy(By.id(expectedPreviewId));

        await clickBy(By.id('se-back-edit-wpt-panel'));
        await waitByRemoved(By.id('se-edit-fav-dialog'));

        await clickBy(By.id('se-back-wpt-details'));
        await waitByRemoved(By.id(`se-fav-item-info-${point.name}`));
    }

    // cleanup
    await clickBy(By.id('se-back-folder-button-favorites'));
    await waitBy(By.id(`se-menu-fav-${GROUP_NAME}`));
    await actionDeleteFavGroup(GROUP_NAME);
    await waitBy(By.id('se-empty-page'));

    // --- Track WPT group color fallback ---
    const trackName = 'test-track-wpt';
    // groupA: #ff0000 (red), groupB: #00ff00 (green) — all points have no own color
    const TRACK_GROUPS = [
        { group: 'groupA', point: 'VELO-6', hex: 'FF0000' },
        { group: 'groupB', point: 'VELO-3', hex: '00FF00' },
    ];

    await clickBy(By.id('se-show-menu-tracks'));
    await actionDeleteTracksByPattern(trackName);

    await actionUploadGpx({ mask: trackName + '.gpx' });
    await clickBy(By.id('se-show-menu-planroute'));
    await actionLocalToCloud({ mask: trackName });

    // open track from cloud
    await clickBy(By.id(`se-cloud-track-${trackName}`));
    await waitBy(By.id('se-track-context-menu'));

    // go to waypoints tab
    await clickBy(By.css("[testid='se-tab-points']"));
    await waitBy(By.id('se-waypoints-tab-content'));

    // check one point from each group: click → selected marker id encodes resolved group color
    for (const { group, point, hex } of TRACK_GROUPS) {
        // expand group (groups are collapsed by default when multiple exist)
        await clickBy(By.id(`se-wpt-group-header-${group}`));
        await waitBy(By.id(`se-wpt-row-${point}`));

        await clickBy(By.id(`se-wpt-row-${point}`));
        await waitBy(By.id('se-wpt-details'));

        await waitBy(By.id(`se-selected-marker-${point}-${hex}`));

        await clickBy(By.id('se-back-wpt-details'));
        await waitByRemoved(By.id('se-wpt-details'));
    }

    // cleanup track
    await clickBy(By.id('se-button-back'));
    await deleteTrack(trackName);

    await actionFinish();
}

function favPreviewMarkerId(background, icon, color) {
    const c = String(color ?? '').replace(/^#/, '');
    return `se-add-fav-map-preview--${background}--${icon}--${c}`;
}
