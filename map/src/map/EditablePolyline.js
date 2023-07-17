import L from 'leaflet';
import TrackLayerProvider from './TrackLayerProvider';
import MarkerOptions from './markers/MarkerOptions';
import GeometryUtil from 'leaflet-geometryutil';
import _ from 'lodash';
import TracksManager from '../context/TracksManager';
import EditableMarker from './EditableMarker';
import RoutingManager from '../context/RoutingManager';

export default class EditablePolyline {
    currentPolyline;

    constructor(map, ctx, points, layer, track, style) {
        this.map = map;
        this.ctx = ctx;
        this.points = points;
        this.layer = layer;
        this.track = track;
        this.style = style;
    }

    create() {
        let polyline = this.layer;
        if (!polyline && this.points) {
            polyline = this.createBasePolyline();
        }
        if (polyline) {
            let marker = new L.Marker(new L.LatLng(null, null), {
                icon: MarkerOptions.options.route,
                draggable: true,
            });
            this.addEvents(polyline, marker);
        }
        return polyline;
    }

    addEvents(polyline, marker) {
        polyline.on('mousemove', (e) => {
            this.mousemovePolyline(e, marker);
        });

        marker.on('dragstart', (e) => {
            this.ctx.setPointContextMenu({});
            this.dragStartNewPoint(e, this.track);
        });

        marker.on('dragend', (e) => {
            this.dragEndNewPoint(e, this.ctx.setGpxLoading, this.track).then(() => {
                this.ctx.setGpxLoading(false);
            });
        });

        this.map.on('mousemove', (e) => {
            this.mousemoveMap(e, marker, polyline);
        });
    }

