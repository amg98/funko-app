import {useCallback} from 'react';
import {usePostDetail} from '../data';
import {Params} from './types';
import {showError} from '../../../common/ui/utils/error';

const useViewModel = ({postId}: Params) => {
  const {post, refetch} = usePostDetail(postId);

  const onRefetch = useCallback(async () => {
    try {
      await refetch();
    } catch (error) {
      showError(error);
    }
  }, [refetch]);

  return {
    post,
    name: post.type === 'data' ? post.data.owner.name : '',
    onRefetch,
  };
};

export default useViewModel;
