import {act, renderHook} from '@testing-library/react-hooks';
import useViewModel from '../presentation';
import {MMKV} from 'react-native-mmkv';
import {QueryClient} from 'react-query';
import {appStateWrapper} from '../../../../common/__tests__/wrapper';
import * as SignUpRemoteDataSource from '../data/remote';
import {AuthData, MMKVKeys} from '../../../../common/data/mmkv';
import {apply} from '../../../../common/domain/apply';
import {QUERIES} from '../../../../common/data/reactQuery';
import {Me} from '../../common/domain/me';
import {RegisterForm} from '../domain';

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
    act(() => result.current.actions.name('Name'));
    act(() => result.current.actions.surname('Surname'));
    act(() => result.current.actions.termsConditions(true));
    act(() => result.current.actions.password('1234567'));

    // Assert
    expect(result.current.formValid).toBeFalsy();
  });

  it('should prevent submit if terms and conditions are not checked', () => {
    // Arrange
    const mmkv = new MMKV();
    const queryClient = new QueryClient();

    const {result} = renderHook(() => useViewModel(), {
      wrapper: appStateWrapper({mmkv, queryClient}),
    });

    // Act
    act(() => result.current.actions.email('a@a.com'));
    act(() => result.current.actions.name('Name'));
    act(() => result.current.actions.surname('Surname'));
    act(() => result.current.actions.termsConditions(false));
    act(() => result.current.actions.password('12345678'));

    // Assert
    expect(result.current.formValid).toBeFalsy();
  });

  it('should sign up and login successfully', async () => {
    // Arrange
    const mmkv = new MMKV();
    const queryClient = new QueryClient();

    const user: Awaited<
      ReturnType<typeof SignUpRemoteDataSource['signUpMutation']>
    > = {
      idToken: '123',
      avatar: 'https://picsum.photos/200',
      expiresIn: '3600',
      localId: '1',
      refreshToken: 'refreshtoken',
    };

    const form: RegisterForm = {
      email: 'a@a.com',
      name: 'Name',
      surname: 'Surname',
      termsConditions: true,
      password: '12345678',
    };

    jest
      .spyOn(SignUpRemoteDataSource, 'signUpMutation')
      .mockResolvedValue(Promise.resolve(user));

    const {result} = renderHook(() => useViewModel(), {
      wrapper: appStateWrapper({mmkv, queryClient}),
    });

    // Act
    act(() => result.current.actions.email(form.email));
    act(() => result.current.actions.name(form.name));
    act(() => result.current.actions.surname(form.surname));
    act(() => result.current.actions.termsConditions(form.termsConditions));
    act(() => result.current.actions.password(form.password));
    await act(() => result.current.onSignUp());

    // Assert
    const authData = apply(
      JSON.parse,
      mmkv.getString(MMKVKeys.AuthData),
    ) as AuthData | null;
    const me = queryClient.getQueryData<Me>(QUERIES.Me);
    expect(me?.id).toEqual(user.localId);
    expect(me?.name).toEqual(form.name);
    expect(me?.surname).toEqual(form.surname);
    expect(authData).toBeTruthy();
    expect(authData?.idToken).toEqual(user.idToken);
    expect(authData?.refreshToken).toEqual(user.refreshToken);
    queryClient.clear();
  });
});
