import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './resources/translations/en/translation.json';
import enWebTranslation from './resources/translations/en/web-translation.json';
import { findTranslationFolder, normalizeLang } from './util/lang';

const resources = {
    en: {
        translation: enTranslation,
        web: enWebTranslation,
    },
};

const translationParsePlugin = {
    type: 'postProcessor',
    name: 'jsonParse',
    process: function (value) {
        try {
            return value.replace(/\\/g, '');
        } catch (e) {
            return value;
        }
    },
};

// the regional folders (es-rAR, en-rGB) carry only the shared strings, the web strings come from the base language
async function importWebTranslation(folder) {
    const baseFolder = findTranslationFolder(normalizeLang(folder).split(/[-_]/)[0]);
    const candidates = baseFolder === folder ? [folder] : [folder, baseFolder];
    for (const candidate of candidates) {
        try {
            return (await import(`./resources/translations/${candidate}/web-translation.json`)).default;
        } catch {}
    }
    if (process.env.NODE_ENV === 'development') {
        console.error(`Could not load web-translation.json for language: ${folder}`);
    }

    return enWebTranslation;
}

export async function handleLanguageChange({ lng, folderLng = null }) {
    const folder = folderLng ?? lng;
    try {
        const translation = await import(`./resources/translations/${folder}/translation.json`);
        if (translation) {
            i18n.addResourceBundle(lng, 'translation', translation.default, true, true);
        }
    } catch (error) {
        if (process.env.NODE_ENV === 'development') {
            console.error(`Could not load translation.json for language: ${lng}`);
        }
    }

    i18n.addResourceBundle(lng, 'web', await importWebTranslation(folder), true, true);
    await i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
}

i18n.use(translationParsePlugin)
    .use({
        type: 'languageDetector',
        async: true,
        detect: (callback) => {
            const detector = new LanguageDetector();
            const folder = findTranslationFolder([].concat(detector.detect())[0]);
            const detectedLanguage = normalizeLang(folder);

            return import(`./resources/translations/${folder}/translation.json`)
                .then((translation) => {
                    resources[detectedLanguage] = {
                        translation: translation.default,
                    };
                    return importWebTranslation(folder).then((webTranslation) => {
                        resources[detectedLanguage].web = webTranslation;
                    });
                })
                .then(() => {
                    callback(detectedLanguage);
                })
                .catch((error) => {
                    if (i18n.options.debug) {
                        console.error('Failed to load translation file', error);
                    }
                    // Load English as fallback for both translations
                    return import(`./resources/translations/en/translation.json`)
                        .then((defaultTranslation) => {
                            resources['en'] = {
                                translation: defaultTranslation.default,
                            };

                            return import(`./resources/translations/en/web-translation.json`).then(
                                (defaultWebTranslation) => {
                                    resources['en'].web = defaultWebTranslation.default;
                                    callback('en');
                                }
                            );
                        })
                        .catch((error) => {
                            console.error('Failed to load default English translation files', error);
                            callback('en');
                        });
                });
        },
        init: () => {},
    })
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        // debug: process.env.NODE_ENV === 'development',
        interpolation: {
            escapeValue: false,
        },
        resources,
        detection: {
            order: ['localStorage', 'navigator'],
            lookupQuerystring: 'lng',
            lookupCookie: 'i18next',
            lookupLocalStorage: 'i18nextLng',
            lookupFromPathIndex: 0,
            lookupFromSubdomainIndex: 0,
            caches: ['localStorage'],
            checkWhitelist: true,
        },
        postProcess: ['jsonParse'],
    });

export default i18n;
