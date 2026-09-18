import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import AppContext from '../../context/AppContext';
import MapContext from '../../context/MapContext';
import { HEADER_SIZE, MAIN_MENU_MIN_SIZE, MENU_INFO_OPEN_SIZE, SEARCH_RESULT_URL } from '../../manager/GlobalManager';
import useZoomMoveMapHandlers from '../../util/hooks/map/useZoomMoveMapHandlers';
import { MAP_CENTER_ICON_Z_INDEX } from '../util/ZIndexes';
import { ReactComponent as CenterIcon } from '../../assets/icons/map_ruler_center_day.svg';
import { initialPosition, initialZoom } from '../util/initialMapView';
import { applyZoomToFit, getZoomToFitBounds, popMapView } from '../util/MapManager';
import { useFocusVisibility } from '../../util/hooks/map/useFocusMode';

// In layers, we don't use cache — always compute from map; otherwise debouncer gets stale bbox on move.
export function getVisibleBboxInfo(ctx, map) {
    const params = calcVisibleBboxParamsPx(map, ctx);
    return params ? calcVisibleBbox(params.topLeft, params.bottomRight) : null;
}

export function visibleMapRectPx(ctx, map) {
    const params = calcVisibleBboxParamsPx(map, ctx);
    if (!params) {
        return null;
    }
    const tl = map.latLngToContainerPoint(params.topLeft);
    const br = map.latLngToContainerPoint(params.bottomRight);

    return { left: tl.x, top: tl.y, right: br.x, bottom: br.y, cx: params.centerPx.x, cy: params.centerPx.y };
}

export function isOutsideVisibleMap({ ctx, map, latlng }) {
    if (!ctx || !map || !latlng) {
        return false;
    }
    const rect = visibleMapRectPx(ctx, map);
    if (!rect) {
        return false;
    }
    const p = map.latLngToContainerPoint(L.latLng(latlng));

    return p.x < rect.left || p.x > rect.right || p.y < rect.top || p.y > rect.bottom;
}

export function getMapCenter(mtx, hash) {
    return mtx.visibleBboxInfo?.center ?? getCenterMapLocByHash(hash);
}

const CENTRE_ICON_SIZE = 24;
// wheelZoomRate of MapLibre: 450 px of wheel per zoom level
const WHEEL_PX_PER_ZOOM = 450;
const ZOOM_EASING = 0.3;

const MAP_SPIN_COLOR = '#1976d2';

const TOP_PADDING = HEADER_SIZE;
const BOTTOM_PADDING = 0;

export function getVisibleMapPadding(ctx, margin = 0) {
    const infoBlockWidthPx = Number.parseInt(String(ctx.infoBlockWidth), 10) || 0;
    const bottomPx = ctx.globalGraph?.show ? ctx.globalGraph.size : 0;
    const leftChromePx = MAIN_MENU_MIN_SIZE + infoBlockWidthPx;

    return {
        top: TOP_PADDING + margin,
        left: leftChromePx + margin,
        right: margin,
        bottom: bottomPx + margin,
    };
}

function calcVisibleCenterPx(map, infoBlockWidthPx) {
    const containerSize = map.getSize();
    if (!containerSize?.x || !containerSize?.y) return null;
    const infoColumnWidthPx = Number.isFinite(infoBlockWidthPx) ? infoBlockWidthPx : 0;
    const leftChromeWidthPx = infoColumnWidthPx + MAIN_MENU_MIN_SIZE;
    return {
        x: leftChromeWidthPx + (containerSize.x - leftChromeWidthPx) / 2,
        y: TOP_PADDING + (containerSize.y - TOP_PADDING - BOTTOM_PADDING) / 2,
        containerSize,
    };
}

function centerPercentsForInfoBlockPx(map, infoBlockWidthPx) {
    if (!map?.getSize) return { left: '50%', top: '50%' };
    const center = calcVisibleCenterPx(map, infoBlockWidthPx);
    if (!center) return { left: '50%', top: '50%' };
    return {
        left: `${(center.x / center.containerSize.x) * 100}%`,
        top: `${(center.y / center.containerSize.y) * 100}%`,
    };
}

