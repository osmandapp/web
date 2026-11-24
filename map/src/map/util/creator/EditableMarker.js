import L from 'leaflet';
import MarkerOptions from '../../markers/MarkerOptions';
import TrackLayerProvider from '../TrackLayerProvider';
import { publishEditedTrack } from '../../../manager/track/TracksManager';
import { findPointIndex, isPointUnrouted, isWaitingForRouter, movePoint } from '../../../manager/track/TrackOperations';
import TracksRoutingCache from '../../../context/TracksRoutingCache';

export default class EditableMarker {
    stopclick;
    dragPoint;

    constructor(map, ctx, point, layer) {
        this.map = map;
        this.ctx = ctx;
        this.point = point;
        this.layer = layer;
        this.dragPoint = null;
        this.stopclick = false;
    }

    create() {
        let marker = this.layer;
        let options;
        let point;
        if (marker) {
            point = marker.getLatLng();
            options = marker.options;
        } else if (this.point) {
            point = new L.LatLng(this.point.lat, this.point.lng);
            options = { pointId: this.point.id };
        }
        if (point) {
            marker = new L.Marker(point, {
                icon: MarkerOptions.options.route,
                draggable: true,
                ...options,
            });
        }

        if (marker) {
            this.addEvents(marker);
        }
        return marker;
    }

    addEvents(marker) {
        marker.on('dragstart', (e) => {
            this.ctx.setPointContextMenu({});
            this.dragStartPoint(e, this.ctx.selectedGpxFileRef.current);
        });
        marker.on('dragend', (e) => {
            this.ctx.setPointContextMenu({});
            this.dragEndPoint(e, this.ctx.selectedGpxFileRef.current);
            if (e.target.options.wpt) {
                e.target.dragging.disable();
                this.stopclick = true;
            }
        });
        marker.on('contextmenu', (e) => this.createPointContextMenu(e));
        marker.on('click', (e) => {
            e.originalEvent.stopPropagation();
            if (e.target.options.wpt) {
                if (this.stopclick) {
                    this.stopclick = false;
                } else {
                    let lat = e.target._latlng.lat;
                    let lng = e.target._latlng.lng;
                    const track = this.ctx.selectedGpxFileRef.current;
                    const point = track.wpts.find(
                        (point) => parseFloat(point.lat) === lat && parseFloat(point.lon) === lng
                    );
                    const wpt = {
                        trackWpt: true,
                        mapObj: true,
                        file: track.gpx,
                        ...e,
                        ...point,
                    };
                    this.ctx.setSelectedWpt(wpt);
                }
            }
        });
    }

    createPointContextMenu(e) {
        if (e.latlng) {
            this.ctx.setPointContextMenu({
                coord: e.latlng,
                pointId: e.target.options.pointId,
                element: e.originalEvent.target,
            });
        }
    }

    dragStartPoint(e, track) {
        let lat = e.target._latlng.lat;
        let lng = e.target._latlng.lng;
        let indPoint = findPointIndex(track.points, e.target.options?.pointId);
        if (indPoint !== -1) {
            this.dragPoint = {
                indPoint: indPoint,
                lat: lat,
                lng: lng,
            };
        } else {
            let indWpt = track?.wpts.findIndex((point) => {
                return point.lat === lat && point.lon === lng;
            });
            if (indWpt !== -1) {
                this.dragPoint = {
                    indWpt: indWpt,
                    lat: lat,
                    lng: lng,
                };
            }
        }
    }

    dragEndPoint(e, current) {
        const track = { ...current };
        const lat = e.target._latlng.lat;
        const lng = e.target._latlng.lng;

        const indPoint = this.dragPoint.indPoint;

        if (indPoint !== undefined && indPoint !== -1) {
            const points = track.points;
            const polylines = TrackLayerProvider.getPolylines(track.layers?.getLayers() ?? []);

            track.points = movePoint(points, indPoint, { lat, lng });
            const currentPoint = track.points[indPoint];

            if (isPointUnrouted({ point: points[indPoint], pointIndex: indPoint, prevPoint: points[indPoint - 1] })) {
                const currentPolyline = polylines.find(
                    (p) =>
                        p.options.pointIds?.length === p.getLatLngs().length &&
                        p.options.pointIds.includes(currentPoint.id)
                );
                if (currentPolyline) {
                    const latlngs = currentPolyline.getLatLngs();
                    latlngs[currentPolyline.options.pointIds.indexOf(currentPoint.id)] = L.latLng(lat, lng);
                    currentPolyline.setLatLngs(latlngs);

                    // reset elevation/analytics when unrouted point was moved
                    track.refreshAnalytics = true;
                } else {
                    console.error('EditableMarker drag-drop unrouted-zero-geo failed');
                }
            } else {
                for (const index of [indPoint, indPoint + 1]) {
                    if (!isWaitingForRouter(track.points, index)) {
                        if (track.points[index]?.geometry !== points[index]?.geometry) {
                            track.refreshAnalytics = true;
                        }
                        continue;
                    }
                    const start = track.points[index - 1];
                    const end = track.points[index];
                    const polyline = TrackLayerProvider.updatePolyline(
                        start,
                        end,
                        polylines,
                        points[index - 1],
                        points[index]
                    );
                    if (polyline) {
                        TracksRoutingCache.addRoutingToCache(start, end, polyline, this.ctx);
                    }
                }
            }
        } else {
            const indWpt = this.dragPoint.indWpt;
            if (indWpt !== undefined && indWpt !== -1) {
                const currentWpt = track.wpts[indWpt];
                currentWpt.lat = lat;
                currentWpt.lon = lng;
            }
        }

        // finally
        publishEditedTrack(this.ctx, track);

        this.dragPoint = null;
    }
}
