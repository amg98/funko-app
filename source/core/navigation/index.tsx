import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC} from 'react';
import {RootParamsList} from './types';
import {generalStackScreenOptions} from './constants';
import SignIn from './SignIn';
import Feed from './Feed';
import PostDetailScreen from './PostDetail';
import ProfileScreen from './Profile';

const {Navigator, Screen} = createNativeStackNavigator<RootParamsList>();

const AppNavigator: FC = () => {
  return (
    <Navigator
      screenOptions={generalStackScreenOptions}
      initialRouteName="Profile">
      <Screen
        name="SignIn"
        component={SignIn}
        initialParams={{isLogin: false}}
      />
      <Screen name="Feed" component={Feed} />
      <Screen name="PostDetail" component={PostDetailScreen} />
      <Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{userId: null}}
      />
    </Navigator>
  );
};

export default AppNavigator;
