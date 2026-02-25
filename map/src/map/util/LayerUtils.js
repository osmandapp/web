import L from 'leaflet';

export function isMarkerLayer(layer) {
    return layer != null && layer instanceof L.Marker;
}

export function isPolylineLayer(layer) {
    return layer != null && layer instanceof L.Polyline;
}
