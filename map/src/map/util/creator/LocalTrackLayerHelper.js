import EditableMarker from './EditableMarker';
import L from 'leaflet';
import TrackLayerProvider, { redrawWptsOnLayer, TEMP_LAYER_FLAG, WPT_SIMPLIFY_THRESHOLD } from '../TrackLayerProvider';
import isEmpty from 'lodash-es/isEmpty';
import { getResolvedPointsGroups, isWptGroupShown } from '../../../manager/track/TracksManager';
import EditablePolyline from './EditablePolyline';
import { LOCAL_TRACKS_LAYERS_ID } from '../../layers/LocalClientTrackLayer';
import { addLayerToMap } from '../MapManager';
import { findPointIndex } from '../../../manager/track/TrackOperations';

export function createFirstLayers({ map, ctx, newPoint, setRegisteredLayers }) {
    const marker = new EditableMarker(map, ctx, newPoint, null).create();
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

export function updateLayers({ map, ctx, localLayers, ctxTrack, points, wpts, trackLayers }) {
    if (trackLayers) {
        let layers = [];

        // create new layers
        if (points?.length > 0) {
            TrackLayerProvider.parsePoints({ map, ctx, points, layers, draggable: true });
        }
        const trackPointsGroups = getResolvedPointsGroups(ctxTrack);
        if (wpts?.length > 0) {
            TrackLayerProvider.parseWpt({
                points: wpts,
                layers,
                map,
                ctx,
                simplify: wpts?.length >= WPT_SIMPLIFY_THRESHOLD,
                pointsGroups: trackPointsGroups,
            });
        }
        layers = createEditableLayers(map, ctx, ctxTrack, layers);

        // remove old layers from map
        map.eachLayer((layer) => {
            // cleanup old layers
            if (layer.options?.type === LOCAL_TRACKS_LAYERS_ID) {
                map.removeLayer(layer);
            }
            const innerLayers = layer._layers;
            // cleanup empty layers
            if (innerLayers !== undefined && isEmpty(innerLayers)) {
                map.removeLayer(layer);
            }
        });
        trackLayers.eachLayer((layer) => {
            if (!isTempLayer(layer) || findPointIndex(points, layer.point?.id) === -1) {
                trackLayers.removeLayer(layer); // cleanup sub-layers
            }
            layer.options.type = LOCAL_TRACKS_LAYERS_ID;
        });

        // add new layers to map
        layers.forEach((layer) => {
            layer.options.type = LOCAL_TRACKS_LAYERS_ID;
            trackLayers.addLayer(layer);
        });
        trackLayers.options.type = LOCAL_TRACKS_LAYERS_ID;
        addLayerToMap(map, trackLayers, 'update-local-track-layers');
        redrawWptsOnLayer({ layer: trackLayers, pointsGroups: trackPointsGroups });

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

        return trackLayers;
    }
}

function isTempLayer(layer) {
    return layer.options.name === TEMP_LAYER_FLAG;
}

// change layers view->editable
function createEditableLayers(map, ctx, ctxTrack, layers) {
    const res = [];
    const pointsGroups = getResolvedPointsGroups(ctxTrack);
    layers.forEach((layer) => {
        if (layer instanceof L.Marker) {
            if (!layer.options.wpt || isWptGroupShown(pointsGroups, layer.options.category ?? '')) {
                res.push(new EditableMarker(map, ctx, null, layer).create());
            }
        } else if (layer instanceof L.Polyline) {
            const editablePolyline = new EditablePolyline(map, ctx, null, layer).create();
            res.push(editablePolyline);
        }
        map.removeLayer(layer);
    });
    return res;
}
