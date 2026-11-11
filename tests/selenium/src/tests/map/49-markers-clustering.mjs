import { readFileSync } from 'node:fs';
import { By } from 'selenium-webdriver';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionLogOut from '../../actions/login/actionLogOut.mjs';
import actionSwitchUser from '../../actions/login/actionSwitchUser.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionIdleWait from '../../actions/actionIdleWait.mjs';
import actionOpenShare from '../../actions/actionOpenShare.mjs';
import actionSetShareType from '../../actions/actionSetShareType.mjs';
import actionUploadGpx from '../../actions/actionUploadGpx.mjs';
import actionOpenFavorites from '../../actions/favorites/actionOpenFavorites.mjs';
import actionUploadFavGroup from '../../actions/favorites/actionUploadFavGroup.mjs';
import actionDeleteFavGroup from '../../actions/favorites/actionDeleteFavGroup.mjs';
import actionImportCloudTrack from '../../actions/tracks/actionImportCloudTrack.mjs';
import actionDeleteTracksByPattern from '../../actions/tracks/actionDeleteTracksByPattern.mjs';
import setView from '../../actions/setView.mjs';
import { assert, clickBy, enclose, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { deleteTrack, getFilesByName } from '../../util.mjs';
import { driver, TEST_LOGIN2, TEST_PASSWORD2 } from '../../options.mjs';

const DATA_FOLDER = 'other';
const TRACK = 'clustering-wpts';
const FAV_FILE = 'favorites-clustering';
const FAV_GROUP = 'clustering';
const WPT_PREFIX = 'cluster wpt ';
const WPT_COORDS = /<wpt lat="([-\d.]+)" lon="([-\d.]+)"/g;

const SECOND_USER = { login: TEST_LOGIN2, password: TEST_PASSWORD2 };
const PUBLIC_SHARE = 'Anyone';

const FAR_ZOOM = 13;
const NEAR_ZOOM = 18;
const PAN_POINTS = 150;
const SAME_PLACE_DEG = 0.000001;

const KYIV_CENTER = { lat: 50.4501, lon: 30.5234 };
const POI_CATEGORY = 'Cafe and restaurant';
const SEARCH_WORD = 'silpo';
const SERVER_CANDIDATES = 5;

export default async function test() {
    const track = readDataFile(TRACK);
    const favorites = readDataFile(FAV_FILE);

    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-menu-tracks'));
    await actionDeleteTracksByPattern(TRACK);
    await actionOpenFavorites();
    await deleteFavGroupIfExists();

    await checkPlanRouteTrack(track);
    await checkCloudTrack(track);
    await checkSharedTrack(track);
    await checkFavorites(favorites);

    await checkPoiOverlay();
    await checkSearchResults();
    await checkExplore();
    await checkTransportStops();

    await clickBy(By.id('se-show-menu-tracks'));
    await actionDeleteTracksByPattern(TRACK);
    await actionOpenFavorites();
    await deleteFavGroupIfExists();

    await actionFinish();
}

async function checkPlanRouteTrack(track) {
    await actionUploadGpx({ folder: DATA_FOLDER, mask: `${TRACK}.gpx` });
    await clickBy(By.id(`se-local-track-${TRACK}`));
    await waitBy(By.id('se-panel-button-delete-track'));
    await actionIdleWait();

    await checkOwnPoints('Plan route track', track.points);

    await clickBy(By.id('se-panel-button-delete-track'));
    await clickBy(By.id('se-delete-track-dialog'));
    await waitByRemoved(By.id('se-panel-button-delete-track'));
    await waitByRemoved(By.id(`se-local-track-${TRACK}`));
}

async function checkCloudTrack(track) {
    await clickBy(By.id('se-show-menu-tracks'));
    await actionImportCloudTrack([{ name: TRACK, path: track.path }], TRACK);

    await clickBy(By.id(`se-cloud-track-${TRACK}`));
    await waitBy(By.id('se-track-context-menu'));
    await actionIdleWait();
    await checkOwnPoints('Cloud track', track.points);

    await clickBy(By.id('se-button-back'));
    await waitBy(By.id(`se-cloud-track-${TRACK}`));
}

async function checkSharedTrack(track) {
    await actionOpenShare(TRACK);
    const link = await actionSetShareType(TRACK, PUBLIC_SHARE);
    await checkSharedLink('Shared track', link, track.points);
    await checkSharedWithMeTrack(link, track.points);

    await clickBy(By.id('se-show-menu-tracks'));
    await deleteTrack(TRACK);
}

async function checkSharedWithMeTrack(link, points) {
    await actionSwitchUser(SECOND_USER);

    await actionOpenMap(link);
    await waitBy(By.id('se-share-file'));
    await actionIdleWait();
    await actionOpenMap();

    await clickBy(By.id('se-show-menu-tracks'));
    await clickBy(By.id('se-shared-folder-track'));
    await clickBy(By.id(`se-cloud-track-${TRACK}`));
    await waitBy(By.id('se-track-context-menu'));
    await actionIdleWait();
    await checkOwnPoints('Shared with me track', points);

    await actionSwitchUser();
}

async function checkFavorites(favorites) {
    await actionOpenFavorites();
    await actionUploadFavGroup([{ name: FAV_FILE, path: favorites.path }]);
    await checkOwnPoints('Favorites', favorites.points);

    await actionOpenShare(FAV_GROUP, 'favorite-folder');
    const link = await actionSetShareType(FAV_GROUP, PUBLIC_SHARE);
    await actionLogOut();
    await checkSharedLink('Shared favorites', link, favorites.points);
    await actionLogIn();

    await actionOpenFavorites();
    await actionDeleteFavGroup(FAV_GROUP);
}

async function checkPoiOverlay() {
    await openConfigureMap();
    await togglePoiCategory();

    await checkServerMarkers('POI overlay', { center: KYIV_CENTER, farZoom: 15 });

    await togglePoiCategory();
}

async function checkSearchResults() {
    await clickBy(By.id('se-show-menu-search'));
    await sendKeysBy(By.id('se-search-input'), SEARCH_WORD + '\n');
    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-search-results'));
    await clickBy(By.id('se-search-show-more'), { optional: true, idle: true });

    await checkServerMarkers('Search results', { center: KYIV_CENTER, farZoom: 12 });

    await clickBy(By.id('se-search-input-back'));
}

async function checkExplore() {
    await clickBy(By.id('se-show-all-wiki-place'));
    await waitBy(By.id('se-explore-menu-name'));

    await checkServerMarkers('Explore', { center: KYIV_CENTER, farZoom: 14 });

    await clickBy(By.id('se-explore-menu-close'));
}

async function checkTransportStops() {
    await openConfigureMap();
    await clickBy(By.id('se-configure-map-menu-transport_stops'));

    await checkServerMarkers('Transport stops', { center: KYIV_CENTER, farZoom: 15 });

    await clickBy(By.id('se-configure-map-menu-transport_stops'));
}

async function checkOwnPoints(title, points) {
    const own = (markers) => markers.filter((m) => m.name?.startsWith(WPT_PREFIX));
    const middleIndex = Math.floor(points.length / 2);
    const middle = points[middleIndex];
    const afterPan = points[middleIndex + PAN_POINTS];

    await setView({ ...middle, zoom: FAR_ZOOM });
    await enclose(
        async () => {
            const { markers, bounds } = await getMapMarkers();
            const shown = own(markers);
            const main = shown.filter((m) => !m.dot);

            return shown.some((m) => m.dot) && main.length < pointsIn(points, bounds).length;
        },
        { tag: `${title}: the line is grouped at z${FAR_ZOOM}` }
    );

    await setView({ ...middle, zoom: NEAR_ZOOM });
    await enclose(async () => everyPointIsMarker(own, points, middle), {
        tag: `${title}: every point is a marker at z${NEAR_ZOOM}`,
    });

    await setView({ ...afterPan, zoom: NEAR_ZOOM });
    await enclose(async () => everyPointIsMarker(own, points, afterPan), {
        tag: `${title}: every point is a marker after a pan`,
    });
}

async function everyPointIsMarker(own, points, center) {
    const { markers, bounds } = await getMapMarkers();
    const main = own(markers).filter((m) => !m.dot);

    return isInside(center, bounds) && pointsIn(points, bounds).every((p) => main.some((m) => isSamePlace(m, p)));
}

async function checkServerMarkers(title, { center, farZoom }) {
    const server = (markers) => markers.filter((m) => m.server);
    const isMarkerAtNearZoom = async (object) => {
        await setView({ ...object, zoom: NEAR_ZOOM });
        await actionIdleWait({ tiles: true });
        const { markers } = await getMapMarkers();

        return server(markers).some((m) => !m.dot && isSamePlace(m, object));
    };

    await setView({ ...center, zoom: farZoom });
    const objects = await enclose(
        async () => {
            const found = server((await getMapMarkers()).markers);
            return found.some((m) => m.dot) && found;
        },
        { tag: `${title}: dots at z${farZoom}` }
    );

    const dots = objects.filter((m) => m.dot).slice(0, SERVER_CANDIDATES);
    const zoomed = await findAsync(dots, isMarkerAtNearZoom);
    await assert(zoomed, `${title}: no dot of z${farZoom} became a marker at z${NEAR_ZOOM}`);

    const { bounds } = await getMapMarkers();
    const outOfView = objects
        .filter((m) => !isInside(m, bounds))
        .sort((a, b) => a.dot - b.dot)
        .slice(0, SERVER_CANDIDATES);
    const panned = await findAsync(outOfView, isMarkerAtNearZoom);
    await assert(panned, `${title}: no object of z${farZoom} became a marker after a pan at z${NEAR_ZOOM}`);
}

async function checkSharedLink(title, link, points) {
    await actionOpenMap(link);
    await waitBy(By.id('se-share-file'));
    await actionIdleWait();

    await checkOwnPoints(title, points);

    await clickBy(By.id('se-close-share-file'));
    await waitByRemoved(By.id('se-share-file'));
}

async function openConfigureMap() {
    await clickBy(By.id('se-show-menu-configuremap'));
    await waitBy(By.id('se-configure-map-menu-name'));
}

async function togglePoiCategory() {
    await clickBy(By.id('se-configure-map-menu-poi-categories'));
    await clickBy(By.id(`se-poi-category-${POI_CATEGORY}`));
    await clickBy(By.id('se-select-categories'));
    await waitBy(By.id('se-configure-map-menu-name'));
}

async function deleteFavGroupIfExists() {
    if (await waitBy(By.id(`se-menu-fav-${FAV_GROUP}`), { optional: true, idle: true })) {
        await actionDeleteFavGroup(FAV_GROUP);
    }
}

// markers rendered on the map inside the visible bounds; a dot is a clustered marker drawn as a small circle
async function getMapMarkers() {
    return driver.executeScript(`
        const map = window.__leafletMap;
        const b = map.getBounds();
        const markers = [];
        map.eachLayer((layer) => {
            if (!layer._icon || layer._icon.style.display === 'none' || typeof layer.getLatLng !== 'function') {
                return;
            }
            const { lat, lng } = layer.getLatLng();
            if (!b.contains([lat, lng])) return;
            const o = layer.options;
            const className = o.icon?.options?.className ?? '';
            markers.push({
                lat,
                lon: lng,
                name: typeof o.name === 'string' ? o.name : null,
                dot: o.simple === true || className.includes('custom-circle-icon'),
                server: o.idObj != null && !o.wpt && !o.isFavorite,
            });
        });
        return {
            markers,
            bounds: { south: b.getSouth(), west: b.getWest(), north: b.getNorth(), east: b.getEast() },
        };
    `);
}

async function findAsync(items, predicate) {
    for (const item of items) {
        if (await predicate(item)) {
            return item;
        }
    }

    return null;
}

function readDataFile(name) {
    const { path } = getFilesByName({ folder: DATA_FOLDER }).find((f) => f.name === `${name}.gpx`);
    const points = [...readFileSync(path, 'utf8').matchAll(WPT_COORDS)].map(([, lat, lon]) => ({
        lat: Number(lat),
        lon: Number(lon),
    }));

    return { path, points };
}

function pointsIn(points, bounds) {
    return points.filter((p) => isInside(p, bounds));
}

function isInside(p, { south, west, north, east }) {
    return p.lat > south && p.lat < north && p.lon > west && p.lon < east;
}

function isSamePlace(a, b) {
    return Math.abs(a.lat - b.lat) < SAME_PLACE_DEG && Math.abs(a.lon - b.lon) < SAME_PLACE_DEG;
}
