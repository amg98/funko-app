import type dictionary from './languages/en-US';
import type {availableLanguages} from '.';

export type Dictionary = typeof dictionary;

declare module 'i18next' {
  type DictionaryKey = typeof dictionary;
  type Language = keyof typeof availableLanguages;
}

export type Language = keyof typeof availableLanguages;
