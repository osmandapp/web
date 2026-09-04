import {
    hasAlpha,
    hexToRgba,
    hsvToRgb,
    numberToRgba,
    parseColorToRgba,
    parseCssRgb,
    parseHexAlphaLast,
    parseRgbaChannels,
    parseShortHex,
    rgbToHsv,
    toColorString,
} from '@map/util/ColorUtil';

describe('parseColorToRgba', () => {
    test('opaque #rrggbb', () => {
        expect(parseColorToRgba('#4caf50')).toEqual({ r: 76, g: 175, b: 80, a: 255 });
    });

    test('hash is optional', () => {
        expect(parseColorToRgba('4caf50')).toEqual(parseColorToRgba('#4caf50'));
    });

    test('uppercase', () => {
        expect(parseColorToRgba('#4CAF50')).toEqual({ r: 76, g: 175, b: 80, a: 255 });
    });

    test('OsmAnd alpha-first #aarrggbb', () => {
        expect(parseColorToRgba('#804caf50')).toEqual({ r: 76, g: 175, b: 80, a: 128 });
    });

    test('empty value is opaque black', () => {
        expect(parseColorToRgba(null)).toEqual({ r: 0, g: 0, b: 0, a: 255 });
        expect(parseColorToRgba('')).toEqual({ r: 0, g: 0, b: 0, a: 255 });
    });
});

describe('toColorString', () => {
    test('opaque color has no alpha byte', () => {
        expect(toColorString(76, 175, 80)).toBe('#4caf50');
        expect(toColorString(76, 175, 80, 255)).toBe('#4caf50');
    });

    test('alpha goes first, OsmAnd style', () => {
        expect(toColorString(76, 175, 80, 128)).toBe('#804caf50');
    });

    test('single-digit channels are padded', () => {
        expect(toColorString(0, 1, 2)).toBe('#000102');
        expect(toColorString(0, 1, 2, 3)).toBe('#03000102');
    });

    test('round-trip with parseColorToRgba', () => {
        for (const color of ['#4caf50', '#000000', '#ffffff', '#804caf50', '#00ffffff']) {
            const { r, g, b, a } = parseColorToRgba(color);
            expect(toColorString(r, g, b, a)).toBe(color);
        }
    });
});

describe('hasAlpha', () => {
    test('true only for a transparent color', () => {
        expect(hasAlpha('#804caf50')).toBe(true);
        expect(hasAlpha('#ff4caf50')).toBe(false);
        expect(hasAlpha('#4caf50')).toBe(false);
        expect(hasAlpha(null)).toBe(false);
        expect(hasAlpha('')).toBe(false);
    });
});

describe('hexToRgba', () => {
    test('opaque color is plain rgb()', () => {
        expect(hexToRgba('#4caf50')).toBe('rgb(76 175 80)');
        expect(hexToRgba('#ff4caf50')).toBe('rgb(76 175 80)');
    });

    test('transparent color carries alpha as percent', () => {
        expect(hexToRgba('#804caf50')).toBe('rgb(76 175 80 / 50.2%)');
        expect(hexToRgba('#004caf50')).toBe('rgb(76 175 80 / 0%)');
    });
});

describe('numberToRgba', () => {
    test('packed 0xAARRGGBB', () => {
        expect(numberToRgba(0xff4caf50)).toBe('rgb(76 175 80)');
        expect(numberToRgba(0x804caf50)).toBe('rgb(76 175 80 / 50.2%)');
    });

    test('negative int is read as unsigned', () => {
        expect(numberToRgba(-15679248)).toBe('rgb(16 192 240)');
    });
});

describe('rgbToHsv', () => {
    test('primary colors', () => {
        expect(rgbToHsv(255, 0, 0)).toEqual({ h: 0, s: 1, v: 1 });
        expect(rgbToHsv(0, 255, 0)).toEqual({ h: 120, s: 1, v: 1 });
        expect(rgbToHsv(0, 0, 255)).toEqual({ h: 240, s: 1, v: 1 });
    });

    test('achromatic colors', () => {
        expect(rgbToHsv(0, 0, 0)).toEqual({ h: 0, s: 0, v: 0 });
        expect(rgbToHsv(255, 255, 255)).toEqual({ h: 0, s: 0, v: 1 });
        expect(rgbToHsv(128, 128, 128)).toEqual({ h: 0, s: 0, v: 128 / 255 });
    });

    test('hue wraps past red instead of going negative', () => {
        expect(rgbToHsv(255, 0, 51).h).toBe(348);
    });
});

