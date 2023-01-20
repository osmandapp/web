import L from 'leaflet';
import MarkerOptions from "./markers/MarkerOptions";

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

function parsePoints(points, layers, draggable) {
    let coordsTrk = [];
    let coordsAll = [];
    points.forEach(point => {
        if (point.geometry !== undefined) {
            coordsAll = drawRoutePoints(points, point.geometry, coordsAll, layers);
        } else {
            coordsTrk.push(new L.LatLng(point.lat, point.lng))
            if (point.profile === 'gap' && coordsTrk.length > 0) {
                let polyline = new L.Polyline(coordsTrk, getPolylineOpt());
                layers.push(polyline);
                coordsAll = coordsAll.concat(Object.assign([], coordsTrk));
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

    layers.push(new L.Polyline(coordsTrk, getPolylineOpt()));

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

function drawRoutePoints(points, pointsTrk, coordsAll, layers) {
    let coords = [];
    pointsTrk.forEach(p => {
        if (p.profile === 'gap' && coords.length > 0) {
            layers.push(new L.Polyline(coords, getPolylineOpt()));
            coordsAll = coordsAll.concat(Object.assign([], coords));
            coords = [];
        } else {
            coords.push(new L.LatLng(p.lat, p.lng))
        }
    })
    coordsAll = coordsAll.concat(Object.assign([], coords));
    if (coords.length > 0) {
        layers.push(new L.Polyline(coords, getPolylineOpt()));
    }
    return coordsAll;
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
        color: '#1976d2'
    }
}


const TrackLayerProvider = {
    createLayersByTrackData,
    parsePoints
};

export default TrackLayerProvider;