import { osmandTileURL } from './baseTileURL';

export const INTERACTIVE_LAYER = 'int';
export const DYNAMIC_RENDERING = 'dynamic';
export const VECTOR_GRID = 'vector_grid';
export const LOCAL_STORAGE_CONFIGURE_MAP = 'configureMap';
export const CONFIGURE_MAP_UPDATE_TIME = 1744806975000; // 2025-04-16

export function getSavedMapStyleKey() {
    try {
        const saved = localStorage.getItem(LOCAL_STORAGE_CONFIGURE_MAP);
        const parsed = saved ? JSON.parse(saved) : null;
        return parsed?.mapStyle || osmandTileURL.key;
    } catch {
        return osmandTileURL.key;
    }
}

export function getInitialMapTileURL() {
    return getSavedMapStyleKey() === osmandTileURL.key ? osmandTileURL : null;
}

export function saveConfigureMap(configureMap) {
    localStorage.setItem(
        LOCAL_STORAGE_CONFIGURE_MAP,
        JSON.stringify({ ...configureMap, updateTime: CONFIGURE_MAP_UPDATE_TIME })
    );
}

export function getRenderingTypeForMapStyle(tileURL) {
    return tileURL?.key === INTERACTIVE_LAYER ? DYNAMIC_RENDERING : null;
}

export function applyMapStyle(tileURL, mtx) {
    if (!tileURL) {
        return;
    }

    if (mtx.tileURL !== tileURL || mtx.tileURL?.url !== tileURL.url) {
        mtx.setTileURL(tileURL);
    }

    const renderingType = getRenderingTypeForMapStyle(tileURL);
    if (mtx.renderingType !== renderingType) {
        mtx.setRenderingType(renderingType);
    }
}
