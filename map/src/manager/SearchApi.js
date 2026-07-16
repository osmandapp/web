import i18n from '../i18n';
import { apiGet } from '../util/HttpApi';
import { BBOX_COORDS_DECIMALS } from './GlobalManager';
import { getCurrentTimeParams } from '../util/Utils';

export async function searchByWordApi({
    latlng,
    bbox,
    query,
    baseSearch = false,
    spatial = false,
    abortControllerKey,
}) {
    return await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/search/search`, {
        apiCache: true,
        ...(abortControllerKey ? { abortControllerKey } : {}),
        params: {
            lat: latlng.lat,
            lon: latlng.lng,
            northWest: `${Number(bbox.getNorthWest().lat).toFixed(BBOX_COORDS_DECIMALS)},${Number(bbox.getNorthWest().lng).toFixed(BBOX_COORDS_DECIMALS)}`,
            southEast: `${Number(bbox.getSouthEast().lat).toFixed(BBOX_COORDS_DECIMALS)},${Number(bbox.getSouthEast().lng).toFixed(BBOX_COORDS_DECIMALS)}`,
            text: query,
            locale: i18n.language,
            baseSearch,
            ...(spatial ? { spatial: true } : {}),
            ...getCurrentTimeParams(),
        },
    });
}
