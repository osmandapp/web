// Types and property names of search results, agreed with the server. Kept out of the map layer, so
// the managers and menus reading them do not depend on leaflet.

export const SEARCH_TYPE_CATEGORY = 'category';
export const SEARCH_BRAND = 'brand';

export const SEARCH_ICON_MAP_LOCATION = 'location';
export const SEARCH_ICON_MAP_BUILDING = 'house';
export const SEARCH_ICON_MAP_STREET = 'street';
export const SEARCH_ICON_MAP_INTERSECTION = 'intersection';
export const SEARCH_ICON_MAP_GPX_TRACK = 'gpx_track';

export const searchTypeMap = {
    LOCATION: 'LOCATION',
    INTERSECTION: 'STREET_INTERSECTION',
    HOUSE: 'HOUSE',
    STREET: 'STREET',
    POI: 'POI',
    POI_TYPE: 'POI_TYPE',
    CITY: 'CITY',
    TOWN: 'TOWN',
    VILLAGE: 'VILLAGE',
    GPX_TRACK: 'GPX_TRACK',
    FAVORITE: 'FAVORITE',
    WPT: 'WPT',
};

export const typeIconMap = {
    [searchTypeMap.LOCATION]: SEARCH_ICON_MAP_LOCATION,
    [searchTypeMap.HOUSE]: SEARCH_ICON_MAP_BUILDING,
    [searchTypeMap.STREET]: SEARCH_ICON_MAP_STREET,
    [searchTypeMap.INTERSECTION]: SEARCH_ICON_MAP_INTERSECTION,
    [searchTypeMap.GPX_TRACK]: SEARCH_ICON_MAP_GPX_TRACK,
};

// results of the user own data: they are not searched on the server
export const USER_OBJECT_TYPES = new Set([searchTypeMap.FAVORITE, searchTypeMap.GPX_TRACK, searchTypeMap.WPT]);

export const WPT_TRACK_FILE = 'wptTrackFile';
export const WPT_TRACK_SHARED = 'wptTrackShared';
export const FAVORITE_HIT_GROUP_ID = 'favoriteHitGroupId';
