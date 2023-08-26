import {NetworkData} from '../../../common/domain/NetworkData';
import {Post} from '../domain/Post';
import {MOCK_POSTS} from '../domain/PostMocks';

const useViewModel = () => {
  return {
    posts: {type: 'data', data: MOCK_POSTS} as NetworkData<Post[]>,
    onLoadNextPage: async () => {},
    onRefetch: async () => {},
    onTryAgain: async () => {},
  };
};

export default useViewModel;
