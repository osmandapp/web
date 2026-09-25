import { sanitizeHtml, textToHTML } from '@map/frame/components/editor/htmlUtils';

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
