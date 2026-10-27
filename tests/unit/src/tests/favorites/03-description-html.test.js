import {
    htmlToPlainText,
    htmlToText,
    plainTextToHTML,
    sanitizeHtml,
    textToHTML,
} from '@map/frame/components/editor/htmlUtils';

const LINK = '<a target="_blank" rel="noopener noreferrer nofollow" href="http://www.google.com">';

test('a description link keeps its text with spaces and its href', () => {
    // osmandapp/web#2036: the link text with a space was cut together with the href
    expect(sanitizeHtml(`<p>${LINK}Google Search</a></p>`)).toBe(`<p>${LINK}Google Search</a></p>`);
    expect(sanitizeHtml(`<p>Click to open ${LINK}Google</a></p>`)).toBe(`<p>Click to open ${LINK}Google</a></p>`);
});

test('a description keeps only what the editor writes', () => {
    expect(sanitizeHtml('<p onclick="alert(1)">Hi <b>there</b><script>alert(1)</script></p>')).toBe(
        '<p>Hi <strong>there</strong></p>'
    );
    expect(sanitizeHtml('<p><a href="javascript:alert(1)">x</a></p>')).toBe('<p>x</p>');
    expect(sanitizeHtml('<iframe src="https://example.com"></iframe><p>text</p>')).toBe('<p>text</p>');
});

test('a plain text description from the phone keeps its paragraphs and line breaks', () => {
    expect(sanitizeHtml(textToHTML('first line\nsecond line\n\nnext paragraph'))).toBe(
        '<p>first line<br>second line</p><p>next paragraph</p>'
    );
    expect(sanitizeHtml(textToHTML(''))).toBe('');
});

test('a description preview shows characters, not their html entities', () => {
    expect(htmlToText('<p>Tom &amp; Jerry</p><p>a &lt;b&gt; tag</p>')).toBe('Tom & Jerry\na <b> tag');
    expect(htmlToText('depth < 5 m and > 2 m')).toBe('depth < 5 m and > 2 m');
    expect(htmlToText('<p>&nbsp;</p>')).toBe('');
    expect(htmlToText('<p>a&nbsp;b &quot;c&quot;</p>')).toBe('a b "c"');
});

test('an edited wiki description is saved as plain text', () => {
    expect(htmlToPlainText('<p>Tom &amp; Jerry</p><p>a &lt; b<br>next line</p>')).toBe(
        'Tom & Jerry\n\na < b\nnext line'
    );
    expect(htmlToPlainText('<p>Rhine <strong>river</strong></p>')).toBe('Rhine river');
    expect(htmlToPlainText('<p>Rhine&nbsp;&nbsp;river</p>')).toBe('Rhine  river');
    expect(htmlToPlainText('<p></p>')).toBe('');
    expect(htmlToPlainText('')).toBe('');
});

test('a plain wiki description survives a round trip through the editor', () => {
    const roundTrip = (text) => htmlToPlainText(sanitizeHtml(plainTextToHTML(text)));

    expect(roundTrip('Cafe <Old Town> & bar')).toBe('Cafe <Old Town> & bar');
    expect(roundTrip('<3 km from the center')).toBe('<3 km from the center');
    expect(roundTrip('Para one\n\nPara two\nnext line')).toBe('Para one\n\nPara two\nnext line');
    expect(plainTextToHTML('')).toBe('');
});
