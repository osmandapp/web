import supportedLanguages from '../resources/translations/supportedLanguages.json';

const LANG_TRANSFORM_MAP = {
    yue: 'zhyue',
    'b+be+Latn': 'be-BY',
};

const WIKI_LANG_MAP = {
    iw: 'he',
    in: 'id',
    nb: 'no',
    zhyue: 'zh',
};
export const WIKI_DEFAULT_LANG = 'en';

// folders use Android qualifiers (es-rAR, b+sr+Latn), the browser and i18next use BCP 47 (es-AR, sr-Latn)
export function findTranslationFolder(lang) {
    if (supportedLanguages.includes(lang)) {
        return lang;
    }
    const normalized = normalizeLang(lang);
    const baseLang = normalized.split(/[-_]/)[0];

    return (
        supportedLanguages.find((folder) => normalizeLang(folder) === normalized) ??
        supportedLanguages.find((folder) => folder === baseLang) ??
        'en'
    );
}

/**
 * Normalizes a given Android resource qualifiers code string into a standardized format,
 * typically conforming to or closely aligning with BCP 47 standards (e.g., 'en-US').
 *
 * This function handles several common non-standard formats, including:
 * 1. Defaulting for null/invalid inputs.
 * 2. Lookup against a transformation map (LANG_TRANSFORM_MAP) for known aliases (e.g., b+be+Latn -> be-BY).
 * 3. Cleaning up modern Android resource qualifiers (b+sr+Cyrl -> sr-Cyrl).
 * 4. Converting classic Android regional qualifiers (en-rGB -> en-GB).
 *
 * @param {string | null | undefined} lang The raw language string or locale code to normalize.
 * @returns {string} The normalized locale code, or 'en-US' if the input is invalid.
 */
export function normalizeLang(lang) {
    if (!lang || typeof lang !== 'string') {
        return 'en-US';
    }

    let normalized = LANG_TRANSFORM_MAP[lang] ?? lang;
    normalized = normalized.startsWith('b+') ? normalized.slice(2) : normalized;
    normalized = normalized.replace('+', '-');
    const pattern = /(-r)([A-Z]{2})$/i;
    normalized = normalized.replace(pattern, (match, rPrefix, regionCode) => '-' + regionCode);

    return normalized;
}

export function getWikiLang(lang) {
    const baseLang = normalizeLang(lang).split(/[-_]/)[0];

    return WIKI_LANG_MAP[baseLang] ?? baseLang;
}

export function getWikiLangs(lang) {
    return [...new Set([getWikiLang(lang), WIKI_DEFAULT_LANG])].join(',');
}
