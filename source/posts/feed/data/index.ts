import {useQuery, useQueryClient} from 'react-query';
import {QUERIES} from '../../../common/data/reactQuery';
import {Post} from '../../common/domain/Post';
import {useCallback, useMemo, useRef} from 'react';
import {fetchFeedPage} from './remote';
import {NetworkData} from '../../../common/domain/NetworkData';
import {AppError} from '../../../common/domain/AppError';

const PAGE_SIZE = 3;

export const useFeed = () => {
  const fetchInitialPage = useCallback(async () => {
    return await fetchFeedPage(null, PAGE_SIZE);
  }, []);

  const {data, error, refetch} = useQuery({
    queryKey: QUERIES.Feed,
    queryFn: fetchInitialPage,
  });

  const client = useQueryClient();

  const loadingNextPage = useRef(false);

  const fetchNextPage = useCallback(async () => {
    if (loadingNextPage.current || !data) {
      return;
    }
    if (data.length % PAGE_SIZE > 0) {
      return;
    }
    loadingNextPage.current = true;

    try {
      const cursor = data[data.length - 1].id;
      const newPosts = await fetchFeedPage(cursor, PAGE_SIZE);
      client.setQueryData<Post[]>(QUERIES.Feed, [...data, ...newPosts]);
    } finally {
      loadingNextPage.current = false;
    }
  }, [client, data]);

  const posts = useMemo<NetworkData<Post[]>>(() => {
    if (data) {
      return {type: 'data', data};
    }
    if (error) {
      return {type: 'error', message: (error as AppError).message};
    }
    return {type: 'loading'};
  }, [data, error]);

  return {
    posts,
    fetchNextPage,
    refetch,
  };
};
