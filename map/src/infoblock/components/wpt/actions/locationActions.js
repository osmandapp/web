import { ROUTE_POINTS_START, ROUTE_POINTS_FINISH } from '../../../../store/geoRouter/profileConstants';

export function directionFrom(lat, lon, ctx) {
    if (lat && lon) {
        ctx.routeObject.setOption(ROUTE_POINTS_START, {
            lat: Number(lat),
            lng: Number(lon),
        });
    }
}

export function directionTo(lat, lon, ctx) {
    if (lat && lon) {
        ctx.routeObject.setOption(ROUTE_POINTS_FINISH, {
            lat: Number(lat),
            lng: Number(lon),
        });
    }
}

export function createShareLocations(wpt) {
    const [zoom, lat, lon] = (window.location.hash ?? '').replace('#', '').split('/');

    if (!zoom || !lat || !lon) {
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
