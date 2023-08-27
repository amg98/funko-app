import {useCallback, useMemo} from 'react';
import {NetworkData} from '../../../common/domain/NetworkData';
import {Post} from '../../common/domain/Post';
import {fetchPostDetail} from './remote';
import {useQuery} from 'react-query';
import {QUERIES} from '../../../common/data/reactQuery';
import {AppError} from '../../../common/domain/AppError';

export const usePostDetail = (id: string) => {
  const fetcher = useCallback(async () => fetchPostDetail(id), [id]);
  const {data, isLoading, error, refetch} = useQuery({
    queryKey: [QUERIES.PostDetail, id],
    queryFn: fetcher,
  });

  const post = useMemo<NetworkData<Post>>(() => {
    if (isLoading) {
      return {type: 'loading'};
    }
    if (error) {
      return {type: 'error', message: (error as AppError).message};
    }
    return {type: 'data', data: data!};
  }, [data, error, isLoading]);

  return {
    post,
    refetch,
  };
};
