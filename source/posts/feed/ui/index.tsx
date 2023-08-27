import type {Props} from './types';
import {FC, useCallback} from 'react';
import {Screen} from '../../../common/ui/components/Screen';
import Header from './Header';
import PaginatedList from '../../../common/ui/components/PaginatedList';
import {ListRenderItemInfo} from 'react-native';
import {Post} from '../../common/domain/Post';
import PostCard from '../../common/ui/PostCard';
import {Separator} from './styles';

const Feed: FC<Props> = ({useViewModel, router}) => {
  const {posts, onLoadNextPage, onRefetch} = useViewModel();

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<Post>) => (
      <PostCard
        post={item}
        onPressComments={router.goToPostComments}
        onPressProfile={router.goToUserProfile}
      />
    ),
    [router.goToPostComments, router.goToUserProfile],
  );

  return (
    <Screen>
      <Header
        onPressMyProfile={router.goToMyProfile}
        onPressNewPost={router.goToNewPost}
      />
      <PaginatedList
        data={posts}
        ItemSeparatorComponent={Separator}
        onLoadNextPage={onLoadNextPage}
        onRefetch={onRefetch}
        onPressEmptyStateButton={onRefetch}
        renderItem={renderItem}
      />
    </Screen>
  );
};

export default Feed;