describe('hsvToRgb', () => {
    test('every hue sector', () => {
        expect(hsvToRgb(0, 1, 1)).toEqual({ r: 255, g: 0, b: 0 });
        expect(hsvToRgb(60, 1, 1)).toEqual({ r: 255, g: 255, b: 0 });
        expect(hsvToRgb(120, 1, 1)).toEqual({ r: 0, g: 255, b: 0 });
        expect(hsvToRgb(180, 1, 1)).toEqual({ r: 0, g: 255, b: 255 });
        expect(hsvToRgb(240, 1, 1)).toEqual({ r: 0, g: 0, b: 255 });
        expect(hsvToRgb(300, 1, 1)).toEqual({ r: 255, g: 0, b: 255 });
        expect(hsvToRgb(360, 1, 1)).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('saturation and value', () => {
        expect(hsvToRgb(0, 0, 1)).toEqual({ r: 255, g: 255, b: 255 });
        expect(hsvToRgb(0, 0, 0)).toEqual({ r: 0, g: 0, b: 0 });
        expect(hsvToRgb(0, 1, 0.5)).toEqual({ r: 128, g: 0, b: 0 });
    });

    test('round-trip rgb → hsv → rgb', () => {
        const colors = [
            [76, 175, 80],
            [255, 0, 0],
            [0, 0, 0],
            [255, 255, 255],
            [18, 52, 86],
            [1, 2, 3],
        ];
        for (const [r, g, b] of colors) {
            const { h, s, v } = rgbToHsv(r, g, b);
            expect(hsvToRgb(h, s, v)).toEqual({ r, g, b });
        }
    });
});

describe('parseCssRgb', () => {
    test('rgb() without alpha', () => {
        expect(parseCssRgb('rgb(255, 128, 0)')).toEqual({ r: 255, g: 128, b: 0, a: 255 });
        expect(parseCssRgb('  RGB( 255 ,128,0 )  ')).toEqual({ r: 255, g: 128, b: 0, a: 255 });
    });

    test('alpha as 0-1 float', () => {
        expect(parseCssRgb('rgba(255,128,0,0.5)')).toEqual({ r: 255, g: 128, b: 0, a: 128 });
        expect(parseCssRgb('rgba(255,128,0,1)')).toEqual({ r: 255, g: 128, b: 0, a: 255 });
        expect(parseCssRgb('rgba(255,128,0,0)')).toEqual({ r: 255, g: 128, b: 0, a: 0 });
    });

    test('alpha as 0-255 integer', () => {
        expect(parseCssRgb('rgba(255,128,0,128)')).toEqual({ r: 255, g: 128, b: 0, a: 128 });
    });

    test('alpha as percent, with a slash separator', () => {
        expect(parseCssRgb('rgba(255,128,0,50%)')).toEqual({ r: 255, g: 128, b: 0, a: 128 });
        expect(parseCssRgb('rgb(255,128,0 / 50%)')).toEqual({ r: 255, g: 128, b: 0, a: 128 });
    });

    test('not a css color', () => {
        expect(parseCssRgb('#4caf50')).toBeNull();
        expect(parseCssRgb('rgb(255, 128)')).toBeNull();
        expect(parseCssRgb('hsl(120, 50%, 50%)')).toBeNull();
        expect(parseCssRgb('')).toBeNull();
    });

    test('channels out of range', () => {
        expect(parseCssRgb('rgb(256, 0, 0)')).toBeNull();
    });
});

describe('parseRgbaChannels', () => {
    test('three or four channels', () => {
        expect(parseRgbaChannels('255, 128, 0')).toEqual({ r: 255, g: 128, b: 0, a: 255 });
        expect(parseRgbaChannels('255,128,0,128')).toEqual({ r: 255, g: 128, b: 0, a: 128 });
    });

    test('wrong shape', () => {
        expect(parseRgbaChannels('255, 128')).toBeNull();
        expect(parseRgbaChannels('255,128,0,128,7')).toBeNull();
        expect(parseRgbaChannels('255, red, 0')).toBeNull();
        expect(parseRgbaChannels('')).toBeNull();
    });

    test('channels out of range', () => {
        expect(parseRgbaChannels('300, 0, 0')).toBeNull();
        expect(parseRgbaChannels('-1, 0, 0')).toBeNull();
    });
});

describe('parseHexAlphaLast', () => {
    test('css order, alpha last', () => {
        expect(parseHexAlphaLast('4caf50')).toEqual({ r: 76, g: 175, b: 80, a: 255 });
        expect(parseHexAlphaLast('4caf5080')).toEqual({ r: 76, g: 175, b: 80, a: 128 });
    });

    test('same 8 chars are read differently from the OsmAnd order', () => {
        expect(parseHexAlphaLast('804caf50')).not.toEqual(parseColorToRgba('804caf50'));
    });
});

describe('parseShortHex', () => {
    test('each channel is doubled', () => {
        expect(parseShortHex('f00')).toEqual({ r: 255, g: 0, b: 0, a: 255 });
        expect(parseShortHex('4a5')).toEqual({ r: 68, g: 170, b: 85, a: 255 });
    });
});
