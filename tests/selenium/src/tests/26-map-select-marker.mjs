import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { assert, clickBy, getMarker, leftClickBy, sendKeysBy, waitBy, waitByRemoved, zoomMap } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import { driver } from '../options.mjs';
import actionIdleWait from '../actions/actionIdleWait.mjs';

const searchWord = 'silpo';
const blue = 'rgb(35 123 255)';
const dotBlue = '#237bff';
const defaultColor = '#f8931d';
const searchCategory = 'Cafe_and_restaurant';
const mapState = 'clicks on map';
const menuState = 'clicks on menu';
const zoomState = 'zoom';
const search_type = 'Search';
const explore_type = 'Explore';
const poi_type = 'POI';

const scoords1 = { lat: 50.447353, lng: 30.494371 };
const scoords2 = { lat: 50.43877, lng: 30.52334 };
const scoords3 = { lat: 50.44383, lng: 30.490307 };

const pcoords1 = { lat: 50.442833, lng: 30.498293 };
const pcoords2 = { lat: 50.444145, lng: 30.49854 };
const pcoords3 = { lat: 50.441887, lng: 30.498642 };

const ecoords1 = { lat: 50.458996, lng: 30.517986 };
const ecoords2 = { lat: 50.45286, lng: 30.51432 };
const ecoords3 = { lat: 50.455696, lng: 30.522839 };

export default async function test() {
    await actionOpenMap('#14/50.4432/30.4995');
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-search'));
    await waitBy(By.id('se-search-input'));

    await testExploreMarkers(ecoords1, ecoords2, ecoords3);

    await clickBy(By.id('se-close-wpt-details'));
    await waitByRemoved(By.id('se-wpt-details'));
    await clickBy(By.id('se-explore-menu-close'));

    await testSearchMarkers(scoords1, scoords2, scoords3);

    await clickBy(By.id('se-search-input-back'));

    await testPoiMarkers(pcoords1, pcoords2, pcoords3);

    //await clickBy(By.id('se-search-input-back'));

    // await testExploreMarkers(ecoords1, ecoords2, ecoords3);

    await actionFinish();
}

async function testSearchMarkers(coords1, coords2, coords3) {
    await sendKeysBy(By.id('se-search-input'), searchWord + '\n');
    await waitByRemoved(By.id('se-loading-page'));
    await waitBy(By.id('se-search-results'));

    await testMarkers(coords1, coords2, coords3, [0, 1], search_type);
}

async function testPoiMarkers(coords1, coords2, coords3) {
    await waitBy(By.id('se-default-search-categories'));

    await clickBy(By.id(`se-default-search-categories-item-${searchCategory}`));
    await waitBy(By.id('se-search-results'));

    await testMarkers(coords1, coords2, coords3, [0, 6], poi_type);
}

async function testExploreMarkers(coords1, coords2, coords3) {
    await waitBy(By.id('se-show-all-wiki-place'));
    await clickBy(By.id('se-show-all-wiki-place'));

    await testMarkers(coords1, coords2, coords3, [3, 4], explore_type);
}

async function testMarkers(coords1, coords2, coords3, indexes = [0, 1], type) {
    // test clicks on map
    await leftClickBy(coords1.lat, coords1.lng);
    await checkMarkerHighlighted(coords1, mapState, type);

    await leftClickBy(coords2.lat, coords2.lng);
    await checkMarkerHighlighted(coords2, mapState, type);
    await checkMarkerNotHighlighted(coords1, mapState, type);

    await leftClickBy(coords3.lat, coords3.lng);
    await checkDotMarkerHighlighted(coords3, mapState);
    await checkMarkerNotHighlighted(coords2, mapState, type);

    await clickBy(By.id('se-close-wpt-details'));
    await waitByRemoved(By.id('se-wpt-details'));
    await checkDotMarkerNotHighlighted(coords3, mapState);

    // test clicks on menu
    let items =
        type === explore_type
            ? await driver.findElements(By.css("[id^='se-wiki-place-']"))
            : await driver.findElements(By.id('se-search-result-item'));
    await items[indexes[0]].click();
    await checkMarkerHighlighted(coords1, menuState, type);
    await clickBy(By.id('se-close-wpt-details'));
    await waitByRemoved(By.id('se-wpt-details'));
    await checkMarkerNotHighlighted(coords1, menuState, type);

    if (type === search_type) {
        items = await driver.findElements(By.id('se-search-result-item'));
        await items[indexes[1]].click();
        await checkDotMarkerHighlighted(coords3, menuState);
    }

    await leftClickBy(coords1.lat, coords1.lng);
    await checkDotMarkerNotHighlighted(coords3, menuState);

    // test zoom in
    if (type !== explore_type) {
        await zoomMap('in');
        await actionIdleWait();
        await checkMarkerHighlighted(coords1, zoomState, type);
        await zoomMap('out');
        await actionIdleWait();
        await checkMarkerHighlighted(coords1, zoomState, type);

        await clickBy(By.id('se-close-wpt-details'));
        await checkMarkerNotHighlighted(coords1, zoomState, type);
    }
}

async function checkMarkerHighlighted(coords, state, type) {
    const marker = await getMarker(coords.lat, coords.lng);
    if (type === explore_type) {
        await assert(marker && marker.options.hovered, `Marker is not highlighted in blue (${state})`);
    } else {
        await assert(marker && marker.iconOptions.html.includes(blue), `Marker is not highlighted in blue (${state})`);
    }
}

async function checkMarkerNotHighlighted(coords, state, type) {
    const marker = await getMarker(coords.lat, coords.lng);
    if (type === explore_type) {
        await assert(marker && !marker.options.hovered, `Marker should no longer be highlighted in blue (${state})`);
    } else {
        await assert(
            marker && !marker.iconOptions.html.includes(blue),
            `Marker should no longer be highlighted in blue (${state})`
        );
    }
}

async function checkDotMarkerHighlighted(coords, state) {
    const marker = await getMarker(coords.lat, coords.lng);
    await assert(marker && marker.options.fillColor === dotBlue, `Dot marker is not highlighted in blue (${state})`);
}

async function checkDotMarkerNotHighlighted(coords, state) {
    const marker = await getMarker(coords.lat, coords.lng);
    await assert(
        marker && marker.options.fillColor === defaultColor,
        `Dot marker should no longer be highlighted in blue (${state})`
    );
}
