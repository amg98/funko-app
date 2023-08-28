import {act, renderHook} from '@testing-library/react-hooks';
import useViewModel from '../presentation';
import {appStateWrapper} from '../../../../common/__tests__/wrapper';
import {QueryClient} from 'react-query';
import {Me} from '../../../../user/auth/common/domain/me';
import {QUERIES} from '../../../../common/data/reactQuery';
import * as RemoteDataSource from '../../addPost/data/remote';
import * as NotificationDataSource from '../../../../notifications/data/sendNotification';
import {Post} from '../../../common/domain/Post';

describe('Set Post Description screen', () => {
  it("shouldn't be able to submit if post description is empty", () => {
    // Arrange
    const image = 'file://image.png';
    const queryClient = new QueryClient();
    const me: Me = {
      id: '1',
      name: 'Name',
      surname: 'Surname',
      avatar: 'https://picsum.photos/200',
    };
    queryClient.setQueryData<Me>(QUERIES.Me, me);

    const {result, unmount} = renderHook(
      () => useViewModel({image, onClose: jest.fn()}),
      {
        wrapper: appStateWrapper({queryClient}),
      },
    );

    // Assert
    expect(result.current.canShare).toBeFalsy();
    unmount();
    queryClient.clear();
  });

  it('should be able to submit, a post is created, a push notification is sent and the feed is invalidated', async () => {
    // Arrange
    const image = 'file://image.png';
    const queryClient = new QueryClient();
    const me: Me = {
      id: '1',
      name: 'Name',
      surname: 'Surname',
      avatar: 'https://picsum.photos/200',
    };
    const description = 'Description';
    const imageUrl = 'https://google.es/image.png';

    const createPost = jest
      .spyOn(RemoteDataSource, 'createPost')
      .mockResolvedValue();
    const sendPushNotification = jest
      .spyOn(NotificationDataSource, 'sendPushNotification')
      .mockResolvedValue();
    const uploadImage = jest
      .spyOn(RemoteDataSource, 'uploadImage')
      .mockResolvedValue(imageUrl);
    const onClose = jest.fn();

    queryClient.setQueryData<Me>(QUERIES.Me, me);
    queryClient.setQueryData<Post[]>(QUERIES.Feed, []);

    const {result, unmount} = renderHook(() => useViewModel({image, onClose}), {
      wrapper: appStateWrapper({queryClient}),
    });

    // Act
    act(() => result.current.setDescription(description));
    await act(() => result.current.onPressShare());

    // Assert
    expect(result.current.canShare).toBeTruthy();
    expect(uploadImage).toHaveBeenCalled();
    expect(createPost).toHaveBeenCalled();
    expect(sendPushNotification).toHaveBeenCalled();
    expect(onClose).toHaveBeenCalled();
    expect(
      queryClient.getQueryState<Post[]>(QUERIES.Feed)?.isInvalidated,
    ).toBeTruthy();
    unmount();
    queryClient.clear();
  });
});
