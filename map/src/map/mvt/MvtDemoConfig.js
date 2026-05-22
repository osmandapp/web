export const MVT_DEMO_LAYER = 'mvt-demo';
export const MVT_DEMO_TILE_URL = 'https://test.osmand.net/vector/{z}/{x}/{y}.mvt';

export const mvtDemoTileURL = {
    uiname: 'MVT demo',
    name: 'MVT demo',
    key: MVT_DEMO_LAYER,
    type: 'mvt',
    tileSize: 512,
    url: MVT_DEMO_TILE_URL,
};

export function isMvtDemoTileURL(tileURL) {
    return tileURL?.key === MVT_DEMO_LAYER;
}
