import type {Props} from './types';
import {Post, Separator} from './styles';
import type {FC} from 'react';
import {useCallback, useMemo} from 'react';
import {Screen} from '../../../common/ui/components/Screen';
import PaginatedList from '../../../common/ui/components/PaginatedList';
import {ListRenderItemInfo} from 'react-native';
import {Post as PostModel} from '../domain/User';
import {mapNetworkData} from '../../../common/domain/NetworkData';
import Header from './Header';

const Profile: FC<Props> = ({router, useViewModel}) => {
  const {user, onLoadNextPage, onRefetch, onTryAgain} = useViewModel(
    router.userId,
  );

  const header = useMemo(() => {
    return <Header user={user} onGoBack={router.goBack} />;
  }, [router.goBack, user]);

  const renderItem = useCallback(
    ({index, item}: ListRenderItemInfo<PostModel>) => (
      <Post
        post={item}
        onPress={router.goToPost}
        withRightSeparator={(index + 1) % 3 !== 0}
      />
    ),
    [router.goToPost],
  );

  const posts = useMemo(() => mapNetworkData(user, it => it.posts), [user]);

  return (
    <Screen>
      <PaginatedList
        data={posts}
        onLoadNextPage={onLoadNextPage}
        onRefetch={onRefetch}
        onPressEmptyStateButton={onTryAgain}
        renderItem={renderItem}
        numColumns={3}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={header}
      />
    </Screen>
  );
};

export default Profile;
