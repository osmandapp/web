import { generateHTML, generateJSON } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';

const EXTENSIONS = [StarterKit];

let textElement = null;

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

    const element = getTextElement();
    element.innerHTML = html
        .replaceAll(/<\/p>/gi, '\n')
        .replaceAll(/<\/h[1-6]>/gi, '\n')
        .replaceAll(/<\/li>/gi, '\n')
        .replaceAll(/<\/blockquote>/gi, '\n')
        .replaceAll(/<br\s*\/?>/gi, '\n')
        .replaceAll(/<\/?[a-z][^>]*>/gi, '');

    return element.value.replace(/\n+$/, '').trim();
}

/**
 * Returns plain text with collapsed whitespace — useful for search and comparison.
 */
export function stripHtml(html) {
    return htmlToText(html).replace(/\s+/g, ' ').trim();
}

/**
 * Keeps only the HTML the rich text editor itself produces (paragraphs, marks, lists, safe links);
 * every other tag, attribute and script is dropped.
 */
export function sanitizeHtml(html) {
    if (!html) return '';

    return generateHTML(generateJSON(html, EXTENSIONS), EXTENSIONS);
}

export function htmlToPlainText(html) {
    return htmlToText(html?.replaceAll(/<\/p>\s*<p>/gi, '</p>\n<p>'));
}

export function plainTextToHTML(text) {
    const element = getTextElement();
    element.textContent = text ?? '';

    return textToHTML(element.innerHTML);
}

function getTextElement() {
    if (!textElement) textElement = document.createElement('textarea');

    return textElement;
}
