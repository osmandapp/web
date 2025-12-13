import { LatLng } from 'leaflet';
import { formatLatLon } from './NavigationPointsManager';
import { ReactComponent as HistoryIcon } from '../../assets/icons/ic_action_history.svg';
import React from 'react';
import { DEFAULT_POI_COLOR, DEFAULT_POI_SHAPE } from '../../manager/PoiManager';
import { WptIcon } from '../../infoblock/components/wpt/WptDetails';

export const NAVIGATION_OBJECT_TYPE_LOCATION = 'location';
export const NAVIGATION_OBJECT_TYPE_SEARCH = 'search';
export const NAVIGATION_OBJECT_TYPE_FAVORITE = 'favorite';

export const NavigationObject = ({ lat, lng, type, icon, displayValue }) => {
    return {
        lat: Number(lat),
        lng: Number(lng),
        type,
        icon,
        displayValue,
    };
};

export function createNavObjectFromCoords(lat, lng) {
    return NavigationObject({
        lat,
        lng,
        type: NAVIGATION_OBJECT_TYPE_LOCATION,
        icon: null,
        displayValue: formatLatLon(new LatLng(lat, lng)),
    });
}

export function createNavObjectFromWpt(wpt, type) {
    if (!wpt) return null;

    const lat = wpt.latlon?.lat ?? wpt.lat;
    const lon = wpt.latlon?.lon ?? wpt.lng ?? wpt.lon;

    if (lat == null || lon == null) return null;

    const name = wpt.name || '';
    const poiType = wpt.poiType || null;
    const category = wpt.category || null; // For favorites

    // Build display value: "Name (POI Type)" for search, "Name" for favorite, or coordinates
    let displayValue = name;
    if (poiType && type === NAVIGATION_OBJECT_TYPE_SEARCH) {
        displayValue = `${name} (${poiType})`;
    } else if (category && type === NAVIGATION_OBJECT_TYPE_FAVORITE) {
        displayValue = name ? `${name} (${category})` : category;
    } else if (!name) {
        // Fallback to coordinates if no name
        displayValue = formatLatLon(new LatLng(lat, lon));
    }

    const wptForIcon = {
        name: wpt.name,
        poiType: wpt.poiType,
        icon: wpt.icon,
        color: wpt.color,
        background: wpt.background,
        type: wpt.type,
    };

    return NavigationObject({
        lat: Number(lat),
        lng: Number(lon),
        type,
        icon: {
            wpt: wptForIcon,
            color: wpt.color,
            background: wpt.background,
            icon: wpt.icon,
        },
        displayValue,
    });
}

export function createWptIcon(icon, ctx) {
    if (!icon) return <HistoryIcon />;
    return (
        <WptIcon
            wpt={icon}
            color={icon.color || DEFAULT_POI_COLOR}
            background={icon.background || DEFAULT_POI_SHAPE}
            icon={icon.icon}
            ctx={ctx}
        />
    );
}
