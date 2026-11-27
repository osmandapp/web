import L from 'leaflet';
import TrackLayerProvider from '../TrackLayerProvider';
import MarkerOptions from '../../markers/MarkerOptions';
import GeometryUtil from 'leaflet-geometryutil';
import TracksManager, { publishEditedTrack } from '../../../manager/track/TracksManager';
import {
    findPointIndex,
    insertOnLine,
    isPointUnrouted,
    isProtectedSegment,
} from '../../../manager/track/TrackOperations';
import EditableMarker from './EditableMarker';

export default class EditablePolyline {
    currentPolyline;
    dragPoint;

    constructor(map, ctx, points, layer) {
        this.map = map;
        this.ctx = ctx;
        this.points = points;
        this.layer = layer;
        this.dragPoint = null;
    }

    create() {
        let polyline = this.layer;
        if (!polyline && this.points) {
            polyline = this.createBasePolyline();
        }
        if (polyline) {
            const marker = new L.Marker(new L.LatLng(null, null), {
                icon: MarkerOptions.options.route,
                title: 'poly',
                draggable: true,
            });
            if (this.map) {
                // map=null used by refreshTempLine()
                this.addEvents(this.map, polyline, marker);
            }
        }
        return polyline;
    }

    addEvents(map, polyline, marker) {
        function mousemoveMap(e) {
            let coordinates = map.mouseEventToLatLng(e.originalEvent);
            const closest = GeometryUtil.closest(map, polyline, coordinates);
            if (closest?.distance > polyline.options.weight / 2 + 1) {
                if (marker._icon) {
                    marker._icon.style.display = 'none'; // invisible
                    map.off('mousemove', mousemoveMap);
                }
            }
        }

        // on mobile, DOM send mousemove
        // together with click/touchstart
        polyline.on('mousemove', (e) => {
            this.mousemovePolyline(e, marker);
            this.map.on('mousemove', mousemoveMap);
        });

        // avoid map's click
        marker.on('click', (e) => {
            e.originalEvent.stopPropagation();
        });

        // avoid map's context menu
        // actually works from 2nd event
        marker.on('contextmenu', (e) => {
            e.originalEvent.stopPropagation();
        });

        marker.on('drag', () => {
            /**
             * When marker's icon style is set to 'none' (see mousemoveMap),
             * mouse events will propagate to the parent (parent is map).
             *
             * This leads to the glitch: both marker and map will get mouse
             * events at the same moment: 'dragend' to marker and 'click' to map.
             *
             * To solve the problem, just keep marker icon visible during dragging.
             */
            marker._icon.style.display = ''; // visible
        });

        marker.on('dragstart', (e) => {
            marker._icon.style.display = ''; // visible
            this.ctx.setPointContextMenu({});
            this.dragStartNewPoint(e, this.ctx.selectedGpxFileRef.current);
        });

        marker.on('dragend', (e) => {
            this.ctx.setPointContextMenu({});
            this.dragEndNewPoint(e, this.ctx.setGpxLoading, this.ctx.selectedGpxFileRef.current).then(() => {
                this.ctx.setGpxLoading(false);
                if (this.map.hasLayer(marker)) {
                    marker.removeFrom(this.map);
                }
            });
        });
    }

    createBasePolyline() {
        const polyline = new L.Polyline(this.points, TrackLayerProvider.getPolylineOpt(this.map));
        polyline.setStyle({
            color: this.ctx.trackRouter.getColor(),
        });
        return polyline;
    }

    mousemovePolyline(e, marker) {
        const coordinates = this.map.mouseEventToLatLng(e.originalEvent);
        marker.setLatLng(coordinates);
        if (!this.map.hasLayer(marker)) {
            marker.addTo(this.map);
        }
        marker._icon.style.display = '';
        this.currentPolyline = e.target._leaflet_id;
    }

