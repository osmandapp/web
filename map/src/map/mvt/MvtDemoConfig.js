export const MVT_DEMO_LAYER = 'mvt-demo';
export const MVT_DEMO_TILE_URL = 'https://test.osmand.net/vector/{z}/{x}/{y}.mvt';
export const MVT_OSM_LAYER = 'mvt-osm';
export const MVT_OSM_TILE_URL = 'https://tiles.openstreetmap.us/vector/openmaptiles/{z}/{x}/{y}.mvt';

export const mvtDemoTileURL = {
    uiname: 'OsmAnd vector (beta)',
    key: MVT_DEMO_LAYER,
    type: 'mvt',
    tileSize: 512,
    url: MVT_DEMO_TILE_URL,
};

export const mvtOsmTileURL = {
    uiname: 'OpenStreetMap vector (demo)',
    key: MVT_OSM_LAYER,
    type: 'mvt',
    tileSize: 512,
    url: MVT_OSM_TILE_URL,
};

export function isMvtDemoTileURL(tileURL) {
    return tileURL?.key === MVT_DEMO_LAYER;
}

export function isMvtOsmTileURL(tileURL) {
    return tileURL?.key === MVT_OSM_LAYER;
}

export function isMvtTileURL(tileURL) {
    return tileURL?.type === 'mvt' || isMvtDemoTileURL(tileURL) || isMvtOsmTileURL(tileURL);
}
