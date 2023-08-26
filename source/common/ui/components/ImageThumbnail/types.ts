import {StyleProp} from 'react-native';
import {ImageStyle} from 'expo-image';

export type Props = {
  id: string;
  imageUrl: string;
  size?: number;
  onPress: (postId: string) => void;
  style?: StyleProp<ImageStyle>;
};

export type ImageProps = Pick<Props, 'size'>;
