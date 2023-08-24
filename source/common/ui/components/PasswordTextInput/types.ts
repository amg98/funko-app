import {Props as TextInputProps} from '../TextInput/types';

export type Props = Omit<
  TextInputProps,
  'icon' | 'onPressIcon' | 'secureTextEntry' | 'keyboardType'
>;
