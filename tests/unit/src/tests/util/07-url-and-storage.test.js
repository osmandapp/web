import { createUrlParams, decodeString, encodeString, isToday, isYesterday, truncateText } from '@map/util/Utils';
import { getFileStorage, updateFileStorage, GPX } from '@map/manager/GlobalManager';
import { SHARE_TYPE } from '@map/menu/share/shareConstants';

test('a file name survives the trip through the url', () => {
    const name = 'Папка/Трек №1 (2026).gpx';

    expect(decodeString(encodeString(name))).toBe(name);
    expect(encodeString(name)).toMatch(/^[A-Za-z0-9+/=]+$/);

    jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(encodeString(null)).toBeNull();
    expect(decodeString('not base64!')).toBeNull();
});

test('the query string keeps commas, colons and semicolons readable', () => {
    expect(createUrlParams({ pin: '50.45,30.52', time: '12:00', list: 'a;b' })).toBe(
        '?pin=50.45,30.52&time=12:00&list=a;b'
    );
    expect(createUrlParams({ q: 'a b&c' })).toBe('?q=a+b%26c');
    expect(createUrlParams({})).toBe('');
});

test('today and yesterday are calendar days, also across a month', () => {
    jest.useFakeTimers().setSystemTime(new Date(2026, 9, 1, 0, 30)); // 1 October, half past midnight

    expect(isToday(new Date(2026, 9, 1, 23, 59))).toBe(true);
    expect(isToday(new Date(2026, 8, 30, 23, 59))).toBe(false);
    expect(isYesterday(new Date(2026, 8, 30, 0, 0))).toBe(true);
    expect(isYesterday(new Date(2025, 8, 30))).toBe(false);

    jest.useRealTimers();
    expect(truncateText('a long name', 6)).toBe('a long...');
    expect(truncateText('short', 6)).toBe('short');
});

test('shared tracks and own tracks live in different storages', () => {
    const ctx = {
        gpxFiles: { 'Own.gpx': { name: 'Own.gpx' } },
        shareWithMeFiles: { tracks: { 'Shared.gpx': { name: 'Shared.gpx' } } },
        setGpxFiles: jest.fn((update) => (ctx.gpxFiles = update(ctx.gpxFiles))),
        setShareWithMeFiles: jest.fn((update) => (ctx.shareWithMeFiles = update(ctx.shareWithMeFiles))),
    };

    expect(getFileStorage({ ctx, smartf: null, type: GPX })).toBe(ctx.gpxFiles);
    expect(getFileStorage({ ctx, smartf: { type: SHARE_TYPE }, type: GPX })).toBe(ctx.shareWithMeFiles.tracks);
    expect(getFileStorage({ ctx, smartf: null, type: 'FAVOURITES' })).toBeNull();

    updateFileStorage({ ctx, smartf: null, type: GPX, file: { name: 'New.gpx' } });
    updateFileStorage({ ctx, smartf: { type: SHARE_TYPE }, type: GPX, file: { name: 'Shared.gpx', url: 'x' } });

    expect(Object.keys(ctx.gpxFiles)).toEqual(['Own.gpx', 'New.gpx']);
    expect(ctx.shareWithMeFiles.tracks['Shared.gpx'].url).toBe('x');
    expect(Object.keys(ctx.gpxFiles)).not.toContain('Shared.gpx');
});
