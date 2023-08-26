import {useCallback, useContext} from 'react';
import {AuthData, MMKVContext, MMKVKeys} from '../../../../common/data/mmkv';
import {useRealm} from '../../../../common/data/realm';
import {RealmUser} from '../../../../common/data/realm/User';
import {AppError} from '../../../../common/domain/AppError';
import {t} from 'i18next';

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
  const realm = useRealm();

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
      try {
        realm.write(() => {
          realm.create<RealmUser>(RealmUser.schema.name, {
            id,
            name,
            surname,
            avatar,
            isLoggedUser: true,
          });
        });
      } catch (error) {
        console.log(error);
        throw new AppError(t('alert/unknown-error'));
      }
    },
    [realm],
  );

  return {
    saveAuthData,
    saveUserData,
  };
};
