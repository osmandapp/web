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
import * as locales from 'date-fns/locale';
import { format, startOfWeek, addDays } from 'date-fns';
import capitalize from 'lodash/capitalize';
import { changeIconColor } from '../../../map/markers/MarkerOptions';
import { createPoiCache, updatePoiCache } from '../../../manager/PoiManager';
import React from 'react';

export const DEFAULT_TAG_ICON_SIZE = 24;
export const DEFAULT_TAG_ICON_COLOR = '#727272';
export const WEB_POI_PREFIX = 'web_poi_';
export const POI_PREFIX = 'poi_';
const WIKIPEDIA = 'wikipedia';
const OSM_WIKI = 'osmwiki';
const AMENITY_PREFIX = 'amenity_';
const TYPE = 'type';
const SUBTYPE = 'subtype';
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
const ROUTE = 'route';
const WIKIDATA = 'wikidata';
const WIKIMEDIA_COMMONS = 'wikimedia_commons';
const INSTAGRAM = 'instagram';
const OSM_PREFIX = 'osm_tag_';
const COLLAPSABLE_PREFIX = 'collapsable_';
export const COLOR_NAME_EXTENSION = 'color';
export const ICON_NAME_EXTENSION = 'icon';
export const BACKGROUND_TYPE_EXTENSION = 'background';
export const PROFILE_TYPE_EXTENSION = 'profile';
export const ADDRESS_EXTENSION = 'address';
export const AMENITY_ORIGIN_EXTENSION = 'amenity_origin';
export const NAME = 'name';
export const ALT_NAME = 'osm_tag_alt_name';

export const POI_NAME = WEB_POI_PREFIX + 'name';
export const ICON_KEY_NAME = WEB_POI_PREFIX + 'iconKeyName';
export const ICON_NAME = WEB_POI_PREFIX + 'iconName';
export const TYPE_OSM_TAG = WEB_POI_PREFIX + 'typeOsmTag';
export const TYPE_OSM_VALUE = WEB_POI_PREFIX + 'typeOsmValue';
export const TITLE = 'title';
export const FINAL_ICON_NAME = WEB_POI_PREFIX + 'finalIconName';
export const POI_OSM_URL = WEB_POI_PREFIX + 'osmUrl';
const POI_ID = WEB_POI_PREFIX + 'id';

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
    ICON_NAME,
    TYPE_OSM_TAG,
    TYPE_OSM_VALUE,
    TITLE,
    FINAL_ICON_NAME,
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
        cacheValue = innerCache[`${key}_${value}`];
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
    } else if (type.isPoi) {
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
        let isWikipediaLink = false;
        let hasCuisine = false;

        if (type.isFav || type.isWpt) {
            let tagTypeObj = await addPoiTypeTag({ typeTag, subtypeTag, ctx });
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
                    tagObj.hiddenUrl = getSocialMediaUrl(key, value);
                    if (tagObj.hiddenUrl != null) {
                        tagObj.isUrl = true;
                    }
                } else if (key.includes(WIKIPEDIA)) {
                    tagObj = addWikipediaTags(key, value, tagObj);
                    isWikipediaLink = true;
                }

                if (typeTag === OSM_WIKI) {
                    // add wiki content
                } else {
                    switch (key) {
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
                            if (isWikipediaLink) {
                                tagObj.icon = <WikipediaIcon />;
                                isWikipediaLink = false;
                            } else if (key === 'addr:housename' || key === 'whitewater:rapid_name') {
                                tagObj.icon = <PoiNameIcon />;
                            } else if (key === 'operator' || key === 'brand') {
                                tagObj.icon = <BrandIcon />;
                            } else if (key === 'internet_access_fee_yes') {
                                tagObj.icon = <InternetIcon />;
                            } else if (key.includes('internet_access')) {
                                const prepValue = value.replace(TYPE, '').replace('__', '_');
                                const svgData = await getSvgIcon({ value: prepValue, ctx });
                                tagObj.icon = getIcon(svgData, DEFAULT_TAG_ICON_SIZE, DEFAULT_TAG_ICON_COLOR);
                            } else {
                                const svgData = await getSvgIcon({ key, value, ctx });
                                tagObj.icon = getIcon(svgData, DEFAULT_TAG_ICON_SIZE, DEFAULT_TAG_ICON_COLOR);
                            }
                    }
                }

                const formattedPrefixAndText = getFormattedPrefixAndText(key, tagObj.textPrefix, value, subtypeTag);
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
                    tagObj.value = localizeWeekDays(tagObj.value);
                }

                // add ele tag

                res.push(tagObj);
            }
        }
        if (hasCuisine) {
            res = res.filter((t) => t.key !== CUISINE);
        }
    }

    return { res, id, type: typeTag, subtype: subtypeTag };
}