export function getVisibleBboxCenterPercents(map, ctx) {
    if (!ctx) {
        return { left: '50%', top: '50%' };
    }
    const infoBlockWidthPx = Number.parseInt(String(ctx.infoBlockWidth), 10);
    return centerPercentsForInfoBlockPx(map, infoBlockWidthPx);
}

export function panToVisibleCenter(map, latlng, infoBlockWidthPx) {
    if (!map || !latlng) return;
    const center = calcVisibleCenterPx(map, infoBlockWidthPx);
    if (!center) return;
    const pinPoint = map.latLngToContainerPoint(L.latLng(latlng.lat, latlng.lng ?? latlng.lon));
    map.panBy([pinPoint.x - center.x, pinPoint.y - center.y], { animate: true });
}

export function mapSpinOptionsForVisibleBbox(map, ctx, options = {}) {
    const { isInfoBlockOpen, ...rest } = options;
    const positionPercents = isInfoBlockOpen
        ? centerPercentsForInfoBlockPx(map, MENU_INFO_OPEN_SIZE)
        : getVisibleBboxCenterPercents(map, ctx);
    return {
        color: MAP_SPIN_COLOR,
        ...rest,
        ...positionPercents,
    };
}

export default function MapStateLayer() {
    const ctx = useContext(AppContext);
    const mtx = useContext(MapContext);
    const map = useMap();
    const { pathname } = useLocation();

    const [zoom, setZoom] = useState(map ? map.getZoom() : 0);
    const [move, setMove] = useState(false);

    const [centerPositionPx, setCenterPositionPx] = useState(null);

    useZoomMoveMapHandlers(map, setZoom, setMove);
    useFocusVisibility();

    useEffect(() => {
        const update = () => {
            const { topLeft, bottomRight, centerPx } = calcVisibleBboxParamsPx(map, ctx) ?? {};

            const visible = calcVisibleBbox(topLeft, bottomRight);
            if (visible && !isInitialViewWithEmptyContext(visible, map, mtx.visibleBboxInfo)) {
                mtx.setVisibleBboxInfo(visible);
            }
            setCenterPositionPx(centerPx);
        };

        update();

        map.on('resize', update);
        return () => map.off('resize', update);
    }, [zoom, move, ctx.infoBlockWidth]);

    // leaflet-spin refcount guard (not the map instance): one spin(true) per busy spell, paired with one spin(false).
    const leafletSpinPairingRef = useRef(false);

    const globalMapSpinLoading = !!(ctx.processingSaveTrack || ctx.processingPoiByUrl || ctx.processingStopByUrl);
    const spinLayoutLikeOpenInfoBlock = !!(ctx.processingPoiByUrl || ctx.processingStopByUrl);

    useEffect(() => {
        if (globalMapSpinLoading && !leafletSpinPairingRef.current) {
            map.spin(true, mapSpinOptionsForVisibleBbox(map, ctx, { isInfoBlockOpen: spinLayoutLikeOpenInfoBlock }));
            leafletSpinPairingRef.current = true;
        } else if (!globalMapSpinLoading && leafletSpinPairingRef.current) {
            map.spin(false);
            leafletSpinPairingRef.current = false;
        }
    }, [globalMapSpinLoading, spinLayoutLikeOpenInfoBlock]);

    useEffect(() => {
        return () => {
            if (leafletSpinPairingRef.current) {
                map.spin(false);
                leafletSpinPairingRef.current = false;
            }
        };
    }, []);

    // Wheel and buttons share frame-by-frame zoom instead of CSS-scaling the MVT canvas.
    useEffect(() => {
        const container = map.getContainer();
        const originalStop = map._stop;
        const originalZoomIn = map.zoomIn;
        const originalZoomOut = map.zoomOut;
        const originalSetZoom = map.setZoom;
        let targetZoom = map.getZoom();
        let anchor = null;
        let anchorLatLng = null;
        let frame = null;

        function zoomAroundAnchor(zoom) {
            const offset = anchor.subtract(map.getSize().divideBy(2));
            return map.unproject(map.project(anchorLatLng, zoom).subtract(offset), zoom);
        }

        function step() {
            const zoom = map.getZoom();
            const snappedTarget = map._limitZoom(targetZoom);
            if (Math.abs(snappedTarget - zoom) < 0.005) {
                frame = null;
                // no setView: its viewreset drops the GridLayer tiles
                map._move(zoomAroundAnchor(snappedTarget), snappedTarget);
                map._moveEnd(true);
                return;
            }
            const next = zoom + (snappedTarget - zoom) * ZOOM_EASING;
            frame = L.Util.requestAnimFrame(step);
            // pinch: zoom event without moveend, as Leaflet TouchZoom
            map._move(zoomAroundAnchor(next), next, { pinch: true });
        }

        function stopZoom() {
            if (frame !== null) {
                L.Util.cancelAnimFrame(frame);
                frame = null;
                const zoom = map._limitZoom(map.getZoom());
                map._move(zoomAroundAnchor(zoom), zoom);
                map._moveEnd(true);
            }
            targetZoom = map.getZoom();
        }

        // Leaflet stops here before setView, flyTo, dragging and touch zoom.
        map._stop = function () {
            stopZoom();
            return originalStop.call(this);
        };

        function zoomBy(delta, nextAnchor) {
            if (map._animatingZoom) {
                return;
            }
            if (frame === null) {
                anchorLatLng = map.containerPointToLatLng(nextAnchor);
            } else if (!nextAnchor.equals(anchor)) {
                anchorLatLng = map.unproject(map.project(anchorLatLng).add(nextAnchor.subtract(anchor)));
            }
            // Keep the geographic anchor between frames instead of feeding rounded pixel origins back into the center.
            anchor = nextAnchor;
            if (frame === null && map._limitZoom(targetZoom) !== map.getZoom()) {
                targetZoom = map.getZoom();
            }
            // Preserve sub-snap deltas between wheel events, including after an animation finishes.
            targetZoom = Math.max(map.getMinZoom(), Math.min(map.getMaxZoom(), targetZoom + delta));
            if (frame === null && map._limitZoom(targetZoom) !== map.getZoom()) {
                originalStop.call(map);
                frame = L.Util.requestAnimFrame(step);
                map._moveStart(true, false);
            }
        }

        function onWheel(event) {
            L.DomEvent.stop(event);
            // getWheelDelta divides deltaY by 3 on Mac
            const delta = event.deltaMode === 0 ? -event.deltaY : L.DomEvent.getWheelDelta(event);
            zoomBy(delta / WHEEL_PX_PER_ZOOM, map.mouseEventToContainerPoint(event));
        }

        function zoomFromButton(delta, options) {
            const center = calcVisibleCenterPx(map, Number.parseInt(String(ctx.infoBlockWidth), 10));
            const point = center ? L.point(center.x, center.y) : map.getSize().divideBy(2);
            if (options?.animate === false) {
                map.setZoomAround(point, map.getZoom() + delta, options);
            } else {
                zoomBy(delta, point);
            }
            return map;
        }

        map.zoomIn = (delta, options) => zoomFromButton(delta ?? map.options.zoomDelta ?? 1, options);
        map.zoomOut = (delta, options) => zoomFromButton(-(delta ?? map.options.zoomDelta ?? 1), options);
        // keyboard +/- zooms through setZoom
        map.setZoom = (zoom, options) =>
            options?.animate === false
                ? originalSetZoom.call(map, zoom, options)
                : zoomFromButton(zoom - map.getZoom(), options);
        L.DomEvent.on(container, 'wheel', onWheel);

        return () => {
            L.DomEvent.off(container, 'wheel', onWheel);
            map._stop = originalStop;
            map.zoomIn = originalZoomIn;
            map.zoomOut = originalZoomOut;
            map.setZoom = originalSetZoom;
            stopZoom();
        };
    }, [map, ctx.infoBlockWidth]);

    // Central zoom-to-fit handler driven by useZoomToFit.
    useEffect(() => {
        if (!mtx.zoomToFitRequest) return;
        const bounds = getZoomToFitBounds({ ...mtx.zoomToFitRequest, ctx });
        if (bounds) {
            applyZoomToFit({ map, mtx, bounds });
            mtx.setZoomToFitRequest(null);
        }
    }, [mtx.zoomToFitRequest, ctx.favorites?.mapObjs, ctx.gpxFiles]);

    // Restores a saved view
    useEffect(() => {
        const request = mtx.mapViewStackRequest;
        if (!request) return;
        if (request.action === 'pop') {
            popMapView({ map, mtx, key: request.key });
        }
        mtx.setMapViewStackRequest(null);
    }, [mtx.mapViewStackRequest]);

    useEffect(() => {
        const sync = () => {
            if (globalMapSpinLoading && map._spinner?.el) {
                const pos = mapSpinOptionsForVisibleBbox(map, ctx, {
                    isInfoBlockOpen: spinLayoutLikeOpenInfoBlock,
                });
                map._spinner.el.style.left = pos.left;
                map._spinner.el.style.top = pos.top;
            }
        };
        sync();
        map.on('resize', sync);
        return () => map.off('resize', sync);
    }, [globalMapSpinLoading, spinLayoutLikeOpenInfoBlock, ctx.infoBlockWidth]);

    if (!pathname.includes(SEARCH_RESULT_URL) || !mtx.visibleBboxInfo?.center || !centerPositionPx) {
        return null;
    }

    return (
        <div
            style={{
                position: 'absolute',
                left: centerPositionPx.x,
                top: centerPositionPx.y,
                transform: 'translate(-50%, -50%)',
                zIndex: MAP_CENTER_ICON_Z_INDEX,
                pointerEvents: 'none',
                width: CENTRE_ICON_SIZE,
                height: CENTRE_ICON_SIZE,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                lineHeight: 0,
            }}
        >
            <CenterIcon
                width={CENTRE_ICON_SIZE}
                height={CENTRE_ICON_SIZE}
                style={{ display: 'block', flexShrink: 0 }}
            />
        </div>
    );
}

