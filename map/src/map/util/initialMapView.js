import L from 'leaflet';

export const flyZoom = 9;

export const initialZoom = 5;
export const initialPosition = [50, 5];

export function getPinPointFromUrl() {
    try {
        const searchParams = new URLSearchParams(globalThis.location.search);
        const pin = searchParams.get('pin');
        if (!pin) return null;
        const arr = pin.split(',');
        const lat = Number.parseFloat(arr[0]);
        const lng = Number.parseFloat(arr[1]);
        if (arr.length === 2 && !Number.isNaN(lat) && !Number.isNaN(lng)) {
            return { lat, lng };
        }
    } catch {
        // ignore
    }
    return null;
}

export function getInitialView() {
    const fromHash = getInitialViewFromHash();
    const pin = getPinPointFromUrl();
    if (!pin) {
        return fromHash ?? { center: initialPosition, zoom: initialZoom };
    }

    return { center: wrapCenter(pin.lat, pin.lng), zoom: fromHash?.zoom ?? flyZoom };
}

function getInitialViewFromHash() {
    const hash = globalThis.location.hash;
    if (!hash || hash.length < 2) return null;
    const [zoomStr, latStr, lngStr] = hash.slice(1).split('/');
    const zoom = Number.parseFloat(zoomStr);
    const lat = Number.parseFloat(latStr);
    const lng = Number.parseFloat(lngStr);
    if (Number.isNaN(zoom) || Number.isNaN(lat) || Number.isNaN(lng)) return null;

    return { center: wrapCenter(lat, lng), zoom };
}

function wrapCenter(lat, lng) {
    return [lat, L.Util.wrapNum(lng, [-180, 180], true)];
}
