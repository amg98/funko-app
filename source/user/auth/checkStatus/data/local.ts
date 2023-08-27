import {useCallback, useContext} from 'react';
import {AuthData, MMKVContext, MMKVKeys} from '../../../../common/data/mmkv';
import {useQueryClient} from 'react-query';

export const useLocalDataSource = () => {
  const mmkv = useContext(MMKVContext);
  const client = useQueryClient();

  const removeAuthData = useCallback(() => {
    mmkv.delete(MMKVKeys.AuthData);
    client.clear();
  }, [client, mmkv]);

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
