import {StyleProp, ViewStyle} from 'react-native';
import {Comment} from '../../../domain/Post';

export type Props = {
  comment: Comment;
  onPressProfile: (userId: string) => void;
  style?: StyleProp<ViewStyle>;
};
