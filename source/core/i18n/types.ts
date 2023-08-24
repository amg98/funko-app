import type dictionary from './languages/en-US';
import type {availableLanguages, languages} from '.';

export type Dictionary = typeof dictionary;

declare module 'i18next' {
  type DictionaryKey = typeof dictionary;
  type Language = keyof typeof availableLanguages;
}

export type Language = keyof typeof availableLanguages;

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en_US';
    resources: typeof languages;
  }
}

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
    defaultNS: 'en_US';
    resources: typeof languages;
  }
}
