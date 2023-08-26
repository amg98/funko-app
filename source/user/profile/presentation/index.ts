import {NetworkData} from '../../../common/domain/NetworkData';
import {Profile} from '../domain/User';

const useViewModel = (userId: string | null) => {
  return {
    user: {
      type: 'data',
      data: {
        id: '1',
        avatar: 'https://picsum.photos/64',
        name: 'AAA',
        posts: new Array(20).fill(0).map((_, index) => ({
          id: index.toString(),
          imageUrl: 'https://picsum.photos/200',
        })),
      },
    } as NetworkData<Profile>,
    onRefetch: async () => {},
    onTryAgain: async () => {},
    onLoadNextPage: async () => {},
  };
};

export default useViewModel;
