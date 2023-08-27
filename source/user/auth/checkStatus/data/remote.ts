import {useCallback} from 'react';
import {AppError} from '../../../../common/domain/AppError';
import {t} from 'i18next';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import {COLLECTIONS, UserDocument} from '../../../../common/data/firestore';
import {Me} from '../../common/domain/me';

type RefreshTokenInput = {
  grant_type: 'refresh_token';
  refresh_token: string;
};

type RefreshTokenResponse = {
  expires_in: string;
  token_type: 'Bearer';
  refresh_token: string;
  id_token: string;
  user_id: string;
  project_id: string;
};

type GetUserDataInput = {
  idToken: string;
};

type GetUserDataResponse = {
  users: {
    localId: string;
  }[];
};

const mapRefreshTokenToBackend = (refreshToken: string): RefreshTokenInput => ({
  grant_type: 'refresh_token',
  refresh_token: refreshToken,
});

const mapCheckTokenValidToBackend = (token: string): GetUserDataInput => ({
  idToken: token,
});

export const useRemoteDataSource = () => {
  const handleRefreshToken = useCallback(async (refreshToken: string) => {
    try {
      const apiKey = firebase.app().options.apiKey;
      const {
        expires_in,
        refresh_token,
        id_token,
        user_id,
      }: RefreshTokenResponse = await fetch(
        `https://securetoken.googleapis.com/v1/token?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(mapRefreshTokenToBackend(refreshToken)),
        },
      ).then(it => it.json());

      return {
        expiresIn: expires_in,
        refreshToken: refresh_token,
        idToken: id_token,
        userId: user_id,
      };
    } catch (error) {
      throw new AppError(t('alert/unknown-error'));
    }
  }, []);

  const checkTokenValid = useCallback(async (token: string) => {
    try {
      const apiKey = firebase.app().options.apiKey;
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(mapCheckTokenValidToBackend(token)),
        },
      );
      if (response.status !== 200) {
        throw new AppError(t('alert/unknown-error'));
      }
      const jsonResponse = (await response.json()) as GetUserDataResponse;

      return {
        userId: jsonResponse.users[0].localId,
      };
    } catch (error) {
      throw new AppError(t('alert/unknown-error'));
    }
  }, []);

  return {
    refreshToken: handleRefreshToken,
    checkTokenValid,
  };
};

export const fetchMe = async (userId: string): Promise<Me> => {
  const {docs} = await firestore()
    .collection(COLLECTIONS.Users)
    .where('id', '==', userId)
    .get();

  const user = docs[0].data() as UserDocument;

  return {
    id: user.id,
    name: user.name,
    surname: user.surname,
    avatar: user.avatar,
  };
};
