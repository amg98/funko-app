import {NetworkData} from '../../../common/domain/NetworkData';
import {Post} from '../../common/domain/Post';
import {MOCK_POSTS} from '../../common/domain/PostMocks';
import {Params} from './types';

const useViewModel = ({postId}: Params) => {
  return {
    post: {type: 'data', data: MOCK_POSTS[0]} as NetworkData<Post>,
    name: 'AAA',
    onRefetch: async () => {},
    onTryAgain: async () => {},
  };
};

export default useViewModel;
