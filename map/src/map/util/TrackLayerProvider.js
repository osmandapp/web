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

export const DEFAULT_TRACK_LINE_WEIGHT = 7;

function createLayersByTrackData({ data, ctx, map, groupId, type = GPX_FILE_TYPE, simplifyWpts = false }) {
    const layers = [];
    const emptyInfo = data?.info && data.info.width === '' && data.info.color === '#00000000';
    const trackAppearance =
        data?.info && !emptyInfo
            ? {
                  color: data.info.color,
                  width: data.info.width,
                  showArrows: data.info.show_arrows,
                  showStartFinish: data.info.show_start_finish,
              }
            : data.trackAppearance;
    data.tracks?.forEach((track) => {
        if (track.points?.length > 0) {
            const res = parsePoints({
                map,
                ctx,
                points: track.points,
                layers,
                hidden: true,
                trackAppearance,
            });
            if (trackAppearance?.showStartFinish !== false) {
                addStartEnd(track.points, layers, res.coordsTrk, res.coordsAll);
            }
        }
    });
    parseWpt({ points: data.wpts, layers, ctx, data, map, simplify: simplifyWpts, groupId });

    if (layers.length > 0) {
        let layersGroup = new L.FeatureGroup(layers);
        layersGroup.options.type = type;
        return layersGroup;
    }
}

