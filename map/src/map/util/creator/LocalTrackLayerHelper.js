import EditableMarker from './EditableMarker';
import L from 'leaflet';
import TrackLayerProvider, { TEMP_LAYER_FLAG, WPT_SIMPLIFY_THRESHOLD } from '../TrackLayerProvider';
import { isEmpty } from 'lodash';
import TracksManager from '../../../manager/track/TracksManager';
import EditablePolyline from './EditablePolyline';
import { LOCAL_TRACKS_LAYERS_ID } from '../../layers/LocalClientTrackLayer';

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

export function deleteOldLayers(layers, map) {
    if (layers) {
        map.removeLayer(layers);
    }
}

export function updateLayers({
    map,
    ctx,
    localLayers,
    ctxTrack,
    points,
    wpts,
    trackLayers,
    deleteOld = true,
    removeBounds = true,
}) {
    if (trackLayers) {
        let layers = [];
        if (points?.length > 0) {
            TrackLayerProvider.parsePoints({ map, ctx, points, layers, draggable: true });
        }
        if (wpts?.length > 0) {
            TrackLayerProvider.parseWpt({
                points: wpts,
                layers,
                map,
                ctx,
                simplify: wpts?.length >= WPT_SIMPLIFY_THRESHOLD,
            });
        }
        layers = createEditableLayers(map, ctx, ctxTrack, layers);
        if (deleteOld) {
            map.eachLayer((layer) => {
                // cleanup old layers
                if (layer.options?.type === LOCAL_TRACKS_LAYERS_ID) {
                    map.removeLayer(layer);
                }
                if (removeBounds && layer._bounds) {
                    map.removeLayer(layer);
                }
                const innerLayers = layer._layers;
                // cleanup empty layers
                if (innerLayers !== undefined && isEmpty(innerLayers)) {
                    map.removeLayer(layer);
                }
            });
            trackLayers.eachLayer((layer) => {
                if (
                    !isTempLayer(layer) ||
                    (isTempLayer(layer) && !points.find((p) => TracksManager.isEqualPoints(p, layer.point)))
                ) {
                    trackLayers.removeLayer(layer); // cleanup sub-layers
                }
            });
        }
        layers.forEach((layer) => {
            trackLayers.addLayer(layer);
        });
        if (deleteOld) {
            trackLayers.options = { ...trackLayers.options, type: LOCAL_TRACKS_LAYERS_ID };
            trackLayers.addTo(map);

            // add active tracks to map for visibility during editing
            if (!isEmpty(localLayers)) {
                for (let l in localLayers) {
                    if (localLayers[l].active && ctxTrack.name !== l) {
                        let layer = localLayers[l].layer;
                        layer.options = { ...layer.options, type: LOCAL_TRACKS_LAYERS_ID };
                        map.addLayer(layer);
                    }
                }
            }
        }
        return trackLayers;
    }
}

function isTempLayer(layer) {
    return layer.options.name === TEMP_LAYER_FLAG;
}

// change layers view->editable
function createEditableLayers(map, ctx, ctxTrack, layers) {
    let res = [];
    layers.forEach((layer) => {
        if (layer instanceof L.Marker) {
            let editableMarker = new EditableMarker(map, ctx, null, layer, ctxTrack).create(); // re-create
            res.push(editableMarker);
        } else if (layer instanceof L.Polyline) {
            let editablePolyline = new EditablePolyline(map, ctx, null, layer, ctxTrack).create(); // re-create
            res.push(editablePolyline);
        }
    });
    return res;
}
