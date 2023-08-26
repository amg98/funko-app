import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC} from 'react';
import {RootParamsList} from './types';
import {generalStackScreenOptions, transparentModal} from './constants';
import SignIn from './SignIn';
import Feed from './Feed';
import PostDetailScreen from './PostDetail';
import ProfileScreen from './Profile';
import NewPost from './NewPost';

const {Navigator, Screen} = createNativeStackNavigator<RootParamsList>();

const AppNavigator: FC = () => {
  return (
    <Navigator
      screenOptions={generalStackScreenOptions}
      initialRouteName="Feed">
      <Screen
        name="SignIn"
        component={SignIn}
        initialParams={{isLogin: false}} // TODO
      />
      <Screen name="Feed" component={Feed} />
      <Screen name="PostDetail" component={PostDetailScreen} />
      <Screen name="Profile" component={ProfileScreen} />
      <Screen name="NewPost" component={NewPost} options={transparentModal} />
    </Navigator>
  );
};

export default AppNavigator;
