import {act, renderHook} from '@testing-library/react-hooks';
import {Post} from '../../common/domain/Post';
import useViewModel from '../presentation';
import {appStateWrapper} from '../../../common/__tests__/wrapper';
import {QueryClient} from 'react-query';
import {NetworkData} from '../../../common/domain/NetworkData';
import * as RemoteDataSource from '../data/remote';
import * as NotificationsDataSource from '../../../notifications/data';

describe('Feed screen', () => {
  const PAGE_SIZE = 3;
  const POSTS: Post[] = new Array(6).fill(0).map((_, index) => ({
    id: `${index}`,
    description: `Description ${index}`,
    imageUrl: 'https://picsum.photos/200',
    owner: {
      id: '1',
      avatar: 'https://picsum.photos/100',
      name: 'Owner name',
      surname: 'Owner surname',
    },
    comments: [],
    totalComments: 0,
  }));

  it('should fetch the first page on enter', async () => {
    // Arrange
    const queryClient = new QueryClient();
    jest
      .spyOn(NotificationsDataSource, 'useNotificationsEffect')
      .mockReturnValue();
    jest
      .spyOn(RemoteDataSource, 'fetchFeedPage')
      .mockResolvedValue(POSTS.slice(0, PAGE_SIZE));

    const {result, unmount, waitForNextUpdate} = renderHook(
      () => useViewModel(),
      {
        wrapper: appStateWrapper({queryClient}),
      },
    );

    // Act
    await waitForNextUpdate();

    // Assert
    const expectedPosts: NetworkData<Post[]> = {
      type: 'data',
      data: POSTS.slice(0, PAGE_SIZE),
    };
    expect(result.current.posts).toStrictEqual(expectedPosts);
    unmount();
    queryClient.clear();
  });

  it('should fetch a second page (with a page size of 3)', async () => {
    // Arrange
    const queryClient = new QueryClient();
    jest
      .spyOn(NotificationsDataSource, 'useNotificationsEffect')
      .mockReturnValue();
    jest
      .spyOn(RemoteDataSource, 'fetchFeedPage')
      .mockResolvedValueOnce(POSTS.slice(0, PAGE_SIZE))
      .mockResolvedValueOnce(POSTS.slice(PAGE_SIZE, 2 * PAGE_SIZE));

    const {result, unmount, waitForNextUpdate} = renderHook(
      () => useViewModel(),
      {
        wrapper: appStateWrapper({queryClient}),
      },
    );

    // Act
    await waitForNextUpdate();
    await act(() => result.current.onLoadNextPage());

    // Assert
    const expectedPosts: NetworkData<Post[]> = {
      type: 'data',
      data: POSTS,
    };
    expect(result.current.posts).toStrictEqual(expectedPosts);
    unmount();
    queryClient.clear();
  });

  it('should refetch the first page', async () => {
    // Arrange
    const queryClient = new QueryClient();
    jest
      .spyOn(NotificationsDataSource, 'useNotificationsEffect')
      .mockReturnValue();
    jest
      .spyOn(RemoteDataSource, 'fetchFeedPage')
      .mockResolvedValueOnce([])
      .mockResolvedValueOnce(POSTS.slice(0, PAGE_SIZE));

    const {result, unmount, waitForNextUpdate} = renderHook(
      () => useViewModel(),
      {
        wrapper: appStateWrapper({queryClient}),
      },
    );

    // Act
    await waitForNextUpdate();
    await act(() => result.current.onRefetch());

    // Assert
    const expectedPosts: NetworkData<Post[]> = {
      type: 'data',
      data: POSTS.slice(0, PAGE_SIZE),
    };
    expect(result.current.posts).toStrictEqual(expectedPosts);
    unmount();
    queryClient.clear();
  });
});
