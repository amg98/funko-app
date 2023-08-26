import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC} from 'react';
import {RootParamsList} from './types';
import {generalStackScreenOptions} from './constants';
import SignIn from './SignIn';
import Feed from './Feed';

const {Navigator, Screen} = createNativeStackNavigator<RootParamsList>();

const AppNavigator: FC = () => {
  return (
    <Navigator
      screenOptions={generalStackScreenOptions}
      initialRouteName="Feed">
      <Screen
        name="SignIn"
        component={SignIn}
        initialParams={{isLogin: false}}
      />
      <Screen name="Feed" component={Feed} />
    </Navigator>
  );
};

export default AppNavigator;
