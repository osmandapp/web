import L from "leaflet";
import TrackLayerProvider from "./TrackLayerProvider";
import MarkerOptions from "./markers/MarkerOptions";
import GeometryUtil from "leaflet-geometryutil";
import _ from "lodash";
import TracksManager from "../context/TracksManager";
import EditableMarker from "./EditableMarker";

export default class EditablePolyline {

    constructor(map, ctx, points, layer) {
        this.map = map;
        this.ctx = ctx;
        this.points = points;
        this.layer = layer;
    }

    create() {
        let polyline = this.layer;
        if (!polyline && this.points) {
            polyline = new L.Polyline(this.points, TrackLayerProvider.getPolylineOpt());
            polyline.setStyle({
                color: this.ctx.creatingRouteMode.colors[this.ctx.creatingRouteMode.mode]
            });
        }
        if (polyline) {
            let marker = new L.Marker((new L.LatLng(null, null)), {
                icon: MarkerOptions.options.route,
                draggable: true

            })

            polyline.on('mousemove', (e) => {
                this.mousemovePolyline(e, marker);
            });

            marker.on('dragstart', (e) => {
                this.ctx.setPointContextMenu({})
                this.dragStartNewPoint(e)
            });

            marker.on('dragend', (e) => {
                this.dragEndNewPoint(e, this.ctx.setGpxLoading).then(() => {
                    this.ctx.setGpxLoading(false);
                })
            });

            this.map.on('mousemove', (e) => {
                this.mousemoveMap(e, marker, polyline);
            });

            this.map.on('zoomend', () => {
                this.zoomendMap(polyline);
            });
        }
        return polyline;
    }

    mousemovePolyline(e, marker) {
        let coordinates = this.map.mouseEventToLatLng(e.originalEvent);
        marker.setLatLng(coordinates)
        if (!this.map.hasLayer(marker)) {
            marker.addTo(this.map);
        }
        marker._icon.style.display = '';
        this.saveCurrentPolyline(e);
    }

    dragStartNewPoint(e) {
        let lat = e.target._latlng.lat;
        let lng = e.target._latlng.lng;
        let currentLayer = this.ctx.selectedGpxFile.layers._layers[this.ctx.selectedGpxFile.currentPolyline];
        let currentLayerPoints = currentLayer._latlngs;
        let points = this.ctx.selectedGpxFile.points;

        let nextPoint = TrackLayerProvider.getPointByPolyline(currentLayer, points);
        if (nextPoint) {
            let trackInd = _.indexOf(points, nextPoint, 0);
            let index;
            if (points[trackInd - 1].profile === TracksManager.PROFILE_LINE) {
                currentLayer._latlngs.forEach(p => {
                    let currentInd = _.indexOf(currentLayerPoints, p, 0);
                    if (currentInd < currentLayerPoints.length - 1) {
                        let next = currentLayerPoints[currentInd + 1];
                        if (GeometryUtil.belongsSegment(new L.LatLng(lat, lng), new L.LatLng(p.lat, p.lng), next)) {
                            index = currentInd + 1;
                        }
                    }
                })
                this.ctx.selectedGpxFile.dragPoint = {
                    trackInd: trackInd,
                    ind: index,
                    lat: lat,
                    lng: lng
                };
            } else {
                let index = _.indexOf(points, nextPoint, 0);
                this.ctx.selectedGpxFile.dragPoint = {
                    ind: index,
                    lat: lat,
                    lng: lng
                };
            }
        } else {
            let index;
            let trackInd;
            currentLayer._latlngs.forEach(p => {
                let currentInd = _.indexOf(currentLayerPoints, p, 0);
                if (currentInd < currentLayerPoints.length - 1) {
                    let next = currentLayerPoints[currentInd + 1];
                    if (GeometryUtil.belongsSegment(new L.LatLng(lat, lng), new L.LatLng(p.lat, p.lng), next)) {
                        index = currentInd + 1;
                        this.ctx.selectedGpxFile.points.forEach(tp => {
                            if (tp.lat === p.lat && tp.lng === p.lng) {
                                trackInd = _.indexOf(this.ctx.selectedGpxFile.points, tp, 0);
                            }
                        })
                    }
                }
            })
            this.ctx.selectedGpxFile.dragPoint = {
                trackInd: trackInd + 1,
                ind: index,
                lat: lat,
                lng: lng
            };
        }

        TracksManager.getTrackWithAnalysis(TracksManager.GET_ANALYSIS, this.ctx, this.ctx.setLoadingContextMenu, points).then(res => {
            res.addPoint = false;
            this.ctx.setSelectedGpxFile({...res});
        });
    }

