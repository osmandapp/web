import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import AppContext from '../../context/AppContext';
import MapContext from '../../context/MapContext';
import { HEADER_SIZE, MAIN_MENU_MIN_SIZE, MENU_INFO_OPEN_SIZE, SEARCH_RESULT_URL } from '../../manager/GlobalManager';
import useZoomMoveMapHandlers from '../../util/hooks/map/useZoomMoveMapHandlers';
import { ReactComponent as CenterIcon } from '../../assets/icons/map_ruler_center_day.svg';
import { initialPosition, initialZoom } from '../components/LocationControl';
import { applyZoomToFit, getZoomToFitBounds, restoreMapView } from '../util/MapManager';

// In layers, we don't use cache — always compute from map; otherwise debouncer gets stale bbox on move.
export function getVisibleBboxInfo(ctx, map) {
    const params = calcVisibleBboxParamsPx(map, ctx);
    return params ? calcVisibleBbox(params.topLeft, params.bottomRight) : (ctx.visibleBboxInfo ?? null);
}

export function getMapCenter(ctx, hash) {
    return ctx.visibleBboxInfo?.center ?? getCenterMapLocByHash(hash);
}

const CENTRE_ICON_SIZE = 24;

const MAP_SPIN_COLOR = '#1976d2';

const TOP_PADDING = HEADER_SIZE;
const BOTTOM_PADDING = 0;

function centerPercentsForInfoBlockPx(map, infoBlockWidthPx) {
    if (!map?.getSize) {
        return { left: '50%', top: '50%' };
    }
    const containerSize = map.getSize();
    if (!containerSize?.x || !containerSize?.y) {
        return { left: '50%', top: '50%' };
    }
    const infoColumnWidthPx = Number.isFinite(infoBlockWidthPx) ? infoBlockWidthPx : 0;
    const leftChromeWidthPx = infoColumnWidthPx + MAIN_MENU_MIN_SIZE;
    const centerX = leftChromeWidthPx + (containerSize.x - leftChromeWidthPx) / 2;
    const centerY = TOP_PADDING + (containerSize.y - TOP_PADDING - BOTTOM_PADDING) / 2;
    return {
        left: `${(centerX / containerSize.x) * 100}%`,
        top: `${(centerY / containerSize.y) * 100}%`,
    };
}

export function getVisibleBboxCenterPercents(map, ctx) {
    if (!ctx) {
        return { left: '50%', top: '50%' };
    }
    const infoBlockWidthPx = Number.parseInt(String(ctx.infoBlockWidth), 10);
    return centerPercentsForInfoBlockPx(map, infoBlockWidthPx);
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

    useEffect(() => {
        const update = () => {
            const { topLeft, bottomRight, centerPx } = calcVisibleBboxParamsPx(map, ctx) ?? {};

            const visible = calcVisibleBbox(topLeft, bottomRight);
            if (visible && !isInitialViewWithEmptyContext(visible, map, ctx.visibleBboxInfo)) {
                ctx.setVisibleBboxInfo(visible);
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

    // Central zoom-to-fit handler driven by useZoomToFit.
    useEffect(() => {
        if (!mtx.zoomToFitRequest) return;
        const bounds = getZoomToFitBounds({ ...mtx.zoomToFitRequest, ctx });
        if (bounds) {
            applyZoomToFit({ map, mtx, bounds });
            mtx.setZoomToFitRequest(null);
        }
    }, [mtx.zoomToFitRequest, ctx.favorites?.mapObjs, ctx.gpxFiles]);

    // Restore the view captured by the latest zoomToFit() call (back-navigation).
    useEffect(() => {
        if (!mtx.restoreMapViewRequest) return;

        restoreMapView({ map, mtx });

        mtx.setRestoreMapViewRequest(false);
    }, [mtx.restoreMapViewRequest]);

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

    if (!pathname.includes(SEARCH_RESULT_URL) || !ctx.visibleBboxInfo?.center || !centerPositionPx) {
        return null;
    }

    return (
        <div
            style={{
                position: 'absolute',
                left: centerPositionPx.x,
                top: centerPositionPx.y,
                transform: 'translate(-50%, -50%)',
                zIndex: 2000,
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
