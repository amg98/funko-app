import {StyleProp} from 'react-native';
import {Post} from '../../domain/User';
import {ImageStyle} from 'expo-image';

export type Props = {
  post: Post;
  size?: number;
  onPress: (postId: string) => void;
  style?: StyleProp<ImageStyle>;
};

export type ImageProps = Pick<Props, 'size'>;
