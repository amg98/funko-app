import {useCallback} from 'react';

export const useFormHandler = <T, R extends keyof T>(
  form: T,
  setForm: (form: T) => void,
  name: R,
) => {
  const set = useCallback(
    (value: T[R]) => {
      setForm({...form, [name]: value});
    },
    [form, name, setForm],
  );

  return set;
};
