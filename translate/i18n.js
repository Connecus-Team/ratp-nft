import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import translationEn from './eng.json';
import translationKo from './ko.json';
import translationVn from './vn.json';

const resource = {
  vn: {
    translation: translationVn,
  },
  en: {
    translation: translationEn,
  },
  ko: {
    translation: translationKo,
  },
};

i18n.use(initReactI18next).init({
  resources: resource,
  lng: 'vn',
  fallbackLng: 'vn',

  debug: true,
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
