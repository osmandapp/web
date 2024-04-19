import L from 'leaflet';
import MarkerOptions from '../markers/MarkerOptions';
import _ from 'lodash';
import TracksManager, { GPX_FILE_TYPE, isProtectedSegment } from '../../manager/track/TracksManager';
import EditablePolyline from './EditablePolyline';

export const TEMP_LAYER_FLAG = 'temp';
export const TEMP_LINE_STYLE = {
    color: '#fbc73a',
    dashArray: '5, 5',
    dashOffset: '0',
    // name: TEMP_LAYER_FLAG, // style.name was not used, instead of actual layer.options.name
};

function createLayersByTrackData({ data, ctx, map, type = GPX_FILE_TYPE }) {
    let layers = [];
    data.tracks?.forEach((track) => {
        if (track.points?.length > 0) {
            let res = parsePoints({ map, ctx, points: track.points, layers, hidden: true });
            addStartEnd(track.points, layers, res.coordsTrk, res.coordsAll);
        }
    });
    parseWpt(data.wpts, layers, ctx, data);

    if (layers.length > 0) {
        let layersGroup = new L.FeatureGroup(layers);
        layersGroup.options.type = type;
        return layersGroup;
    }
}

function parsePoints({ map, ctx, points, layers, draggable = false, hidden = false }) {
    let coordsTrk = [];
    let coordsAll = [];
    points.forEach((point, index) => {
        if (point.geometry !== undefined && point.geometry !== null) {
            coordsAll = drawRoutePoints({ map, points, point, coordsAll, layers, ctx, draggable, index });
        } else {
            coordsTrk.push(new L.LatLng(point.lat, point.lng));
            if (point.profile === TracksManager.PROFILE_GAP && coordsTrk.length > 0) {
                let polyline = new L.Polyline(coordsTrk, getPolylineOpt());
                if (ctx) {
                    polyline.setStyle({
                        color: ctx.trackRouter.getColor(getPointGeoProfile(point, points)),
                    });
                }
                addStartEndGap(point, points, layers, draggable);
                layers.push(polyline);
                coordsAll = coordsAll.concat(_.cloneDeep(coordsTrk));
                coordsTrk = [];
            }
        }
    });

    if (hidden === false) {
        points.forEach((p) => {
            if (draggable || (!draggable && p.geometry !== undefined)) {
                const marker = new L.Marker(new L.LatLng(p.lat, p.lng), {
                    icon: MarkerOptions.options.route,
                    draggable: draggable,
                    isRoutePoint: true,
                });
                layers.push(marker);
            }
        });
    }

    let endPolyline = new L.Polyline(coordsTrk, getPolylineOpt());
    if (ctx) {
        endPolyline.setStyle({
            color: ctx.trackRouter.getColor({ profile: TracksManager.PROFILE_LINE }),
        });
    }
    layers.push(endPolyline);

    return {
        coordsTrk: coordsTrk,
        coordsAll: coordsAll,
    };
}

function addStartEnd(points, layers, coordsTrk, coordsAll) {
    if (coordsTrk.length > 0) {
        coordsAll = coordsAll.concat(Object.assign([], coordsTrk));
        addStartEndMarkers(coordsAll, layers);
    } else {
        addStartEndMarkers(points, layers);
    }
}

function drawRoutePoints({ map, ctx, points, point, coordsAll, layers, draggable, index }) {
    let coords = [];

    // draw tempLine for orphaned empty geo but not for gap
    if (ctx && map && point.geometry.length === 0 && index > 0) {
        if (points[index - 1].profile !== TracksManager.PROFILE_GAP) {
            let pointLayersFound = 0;
            const trackLayers = ctx.selectedGpxFile.layers;
            if (trackLayers && map.hasLayer(trackLayers)) {
                trackLayers.eachLayer((l) => {
                    if (l.point && TracksManager.isEqualPoints(l.point, point)) {
                        pointLayersFound++;
                    }
                });
            }
            if (pointLayersFound === 0) {
                const start = points[index - 1];
                const end = point;
                coords.push(new L.LatLng(start.lat, start.lng));
                coords.push(new L.LatLng(end.lat, end.lng));
                coordsAll = coordsAll.concat(Object.assign([], coords));
                const orphan = createTempPolyline(start, end);
                orphan.options.name = undefined;
                layers.push(orphan);
                return coordsAll;
            }
        }
    }

    point.geometry.forEach((p) => {
        if (p.profile === TracksManager.PROFILE_GAP && coords.length > 0) {
            addStartEndGap(point, points, layers, draggable);
            coords.push(new L.LatLng(p.lat, p.lng));
            layers.push(createPolyline(coords, ctx, point, points));
            coordsAll = coordsAll.concat(Object.assign([], coords));
            coords = [];
        } else {
            coords.push(new L.LatLng(p.lat, p.lng));
        }
    });

    if (coords.length > 0) {
        coordsAll = coordsAll.concat(Object.assign([], coords));
        layers.push(createPolyline(coords, ctx, point, points));
    }

    return coordsAll;
}

