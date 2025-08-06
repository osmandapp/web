import { createPoiIcon, DEFAULT_BIG_HOVER_SIZE, DEFAULT_BIG_HOVER_STYLES } from '../markers/MarkerOptions';
import { EXPLORE_LAYER_ID } from '../layers/ExploreLayer';
import { SELECTED_POI_COLOR } from '../../util/hooks/map/useSelectMarkerOnMap';
import L from 'leaflet';
import { DEFAULT_POI_COLOR, DEFAULT_POI_SHAPE } from '../../manager/PoiManager';

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
    if (type && type === EXPLORE_LAYER_ID && target.options?.hover) {
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
    if (marker.options?.simple) {
        // simple dot marker
        marker.setStyle({
            fillColor: newBackgroundColor,
            selected: !updatePrev,
        });
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
