import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './resources/translations/en/translation.json';

const resources = {
    en: {
        translation: enTranslation,
    },
};

i18n.use({
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
                callback(detectedLanguage);
            })
            .catch((error) => {
                console.error('Failed to load translation file', error);
                callback('en');
            });
    },
    init: () => {},
})
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: process.env.NODE_ENV === 'development',
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
    });

export default i18n;
