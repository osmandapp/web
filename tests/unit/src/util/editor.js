import L from 'leaflet';
import TrackLayerProvider from '@map/map/util/TrackLayerProvider';
import EditableMarker from '@map/map/util/creator/EditableMarker';
import { assignPointIds } from '@map/manager/track/TrackOperations';
import {
    effectControlRouterRequests,
    effectRefreshTrackWithRouting,
    requestAnalysisNow,
} from '@map/context/TracksRoutingCache';
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
    const marker = new EditableMarker(null, ctx, null, null);
    marker.dragStartPoint(createDragEvent(track.points[index]), track);
    marker.dragEndPoint(createDragEvent({ lat, lng: track.points[index].lng }), track);
}

/** ctx of one render: it keeps the track of that render while the setters update the store. */
export const renderCtx = (store) => ({ ...store });

/** Runs the routing cache of `store` as the editor effects do: the router answers the waiting segments, they go on the track; `analysis` sends the analysis they ask for without its debounce. */
export async function routeCached(store, { analysis = false } = {}) {
    const debouncerTimer = { current: null };
    effectControlRouterRequests({ ctx: store, startedRouterJobs: 0, setStartedRouterJobs: () => {} });
    await settle();
    effectRefreshTrackWithRouting({
        ctx: store,
        map,
        geoRouter: store.trackRouter,
        saveChanges: (points, wpts, layers, track) => store.setSelectedGpxFile({ ...track }),
        debouncerTimer,
    });
    const analysisAsked = debouncerTimer.current !== null;
    clearTimeout(debouncerTimer.current);
    if (analysis && analysisAsked) {
        requestAnalysisNow({ ctx: store, track: store.selectedGpxFile });
    }
}
