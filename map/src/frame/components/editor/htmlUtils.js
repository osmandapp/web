export function textToHTML(text) {
    if (!text) return '';
    if (text.trimStart().startsWith('<')) return text;

    return text
        .split('\n')
        .map((line) => `<p>${line || '<br>'}</p>`)
        .join('');
}

export function htmlToText(html) {
    if (!html) return '';

    return html
        .replaceAll(/<\/p>/gi, '\n')
        .replaceAll(/<br\s*\/?>/gi, '\n')
        .replaceAll(/<[^>]+>/g, '')
        .replace(/\n+$/, '')
        .trim();
}

export function stripHtml(html) {
    return htmlToText(html).replaceAll(/\s+/g, ' ').trim();
}