function createPolyline(coords, ctx, point, points) {
    let polyline = new L.Polyline(coords, getPolylineOpt());
    if (ctx) {
        polyline.setStyle({
            color: ctx.trackRouter.getColor(getPointGeoProfile(point, points)),
        });
    }
    return polyline;
}

function addStartEndGap(point, allPoints, layers, editTrack) {
    if (!editTrack) {
        let end = new L.LatLng(point.lat, point.lng);
        layers.push(
            new L.Marker(end, {
                icon: MarkerOptions.options.trackEnd,
                zIndexOffset: 1000,
            })
        );
        let currentInd = _.indexOf(allPoints, point);
        if (currentInd !== -1 && currentInd + 1 < allPoints.length) {
            let start = new L.LatLng(allPoints[currentInd + 1].lat, allPoints[currentInd + 1].lng);
            layers.push(
                new L.Marker(start, {
                    icon: MarkerOptions.options.trackStart,
                    zIndexOffset: 1000,
                })
            );
        }
    }
}

// used just to pick color
// find previous point if possible
// use PROFILE_LINE if no geoProfile found
function getPointGeoProfile(point, points) {
    const ind = _.indexOf(points, point, 0);
    const usePoint = ind > 0 ? points[ind - 1] : point;
    if (usePoint?.geoProfile || usePoint?.profile) {
        return { profile: usePoint?.profile, geoProfile: usePoint?.geoProfile };
    } else {
        return { profile: TracksManager.PROFILE_LINE };
    }
}

