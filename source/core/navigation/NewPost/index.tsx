import type {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NewPostParamList} from './types';
import ChooseImageScreen from './ChooseImage';
import {rootStackScreenOptions} from '../constants';
import SetDescriptionScreen from './SetDescription';

const {Navigator, Screen} = createNativeStackNavigator<NewPostParamList>();

const NewPost: FC = () => (
  <Navigator screenOptions={rootStackScreenOptions}>
    <Screen name="ChooseImage" component={ChooseImageScreen} />
    <Screen
      name="SetDescription"
      component={SetDescriptionScreen}
      initialParams={{image: {path: 'https://picsum.photos/200'}}} // TODO
    />
  </Navigator>
);

export default NewPost;
