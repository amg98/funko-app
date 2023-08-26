import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  title?: string;
  description: string;
  buttonTitle?: string;
  onPressButton?: () => Promise<void>;
  style?: StyleProp<ViewStyle>;
};
