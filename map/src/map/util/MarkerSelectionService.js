import {
    createPoiIcon,
    DEFAULT_BIG_HOVER_SIZE,
    DEFAULT_BIG_HOVER_STYLES,
    DEFAULT_WPT_COLOR,
} from '../markers/MarkerOptions';
import { createLayeredPinIcon } from '../markers/SelectedPinMarker';
import { EXPLORE_LAYER_ID } from '../layers/ExploreLayer';
import { SELECTED_POI_COLOR } from '../../util/hooks/map/useSelectMarkerOnMap';
import L from 'leaflet';
import { DEFAULT_POI_COLOR, DEFAULT_POI_SHAPE } from '../../manager/PoiManager';
import Utils from '../../util/Utils';

export const SELECTED_PIN_SIZE = 70;
export const SELECTED_ICON_SIZE = 36;

const SELECTED_MARKER_HIDE_MAX_ZOOM = 16;
const SELECTED_MARKER_HIDE_RADIUS_COEFF = 300 / 16; // 18.75 → 300 m at zoom 12

const toShape = (s) => (s === 'octagon' || s === 'hexagon' ? 'hexagon' : s);
const toColor = (c) => {
    if (!c) {
        return DEFAULT_WPT_COLOR;
    }
    if (c.startsWith('#')) {
        return Utils.hexToRgba(c);
    }
    return c;
};

export function getSelectedMarkerHideRadiusM(zoom) {
    if (zoom >= SELECTED_MARKER_HIDE_MAX_ZOOM) {
        return 0;
    }
    const d = SELECTED_MARKER_HIDE_MAX_ZOOM - zoom;
    return SELECTED_MARKER_HIDE_RADIUS_COEFF * d * d;
}

function collectMarkerLayers(layerOrGroup, out = []) {
    if (!layerOrGroup) return out;
    const latlng = layerOrGroup.getLatLng?.() ?? layerOrGroup._latlng;
    if (latlng != null) {
        out.push(layerOrGroup);
        return out;
    }
    if (layerOrGroup.eachLayer) {
        layerOrGroup.eachLayer((l) => collectMarkerLayers(l, out));
    }
    return out;
}

export function restoreHiddenMarkers(hiddenLayersRef) {
    const layers = hiddenLayersRef.current;
    layers.forEach((layer) => {
        const el = layer.getElement();
        if (el) el.style.visibility = '';
    });
    hiddenLayersRef.current = [];
}

export function hideMarkersNearPoint(map, zoom, centerLatLng, excludeLayer, hiddenLayersRef) {
    const radiusM = getSelectedMarkerHideRadiusM(zoom);
    restoreHiddenMarkers(hiddenLayersRef);
    const center = L.latLng(centerLatLng);
    const hidden = [];

    map.eachLayer((group) => {
        collectMarkerLayers(group, []).forEach((layer) => {
            if (layer === excludeLayer) return;
            const ll = layer.getLatLng?.() ?? layer._latlng;
            if (!ll || center.distanceTo(ll) > radiusM) return;
            const el = layer.getElement();
            if (el) {
                el.style.visibility = 'hidden';
                hidden.push(layer);
            }
        });
    });

    hiddenLayersRef.current = hidden;
}

function buildSelectedIcon(marker, layerOptions = {}) {
    const shape = toShape(marker.background ?? layerOptions.background);
    const color = toColor(marker.color ?? layerOptions.color);
    const iconHtml =
        marker.iconHtml ??
        marker.originalIconHtml ??
        marker.icon ??
        layerOptions.originalIcon?.options?.html ??
        layerOptions.icon?.options?.html ??
        '';
    return createLayeredPinIcon({
        shape,
        color,
        iconHtml,
        size: SELECTED_PIN_SIZE,
        iconSize: SELECTED_ICON_SIZE,
    });
}

export function applySelectedWithUpdateMarker(layer, marker) {
    if (!layer.options.originalIcon) {
        layer.options.originalIcon = layer.options.icon;
    }
    const icon = buildSelectedIcon(marker, layer.options);
    layer.setIcon(icon);
}

export function applySelectedWithCreateMarker(map, latlng, marker) {
    const latlngObj = latlng.lat !== undefined && latlng.lng !== undefined ? L.latLng(latlng.lat, latlng.lng) : latlng;
    const icon = createLayeredPinIcon({
        shape: toShape(marker.background),
        color: toColor(marker.color),
        iconHtml: marker.iconHtml ?? marker.originalIconHtml ?? marker.icon ?? '',
        size: SELECTED_PIN_SIZE,
        iconSize: SELECTED_ICON_SIZE,
    });
    const layer = L.marker(latlngObj, { icon, interactive: false });
    layer.addTo(map);
    return layer;
}

// Hover markers for main explore map markers
export default class HoverMarker {
    constructor(
        marker,
        size = DEFAULT_BIG_HOVER_SIZE,
        className = `${DEFAULT_BIG_HOVER_STYLES.hover} ${DEFAULT_BIG_HOVER_STYLES.large}`
    ) {
        this.marker = marker;
        this.size = [size, size];
        this.styles = className;
    }

    /**
     * Builds and returns a hover marker
     * @returns {L.Marker}
     */
    build() {
        const hoverMarker = new L.Marker(this.marker.getLatLng(), {
            icon: L.divIcon({
                className: this.styles,
                idObj: this.marker.options.idObj,
                iconSize: this.size,
                bigExplore: true,
            }),
        });
        hoverMarker.options.icon.options.className = this.styles;
        return hoverMarker;
    }
}

function equalExploreMarkers(marker1, marker2) {
    return marker1.options.idObj === marker2.options.idObj;
}

export function isNewSelectedExploreMarker(objId, hoverMarker, map) {
    return hoverMarker && !map.hasLayer(hoverMarker) && hoverMarker?.options.idObj !== objId;
}

export function selectMarker(target, prevMarker, type = null) {
    const marker = updateSelectedMarkerOnMap({ marker: target, type });
    if (
        prevMarker &&
        (prevMarker !== marker || (type && type === EXPLORE_LAYER_ID && !equalExploreMarkers(prevMarker, marker)))
    ) {
        hideSelectedMarker(prevMarker, type);
    }
    return marker;
}

export function hideSelectedMarker(target, type = null) {
    if (type && type === EXPLORE_LAYER_ID && target?.options?.hover) {
        target.options.hover.remove();
        target.options.hovered = null;
        return;
    }
    updateSelectedMarkerOnMap({ marker: target, type, updatePrev: true });
}

export function updateSelectedMarkerOnMap({ marker, type = null, updatePrev = false }) {
    const newBackgroundColor = updatePrev ? DEFAULT_POI_COLOR : SELECTED_POI_COLOR;
    if (!marker) {
        console.debug('Marker is null or undefined');
        return null;
    }
    if (marker.options?.isFavorite) {
        return marker;
    }
    if (marker.options?.simple) {
        marker.paintDot(newBackgroundColor);
        marker.options.selected = !updatePrev;
    } else {
        if (type && type === EXPLORE_LAYER_ID) {
            marker.options.hover = new HoverMarker(marker).build();
            marker.options.hovered = !!marker.options.hover;
            return marker;
        }
        // marker with icon
        const newHtml = createPoiIcon({
            color: newBackgroundColor,
            background: DEFAULT_POI_SHAPE,
            svgIcon: marker.options.svg,
        }).options.html;

        marker.setIcon(
            L.divIcon({
                html: newHtml,
            })
        );
    }
    return marker;
}
