import { apiGet } from '../util/HttpApi';

export const flyZoom = 9;
export const initialZoom = 5;
export const initialPosition = [50, 5]; // use != instead of !== to compare coordinates

export async function detectGeoByIp({ map, hash }) {
    if (hash) {
        const [zoom, lat, lon] = (hash.lastHash ?? window.location.hash ?? '').split('/');
        if (
            zoom &&
            lat &&
            lon &&
            (zoom !== '#' + initialZoom || lat != initialPosition[0] || lon != initialPosition[1])
        ) {
            // console.debug('location-is-defined-by-hash', zoom, lat, lon);
            return;
        }
    }

    const response = await apiGet(process.env.REACT_APP_GEO_IP_URL);

    if (response.ok) {
        let { lat, lon } = {};
        try {
            ({ lat, lon } = await response.json());
        } finally {
            if (lat && lon) {
                // hash+flyTo requires a little delay after map-ready
                setTimeout(() => map.flyTo([lat, lon], flyZoom), 100);
                // console.debug('location-defined-by-ip', flyZoom, lat, lon);
            }
        }
    }
}
