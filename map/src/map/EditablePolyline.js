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
        let currentLayer = this.ctx.selectedGpxFile.layers._layers[this.ctx.selectedGpxFile.currentPolyline]

        if (this.ctx.creatingRouteMode.mode === TracksManager.PROFILE_LINE) {
            let currentLayerPoints = currentLayer._latlngs;
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
        } else {
            let points = this.ctx.selectedGpxFile.points;
            let nextPoint = TrackLayerProvider.getPointByPolyline(currentLayer, points)
            if (nextPoint) {
                let index = _.indexOf(points, nextPoint, 0);
                this.ctx.selectedGpxFile.dragPoint = {
                    ind: index,
                    lat: lat,
                    lng: lng
                };
            }
        }
        this.ctx.selectedGpxFile.addPoint = false;
        this.ctx.setSelectedGpxFile({...this.ctx.selectedGpxFile});
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

        if (this.ctx.creatingRouteMode.mode === TracksManager.PROFILE_LINE) {
            let newPoint = {
                lat: lat,
                lng: lng
            };
            trackPoints.splice(this.ctx.selectedGpxFile.dragPoint.trackInd, 0, newPoint);
            currentLayer._latlngs.splice(ind, 0, newPoint);
            currentLayer.setLatLngs(currentLayer._latlngs);
        } else {
            let newPoint = _.cloneDeep(this.ctx.selectedGpxFile.points[ind]);
            newPoint.lat = lat;
            newPoint.lng = lng;
            if (newPoint.geometry) {
                delete newPoint.geometry;
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

            await this.createPolyline(prevPoint, currentPoint)
                .then(() => {
                    this.map.removeLayer(polylineTempCurrent);
                });
            await this.createPolyline(currentPoint, nextPoint)
                .then(() => {
                    this.map.removeLayer(polylineTempNext);
                });
        }

        this.ctx.selectedGpxFile.addPoint = false;
        this.ctx.selectedGpxFile.dragPoint = false;
        this.ctx.setSelectedGpxFile({...this.ctx.selectedGpxFile});
    }

    async createPolyline(startPoint, endPoint) {
        let polyline;
        if (this.ctx.creatingRouteMode.mode === TracksManager.PROFILE_LINE) {
            polyline = new EditablePolyline(this.map, this.ctx, [startPoint, endPoint], null).create();
        } else {
            endPoint.geometry = await TracksManager.updateRouteBetweenPoints(this.ctx, startPoint, endPoint);
            polyline = new EditablePolyline(this.map, this.ctx, endPoint.geometry, null).create();
        }
        polyline.setStyle({
            color: this.ctx.creatingRouteMode.colors[this.ctx.creatingRouteMode.mode]
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
        this.ctx.setSelectedGpxFile({...this.ctx.selectedGpxFile});
    }
}