function parsePoints({ map, ctx, points, layers, draggable = false, hidden = false, trackAppearance = null }) {
    let coordsTrk = [];
    let coordsAll = [];
    points.forEach((point, index) => {
        if (point.geometry !== undefined && point.geometry !== null) {
            coordsAll = drawRoutePoints({
                map,
                points,
                point,
                coordsAll,
                layers,
                ctx,
                draggable,
                index,
                trackAppearance,
            });
        } else {
            coordsTrk.push(new L.LatLng(point.lat, point.lng));
            if (point.profile === TracksManager.PROFILE_GAP && coordsTrk.length > 0) {
                let polyline = createPolyline({ coords: coordsTrk, ctx, map, point, points, trackAppearance });
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

    const endPolyline = createPolyline({ coords: coordsTrk, ctx, map, point: null, points: null, trackAppearance });
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

function drawRoutePoints({ map, ctx, points, point, coordsAll, layers, draggable, index, trackAppearance }) {
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
            layers.push(createPolyline({ coords, ctx, map, point, points, trackAppearance }));
            coordsAll = coordsAll.concat(Object.assign([], coords));
            coords = [];
        } else {
            coords.push(new L.LatLng(p.lat, p.lng));
        }
    });

    if (coords.length > 0) {
        coordsAll = coordsAll.concat(Object.assign([], coords));
        layers.push(createPolyline({ coords, ctx, map, point, points, trackAppearance }));
    }

    return coordsAll;
}

function createPolyline({ coords, ctx, map, point, points, trackAppearance }) {
    let color =
        point && points
            ? ctx.trackRouter.getColor(getPointGeoProfile(point, points))
            : ctx.trackRouter.getColor({ profile: TracksManager.PROFILE_LINE });
    if (trackAppearance?.color) {
        if (typeof trackAppearance.color === 'string') {
            color = Utils.hexToRgba(trackAppearance.color);
        } else if (typeof trackAppearance.color === 'number') {
            color = Utils.numberToRgba(trackAppearance.color);
        }
    }
    const width = trackAppearance?.width ?? 'medium';
    const arrowSettings = {
        show: trackAppearance?.showArrows,
        color: 'white',
    };
    const polyline = new L.Polyline(coords, {
        color,
        weight: getPolylineWeight(width, map.getZoom()),
        ...(arrowSettings.show ? { renderer: L.svg() } : {}),
    });

    if (!arrowSettings.show) return polyline;

    polyline.on('add', function () {
        renderArrows({ polyline, lineWidth: width, coords, map, arrowSettings });

        const updateStyle = () => {
            const z = map.getZoom();
            polyline.setStyle({
                weight: getPolylineWeight(width, z),
            });
            renderArrows({ polyline, lineWidth: width, coords, map, arrowSettings });
        };

        map.on('zoomend moveend', updateStyle);

        polyline.on('redraw-arrows', updateStyle);

        polyline.on('remove', () => {
            map.off('zoomend moveend', updateStyle);
            const svg = polyline._renderer?._container;
            if (svg) {
                svg.querySelectorAll('.arrowhead').forEach((el) => el.remove());
            }
        });
    });

    return polyline;
}

function renderArrows({ polyline, lineWidth, coords, map, arrowSettings }) {
    const step = getArrowStep(map.getZoom());
    const size = getArrowSize(map.getZoom());
    const width = getArrowWidth(lineWidth, map.getZoom());

    const svg = polyline._renderer._container;

    svg.querySelectorAll('.arrowhead').forEach((el) => el.remove());

    const pixelPoints = coords.map((latlng) => map.latLngToLayerPoint(latlng));

    const segments = [];
    let totalLength = 0;
    for (let i = 0; i < pixelPoints.length - 1; i++) {
        const p1 = pixelPoints[i];
        const p2 = pixelPoints[i + 1];
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const length = Math.hypot(dx, dy);
        segments.push({ p1, p2, length });
        totalLength += length;
    }

    const count = Math.floor(totalLength / step);
    for (let i = 1; i <= count; i++) {
        const dist = i * step;
        let acc = 0;
        for (let seg of segments) {
            if (acc + seg.length >= dist) {
                const t = (dist - acc) / seg.length;
                const x = seg.p1.x + (seg.p2.x - seg.p1.x) * t;
                const y = seg.p1.y + (seg.p2.y - seg.p1.y) * t;
                const angle = (Math.atan2(seg.p2.y - seg.p1.y, seg.p2.x - seg.p1.x) * 180) / Math.PI;

                const aw = width;
                const path = [`M ${-size} ${-aw}`, `L 0 0`, `L ${-size} ${aw}`, `L ${-size + 2} 0`, `Z`].join(' ');

                const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                arrow.setAttribute('class', 'arrowhead');
                arrow.setAttribute('d', path);
                arrow.setAttribute('fill', arrowSettings.color);
                arrow.setAttribute('transform', `translate(${x}, ${y}) rotate(${angle})`);
                svg.appendChild(arrow);
                break;
            }
            acc += seg.length;
        }
    }
}

function getPolylineWeight(width, zoom) {
    if (width === 'thin') {
        if (zoom <= 10) return 2;
        if (zoom <= 13) return 3;
        if (zoom <= 15) return 4;
        return 5;
    } else if (width === 'medium') {
        if (zoom <= 10) return 2;
        if (zoom <= 13) return 5;
        if (zoom <= 15) return 6;
        return 7;
    } else if (width === 'bold') {
        if (zoom <= 10) return 2;
        if (zoom <= 13) return 6;
        if (zoom <= 15) return 9;
        return 11;
    } else {
        return getWeightNumber(zoom, width);
    }
}

function getWeightNumber(zoom, width) {
    const scale = Math.pow(Math.min(1, zoom / 12), 2);
    const normalized = Math.max(1, Number(width));
    return Math.max(1, Math.round(normalized * 0.7 * scale));
}

function getArrowStep(zoom) {
    if (zoom <= 13) return 10;
    if (zoom <= 15) return 20;
    return 30;
}

function getArrowSize(zoom) {
    if (zoom <= 13) return 5;
    if (zoom <= 15) return 8;
    return 10;
}

function getArrowWidth(width, zoom) {
    if (typeof width === 'number') {
        const scale = Math.min(1, zoom / 12);
        return Math.max(1, Math.round(width * 0.25 * scale));
    }
    if (width === 'thin') {
        return 1;
    } else if (width === 'medium') {
        return getDefaultArrowWidth(zoom);
    } else if (width === 'bold') {
        if (zoom <= 13) return 2;
        if (zoom <= 15) return 3;
        return 3;
    } else {
        return getDefaultArrowWidth(zoom);
    }
}

function getDefaultArrowWidth(zoom) {
    if (zoom <= 13) return 1;
    if (zoom <= 15) return 2;
    return 2;
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
                        trackData: data,
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
                    iconSize: DEFAULT_ICON_SIZE,
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
        const color = point.color ? Utils.hexToRgba(point.color) : DEFAULT_WPT_COLOR;
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
    getPointByPolyline,
    createTempPolyline,
    getPolylines,
    updatePolyline,
    createEditableTempLPolyline,
    TEMP_LINE_STYLE,
    TEMP_LAYER_FLAG,
};

export default TrackLayerProvider;