    createBasePolyline() {
        let polyline = new L.Polyline(this.points, TrackLayerProvider.getPolylineOpt());
        if (this.style) {
            polyline.setStyle(this.style);
        } else {
            polyline.setStyle({
                // color: this.ctx.creatingRouteMode.colors[this.ctx.creatingRouteMode.mode],
                color: this.ctx.trackRouter.getProfile()?.color,
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
        let lat = e.target._latlng.lat;
        let lng = e.target._latlng.lng;
        let currentLayer = track.layers._layers[this.currentPolyline];
        let currentLayerPoints = currentLayer._latlngs;
        let points = track.points;

        let nextPoint = TrackLayerProvider.getPointByPolyline(currentLayer, points);
        if (nextPoint) {
            let trackInd = _.indexOf(points, nextPoint, 0);
            let index;
            if (points[trackInd - 1].profile === TracksManager.PROFILE_LINE) {
                currentLayer._latlngs.forEach((p) => {
                    let currentInd = _.indexOf(currentLayerPoints, p, 0);
                    if (currentInd < currentLayerPoints.length - 1) {
                        let next = currentLayerPoints[currentInd + 1];
                        if (GeometryUtil.belongsSegment(new L.LatLng(lat, lng), new L.LatLng(p.lat, p.lng), next)) {
                            index = currentInd + 1;
                        }
                    }
                });
                track.dragPoint = {
                    trackInd: trackInd,
                    ind: index,
                    lat: lat,
                    lng: lng,
                };
            } else {
                let index = _.indexOf(points, nextPoint, 0);
                track.dragPoint = {
                    ind: index,
                    lat: lat,
                    lng: lng,
                };
            }
        } else {
            let index;
            let trackInd;
            currentLayer._latlngs.forEach((p) => {
                let currentInd = _.indexOf(currentLayerPoints, p, 0);
                if (currentInd < currentLayerPoints.length - 1) {
                    let next = currentLayerPoints[currentInd + 1];
                    if (GeometryUtil.belongsSegment(new L.LatLng(lat, lng), new L.LatLng(p.lat, p.lng), next)) {
                        index = currentInd + 1;
                        track.points.forEach((tp) => {
                            if (tp.lat === p.lat && tp.lng === p.lng) {
                                trackInd = _.indexOf(track.points, tp, 0);
                            }
                        });
                    }
                }
            });
            track.dragPoint = {
                trackInd: trackInd + 1,
                ind: index,
                lat: lat,
                lng: lng,
            };
        }

        if (track.dragPoint) {
            track.addPoint = false;
            this.ctx.setSelectedGpxFile({ ...track });
        }
    }

    async dragEndNewPoint(e, setLoading, track) {
        setLoading(true);
        let lat = e.target._latlng.lat;
        let lng = e.target._latlng.lng;

        let newMarker = new EditableMarker(this.map, this.ctx, new L.LatLng(lat, lng), null, track).create();
        track.layers.addLayer(newMarker);

        let currentLayer = track.layers._layers[this.currentPolyline];
        let trackPoints = track.points;
        let ind = track.dragPoint.ind;

        let prevPoint = trackPoints[track.dragPoint.trackInd - 1];
        let nextPoint = trackPoints[track.dragPoint.trackInd];

        let isLine = prevPoint && (prevPoint.profile === TracksManager.PROFILE_LINE || !prevPoint.profile);

        if (isLine) {
            let newPoint = {
                lat: lat,
                lng: lng,
                profile: prevPoint.profile,
                geoProfile: prevPoint.geoProfile,
            };
            if (nextPoint.geometry) {
                this.map.removeLayer(currentLayer);
                let oldGeo = nextPoint.geometry;
                let newGeo = oldGeo.splice(0, ind);
                newGeo.push({
                    lat: lat,
                    lng: lng,
                });
                oldGeo.unshift({
                    lat: lat,
                    lng: lng,
                });
                nextPoint.geometry = oldGeo;
                newPoint.geometry = newGeo;

                this.createPolyline(prevPoint, newPoint);
                this.createPolyline(newPoint, nextPoint);
            } else {
                currentLayer._latlngs.splice(ind, 0, newPoint);
                currentLayer.setLatLngs(currentLayer._latlngs);
            }
            trackPoints.splice(track.dragPoint.trackInd, 0, newPoint);
        } else {
            let newPoint = _.cloneDeep(track.points[ind]);
            const oldPoint = _.cloneDeep(newPoint);
            newPoint.lat = lat;
            newPoint.lng = lng;
            let segments = [];
            if (newPoint.geometry) {
                delete newPoint.geometry;
                if (newPoint.profile === TracksManager.PROFILE_GAP) {
                    newPoint.profile = _.cloneDeep(track.points[ind - 1].profile);
                    newPoint.geoProfile = _.cloneDeep(track.points[ind - 1].geoProfile);
                }
            }

            trackPoints.splice(ind, 0, newPoint);

            let prevPoint = trackPoints[ind - 1];
            let currentPoint = trackPoints[ind];
            let nextPoint = trackPoints[ind + 1];
            this.map.removeLayer(currentLayer);

            let polylineTempCurrent = TrackLayerProvider.createTempPolyline(
                {
                    lat: prevPoint.lat,
                    lng: prevPoint.lng,
                },
                currentPoint
            );
            polylineTempCurrent.point = currentPoint;
            polylineTempCurrent.addTo(this.map);

            let polylineTempNext = TrackLayerProvider.createTempPolyline(
                {
                    lat: currentPoint.lat,
                    lng: currentPoint.lng,
                },
                nextPoint
            );
            polylineTempNext.point = nextPoint;
            polylineTempNext.addTo(this.map);

            segments = RoutingManager.addSegmentToRouting(
                prevPoint,
                currentPoint,
                oldPoint,
                polylineTempCurrent,
                segments
            );
            segments = RoutingManager.addSegmentToRouting(
                currentPoint,
                nextPoint,
                oldPoint,
                polylineTempNext,
                segments
            );

            track.addPoint = false;
            track.dragPoint = false;
            this.ctx.setSelectedGpxFile({ ...track });

            this.ctx.setRoutingNewSegments([...segments]);

            this.ctx.trackState.update = true;
            this.ctx.setTrackState({ ...this.ctx.trackState });
        }
    }

    createPolyline(startPoint, endPoint) {
        let polyline;
        if (startPoint.profile === TracksManager.PROFILE_LINE) {
            if (endPoint.geometry) {
                polyline = new EditablePolyline(this.map, this.ctx, endPoint.geometry, null).create();
            } else {
                polyline = new EditablePolyline(this.map, this.ctx, [startPoint, endPoint], null).create();
            }
            polyline.setStyle({
                // color: this.ctx.creatingRouteMode.colors[startPoint.profile],
                color: this.ctx.trackRouter.getProfile(startPoint)?.color,
            });
            this.ctx.selectedGpxFile.layers.addLayer(polyline);
        }
    }

    mousemoveMap(e, marker, polyline) {
        let coordinates = this.map.mouseEventToLatLng(e.originalEvent);
        const closest = GeometryUtil.closest(this.map, polyline, coordinates);
        if (closest?.distance > polyline.options.weight / 2 + 1) {
            if (marker._icon) {
                marker._icon.style.display = 'none';
            }
        }
    }
}
