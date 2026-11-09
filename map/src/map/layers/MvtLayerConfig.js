export const MVT_OSMAND_LAYER = 'mvt-osmand';

// URLs in default.mvt.json are used for external style editors only.
const localOrigin = process.env.REACT_APP_USE_LOCAL_API ? window.location.origin : null;
const tilesOrigin = localOrigin || process.env.REACT_APP_MVT_TILES_URL;
const contoursOrigin = localOrigin || process.env.REACT_APP_CONTOUR_TILES_URL;
export const MVT_OSMAND_URL = `${tilesOrigin}/vector/{z}/{x}/{y}.mvt`;
export const MVT_OSMAND_CONTOURS_URL = `${contoursOrigin}/vector/contours/{z}/{x}/{y}.mvt`;
export const MVT_OSMAND_CONTOURS_FEET_URL = `${contoursOrigin}/vector/contours-feet/{z}/{x}/{y}.mvt`;

export const MVT_CONTOURS_SOURCE = 'contours';

export const MVT_OSM_TEST_LAYER = 'mvt-osm-test';
export const MVT_OSM_TEST_URL = 'https://tiles.openstreetmap.us/vector/openmaptiles/{z}/{x}/{y}.mvt';

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
