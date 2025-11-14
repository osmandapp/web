import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './resources/translations/en/translation.json';
import enWebTranslation from './resources/translations/en/web-translation.json';

const resources = {
    en: {
        translation: enTranslation,
        web: enWebTranslation,
    },
};

const LANG_TRANSFORM_MAP = {
    "yue": "zhyue",
    "b+be+Latn": "be-BY"
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

export function normalizeLang(lang) {
    lang = LANG_TRANSFORM_MAP[lang] ?? lang;
    lang = lang.startsWith("b+") ? lang.slice(2) : lang;
    lang = lang.replace("+", "-");

    // removes the r, converting Android-specific locale format to standard BCP 47 locale format
    // en-rGB -> en-GB, es-rAR -> es-AR, es-rUS -> es-US
    const pattern = /(-r)([A-Z]{2})$/i;
    lang = lang.replace(pattern, (match, rPrefix, regionCode) => {
        return "-" + regionCode;
    });
    return lang;
}

export async function handleLanguageChange(lng) {
    try {
        const translation = await import(`./resources/translations/${lng}/translation.json`);
        if (translation) {
            i18n.addResourceBundle(lng, 'translation', translation.default, true, true);
        }
    } catch (error) {
        if (process.env.NODE_ENV === 'development') {
            console.error(`Could not load translation.json for language: ${lng}`);
        }
    }

    try {
        const webTranslation = await import(`./resources/translations/${lng}/web-translation.json`);
        if (webTranslation) {
            i18n.addResourceBundle(lng, 'web', webTranslation.default, true, true);
        }
    } catch (error) {
        if (process.env.NODE_ENV === 'development') {
            console.error(`Could not load web-translation.json for language: ${lng}`);
        }
    }
    await i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
}

i18n.use(translationParsePlugin)
    .use({
        type: 'languageDetector',
        async: true,
        detect: (callback) => {
            const detector = new LanguageDetector();
            const detectedLanguage = detector.detect();

            return import(`./resources/translations/${detectedLanguage}/translation.json`)
                .then((translation) => {
                    resources[detectedLanguage] = {
                        translation: translation.default,
                    };
                    return import(`./resources/translations/${detectedLanguage}/web-translation.json`)
                        .then((webTranslation) => {
                            resources[detectedLanguage].web = webTranslation.default;
                        })
                        .catch((error) => {
                            if (i18n.options.debug) {
                                console.error('Failed to load web translation file for', detectedLanguage, error);
                            }
                            return import(`./resources/translations/en/web-translation.json`)
                                .then((defaultWebTranslation) => {
                                    resources[detectedLanguage].web = defaultWebTranslation.default;
                                })
                                .catch((error) => {
                                    if (i18n.options.debug) {
                                        console.error('Failed to load default web translation file', error);
                                    }
                                });
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