function isInitialViewWithEmptyContext(visible, map, visibleBboxInfo) {
    return (
        !visibleBboxInfo &&
        map.getZoom() === initialZoom &&
        Math.abs(visible.center.lat - initialPosition[0]) < 0.01 &&
        Math.abs(visible.center.lng - initialPosition[1]) < 0.01
    );
}

function calcVisibleBboxParamsPx(map, ctx) {
    if (!map?.getSize) {
        return null;
    }
    const containerSize = map.getSize();
    if (!containerSize?.x || !containerSize.y) {
        return null;
    }
    const menuOffset = Number.parseInt(ctx.infoBlockWidth, 10) + MAIN_MENU_MIN_SIZE;

    const x = menuOffset + (containerSize.x - menuOffset) / 2;
    const y = TOP_PADDING + (containerSize.y - TOP_PADDING - BOTTOM_PADDING) / 2;

    const topLeft = map.containerPointToLatLng([menuOffset, TOP_PADDING]);
    const bottomRight = map.containerPointToLatLng([containerSize.x, containerSize.y - BOTTOM_PADDING]);

    if (!topLeft || !bottomRight) {
        return null;
    }

    return { topLeft, bottomRight, centerPx: { x, y } };
}

function calcVisibleBbox(topLeft, bottomRight) {
    if (!topLeft || !bottomRight) {
        return null;
    }

    const bounds = L.latLngBounds(topLeft, bottomRight);
    const center = bounds.getCenter();

    return {
        bounds: L.latLngBounds(
            [roundTo(bounds.getSouth()), roundTo(bounds.getWest())],
            [roundTo(bounds.getNorth()), roundTo(bounds.getEast())]
        ),
        center: {
            lat: roundTo(center.lat, 4),
            lng: roundTo(center.lng, 4),
        },
    };
}

function roundTo(num, precision = 3) {
    return Number.parseFloat(Number(num).toFixed(precision));
}

function getCenterMapLocByHash(hash) {
    const parts = hash.split('/').slice(1);
    if (parts.length === 2) {
        const [lat, lng] = parts.map(Number.parseFloat);
        if (!Number.isNaN(lat) && !Number.isNaN(lng)) {
            return {
                lat: lat,
                lng: lng,
            };
        }
    }
    return null;
}
