import {object, string, boolean} from 'yup';
import {passwordValidation} from '../../common/domain/password';

export type RegisterForm = {
  name: string;
  surname: string;
  email: string;
  password: string;
  termsConditions: boolean;
};

export const DEFAULT_VALUES: RegisterForm = {
  name: '',
  surname: '',
  email: '',
  password: '',
  termsConditions: false,
};

export const validationSchema = object().shape({
  name: string().required(),
  surname: string().required(),
  email: string().email().required(),
  password: passwordValidation,
  termsConditions: boolean().oneOf([true]),
});
