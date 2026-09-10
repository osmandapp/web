// i18n itself pulls the whole translation setup: tests only need the key and the fallback.
const i18n = {
    language: 'en',
    changeLanguage: jest.fn(),
    t: (key, fallback) => fallback ?? key,
};

module.exports = { __esModule: true, default: i18n, ...i18n };
