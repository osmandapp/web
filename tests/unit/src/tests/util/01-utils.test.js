import {
    areSetsEqual,
    createUrlParams,
    decodeString,
    encodeString,
    formatMeters,
    getBearing,
    getDistance,
    isToday,
    isYesterday,
    quickNaNfix,
    sanitizedFileName,
    toHHMMSS,
    truncateText,
} from '@map/util/Utils';

const KYIV = [50.45, 30.523];

describe('getDistance', () => {
    test('same point is zero', () => {
        expect(getDistance(...KYIV, ...KYIV)).toBe(0);
    });

    test('one degree of latitude is about 111 km', () => {
        expect(getDistance(0, 0, 1, 0) / 1000).toBeCloseTo(111.2, 1);
    });

    test('symmetric', () => {
        expect(getDistance(...KYIV, 50.5, 30.6)).toBeCloseTo(getDistance(50.5, 30.6, ...KYIV), 6);
    });
});

describe('getBearing', () => {
    test('cardinal directions, clockwise from north', () => {
        expect(getBearing(0, 0, 1, 0)).toBeCloseTo(0, 6);
        expect(getBearing(0, 0, 0, 1)).toBeCloseTo(90, 6);
        expect(getBearing(0, 0, 0, -1)).toBeCloseTo(270, 6);
    });

    test('south is 180, never negative', () => {
        const bearing = getBearing(0, 0, -1, 0);
        expect(bearing).toBeCloseTo(180, 6);
        expect(bearing).toBeGreaterThanOrEqual(0);
    });
});

describe('formatMeters', () => {
    test('meters below a kilometer, rounded', () => {
        expect(formatMeters(0)).toBe('0 m');
        expect(formatMeters(1)).toBe('1 m');
        expect(formatMeters(999.4)).toBe('999 m');
    });

    test('kilometers with two decimals', () => {
        expect(formatMeters(1000)).toBe('1.00 km');
        expect(formatMeters(1500)).toBe('1.50 km');
        expect(formatMeters(12345)).toBe('12.35 km');
    });
});

describe('toHHMMSS', () => {
    test('milliseconds to hh:mm:ss', () => {
        expect(toHHMMSS(0)).toBe('00:00:00.00');
        expect(toHHMMSS(1000)).toBe('00:00:01.00');
        expect(toHHMMSS(61000)).toBe('00:01:01.00');
        expect(toHHMMSS(3661000)).toBe('01:01:01.00');
    });

    test('over ten hours keeps two digits', () => {
        expect(toHHMMSS(36000000)).toBe('10:00:00.00');
    });
});

describe('quickNaNfix', () => {
    test('the NaN marker of elevation becomes null', () => {
        expect(quickNaNfix('{"ele": 99999}')).toBe('{"ele":null}');
        expect(quickNaNfix('{"ele":99999.0}')).toBe('{"ele":null}');
    });

    test('bare NaN becomes null', () => {
        expect(quickNaNfix('{"ele":NaN,"lat": NaN}')).toBe('{"ele":null,"lat":null}');
    });

    test('infinite speeds become null', () => {
        expect(quickNaNfix('{"speed": Infinity,"avgSpeed":Infinity,"maxSpeed":Infinity}')).toBe(
            '{"speed":null,"avgSpeed":null,"maxSpeed":null}'
        );
    });

    test('valid json is untouched', () => {
        expect(quickNaNfix('{"ele":123,"speed":1.5}')).toBe('{"ele":123,"speed":1.5}');
    });
});

