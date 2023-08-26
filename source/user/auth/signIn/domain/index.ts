import {object, string, boolean} from 'yup';
import {passwordValidation} from '../../common/domain/password';

export type LoginForm = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const DEFAULT_VALUES: LoginForm = {
  email: '',
  password: '',
  rememberMe: false,
};

export const validationSchema = object().shape({
  email: string().email().required(),
  password: passwordValidation,
  rememberMe: boolean().required(),
});
