import { getLanguageName } from '@map/util/LanguageDisplayName';
import { findTranslationFolder, getWikiLang, normalizeLang } from '@map/util/lang';

describe('findTranslationFolder', () => {
    test('a folder name is used as is', () => {
        expect(findTranslationFolder('uk')).toBe('uk');
        expect(findTranslationFolder('es-rAR')).toBe('es-rAR');
        expect(findTranslationFolder('b+sr+Latn')).toBe('b+sr+Latn');
    });

    test('a BCP 47 code finds its android-named folder', () => {
        expect(findTranslationFolder('es-AR')).toBe('es-rAR');
        expect(findTranslationFolder('en-GB')).toBe('en-rGB');
        expect(findTranslationFolder('pt-BR')).toBe('pt-rBR');
        expect(findTranslationFolder('sr-Latn')).toBe('b+sr+Latn');
        expect(findTranslationFolder('be-BY')).toBe('b+be+Latn');
    });

    test('a region without its own folder falls back to the base language', () => {
        expect(findTranslationFolder('uk-UA')).toBe('uk');
        expect(findTranslationFolder('ru-RU')).toBe('ru');
        expect(findTranslationFolder('en-US')).toBe('en');
        expect(findTranslationFolder('es-419')).toBe('es');
    });

    test('unknown or empty input falls back to english', () => {
        expect(findTranslationFolder('zzz')).toBe('en');
        expect(findTranslationFolder(null)).toBe('en');
        expect(findTranslationFolder(undefined)).toBe('en');
    });
});

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

describe('getWikiLang', () => {
    test('a region or script is dropped', () => {
        expect(getWikiLang('ru')).toBe('ru');
        expect(getWikiLang('es-rAR')).toBe('es');
        expect(getWikiLang('pt-BR')).toBe('pt');
        expect(getWikiLang('b+sr+Latn')).toBe('sr');
        expect(getWikiLang('b+be+Latn')).toBe('be');
        expect(getWikiLang('zh-rTW')).toBe('zh');
    });

    test('android codes become wikipedia codes', () => {
        expect(getWikiLang('iw')).toBe('he');
        expect(getWikiLang('in')).toBe('id');
        expect(getWikiLang('nb')).toBe('no');
        expect(getWikiLang('yue')).toBe('zh');
    });

    test('empty input falls back to english', () => {
        expect(getWikiLang(null)).toBe('en');
        expect(getWikiLang(undefined)).toBe('en');
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
