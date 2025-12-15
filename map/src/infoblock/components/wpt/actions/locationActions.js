import { ROUTE_POINTS_START, ROUTE_POINTS_FINISH } from '../../../../store/geoRouter/profileConstants';
import {
    navigationObject,
    NAVIGATION_OBJECT_TYPE_SEARCH,
    NAVIGATION_OBJECT_TYPE_FAVORITE,
} from '../../../../store/navigationObject/navigationObject';

export function directionFrom(lat, lon, ctx, wpt = null) {
    const navObj = prepareNavObj(lat, lon, wpt);
    if (!navObj) return;

    ctx.navigationObject.setOption(ROUTE_POINTS_START, navObj);
}

export function directionTo(lat, lon, ctx, wpt = null) {
    const navObj = prepareNavObj(lat, lon, wpt);
    if (!navObj) return;

    ctx.navigationObject.setOption(ROUTE_POINTS_FINISH, navObj);
}

function prepareNavObj(lat, lon, wpt) {
    if (lat == null || lon == null) return null;

    let navObj;
    if (wpt) {
        const type =
            wpt.type?.isFav || wpt.type?.isShareFav ? NAVIGATION_OBJECT_TYPE_FAVORITE : NAVIGATION_OBJECT_TYPE_SEARCH;
        navObj = navigationObject.fromWpt(wpt, type);
    }

    if (!navObj) {
        navObj = navigationObject.fromCoordinates(lat, lon);
    }
    return navObj;
}

export function createShareLocations(wpt) {
    const [zoom, lat, lon] = (window.location.hash ?? '').replace('#', '').split('/');

    if (!zoom || !lat || !lon) {
        return null;
    }

    if (wpt.latlon?.lat == null || wpt.latlon?.lon == null) {
        return null;
    }

    const host = window.location.host;

    const pointLat = wpt.latlon.lat;
    const pointLon = wpt.latlon.lon;
    const bboxLat = Number(lat).toFixed(4);
    const bboxLon = Number(lon).toFixed(4);

    const geoLink = `geo:${pointLat},${pointLon}?z=${zoom}`;
    const mapUrl = `https://${host}/map?pin=${pointLat},${pointLon}#${zoom}/${bboxLat}/${bboxLon}`;

    return {
        geoLink,
        mapUrl,
    };
}
