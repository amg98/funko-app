import {renderHook} from '@testing-library/react-hooks';
import useViewModel from '../presentation';
import {appStateWrapper} from '../../../common/__tests__/wrapper';
import {Post} from '../../common/domain/Post';
import * as RemoteDataSource from '../data/remote';
import {NetworkData} from '../../../common/domain/NetworkData';
import {QueryClient} from 'react-query';

describe('Post detail screen', () => {
  it('should load the post detail', async () => {
    // Arrange
    const POST: Post = {
      id: '1',
      description: 'Description',
      imageUrl: 'https://picsum.photos/200',
      owner: {
        id: '1',
        avatar: 'https://picsum.photos/100',
        name: 'Owner name',
        surname: 'Owner surname',
      },
      comments: [],
      totalComments: 0,
    };

    jest.spyOn(RemoteDataSource, 'fetchPostDetail').mockResolvedValue(POST);

    const queryClient = new QueryClient();
    const {result, waitForNextUpdate, unmount} = renderHook(
      () => useViewModel({postId: POST.id}),
      {
        wrapper: appStateWrapper({queryClient}),
      },
    );

    // Act
    await waitForNextUpdate();

    // Assert
    const expectedPost: NetworkData<Post> = {type: 'data', data: POST};
    expect(result.current.name).toEqual(POST.owner.name);
    expect(result.current.post).toStrictEqual(expectedPost);
    unmount();
    queryClient.clear();
  });
});
