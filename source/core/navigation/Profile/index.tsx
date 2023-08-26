import {useCallback} from 'react';
import {ScreenComponent} from '../types';
import Profile from '../../../user/profile/ui';
import useViewModel from '../../../user/profile/presentation';

const ProfileScreen: ScreenComponent<'Profile'> = ({navigation, route}) => {
  const goToPost = useCallback((postId: string) => {
    // TODO
  }, []);

  return (
    <Profile
      useViewModel={useViewModel}
      router={{
        userId: route.params.userId,
        goToPost,
        goBack: navigation.goBack,
      }}
    />
  );
};

export default ProfileScreen;
