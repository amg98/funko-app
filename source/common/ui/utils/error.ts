import {Alert} from 'react-native';
import {t} from 'i18next';
import {AppError} from '../../domain/AppError';

export const showError = (error: unknown) => {
  const appError = error as AppError;
  Alert.alert(t('alert/errorTitle'), appError.message, [
    {text: t('action/ok')},
  ]);
};
