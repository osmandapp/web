import { apiGet } from '../util/HttpApi';
import {
    MAIN_CATEGORY_KEY_NAME,
    WEB_POI_ADDITIONAL_CATEGORY,
    WEB_POI_FILTER_NAME,
} from '../infoblock/components/wpt/WptTagsProvider';
import capitalize from 'lodash-es/capitalize';
import { formattingPoiType } from './PoiManager';
import { getFirstSubstring } from '../menu/search/search/SearchResultItem';
import i18n from 'i18next';
import { SEARCH_ICON_MAP_LOCATION, typeIconMap } from '../map/layers/SearchLayer';
import { DEFAULT_EXPLORE_POITYPES } from '../menu/search/SearchMenu';
import { OBJECT_TYPE_POI } from '../context/AppContext';

export const USE_OSMAND_SERVER = true;
export const OSMAND_WIKI_BASE_URL = 'https://data.osmand.net/wikimedia/images-1280/';
export const COMMONS_WIKI_BASE_URL = 'https://commons.wikimedia.org/wiki/Special:FilePath/';

export const SEARCH_BRAND = 'brand';

export function getIconByType(type) {
    return typeIconMap[type] ?? SEARCH_ICON_MAP_LOCATION;
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
    let type = props[MAIN_CATEGORY_KEY_NAME]?.toLowerCase();
    if (type) {
        const brandRes = parseTagWithLang(type);
        if (brandRes.key === SEARCH_BRAND) {
            let brandType = capitalize(formattingPoiType(t(`poi_${brandRes.key}`)));
            if (brandRes.lang) {
                brandType += ' (' + t(`lang_${brandRes.lang}`).toLowerCase() + ')';
            }
            return brandType;
        }
        type = capitalize(formattingPoiType(t(`poi_${type}`)));
    } else {
        const filter = props[WEB_POI_FILTER_NAME];
        const addCategory = props[WEB_POI_ADDITIONAL_CATEGORY];
        let filterName;
        let addCategoryName;
        if (filter) {
            filterName = capitalize(formattingPoiType(t(`poi_${filter}`)));
            filterName = getFirstSubstring(filterName);
        }
        if (addCategory) {
            addCategoryName = capitalize(formattingPoiType(t(`poi_${addCategory}`)));
            addCategoryName = getFirstSubstring(addCategoryName);
        }
        if (filterName) {
            type = `${filterName}${addCategoryName ? ' (' + addCategoryName + ')' : ''}`;
        } else {
            type = `${addCategoryName ? addCategoryName : ''}`;
        }
    }
    return type && type !== 'undefined' && type !== '' ? type : null;
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
        ctx.setSelectedWpt((prev) => ({ ...prev, ...object }));
        ctx.setCurrentObjectType(null);
    } else {
        ctx.setSelectedWpt((prev) => ({ ...prev, poi: object }));
        ctx.setCurrentObjectType(OBJECT_TYPE_POI);
    }
}
