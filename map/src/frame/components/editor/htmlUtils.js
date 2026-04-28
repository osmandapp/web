/**
 * Converts legacy plain text to HTML for loading into the rich text editor.
 * Used only for backward compatibility with descriptions saved before rich text was introduced.
 *
 * - Already-HTML strings (starting with '<') are returned as-is.
 * - Double (or more) newlines → paragraph breaks <p>
 * - Single newlines within a paragraph → <br>
 */
export function textToHTML(text) {
    if (!text) return '';
    if (text.trimStart().startsWith('<')) return text;

    return text
        .split(/\n{2,}/)
        .map((para) => `<p>${para.replaceAll('\n', '<br>')}</p>`)
        .join('');
}

/**
 * Strips HTML tags and converts block-level elements to newlines.
 * Used to generate plain-text previews from rich text HTML.
 *
 * Handles: <p>, <h1–h6>, <li>, <blockquote>, <br>
 */
export function htmlToText(html) {
    if (!html) return '';

    return html
        .replaceAll(/<\/p>/gi, '\n')
        .replaceAll(/<\/h[1-6]>/gi, '\n')
        .replaceAll(/<\/li>/gi, '\n')
        .replaceAll(/<\/blockquote>/gi, '\n')
        .replaceAll(/<br\s*\/?>/gi, '\n')
        .replaceAll(/<[^>]+>/g, '')
        .replace(/\n+$/, '')
        .trim();
}

/**
 * Returns plain text with collapsed whitespace — useful for search and comparison.
 */
export function stripHtml(html) {
    return htmlToText(html).replace(/\s+/g, ' ').trim();
}
