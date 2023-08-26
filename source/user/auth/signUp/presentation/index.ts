import {useCallback, useState} from 'react';
import {useFormHandler} from '../../../../common/presentation/useFormHandler';

const useViewModel = () => {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    termsConditions: false,
  });

  const onSignUp = useCallback(async () => {
    // TODO
  }, []);

  return {
    form,
    onSignUp,
    actions: {
      name: useFormHandler(form, setForm, 'name'),
      surname: useFormHandler(form, setForm, 'surname'),
      email: useFormHandler(form, setForm, 'email'),
      password: useFormHandler(form, setForm, 'password'),
      termsConditions: useFormHandler(form, setForm, 'termsConditions'),
    },
  };
};

export default useViewModel;
