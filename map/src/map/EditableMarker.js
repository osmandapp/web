import L from "leaflet";
import MarkerOptions from "./markers/MarkerOptions";
import TrackLayerProvider from "./TrackLayerProvider";
import _ from "lodash";
import TracksManager from "../context/TracksManager";

export default class EditableMarker {

    constructor(map, ctx, point, layer) {
        this.map = map;
        this.ctx = ctx;
        this.point = point;
        this.layer = layer;
    }
    create() {
        let marker = this.layer;
        if (!marker && this.point) {
            marker = new L.Marker((new L.LatLng(this.point.lat, this.point.lng)), {
                icon: MarkerOptions.options.route,
                draggable: true
            })
        }
        
        if (marker) {
            marker.on('dragstart', (e) => {
                this.dragStartPoint(e);
            });
            marker.on('dragend', (e) => {
                this.dragEndPoint(e, this.ctx.setGpxLoading).then(() => {
                    this.ctx.setGpxLoading(false)
                })
            });
        }
        return marker;
    }

    dragStartPoint(e) {
        let lat = e.target._latlng.lat;
        let lng = e.target._latlng.lng;
        let ind = this.ctx.selectedGpxFile.tracks[0].points.findIndex(point => point.lat === lat && point.lng === lng);
        if (ind >= 0) {
            this.ctx.selectedGpxFile.dragPoint = {
                ind: ind,
                lat: lat,
                lng: lng
            };
            this.ctx.selectedGpxFile.addPoint = false;
            this.ctx.setSelectedGpxFile({...this.ctx.selectedGpxFile});
        }
    }

    async dragEndPoint(e, setLoading) {
        setLoading(true);
        let lat = e.target._latlng.lat;
        let lng = e.target._latlng.lng;

        let trackPoints = this.ctx.selectedGpxFile.tracks[0].points;
        let ind = this.ctx.selectedGpxFile.dragPoint.ind;
        let currentPoint = trackPoints[ind];

        let polylineTemp = TrackLayerProvider.createTempPolyline(currentPoint, {lat: lat, lng: lng});
        polylineTemp.addTo(this.map);

        currentPoint.lat = lat;
        currentPoint.lng = lng;

        let prevPoint = trackPoints[ind - 1];
        let nextPoint = trackPoints[ind + 1];

        let layers = this.ctx.selectedGpxFile.layers.getLayers();
        let polylines = TrackLayerProvider.getPolylines(layers);


        let currentPolyline;
        let nextPolyline;
        if (prevPoint) {
            currentPolyline = TrackLayerProvider.getPolylineByPoints(_.cloneDeep(currentPoint), polylines);
            currentPoint.geometry = await TracksManager.updateRouteBetweenPoints(this.ctx, prevPoint, currentPoint);
        }

        if (nextPoint) {
            nextPolyline = TrackLayerProvider.getPolylineByPoints(_.cloneDeep(nextPoint), polylines);
            nextPoint.geometry = await TracksManager.updateRouteBetweenPoints(this.ctx, currentPoint, nextPoint);
        }

        let firstPoint = ind === 0;
        let lastPoint = ind === trackPoints.length - 1;

        if (firstPoint) {
            this.updatePolyline(nextPoint, nextPolyline);
        } else if (lastPoint) {
            this.updatePolyline(currentPoint, currentPolyline);
        } else {
            this.updatePolyline(nextPoint, nextPolyline);
            this.updatePolyline(currentPoint, currentPolyline);
        }
        this.map.removeLayer(polylineTemp);
        this.ctx.selectedGpxFile.addPoint = false;
        delete this.ctx.selectedGpxFile.dragPoint;
        this.ctx.setSelectedGpxFile({...this.ctx.selectedGpxFile});
    }

    updatePolyline(point, polyline) {
        let latlngs = [];
        point.geometry.forEach(point => {
            latlngs.push(new L.LatLng(point.lat, point.lng))
        })

        if (polyline) {
            polyline.setLatLngs(latlngs);
            polyline.setStyle({
                color: this.ctx.routeMode.colors[this.ctx.routeMode.mode]
            });
        }
    }
}