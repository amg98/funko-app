import {useCallback, useState} from 'react';
import {useFormHandler} from '../../../../common/presentation/useFormHandler';

const useViewModel = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const onLogin = useCallback(async () => {
    // TODO
  }, []);

  return {
    form,
    onLogin,
    actions: {
      email: useFormHandler(form, setForm, 'email'),
      password: useFormHandler(form, setForm, 'password'),
      rememberMe: useFormHandler(form, setForm, 'rememberMe'),
    },
  };
};

export default useViewModel;
