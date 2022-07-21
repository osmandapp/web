import {Layer} from "leaflet";
import Utils from "../../../util/Utils";


export default class CurrentlyEditTrack {

    constructor() {
        this.newRouteLayer = new Layer();
        this.pointsList = [];
        this.trackName = null;
        this.finished = false;
        this.distance = 0;
        this.deleted = false;
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.deletePoint = this.deletePoint.bind(this);
        this.showTrack = this.showTrack.bind(this);
        this.startEvent = this.startEvent.bind(this);
        this.clickedEvent = this.clickedEvent.bind(this);
        this.deletedEvent = this.deletedEvent.bind(this);
        this.dragendEvent = this.dragendEvent.bind(this);
        this.endEvent = this.endEvent.bind(this);
        this.prepareMap = this.prepareMap.bind(this);
        this.clean = this.clean.bind(this);
    }

    create(map, ctx) {
        ctx.setSelectedGpxFile(null);
        ctx.setWeatherPoint(null);
        if (ctx.mapMarkerListener) {
            ctx.mapMarkerListener();
        }
        this.newRouteLayer = map.editTools.startPolyline();

        return this;
    }

    delete(map) {
        if (map.hasLayer(this.newRouteLayer)) {
            map.removeLayer(this.newRouteLayer);
            this.newRouteLayer = new Layer();
            this.pointsList = [];
        }
        this.deleted = true;
        return this;
    }

    clean(map) {
        if (map.hasLayer(this.newRouteLayer)) {
            map.removeLayer(this.newRouteLayer);
            this.newRouteLayer = new Layer();
        }

        return this;
    }

    deletePoint(index, map) {
        this.pointsList.splice(index, 1);
        this.deleteOldRoute(map);
        this.addNewRoute(map);
        if (this.pointsList.length > 0) {
            this.distance = this.pointsList[this.pointsList.length - 1].dist;
        }

        return this;
    }

    showTrack(track, map, ctx) {
        this.pointsList = track.points;
        this.trackName = track.name;
        this.deleted = false;
        if (this.pointsList && this.pointsList.length > 0) {
            ctx && ctx.setSelectedGpxFile(null);
            this.deleteOldRoute(map);
            this.addNewRoute(map);
            this.distance = this.pointsList[this.pointsList.length - 1].dist;
            map.fitBounds(this.newRouteLayer && this.newRouteLayer._bounds);
       }

        return this;
    }

    prepareMap(map) {
        this.deleteOldRoute(map);
        this.newRouteLayer = new Layer();
        this.pointsList = [];

        return this;
    }

    deleteOldRoute(map) {
        let layersWithPolyline = [];
        map._layers && Object.keys(map._layers).forEach(e => {
                if (map._layers[e].planroute) {
                    layersWithPolyline.push(map._layers[e]);
                }
            }
        );
        layersWithPolyline.forEach(function (item) {
            map.removeLayer(item);
        });
    }

    addNewRoute(map) {
        let newPoints = [];
        this.pointsList.forEach(function (item) {
            newPoints.push({lat: item.lat, lng: item.lng});
        });
        this.pointsList = Utils.getPointsDist(this.pointsList);
        this.newRouteLayer = map.editTools.addPolylineByPoints(newPoints);
    }

    startEvent() {
        this.finished = false;

        return this;
    }

    clickedEvent(e) {
        this.pointsList.push({lat: e.latlng.lat, lng: e.latlng.lng})
        this.pointsList = Utils.removeDuplicatesPoints(this.pointsList);
        this.pointsList = Utils.getPointsDist(this.pointsList);
        this.distance = this.pointsList && this.pointsList.length > 0 ? this.pointsList[this.pointsList.length - 1].dist : 0;

        return this;
    }

    deletedEvent(e) {
        if (this.newRouteLayer) {
            for (let i = 0; i < this.pointsList.length; i++) {
                if (this.pointsList[i].lat === e.latlng.lat && this.pointsList[i].lng === e.latlng.lng) {
                    this.pointsList.splice(i, 1);
                    break;
                }
            }
        }
        this.pointsList = Utils.getPointsDist(this.pointsList);
        this.distance = this.pointsList && this.pointsList.length > 0 ? this.pointsList[this.pointsList.length - 1].dist : 0;

        return this;
    }

    dragendEvent() {
        if (this.newRouteLayer._latlngs) {
            this.pointsList = [];
            this.newRouteLayer._latlngs.forEach(p => this.pointsList.push({lat: p.lat, lng: p.lng}))
            this.pointsList = Utils.removeDuplicatesPoints(this.pointsList);
            this.pointsList = Utils.getPointsDist(this.pointsList);
            this.distance = this.pointsList && this.pointsList.length > 0 ? this.pointsList[this.pointsList.length - 1].dist : 0;
        }

        return this;
    }

    endEvent() {
        this.finished = true;

        return this;
    }

}