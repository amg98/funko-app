import {useCallback} from 'react';
import {useRemoteDataSource} from './remote';
import {useLocalDataSource} from './local';

export const useCheckAuthStatus = () => {
  const {checkTokenValid, refreshToken: handleRefreshToken} =
    useRemoteDataSource();
  const {removeAuthData, setAuthData, getAuthData} = useLocalDataSource();

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

      if (new Date(authData.expirationDate) < new Date()) {
        const {expiresIn, idToken, refreshToken} = await handleRefreshToken(
          authData.refreshToken,
        );
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
      } else {
        await checkTokenValid(authData.idToken);
      }
    } catch (error) {
      removeAuthData();
    }
  }, [
    checkTokenValid,
    getAuthData,
    handleRefreshToken,
    removeAuthData,
    setAuthData,
  ]);

  return {
    checkAuthStatus,
  };
};
