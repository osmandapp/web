import { DEFAULT_WPT_COLOR } from '../markers/MarkerOptions';
import { createLayeredPinIcon } from '../markers/SelectedPinMarker';
import { POI_ID } from '../../infoblock/components/wpt/WptTagsProvider';
import L from 'leaflet';
import Utils from '../../util/Utils';

export const SELECTED_PIN_SIZE = 70;
export const SELECTED_ICON_SIZE = 36;
export const SELECTED_PIN_COLOR = '#FF8800';
export const SELECTED_MARKER_Z_INDEX = 3000;
export const EXPLORE_PHOTO_ICON_SIZE = 43;

const SELECTED_MARKER_HIDE_MAX_ZOOM = 16;
const SELECTED_MARKER_HIDE_RADIUS_COEFF = 300 / 16;
const SELECTED_MARKER_HIDE_MIN_RADIUS_M = 50;

const toShape = (s) => (s === 'octagon' || s === 'hexagon' ? 'hexagon' : s);

const toColor = (c) => {
    if (!c) return DEFAULT_WPT_COLOR;
    if (c.startsWith('#')) return Utils.hexToRgba(c);
    return c;
};

export function getSelectedMarkerHideRadiusM(zoom) {
    if (zoom >= SELECTED_MARKER_HIDE_MAX_ZOOM) {
        return SELECTED_MARKER_HIDE_MIN_RADIUS_M;
    }
    const d = SELECTED_MARKER_HIDE_MAX_ZOOM - zoom;
    return SELECTED_MARKER_HIDE_RADIUS_COEFF * d * d;
}

function collectMarkerLayers(layerOrGroup, out = []) {
    if (!layerOrGroup) return out;
    if (layerOrGroup instanceof L.Marker) {
        out.push(layerOrGroup);
        return out;
    }
    if (layerOrGroup.eachLayer) {
        layerOrGroup.eachLayer((l) => collectMarkerLayers(l, out));
    }
    return out;
}

function hideMarkerElement(el) {
    el.style.display = 'none';
    el.style.visibility = 'hidden';
    el.style.opacity = '0';
}

function showMarkerElement(el) {
    el.style.display = '';
    el.style.visibility = '';
    el.style.opacity = '';
}

export function restoreHiddenMarkers(hiddenLayersRef) {
    hiddenLayersRef.current.forEach((layer) => {
        const el = layer.getElement();
        if (el) showMarkerElement(el);
    });
    hiddenLayersRef.current = [];
}

export function hideMarkersNearPin(map, ctx) {
    const selectedPin = ctx.selectedCreatedLayerRef?.current;
    if (!selectedPin || !map.hasLayer(selectedPin)) return;

    const radiusM = getSelectedMarkerHideRadiusM(map.getZoom());
    restoreHiddenMarkers(ctx.selectedHiddenLayersRef);
    const center = selectedPin.getLatLng();
    const hidden = [];

    map.eachLayer((group) => {
        collectMarkerLayers(group, []).forEach((layer) => {
            if (layer === selectedPin) return;
            const ll = layer.getLatLng();
            if (!ll || center.distanceTo(ll) > radiusM) return;
            const el = layer.getElement();
            if (el) {
                hideMarkerElement(el);
                hidden.push(layer);
            }
        });
    });

    ctx.selectedHiddenLayersRef.current = hidden;
}

function buildSelectedIcon(marker, layerOptions = {}) {
    return createLayeredPinIcon({
        shape: toShape(marker.background ?? layerOptions.background),
        color: toColor(marker.color ?? layerOptions.color),
        iconHtml:
            marker.iconHtml ??
            marker.originalIconHtml ??
            marker.icon ??
            layerOptions.originalIcon?.options?.html ??
            layerOptions.icon?.options?.html ??
            '',
        size: SELECTED_PIN_SIZE,
        iconSize: SELECTED_ICON_SIZE,
    });
}