    async dragEndNewPoint(e, setLoading) {
        setLoading(true);
        let lat = e.target._latlng.lat;
        let lng = e.target._latlng.lng;

        let newMarker = new EditableMarker(this.map, this.ctx, new L.LatLng(lat, lng), null).create()
        this.ctx.selectedGpxFile.layers.addLayer(newMarker);

        let currentLayer = this.ctx.selectedGpxFile.layers._layers[this.ctx.selectedGpxFile.currentPolyline];
        let trackPoints = this.ctx.selectedGpxFile.points;
        let ind = this.ctx.selectedGpxFile.dragPoint.ind;

        let prevPoint = trackPoints[this.ctx.selectedGpxFile.dragPoint.trackInd - 1];
        let nextPoint = trackPoints[this.ctx.selectedGpxFile.dragPoint.trackInd];

        let isLine = prevPoint && (prevPoint.profile === TracksManager.PROFILE_LINE || !prevPoint.profile);

        if (isLine) {
            let newPoint = {
                lat: lat,
                lng: lng,
                profile: prevPoint.profile
            };
            if (nextPoint.geometry) {
                this.map.removeLayer(currentLayer);
                let oldGeo = nextPoint.geometry;
                let newGeo = oldGeo.splice(0, ind);
                newGeo.push({
                    lat: lat,
                    lng: lng
                })
                oldGeo.unshift({
                    lat: lat,
                    lng: lng
                })
                nextPoint.geometry = oldGeo;
                newPoint.geometry = newGeo;

                await this.createPolyline(prevPoint, newPoint)
                await this.createPolyline(newPoint, nextPoint)
            } else {
                currentLayer._latlngs.splice(ind, 0, newPoint);
                currentLayer.setLatLngs(currentLayer._latlngs);
            }
            trackPoints.splice(this.ctx.selectedGpxFile.dragPoint.trackInd, 0, newPoint);
        } else {
            let newPoint = _.cloneDeep(this.ctx.selectedGpxFile.points[ind]);
            newPoint.lat = lat;
            newPoint.lng = lng;
            if (newPoint.geometry) {
                delete newPoint.geometry;
                if (newPoint.profile === TracksManager.PROFILE_GAP) {
                    newPoint.profile = _.cloneDeep(this.ctx.selectedGpxFile.points[ind - 1].profile);
                }
            }

            trackPoints.splice(ind, 0, newPoint);

            let prevPoint = trackPoints[ind - 1];
            let currentPoint = trackPoints[ind];
            let nextPoint = trackPoints[ind + 1];
            this.map.removeLayer(currentLayer);

            let polylineTempCurrent = TrackLayerProvider.createTempPolyline({
                lat: prevPoint.lat,
                lng: prevPoint.lng
            }, currentPoint);
            polylineTempCurrent.addTo(this.map);

            let polylineTempNext = TrackLayerProvider.createTempPolyline({
                lat: currentPoint.lat,
                lng: currentPoint.lng
            }, nextPoint);
            polylineTempNext.addTo(this.map);

            await Promise.all(
                [await this.createPolyline(prevPoint, currentPoint)
                .then(() => {
                    this.map.removeLayer(polylineTempCurrent);
                }), await this.createPolyline(currentPoint, nextPoint)
                .then(() => {
                    this.map.removeLayer(polylineTempNext);
                })]).then(() => {
                TracksManager.getTrackWithAnalysis(TracksManager.GET_ANALYSIS, this.ctx, this.ctx.setLoadingContextMenu, trackPoints).then(res => {
                    this.ctx.selectedGpxFile.addPoint = false;
                    this.ctx.selectedGpxFile.dragPoint = false;
                    res.layers = this.ctx.selectedGpxFile.layers;
                    this.ctx.setSelectedGpxFile({...res});
                });
            })
        }
    }

    async createPolyline(startPoint, endPoint) {
        let polyline;
        if (startPoint.profile === TracksManager.PROFILE_LINE) {
            if (endPoint.geometry) {
                polyline = new EditablePolyline(this.map, this.ctx, endPoint.geometry, null).create();
            } else {
                polyline = new EditablePolyline(this.map, this.ctx, [startPoint, endPoint], null).create();
            }
        } else {
            endPoint.geometry = await TracksManager.updateRouteBetweenPoints(this.ctx, startPoint, endPoint);
            polyline = new EditablePolyline(this.map, this.ctx, endPoint.geometry, null).create();
        }
        polyline.setStyle({
            color: this.ctx.creatingRouteMode.colors[startPoint.profile]
        });
        this.ctx.selectedGpxFile.layers.addLayer(polyline);
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

    zoomendMap(polyline) {
        let currentZoom = this.map.getZoom();
        if (currentZoom > 15) {
            polyline.setStyle({weight: 5});
        } else {
            polyline.setStyle({weight: 3});
        }
    }

    saveCurrentPolyline(e) {
        this.ctx.selectedGpxFile.addPoint = false;
        this.ctx.selectedGpxFile.currentPolyline = e.target._leaflet_id;
    }
}