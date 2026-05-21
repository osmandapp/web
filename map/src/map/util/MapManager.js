import L from 'leaflet';
import Utils from '../../util/Utils';
import styles from '../map.module.css';
import { fitBoundsOptions } from '../../manager/track/TracksManager';
import { OBJECT_TYPE_CLOUD_TRACK, OBJECT_TYPE_FAVORITE } from '../../context/AppContext';

export const TOOLTIP_MAX_LENGTH = 50;

// Bounds for the {type, object} pair, or null if geometry isn't ready.
export function getZoomToFitBounds({ type, object, ctx }) {
    if (!type) return null;
    if (!object) return null;
    if (type === OBJECT_TYPE_FAVORITE) {
        const markers = ctx?.favorites?.mapObjs?.[object.id]?.markers;
        const bounds = markers?.getBounds();

        return bounds?.isValid() ? bounds : null;
    }
    if (type === OBJECT_TYPE_CLOUD_TRACK) {
        const bounds = object?.gpx?.getBounds();

        return bounds?.isValid() ? bounds : null;
    }

    return null;
}

// fitBounds + save prev view on the first call of the chain (reset by restoreMapView),
// so re-fires of the same selection don't overwrite the original view.
export function applyZoomToFit({ map, mtx, bounds }) {
    if (!map) return false;
    if (!bounds?.isValid()) return false;

    const center = map.getCenter();
    const captured = { center: { lat: center.lat, lng: center.lng }, zoom: map.getZoom() };
    mtx.setMapViewBeforeZoomFit((prev) => prev ?? captured);
    map.fitBounds(bounds, fitBoundsOptions(mtx));

    return true;
}

// Restore the saved view (back-navigation) and clear it.
export function restoreMapView({ map, mtx }) {
    if (!map) return false;
    const saved = mtx?.mapViewBeforeZoomFit;
    if (!saved) return false;

    map.setView([saved.center.lat, saved.center.lng], saved.zoom);
    mtx.setMapViewBeforeZoomFit(null);

    return true;
}

export function formatTrackName(name) {
    return name ? name.replaceAll('/', ' · ') : name;
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
    const shortTitle = Utils.truncateText(text, TOOLTIP_MAX_LENGTH);
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
    gpx_track: '/map/images/map_icons/ic_action_polygon_dark.svg',
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

export function panToIfNeeded(map, latlng) {
    if (!map || !latlng) return;
    const ll = L.latLng(latlng.lat, latlng.lng ?? latlng.lon);
    if (!map.getBounds().contains(ll)) map.panTo(ll);
}

export function createTooltip(content, latlng, options = {}) {
    const { direction = 'bottom', offset = [0, 8], permanent = true } = options;
    return L.tooltip({
        permanent,
        direction,
        offset,
        className: styles.tooltip,
    })
        .setContent(content)
        .setLatLng(latlng);
}
