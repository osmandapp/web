import L from 'leaflet';
import MarkerOptions from "./markers/MarkerOptions";

function createLayersByTrackData(data) {
    let layers = [];
    data.tracks.forEach(track => {
        parsePoints(track.points, layers);
    })
    parseWpt(data.wpts, layers);

    if (layers.length > 0) {
        return new L.FeatureGroup(layers);
    }
}

function parsePoints(points, layers) {
    let coordsTrk = [];
    let coordsAll = [];
    points.forEach(point => {
        if (point.geometry) {
            drawRoutePoints(points, point.geometry, coordsAll, layers);
        } else {
            coordsTrk.push(new L.LatLng(point.lat, point.lng))
            if (point.profile === 'gap' && coordsTrk.length > 0) {
                layers.push(new L.Polyline(coordsTrk, getPolylineOpt()));
                coordsAll = coordsAll.concat(Object.assign([], coordsTrk));
                coordsTrk = [];
            }
        }
    })

    //add start end
    if (coordsTrk.length > 0) {
        layers.push(new L.Polyline(coordsTrk, getPolylineOpt()));
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

        points.forEach(p => {
            layers.push(new L.Marker((new L.LatLng(p.lat, p.lng)), {
                icon: MarkerOptions.options.route,
            }));
        })
    })
    coordsAll = coordsAll.concat(Object.assign([], coords));
    if (coords.length > 0) {
        layers.push(new L.Polyline(coords, getPolylineOpt()));
    }
}

function parseWpt(points, layers) {
    points && points.forEach(point => {
        let pInfo = point.ext;
        let icon = MarkerOptions.getWptIcon(pInfo)
        if (icon) {
            let opt = {clickable: true, icon: icon};
            opt.group = pInfo.type ? pInfo.type : 'Favorites';
            if (pInfo.name) {
                opt.title = pInfo.name;
            }
            if (pInfo.time) {
                opt.time = pInfo.time;
            }
            if (pInfo.address) {
                opt.address = pInfo.address;
            }
            if (pInfo.cmt) {
                opt.cmt = pInfo.cmt;
            }

            let marker = new L.Marker(new L.LatLng(pInfo.lat, pInfo.lon), opt);
            marker.bindPopup("<b>" + point.name + "</b>" + (pInfo.desc?.length > 0 ? '<br>' + pInfo.desc : '')).openPopup();

            layers.push(marker);
        }
    })
}

function addStartEndMarkers(points, layers) {
    let start = new L.LatLng(points[0].lat, points[0].lng);
    let end = new L.LatLng(points[points.length - 1].lat, points[points.length - 1].lng);

    layers.push(new L.Marker(start, {
        icon: MarkerOptions.options.startIcon
    }))
    layers.push(new L.Marker(end, {
        icon: MarkerOptions.options.endIcon
    }))
}

function getPolylineOpt() {
    return {
        color: 'blue'
    }
}


const LayerCreator = {
    createLayersByTrackData
};

export default LayerCreator;