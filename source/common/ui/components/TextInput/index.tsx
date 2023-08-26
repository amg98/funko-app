import type {Props} from './types';
import {Container, Field, Input, Title} from './styles';
import {forwardRef} from 'react';
import IconButton from '../IconButton';
import {TextInput as RNTextInput} from 'react-native';

const TextInput = forwardRef<RNTextInput, Props>(
  ({title, icon, onPressIcon, style, ...props}, ref) => {
    return (
      <Container style={style}>
        <Title>{title}</Title>
        <Field>
          <Input ref={ref} textAlignVertical="center" {...props} />
          {icon && <IconButton icon={icon} size={16} onPress={onPressIcon} />}
        </Field>
      </Container>
    );
  },
);

export default TextInput;
