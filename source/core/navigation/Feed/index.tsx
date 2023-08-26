import {useCallback} from 'react';
import Feed from '../../../posts/feed/ui';
import useViewModel from '../../../posts/feed/presentation';
import {ScreenComponent} from '../types';

const FeedScreen: ScreenComponent<'Feed'> = ({navigation}) => {
  const goToMyProfile = useCallback(() => {
    navigation.push('Profile', {userId: null});
  }, [navigation]);

  const goToNewPost = useCallback(() => {
    navigation.navigate('NewPost');
  }, [navigation]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const goToPostComments = useCallback((postId: string) => {
    // TODO
  }, []);

  const goToUserProfile = useCallback(
    (userId: string) => {
      navigation.push('Profile', {userId});
    },
    [navigation],
  );

  return (
    <Feed
      useViewModel={useViewModel}
      router={{goToMyProfile, goToNewPost, goToPostComments, goToUserProfile}}
    />
  );
};

export default FeedScreen;
