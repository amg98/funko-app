import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  title: string;
  onPress?: () => void;
  onPressAsync?: () => Promise<void>;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

export type ContainerProps = Required<Pick<Props, 'disabled'>>;

export type TitleProps = {
  loading: boolean;
};
