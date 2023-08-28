import {useQuery, useQueryClient} from 'react-query';
import {QUERIES} from '../../../common/data/reactQuery';
import {useCallback, useMemo, useRef} from 'react';
import {Profile} from '../domain/User';
import {fetchPage} from './remote';
import {AppError} from '../../../common/domain/AppError';
import {NetworkData} from '../../../common/domain/NetworkData';
import {useMe} from '../../me/data';

const PAGE_SIZE = 15;

export const useProfile = (userId: string | null) => {
  const {me} = useMe();

  const profileId = userId ?? me.id;

  const initialQuery = useCallback(async (): Promise<Profile> => {
    const {user, posts} = await fetchPage(profileId, null, PAGE_SIZE);
    if (!user) {
      throw new AppError('Should get user on first page');
    }
    return {
      ...user,
      posts,
    };
  }, [profileId]);

  const client = useQueryClient();

  const {data, error, refetch} = useQuery<Profile>(
    QUERIES.Profile,
    initialQuery,
  );

  const profile = useMemo<NetworkData<Profile>>(() => {
    if (error) {
      return {type: 'error', message: (error as AppError).message};
    }
    if (data) {
      return {type: 'data', data};
    }
    return {type: 'loading'};
  }, [data, error]);

  const loadingNextPage = useRef(false);

  const fetchNextPage = useCallback(async () => {
    if (loadingNextPage.current || !data) {
      return;
    }
    if (data.posts.length % PAGE_SIZE > 0) {
      return;
    }
    loadingNextPage.current = true;

    try {
      const cursor = data.posts[data.posts.length - 1].id;
      const {posts: newPosts} = await fetchPage(profileId, cursor, PAGE_SIZE);
      client.setQueryData<Profile>(QUERIES.Profile, {
        ...data,
        posts: [...data.posts, ...newPosts],
      });
    } finally {
      loadingNextPage.current = false;
    }
  }, [client, data, profileId]);

  const onRefetch = useCallback(async () => {
    await refetch();
  }, [refetch]);

  return {
    profile,
    fetchNextPage,
    refetch: onRefetch,
  };
};
