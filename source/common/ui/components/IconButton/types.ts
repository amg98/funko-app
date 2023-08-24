import type {StyleProp, ViewStyle} from 'react-native';
import type {IconName} from '../Icon/types';

export type Props = {
  icon: IconName;
  color?: string;
  size?: number;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export type ContainerProps = Required<Pick<Props, 'size'>>;
