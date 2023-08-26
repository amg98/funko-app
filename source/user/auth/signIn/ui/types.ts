import useViewModel from '../presentation';

export type Props = {
  useViewModel: typeof useViewModel;
  router: {
    goToForgotPassword: () => void;
    goToSignUp: () => void;
  };
};
