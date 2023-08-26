import {createContext} from 'react';
import {MMKV} from 'react-native-mmkv';

export const MMKVContext = createContext(new MMKV());

export type AuthData = {
  idToken: string;
  refreshToken: string;
  expirationDate: string;
  rememberMe: boolean;
};

export const MMKVKeys = {
  AuthData: 'auth-data',
};
