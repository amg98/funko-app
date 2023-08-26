import {FC} from 'react';
import type {Props} from './types';
import {Screen} from '../../../../common/ui/components/Screen';
import {
  Content,
  EmailInput,
  Label,
  Link,
  NameInput,
  PasswordInput,
  Row,
  SubmitButton,
  SurnameInput,
  Title,
} from './styles';
import {useTranslation} from 'react-i18next';
import ToggleButton from '../../../../common/ui/components/ToggleButton';
import Hint from '../../../../common/ui/components/Hint';

const SignUp: FC<Props> = ({router, useViewModel}) => {
  const {form, formValid, actions, onSignUp} = useViewModel();
  const {t} = useTranslation();

  return (
    <Screen>
      <Content>
        <Title>{t('sign-up/title')}</Title>
        <NameInput
          title={t('sign-up/name')}
          placeholder={t('sign-up/name-placeholder')}
          value={form.name}
          onChangeText={actions.name}
        />
        <SurnameInput
          title={t('sign-up/surname')}
          placeholder={t('sign-up/surname-placeholder')}
          value={form.surname}
          onChangeText={actions.surname}
        />
        <EmailInput
          title={t('sign-up/email')}
          placeholder={t('sign-up/email-placeholder')}
          keyboardType="email-address"
          autoCapitalize="none"
          value={form.email}
          onChangeText={actions.email}
        />
        <PasswordInput
          title={t('sign-up/password')}
          placeholder={t('sign-up/password-placeholder')}
          value={form.password}
          onChangeText={actions.password}
        />
        <Row>
          <ToggleButton
            active={form.termsConditions}
            onChange={actions.termsConditions}
          />
          <Label>
            {t('sign-up/terms-1')}{' '}
            <Link onPress={router.goToTermsConditions}>
              {t('sign-up/terms-2')}
            </Link>{' '}
            {t('sign-up/terms-3')}{' '}
            <Link onPress={router.goToPrivacyPolicy}>
              {t('sign-up/terms-4')}
            </Link>
          </Label>
        </Row>
        <SubmitButton
          title={t('action/create-account')}
          disabled={!formValid}
          onPressAsync={onSignUp}
        />
        <Hint
          title={t('sign-up/have-account')}
          subtitle={t('action/sign-in')}
          onPress={router.goToSignIn}
        />
      </Content>
    </Screen>
  );
};

export default SignUp;
