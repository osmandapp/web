import L from 'leaflet';
import MarkerOptions, { createPoiIcon, DEFAULT_ICON_SIZE, DEFAULT_WPT_COLOR } from '../markers/MarkerOptions';
import _ from 'lodash';
import TracksManager, { GPX_FILE_TYPE, isProtectedSegment } from '../../manager/track/TracksManager';
import EditablePolyline from './creator/EditablePolyline';
import { clusterMarkers, createHoverMarker } from './Clusterizer';
import Utils from '../../util/Utils';

export const TEMP_LAYER_FLAG = 'temp';
export const TEMP_LINE_STYLE = {
    color: '#fbc73a',
    dashArray: '5, 5',
    dashOffset: '0',
    // name: TEMP_LAYER_FLAG, // style.name was not used, instead of actual layer.options.name
};
export const WPT_SIMPLIFY_THRESHOLD = 500;
export const POINTS_SIMPLIFY_THRESHOLD = 1000;
export const POINTS_SIMPLIFY_ZOOM_THRESHOLD = 17;

function createLayersByTrackData({ data, ctx, map, groupId, type = GPX_FILE_TYPE, simplifyWpts = false }) {
    let layers = [];
    data.tracks?.forEach((track) => {
        if (track.points?.length > 0) {
            let res = parsePoints({ map, ctx, points: track.points, layers, hidden: true });
            addStartEnd(track.points, layers, res.coordsTrk, res.coordsAll);
        }
    });
    parseWpt({ points: data.wpts, layers, ctx, data, map, simplify: simplifyWpts, groupId });

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
        const zoom = map.getZoom();
        const mapBounds = map.getBounds();
        const simplified = points.length > POINTS_SIMPLIFY_THRESHOLD && zoom < POINTS_SIMPLIFY_ZOOM_THRESHOLD;

        points.forEach((p, index) => {
            if (draggable || (!draggable && p.geometry !== undefined)) {
                if (simplified && index % 30 !== 0) {
                    return;
                }
                const markerLatLng = new L.LatLng(p.lat, p.lng);
                if (!mapBounds.contains(markerLatLng)) {
                    return;
                }
                const marker = new L.Marker(markerLatLng, {
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

export function getPointLatLon(point) {
    let lat = point.lat ?? point.ext.lat;
    let lon = point.lon ?? point.ext.lon;
    return lat && lon ? { lat: lat, lon: lon } : null;
}

// WARNING: Do not use the 'title' field in marker layers on the map
// When the 'title' attribute is set on a marker, Leaflet automatically creates a default tooltip
// displaying the 'title' content. This tooltip is hardcoded and cannot be removed or modified
// through typical methods.
function parseWpt({ points, layers, ctx = null, data = null, map = null, simplify = false, groupId = null }) {
    const zoom = map.getZoom();
    const lat = map.getCenter().lat;
    const clusters = simplify
        ? clusterMarkers({
              places: points,
              zoom,
              latitude: lat,
              iconSize: DEFAULT_ICON_SIZE,
              isFavorites: true,
          })
        : null;
    points &&
        points.forEach((point) => {
            let opt;
            let icon = createPoiIcon({ point, color: point.color, background: point.background, icon: point.icon });
            let pInfo = point.ext;
            let lat = point.lat ? point.lat : pInfo.lat;
            let lon = point.lon ? point.lon : pInfo.lon;
            let coords = new L.LatLng(lat, lon);
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
                opt.name = point.name;
            }
            opt.category = point.category ? point.category : 'favorites';
            opt.groupId = groupId;
            if (point.desc) {
                opt.desc = point.desc;
            }
            if (point.address) {
                opt.address = point.address;
            }
            opt.draggable = false;
            opt.wpt = true;
            opt.color = point.color;
            let markerLayer = new L.Marker(coords, opt);
            const marker = simplify ? getMarkerFromCluster(point, clusters, coords, opt, markerLayer) : markerLayer;
            if (!marker) {
                return;
            }
            if (ctx && map && data) {
                marker.on('click', (e) => {
                    const wpt = {
                        trackWpt: true,
                        file: data,
                        ...e,
                        ...point,
                    };
                    ctx.setSelectedWpt(wpt);
                });
                createHoverMarker({
                    marker,
                    mainStyle: true,
                    text: marker.options['name'],
                    latlng: marker._latlng,
                    iconSize: [DEFAULT_ICON_SIZE, DEFAULT_ICON_SIZE],
                    map,
                    ctx,
                });
            }
            layers.push(marker);
        });
}

function getMarkerFromCluster(point, clusters, coords, opt, markerLayer) {
    const isMainMarker = clusters.mainMarkers.some((mainMarker) => {
        const mainLatLng = L.latLng(mainMarker.lat, mainMarker.lon);
        return mainLatLng.equals(coords);
    });
    if (isMainMarker) {
        return markerLayer;
    }
    const isSecondaryMarker = clusters.secondaryMarkers.some((secMarker) => {
        const secLatLng = L.latLng(secMarker.lat, secMarker.lon);
        return secLatLng.equals(coords);
    });
    if (isSecondaryMarker) {
        const color = point.color ? Utils.hexToArgb(point.color) : DEFAULT_WPT_COLOR;
        const customIcon = L.divIcon({
            className: 'custom-circle-icon',
            iconSize: [10, 10],
            html: `<div style="background-color:${color};border-radius:50%;width:10px;height:10px;border:1px solid #ffffff;"></div>`,
        });
        markerLayer.setIcon(customIcon);
        return markerLayer;
    }
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