export async function addPoiTypeTag({
    typeTag,
    subtypeTag,
    ctx,
    size = DEFAULT_TAG_ICON_SIZE,
    color = DEFAULT_TAG_ICON_COLOR,
}) {
    if (!typeTag || !subtypeTag) {
        return null;
    }
    let tagObj = {};
    let svgData = await getSvgIcon({ key: typeTag, value: subtypeTag, ctx, getPoiType: true });
    if (!svgData) {
        svgData = await getSvgIcon({ key: 'amenity', value: subtypeTag, ctx, getPoiType: true });
    }
    tagObj.icon = getIcon(svgData, size, color);
    tagObj.key = 'type';
    tagObj.value = subtypeTag;
    tagObj.textPrefix = subtypeTag;

    return tagObj;
}

function localizeWeekDays(schedule) {
    const locale = locales[i18n.language] || locales.enUS;
    const baseDate = startOfWeek(new Date(), { weekStartsOn: 1 });

    const days = {
        Mo: capitalize(format(baseDate, 'eee', { locale })),
        Tu: capitalize(format(addDays(baseDate, 1), 'eee', { locale })),
        We: capitalize(format(addDays(baseDate, 2), 'eee', { locale })),
        Th: capitalize(format(addDays(baseDate, 3), 'eee', { locale })),
        Fr: capitalize(format(addDays(baseDate, 4), 'eee', { locale })),
        Sa: capitalize(format(addDays(baseDate, 5), 'eee', { locale })),
        Su: capitalize(format(addDays(baseDate, 6), 'eee', { locale })),
    };

    return schedule.replace(/\b(Mo|Tu|We|Th|Fr|Sa|Su)\b/g, (match) => days[match]);
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

function getFormattedPrefixAndText(key, prefix, value, subtype) {
    let formattedPrefix = prefix ?? key;
    let formattedValue = value;

    switch (key) {
        case 'ele':
            formattedValue = `${value} ${i18n?.t('m')}`;
            break;
        case 'width':
            formattedPrefix = i18n?.t('shared_string_width');
            break;
        case 'height':
            formattedPrefix = i18n?.t('shared_string_height');
            break;
        case 'depth':
        case 'seamark_height':
            formattedValue = `${value} ${i18n?.t('meter')}`;
            break;
        case 'distance':
            formattedValue = `${value} ${i18n?.t('km')}`;
            formattedPrefix = `${prefix} ${i18n?.t('distance')}`;
            break;
        case 'capacity':
            if (subtype === 'water_tower' || subtype === 'storage_tank') {
                formattedValue = `${value} ${i18n?.t('cubic_m')}`;
            }
            break;
        case 'maxweight':
            if (isInt(value)) {
                formattedValue = `${value} ${i18n?.t('metric_ton')}`;
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
        twitter: 'https://twitter.com/%s',
        ok: 'https://ok.ru/%s',
        telegram: 'https://t.me/%s',
        flickr: 'https://flickr.com/%s',
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
    tagObj.hiddenUrl = wikiParams.url;
    tagObj.isUrl = true;
    tagObj.textPrefix = wikiParams.prefix;

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
        if (!value.startsWith('http://')) {
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
        key === 'image' ||
        key === 'mapillary' ||
        key === 'subway_region' ||
        key === 'note' ||
        key === 'lang_yes' ||
        key === WIKIDATA ||
        key === WIKIMEDIA_COMMONS ||
        key.startsWith('name:') ||
        key.includes(ROUTE)
    );
}

const WptTagsProvider = {
    getWptTags,
};
export default WptTagsProvider;
