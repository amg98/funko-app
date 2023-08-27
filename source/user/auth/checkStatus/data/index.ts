import {useCallback} from 'react';
import {fetchMe, useRemoteDataSource} from './remote';
import {useLocalDataSource} from './local';

export const useCheckAuthStatus = () => {
  const {checkTokenValid, refreshToken: handleRefreshToken} =
    useRemoteDataSource();
  const {removeAuthData, setAuthData, getAuthData, setMe} =
    useLocalDataSource();

  const checkAuthStatus = useCallback(async () => {
    try {
      const authData = getAuthData();
      if (!authData) {
        return;
      }

      if (!authData.rememberMe) {
        removeAuthData();
        return;
      }

      let meId: string;

      if (new Date(authData.expirationDate) < new Date()) {
        const {expiresIn, idToken, refreshToken, userId} =
          await handleRefreshToken(authData.refreshToken);
        const expirationDate = new Date();
        expirationDate.setSeconds(
          expirationDate.getSeconds() + parseInt(expiresIn, 10),
        );
        setAuthData({
          idToken,
          refreshToken,
          rememberMe: authData.rememberMe,
          expirationDate: expirationDate.toISOString(),
        });
        meId = userId;
      } else {
        const {userId} = await checkTokenValid(authData.idToken);
        meId = userId;
      }

      const me = await fetchMe(meId);
      setMe(me);
    } catch (error) {
      removeAuthData();
    }
  }, [
    checkTokenValid,
    getAuthData,
    handleRefreshToken,
    removeAuthData,
    setAuthData,
    setMe,
  ]);

  return {
    checkAuthStatus,
  };
};
