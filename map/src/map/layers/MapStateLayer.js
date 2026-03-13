import { useContext, useEffect, useMemo, useState } from 'react';
import { Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import AppContext from '../../context/AppContext';
import { HEADER_SIZE, MAIN_MENU_MIN_SIZE } from '../../manager/GlobalManager';
import useZoomMoveMapHandlers from '../../util/hooks/map/useZoomMoveMapHandlers';
import centerMapIconUrl from '../../assets/icons/map_ruler_center_day.svg';

export function getVisibleBboxInfo(ctx, map) {
    return ctx.visibleBboxInfo ?? calcVisibleBbox(map, ctx);
}

export function getMapCenter(ctx, hash) {
    return ctx.visibleBboxInfo?.center ?? getCenterMapLocByHash(hash);
}

const CENTRE_ICON_SIZE = 24;

export default function MapStateLayer() {
    const ctx = useContext(AppContext);
    const map = useMap();

    const [zoom, setZoom] = useState(map ? map.getZoom() : 0);
    const [move, setMove] = useState(false);

    useZoomMoveMapHandlers(map, setZoom, setMove);

    useEffect(() => {
        const visible = calcVisibleBbox(map, ctx);
        if (visible) {
            ctx.setVisibleBboxInfo(visible);
        }
    }, [zoom, move, map]);

    const centerIcon = useMemo(
        () =>
            L.icon({
                iconUrl: centerMapIconUrl,
                iconSize: [CENTRE_ICON_SIZE, CENTRE_ICON_SIZE],
                iconAnchor: [CENTRE_ICON_SIZE / 2, CENTRE_ICON_SIZE / 2],
            }),
        []
    );

    return (
        <>
            {ctx.visibleBboxInfo?.center && (
                <Marker position={[ctx.visibleBboxInfo.center.lat, ctx.visibleBboxInfo.center.lng]} icon={centerIcon} />
            )}
        </>
    );
}

function calcVisibleBbox(map, ctx) {
    if (!map?.getSize) {
        return null;
    }
    const containerSize = map.getSize();
    if (!containerSize?.x || !containerSize.y) {
        return null;
    }
    const menuOffset = Number.parseInt(ctx.infoBlockWidth, 10) + MAIN_MENU_MIN_SIZE + 20;
    const topPadding = HEADER_SIZE + 20;
    const bottomPadding = 50;

    const topLeft = map.containerPointToLatLng([menuOffset, topPadding]);
    const bottomRight = map.containerPointToLatLng([containerSize.x, containerSize.y - bottomPadding]);

    if (!topLeft || !bottomRight) {
        return null;
    }

    const bounds = L.latLngBounds(topLeft, bottomRight);
    const center = bounds.getCenter();

    return { bounds, center: { lat: center.lat, lng: center.lng } };
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