    dragStartNewPoint(e, track) {
        const lat = e.target._latlng.lat;
        const lng = e.target._latlng.lng;

        const currentLayer = track.layers._layers[this.currentPolyline];
        const findPoint = new L.LatLng(lat, lng);

        const { index: segmentIndex } = this.findTheNearestSegment({
            point: findPoint,
            segments: currentLayer._latlngs,
        });
        const pointIds = currentLayer.options.pointIds ?? [];
        const endPointId =
            pointIds.length === currentLayer._latlngs.length ? pointIds[segmentIndex + 1] : pointIds.at(-1);
        const index = findPointIndex(track.points, endPointId);

        if (index !== -1) {
            /**
             * additionally, find the nearest geometryIndex
             * it will be used to split GPX-protected segment
             */
            const endPoint = track.points[index];
            let geometryIndex = -1;
            if (endPoint.geometry) {
                geometryIndex = this.findTheNearestSegment({ point: findPoint, segments: endPoint.geometry }).index;
            }
            this.dragPoint = {
                lat: lat,
                lng: lng,
                geometryIndex,
                index,
                layerIndex: segmentIndex + 1,
            };
        }
    }

    async dragEndNewPoint(e, setLoading, current) {
        if (!this.dragPoint) {
            console.error('dragEndNewPoint empty dragPoint');
            return;
        }

        setLoading(true);
        const track = { ...current };
        const lat = e.target._latlng.lat;
        const lng = e.target._latlng.lng;

        const currentLayer = track.layers._layers[this.currentPolyline];
        const points = track.points;
        const { index, geometryIndex, layerIndex } = this.dragPoint;

        const prevPoint = points[index - 1];
        const segmentEndPoint = points[index];

        track.points = insertOnLine(points, index, { lat, lng }, geometryIndex);
        if (track.points.length > points.length) {
            const newMarker = new EditableMarker(this.map, this.ctx, track.points[index], null).create();
            track.layers.addLayer(newMarker);
        }

        if (isPointUnrouted({ point: segmentEndPoint, pointIndex: index, prevPoint })) {
            currentLayer._latlngs.splice(layerIndex, 0, { lat, lng });
            currentLayer.setLatLngs(currentLayer._latlngs);
        } else if (!isProtectedSegment({ startPoint: prevPoint, endPoint: segmentEndPoint })) {
            const currentPoint = track.points[index];
            const nextPoint = track.points[index + 1];

            this.map.removeLayer(currentLayer);

            this.activatePolyline({ track, start: prevPoint, end: currentPoint, temp: true });
            this.activatePolyline({ track, start: currentPoint, end: nextPoint, temp: true });
        }

        // finally
        publishEditedTrack(this.ctx, track);

        this.dragPoint = null;
    }

    activatePolyline({ track, start, end, temp }) {
        let polyline = null;

        if (end.geometry && end.geometry.length > 0) {
            polyline = new EditablePolyline(this.map, this.ctx, end.geometry, null).create();
        } else {
            polyline = new EditablePolyline(this.map, this.ctx, [start, end], null).create();
        }

        if (temp) {
            TrackLayerProvider.toTempLine(polyline, start, end);
        } else {
            const color = this.ctx.trackRouter.getColor(
                // use PROFILE_LINE color for unrouted segments
                start.profile ? start : { profile: TracksManager.PROFILE_LINE }
            );
            polyline.setStyle({ color });
            polyline.options.pointIds = [start.id, end.id];
        }

        polyline.addTo(track.layers);
        // XXX register layers (but check is it still really need)
    }

    findTheNearestSegment({ point, segments }) {
        const nearest = {
            start: null,
            end: null,
            index: -1,
            min: -1,
        };

        const find = new L.LatLng(point.lat, point.lng);

        for (let i = 0; i < segments.length - 1; i++) {
            const A = new L.LatLng(segments[i].lat, segments[i].lng);
            const B = new L.LatLng(segments[i + 1].lat, segments[i + 1].lng);

            const hypotenuse = A.distanceTo(B);
            const delta = A.distanceTo(find) + find.distanceTo(B) - hypotenuse;

            const factor = delta / hypotenuse;

            if (nearest.min === -1 || factor < nearest.min) {
                nearest.index = i;
                nearest.min = factor;
                nearest.start = A;
                nearest.end = B;
            }
        }

        return nearest;
    }
}
