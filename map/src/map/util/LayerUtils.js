import L from 'leaflet';

export const TRACK_HIT_LINE_PANE = 'trackHitLinePane';

export function isMarkerLayer(layer) {
    return layer != null && layer instanceof L.Marker;
}

export function isPolylineLayer(layer) {
    return layer != null && layer instanceof L.Polyline;
}

export function ensureLeafletPane(map, paneName, zIndex) {
    const pane = map.getPane(paneName) || map.createPane(paneName);
    if (zIndex !== undefined) {
        pane.style.zIndex = `${zIndex}`;
    }
    pane.style.pointerEvents = 'none';
    return pane;
}

export function disablePointerEventsIfHidden(el, opacity) {
    if (!el) return;
    el.style.pointerEvents = opacity === 0 ? 'none' : '';
}
