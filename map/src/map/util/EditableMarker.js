import L from 'leaflet';
import MarkerOptions from '../markers/MarkerOptions';
import TrackLayerProvider from './TrackLayerProvider';
import _ from 'lodash';
import TracksManager, { isPointUnrouted } from '../../manager/track/TracksManager';
import TracksRoutingCache from '../../context/TracksRoutingCache';

export default class EditableMarker {
    stopclick;
    dragPoint;

    constructor(map, ctx, point, layer, track) {
        this.map = map;
        this.ctx = ctx;
        this.point = point;
        this.layer = layer;
        this.track = track;
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
        }
        if (point) {
            marker = new L.Marker(point, {
                icon: MarkerOptions.options.route,
                draggable: true,
                ...options,
            });
        }

        if (marker) {
            this.addEvents(marker, this.track);
        }
        return marker;
    }

    addEvents(marker, track) {
        marker.on('dragstart', (e) => {
            this.ctx.setPointContextMenu({});
            this.dragStartPoint(e, track);
        });
        marker.on('dragend', (e) => {
            this.ctx.setPointContextMenu({});
            this.dragEndPoint(e, track);
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
                    this.ctx.setSelectedWpt(e);
                }
            }
        });
    }

    createPointContextMenu(e) {
        if (e.latlng) {
            this.ctx.pointContextMenu.coord = e.latlng;
            this.ctx.pointContextMenu.element = e.originalEvent.target;
            this.ctx.setPointContextMenu({ ...this.ctx.pointContextMenu });
        }
    }

    dragStartPoint(e, track) {
        let lat = e.target._latlng.lat;
        let lng = e.target._latlng.lng;
        let indPoint = track.points.findIndex((point) => point.lat === lat && point.lng === lng);
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

    dragEndPoint(e, track) {
        const lat = e.target._latlng.lat;
        const lng = e.target._latlng.lng;

        const trackPoints = track.points; // ref
        const indPoint = this.dragPoint.indPoint;
        let segments = [];

        if (indPoint !== undefined && indPoint !== -1) {
            const currentPoint = trackPoints[indPoint]; // ref
            const layers = track.layers.getLayers();
            const polylines = TrackLayerProvider.getPolylines(layers);

            let currentPolyline = null;
            let indPointInPolyline = -1;

            polylines.forEach((p) => {
                const pp = p._latlngs;
                const fp = pp.find((point) => point.lat === currentPoint.lat && point.lng === currentPoint.lng);
                if (fp !== -1) {
                    currentPolyline = p;
                    indPointInPolyline = _.indexOf(pp, fp, 0);
                }
            });

            const oldPoint = _.cloneDeep(currentPoint);

            currentPoint.lat = lat;
            currentPoint.lng = lng;

            const prevPoint = indPoint > 0 ? trackPoints[indPoint - 1] : null;
            const nextPoint = trackPoints[indPoint + 1];

            if (isPointUnrouted({ point: currentPoint, pointIndex: indPoint, prevPoint })) {
                if (currentPolyline && indPointInPolyline !== -1) {
                    currentPolyline._latlngs[indPointInPolyline] = currentPoint;
                    currentPolyline.setLatLngs(currentPolyline._latlngs);

                    // reset elevation/analytics when unrouted point was moved
                    delete currentPoint.ele; // undefined
                    track.refreshAnalytics = true;
                } else {
                    console.error('EditableMarker drag-drop unrouted-zero-geo failed');
                }
            } else {
                let currentPolyline = null;
                let nextPolyline = null;

                if (prevPoint && prevPoint.profile !== TracksManager.PROFILE_GAP) {
                    if (prevPoint.geometry) {
                        if (prevPoint.profile === TracksManager.PROFILE_LINE) {
                            const newGeo = _.cloneDeep(currentPoint.geometry);
                            newGeo[newGeo.length - 1] = { lat: currentPoint.lat, lng: currentPoint.lng };
                            currentPoint.geometry = newGeo;
                            track.refreshAnalytics = true;
                        } else {
                            currentPolyline = TrackLayerProvider.updatePolyline(
                                prevPoint,
                                currentPoint,
                                polylines,
                                null,
                                oldPoint
                            );
                            if (currentPolyline) {
                                currentPoint.geometry = []; // ready for updateLayers
                                segments = TracksRoutingCache.addSegmentToRouting(
                                    prevPoint,
                                    currentPoint,
                                    null, // oldPoint,
                                    currentPolyline,
                                    segments
                                );
                            }
                        }
                    }
                }

                if (nextPoint && currentPoint.profile !== TracksManager.PROFILE_GAP) {
                    const oldNextPoint = _.cloneDeep(nextPoint);
                    if (nextPoint.geometry) {
                        if (currentPoint.profile === TracksManager.PROFILE_LINE) {
                            const newGeo = _.cloneDeep(nextPoint.geometry);
                            newGeo[0] = { lat: currentPoint.lat, lng: currentPoint.lng };
                            nextPoint.geometry = newGeo;
                            track.refreshAnalytics = true;
                        } else {
                            nextPolyline = TrackLayerProvider.updatePolyline(
                                currentPoint,
                                nextPoint,
                                polylines,
                                oldPoint,
                                oldNextPoint
                            );
                            if (nextPolyline) {
                                nextPoint.geometry = []; // ready for updateLayers
                                segments = TracksRoutingCache.addSegmentToRouting(
                                    currentPoint,
                                    nextPoint,
                                    null, // oldPoint,
                                    nextPolyline,
                                    segments
                                );
                            }
                        }
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

        if (segments.length > 0) {
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
}
