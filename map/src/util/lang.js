const LANG_TRANSFORM_MAP = {
    yue: 'zhyue',
    'b+be+Latn': 'be-BY',
};

export function normalizeLang(lang) {
    if (!lang || typeof lang !== 'string') {
        return 'en-US';
    }

    let normalized = LANG_TRANSFORM_MAP[lang] ?? lang;
    normalized = normalized.startsWith('b+') ? normalized.slice(2) : normalized;
    normalized = normalized.replace('+', '-');

    // Convert Android-specific locales like en-rGB → en-GB
    const pattern = /(-r)([A-Z]{2})$/i;
    normalized = normalized.replace(pattern, (match, rPrefix, regionCode) => '-' + regionCode);

    return normalized;
}

