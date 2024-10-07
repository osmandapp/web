import { apiGet } from '../util/HttpApi';
import filters from '../resources/wiki_data_filters.json';
import {
    MAIN_CATEGORY_KEY_NAME,
    WEB_POI_ADDITIONAL_CATEGORY,
    WEB_POI_FILTER_NAME,
} from '../infoblock/components/wpt/WptTagsProvider';
import _ from 'lodash';
import { formattingPoiType } from './PoiManager';
import { getFirstSubstring } from '../menu/search/search/SearchResultItem';
import i18n from 'i18next';

export const WIKI_IMAGE_BASE_URL = 'https://commons.wikimedia.org/wiki/Special:FilePath/';

export async function fetchPhotoProperties(photo) {
    const imageTitle = getPhotoTitle(photo);
    const lang = i18n.language;
    try {
        // Parse image info
        const parseResponse = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/routing/search/parse-image-info`, {
            params: {
                lang: lang,
                imageTitle: imageTitle,
            },
            apiCache: true,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const parsedData = parseResponse?.data;

        if (!parsedData) {
            return photo;
        }

        return {
            ...photo,
            properties: {
                ...photo.properties,
                date: parsedData.date !== 'Unknown' ? parsedData.date : photo.properties.date,
                author: parsedData.author !== 'Unknown' ? parsedData.author : photo.properties.author,
                license: parsedData.license !== 'Unknown' ? parsedData.license : photo.properties.license,
                description:
                    parsedData.description !== 'Unknown' ? parsedData.description : photo.properties.description,
            },
        };
    } catch (error) {
        console.error('Failed to fetch photo properties:', error);
        return photo;
    }
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
    const OFFICE_FILTER = 'office';
    const defaultFilters = selectedFilters ?? filters.filter((f) => f !== OFFICE_FILTER);
    ctx.setSearchSettings({
        ...ctx.searchSettings,
        selectedFilters: new Set(defaultFilters),
        useWikiImages: false,
        showOnMainSearch: mainSearch,
    });
}

export function getPoiParentCategory(props, t) {
    let type = props[MAIN_CATEGORY_KEY_NAME]?.toLowerCase();
    if (type) {
        type = _.capitalize(formattingPoiType(t(`poi_${type}`)));
    } else {
        const filter = props[WEB_POI_FILTER_NAME];
        const addCategory = props[WEB_POI_ADDITIONAL_CATEGORY];
        let filterName;
        let addCategoryName;
        if (filter) {
            filterName = _.capitalize(formattingPoiType(t(`poi_${filter}`)));
            filterName = getFirstSubstring(filterName);
        }
        if (addCategory) {
            addCategoryName = _.capitalize(formattingPoiType(t(`poi_${addCategory}`)));
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

export function getPhotoTitle(photo) {
    if (photo.properties.imageTitle.startsWith(WIKI_IMAGE_BASE_URL)) {
        return photo.properties.imageTitle.substring(WIKI_IMAGE_BASE_URL.length);
    }
    return photo.properties.imageTitle;
}
