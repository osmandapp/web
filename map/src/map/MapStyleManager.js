export const INTERACTIVE_LAYER = 'int';
export const DYNAMIC_RENDERING = 'dynamic';
export const VECTOR_GRID = 'vector_grid';

export function getRenderingTypeForMapStyle(tileURL) {
    return tileURL?.key === INTERACTIVE_LAYER ? DYNAMIC_RENDERING : null;
}

export function applyMapStyle(tileURL, mtx) {
    if (!tileURL) {
        return;
    }

    if (mtx.tileURL?.key !== tileURL.key || mtx.tileURL?.url !== tileURL.url) {
        mtx.setTileURL(tileURL);
    }

    const renderingType = getRenderingTypeForMapStyle(tileURL);
    if (mtx.renderingType !== renderingType) {
        mtx.setRenderingType(renderingType);
    }
}
