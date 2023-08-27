import {useCallback} from 'react';
import {useQueryClient} from 'react-query';
import {QUERIES} from '../../../../common/data/reactQuery';

export const useLocalDataSource = () => {
  const client = useQueryClient();

  const invalidateFeed = useCallback(() => {
    client.invalidateQueries(QUERIES.Feed);
  }, [client]);

  return {
    invalidateFeed,
  };
};
