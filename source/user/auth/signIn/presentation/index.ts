import {useCallback, useMemo, useState} from 'react';
import {useFormHandler} from '../../../../common/presentation/useFormHandler';
import {DEFAULT_VALUES, validationSchema} from '../domain';
import {showError} from '../../../../common/ui/utils/error';
import {useSignIn} from '../data';

const useViewModel = () => {
  const signIn = useSignIn();

  const [form, setForm] = useState(DEFAULT_VALUES);

  const formValid = useMemo(() => validationSchema.isValidSync(form), [form]);

  const onLogin = useCallback(async () => {
    if (!formValid) {
      return;
    }
    try {
      await signIn(form);
    } catch (error) {
      showError(error);
    }
  }, [form, formValid, signIn]);

  return {
    form,
    formValid,
    onLogin,
    actions: {
      email: useFormHandler(form, setForm, 'email'),
      password: useFormHandler(form, setForm, 'password'),
      rememberMe: useFormHandler(form, setForm, 'rememberMe'),
    },
  };
};

export default useViewModel;
