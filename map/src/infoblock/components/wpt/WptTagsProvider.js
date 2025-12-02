import i18n from '../../../i18n';
import { ReactComponent as TimeIcon } from '../../../assets/icons/ic_action_time.svg';
import { ReactComponent as CallIcon } from '../../../assets/icons/ic_action_call_dark.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/icons/ic_action_phone.svg';
import { ReactComponent as WebsiteIcon } from '../../../assets/icons/ic_world_globe_dark.svg';
import { ReactComponent as WikipediaIcon } from '../../../assets/icons/ic_plugin_wikipedia.svg';
import { ReactComponent as PoiNameIcon } from '../../../assets/icons/ic_action_poi_name.svg';
import { ReactComponent as BrandIcon } from '../../../assets/icons/ic_action_poi_brand.svg';
import { ReactComponent as InternetIcon } from '../../../assets/icons/ic_action_internet_access_fee.svg';
import { ReactComponent as InfoIcon } from '../../../assets/icons/ic_action_info_dark.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/icons/ic_action_social_instagram.svg';
import { ReactComponent as CuisineIcon } from '../../../assets/icons/ic_action_cuisine.svg';
import { ReactComponent as DescriptionIcon } from '../../../assets/icons/ic_action_note_dark.svg';
import { ReactComponent as EmailIcon } from '../../../assets/icons/ic_action_at_mail.svg';
import { ReactComponent as WikidataIcon } from '../../../assets/icons/ic_action_logo_wikidata.svg';
import { ReactComponent as DisplayLanguageIcon } from '../../../assets/icons/ic_action_map_language.svg';
import { changeIconColor } from '../../../map/markers/MarkerOptions';
import { createPoiCache, getIconNameForPoiType, updatePoiCache } from '../../../manager/PoiManager';
import React from 'react';
import { apiGet } from '../../../util/HttpApi';
import { parseTagWithLang } from '../../../manager/SearchManager';
import { localizeWeekTokens } from '../../../util/dateFmt';
import { convertMeters, getSmallLengthUnit, getLargeLengthUnit, LARGE_UNIT, SMALL_UNIT } from '../../../menu/settings/units/UnitsConverter';

export const DEFAULT_TAG_ICON_SIZE = 24;
export const DEFAULT_TAG_ICON_COLOR = '#727272';
export const WEB_PREFIX = 'web_';
export const WEB_POI_PREFIX = 'web_poi_';
export const POI_PREFIX = 'poi_';
export const WIKIPEDIA = 'wikipedia';
const WIKIVOYAGE = 'wikivoyage';
export const OSM_WIKI = 'osmwiki';
export const AMENITY_PREFIX = 'amenity_';
export const TYPE = 'type';
export const SUBTYPE = 'subtype';
const TYPE_POI = WEB_POI_PREFIX + 'type';
const SUBTYPE_POI = WEB_POI_PREFIX + 'subType';
const SERVICE_TIMES = 'service_times';
const COLLECTION_TIMES = 'collection_times';
export const DESCRIPTION = 'description';
export const OPENING_HOURS = 'opening_hours';
const PHONE = 'phone';
const MOBILE = 'mobile';
const EMAIL = 'email';
const WEBSITE = 'website';
const CUISINE = 'cuisine';
export const CUISINE_PREFIX = 'cuisine_';
const ROUTE = 'route';
export const IMAGE_OSM_TAG = 'image';
export const MAPILLARY_OSM_TAG = 'mapillary';
export const WIKIDATA = 'wikidata';
export const WIKIMEDIA_COMMONS = 'wikimedia_commons';
const INSTAGRAM = 'instagram';
export const OSM_PREFIX = 'osm_tag_';
const COLLAPSABLE_PREFIX = 'collapsable_';
export const COLOR_NAME_EXTENSION = 'color';
export const ICON_NAME_EXTENSION = 'icon';
export const BACKGROUND_TYPE_EXTENSION = 'background';
export const PROFILE_TYPE_EXTENSION = 'profile';
export const ADDRESS_EXTENSION = 'address';
export const AMENITY_ORIGIN_EXTENSION = 'amenity_origin';
export const NAME = 'name';
export const EN_NAME = 'en_name';
export const ALT_NAME = 'osm_tag_alt_name';

