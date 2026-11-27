import L from 'leaflet';
import { POINT_MARKER_Z_INDEX_OFFSET, TRACK_HIT_LINE_PANE_Z_INDEX } from './ZIndexes';
import MarkerOptions, { createPoiIcon, DEFAULT_ICON_SIZE, DEFAULT_WPT_COLOR } from '../markers/MarkerOptions';
import indexOf from 'lodash-es/indexOf';
import TracksManager, {
    getResolvedPointsGroups,
    GPX_FILE_TYPE,
    isWptGroupShown,
} from '../../manager/track/TracksManager';
import { isWaitingForRouter } from '../../manager/track/TrackOperations';
import { FAVORITE_FILE_TYPE, getFavoriteId, resolveWptAppearance } from '../../manager/FavoritesManager';
import { clusterMarkers, addMarkerTooltip, removeTooltip } from './Clusterizer';
import Utils from '../../util/Utils';
import { hexToRgba, numberToRgba } from '../../util/ColorUtil';
import { createTooltip, TOOLTIP_MAX_LENGTH, formatTrackName } from './MapManager';
import { disablePointerEventsIfHidden, ensureLeafletPane, TRACK_HIT_LINE_PANE } from './LayerUtils';

export const TEMP_LINE_STYLE = {
    color: '#fbc73a',
    dashArray: '5, 5',
    dashOffset: '0',
};
export const WPT_SIMPLIFY_THRESHOLD = 500;
export const POINTS_SIMPLIFY_THRESHOLD = 1000;
export const POINTS_SIMPLIFY_ZOOM_THRESHOLD = 17;

export const DEFAULT_TRACK_LINE_WEIGHT = 7;

const TRACK_HIT_LINE_WEIGHT = 16;
const TRACK_HIT_LINE_SMOOTH_FACTOR = 3;
const TRACK_HIT_LINES_MAX_TRACKS = 20;

const hitLinesByMap = new WeakMap();

function createLayersByTrackData({ data, ctx, map, groupId, type = GPX_FILE_TYPE, simplifyWpts = false }) {
    const layers = [];
    const emptyInfo = data?.info?.width === '' && data.info.color === '#00000000';
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
                trackAppearance,
            });
            if (trackAppearance?.showStartFinish !== false) {
                addStartEnd(track.points, layers, res.coordsTrk, res.coordsAll);
            }
        }
    });
    const trackPointsGroups = getResolvedPointsGroups(data);
    parseWpt({
        points: data.wpts,
        layers,
        ctx,
        data,
        map,
        simplify: simplifyWpts,
        groupId,
        type,
        pointsGroups: trackPointsGroups,
    });

    const trackName = data?.name;
    if (trackName) {
        setTrackName(layers, trackName);
    }

    if (layers.length > 0) {
        let layersGroup = new L.FeatureGroup(layers);
        layersGroup.options.type = type;
        if (layers.some((layer) => layer.hitLine)) {
            enforceHitLineLimit(layersGroup, map);
        }
        return layersGroup;
    }
}

function setTrackName(layers, trackName) {
    for (const layer of layers) {
        if (layer instanceof L.Polyline) {
            layer.options.trackName = trackName;
        }
    }
}

function parsePoints({ map, ctx, points, layers, trackAppearance = null }) {
    const lines = getTrackLines(points);
    const last = lines.length - 1;
    let coordsAll = [];
    let coordsTrk = [];
    lines.forEach((line, index) => {
        const coords = toLatLngs(line.vertices);
        if (line.waiting) {
            const [start, end] = line.vertices;
            layers.push(createTempPolyline(start, end));
        } else {
            if (line.gapPoint) {
                addStartEndGap(line.gapPoint, points, layers);
            }
            layers.push(
                createPolyline({
                    coords,
                    ctx,
                    map,
                    colorPoint: line.colorPoint,
                    trackAppearance,
                    pointIds: line.pointIds,
                })
            );
        }
        if (index < last) {
            coordsAll = coordsAll.concat(coords);
        } else {
            coordsTrk = coords;
        }
    });

    return {
        coordsTrk: coordsTrk,
        coordsAll: coordsAll,
    };
}

