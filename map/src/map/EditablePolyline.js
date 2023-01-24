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
                this.dragEndNewPoint(e)
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
        let points = this.ctx.selectedGpxFile.tracks[0].points;
        let nextPoint = TrackLayerProvider.getPointByPolyline(currentLayer, points)

        if (nextPoint) {
            let index = _.indexOf(points, nextPoint, 0);
            this.ctx.selectedGpxFile.dragPoint = {
                ind: index,
                lat: lat,
                lng: lng
            };
        }
        this.ctx.setSelectedGpxFile({...this.ctx.selectedGpxFile});
    }

    async dragEndNewPoint(e) {
        let lat = e.target._latlng.lat;
        let lng = e.target._latlng.lng;
        let newMarker = new EditableMarker(this.map, this.ctx, new L.LatLng(lat, lng), null).create()
        this.ctx.selectedGpxFile.layers.addLayer(newMarker);

        let trackPoints = this.ctx.selectedGpxFile.tracks[0].points;
        let ind = this.ctx.selectedGpxFile.dragPoint.ind;

        let newPoint = _.cloneDeep(this.ctx.selectedGpxFile.tracks[0].points[ind]);
        newPoint.lat = lat;
        newPoint.lng = lng;
        if (newPoint.geometry) {
            delete newPoint.geometry;
        }

        trackPoints.splice(ind, 0, newPoint);

        this.ctx.selectedGpxFile.layers.removeLayer(this.ctx.selectedGpxFile.layers._layers[this.ctx.selectedGpxFile.currentPolyline])
        await this.createPolyline(trackPoints[ind - 1], trackPoints[ind]);
        await this.createPolyline(trackPoints[ind], trackPoints[ind + 1]);

        this.ctx.selectedGpxFile.addPoint = false;
        delete this.ctx.selectedGpxFile.dragPoint;
        this.ctx.setSelectedGpxFile({...this.ctx.selectedGpxFile});
    }

    async createPolyline(startPoint, endPoint) {
        let polylineTempCurrent;
        endPoint.geometry = await TracksManager.updateRouteBetweenPoints(this.ctx, startPoint, endPoint);
        polylineTempCurrent = TrackLayerProvider.createTempPolyline({lat: startPoint.lat, lng: startPoint.lng}, endPoint);
        polylineTempCurrent.addTo(this.map);

        let polylineCurrent = new EditablePolyline(this.map, this.ctx, endPoint.geometry, null).create();
        this.ctx.selectedGpxFile.layers.addLayer(polylineCurrent);
        this.map.removeLayer(polylineTempCurrent);
    }

    mousemoveMap(e, marker, polyline) {
        let coordinates = this.map.mouseEventToLatLng(e.originalEvent);
        const closest = GeometryUtil.closest(this.map, polyline, coordinates);
        if (closest.distance > polyline.options.weight / 2 + 1) {
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