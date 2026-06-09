import { LIVE_TRACKS_URL, MAIN_URL_WITH_SLASH } from '../../manager/GlobalManager';

export const LIVE_TRACKS_STORAGE_KEY = 'liveTranslations';
export const LIVE_TRACK_KEY_SESSION = '__liveTrackShareKey__';

export const GEO_ERROR_DENIED = 'geolocation_denied';
export const GEO_ERROR_UNAVAILABLE = 'geolocation_unavailable';

const KEY_HEX_RE = /^[0-9a-f]{64}$/;

// Builds the share URL for a live track translation.
export function buildLiveTrackShareUrl(translation) {
    if (!translation?.key) return null;
    const params = new URLSearchParams({ tid: translation.id });
    if (translation.name) params.set('name', translation.name);
    return `${globalThis.location.origin}${MAIN_URL_WITH_SLASH}${LIVE_TRACKS_URL}?${params}#${translation.key}`;
}

// If the URL fragment contains a live-track AES key, saves it to sessionStorage
// and clears the fragment so leaflet-hash uses the default map position.
export function extractAndSaveLiveTrackKey(raw) {
    if (!KEY_HEX_RE.test(raw)) return false;
    try {
        sessionStorage.setItem(LIVE_TRACK_KEY_SESSION, raw);
        // Only drop the fragment once the key is safely persisted — otherwise the key would be lost.
        history.replaceState(null, '', globalThis.location.pathname + globalThis.location.search);
        return true;
    } catch (_) {
        return false;
    }
}