// from Amenity object
export const POI_NAME = WEB_POI_PREFIX + 'name';
export const POI_TYPE = WEB_POI_PREFIX + 'type';
export const POI_SUBTYPE = WEB_POI_PREFIX + 'subType';
export const POI_ICON_NAME = WEB_POI_PREFIX + 'iconName';
export const FINAL_POI_ICON_NAME = WEB_POI_PREFIX + 'finalIconName';
export const POI_OSM_URL = WEB_POI_PREFIX + 'osmUrl';
export const POI_ID = WEB_POI_PREFIX + 'id';

// from PoiType object
export const CATEGORY_NAME = WEB_PREFIX + 'name';
export const CATEGORY_TYPE = WEB_PREFIX + 'type';
export const CITY = WEB_PREFIX + 'city';
export const ADDRESS_1 = WEB_PREFIX + 'address1';
export const ADDRESS_2 = WEB_PREFIX + 'address2';
export const CATEGORY_KEY_NAME = WEB_PREFIX + 'keyName';
export const ICON_KEY_NAME = WEB_PREFIX + 'iconKeyName';
export const TYPE_OSM_TAG = WEB_PREFIX + 'typeOsmTag';
export const TYPE_OSM_VALUE = WEB_PREFIX + 'typeOsmValue';
export const CATEGORY_ICON = WEB_PREFIX + 'categoryIcon';
export const MAIN_CATEGORY_KEY_NAME = WEB_PREFIX + 'categoryKeyName';
export const WEB_POI_FILTER_NAME = WEB_PREFIX + 'poiFilterName';
export const WEB_POI_ADDITIONAL_CATEGORY = WEB_PREFIX + 'poiAdditionalCategory';

export const MAPILLARY_ACCESS_TOKEN = 'MLY|4444816185556934|29475a355616c979409a5adc377a00fa';
export const GRAPH_URL_ENDPOINT = 'https://graph.mapillary.com/';
export const PARAM_ACCESS_TOKEN = 'access_token=' + MAPILLARY_ACCESS_TOKEN;
export const PARAM_FIELDS = 'fields=id,geometry,compass_angle,captured_at,camera_type,thumb_256_url,thumb_1024_url';

export const TITLE = 'title';

const HIDDEN_EXTENSIONS = [
    COLOR_NAME_EXTENSION,
    ICON_NAME_EXTENSION,
    BACKGROUND_TYPE_EXTENSION,
    PROFILE_TYPE_EXTENSION,
    ADDRESS_EXTENSION,
    AMENITY_ORIGIN_EXTENSION,
    AMENITY_PREFIX + NAME,
    AMENITY_PREFIX + TYPE,
    AMENITY_PREFIX + SUBTYPE,
];

const HIDDEN_EXTENSIONS_POI = [
    ...HIDDEN_EXTENSIONS,
    ICON_KEY_NAME,
    POI_ICON_NAME,
    TYPE_OSM_TAG,
    TYPE_OSM_VALUE,
    TITLE,
    FINAL_POI_ICON_NAME,
    TYPE_POI,
    SUBTYPE_POI,
    POI_NAME,
    POI_ID,
    POI_OSM_URL,
];
export const SEPARATOR = ';';

