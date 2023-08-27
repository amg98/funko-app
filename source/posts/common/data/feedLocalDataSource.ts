import {useCallback} from 'react';

export const useFeedLocalDataSource = () => {
  const invalidate = useCallback(() => {
    // TODO
  }, []);

  return {
    invalidate,
  };
};
