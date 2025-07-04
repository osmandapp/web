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
            order: ['navigator', 'localStorage'],
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