// Replaces the icon of an existing marker in-place (used for hover)
function applySelectedWithUpdateMarker(layer, marker) {
    if (!layer.options.originalIcon) {
        layer.options.originalIcon = layer.options.icon;
    }
    layer.setIcon(buildSelectedIcon(marker, layer.options));
}

// Creates a new pin marker and adds it directly to the map (used for selection)
function applySelectedWithCreateMarker(map, latlng, marker, layerOptions = {}) {
    const latlngObj = latlng.lat !== undefined && latlng.lng !== undefined ? L.latLng(latlng.lat, latlng.lng) : latlng;
    const layer = L.marker(latlngObj, {
        icon: buildSelectedIcon(marker, layerOptions),
        interactive: false,
    });
    layer.addTo(map);
    return layer;
}

// Restores the original icon of a marker that was updated in-place during hover
export function restoreOriginalIcon(layer) {
    const original = layer?.options?.originalIcon;
    if (original && layer.icon !== original) {
        layer.setIcon(original);
    }
}

// Removes the current selected/hover pin and restores hidden markers.
// The created pin is kept only if its idObj still matches the current selectedWpt id.
export function resetSelectedPin({ ctx, map, force = false }) {
    if (!ctx || !map) return;

    restoreHiddenMarkers(ctx.selectedHiddenLayersRef);

    const createdId = ctx.selectedCreatedLayerRef?.current?.options?.idObj;
    const wptId =
        ctx.selectedWpt?.wikidata?.properties?.id ??
        ctx.selectedWpt?.poi?.options?.[POI_ID] ??
        ctx.selectedWpt?.poi?.options?.idObj ??
        ctx.selectedWpt?.selectionId ??
        null;
    if (!wptId || createdId !== wptId || force) {
        if (ctx.selectedCreatedLayerRef?.current && map.hasLayer(ctx.selectedCreatedLayerRef.current)) {
            map.removeLayer(ctx.selectedCreatedLayerRef.current);
            ctx.selectedCreatedLayerRef.current = null;
        }
    }

    if (ctx.selectedUpdatedLayerRef?.current) {
        restoreOriginalIcon(ctx.selectedUpdatedLayerRef.current);
        ctx.selectedUpdatedLayerRef.current = null;
    }
}

// Main entry point for showing a selected or hovered pin.
// isSelection=true: creates a new separate pin on top of the map and hides nearby markers.
// isSelection=false (hover): updates the existing marker icon in-place.
export function applySelectedPin({ ctx, map, layer = null, latlng = null, markerData, isSelection = false }) {
    if (!ctx || !map || !markerData) return null;

    const ll = latlng ?? layer?.getLatLng();
    if (!ll) return null;

    if (isSelection) {
        resetSelectedPin({ ctx, map, force: true });
        ctx.selectedHiddenLayersRef.current = [];
    } else if (ctx.selectedUpdatedLayerRef?.current) {
        restoreOriginalIcon(ctx.selectedUpdatedLayerRef.current);
        ctx.selectedUpdatedLayerRef.current = null;
    }

    let selectedLayer;

    if (isSelection) {
        selectedLayer = applySelectedWithCreateMarker(map, ll, markerData, layer?.options);
        selectedLayer.options.idObj = layer?.options?.idObj ?? null;
        ctx.selectedCreatedLayerRef.current = selectedLayer;
        selectedLayer.getElement().setAttribute('id', `se-selected-marker-${layer?.options?.name}`);
        hideMarkersNearPin(map, ctx);
    } else if (layer && map.hasLayer(layer)) {
        applySelectedWithUpdateMarker(layer, markerData);
        ctx.selectedUpdatedLayerRef.current = layer;
        selectedLayer = layer;
    } else {
        // Fallback: layer is no longer on the map, create a new pin
        selectedLayer = applySelectedWithCreateMarker(map, ll, markerData, layer?.options);
        ctx.selectedCreatedLayerRef.current = selectedLayer;
    }

    selectedLayer?.setZIndexOffset?.(SELECTED_MARKER_Z_INDEX);

    return selectedLayer;
}
