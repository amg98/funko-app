import type {Props} from './types';
import type {FC} from 'react';
import {memo, useCallback, useState} from 'react';
import TextInput from '../TextInput';

const PasswordTextInput: FC<Props> = ({...props}) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = useCallback(() => {
    setVisible(state => !state);
  }, []);

  return (
    <TextInput
      {...props}
      keyboardType={visible ? 'visible-password' : 'default'}
      secureTextEntry={!visible}
      icon={visible ? 'visible' : 'hidden'}
      onPressIcon={toggleVisible}
    />
  );
};

export default memo(PasswordTextInput);
