import L from 'leaflet';
import MarkerOptions from "./markers/MarkerOptions";
import _ from "lodash";
import TracksManager from "../context/TracksManager";

function createLayersByTrackData(data) {
    let layers = [];
    data.tracks.forEach(track => {
        let res = parsePoints(track.points, layers);
        addStartEnd(track.points, layers, res.coordsTrk, res.coordsAll);
    })
    parseWpt(data.wpts, layers);

    if (layers.length > 0) {
        return new L.FeatureGroup(layers);
    }
}

function parsePoints(points, layers, draggable, ctx) {
    let coordsTrk = [];
    let coordsAll = [];
    points.forEach(point => {
        if (point.geometry !== undefined) {
            coordsAll = drawRoutePoints(points, point, coordsAll, layers, ctx);
        } else {
            coordsTrk.push(new L.LatLng(point.lat, point.lng))
            if (point.profile === TracksManager.PROFILE_GAP && coordsTrk.length > 0) {
                let polyline = new L.Polyline(coordsTrk, getPolylineOpt());
                if (ctx) {
                    polyline.setStyle({
                        color: ctx.creatingRouteMode.colors[getProfile(point, points)]
                    });
                }
                layers.push(polyline);
                coordsAll = coordsAll.concat(_.cloneDeep(coordsTrk));
                coordsTrk = [];
            }
        }
    })

    points.forEach(p => {
        let marker = new L.Marker((new L.LatLng(p.lat, p.lng)), {
            icon: MarkerOptions.options.route,
            draggable: draggable
        });
        layers.push(marker);
    })

    let endPolyline = new L.Polyline(coordsTrk, getPolylineOpt());
    if (ctx) {
        endPolyline.setStyle({
            color: ctx.creatingRouteMode.colors[TracksManager.PROFILE_LINE]
        });
    }
    layers.push(endPolyline);

    return {
        coordsTrk: coordsTrk,
        coordsAll: coordsAll
    }
}

function addStartEnd(points, layers, coordsTrk, coordsAll) {
    if (coordsTrk.length > 0) {
        coordsAll = coordsAll.concat(Object.assign([], coordsTrk));
        addStartEndMarkers(coordsAll, layers);
    } else {
        addStartEndMarkers(points, layers);
    }
}

function drawRoutePoints(points, point, coordsAll, layers, ctx) {
    let coords = [];
    point.geometry.forEach(p => {
        if (p.profile === TracksManager.PROFILE_GAP && coords.length > 0) {
            layers.push(new L.Polyline(coords, getPolylineOpt()));
            coordsAll = coordsAll.concat(Object.assign([], coords));
            coords = [];
        } else {
            coords.push(new L.LatLng(p.lat, p.lng))
        }
    })
    coordsAll = coordsAll.concat(Object.assign([], coords));
    if (coords.length > 0) {
        let polyline = new L.Polyline(coords, getPolylineOpt());
        if (ctx) {
            polyline.setStyle({
                color: ctx.creatingRouteMode.colors[getProfile(point, points)]
            });
        }
        layers.push(polyline);
    }
    return coordsAll;
}

function getProfile(point, points) {
    let ind = _.indexOf(points, point, 0);
    if (ind > 0) {
        return points[ind - 1].profile ? points[ind - 1].profile : TracksManager.PROFILE_LINE;
    } else {
        return point.profile ? point.profile : TracksManager.PROFILE_LINE;
    }

}

function parseWpt(points, layers) {
    points && points.forEach(point => {
        let opt;
        let icon = MarkerOptions.getWptIcon(point, point.color, point.background, point.icon)
        let pInfo = point.ext;
        let lat = point.lat ? point.lat : pInfo.lat;
        let lon = point.lon ? point.lon : pInfo.lon;
        if (icon) {
            opt = {clickable: true, icon: icon};
            if (pInfo?.time) {
                opt.time = pInfo.time;
            }
            if (pInfo?.cmt) {
                opt.cmt = pInfo.cmt;
            }
        }
        if (point.name) {
            opt.title = point.name;
        }
        opt.category = point.category ? point.category : 'favorites'
        if (point.desc) {
            opt.desc = point.desc;
        }
        if (point.address) {
            opt.address = point.address;
        }

        let marker = new L.Marker(new L.LatLng(lat, lon), opt);

        layers.push(marker);
    })
}

function addStartEndMarkers(points, layers) {
    let start = new L.LatLng(points[0].lat, points[0].lng);
    if (points.length > 1) {
        let end = new L.LatLng(points[points.length - 1].lat, points[points.length - 1].lng);
        layers.push(new L.Marker(end, {
            icon: MarkerOptions.options.endIcon,
        }))
    }
    layers.push(new L.Marker(start, {
        icon: MarkerOptions.options.startIcon,
    }))
}

function getPolylineOpt() {
    return {
        color: '#1976d2',
        weight: 5,
    }
}

function getPolylineByPoints(point, polylines) {
    let res;
    let geo = point.geometry;
    if (geo) {
        res = polylines.find(polyline => {
            let layerPoints = polyline._latlngs;
            if (layerPoints.length === geo.length) {
                let matchedFirstPoint = geo[0].lat === layerPoints[0].lat && geo[0].lng === layerPoints[0].lng;
                let matchedLastPoint = geo[geo.length - 1].lat === layerPoints[layerPoints.length - 1].lat && geo[geo.length - 1].lng === layerPoints[layerPoints.length - 1].lng;
                if (matchedFirstPoint && matchedLastPoint) {
                    return polyline;
                }
            }
        })
    }
    return res;
}

function getPointByPolyline(layer, points) {
    let res;
    let layerPoints = layer._latlngs;
    points.forEach(p => {
        let geo = p.geometry;
        if (geo) {
            if (geo.length === layerPoints.length) {
                if (geo[0].lat === layerPoints[0].lat && geo[0].lng === layerPoints[0].lng &&
                    geo[geo.length - 1].lat === layerPoints[layerPoints.length - 1].lat && geo[geo.length - 1].lng === layerPoints[layerPoints.length - 1].lng) {
                    res = p;
                }
            }
        }
    })
    return res;
}

function createTempPolyline(prev, next) {
    let style = {
        color: '#fbc73a',
        dashArray: '5, 5',
        dashOffset: '0'
    }

    return new L.Polyline([new L.LatLng(prev.lat, prev.lng), new L.LatLng(next.lat, next.lng)], style);
}

function getPolylines(layers) {
    let res = [];
    layers.forEach(layer => {
        if (layer instanceof L.Polyline) {
            let points = layer.getLatLngs();
            if (points.length > 0) {
                res.push(layer);
            }
        }
    })
    return res;
}


const TrackLayerProvider = {
    createLayersByTrackData,
    parsePoints,
    parseWpt,
    getPolylineOpt,
    getPolylineByPoints,
    getPointByPolyline,
    createTempPolyline,
    getPolylines
};

export default TrackLayerProvider;