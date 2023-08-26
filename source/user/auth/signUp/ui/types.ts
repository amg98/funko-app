import useViewModel from '../presentation';

export type Props = {
  useViewModel: typeof useViewModel;
  router: {
    goToTermsConditions: () => void;
    goToPrivacyPolicy: () => void;
    goToSignIn: () => void;
  };
};
