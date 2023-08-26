import type {FC} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Props as PostDetailProps} from '../../posts/detail/ui/types';
import {Props as ProfileProps} from '../../user/profile/ui/types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootParamsList {}
  }
}

export type RootParamsList = {
  SignIn: {isLogin: boolean};
  Feed: undefined;
  PostDetail: Pick<PostDetailProps['router'], 'postId'>;
  Profile: Pick<ProfileProps['router'], 'userId'>;
};

export type ScreenName = keyof RootParamsList;
export type ScreenComponent<S extends ScreenName, Props = {}> = FC<
  NativeStackScreenProps<RootParamsList, S> & Props
>;
