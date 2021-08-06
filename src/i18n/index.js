/* eslint-disable camelcase */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// import en_GB from './locales/en_GB.json';
import ua_UA from './locales/ua_UA.json';
import moscal_RU from './locales/moscal_RU.json';

const resources = {
  // en: en_GB,
  ua: ua_UA,
  ru: moscal_RU,
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: 'ua',
    fallbackLng: 'ua',

    keySeparator: '.',
    nsSeparator: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
