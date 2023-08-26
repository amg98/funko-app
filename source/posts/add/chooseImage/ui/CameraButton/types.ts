import {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  width: number;
  imageUrl: string | null;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export type SizeProps = Pick<Props, 'width'>;
