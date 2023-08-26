import type dictionary from './languages/es-ES';
import type {availableLanguages, languages} from '.';

export type Dictionary = typeof dictionary;

declare module 'i18next' {
  type DictionaryKey = typeof dictionary;
  type Language = keyof typeof availableLanguages;
}

export type Language = keyof typeof availableLanguages;

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'es_ES';
    resources: typeof languages;
  }
}

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
    defaultNS: 'es_ES';
    resources: typeof languages;
  }
}