describe('sanitizedFileName', () => {
    test('illegal characters become spaces', () => {
        expect(sanitizedFileName('a/b?c<d>e:f*g|h"i')).toBe('a b c d e f g h i');
    });

    test('a slash is allowed in a favorite group', () => {
        expect(sanitizedFileName('a/b', true)).toBe('a/b');
    });

    test('newlines are dropped, not replaced', () => {
        expect(sanitizedFileName('Track\nname')).toBe('Trackname');
    });

    test('double spaces are collapsed and the result is trimmed', () => {
        expect(sanitizedFileName('  Track   name  ')).toBe('Track name');
    });

    test('windows reserved names and dot-only names', () => {
        expect(sanitizedFileName('con')).toBe('');
        expect(sanitizedFileName('..')).toBe('');
    });

    test('unicode survives', () => {
        expect(sanitizedFileName('Трек №1')).toBe('Трек №1');
    });

    test('cut at 255 bytes', () => {
        const name = 'a'.repeat(300);
        expect(sanitizedFileName(name)).toBe('a'.repeat(255));
    });

    test('a multi-byte character is never cut in half', () => {
        const name = 'я'.repeat(200); // 2 bytes each
        const result = sanitizedFileName(name);
        expect(result).not.toContain('\uFFFD');
        expect(new TextEncoder().encode(result).length).toBeLessThanOrEqual(255);
        expect(result).toBe('я'.repeat(127));
    });
});

describe('areSetsEqual', () => {
    test('same content', () => {
        const set = new Set([1, 2]);
        expect(areSetsEqual(set, set)).toBe(true);
        expect(areSetsEqual(new Set([1, 2]), new Set([2, 1]))).toBe(true);
    });

    test('different content or size', () => {
        expect(areSetsEqual(new Set([1, 2]), new Set([1, 3]))).toBe(false);
        expect(areSetsEqual(new Set([1]), new Set([1, 2]))).toBe(false);
        expect(areSetsEqual(null, new Set([1]))).toBe(false);
    });
});

describe('createUrlParams', () => {
    test('query string with a leading question mark', () => {
        expect(createUrlParams({ lat: 50.45, lon: 30.523 })).toBe('?lat=50.45&lon=30.523');
    });

    test('comma, colon and semicolon are kept readable', () => {
        expect(createUrlParams({ bbox: '1,2', time: '10:00', list: 'a;b' })).toBe('?bbox=1,2&time=10:00&list=a;b');
    });

    test('other characters are still escaped', () => {
        expect(createUrlParams({ name: 'Track name' })).toBe('?name=Track+name');
    });

    test('no params - no question mark', () => {
        expect(createUrlParams({})).toBe('');
        expect(createUrlParams({ q: '' })).toBe('?q=');
    });
});

describe('encodeString / decodeString', () => {
    test('round-trip, unicode included', () => {
        for (const value of ['Track', 'Трек №1 / 2', '', '{"a":1}']) {
            expect(decodeString(encodeString(value))).toBe(value);
        }
    });

    test('encoding a non-string returns null', () => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
        expect(encodeString(123)).toBeNull();
        expect(encodeString(null)).toBeNull();
    });

    test('decoding garbage returns null', () => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
        expect(decodeString('!!!not base64!!!')).toBeNull();
    });
});

describe('truncateText', () => {
    test('shorter than the limit is untouched', () => {
        expect(truncateText('Track', 10)).toBe('Track');
        expect(truncateText('Track', 5)).toBe('Track');
    });

    test('longer is cut and gets an ellipsis', () => {
        expect(truncateText('Track name', 5)).toBe('Track...');
    });
});

describe('isToday / isYesterday', () => {
    const DAY_MS = 24 * 60 * 60 * 1000;

    test('today', () => {
        expect(isToday(new Date())).toBe(true);
        expect(isYesterday(new Date())).toBe(false);
    });

    test('yesterday', () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1); // a calendar day, not 24 hours - dst days are shorter or longer
        expect(isYesterday(yesterday)).toBe(true);
        expect(isToday(yesterday)).toBe(false);
    });

    test('a week ago is neither', () => {
        const weekAgo = new Date(Date.now() - 7 * DAY_MS);
        expect(isToday(weekAgo)).toBe(false);
        expect(isYesterday(weekAgo)).toBe(false);
    });
});
