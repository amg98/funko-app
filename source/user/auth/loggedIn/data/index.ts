import {useContext} from 'react';
import {MMKVContext, MMKVKeys} from '../../../../common/data/mmkv';
import {useMMKVString} from 'react-native-mmkv';

export const useIsLoggedIn = () => {
  const mmkv = useContext(MMKVContext);

  const [authData] = useMMKVString(MMKVKeys.AuthData, mmkv);

  return !!authData;
};
