import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC, useEffect, useState} from 'react';
import {RootParamsList} from './types';
import {generalStackScreenOptions, transparentModal} from './constants';
import SignIn from './SignIn';
import Feed from './Feed';
import PostDetailScreen from './PostDetail';
import ProfileScreen from './Profile';
import NewPost from './NewPost';
import {useIsLoggedIn} from '../../user/auth/loggedIn/data';
import {useCheckAuthStatus} from '../../user/auth/checkStatus/data';
import {LayoutAnimation} from 'react-native';

const {Navigator, Screen} = createNativeStackNavigator<RootParamsList>();

const AppNavigator: FC = () => {
  const {checkAuthStatus} = useCheckAuthStatus();
  const loggedIn = useIsLoggedIn();

  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      await checkAuthStatus();
      LayoutAnimation.easeInEaseOut();
      setReady(true);
    })();
  }, [checkAuthStatus]);

  if (!ready) {
    return null;
  }

  return (
    <Navigator
      screenOptions={generalStackScreenOptions}
      initialRouteName="Feed">
      {!loggedIn ? (
        <Screen
          name="SignIn"
          component={SignIn}
          initialParams={{isLogin: true}}
        />
      ) : (
        <>
          <Screen name="Feed" component={Feed} />
          <Screen name="PostDetail" component={PostDetailScreen} />
          <Screen name="Profile" component={ProfileScreen} />
          <Screen
            name="NewPost"
            component={NewPost}
            options={transparentModal}
          />
        </>
      )}
    </Navigator>
  );
};

export default AppNavigator;
