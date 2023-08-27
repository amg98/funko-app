import type {Props} from './types';
import {FC, useCallback} from 'react';

import {Screen} from '../../../common/ui/components/Screen';
import {Post} from '../../common/domain/Post';
import PostCard from '../../common/ui/PostCard';
import ScrollNetworkData from '../../../common/ui/components/ScrollNetworkData';
import Header from './Header';

const PostDetail: FC<Props> = ({router, useViewModel}) => {
  const {post, name, onRefetch} = useViewModel({
    postId: router.postId,
  });

  const renderData = useCallback(
    (postItem: Post) => (
      <PostCard
        post={postItem}
        onPressComments={router.goToPostComments}
        onPressProfile={router.goToUserProfile}
      />
    ),
    [router.goToPostComments, router.goToUserProfile],
  );

  return (
    <Screen>
      <Header name={name} onGoBack={router.goBack} />
      <ScrollNetworkData
        data={post}
        renderData={renderData}
        onRefetch={onRefetch}
        onTryAgain={onRefetch}
      />
    </Screen>
  );
};

export default PostDetail;
