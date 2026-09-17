import L from 'leaflet';

const mapOrigins = new WeakMap();

function projectOrigin(map, center, zoom) {
    return map.project(center, zoom).subtract(map.getSize().divideBy(2)).add(map._getMapPanePos());
}

function getPixelOrigin(map, event) {
    const origin = map.getPixelOrigin();
    let cached = mapOrigins.get(map);
    if ((event?.type === 'zoom' || event?.type === 'viewreset') && cached?.origin !== origin) {
        // getCenter() uses the rounded origin after panning; _lastCenter is the center passed to _move.
        cached = { origin, position: projectOrigin(map, map._lastCenter ?? map.getCenter(), map.getZoom()) };
        mapOrigins.set(map, cached);
    }
    // Keep this origin while dragging moves the pane, and share it with newly added markers.
    return cached?.origin === origin ? cached.position : origin;
}

export const SubpixelMarker = L.Marker.extend({
    update(event) {
        if (this._icon && this._map) {
            this._setPos(this._map.project(this._latlng).subtract(getPixelOrigin(this._map, event)));
        }
        return this;
    },

    _animateZoom({ zoom, center }) {
        this._setPos(this._map.project(this._latlng, zoom).subtract(projectOrigin(this._map, center, zoom)));
    },

    _updateZIndex(offset) {
        if (this._icon) {
            // CSS z-index remains an integer even though the marker position is fractional.
            this._icon.style.zIndex = Math.round(this._zIndex + offset);
        }
    },
});
