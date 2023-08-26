import {useCallback} from 'react';
import {signInMutation} from './remote';
import {useSignInLocalDataSource} from '../../common/data/local';
import {LoginForm} from '../domain';

export const useSignIn = () => {
  const {saveAuthData, saveUserData} = useSignInLocalDataSource();

  const signIn = useCallback(
    async (formData: LoginForm) => {
      const {expiresIn, idToken, refreshToken, user} = await signInMutation(
        formData,
      );

      saveUserData(user);
      saveAuthData({
        expiresIn,
        idToken,
        refreshToken,
        rememberMe: formData.rememberMe,
      });
    },
    [saveAuthData, saveUserData],
  );

  return signIn;
};
