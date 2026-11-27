import L from 'leaflet';
import EditableMarker from '@map/map/util/creator/EditableMarker';
import { redrawTrackPoints } from '@map/map/util/creator/LocalTrackLayerHelper';
import { assignPointIds } from '@map/manager/track/TrackOperations';
import {
    effectControlRouterRequests,
    effectRefreshTrackWithRouting,
    effectRequestAnalysis,
    requestAnalysisNow,
} from '@map/context/TracksRoutingCache';
import { createEditorCtx } from './fixtures/tracks';
import { settle } from './settle';

/** The map the editor draws on, as far as drawing and dragging use it: the whole world is in view. */
export const map = {
    getZoom: () => 15,
    getBounds: () => L.latLngBounds([-90, -180], [90, 180]),
    hasLayer: () => false,
    removeLayer: () => {},
    on: () => {},
    off: () => {},
};

/** Drag event of the marker of `point`: the marker holds the id of its point. */
export const createDragEvent = (point, options = { pointId: point.id }) => ({
    target: { _latlng: L.latLng(point.lat, point.lng), options },
});

/** ctx of the editor with the track drawn on its layers, as the editor holds it after opening. */
export function createDrawnCtx(points) {
    const ctx = createEditorCtx({ points: assignPointIds(points) });
    ctx.selectedGpxFile.layers = L.featureGroup();
    redrawTrackPoints({ map, ctx, points: ctx.selectedGpxFile.points, trackLayers: ctx.selectedGpxFile.layers });

    return ctx;
}

/** Lines of the open track in the order of its points, drawn as the editor draws them after a change of the points. */
export function drawnLines(ctx) {
    const { points, layers } = ctx.selectedGpxFile;
    redrawTrackPoints({ map, ctx, points, trackLayers: layers });
    const positions = new Map(points.map(({ id }, index) => [id, index]));
    const position = (line) => positions.get(line.options.pointIds.at(-1));

    return layers
        .getLayers()
        .filter((layer) => layer instanceof L.Polyline)
        .sort((a, b) => position(a) - position(b));
}

/** The marker the editor drew for `point` of the open track. */
export function markerOf(ctx, point) {
    return ctx.selectedGpxFile.layers
        .getLayers()
        .find((layer) => layer instanceof L.Marker && layer.options.pointId === point.id);
}

/** Drags point `index` of the open track along its meridian to `lat`, as the marker of the point does. */
export function dragPoint(ctx, index, lat) {
    const track = ctx.selectedGpxFile;
    const marker = new EditableMarker(null, ctx);
    marker.dragStartPoint(createDragEvent(track.points[index]), track);
    marker.dragEndPoint(createDragEvent({ lat, lng: track.points[index].lng }), track);
}

/** ctx of one render: it keeps the track of that render while the setters update the store. */
export const renderCtx = (store) => ({ ...store });

/** Runs the routing cache of `store` as the editor effects do: the router answers the waiting segments, they go on the track; `analysis` sends the analysis the track asks for then. */
export async function routeCached(store, { analysis = false } = {}) {
    effectControlRouterRequests({ ctx: store, startedRouterJobs: 0, setStartedRouterJobs: () => {} });
    await settle();
    effectRefreshTrackWithRouting({
        ctx: store,
        geoRouter: store.trackRouter,
        saveChanges: (points, wpts, layers, track) => store.setSelectedGpxFile({ ...track }),
    });
    if (analysis) {
        analyseAsked(store);
    }
}

/** Whether the analysis effect of the editor asks for the analysis of the open track of `store`. */
export function isAnalysisAsked(store) {
    const debouncerTimer = { current: null };
    effectRequestAnalysis({ ctx: store, track: store.selectedGpxFile, debouncerTimer });
    const asked = debouncerTimer.current !== null;
    clearTimeout(debouncerTimer.current);

    return asked;
}

/** Sends the analysis the analysis effect of the editor asks for, without its debounce. */
export function analyseAsked(store) {
    if (isAnalysisAsked(store)) {
        requestAnalysisNow({ ctx: store, track: store.selectedGpxFile });
    }
}
