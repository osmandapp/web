export const MVT_OSMAND_LAYER = 'mvt-osmand';

// URL in defaultStyle.json is used for external style editors only
// This URL overrides the default one and requires setupProxy.js to proxy /vector/ queries
const port = window.location.port === 80 || window.location.port === 443 ? '' : `:${window.location.port}`;
export const MVT_OSMAND_URL = `${window.location.protocol}//${window.location.hostname}${port}/vector/{z}/{x}/{y}.mvt`;

export const MVT_OSM_TEST_LAYER = 'mvt-osm-test';
export const MVT_OSM_TEST_URL = 'https://tiles.openstreetmap.us/vector/openmaptiles/{z}/{x}/{y}.mvt'; // mvtOsmStyle.json

export const mvtOsmAndURL = {
    uiname: 'OsmAnd vector (beta)',
    key: MVT_OSMAND_LAYER,
    type: 'mvt',
    tileSize: 512,
    url: MVT_OSMAND_URL,
};

export const mvtOsmTestURL = {
    uiname: 'OpenStreetMap vector (demo)',
    key: MVT_OSM_TEST_LAYER,
    type: 'mvt',
    tileSize: 512,
    url: MVT_OSM_TEST_URL,
};

export function isOsmAndTileURL(tileURL) {
    return tileURL?.key === MVT_OSMAND_LAYER;
}

export function isOsmTestTileURL(tileURL) {
    return tileURL?.key === MVT_OSM_TEST_LAYER;
}

export function isMvtTileURL(tileURL) {
    return tileURL?.type === 'mvt' || isOsmAndTileURL(tileURL) || isOsmTestTileURL(tileURL);
}
