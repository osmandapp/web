import { useCallback, useContext, useEffect } from 'react';
import AppContext, { OBJECT_TYPE_CLOUD_TRACK, OBJECT_TYPE_FAVORITE } from '../../../context/AppContext';
import MapContext from '../../../context/MapContext';

export const FOCUS_DIM_OPACITY = 0.35;
export const FOCUS_HIDDEN_OPACITY = 0;
export const FOCUS_FULL_OPACITY = 1;

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

    useEffect(() => {
        const handlers = getFocusModeHandlers();
        Object.entries(handlers).forEach(([type, getItems]) => {
            getItems(ctx).forEach(({ id, layer }) => {
                if (!layer) return;
                if (id == null) return;
                applyOpacityToLayer(layer, resolveFocusOpacity({ type, id }, mtx.selectionFocus, mtx.focusModeOn));
            });
        });
    }, [mtx.selectionFocus, mtx.focusModeOn, ctx.favorites?.mapObjs, ctx.gpxFiles]);
}

export function useFocusMode() {
    const mtx = useContext(MapContext);

    const setSelectionFocus = useCallback(
        ({ type, id }) => {
            if (!type) return;
            if (id == null) return;
            if (!getFocusModeTypes().includes(type)) return;
            mtx.setSelectionFocus({ type, id });
        },
        [mtx]
    );

    const clearSelectionFocus = useCallback(() => {
        mtx.setSelectionFocus(null);
        mtx.setFocusModeOn(false);
    }, [mtx]);

    const toggleFocusMode = useCallback(() => {
        mtx.setFocusModeOn((on) => !on);
    }, [mtx]);

    return {
        selectionFocus: mtx.selectionFocus,
        focusModeOn: mtx.focusModeOn,
        setSelectionFocus,
        clearSelectionFocus,
        toggleFocusMode,
    };
}
