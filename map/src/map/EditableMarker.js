import L from "leaflet";
import MarkerOptions from "./markers/MarkerOptions";
import TrackLayerProvider from "./TrackLayerProvider";
import _ from "lodash";
import TracksManager from "../context/TracksManager";
import React from "react";
import RoutingManager from "../context/RoutingManager";

export default class EditableMarker {

    constructor(map, ctx, point, layer, track) {
        this.map = map;
        this.ctx = ctx;
        this.point = point;
        this.layer = layer;
        this.track = track;
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
                ...options
            })
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
        marker.on('dragend', (e) => this.dragEndPoint(e, track));
        marker.on('contextmenu', (e) => this.createPointContextMenu(e))
        marker.on('click', (e) => {
            e.originalEvent.stopPropagation();
            if (e.target.options.wpt) {
                this.ctx.setSelectedWpt(e);
            }
        });
    }

    createPointContextMenu(e) {
        let coord = e.latlng;
        this.ctx.pointContextMenu.ref = {
            getBoundingClientRect() {
                return {
                    width: 0,
                    height: 0,
                    top: e.containerPoint.y,
                    right: e.containerPoint.x,
                    bottom: e.containerPoint.y,
                    left: e.containerPoint.x,
                }
            }
        };
        this.ctx.pointContextMenu.left = e.containerPoint.x;
        this.ctx.pointContextMenu.top = e.containerPoint.y;
        this.ctx.pointContextMenu.coord = coord;
        this.ctx.setPointContextMenu({...this.ctx.pointContextMenu});
    }

    dragStartPoint(e, track) {
        let lat = e.target._latlng.lat;
        let lng = e.target._latlng.lng;
        let indPoint = track.points.findIndex(point => point.lat === lat && point.lng === lng);
        if (indPoint !== -1) {
            track.dragPoint = {
                indPoint: indPoint,
                lat: lat,
                lng: lng
            };
        } else {
            let indWpt = track?.wpts.findIndex(point => {
                return point.lat === lat && point.lon === lng
            });
            if (indWpt !== -1) {
                track.dragPoint = {
                    indWpt: indWpt,
                    lat: lat,
                    lng: lng
                };
            }
        }
    }

    dragEndPoint(e, track) {
        let lat = e.target._latlng.lat;
        let lng = e.target._latlng.lng;

        let trackPoints = track.points;
        let indPoint = track.dragPoint.indPoint;
        let segments = [];
        if (indPoint !== undefined && indPoint !== -1) {
            let currentPoint = trackPoints[indPoint];
            let layers = track.layers.getLayers();
            let polylines = TrackLayerProvider.getPolylines(layers);

            let currentPolyline;
            let indPointInPolyline;

            polylines.forEach(p => {
                let pp = p._latlngs;
                let fp = pp.find(point => point.lat === currentPoint.lat && point.lng === currentPoint.lng);
                if (fp !== -1) {
                    currentPolyline = p;
                    indPointInPolyline = _.indexOf(pp, fp, 0);
                }
            })

            const oldPoint = _.cloneDeep(currentPoint);

            currentPoint.lat = lat;
            currentPoint.lng = lng;

            if (currentPoint.profile === TracksManager.PROFILE_LINE && !currentPoint.geometry || !currentPoint.profile) {
                currentPolyline._latlngs[indPointInPolyline] = currentPoint;
                currentPolyline.setLatLngs(currentPolyline._latlngs);
            } else {
                let currentPolyline;
                let nextPolyline;

                let prevPoint = trackPoints[indPoint - 1];
                let nextPoint = trackPoints[indPoint + 1];

                if (prevPoint && prevPoint.profile !== TracksManager.PROFILE_GAP) {
                    if (prevPoint.geometry) {
                        if (prevPoint.profile === TracksManager.PROFILE_LINE) {
                            let newGeo = _.cloneDeep(currentPoint.geometry);
                            newGeo[newGeo.length - 1] = currentPoint;
                            currentPoint.geometry = newGeo;
                        } else {
                            currentPolyline = TrackLayerProvider.updatePolyline(prevPoint, currentPoint, polylines, null, oldPoint);
                            segments = RoutingManager.addSegmentToRouting(prevPoint, currentPoint, oldPoint, currentPolyline, segments);
                        }
                    }
                }

                if (nextPoint && currentPoint.profile !== TracksManager.PROFILE_GAP) {
                    if (nextPoint.geometry) {
                        if (currentPoint.profile === TracksManager.PROFILE_LINE) {
                            let newGeo = _.cloneDeep(nextPoint.geometry);
                            newGeo[0] = currentPoint;
                            nextPoint.geometry = newGeo;
                        } else {
                            nextPolyline = TrackLayerProvider.updatePolyline(currentPoint, nextPoint, polylines, oldPoint, null);
                            segments = RoutingManager.addSegmentToRouting(currentPoint, nextPoint, oldPoint, nextPolyline, segments);
                        }
                    }
                }
            }
        } else {
            let indWpt = track.dragPoint.indWpt;
            if (indWpt !== undefined && indWpt !== -1) {
                let currentWpt = track.wpts[indWpt];
                currentWpt.lat = lat;
                currentWpt.lon = lng;
            }
        }
        this.ctx.setRoutingNewSegments([...segments])
        this.ctx.trackState.update = true;
        this.ctx.setTrackState({...this.ctx.trackState});
    }
}