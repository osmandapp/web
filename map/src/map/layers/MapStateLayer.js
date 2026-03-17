import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import AppContext from '../../context/AppContext';
import { HEADER_SIZE, MAIN_MENU_MIN_SIZE, SEARCH_RESULT_URL } from '../../manager/GlobalManager';
import useZoomMoveMapHandlers from '../../util/hooks/map/useZoomMoveMapHandlers';
import { ReactComponent as CenterIcon } from '../../assets/icons/map_ruler_center_day.svg';

export function getVisibleBboxInfo(ctx, map) {
    if (ctx.visibleBboxInfo) return ctx.visibleBboxInfo;
    const params = calcVisibleBboxParamsPx(map, ctx);
    return params ? calcVisibleBbox(params.topLeft, params.bottomRight) : null;
}

export function getMapCenter(ctx, hash) {
    return ctx.visibleBboxInfo?.center ?? getCenterMapLocByHash(hash);
}

const CENTRE_ICON_SIZE = 24;

const TOP_PADDING = HEADER_SIZE + 20;
const BOTTOM_PADDING = 50;

export default function MapStateLayer() {
    const ctx = useContext(AppContext);
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
            if (visible) {
                ctx.setVisibleBboxInfo(visible);
            }
            setCenterPositionPx(centerPx);
        };

        update();

        map.on('resize', update);
        return () => map.off('resize', update);
    }, [zoom, move, map, ctx.infoBlockWidth]);

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
            }}
        >
            <CenterIcon width={CENTRE_ICON_SIZE} height={CENTRE_ICON_SIZE} />
        </div>
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
    const menuOffset = Number.parseInt(ctx.infoBlockWidth, 10) + MAIN_MENU_MIN_SIZE + 20;

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
            lat: roundTo(center.lat),
            lng: roundTo(center.lng),
        },
    };
}

function roundTo(num, precision = 6) {
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
