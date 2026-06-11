import { useCallback, useContext, useEffect } from 'react';
import { useMap } from 'react-leaflet';
import AppContext, { OBJECT_TYPE_CLOUD_TRACK, OBJECT_TYPE_FAVORITE } from '../../../context/AppContext';
import MapContext from '../../../context/MapContext';
import { EXPLORE_LAYER_ID, POI_LAYER_ID, SEARCH_LAYER_ID } from '../../../manager/GlobalManager';

export const FOCUS_DIM_OPACITY = 0.9;
export const FOCUS_HIDDEN_OPACITY = 0;
export const FOCUS_FULL_OPACITY = 1;

const FOCUS_MODE_STORAGE_KEY = 'focusModeByType';
const FOCUS_PASSIVE_LAYER_IDS = new Set([POI_LAYER_ID, SEARCH_LAYER_ID, EXPLORE_LAYER_ID]);

export function getFocusModeTypes() {
    return Object.keys(getFocusModeHandlers());
}

export function resolveFocusOpacity({ type, id }, selectionFocus, focusModeOn) {
    if (!selectionFocus) return FOCUS_FULL_OPACITY;
    const isFocused = selectionFocus.type === type && String(selectionFocus.id) === String(id);
    if (isFocused) return FOCUS_FULL_OPACITY;

    return focusModeOn ? FOCUS_HIDDEN_OPACITY : FOCUS_DIM_OPACITY;
}

export function useFocusVisibility() {
    const ctx = useContext(AppContext);
    const mtx = useContext(MapContext);
    const map = useMap();

    const passiveOpacity = !mtx.selectionFocus
        ? FOCUS_FULL_OPACITY
        : mtx.focusModeOn
          ? FOCUS_HIDDEN_OPACITY
          : FOCUS_DIM_OPACITY;

    // Apply opacity to focused types (tracks/favorites) and passive layers (POI/Search/Explore).
    useEffect(() => {
        const handlers = getFocusModeHandlers();
        Object.entries(handlers).forEach(([type, getItems]) => {
            getItems(ctx).forEach(({ id, layer }) => {
                if (!layer) return;
                if (id == null) return;
                applyOpacityToLayer(layer, resolveFocusOpacity({ type, id }, mtx.selectionFocus, mtx.focusModeOn));
            });
        });
        map.eachLayer((layer) => {
            if (!FOCUS_PASSIVE_LAYER_IDS.has(layer.options?.id)) return;
            applyOpacityToLayer(layer, passiveOpacity);
        });
    }, [mtx.selectionFocus, passiveOpacity, ctx.favorites?.mapObjs, ctx.gpxFiles]);

    // Apply passive opacity to layers added after focus state was established.
    useEffect(() => {
        function applyPassive() {
            map.eachLayer((layer) => {
                if (!FOCUS_PASSIVE_LAYER_IDS.has(layer.options?.id)) return;
                applyOpacityToLayer(layer, passiveOpacity);
            });
        }
        map.on('layeradd', applyPassive);

        return () => map.off('layeradd', applyPassive);
    }, [passiveOpacity]);
}

export function useFocusMode() {
    const mtx = useContext(MapContext);

    const setSelectionFocus = useCallback(
        ({ type, id }) => {
            if (!type) return;
            if (id == null) return;
            if (!getFocusModeTypes().includes(type)) return;
            mtx.setSelectionFocus({ type, id });
            mtx.setFocusModeOn(readFocusMode(type));
        },
        [mtx]
    );

    const clearSelectionFocus = useCallback(() => {
        mtx.setSelectionFocus(null);
    }, [mtx]);

    const toggleFocusMode = useCallback(() => {
        if (!mtx.selectionFocus) return;
        mtx.setFocusModeOn((on) => {
            const next = !on;
            writeFocusMode(mtx.selectionFocus.type, next);

            return next;
        });
    }, [mtx]);

    return {
        selectionFocus: mtx.selectionFocus,
        focusModeOn: mtx.focusModeOn,
        setSelectionFocus,
        clearSelectionFocus,
        toggleFocusMode,
    };
}

function readFocusModeStore() {
    try {
        return JSON.parse(localStorage.getItem(FOCUS_MODE_STORAGE_KEY)) || {};
    } catch {
        return {};
    }
}

function readFocusMode(type) {
    return readFocusModeStore()[type] === true;
}

function writeFocusMode(type, value) {
    const store = readFocusModeStore();
    store[type] = value;
    try {
        localStorage.setItem(FOCUS_MODE_STORAGE_KEY, JSON.stringify(store));
    } catch {
        // localStorage unavailable (quota exceeded / blocked) — ignore
    }
}

function applyOpacityToLayer(layer, opacity) {
    if (!layer) return;
    if (typeof layer.setOpacity === 'function' && typeof layer.eachLayer !== 'function') {
        layer.setOpacity(opacity);
        disablePointerEventsIfHidden(layer.getElement?.(), opacity);
        return;
    }
    if (typeof layer.eachLayer === 'function') {
        layer.eachLayer((child) => applyOpacityToLayer(child, opacity));
        return;
    }
    if (typeof layer.setStyle === 'function') {
        layer.setStyle({ opacity, fillOpacity: opacity });
        disablePointerEventsIfHidden(layer.getElement?.(), opacity);
    }
}

function disablePointerEventsIfHidden(el, opacity) {
    if (!el) return;
    el.style.pointerEvents = opacity === 0 ? 'none' : '';
}

function getFocusModeHandlers() {
    return {
        [OBJECT_TYPE_FAVORITE]: (ctx) => {
            const groups = ctx.favorites?.mapObjs;
            if (!groups) return [];

            return Object.keys(groups).map((id) => ({ id, layer: groups[id]?.markers }));
        },
        [OBJECT_TYPE_CLOUD_TRACK]: (ctx) => {
            const files = ctx.gpxFiles;
            if (!files) return [];

            return Object.values(files).map((f) => ({ id: f?.name, layer: f?.gpx }));
        },
    };
}
