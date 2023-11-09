import L from 'leaflet';
import TrackLayerProvider from './TrackLayerProvider';
import MarkerOptions from '../markers/MarkerOptions';
import GeometryUtil from 'leaflet-geometryutil';
import _ from 'lodash';
import TracksManager, {
    isPointUnrouted,
    isProtectedSegment,
    splitProtectedSegment,
} from '../../manager/track/TracksManager';
import EditableMarker from './EditableMarker';
import TracksRoutingCache from '../../context/TracksRoutingCache';

export default class EditablePolyline {
    currentPolyline;
    dragPoint;

    constructor(map, ctx, points, layer, track, style) {
        this.map = map;
        this.ctx = ctx;
        this.points = points;
        this.layer = layer;
        this.track = track;
        this.style = style;
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
            this.dragStartNewPoint(e, this.track);
        });

        marker.on('dragend', (e) => {
            this.ctx.setPointContextMenu({});
            this.dragEndNewPoint(e, this.ctx.setGpxLoading, this.track).then(() => {
                this.ctx.setGpxLoading(false);
                if (this.map.hasLayer(marker)) {
                    marker.removeFrom(this.map);
                }
            });
        });
    }

    createBasePolyline() {
        let polyline = new L.Polyline(this.points, TrackLayerProvider.getPolylineOpt());
        if (this.style) {
            polyline.setStyle(this.style);
        } else {
            polyline.setStyle({
                color: this.ctx.trackRouter.getColor(),
            });
        }
        return polyline;
    }

    mousemovePolyline(e, marker) {
        let coordinates = this.map.mouseEventToLatLng(e.originalEvent);
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
        const points = track.points;

        // find exact point which has the same geometry with the current layer (OK for routable)
        const nextPoint = TrackLayerProvider.getPointByPolyline(currentLayer, points);
        const indexOf = nextPoint ? _.indexOf(points, nextPoint, 0) : -1;

        const findPoint = new L.LatLng(lat, lng);

        if (nextPoint && indexOf !== -1) {
            /**
             * index is 100% found (layer-to-points match)
             * additionally, find the nearest geometryIndex
             * it will be used to split GPX-protected segment
             */
            let geometryIndex = -1;
            if (nextPoint.geometry) {
                const { index } = this.findTheNearestSegment({
                    point: findPoint,
                    segments: nextPoint.geometry,
                });
                geometryIndex = index;
            }
            this.dragPoint = {
                lat: lat,
                lng: lng,
                geometryIndex,
                index: indexOf,
            };
        } else {
            const layerPoints = currentLayer._latlngs;

            // process Unrouted Line points: first by the nearest segment, then by points
            const { end } = this.findTheNearestSegment({ point: findPoint, segments: layerPoints });
            const { index: deepIndexOf } = this.findPointInPoints({ point: end, points: track.points });

            if (deepIndexOf !== -1) {
                this.dragPoint = {
                    index: deepIndexOf,
                    lat: lat,
                    lng: lng,
                };
            }
        }
    }

    async dragEndNewPoint(e, setLoading, track) {
        if (!this.dragPoint) {
            console.error('dragEndNewPoint empty dragPoint');
            return;
        }

        setLoading(true);
        const lat = e.target._latlng.lat;
        const lng = e.target._latlng.lng;

        const newMarker = new EditableMarker(this.map, this.ctx, new L.LatLng(lat, lng), null, track).create();
        track.layers.addLayer(newMarker);

        const currentLayer = track.layers._layers[this.currentPolyline];
        const trackPoints = track.points; // ref
        const index = this.dragPoint.index;

        const prevPoint = trackPoints[index - 1];
        const segmentEndPoint = trackPoints[index];

        if (isPointUnrouted({ point: trackPoints[index], pointIndex: index, prevPoint })) {
            const newPoint = { lat, lng };
            currentLayer._latlngs.splice(index, 0, newPoint);
            currentLayer.setLatLngs(currentLayer._latlngs);
            // refresh analytics (newPoint ele is undefined)
            trackPoints.splice(index, 0, newPoint);
            track.refreshAnalytics = true;
        } else if (isProtectedSegment({ startPoint: prevPoint, endPoint: segmentEndPoint })) {
            const newPoint = { lat, lng };
            const geometryIndex = this.dragPoint.geometryIndex;
            splitProtectedSegment({ newPoint, trackPoints, geometryIndex, endPointIndex: index });
            track.refreshAnalytics = true;
        } else {
            const newPoint = _.cloneDeep(track.points[index]);

            newPoint.lat = lat;
            newPoint.lng = lng;
            newPoint.geometry = [];
            newPoint.profile = prevPoint.profile;
            newPoint.geoProfile = Object.assign({}, prevPoint.geoProfile);

            trackPoints.splice(index, 0, newPoint);
            const currentPoint = trackPoints[index];

            const nextPoint = trackPoints[index + 1];
            nextPoint.geometry = [];

            this.map.removeLayer(currentLayer);

            const polylineTempCurrent = this.activatePolyline({ start: prevPoint, end: currentPoint, temp: true });
            const polylineTempNext = this.activatePolyline({ start: currentPoint, end: nextPoint, temp: true });

            let segments = [];
            segments = TracksRoutingCache.addSegmentToRouting(
                prevPoint,
                currentPoint,
                null, // oldPoint,
                polylineTempCurrent,
                segments
            );
            segments = TracksRoutingCache.addSegmentToRouting(
                currentPoint,
                nextPoint,
                null, // oldPoint,
                polylineTempNext,
                segments
            );
            this.ctx.setRoutingNewSegments([...segments]);
        }

        // finally
        track.zoom = false;
        track.addPoint = false;
        track.updateLayers = true;
        this.ctx.setSelectedGpxFile({ ...track });

        this.ctx.trackState.update = true;
        this.ctx.setTrackState({ ...this.ctx.trackState });

        this.dragPoint = null;
    }

    activatePolyline({ start, end, temp }) {
        let polyline = null;

        if (end.geometry && end.geometry.length > 0) {
            polyline = new EditablePolyline(this.map, this.ctx, end.geometry, null, this.track).create();
        } else {
            polyline = new EditablePolyline(this.map, this.ctx, [start, end], null, this.track).create();
        }

        if (temp) {
            polyline.setStyle(TrackLayerProvider.TEMP_LINE_STYLE);
            polyline.options.name = TrackLayerProvider.TEMP_LAYER_FLAG;
            polyline.point = end; // used in drawRoutePoints() and updateLayers()
        } else {
            const color = this.ctx.trackRouter.getColor(
                // use PROFILE_LINE color for unrouted segments
                start.profile ? start : { profile: TracksManager.PROFILE_LINE }
            );
            polyline.setStyle({ color });
        }

        polyline.addTo(this.track.layers);
        // XXX register layers (but check is it still really need)

        return polyline;
    }

    findPointInPoints({ point, points }) {
        const found = {
            index: -1,
            point: null,
        };

        found.index = points.findIndex((p) => TracksManager.isEqualPoints(point, p));

        if (found.index !== -1) {
            found.point = points[found.index];
        }

        return found;
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
