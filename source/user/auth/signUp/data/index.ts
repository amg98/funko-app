import {useCallback} from 'react';
import {RegisterForm} from '../domain';
import {signUpMutation} from './remote';
import {useSignInLocalDataSource} from '../../common/data/local';

export const useSignUp = () => {
  const {saveAuthData, saveUserData} = useSignInLocalDataSource();

  const signUp = useCallback(
    async (formData: RegisterForm) => {
      const {expiresIn, idToken, localId, refreshToken, avatar} =
        await signUpMutation(formData);

      saveUserData({
        id: localId,
        avatar,
        name: formData.name,
        surname: formData.surname,
      });
      saveAuthData({expiresIn, idToken, refreshToken, rememberMe: false});
    },
    [saveAuthData, saveUserData],
  );

  return signUp;
};
