import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const rootStackScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const generalStackScreenOptions: NativeStackNavigationOptions = {
  ...rootStackScreenOptions,
  animation: 'slide_from_right',
};

export const transparentModal: NativeStackNavigationOptions = {
  ...rootStackScreenOptions,
  presentation: 'transparentModal',
  animation: 'slide_from_bottom',
};
