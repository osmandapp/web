import { HEADER_SIZE, MAIN_MENU_MIN_SIZE } from '../../manager/GlobalManager';
import L from 'leaflet';
import styles from '../../menu/search/search.module.css';

export function getVisibleBbox(map, ctx) {
    if (!map?.getSize) {
        return null;
    }
    const containerSize = map.getSize();
    if (!containerSize || !containerSize.x || !containerSize.y) {
        return null;
    }
    const menuOffset = parseInt(ctx.infoBlockWidth, 10) + MAIN_MENU_MIN_SIZE + 20;
    const topPadding = HEADER_SIZE + 20;
    const bottomPadding = 50;

    try {
        const topLeft = map.containerPointToLatLng([menuOffset, topPadding]);
        const bottomRight = map.containerPointToLatLng([containerSize.x, containerSize.y - bottomPadding]);

        if (!topLeft || !bottomRight) {
            return null;
        }

        return L.latLngBounds(topLeft, bottomRight);
    } catch (e) {
        return null;
    }
}

export function addLayerToMap(map, layer, id) {
    if (layer && !map.hasLayer(layer)) {
        layer.options = { ...layer.options, id };
        map.addLayer(layer);
    } else {
        console.debug('avoid adding map layer', id);
    }
}

export function findFeatureGroupById(map, id) {
    let found = null;
    map.eachLayer((layer) => {
        if (layer instanceof L.FeatureGroup && layer.options?.id === id) {
            found = layer;
        }
    });
    return found;
}

export function bindTooltipToMarker(marker, text, iconSize = 16, mainStyle = false) {
    if (!text) {
        return;
    }
    const shortTitle = text.length > 50 ? text.substring(0, 50) + '...' : text;
    const offset = mainStyle ? [5, iconSize * 0.8 + 5] : [0, iconSize * 0.8];

    marker.bindTooltip(shortTitle, {
        permanent: false,
        direction: 'bottom',
        offset: offset,
        className: styles.tooltip,
    });
}

export const iconPathMap = {
    location: '/map/images/map_icons/ic_action_marker_dark.svg',
    house: '/map/images/map_icons/ic_action_building.svg',
    street: '/map/images/map_icons/ic_action_street_name.svg',
    intersection: '/map/images/map_icons/ic_action_intersection.svg',
    ic_action_transport_bus: '/map/images/map_icons/ic_action_transport_bus.svg',
};

export async function getIconFromMap(name) {
    let svgData = null;
    const svgIconPath = iconPathMap[name];
    if (svgIconPath) {
        const response = await fetch(svgIconPath);
        svgData = await response.text();
    }
    return svgData;
}