function getTrackLines(points) {
    const lines = [];
    let plain = [];
    points.forEach((point, index) => {
        // find previous point if possible
        const colorPoint = index > 0 ? points[index - 1] : point;
        if (point.geometry !== undefined && point.geometry !== null) {
            const pointIds = [points[index - 1]?.id, point.id];
            // draw tempLine for orphaned empty geo but not for gap
            if (isWaitingForRouter(points, index)) {
                lines.push({ pointIds, vertices: [points[index - 1], point], waiting: true });
                return;
            }
            let vertices = [];
            point.geometry.forEach((vertex) => {
                vertices.push(vertex);
                if (vertex.profile === TracksManager.PROFILE_GAP && vertices.length > 1) {
                    lines.push({ pointIds, vertices, colorPoint, gapPoint: point });
                    vertices = [];
                }
            });
            if (vertices.length > 0) {
                lines.push({ pointIds, vertices, colorPoint });
            }
        } else {
            plain.push(point);
            if (point.profile === TracksManager.PROFILE_GAP) {
                lines.push({ pointIds: plain.map(({ id }) => id), vertices: plain, colorPoint, gapPoint: point });
                plain = [];
            }
        }
    });
    lines.push({ pointIds: plain.map(({ id }) => id), vertices: plain, colorPoint: null });

    return lines;
}

function toLatLngs(vertices) {
    return vertices.map(({ lat, lng }) => new L.LatLng(lat, lng));
}

function addStartEnd(points, layers, coordsTrk, coordsAll) {
    if (coordsTrk.length > 0) {
        coordsAll = coordsAll.concat(Object.assign([], coordsTrk));
        addStartEndMarkers(coordsAll, layers);
    } else {
        addStartEndMarkers(points, layers);
    }
}

function addTooltipOnHover(polyline, map, coords) {
    if (coords.length === 0) return;

    const tooltipRef = { current: null };

    const onMouseOver = (e) => {
        const trackName = polyline.options?.trackName;
        if (!trackName) return;

        if (tooltipRef.current && map.hasLayer(tooltipRef.current)) {
            map.removeLayer(tooltipRef.current);
        }
        // show tooltip at mouse position or at middle of the track
        const latlng = e.latlng || coords[Math.floor(coords.length / 2)];
        if (latlng) {
            const formattedName = formatTrackName(trackName);
            const shortName = Utils.truncateText(formattedName, TOOLTIP_MAX_LENGTH);
            tooltipRef.current = createTooltip(shortName, latlng);
            map.addLayer(tooltipRef.current);
        }
    };

    const onMouseOut = () => {
        removeTooltip(map, tooltipRef);
    };

    const onZoomEnd = () => {
        removeTooltip(map, tooltipRef);
    };

    polyline.on('mouseover', onMouseOver);
    polyline.on('mouseout', onMouseOut);
    polyline.on('add', () => map.on('zoomend', onZoomEnd));

    polyline.on('remove', () => {
        removeTooltip(map, tooltipRef);
        map.off('zoomend', onZoomEnd);
    });
}

