import {NetworkData} from '../../../common/domain/NetworkData';
import {Post} from '../../common/domain/Post';
import {MOCK_POSTS} from '../../common/domain/PostMocks';

const useViewModel = () => {
  return {
    posts: {type: 'data', data: MOCK_POSTS} as NetworkData<Post[]>,
    onLoadNextPage: async () => {},
    onRefetch: async () => {},
    onTryAgain: async () => {},
  };
};

export default useViewModel;
