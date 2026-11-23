import L from 'leaflet';
import TrackLayerProvider from '@map/map/util/TrackLayerProvider';
import EditableMarker from '@map/map/util/creator/EditableMarker';
import { assignPointIds } from '@map/manager/track/TrackOperations';
import { createEditorCtx } from './fixtures/tracks';
import { settle } from './settle';

/** The map the editor draws on, as far as drawing and dragging use it. */
export const map = { getZoom: () => 15, hasLayer: () => false, removeLayer: () => {}, on: () => {}, off: () => {} };

/** Drag event of the marker of `point`: the marker holds the id of its point. */
export const createDragEvent = (point) => ({
    target: { _latlng: L.latLng(point.lat, point.lng), options: { pointId: point.id } },
});

/** ctx of the editor with the track drawn on its layers, as the editor holds it after opening. */
export function createDrawnCtx(points) {
    const ctx = createEditorCtx({ points: assignPointIds(points) });
    const layers = [];
    TrackLayerProvider.parsePoints({
        map,
        ctx,
        points: ctx.selectedGpxFile.points,
        layers,
        draggable: true,
        hidden: true,
    });
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

/** ctx of one render: it keeps the track of that render while the setters update the store. */
export const renderCtx = (store) => ({ ...store });

/** Holds every router answer of `store` until `release`, which gives them one by one. */
export function holdRouter(store) {
    const answers = [];
    const route = store.trackRouter.updateRouteBetweenPoints.getMockImplementation();
    store.trackRouter.updateRouteBetweenPoints.mockImplementation(
        (...args) => new Promise((resolve) => answers.push(() => resolve(route(...args))))
    );
    const release = async () => {
        while (answers.length > 0) {
            answers.shift()();
            await settle();
        }
    };

    return { answers, release };
}
