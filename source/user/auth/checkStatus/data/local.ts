import {useCallback, useContext} from 'react';
import {AuthData, MMKVContext, MMKVKeys} from '../../../../common/data/mmkv';
import {useRealm} from '../../../../common/data/realm';

export const useLocalDataSource = () => {
  const mmkv = useContext(MMKVContext);
  const realm = useRealm();

  const removeAuthData = useCallback(() => {
    mmkv.delete(MMKVKeys.AuthData);
    realm.write(() => {
      realm.deleteAll();
    });
  }, [mmkv, realm]);

  const setAuthData = useCallback(
    (authData: AuthData) => {
      mmkv.set(MMKVKeys.AuthData, JSON.stringify(authData));
    },
    [mmkv],
  );

  const getAuthData = useCallback(() => {
    const data = mmkv.getString(MMKVKeys.AuthData);
    if (!data) {
      return null;
    }
    return JSON.parse(data) as AuthData;
  }, [mmkv]);

  return {
    removeAuthData,
    setAuthData,
    getAuthData,
  };
};
