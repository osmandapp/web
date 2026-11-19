import L from 'leaflet';
import TrackLayerProvider from '@map/map/util/TrackLayerProvider';
import EditableMarker from '@map/map/util/creator/EditableMarker';
import { createEditorCtx } from './fixtures/tracks';

/** The map the editor draws on, as far as drawing and dragging use it. */
export const map = { getZoom: () => 15, hasLayer: () => false, removeLayer: () => {}, on: () => {}, off: () => {} };

export const createDragEvent = (point) => ({ target: { _latlng: L.latLng(point.lat, point.lng) } });

/** ctx of the editor with the track drawn on its layers, as the editor holds it after opening. */
export function createDrawnCtx(points) {
    const ctx = createEditorCtx({ points });
    const layers = [];
    TrackLayerProvider.parsePoints({ map, ctx, points, layers, draggable: true, hidden: true });
    ctx.selectedGpxFile.layers = L.layerGroup(layers);
    ctx.setRoutingNewSegments = jest.fn();

    return ctx;
}

/** Drags point `index` of the open track along its meridian to `lat`, as the marker of the point does. */
export function dragPoint(ctx, index, lat) {
    const track = ctx.selectedGpxFile;
    const marker = new EditableMarker(null, ctx, null, null, track);
    marker.dragStartPoint(createDragEvent(track.points[index]), track);
    marker.dragEndPoint(createDragEvent({ lat, lng: track.points[index].lng }), track);
}
