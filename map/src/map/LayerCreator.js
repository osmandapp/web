import L from 'leaflet';
import MarkerIcon from "./MarkerIcon";

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
            if (point.geometry.segments) {
                point.geometry.segments.forEach(s => {
                    drawPoints(points, s.points, coordsAll, layers);
                })
            } else if (point.geometry.points) {
                drawPoints(points, point.geometry.points, coordsAll, layers);
            }
        } else {
            if (point.info.profile === 'gap' && coordsTrk.length > 0) {
                layers.push(new L.Polyline(coordsTrk, getPolylineOpt()));
                coordsAll = coordsAll.concat(Object.assign([], coordsTrk));
                coordsTrk = [];
            } else {
                coordsTrk.push(new L.LatLng(point.info.lat, point.info.lng))
            }
        }
    })
    if (coordsTrk.length > 0) {
        layers.push(new L.Polyline(coordsTrk, getPolylineOpt()));
        coordsAll = coordsAll.concat(Object.assign([], coordsTrk));
        addStartEndMarkers(coordsAll, layers);
    } else {
        addStartEndMarkers(points, layers);
    }
}

function drawPoints(points, pointsTrk, coordsAll, layers) {
    let coords = [];
    pointsTrk.forEach(p => {
        if (p.info.profile === 'gap' && coords.length > 0) {
            layers.push(new L.Polyline(coords, getPolylineOpt()));
            coordsAll = coordsAll.concat(Object.assign([], coords));
            coords = [];
        } else {
            coords.push(new L.LatLng(p.info.lat, p.info.lng))
        }

        points.forEach(p => {
            layers.push(new L.Marker((new L.LatLng(p.info.lat, p.info.lng)), {icon: markerOptions.route}));
        })
    })
    coordsAll = coordsAll.concat(Object.assign([], coords));
    if (coords.length > 0) {
        layers.push(new L.Polyline(coords, getPolylineOpt()));
    }
}

function parseWpt(points, layers) {
    points && points.forEach(point => {
        let pInfo = point.info;
        let icon = getWptIcon(pInfo)
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

            let marker = new L.Marker(new L.LatLng(pInfo.lat, pInfo.lng), opt);
            marker.bindPopup("<b>" + point.name + "</b>" + (pInfo.desc?.length > 0 ? '<br>' + pInfo.desc : '')).openPopup();

            layers.push(marker);
        }
    })
}

function getWptIcon(point) {
    let colorBackground = point.color ? point.color : '#eecc22';
    let svg = getSvgBackground(colorBackground, point);

    if (point.icon) {
        return L.divIcon({
            html: `
                              <div>
                                  ${svg}
                                  <img class="icon" src="/map/images/poi-icons-svg/mx_${point.icon}.svg"
                              </div>
                              `
        })
    } else {
        return L.divIcon({
            html: `
                              <div>
                                  ${svg}
                                  <img class="icon" src="/map/images/poi-icons-svg/mx_special_star.svg"
                              </div>
                              `
        })
    }
}

function getSvgBackground(colorBackground, point) {
    let svg;
    if (point.background) {
        if (point.background === "circle") {
            svg = ` <svg class="background" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="12" fill="${colorBackground}"/>
                        </svg>`
        }
        if (point.background === "octagon") {
            svg = `<svg class="background" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                           <path d="M13 19L19 13H29L35 19V29L29 35H19L13 29V19Z" fill="${colorBackground}"/>
                        </svg>`
        }
        if (point.background === "square") {
            svg = `<svg class="background" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <rect x="13" y="13" width="22" height="22" rx="3" fill="${colorBackground}"/>
                        </svg>`
        }
    } else {
        svg = `<svg class="background" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                         <circle cx="24" cy="24" r="12" fill="${colorBackground}"/>
                        </svg>`
    }
    return svg;
}

const markerOptions = {
    startIcon: MarkerIcon({bg: 'blue'}),
    endIcon: MarkerIcon({bg: 'red'}),
    wptIcons: {
        '': MarkerIcon({bg: 'yellow'}),
    },
    route: L.icon({
        iconUrl: '/map/images/map_icons/circle.svg',
        iconSize: [10, 10],
        clickable: false
    })
};

function addStartEndMarkers(points, layers) {
    let fp = points[0].info ? points[0].info : points[0];
    let lp = points[points.length - 1].info ? points[points.length - 1].info : points[points.length - 1];
    let start = new L.LatLng(fp.lat, fp.lng);
    let end = new L.LatLng(lp.lat, lp.lng);

    layers.push(new L.Marker(start, {
        zIndexOffset: 1000,
        icon: markerOptions.startIcon
    }))
    layers.push(new L.Marker(end, {
        zIndexOffset: 1000,
        icon: markerOptions.endIcon
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