import {useCallback, useContext} from 'react';
import {AuthData, MMKVContext, MMKVKeys} from '../../../../common/data/mmkv';
import {AppError} from '../../../../common/domain/AppError';
import {t} from 'i18next';
import {useQueryClient} from 'react-query';
import {QUERIES} from '../../../../common/data/reactQuery';
import {Me} from '../domain/me';

type SaveAuthDataInput = {
  expiresIn: string;
  idToken: string;
  refreshToken: string;
  rememberMe: boolean;
};

type SaveUserDataInput = {
  id: string;
  name: string;
  surname: string;
  avatar: string | null;
};

export const useSignInLocalDataSource = () => {
  const mmkv = useContext(MMKVContext);
  const client = useQueryClient();

  const saveAuthData = useCallback(
    ({expiresIn, idToken, refreshToken, rememberMe}: SaveAuthDataInput) => {
      const expirationDate = new Date();
      expirationDate.setSeconds(
        expirationDate.getSeconds() + parseInt(expiresIn, 10),
      );

      try {
        const authData: AuthData = {
          expirationDate: expirationDate.toISOString(),
          idToken,
          refreshToken,
          rememberMe,
        };
        mmkv.set(MMKVKeys.AuthData, JSON.stringify(authData));
      } catch (error) {
        throw new AppError(t('alert/unknown-error'));
      }
    },
    [mmkv],
  );

  const saveUserData = useCallback(
    ({id, name, surname, avatar}: SaveUserDataInput) => {
      client.setQueryData<Me>(QUERIES.Me, {id, name, surname, avatar});
    },
    [client],
  );

  return {
    saveAuthData,
    saveUserData,
  };
};
