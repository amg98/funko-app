import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  uri: string | null;
  size: number;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export type ImageProps = Pick<Props, 'size'>;
