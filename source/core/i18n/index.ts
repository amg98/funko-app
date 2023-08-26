import 'intl-pluralrules';
import type {Dictionary, Language} from './types';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import es_ES from './languages/es-ES';

const defaultLanguage: Language = 'es_ES';

export const availableLanguages = {es_ES};

export const languages = Object.entries(availableLanguages).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [`${key}`]: {
      translation: value,
    },
  }),
  {} as {
    [id in Language]: Dictionary;
  },
);

export const initI18N = () => {
  i18n.use(initReactI18next).init({
    resources: languages,
    lng: defaultLanguage,
  });
};
