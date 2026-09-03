import {
    BACKGROUND_TYPE_EXTENSION,
    CATEGORY_NAME,
    CATEGORY_TYPE,
    COLOR_NAME_EXTENSION,
    FINAL_POI_ICON_NAME,
    ICON_KEY_NAME,
    MAIN_CATEGORY_KEY_NAME,
    POI_ID,
    POI_NAME,
    WEB_POI_ADDITIONAL_CATEGORY,
    WEB_POI_FILTER_NAME,
} from '../infoblock/components/wpt/WptTagsProvider';
import capitalize from 'lodash-es/capitalize';
import { formattingPoiType } from './PoiManager';
import { getFirstSubstring } from '../menu/search/search/SearchResultItem';
import {
    FAVORITE_HIT_GROUP_ID,
    getObjIdSearch,
    SEARCH_ICON_MAP_LOCATION,
    searchTypeMap,
    typeIconMap,
    WPT_TRACK_FILE,
} from '../map/layers/SearchLayer';
import { DEFAULT_EXPLORE_POITYPES } from '../menu/search/SearchMenu';
import {
    OBJECT_TYPE_POI,
    OBJECT_TYPE_CLOUD_TRACK,
    OBJECT_TYPE_FAVORITE,
    OBJECT_TYPE_TRACK_WPT,
} from '../context/AppContext';
import { favoriteIdFromLatLng, openFavoriteObj, resolveWptAppearance } from './FavoritesManager';
import { getResolvedPointsGroups, openTrackOnMap, prepareName, updateTracks } from './track/TracksManager';
import { MAIN_URL_WITH_SLASH, SEARCH_URL, SEARCH_RESULT_URL, liveHash } from './GlobalManager';
import { buildSearchParamsFromQuery } from '../util/hooks/search/useSearchNav';

export const USE_OSMAND_SERVER = true;
export const OSMAND_WIKI_BASE_URL = 'https://data.osmand.net/wikimedia/images-1280/';
export const COMMONS_WIKI_BASE_URL = 'https://commons.wikimedia.org/wiki/Special:FilePath/';

export const SEARCH_BRAND = 'brand';

export function getIconByType(type) {
    return typeIconMap[type] ?? SEARCH_ICON_MAP_LOCATION;
}

function favoriteSearchId(fileName, shared, wptName) {
    return `${shared ? 'shared:' : ''}${fileName}:${wptName}`;
}

// points come from the server as { file, shared, name }
export function buildFavoriteFeatures(favorites, points) {
    const favoritesById = new Map();
    favorites?.groups?.forEach((group) => {
        favorites.mapObjs?.[group.id]?.wpts?.forEach((wpt) => {
            if (wpt?.name && wpt.lat != null && wpt.lon != null) {
                favoritesById.set(favoriteSearchId(group.file?.name, !!group.sharedWithMe, wpt.name), { group, wpt });
            }
        });
    });
    return points
        .map((point) => favoritesById.get(favoriteSearchId(point.file, point.shared, point.name)))
        .filter(Boolean)
        .map(({ group, wpt }) => ({
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [0, 0] },
            properties: {
                [CATEGORY_TYPE]: searchTypeMap.FAVORITE,
                [CATEGORY_NAME]: wpt.category,
                [POI_NAME]: wpt.name,
                [FAVORITE_HIT_GROUP_ID]: group.id,
                [ICON_KEY_NAME]: wpt.icon,
                [COLOR_NAME_EXTENSION]: wpt.color,
                [BACKGROUND_TYPE_EXTENSION]: wpt.background,
                [FINAL_POI_ICON_NAME]: wpt.icon,
                ...(wpt.address ? { address: wpt.address } : {}),
            },
        }));
}

// waypoints of tracks opened on the map: { file, shared, name } -> feature with the point's own icon and coordinates
export function buildWptFeatures(ctx, wpts) {
    return wpts.flatMap((item) => {
        const file = (item.shared ? ctx.shareWithMeFiles?.tracks : ctx.gpxFiles)?.[item.file];
        const wpt = file?.wpts?.find(
            (w) => w.name === item.name && Number(w.lat) === item.lat && Number(w.lon) === item.lon
        );
        if (!wpt) return [];
        const appearance = resolveWptAppearance(wpt, getResolvedPointsGroups(file));
        return {
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [Number(wpt.lon), Number(wpt.lat)] },
            properties: {
                [CATEGORY_TYPE]: searchTypeMap.WPT,
                [CATEGORY_NAME]: prepareName(file.name, true),
                [POI_NAME]: wpt.name,
                [WPT_TRACK_FILE]: file.name,
                [ICON_KEY_NAME]: appearance.icon,
                [COLOR_NAME_EXTENSION]: appearance.color,
                [BACKGROUND_TYPE_EXTENSION]: appearance.background,
            },
        };
    });
}

