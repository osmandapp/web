import L from 'leaflet';

// Leaflet rounds marker positions to whole pixels while the GL canvas moves by fractions: markers jitter on zoom.
const mapOrigins = new WeakMap();

// map.getPixelOrigin() without its round()
function projectOrigin(map, center, zoom) {
    return map.project(center, zoom).subtract(map.getSize().divideBy(2)).add(map._getMapPanePos());
}

function getPixelOrigin(map, event) {
    const origin = map.getPixelOrigin();
    let cached = mapOrigins.get(map);
    if ((event?.type === 'zoom' || event?.type === 'viewreset') && cached?.origin !== origin) {
        // _lastCenter is what _move received, getCenter() is already derived from the rounded origin
        cached = { origin, position: projectOrigin(map, map._lastCenter ?? map.getCenter(), map.getZoom()) };
        mapOrigins.set(map, cached);
    }
    // panning keeps the origin object, so markers added later land on the same exact position
    return cached?.origin === origin ? cached.position : origin;
}

const subpixelPosition = {
    // Leaflet: latLngToLayerPoint(latlng).round()
    update(event) {
        if (this._icon && this._map) {
            this._setPos(this._map.project(this._latlng).subtract(getPixelOrigin(this._map, event)));
        }
        return this;
    },

    // the CSS zoom of setView and fitBounds, rounded by Leaflet as well
    _animateZoom({ zoom, center }) {
        this._setPos(this._map.project(this._latlng, zoom).subtract(projectOrigin(this._map, center, zoom)));
    },

    // zIndex is pos.y + offset, a fractional z-index is ignored by CSS
    _updateZIndex(offset) {
        if (this._icon) {
            this._icon.style.zIndex = Math.round(this._zIndex + offset);
        }
    },
};

// Called at module scope: an import without a used export is dropped by "sideEffects": false.
export function applySubpixelMarkerPosition() {
    // every marker of the app, not only the ones our layers create
    L.Marker.include(subpixelPosition);
}
