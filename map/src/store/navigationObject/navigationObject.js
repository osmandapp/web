import { geoObject } from '../geoObject/geoObject.js';
import { LatLng } from 'leaflet';
import { formatLatLon } from '../../menu/navigation/NavigationPointsManager';

export const NAVIGATION_OBJECT_TYPE_LOCATION = 'location';
export const NAVIGATION_OBJECT_TYPE_SEARCH = 'search';
export const NAVIGATION_OBJECT_TYPE_FAVORITE = 'favorite';

/**
 * navigationObject represents a navigation point with coordinates and metadata
 * Extends geoObject to inherit route management capabilities
 */
export class navigationObject extends geoObject {
    lat = null;
    lng = null;
    name = '';
    type = NAVIGATION_OBJECT_TYPE_LOCATION;
    poiType = null;
    icon = null;
    displayValue = '';

    constructor(lat, lng, metadata = {}) {
        super();

        this.lat = Number(lat);
        this.lng = Number(lng);

        this.name = metadata.name || '';
        this.type = metadata.type || NAVIGATION_OBJECT_TYPE_LOCATION;
        this.poiType = metadata.poiType || null;
        this.icon = metadata.icon || null;
        this.displayValue = metadata.displayValue || formatLatLon(new LatLng(lat, lng));
    }

    /**
     * Get coordinates as LatLng for Leaflet compatibility
     */
    toLatLng() {
        return new LatLng(this.lat, this.lng);
    }

    /**
     * Get display value for input field
     */
    getDisplayValue() {
        return this.displayValue;
    }

    /**
     * Create navigationObject from coordinates
     */
    static fromCoordinates(lat, lng) {
        return new navigationObject(lat, lng, {
            type: NAVIGATION_OBJECT_TYPE_LOCATION,
            displayValue: formatLatLon(new LatLng(lat, lng)),
        });
    }

    /**
     * Create navigationObject from wpt (search or favorite)
     */
    static fromWpt(wpt, type) {
        if (!wpt) return null;

        const lat = wpt.latlon?.lat ?? wpt.lat;
        const lon = wpt.latlon?.lon ?? wpt.lng ?? wpt.lon;

        if (lat == null || lon == null) return null;

        const name = wpt.name || '';
        const poiType = wpt.poiType || null;
        const category = wpt.category || null;

        // Build display value
        let displayValue = name;
        if (poiType && type === NAVIGATION_OBJECT_TYPE_SEARCH) {
            displayValue = `${name} • ${poiType}`;
        } else if (category && type === NAVIGATION_OBJECT_TYPE_FAVORITE) {
            displayValue = name ? `${name} • ${category}` : category;
        } else if (!name) {
            displayValue = formatLatLon(new LatLng(lat, lon));
        }

        const wptForIcon = {
            name: wpt.name,
            poiType: wpt.poiType,
            icon: wpt.icon,
            color: wpt.color,
            background: wpt.background,
        };

        return new navigationObject(lat, lon, {
            name,
            type,
            poiType,
            icon: {
                wpt: wptForIcon,
                color: wpt.color,
                background: wpt.background,
                icon: wpt.icon,
            },
            displayValue,
        });
    }
}
