import EditableMarker from './EditableMarker';
import L from 'leaflet';

export function createFirstLayers({ map, ctx, track, newPoint, setRegisteredLayers }) {
    const marker = new EditableMarker(map, ctx, newPoint, null, track).create();
    const layers = new L.FeatureGroup().addLayer(marker);

    // register both
    addRegisteredLayers(marker, setRegisteredLayers);
    addRegisteredLayers(layers, setRegisteredLayers);

    return layers;
}

export function addRegisteredLayers(layer, setRegisteredLayers) {
    if (layer) {
        const id = layer._leaflet_id || 'unknown';
        setRegisteredLayers((prev) => {
            const layers = { ...prev };
            layers[id] = layer;
            return layers;
        });
    }
}

export function clearAllRegisteredLayers(map, setRegisteredLayers) {
    setRegisteredLayers((prev) => {
        const next = { ...prev };
        for (let id in prev) {
            const layer = prev[id];
            if (map.hasLayer(layer)) {
                map.removeLayer(layer);
            }
            delete next[id];
        }
        return next;
    });
}
