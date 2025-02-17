import { SHARE_TYPE } from './ShareManager';

// px
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
export const EXPLORE_URL = 'search/explore/';
export const CONFIGURE_URL = 'configure/';
export const WEATHER_URL = 'weather/';
export const TRACKS_URL = 'mydata/tracks/';
export const FAVORITES_URL = 'mydata/favorites/';
export const NAVIGATE_URL = 'navigate/';
export const PLANROUTE_URL = 'plan/';
export const SETTINGS_URL = 'settings/';
export const TRACK_ANALYZER_URL = 'track-analyzer/';
export const TRAVEL_URL = 'travel/';
export const OLD_LOGIN_URL = 'dialog-account/';
export const LOGIN_URL = 'account/';
export const DELETE_ACCOUNT_URL = 'delete-account/';
export const SHARE_FILE_URL = 'share/join/:uuid';
export const SHARE_FILE_MAIN_URL = 'share/join/';
export const INFO_MENU_URL = 'info/';
export const SHARE_MENU_URL = 'share/';

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
