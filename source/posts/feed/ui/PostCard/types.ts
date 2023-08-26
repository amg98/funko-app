import {Post} from '../../domain/Post';

export type Props = {
  post: Post;
  onPressProfile: (userId: string) => void;
  onPressComments: (postId: string) => void;
};
