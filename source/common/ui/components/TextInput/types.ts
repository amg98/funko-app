import {TextInputProps} from 'react-native';
import {IconName} from '../Icon/types';

export type Props = {
  title: string;
  icon?: IconName;
  onPressIcon?: () => void;
} & Omit<TextInputProps, 'textAlignVertical'>;
