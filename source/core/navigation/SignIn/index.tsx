import {useCallback} from 'react';
import useSignInViewModel from '../../../user/auth/signIn/presentation';
import useSignUpViewModel from '../../../user/auth/signUp/presentation';
import SignIn from '../../../user/auth/signIn/ui';
import {ScreenComponent} from '../types';
import SignUp from '../../../user/auth/signUp/ui';

const Screen: ScreenComponent<'SignIn'> = ({route: {params}, navigation}) => {
  const goToForgotPassword = useCallback(() => {
    // TODO
  }, []);

  const goToTermsConditions = useCallback(() => {
    // TODO
  }, []);

  const goToPrivacyPolicy = useCallback(() => {
    // TODO
  }, []);

  const goToSignUp = useCallback(() => {
    navigation.setParams({isLogin: false});
  }, [navigation]);

  const goToSignIn = useCallback(() => {
    navigation.setParams({isLogin: true});
  }, [navigation]);

  return params.isLogin ? (
    <SignIn
      useViewModel={useSignInViewModel}
      router={{goToForgotPassword, goToSignUp}}
    />
  ) : (
    <SignUp
      useViewModel={useSignUpViewModel}
      router={{goToPrivacyPolicy, goToSignIn, goToTermsConditions}}
    />
  );
};

export default Screen;
