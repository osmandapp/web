import EditableMarker from './EditableMarker';
import L from 'leaflet';
import TrackLayerProvider, {
    POINTS_SIMPLIFY_THRESHOLD,
    POINTS_SIMPLIFY_ZOOM_THRESHOLD,
    redrawWptsOnLayer,
    TEMP_LINE_STYLE,
    WPT_SIMPLIFY_THRESHOLD,
} from '../TrackLayerProvider';
import isEmpty from 'lodash-es/isEmpty';
import TracksManager, { getResolvedPointsGroups, isWptGroupShown } from '../../../manager/track/TracksManager';
import EditablePolyline from './EditablePolyline';
import { LOCAL_TRACKS_LAYERS_ID } from '../../layers/LocalClientTrackLayer';
import { addLayerToMap } from '../MapManager';

export function createFirstLayers(setRegisteredLayers) {
    const layers = new L.FeatureGroup();
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
            trackLayers.removeLayer(layer); // cleanup sub-layers
        });
        trackLayers.options.drawnPoints = null;

        // add new layers to map
        redrawTrackPoints({ map, ctx, points: points ?? [], trackLayers });
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

export function redrawTrackPoints({ map, ctx, points, trackLayers }) {
    if (trackLayers.options.drawnPoints === points) {
        return;
    }
    trackLayers.options.drawnPoints = points;
    const drawnLines = new Map();
    const drawnMarkers = new Map();
    trackLayers.eachLayer((layer) => {
        if (layer.options.lineKey) {
            drawnLines.set(layer.options.lineKey, layer);
        } else if (layer.options.isRoutePoint) {
            drawnMarkers.set(layer.options.pointId, layer);
        }
    });

    const lineKeys = new Set();
    const lines = [];
    TrackLayerProvider.getTrackLines(points).forEach((line) => {
        if (line.vertices.length === 0) {
            return;
        }
        line.key = getLineKey(line, lineKeys);
        line.color = line.waiting
            ? TEMP_LINE_STYLE.color
            : ctx.trackRouter.getColor(TrackLayerProvider.getColorProfile(line.colorPoint));
        lineKeys.add(line.key);
        lines.push(line);
    });
    redrawByKey({
        trackLayers,
        drawn: drawnLines,
        items: lines,
        keyOf: ({ key }) => key,
        isDrawn: isDrawnLine,
        create: (line) => createEditableLine({ map, ctx, line }),
    });
    redrawByKey({
        trackLayers,
        drawn: drawnMarkers,
        items: getPointsWithMarkers(map, points),
        keyOf: ({ id }) => id,
        isDrawn: (marker, point) => TracksManager.isEqualPoints(marker.options.pointLatLng, point),
        create: (point) => createEditableMarker({ map, ctx, point }),
    });
}

function redrawByKey({ trackLayers, drawn, items, keyOf, isDrawn, create }) {
    const keys = new Set();
    items.forEach((item) => {
        const key = keyOf(item);
        keys.add(key);
        const layer = drawn.get(key);
        if (layer && isDrawn(layer, item)) {
            return;
        }
        if (layer) {
            trackLayers.removeLayer(layer);
        }
        trackLayers.addLayer(create(item));
    });
    drawn.forEach((layer, key) => {
        if (!keys.has(key)) {
            trackLayers.removeLayer(layer);
        }
    });
}

function getLineKey(line, lineKeys) {
    const key = [line.pointIds[0], line.pointIds.at(-1), line.pointIds.length].join();
    let part = 0;
    while (lineKeys.has(`${key}:${part}`)) {
        part++;
    }

    return `${key}:${part}`;
}

function isDrawnLine(layer, line) {
    const latlngs = layer.getLatLngs();

    return (
        layer.options.color === line.color &&
        !!layer.options.dashArray === !!line.waiting &&
        latlngs.length === line.vertices.length &&
        line.vertices.every((vertex, i) => TracksManager.isEqualPoints(latlngs[i], vertex))
    );
}

function createEditableLine({ map, ctx, line }) {
    const polyline = line.waiting
        ? createWaitingLine(line)
        : TrackLayerProvider.createPolyline({
              coords: TrackLayerProvider.toLatLngs(line.vertices),
              ctx,
              map,
              colorPoint: line.colorPoint,
              pointIds: line.pointIds,
              draggable: true,
          });
    polyline.options.lineKey = line.key;
    polyline.options.type = LOCAL_TRACKS_LAYERS_ID;

    return line.waiting ? polyline : new EditablePolyline(map, ctx, polyline).create();
}

function createWaitingLine({ vertices: [start, end] }) {
    return TrackLayerProvider.createTempPolyline(start, end);
}

function createEditableMarker({ map, ctx, point }) {
    const pointLatLng = new L.LatLng(point.lat, point.lng);
    const options = { isRoutePoint: true, pointId: point.id, pointLatLng, type: LOCAL_TRACKS_LAYERS_ID };

    return new EditableMarker(map, ctx, pointLatLng, options).create();
}

function getPointsWithMarkers(map, points) {
    const bounds = map.getBounds();
    const thinned = points.length > POINTS_SIMPLIFY_THRESHOLD && map.getZoom() < POINTS_SIMPLIFY_ZOOM_THRESHOLD;

    return points.filter(
        (point, index) => (!thinned || index % 30 === 0) && bounds.contains(new L.LatLng(point.lat, point.lng))
    );
}

// change layers view->editable
function createEditableLayers(map, ctx, ctxTrack, layers) {
    const res = [];
    const pointsGroups = getResolvedPointsGroups(ctxTrack);
    layers.forEach((layer) => {
        if (layer instanceof L.Marker) {
            if (!layer.options.wpt || isWptGroupShown(pointsGroups, layer.options.category ?? '')) {
                res.push(new EditableMarker(map, ctx, layer.getLatLng(), layer.options).create());
            }
        }
        map.removeLayer(layer);
    });
    return res;
}
