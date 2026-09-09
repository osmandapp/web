import i18n from '../i18n';
import { apiGet, apiPost } from '../util/HttpApi';
import { BBOX_COORDS_DECIMALS } from './GlobalManager';
import { getCurrentTimeParams } from '../util/Utils';

function formatBboxCorner(corner) {
    return `${Number(corner.lat).toFixed(BBOX_COORDS_DECIMALS)},${Number(corner.lng).toFixed(BBOX_COORDS_DECIMALS)}`;
}

export function getMapsFromUrl() {
    return new URLSearchParams(globalThis.location.search).get('maps') || null;
}

export function searchByWordApi({
    latlng,
    bbox,
    query,
    baseSearch = false,
    spatial = false,
    autocomplete = false,
    abortControllerKey = null,
    maps = null,
}) {
    return apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/search/search`, {
        apiCache: true,
        ...(abortControllerKey ? { abortControllerKey } : {}),
        params: {
            lat: latlng.lat,
            lon: latlng.lng,
            northWest: formatBboxCorner(bbox.getNorthWest()),
            southEast: formatBboxCorner(bbox.getSouthEast()),
            text: query,
            locale: i18n.language,
            baseSearch,
            ...(spatial ? { spatial: true } : {}),
            ...(autocomplete ? { autocomplete: true } : {}),
            ...(maps ? { maps } : {}),
            ...getCurrentTimeParams(),
        },
    });
}

export function getPoiByOsmIdApi({ lat, lon, osmid, type, signal = undefined }) {
    return apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/search/get-poi-by-osmid`, {
        apiCache: true,
        signal,
        params: { lat, lon, osmid, type, ...getCurrentTimeParams() },
    });
}

export function getTransportStopApi({ lat, lon, stopId, signal = undefined }) {
    return apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/search/get-transport-stop`, {
        apiCache: true,
        signal,
        params: { lat, lon, stopId },
    });
}

export function searchUserDataApi({ query, openedTracks }) {
    return apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/search-user-data`, openedTracks, {
        params: { query },
        abortControllerKey: 'userDataSearch',
    });
}
