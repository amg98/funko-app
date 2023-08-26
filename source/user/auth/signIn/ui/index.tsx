import {FC} from 'react';
import type {Props} from './types';
import {Screen} from '../../../../common/ui/components/Screen';
import {
  Content,
  EmailInput,
  Label,
  PasswordInput,
  Remember,
  Row,
  SubmitButton,
  Title,
} from './styles';
import {useTranslation} from 'react-i18next';
import ToggleButton from '../../../../common/ui/components/ToggleButton';
import Hint from '../../../../common/ui/components/Hint';

const SignIn: FC<Props> = ({router, useViewModel}) => {
  const {form, actions, onLogin} = useViewModel();
  const {t} = useTranslation();

  return (
    <Screen>
      <Content>
        <Title>{t('sign-in/title')}</Title>
        <EmailInput
          title={t('sign-in/email')}
          placeholder={t('sign-in/email-placeholder')}
          value={form.email}
          onChangeText={actions.email}
        />
        <PasswordInput
          title={t('sign-in/password')}
          placeholder={t('sign-in/password-placeholder')}
          value={form.password}
          onChangeText={actions.password}
        />
        <Row>
          <Remember>
            <ToggleButton
              active={form.rememberMe}
              onChange={actions.rememberMe}
            />
            <Label>{t('sign-in/remember-me')}</Label>
          </Remember>
          <Label onPress={router.goToForgotPassword}>
            {t('sign-in/forgot-password')}
          </Label>
        </Row>
        <SubmitButton title={t('action/sign-in')} onPressAsync={onLogin} />
        <Hint
          title={t('sign-in/no-account')}
          subtitle={t('action/create-account')}
          onPress={router.goToSignUp}
        />
      </Content>
    </Screen>
  );
};

export default SignIn;
