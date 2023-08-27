import {useCallback} from 'react';
import {AppError} from '../../../../common/domain/AppError';
import {t} from 'i18next';
import firebase from '@react-native-firebase/app';

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
      const {expires_in, refresh_token, id_token}: RefreshTokenResponse =
        await fetch(
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
    } catch (error) {
      throw new AppError(t('alert/unknown-error'));
    }
  }, []);

  return {
    refreshToken: handleRefreshToken,
    checkTokenValid,
  };
};
