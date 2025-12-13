import { ROUTE_POINTS_START, ROUTE_POINTS_FINISH } from '../../../../store/geoRouter/profileConstants';
import {
    createNavObjectFromCoords,
    createNavObjectFromWpt,
    NAVIGATION_OBJECT_TYPE_SEARCH,
    NAVIGATION_OBJECT_TYPE_FAVORITE,
} from '../../../../menu/navigation/NavigationObject';

export function directionFrom(lat, lon, ctx, wpt = null) {
    if (lat == null || lon == null) return;
    addNavObject(wpt, lat, lon, ctx);
    ctx.routeObject.setOption(ROUTE_POINTS_START, {
        lat: Number(lat),
        lng: Number(lon),
    });
}

export function directionTo(lat, lon, ctx, wpt = null) {
    if (lat == null || lon == null) return;
    addNavObject(wpt, lat, lon, ctx);
    ctx.routeObject.setOption(ROUTE_POINTS_FINISH, {
        lat: Number(lat),
        lng: Number(lon),
    });
}

function addNavObject(wpt, lat, lon, ctx) {
    if (!wpt) return;
    const type =
        wpt.type?.isFav || wpt.type?.isShareFav ? NAVIGATION_OBJECT_TYPE_FAVORITE : NAVIGATION_OBJECT_TYPE_SEARCH;
    const navObject = createNavObjectFromWpt(wpt, type) || createNavObjectFromCoords(lat, lon);
    if (navObject) {
        ctx.setCurrentNavObject(navObject);
    }
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
