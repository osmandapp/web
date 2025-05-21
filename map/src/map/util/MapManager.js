import { HEADER_SIZE, MAIN_MENU_MIN_SIZE } from '../../manager/GlobalManager';
import L from 'leaflet';

export function getVisibleBbox(map, ctx) {
    const containerSize = map.getSize();
    const menuOffset = parseInt(ctx.infoBlockWidth, 10) + MAIN_MENU_MIN_SIZE + 20;
    const topPadding = HEADER_SIZE + 20;
    const bottomPadding = 50;
    const topLeft = map.containerPointToLatLng([menuOffset, topPadding]);
    const bottomRight = map.containerPointToLatLng([containerSize.x, containerSize.y - bottomPadding]);

    return L.latLngBounds(topLeft, bottomRight);
}
