import {useCallback} from 'react';
import {ScreenComponent} from '../types';
import PostDetail from '../../../posts/detail/ui';
import useViewModel from '../../../posts/detail/presentation';

const PostDetailScreen: ScreenComponent<'PostDetail'> = ({
  navigation,
  route,
}) => {
  const goToPostComments = useCallback((postId: string) => {
    // TODO
  }, []);

  const goToUserProfile = useCallback((userId: string) => {
    // TODO
  }, []);

  return (
    <PostDetail
      useViewModel={useViewModel}
      router={{
        goToPostComments,
        goToUserProfile,
        postId: route.params.postId,
        goBack: navigation.goBack,
      }}
    />
  );
};

export default PostDetailScreen;
