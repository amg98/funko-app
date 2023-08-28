import {act, renderHook} from '@testing-library/react-hooks';
import useViewModel from '../presentation';
import {MMKV} from 'react-native-mmkv';
import {QueryClient} from 'react-query';
import {appStateWrapper} from '../../../../common/__tests__/wrapper';
import * as SignInRemoteDataSource from '../data/remote';
import {AuthData, MMKVKeys} from '../../../../common/data/mmkv';
import {apply} from '../../../../common/domain/apply';
import {QUERIES} from '../../../../common/data/reactQuery';
import {Me} from '../../common/domain/me';

describe('Sign up screen', () => {
  it('should prevent submit if password is less than 8 characters', () => {
    // Arrange
    const mmkv = new MMKV();
    const queryClient = new QueryClient();

    const {result} = renderHook(() => useViewModel(), {
      wrapper: appStateWrapper({mmkv, queryClient}),
    });

    // Act
    act(() => result.current.actions.email('a@a.com'));
    act(() => result.current.actions.password('1234567'));

    // Assert
    expect(result.current.formValid).toBeFalsy();
  });

  it('should sign in and login successfully', async () => {
    // Arrange
    const mmkv = new MMKV();
    const queryClient = new QueryClient();

    const response: Awaited<
      ReturnType<typeof SignInRemoteDataSource['signInMutation']>
    > = {
      idToken: '123',
      expiresIn: '3600',
      refreshToken: 'refreshtoken',
      user: {
        id: '1',
        avatar: 'https://picsum.photos/200',
        name: 'Name',
        surname: 'Surname',
      },
    };

    const form = {
      email: 'a@a.com',
      password: '12345678',
    };

    jest
      .spyOn(SignInRemoteDataSource, 'signInMutation')
      .mockResolvedValue(Promise.resolve(response));

    const {result} = renderHook(() => useViewModel(), {
      wrapper: appStateWrapper({mmkv, queryClient}),
    });

    // Act
    act(() => result.current.actions.email(form.email));
    act(() => result.current.actions.password(form.password));
    await act(() => result.current.onLogin());

    // Assert
    const authData = apply(
      JSON.parse,
      mmkv.getString(MMKVKeys.AuthData),
    ) as AuthData | null;
    const me = queryClient.getQueryData<Me>(QUERIES.Me);
    expect(me?.id).toEqual(response.user.id);
    expect(me?.name).toEqual(response.user.name);
    expect(me?.surname).toEqual(response.user.surname);
    expect(authData).toBeTruthy();
    expect(authData?.idToken).toEqual(response.idToken);
    expect(authData?.refreshToken).toEqual(response.refreshToken);
    queryClient.clear();
  });
});
