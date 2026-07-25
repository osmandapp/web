import i18n from '../i18n';
import { apiGet } from '../util/HttpApi';
import { BBOX_COORDS_DECIMALS } from './GlobalManager';
import { getCurrentTimeParams } from '../util/Utils';

function formatBboxCorner(corner) {
    return `${Number(corner.lat).toFixed(BBOX_COORDS_DECIMALS)},${Number(corner.lng).toFixed(BBOX_COORDS_DECIMALS)}`;
}

export function searchByWordApi({
    latlng,
    bbox,
    query,
    baseSearch = false,
    spatial = false,
    autocomplete = false,
    abortControllerKey = null,
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
            ...getCurrentTimeParams(),
        },
    });
}
