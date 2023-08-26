import {useCallback} from 'react';
import Feed from '../../../posts/feed/ui';
import useViewModel from '../../../posts/feed/presentation';
import {ScreenComponent} from '../types';

const FeedScreen: ScreenComponent<'Feed'> = ({navigation}) => {
  const goToMyProfile = useCallback(() => {
    // TODO
  }, []);

  const goToNewPost = useCallback(() => {
    navigation.navigate('NewPost');
  }, [navigation]);

  const goToPostComments = useCallback((postId: string) => {
    // TODO
  }, []);

  const goToUserProfile = useCallback((userId: string) => {
    // TODO
  }, []);

  return (
    <Feed
      useViewModel={useViewModel}
      router={{goToMyProfile, goToNewPost, goToPostComments, goToUserProfile}}
    />
  );
};

export default FeedScreen;