function createPolyline({ coords, ctx, map, colorPoint, trackAppearance, pointIds, draggable = false }) {
    let color = ctx.trackRouter.getColor(getColorProfile(colorPoint));
    if (trackAppearance?.color) {
        if (typeof trackAppearance.color === 'string') {
            color = hexToRgba(trackAppearance.color);
        } else if (typeof trackAppearance.color === 'number') {
            color = numberToRgba(trackAppearance.color);
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
        pointIds,
        ...(arrowSettings.show ? { renderer: L.svg() } : {}),
    });

    if (!draggable && coords.length > 0) {
        polyline.hitLine = new L.Polyline(coords, {
            pane: TRACK_HIT_LINE_PANE,
            weight: TRACK_HIT_LINE_WEIGHT,
            opacity: 0,
            smoothFactor: TRACK_HIT_LINE_SMOOTH_FACTOR,
        });
        polyline.hitLine.addEventParent(polyline);
    }

    addTooltipOnHover(polyline, map, coords);

    polyline.on('add', function () {
        const updateStyle = () => {
            const z = map.getZoom();
            polyline.setStyle({
                weight: getPolylineWeight(width, z),
            });
            if (arrowSettings.show) {
                renderArrows({ polyline, lineWidth: width, coords, map, arrowSettings });
            }
        };

        updateStyle();
        map.on('zoomend moveend', updateStyle);

        polyline.on('redraw-arrows', updateStyle);
        registerHitLine(polyline, map);

        polyline.once('remove', () => {
            map.off('zoomend moveend', updateStyle);
            polyline.off('redraw-arrows', updateStyle);
            unregisterHitLine(polyline, map);
            if (arrowSettings.show) {
                const svg = polyline._renderer?._container;
                if (svg) {
                    svg.querySelectorAll('.arrowhead').forEach((el) => el.remove());
                }
            }
        });
    });

    return polyline;
}

function hitLinesOf(map) {
    if (!hitLinesByMap.has(map)) {
        ensureLeafletPane(map, TRACK_HIT_LINE_PANE, TRACK_HIT_LINE_PANE_Z_INDEX);
        hitLinesByMap.set(map, { tracks: new Set(), lines: new Set() });
    }

    return hitLinesByMap.get(map);
}

function enforceHitLineLimit(track, map) {
    track.on('add', () => {
        const { tracks, lines } = hitLinesOf(map);
        tracks.add(track);
        if (tracks.size === TRACK_HIT_LINES_MAX_TRACKS + 1) {
            lines.forEach((line) => line.hitLine.remove());
        }
    });
    track.on('remove', () => {
        const { tracks, lines } = hitLinesOf(map);
        tracks.delete(track);
        if (tracks.size === TRACK_HIT_LINES_MAX_TRACKS) {
            lines.forEach((line) => drawHitLine(line, map));
        }
    });
}

function registerHitLine(line, map) {
    if (!line.hitLine) return;
    const { tracks, lines } = hitLinesOf(map);
    lines.add(line);
    if (tracks.size <= TRACK_HIT_LINES_MAX_TRACKS) {
        drawHitLine(line, map);
    }
}

function unregisterHitLine(line, map) {
    if (!line.hitLine) return;
    hitLinesOf(map).lines.delete(line);
    line.hitLine.remove();
}

