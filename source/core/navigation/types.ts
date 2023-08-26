import type {FC} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootParamsList {}
  }
}

export type RootParamsList = {
  SignIn: {isLogin: boolean};
  Feed: undefined;
};

export type ScreenName = keyof RootParamsList;
export type ScreenComponent<S extends ScreenName, Props = {}> = FC<
  NativeStackScreenProps<RootParamsList, S> & Props
>;