export function buildTrackFeatures(tracks) {
    return tracks.map((track) => ({
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [0, 0] },
        properties: {
            [CATEGORY_TYPE]: searchTypeMap.GPX_TRACK,
            [CATEGORY_NAME]: track.file,
        },
    }));
}

/**
 * Examples:
 * Date:
 * |date={{Original upload date|2015-04-15}} => 2015-04-15
 * |Date={{original upload date|2006-11-05}} => 2006-11-05
 * |date=2011-10-08 => 2011-10-08
 * |Date=2009-12-06 23:11 => 2009-12-06
 * |date=1940-05 => 1940-05
 * | Date = 2018-04-06 12:25 => 2018-04-06
 * |date={{Taken on|2014-03-09|location=Netherlands}} => 2014-03-09
 * |date={{According to Exif data|2021-07-17}} => 2021-07-17
 *
 * Author:
 * |author=[https://web.archive.org/web/20161031223609/http://www.panoramio.com/user/4678999?with_photo_id=118704129 Ben Bender] => Ben Bender
 * |author={{Creator:Johannes Petrus Albertus Antonietti}} => Johannes Petrus Albertus Antonietti
 * |author={{creator:Johannes Petrus Albertus Antonietti}} => Johannes Petrus Albertus Antonietti
 * |author=[[User:PersianDutchNetwork|PersianDutchNetwork]] => PersianDutchNetwork
 * |Author={{user at project|MelvinvdC|wikipedia|nl}} => MelvinvdC
 * |Author=[https://www.flickr.com/people/13088710@N02 Jos van Zetten] from Amsterdam, the Netherlands => Jos van Zetten
 * |author={{unknown|author}} => 'Unknown'
 * | Author = [https://www.flickr.com/people/141420435@N08 Nanda Sluijsmans] from Den Haag, Nederland => Nanda Sluijsmans
 * | Author = Coalition for the ICC / Credit: UN => Coalition for the ICC
 * | Author = - => 'Unknown'
 *
 * License:
 * |license={{cc-by-sa-3.0|Author Name}} => cc-by-sa-3.0
 * |permission={{cc-by-sa-3.0|ekstijn}} => cc-by-sa-3.0
 * == {{int:license-header}} ==
 * {{Self|author={{user at project|MelvinvdC|wikipedia|nl}}|GFDL|CC-BY-SA-2.5|migration=relicense}} => CC-BY-SA-2.5
 * {{self|cc-by-sa-3.0}} => cc-by-sa-3.0
 * {{cc-by-2.0}} => cc-by-2.0
 * {{RCE-license}} => RCE-license
 * {{RCE license}} => RCE license
 * {{User:FlickreviewR/reviewed-pass|Nationaal Archief|https://flickr.com/photos/29998366@N02/2949392968|2016-11-27 10:53:09|No known copyright restrictions|}} => No known copyright restrictions
 */

export function addWikiPlacesDefaultFilters(ctx, mainSearch = false, selectedFilters = null) {
    const defaultFilters = selectedFilters ?? DEFAULT_EXPLORE_POITYPES;
    ctx.setSearchSettings({
        ...ctx.searchSettings,
        selectedFilters: new Set(defaultFilters),
        useWikiImages: false,
    });
}

export function getPoiParentCategory(props, t) {
    const mainCategory = props[MAIN_CATEGORY_KEY_NAME]?.toLowerCase();
    const addCategory = props[WEB_POI_ADDITIONAL_CATEGORY];
    const filter = props[WEB_POI_FILTER_NAME];

    // additional category
    if (addCategory && !filter) {
        const addCategoryName = capitalize(formattingPoiType(t(`poi_${addCategory}`)));
        return getFirstSubstring(addCategoryName);
    }

    // main category + brand
    if (mainCategory) {
        const brandRes = parseTagWithLang(mainCategory);
        if (brandRes.key === SEARCH_BRAND) {
            let brandType = capitalize(formattingPoiType(t(`poi_${brandRes.key}`)));
            if (brandRes.lang) {
                brandType += ' (' + t(`lang_${brandRes.lang}`).toLowerCase() + ')';
            }
            return brandType;
        }
        return capitalize(formattingPoiType(t(`poi_${mainCategory}`)));
    }

    // filter
    if (filter) {
        let filterName;
        let addCategoryName;

        filterName = capitalize(formattingPoiType(t(`poi_${filter}`)));
        filterName = getFirstSubstring(filterName);

        if (addCategory) {
            addCategoryName = capitalize(formattingPoiType(t(`poi_${addCategory}`)));
            addCategoryName = getFirstSubstring(addCategoryName);
        }

        return `${filterName}${addCategoryName ? ' (' + addCategoryName + ')' : ''}`;
    }
    return null;
}