function parseWpt(points, layers, ctx = null, data) {
    points &&
        points.forEach((point) => {
            let opt;
            let icon = MarkerOptions.getWptIcon(point, point.color, point.background, point.icon);
            let pInfo = point.ext;
            let lat = point.lat ? point.lat : pInfo.lat;
            let lon = point.lon ? point.lon : pInfo.lon;
            if (icon) {
                opt = { clickable: true, icon: icon };
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
            opt.category = point.category ? point.category : 'favorites';
            if (point.desc) {
                opt.desc = point.desc;
            }
            if (point.address) {
                opt.address = point.address;
            }
            opt.draggable = false;
            opt.wpt = true;
            let marker = new L.Marker(new L.LatLng(lat, lon), opt);
            if (ctx) {
                marker.on('click', (e) => {
                    const wpt = {
                        trackWpt: true,
                        file: data,
                        ...e,
                        ...point,
                    };
                    ctx.setSelectedWpt(wpt);
                });
            }
            layers.push(marker);
        });
}

function addStartEndMarkers(points, layers) {
    let start = new L.LatLng(points[0].lat, points[0].lng);
    if (points.length > 1) {
        let end = new L.LatLng(points[points.length - 1].lat, points[points.length - 1].lng);
        layers.push(
            new L.Marker(end, {
                icon: MarkerOptions.options.trackEnd,
            })
        );
    }
    layers.push(
        new L.Marker(start, {
            icon: MarkerOptions.options.trackStart,
        })
    );
}

function getPolylineOpt() {
    return {
        color: '#1976d2',
    };
}

function getPolylineByPoints(point, polylines) {
    if (point && point.geometry) {
        const geo = point.geometry;
        const res = polylines.find((polyline) => {
            let layerPoints = polyline._latlngs;
            if (layerPoints.length === geo.length) {
                let matchedFirstPoint = geo[0].lat === layerPoints[0].lat && geo[0].lng === layerPoints[0].lng;
                let matchedLastPoint =
                    geo[geo.length - 1].lat === layerPoints[layerPoints.length - 1].lat &&
                    geo[geo.length - 1].lng === layerPoints[layerPoints.length - 1].lng;
                if (matchedFirstPoint && matchedLastPoint) {
                    return polyline;
                }
            }
            return null;
        });
        return res;
    } else {
        console.error('getPolylineByPoints empty geometry');
    }
}

function getPolylineByStartEnd(startPoint, endPoint, polylines) {
    return polylines.find((polyline) => {
        const layerPoints = polyline._latlngs;
        if (
            TracksManager.isEqualPoints(layerPoints[0], startPoint) &&
            TracksManager.isEqualPoints(layerPoints[layerPoints.length - 1], endPoint)
        ) {
            return polyline;
        }
        return null;
    });
}

function updatePolylineToTemp(startPoint, endPoint, polyline) {
    if (polyline) {
        const polylineTemp = createTempPolyline(startPoint, endPoint);
        polyline.setLatLngs(polylineTemp._latlngs);
        polyline.options.name = TEMP_LAYER_FLAG;
        polyline.setStyle(TEMP_LINE_STYLE);
        polyline.point = endPoint;
        return polyline;
    } else {
        console.error('updatePolylineToTemp empty polyline');
    }
}

function getPointByPolyline(layer, points) {
    let res;
    let layerPoints = layer._latlngs;
    points.forEach((p) => {
        let geo = p.geometry;
        if (geo) {
            if (geo.length === layerPoints.length) {
                if (
                    geo[0].lat === layerPoints[0].lat &&
                    geo[0].lng === layerPoints[0].lng &&
                    geo[geo.length - 1].lat === layerPoints[layerPoints.length - 1].lat &&
                    geo[geo.length - 1].lng === layerPoints[layerPoints.length - 1].lng
                ) {
                    res = p;
                }
            }
        }
    });
    return res;
}

function getPolylines(layers) {
    let res = [];
    layers.forEach((layer) => {
        if (layer instanceof L.Polyline) {
            let points = layer.getLatLngs();
            if (points.length > 0) {
                res.push(layer);
            }
        }
    });
    return res;
}

// return null on protected segments (null must be processed by parent)
function updatePolyline(startPoint, endPoint, polylines, oldStartPoint, oldEndPoint) {
    const point2 = oldEndPoint ? oldEndPoint : endPoint;

    if (isProtectedSegment({ startPoint, endPoint: point2 })) {
        return null;
    }

    let polyline = getPolylineByPoints(point2, polylines);
    if (!polyline) {
        const point1 = oldStartPoint ? oldStartPoint : startPoint;

        if (isProtectedSegment({ startPoint: point1, endPoint: point2 })) {
            return null;
        }

        polyline = getPolylineByStartEnd(point1, point2, polylines);
    }
    if (!polyline) {
        console.error('updatePolyline empty polylines');
    }
    polyline = updatePolylineToTemp(startPoint, endPoint, polyline);

    return polyline;
}

function createTempPolyline(start, end) {
    const startPoint = new L.LatLng(start.lat, start.lng);
    const endPoint = new L.LatLng(end.lat, end.lng);

    const polyline = new L.Polyline([startPoint, endPoint], TEMP_LINE_STYLE);
    polyline.point = end; // always store end-point ref inside layer
    polyline.options.name = TEMP_LAYER_FLAG; // use temp-flag

    return polyline;
}

function createEditableTempLPolyline(start, end, map, ctx) {
    const startPoint = new L.LatLng(start.lat, start.lng);
    const endPoint = new L.LatLng(end.lat, end.lng);
    let polylineTemp = new EditablePolyline(
        map,
        ctx,
        [startPoint, endPoint],
        null,
        ctx.selectedGpxFile,
        TrackLayerProvider.TEMP_LINE_STYLE
    ).create();
    polylineTemp.point = end;
    polylineTemp.options.name = TEMP_LAYER_FLAG;

    return polylineTemp;
}

export function redrawWptsOnLayer({ layer }) {
    if (layer) {
        layer.getLayers().forEach((l) => {
            if (l instanceof L.Marker && l.options?.wpt) {
                if (l._icon?.style) {
                    l._icon.style.display = null; // visible
                }
            }
        });
    }
}

const TrackLayerProvider = {
    createLayersByTrackData,
    parsePoints,
    parseWpt,
    getPolylineOpt,
    getPolylineByPoints,
    getPointByPolyline,
    createTempPolyline,
    getPolylines,
    updatePolyline,
    createEditableTempLPolyline,
    TEMP_LINE_STYLE,
    TEMP_LAYER_FLAG,
};

export default TrackLayerProvider;
