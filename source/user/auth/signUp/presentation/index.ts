import {useCallback, useMemo, useState} from 'react';
import {useFormHandler} from '../../../../common/presentation/useFormHandler';
import {DEFAULT_VALUES, validationSchema} from '../domain';
import {showError} from '../../../../common/ui/utils/error';
import {useSignUp} from '../data';

const useViewModel = () => {
  const signUp = useSignUp();
  const [form, setForm] = useState(DEFAULT_VALUES);

  const formValid = useMemo(() => validationSchema.isValidSync(form), [form]);

  const onSignUp = useCallback(async () => {
    if (!formValid) {
      return;
    }
    try {
      await signUp(form);
    } catch (error) {
      showError(error);
    }
  }, [form, formValid, signUp]);

  return {
    form,
    formValid,
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
