import {act, renderHook} from '@testing-library/react-hooks';
import useViewModel from '../presentation';
import {appStateWrapper} from '../../../common/__tests__/wrapper';
import {QueryClient} from 'react-query';
import {NetworkData} from '../../../common/domain/NetworkData';
import * as RemoteDataSource from '../data/remote';
import {Post, Profile} from '../domain/User';
import {Me} from '../../auth/common/domain/me';
import {QUERIES} from '../../../common/data/reactQuery';

describe('Profile screen', () => {
  const PAGE_SIZE = 15;
  const USER: Omit<Profile, 'posts'> = {
    id: '1',
    avatar: 'https://picsum.photos/100',
    name: 'Name',
    surname: 'Surname',
  };
  const POSTS: Post[] = new Array(30).fill(0).map((_, index) => ({
    id: `${index}`,
    imageUrl: 'https://picsum.photos/200',
  }));
  const ME: Me = {
    id: '1',
    name: 'Name',
    surname: 'Surname',
    avatar: 'https://picsum.photos/200',
  };

  it('should fetch the first page on enter', async () => {
    // Arrange
    const queryClient = new QueryClient();
    queryClient.setQueryData<Me>(QUERIES.Me, ME);
    jest
      .spyOn(RemoteDataSource, 'fetchPage')
      .mockResolvedValue({user: USER, posts: POSTS.slice(0, PAGE_SIZE)});

    const {result, unmount, waitForNextUpdate} = renderHook(
      () => useViewModel(USER.id),
      {
        wrapper: appStateWrapper({queryClient}),
      },
    );

    // Act
    await waitForNextUpdate();

    // Assert
    const expectedProfile: NetworkData<Profile> = {
      type: 'data',
      data: {
        ...USER,
        posts: POSTS.slice(0, PAGE_SIZE),
      },
    };
    expect(result.current.user).toStrictEqual(expectedProfile);
    unmount();
    queryClient.clear();
  });

  it('should fetch a second page (with a page size of 15)', async () => {
    // Arrange
    const queryClient = new QueryClient();
    queryClient.setQueryData<Me>(QUERIES.Me, ME);
    jest
      .spyOn(RemoteDataSource, 'fetchPage')
      .mockResolvedValueOnce({user: USER, posts: POSTS.slice(0, PAGE_SIZE)})
      .mockResolvedValueOnce({
        user: null,
        posts: POSTS.slice(PAGE_SIZE, 2 * PAGE_SIZE),
      });

    const {result, unmount, waitForNextUpdate} = renderHook(
      () => useViewModel(USER.id),
      {
        wrapper: appStateWrapper({queryClient}),
      },
    );

    // Act
    await waitForNextUpdate();
    await act(() => result.current.onLoadNextPage());

    // Assert
    const expectedProfile: NetworkData<Profile> = {
      type: 'data',
      data: {
        ...USER,
        posts: POSTS,
      },
    };
    expect(result.current.user).toStrictEqual(expectedProfile);
    unmount();
    queryClient.clear();
  });

  it('should refetch the first page', async () => {
    // Arrange
    const queryClient = new QueryClient();
    queryClient.setQueryData<Me>(QUERIES.Me, ME);
    jest
      .spyOn(RemoteDataSource, 'fetchPage')
      .mockResolvedValueOnce({user: USER, posts: []})
      .mockResolvedValueOnce({user: USER, posts: POSTS.slice(0, PAGE_SIZE)});

    const {result, unmount, waitForNextUpdate} = renderHook(
      () => useViewModel(USER.id),
      {
        wrapper: appStateWrapper({queryClient}),
      },
    );

    // Act
    await waitForNextUpdate();
    await act(() => result.current.onRefetch());

    // Assert
    const expectedProfile: NetworkData<Profile> = {
      type: 'data',
      data: {
        ...USER,
        posts: POSTS.slice(0, PAGE_SIZE),
      },
    };
    expect(result.current.user).toStrictEqual(expectedProfile);
    unmount();
    queryClient.clear();
  });
});
