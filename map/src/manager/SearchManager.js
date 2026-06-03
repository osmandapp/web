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
} from '../map/layers/SearchLayer';
import { DEFAULT_EXPLORE_POITYPES } from '../menu/search/SearchMenu';
import { OBJECT_TYPE_POI, OBJECT_TYPE_CLOUD_TRACK, OBJECT_TYPE_FAVORITE } from '../context/AppContext';
import { openFavoriteObj } from './FavoritesManager';
import { EMPTY_FILE_NAME, getGpxFiles, openTrackOnMap, prepareName, updateTracks } from './track/TracksManager';
import { MAIN_URL_WITH_SLASH, SEARCH_URL, SEARCH_RESULT_URL, liveHash } from './GlobalManager';
import { buildSearchParamsFromQuery } from '../util/hooks/search/useSearchNav';

export const USE_OSMAND_SERVER = true;
export const OSMAND_WIKI_BASE_URL = 'https://data.osmand.net/wikimedia/images-1280/';
export const COMMONS_WIKI_BASE_URL = 'https://commons.wikimedia.org/wiki/Special:FilePath/';

export const SEARCH_BRAND = 'brand';

export function getIconByType(type) {
    return typeIconMap[type] ?? SEARCH_ICON_MAP_LOCATION;
}

function searchIncludes(text, query, collator) {
    const textChars = [...String(text ?? '')];
    const queryStr = String(query ?? '');

    if (!queryStr) {
        return true;
    }

    const queryLength = [...queryStr].length;

    for (let i = 0; i <= textChars.length - queryLength; i++) {
        const candidate = textChars.slice(i, i + queryLength).join('');

        if (collator.compare(candidate, queryStr) === 0) {
            return true;
        }
    }

    return false;
}

export function searchFavoriteFeatures({ favorites, query, collator }) {
    const q = String(query ?? '').trim();
    if (!q || !favorites?.groups?.length || !favorites.mapObjs) {
        return [];
    }

    return favorites.groups
        .filter((group) => group?.id)
        .flatMap((group) => {
            const wpts = favorites.mapObjs[group.id]?.wpts;
            if (!wpts?.length) return [];

            return wpts
                .filter(
                    (wpt) =>
                        wpt?.name &&
                        wpt.lat != null &&
                        wpt.lon != null &&
                        (searchIncludes(wpt.name, q, collator) || searchIncludes(wpt.desc ?? '', q, collator))
                )
                .map((wpt) => ({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [0, 0],
                    },
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
        });
}

export function searchCloudTrackFeatures({ listFiles, query, collator }) {
    const q = String(query ?? '').trim();
    if (!q || !listFiles?.uniqueFiles) return [];

    return getGpxFiles(listFiles)
        .filter((f) => !f.name.endsWith(EMPTY_FILE_NAME) && searchIncludes(prepareName(f.name, true), q, collator))
        .map((f) => ({
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [0, 0] },
            properties: {
                [CATEGORY_TYPE]: searchTypeMap.GPX_TRACK,
                [CATEGORY_NAME]: f.name,
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

export function isFavoriteFromSearch(ctx) {
    return ctx.selectedSearchObj?.type === OBJECT_TYPE_FAVORITE;
}

export function isTrackFromSearch(ctx) {
    return ctx.selectedSearchObj?.type === OBJECT_TYPE_CLOUD_TRACK;
}
