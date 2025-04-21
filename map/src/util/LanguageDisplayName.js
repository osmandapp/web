let displayNames;

try {
    displayNames = new Intl.DisplayNames(['en'], { type: 'language' });
} catch (e) {
    displayNames = null;
}

export function getLanguageName(code) {
    if (!code) return '';

    try {
        const name = displayNames?.of(code.toLowerCase());
        if (name && name !== code) return name;

        const base = code.toLowerCase().split(/[-_]/)[0];
        const fallback = displayNames?.of(base);
        if (fallback && fallback !== base) return fallback;

        return code;
    } catch {
        return code;
    }
}
