import {useCallback} from 'react';

const useIdCallback = <T, R>(cb: (id: T) => R, id: T) => {
  const callback = useCallback(() => {
    cb(id);
  }, [cb, id]);

  return callback;
};

export default useIdCallback;
