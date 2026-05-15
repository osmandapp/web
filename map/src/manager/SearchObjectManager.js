import { OBJECT_TYPE_CLOUD_TRACK, OBJECT_TYPE_FAVORITE } from '../context/AppContext';
import { openFavoriteObj } from './FavoritesManager';
import { openTrackOnMap } from './track/TracksManager';
import { MAIN_URL_WITH_SLASH, SEARCH_URL, SEARCH_RESULT_URL } from './GlobalManager';
import { buildSearchParamsFromQuery } from '../util/hooks/search/useSearchNav';

export function openSearchObj(ctx, selectedSearchObj, { recentSaver } = {}) {
    if (!selectedSearchObj) {
        return;
    }
    if (selectedSearchObj.type === OBJECT_TYPE_FAVORITE) {
        openFavoriteObj(ctx, selectedSearchObj.object, { fromSearch: true });
    } else if (selectedSearchObj.type === OBJECT_TYPE_CLOUD_TRACK) {
        openTrackOnMap({
            file: selectedSearchObj.object,
            showOnMap: true,
            showInfo: true,
            zoomToTrack: true,
            ctx,
            recentSaver,
        }).then();
    }
}

export function navigateBackToSearchResults(navigate, ctx, location) {
    if (!ctx.searchQuery) {
        return false;
    }
    navigate({
        pathname: MAIN_URL_WITH_SLASH + SEARCH_URL + SEARCH_RESULT_URL,
        search: buildSearchParamsFromQuery(ctx.searchQuery),
        hash: location?.hash ?? globalThis.location.hash,
    });
    return true;
}

export function isFavoriteFromSearch(ctx) {
    return ctx.selectedSearchObj?.type === OBJECT_TYPE_FAVORITE;
}

export function isTrackFromSearch(ctx) {
    return ctx.selectedSearchObj?.type === OBJECT_TYPE_CLOUD_TRACK;
}