const IconComponent = ({ svg, size, color }) => {
    const coloredSvg = changeIconColor(svg, color);
    const svgWithUpdatedSize = coloredSvg
        .replace(/(width=")[^"]*(")/g, `$1${size}$2`)
        .replace(/(height=")[^"]*(")/g, `$1${size}$2`);

    return <div dangerouslySetInnerHTML={{ __html: svgWithUpdatedSize }} />;
};

/**
 * Retrieves an SVG icon for a given POI using key-value pairs.
 * This function can also handle different types of POI data structures based on the 'getPoiType' flag.
 *
 * @param {Object} params - The parameters for fetching or creating the SVG icon.
 * @param {string|null} params.key - The key used to identify the type of POI. Optional.
 * @param {string|null} params.value - The value associated with the key for the POI. Optional.
 * @param {Object} params.ctx - The context object containing necessary caches and other contextual data.
 * @param {boolean} params.getPoiType - Flag to determine the structure of POI data handling.
 * @param {string|null} params.icon - An optional icon identifier that can override default behavior.
 * @returns {Promise<string|null>} - A Promise that resolves to the SVG icon data as a string, or null if no icon is found.
 *
 * Details:
 * - If `getPoiType` is true, the function prepares a list of POIs with properties derived from the key and value, then passes this to `createPoiCache`.
 * - If `getPoiType` is false, the function processes either a given object or just the key after stripping a prefix.
 * - The function updates the global `poiIconCache` with any new or existing icons found or fetched during the cache creation process.
 * - Finally, it attempts to return the most relevant icon from the cache. If no suitable icon is found, it returns null.
 */
export async function getSvgIcon({ key = null, value = null, ctx, getPoiType = false, icon = null }) {
    let innerCache;
    let cacheValue;
    if (getPoiType) {
        const poiList = [{ properties: { [TYPE_OSM_TAG]: key, [TYPE_OSM_VALUE]: value } }];
        innerCache = await createPoiCache({
            poiList,
            poiIconCache: ctx.poiIconCache,
            icon,
        });
        cacheValue = icon ? innerCache[icon] : innerCache[`${key}_${value}`];
    } else {
        const prepKey = key?.replace(COLLAPSABLE_PREFIX, '');
        innerCache = await createPoiCache({
            obj: { key: prepKey, value },
            poiIconCache: ctx.poiIconCache,
            icon,
        });
        cacheValue = innerCache[icon] ?? innerCache[prepKey] ?? innerCache[value];
    }
    updatePoiCache(ctx, innerCache);
    return cacheValue ?? null;
}

export function getIcon(svgData, size, color) {
    if (svgData) {
        return <IconComponent svg={svgData} size={size} color={color} />;
    }
    return <InfoIcon style={{ width: size, height: size, fill: color }} />;
}

async function getWptTags(obj, type, ctx) {
    let tags;
    let res = [];
    let typeTag = null;
    let subtypeTag = null;
    let id = null;
    if (type.isFav || type.isWpt) {
        tags = obj.ext?.extensions;
    } else if ((type.isPoi || type.isSearch) && obj.options) {
        Object.entries(obj.options).forEach(([key, value]) => {
            if (value === undefined) {
                delete obj.options[key];
            }
        });
        tags = obj.options;
    } else if (type.isWikiPoi) {
        Object.entries(obj.properties).forEach(([key, value]) => {
            if (value === undefined) {
                delete obj.properties[key];
            }
        });
        tags = obj.properties;
    }

    if (tags) {
        typeTag = tags[AMENITY_PREFIX + TYPE] ?? tags[TYPE];
        subtypeTag = tags[AMENITY_PREFIX + SUBTYPE] ?? tags[SUBTYPE_POI];
        id = tags[POI_ID];

        let hasCuisine = false;

        if (type.isFav || type.isWpt || type.isWikiPoi) {
            const icon = getIconNameForPoiType({
                iconKeyName: tags[ICON_KEY_NAME],
                typeOsmTag: tags[TYPE_OSM_TAG],
                typeOsmValue: tags[TYPE_OSM_VALUE],
            });
            const tagTypeObj = await addPoiTypeTag({ key: tags[TYPE_OSM_TAG], value: tags[TYPE_OSM_VALUE], ctx, icon });
            if (tagTypeObj) {
                res.push(tagTypeObj);
            }
        }

        tags = fixTagsKeys(tags);
        for (const [key, value] of Object.entries(tags)) {
            if (!shouldSkipKey(key)) {
                let tagObj = {};
                tagObj.key = key;
                if (key.includes(WIKIPEDIA)) {
                    tagObj.value = getWikipediaURL(key, value);
                } else {
                    tagObj.value = value;
                }
                tagObj.isUrl = isUrl(tagObj.value);
                if (!tagObj.isUrl) {
                    tagObj.socialMediaUrl = getSocialMediaUrl(key, value);
                    if (tagObj.socialMediaUrl != null) {
                        tagObj.isUrl = true;
                    }
                }

                switch (key) {
                    case WIKIPEDIA:
                        tagObj.icon = <WikipediaIcon />;
                        break;
                    case CUISINE:
                        tagObj.icon = <CuisineIcon />;
                        break;
                    case SERVICE_TIMES:
                    case COLLECTION_TIMES:
                        tagObj.icon = <TimeIcon />;
                        tagObj.needLinks = false;
                        tagObj.textPrefix = value;
                        break;
                    case OPENING_HOURS:
                        tagObj.icon = <TimeIcon />;
                        break;
                    case PHONE:
                        tagObj.icon = <CallIcon />;
                        tagObj.isPhoneNumber = true;
                        break;
                    case MOBILE:
                        tagObj.icon = <PhoneIcon />;
                        tagObj.isPhoneNumber = true;
                        break;
                    case WEBSITE:
                        tagObj.icon = <WebsiteIcon />;
                        tagObj.isUrl = true;
                        break;
                    case DESCRIPTION:
                        tagObj.icon = <DescriptionIcon />;
                        tagObj.desc = true;
                        break;
                    case INSTAGRAM:
                        tagObj.icon = <InstagramIcon />;
                        break;
                    case EMAIL:
                        tagObj.isEmail = true;
                        tagObj.icon = <EmailIcon />;
                        break;
                    default:
                        if (key === 'addr:housename' || key === 'whitewater:rapid_name') {
                            tagObj.icon = <PoiNameIcon />;
                        } else if (key.startsWith('operator') || key.startsWith('brand')) {
                            tagObj.icon = <BrandIcon />;
                        } else if (key === 'internet_access_fee_yes') {
                            tagObj.icon = <InternetIcon />;
                        } else if (key.includes('internet_access')) {
                            const prepValue = value.replace(TYPE, '').replace('__', '_');
                            const svgData = await getSvgIcon({ value: prepValue, ctx });
                            tagObj.icon = getIcon(svgData, DEFAULT_TAG_ICON_SIZE, DEFAULT_TAG_ICON_COLOR);
                        } else if (parseTagWithLang(key).lang) {
                            tagObj.icon = <DisplayLanguageIcon />;
                        } else {
                            const svgData = await getSvgIcon({ key, value, ctx });
                            tagObj.icon = getIcon(svgData, DEFAULT_TAG_ICON_SIZE, DEFAULT_TAG_ICON_COLOR);
                        }
                }

                const formattedPrefixAndText = getFormattedPrefixAndText(key, tagObj.textPrefix, value, subtypeTag, ctx);
                tagObj.textPrefix = formattedPrefixAndText[0];
                tagObj.value = formattedPrefixAndText[1];

                if (key.startsWith(COLLAPSABLE_PREFIX)) {
                    tagObj.collapsable = true;
                    tagObj.textPrefix = key.replace(COLLAPSABLE_PREFIX, '');
                    if (tagObj.textPrefix === CUISINE) {
                        tagObj.icon = <CuisineIcon />;
                        hasCuisine = true;
                    }
                }

                if (tagObj.key === OPENING_HOURS) {
                    tagObj.value = localizeWeekTokens(tagObj.value);
                }

                if (tagObj.key.startsWith(POI_NAME)) {
                    tagObj.key = tagObj.key.replace(POI_NAME, 'shared_string_name');
                    tagObj.textPrefix = tagObj.key;
                }

                if (key.includes(WIKIDATA)) {
                    tagObj = addWikidataTags(key, value, tagObj);
                }
                res.push(tagObj);
            }
        }
        if (hasCuisine) {
            res = res.filter((t) => t.key !== CUISINE);
        }
    }

    res = res.filter((t) => !t.key.startsWith(WEB_PREFIX));
    res = mergeTagsWithLang(res);
    return { res, id, type: typeTag, subtype: subtypeTag };
}

function mergeTagsWithLang(tags) {
    tags.forEach((tag) => {
        if (tag.key.includes(':')) {
            const arr = tag.key.split(':');
            tag.key = arr[0];
            tag.lang = arr[1];
        }
    });
    let tagsWithLang = tags.filter((tag) => tag.lang);
    tagsWithLang.forEach((tag) => {
        if (tags.includes(tag)) {
            const sameTags = tags.filter((t) => t.key === tag.key && t !== tag);
            if (sameTags?.length > 0) {
                tag.otherLangs = sameTags;
                tags = tags.filter((t) => !sameTags.includes(t));
            }
        }
    });
    return tags;
}

export async function addPoiTypeTag({
    key,
    value,
    icon,
    ctx,
    size = DEFAULT_TAG_ICON_SIZE,
    color = DEFAULT_TAG_ICON_COLOR,
}) {
    if (!icon) {
        return null;
    }
    let tagObj = {};
    let svgData = await getSvgIcon({ key, value, ctx, getPoiType: true, icon });
    if (!svgData) {
        svgData = await getSvgIcon({ key: 'amenity', value, ctx, getPoiType: true, icon });
    }
    tagObj.icon = getIcon(svgData, size, color);
    tagObj.key = 'type';
    tagObj.value = value;
    tagObj.textPrefix = value;

    return tagObj;
}

function fixTagsKeys(tags) {
    let res = {};
    for (const [key, value] of Object.entries(tags)) {
        let newKey = key;
        if (key === AMENITY_PREFIX + OPENING_HOURS) {
            newKey = key.replace(AMENITY_PREFIX, '');
        } else if (
            key.startsWith(AMENITY_PREFIX) ||
            key.startsWith(ALT_NAME) ||
            HIDDEN_EXTENSIONS.includes(key) ||
            HIDDEN_EXTENSIONS_POI.includes(key)
        ) {
            continue;
        } else {
            newKey = key.replace(OSM_PREFIX, '');
        }
        res[newKey] = value;
    }
    return res;
}

function formatLengthValue(value, ctx, unitType, fallbackUnit) {
    const numValue = parseFloat(value);
    if (!Number.isFinite(numValue) || !ctx.unitsSettings.len) {
        return fallbackUnit ? `${value} ${i18n?.t(fallbackUnit)}` : null;
    }
    
    const converted = convertMeters(numValue, ctx.unitsSettings.len, unitType);
    const unit = unitType === LARGE_UNIT ? getLargeLengthUnit(ctx) : getSmallLengthUnit(ctx);
    return `${+converted.toFixed(1)} ${i18n?.t(unit)}`;
}

function getFormattedPrefixAndText(key, prefix, value, subtype, ctx) {
    let formattedPrefix = prefix ?? key;
    let formattedValue = value;

    switch (key) {
        case 'ele':
            formattedValue = formatLengthValue(value, ctx, SMALL_UNIT, 'm') ?? formattedValue;
            break;
        case 'width':
            formattedPrefix = i18n?.t('shared_string_width');
            formattedValue = formatLengthValue(value, ctx, SMALL_UNIT, 'm') ?? formattedValue;
            break;
        case 'height':
            formattedPrefix = i18n?.t('shared_string_height');
            formattedValue = formatLengthValue(value, ctx, SMALL_UNIT, 'm') ?? formattedValue;
            break;
        case 'depth':
        case 'seamark_height':
            formattedValue = formatLengthValue(value, ctx, SMALL_UNIT, 'meter') ?? formattedValue;
            break;
        case 'distance':
            formattedPrefix = `${formattedPrefix} ${i18n?.t('distance')}`;
            formattedValue = formatLengthValue(value, ctx, LARGE_UNIT, null) ?? formattedValue;
            break;
        case 'capacity':
            if (subtype === 'water_tower' || subtype === 'storage_tank') {
                formattedValue = `${value} ${i18n?.t('cubic_m')}`;
            }
            break;
        case 'maxweight':
            const numValue = parseFloat(value);
            if (Number.isFinite(numValue)) {
                const formatted = Number.isInteger(numValue) ? numValue.toString() : numValue.toFixed(1);
                formattedValue = `${formatted} ${i18n?.t('metric_ton')}`;
            }
            break;
        case 'students':
        case 'spots':
        case 'seats':
            if (isInt(value)) {
                formattedPrefix = `${prefix} ${i18n?.t('capacity')}`;
            }
            break;
    }
    return [formattedPrefix, formattedValue];
}

function isInt(n) {
    return !isNaN(parseInt(n)) && parseFloat(n) === parseInt(n);
}

function getSocialMediaUrl(key, value) {
    if (typeof value !== 'string') {
        return null;
    }
    // Remove leading and closing slashes
    let trimmedValue = value.trim();
    if (trimmedValue.charAt(0) === '/') {
        trimmedValue = trimmedValue.substring(1);
    }
    if (trimmedValue.charAt(trimmedValue.length - 1) === '/') {
        trimmedValue = trimmedValue.substring(0, trimmedValue.length - 1);
    }

    // It cannot be username
    if (isUrl(trimmedValue)) {
        return 'https://' + trimmedValue;
    }

    const urls = {
        facebook: 'https://facebook.com/%s',
        vk: 'https://vk.com/%s',
        instagram: 'https://instagram.com/%s',
        twitter: 'https://x.com/%s',
        ok: 'https://ok.ru/%s',
        telegram: 'https://t.me/%s',
        flickr: 'https://flickr.com/%s',
        youtube: 'https://youtube.com/channel/%s',
    };

    if (Object.prototype.hasOwnProperty.call(urls, key)) {
        return urls[key].replace('%s', trimmedValue);
    } else {
        return null;
    }
}

function addWikipediaTags(key, value, tagObj) {
    let wikiParams = getWikiParams(key, value);
    tagObj.value = wikiParams.text;
    tagObj.socialMediaUrl = wikiParams.url;
    tagObj.isUrl = true;
    tagObj.textPrefix = wikiParams.prefix;

    return tagObj;
}

export function addWikidataTags(key, value, tagObj) {
    tagObj.value = value;
    tagObj.url = 'https://www.wikidata.org/wiki/' + value;
    tagObj.isUrl = true;
    tagObj.icon = <WikidataIcon />;

    return tagObj;
}

function getWikiParams(key, value) {
    let title = null;
    let langCode = 'en';
    // Full OpenStreetMap Wikipedia tag pattern looks like "operator:wikipedia:lang_code",
    // "operator" and "lang_code" is optional parameters and may be skipped.
    if (key.includes(':')) {
        let tagParts = key.split(':');
        if (tagParts.length === 3) {
            // In this case tag contains all 3 parameters: "operator", "wikipedia" and "lang_code".
            langCode = tagParts[2];
        } else if (tagParts.length === 2) {
            // In this case one of the optional parameters was skipped.
            // Parameters never change their order and parameter "wikipedia" is always present.
            if (tagParts[0] === 'wikipedia') {
                // So if "wikipedia" is the first parameter, then parameter "operator" was skipped.
                // And the second parameter is "lang_code".
                langCode = tagParts[1];
            }
        }
    }
    // Value of an Wikipedia item can be an URL, but it is not recommended.
    // OSM users should use the following pattern "lang_code:article_title" instead.
    // Where "lang_code" is optional parameter for multilingual wikipedia tags.
    let url;
    if (isUrl(value)) {
        // In this case a value is already represented as an URL.
        url = value;
    } else {
        if (value.includes(':')) {
            // If value contains a sign ":" it means that "lang_code" is also present in value.
            let valueParts = value.split(':');
            langCode = valueParts[0];
            title = valueParts[1];
        } else {
            title = value;
        }
        // Full article URL has a pattern: "http://lang_code.wikipedia.org/wiki/article_name"
        let formattedTitle = title.replace(/ /g, '_');
        url = 'https://' + langCode + '.wikipedia.org/wiki/' + formattedTitle;
    }
    let text = title !== null ? title : value;
    const arr = key.split('_-_');
    const prefix =
        arr.length > 1
            ? i18n.t('shared_string_wikipedia') + ' (' + i18n.t(`lang_${arr[1]}`) + ')'
            : i18n.t('shared_string_wikipedia');

    return { text, url, prefix };
}

function isUrl(value) {
    try {
        new URL(value);
        return true;
    } catch (_) {
        return false;
    }
}

function getWikipediaURL(key, value) {
    if (value) {
        value = value.replace(/ /g, '_');
        if (!value.startsWith('http://') && !value.startsWith('https://')) {
            const keyArr = key.split('_-_');
            if (keyArr.length === 1) {
                value = 'https://en.wikipedia.org/wiki/' + value;
            } else {
                value = 'https://' + keyArr[1] + '.wikipedia.org/wiki/' + value;
            }
        }
    }
    return value;
}

function shouldSkipKey(key) {
    return (
        key === 'idObj' ||
        key === 'name' ||
        key === 'subway_region' ||
        key === 'note' ||
        key === 'lang_yes' ||
        key.includes(ROUTE)
    );
}

export function openWikipediaContent(tag, setDevWikiContent) {
    if (tag.key === WIKIPEDIA) {
        getWikipediaContent(tag).then((data) => {
            if (data) {
                data = fixWikiUrl(data);
                setDevWikiContent(data);
            }
        });
    }
}

export function openWikivoyageContent(link, setDevWikiContent) {
    if (link) {
        getWikivoyageContent(link).then((data) => {
            if (data) {
                setDevWikiContent(data);
            }
        });
    }
}

function fixWikiUrl(text) {
    const urlRegex = /href="([^"]*)"/g;
    return text.replace(urlRegex, (match, w) => {
        if (w.includes('wikpedia')) {
            const fixedUrl = w.replace('wikpedia', WIKIPEDIA);
            return `href="${fixedUrl}"`;
        }
        return match;
    });
}

async function getWikipediaContent(tag) {
    const wikiData = parseUrl(tag.value, WIKIPEDIA);
    if (!wikiData) {
        return null;
    }
    let response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/search/get-wiki-content`, {
        apiCache: true,
        params: {
            title: wikiData.title,
            lang: wikiData.lang,
        },
    });
    if (response && response.data) {
        return response.data;
    } else {
        return null;
    }
}

async function getWikivoyageContent(link) {
    const wikivoyageData = parseUrl(link[1], WIKIVOYAGE);
    if (!wikivoyageData) {
        return null;
    }
    let response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/search/get-wikivoyage-content`, {
        apiCache: true,
        params: {
            title: wikivoyageData.title,
            lang: wikivoyageData.lang,
        },
    });
    if (response && response.data) {
        return response.data;
    } else {
        return null;
    }
}

function parseUrl(url, site) {
    const regex = new RegExp(`https?://([a-z]+)\\.${site}\\.org/wiki/(.+)`);
    const match = url.match(regex);

    if (match) {
        const lang = match[1];
        const title = decodeURIComponent(match[2]).replace(/_/g, ' ');
        return {
            lang,
            title,
        };
    } else {
        return null;
    }
}

export function filterTag(tag) {
    return tag.key !== WIKIMEDIA_COMMONS && !otherImgTags(tag.key) && tag.key !== 'svg' && tag.key !== 'type';
}

export const otherImgTags = (tag) => {
    return tag === IMAGE_OSM_TAG || tag === MAPILLARY_OSM_TAG;
};

export function getOsmIdFromOsmUrl(url) {
    return url ? url.split('/').pop() : null;
}

const WptTagsProvider = {
    getWptTags,
};
export default WptTagsProvider;
