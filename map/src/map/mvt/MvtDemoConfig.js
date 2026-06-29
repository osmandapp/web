export const MVT_OSMAND_LAYER = 'mvt-osmand';

// URL in defaultStyle.json is used for external style editors only
// This URL overrides the default one and requires setupProxy.js to proxy /vector/ queries
const port = window.location.port;
const host = window.location.hostname.toLowerCase();
const tilesPort = !port || port === '80' || port === '443' ? '' : `:${port}`;
const tilesHost = host === 'osmand.net' || host === 'www.osmand.net' ? 'maptile.osmand.net' : host;
export const MVT_OSMAND_URL = `${window.location.protocol}//${tilesHost}${tilesPort}/vector/{z}/{x}/{y}.mvt`;

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

let webGLAvailable;

export function isWebGLAvailable() {
    if (webGLAvailable !== undefined) {
        return webGLAvailable;
    }

    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
        webGLAvailable = !!gl;
        gl?.getExtension('WEBGL_lose_context')?.loseContext();
    } catch {
        webGLAvailable = false;
    }
    return webGLAvailable;
}