export function parseTagWithLang(tag) {
    if (typeof tag !== 'string' || !tag.includes(':')) {
        return { key: tag, lang: null };
    }
    const [key, lang] = tag?.split(':');
    return { key, lang };
}

export function getPhotoTitle(photo) {
    const URL = photo.properties?.imageTitle ?? photo;
    if (URL.startsWith(COMMONS_WIKI_BASE_URL)) {
        return URL.substring(COMMONS_WIKI_BASE_URL.length);
    }
    if (URL.startsWith(OSMAND_WIKI_BASE_URL)) {
        return URL.substring(URL.lastIndexOf('/') + 1);
    }
    return URL;
}

export function openPoiObj(ctx, object) {
    if (object.wikidata) {
        ctx.setSelectedWpt((prev) => ({ ...prev, ...object, id: object.wikidata?.properties?.id }));
        ctx.setCurrentObjectType(null);
    } else {
        const id = object?.properties?.[POI_ID] ?? (object?.geometry ? getObjIdSearch(object) : undefined);
        ctx.setSelectedWpt((prev) => ({ ...prev, poi: object, id }));
        ctx.setCurrentObjectType(OBJECT_TYPE_POI);
    }
}

export async function openSearchObj(ctx, selectedSearchObj, { recentSaver } = {}) {
    if (!selectedSearchObj) {
        return;
    }
    if (selectedSearchObj.type === OBJECT_TYPE_FAVORITE) {
        openFavoriteObj({ ctx, favoriteObj: selectedSearchObj.object, options: { fromSearch: true } });
    } else if (selectedSearchObj.type === OBJECT_TYPE_CLOUD_TRACK) {
        const newTracks = await openTrackOnMap({
            file: selectedSearchObj.object,
            showOnMap: true,
            showInfo: true,
            zoomToTrack: true,
            ctx,
            recentSaver,
            fromSearch: true,
        });
        updateTracks(ctx, null, newTracks);
    } else if (selectedSearchObj.type === OBJECT_TYPE_TRACK_WPT) {
        openTrackWptFromSearch(ctx, selectedSearchObj.object);
    }
}

export function navigateBackToSearchResults(navigate, ctx, location) {
    if (!ctx.searchQuery) {
        return false;
    }
    navigate({
        pathname: MAIN_URL_WITH_SLASH + SEARCH_URL + SEARCH_RESULT_URL,
        search: buildSearchParamsFromQuery(ctx.searchQuery),
        hash: liveHash(),
    });
    return true;
}

// open waypoint details of an opened track from search results (like a favorite from search)
export function openTrackWptFromSearch(ctx, { file, name, lat, lon }) {
    const trackData = ctx.gpxFiles?.[file] ?? ctx.shareWithMeFiles?.tracks?.[file];
    const wpt = trackData?.wpts?.find((w) => w.name === name && Number(w.lat) === lat && Number(w.lon) === lon);
    if (!wpt) return;
    // same context as opening a waypoint from the track tab: marker selection needs selectedGpxFile.gpx layers
    ctx.setCurrentObjectType(OBJECT_TYPE_CLOUD_TRACK);
    ctx.setSelectedGpxFile(trackData);
    ctx.setSelectedSearchObj({ type: OBJECT_TYPE_TRACK_WPT, object: { file, name, lat, lon } });
    // id matches the marker's idObj so useSelectMarkerOnMap selects it
    const id = favoriteIdFromLatLng(wpt.lat, wpt.lon);
    ctx.setSelectedWpt({ trackWpt: true, mapObj: false, trackData, id, ...wpt });
}

export function isWptFromSearch(ctx) {
    return ctx.selectedSearchObj?.type === OBJECT_TYPE_TRACK_WPT;
}

export function isFavoriteFromSearch(ctx) {
    return ctx.selectedSearchObj?.type === OBJECT_TYPE_FAVORITE;
}

export function isTrackFromSearch(ctx) {
    return ctx.selectedSearchObj?.type === OBJECT_TYPE_CLOUD_TRACK;
}
