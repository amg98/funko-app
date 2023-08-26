import type {StyleProp, ViewStyle} from 'react-native';
import type {Variant} from '../Text/types';

export type Props = {
  title: string;
  textVariant?: Variant;
  textColor?: string;
  onPress?: () => void;
  onPressAsync?: () => Promise<void>;
  style?: StyleProp<ViewStyle>;
};

export type TitleProps = {
  loading: boolean;
  color?: string;
};
