// px
import { SHARE_TYPE } from '../menu/share/shareConstants';

export const MAIN_MENU_MIN_SIZE = 64;
export const MAIN_MENU_OPEN_SIZE = 240;
export const MENU_INFO_OPEN_SIZE = 360;
export const MENU_INFO_CLOSE_SIZE = 0;
export const HEADER_SIZE = 60;
export const INSTALL_BANNER_SIZE = 60;
export const GLOBAL_GRAPH_HEIGHT_SIZE = 200;

export const GPX = 'GPX';
export const FAVOURITES = 'FAVOURITES';

export const FILE_WAS_DELETED = 'file was deleted';

export const MAIN_PAGE_TYPE = 'main';
export const MAIN_URL = '/map';
export const MAIN_URL_WITH_SLASH = '/map/';

export const SEARCH_URL = 'search/';
export const EXPLORE_URL = 'explore/';
export const POI_CATEGORIES_URL = 'poi-categories/';
export const SEARCH_RESULT_URL = 'result/';
export const POI_URL = 'poi/';

export const CONFIGURE_URL = 'configure/';
export const WEATHER_URL = 'weather/';
export const WEATHER_FORECAST_URL = 'forecast/';

export const TRACKS_URL = 'mydata/tracks/';
export const VISIBLE_TRACKS_URL = 'visible-tracks/';

export const FAVORITES_URL = 'mydata/favorites/';
export const NAVIGATE_URL = 'navigate/';
export const PLANROUTE_URL = 'plan/';
export const SETTINGS_URL = 'settings/';
export const TRACK_ANALYZER_URL = 'track-analyzer/';
export const TRAVEL_URL = 'travel/';
export const LOGIN_URL = 'account/';
export const PURCHASES_URL = 'purchases/';
export const DELETE_ACCOUNT_URL = 'delete-account/';
export const SHARE_FILE_URL = 'share/join/:uuid';
export const SHARE_FILE_MAIN_URL = 'share/join/';
export const INFO_MENU_URL = 'info/';
export const SHARE_MENU_URL = 'share/';
export const PRICING_URL = 'pricing/';

export const MENU_IDS = {
    search: 'se-show-menu-search',
    config: 'se-show-menu-configuremap',
    weather: 'se-show-menu-weather',
    tracks: 'se-show-menu-tracks',
    favorites: 'se-show-menu-favorites',
    navigation: 'se-show-menu-navigation',
    planroute: 'se-show-menu-planroute',
    settings: 'se-show-menu-settings',
    trackanalyzer: 'se-show-menu-track-analyzer',
    travel: 'se-show-menu-travel',
};

export function getUniqFileId(file) {
    return `_id_${file.name}_${file.userid}`;
}

export function getFileStorage({ ctx, smartf, type }) {
    if (type === GPX) {
        return smartf?.type === SHARE_TYPE ? ctx.shareWithMeFiles?.tracks : ctx.gpxFiles;
    }
    return null;
}

export function updateFileStorage({ ctx, smartf, type, file }) {
    if (type === GPX) {
        return smartf?.type === SHARE_TYPE
            ? ctx.setShareWithMeFiles((prev) => ({ ...prev, tracks: { ...prev.tracks, [file.name]: file } }))
            : ctx.setGpxFiles((prev) => ({ ...prev, [file.name]: file }));
    }
    return null;
}

export function showProcessingNotification(
    ctx,
    message = "We're working hard to prepare maps for you! 💪🧭",
    timeout = 3000
) {
    return setTimeout(() => {
        ctx.setNotification({
            text: message,
            severity: 'info',
        });
    }, timeout);
}
