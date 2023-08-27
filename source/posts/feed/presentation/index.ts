import {useCallback} from 'react';
import {useNotificationsEffect} from '../../../notifications/data';
import {useFeed} from '../data';
import {showError} from '../../../common/ui/utils/error';

const useViewModel = () => {
  useNotificationsEffect();

  const {posts, fetchNextPage, refetch} = useFeed();

  const onLoadNextPage = useCallback(async () => {
    try {
      await fetchNextPage();
    } catch (error) {
      showError(error);
    }
  }, [fetchNextPage]);

  const onRefetch = useCallback(async () => {
    try {
      await refetch();
    } catch (error) {
      showError(error);
    }
  }, [refetch]);

  return {
    posts,
    onLoadNextPage,
    onRefetch,
  };
};

export default useViewModel;
