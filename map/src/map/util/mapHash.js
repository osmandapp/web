import L from 'leaflet';
import 'leaflet-hash';

// leaflet-hash writes the raw zoom and reads it with parseInt
L.Hash.formatHash = L.Hash.prototype.formatHash = formatMapHash;
L.Hash.parseHash = L.Hash.prototype.parseHash = parseMapHash;

export function createMapHash(map) {
    return new L.Hash(map);
}

export function formatMapHash(map) {
    const center = map.getCenter();
    const zoom = Math.round(map.getZoom() * 100) / 100;
    const precision = Math.max(0, Math.ceil(Math.log2(zoom)));

    return `#${zoom}/${center.lat.toFixed(precision)}/${center.lng.toFixed(precision)}`;
}

function parseMapHash(hash) {
    const parts = hash.replace(/^#/, '').split('/');
    if (parts.length !== 3) {
        return null;
    }
    const [zoom, lat, lng] = parts.map(Number.parseFloat);
    if ([zoom, lat, lng].some(Number.isNaN)) {
        return null;
    }

    return { center: L.latLng(lat, lng), zoom };
}
