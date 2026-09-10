import { getLanguageName } from '@map/util/LanguageDisplayName';
import { normalizeLang } from '@map/util/lang';

describe('normalizeLang', () => {
    test('plain codes are kept', () => {
        expect(normalizeLang('en')).toBe('en');
        expect(normalizeLang('en-US')).toBe('en-US');
        expect(normalizeLang('uk')).toBe('uk');
    });

    test('known aliases', () => {
        expect(normalizeLang('yue')).toBe('zhyue');
        expect(normalizeLang('b+be+Latn')).toBe('be-BY');
    });

    test('modern android qualifiers lose the b+ prefix', () => {
        expect(normalizeLang('b+sr+Cyrl')).toBe('sr-Cyrl');
        expect(normalizeLang('b+zh+Hant')).toBe('zh-Hant');
    });

    test('classic android region qualifiers lose the r', () => {
        expect(normalizeLang('en-rGB')).toBe('en-GB');
        expect(normalizeLang('pt-rBR')).toBe('pt-BR');
    });

    test('invalid input falls back to en-US', () => {
        expect(normalizeLang(null)).toBe('en-US');
        expect(normalizeLang(undefined)).toBe('en-US');
        expect(normalizeLang('')).toBe('en-US');
        expect(normalizeLang(42)).toBe('en-US');
    });
});

describe('getLanguageName', () => {
    test('language codes become english names', () => {
        expect(getLanguageName('en')).toBe('English');
        expect(getLanguageName('uk')).toBe('Ukrainian');
        expect(getLanguageName('DE')).toBe('German');
    });

    test('a region is part of the name', () => {
        expect(getLanguageName('en-US')).toBe('American English');
        expect(getLanguageName('uk-UA')).toBe('Ukrainian (Ukraine)');
    });

    test('an invalid tag is returned as is', () => {
        expect(getLanguageName('uk_UA')).toBe('uk_UA');
    });

    test('empty input is an empty string', () => {
        expect(getLanguageName('')).toBe('');
        expect(getLanguageName(null)).toBe('');
    });

    test('an unknown code is returned as is', () => {
        expect(getLanguageName('zzz')).toBe('zzz');
    });
});