function drawHitLine(line, map) {
    line.hitLine.addTo(map);
    disablePointerEventsIfHidden(line.hitLine.getElement(), line.options.opacity);
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

function addStartEndGap(point, allPoints, layers) {
    let end = new L.LatLng(point.lat, point.lng);
    layers.push(
        new L.Marker(end, {
            icon: MarkerOptions.options.trackEnd,
            zIndexOffset: POINT_MARKER_Z_INDEX_OFFSET,
        })
    );
    let currentInd = indexOf(allPoints, point);
    if (currentInd !== -1 && currentInd + 1 < allPoints.length) {
        let start = new L.LatLng(allPoints[currentInd + 1].lat, allPoints[currentInd + 1].lng);
        layers.push(
            new L.Marker(start, {
                icon: MarkerOptions.options.trackStart,
                zIndexOffset: POINT_MARKER_Z_INDEX_OFFSET,
            })
        );
    }
}

// used just to pick color
// use PROFILE_LINE if no geoProfile found
function getColorProfile(point) {
    if (point?.geoProfile || point?.profile) {
        return { profile: point?.profile, geoProfile: point?.geoProfile };
    } else {
        return { profile: TracksManager.PROFILE_LINE };
    }
}

// WARNING: Do not use the 'title' field in marker layers on the map
// When the 'title' attribute is set on a marker, Leaflet automatically creates a default tooltip
// displaying the 'title' content. This tooltip is hardcoded and cannot be removed or modified
// through typical methods.
function parseWpt({
    points,
    layers,
    ctx = null,
    data = null,
    map = null,
    simplify = false,
    groupId = null,
    type = GPX_FILE_TYPE,
    pointsGroups = null,
}) {
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
    const resolvedPointsGroups = pointsGroups ?? getResolvedPointsGroups(data);
    points?.forEach((point) => {
        let opt = {};
        const appearance = resolveWptAppearance(point, resolvedPointsGroups);
        const icon = createPoiIcon({ point, ...appearance });
        const pInfo = point.ext;
        const lat = point.lat != null ? point.lat : pInfo?.lat;
        const lon = point.lon != null ? point.lon : pInfo?.lon;

        // Skip waypoints with invalid coordinates
        if (lat == null || lon == null || isNaN(lat) || isNaN(lon)) {
            return;
        }

        let coords = new L.LatLng(lat, lon);
        if (icon) {
            opt = { clickable: true, icon: icon };
            opt.iconName = appearance.icon;
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
        opt.point = point;
        opt.category = point.category ?? '';
        opt.groupId = groupId;
        if (point.desc) {
            opt.desc = point.desc;
        }
        if (point.address) {
            opt.address = point.address;
        }
        opt.draggable = false;
        opt.wpt = true;
        opt.color = appearance.color;
        opt.background = appearance.background;
        let markerLayer = new L.Marker(coords, opt);
        const marker = simplify ? getMarkerFromCluster(point, clusters, coords, opt, markerLayer) : markerLayer;
        if (!marker) {
            return;
        }
        marker.options.idObj = getFavoriteId(marker);
        if (type === FAVORITE_FILE_TYPE && point.name) {
            marker.on('add', () => {
                const el = marker.getElement();
                if (el) {
                    el.id = `se-fav-map-marker-${point.name}`;
                }
            });
        }
        bindWptVisibilityOnAdd(marker, resolvedPointsGroups);
        if (ctx && map && data) {
            if (type === GPX_FILE_TYPE) {
                marker.on('click', (e) => {
                    const wpt = {
                        trackWpt: true,
                        mapObj: true,
                        trackData: data,
                        ...e,
                        ...point,
                    };
                    ctx.setSelectedWpt(wpt);
                });
            }
            addMarkerTooltip({
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
        const color = point.color ? hexToRgba(point.color) : DEFAULT_WPT_COLOR;
        if (!markerLayer.options.originalIcon && markerLayer.options.icon) {
            markerLayer.options.originalIcon = markerLayer.options.icon;
        }
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

function createTempPolyline(start, end) {
    const polyline = new L.Polyline([new L.LatLng(start.lat, start.lng), new L.LatLng(end.lat, end.lng)]);
    polyline.setStyle(TEMP_LINE_STYLE);
    polyline.options.pointIds = [start.id, end.id];

    return polyline;
}

// set visibility each time the marker is added to the map (Leaflet 'add' event)
// visible - '' , hidden - 'none'
export function bindWptVisibilityOnAdd(marker, pointsGroups) {
    if (!marker?.options?.wpt || !pointsGroups) {
        return;
    }
    marker.on('add', (e) => {
        const el = e.target?._icon;
        if (!el?.style) {
            return;
        }
        const category = e.target.options?.category ?? '';
        el.style.display = isWptGroupShown(pointsGroups, category) ? '' : 'none';
    });
}

export function isWptClick(e) {
    return !!e.propagatedFrom?.options?.wpt;
}

// for updating markers
export function redrawWptsOnLayer({ layer, pointsGroups }) {
    if (!layer || !pointsGroups) return;
    layer.getLayers().forEach((l) => {
        if (l instanceof L.Marker && l.options?.wpt && l._icon?.style) {
            const category = l.options.category || '';
            l._icon.style.display = isWptGroupShown(pointsGroups, category) ? '' : 'none';
        }
    });
}

const TrackLayerProvider = {
    createLayersByTrackData,
    parsePoints,
    parseWpt,
    getTrackLines,
    toLatLngs,
    createPolyline,
    createTempPolyline,
    getColorProfile,
    setTrackName,
    TEMP_LINE_STYLE,
};

export default TrackLayerProvider;
