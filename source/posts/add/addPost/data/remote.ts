import storage from '@react-native-firebase/storage';
import {AppError} from '../../../../common/domain/AppError';
import {t} from 'i18next';
import {randomUUID} from 'expo-crypto';

type PostInput = {
  id: string;
  ownerId: string;
  imageUrl: string;
  description: string;
};

export const uploadImage = async (path: string) => {
  try {
    const imageID = randomUUID();

    const ref = storage().ref(`posts/${imageID}`);

    const {state} = await ref.putFile(path);
    if (state === 'error') {
      throw new AppError(t('alert/unknown-error'));
    }

    const imageUrl = await ref.getDownloadURL();

    return imageUrl;
  } catch {
    throw new AppError(t('alert/unknown-error'));
  }
};

export const createPost = async ({}: PostInput) => {
  try {
    // TODO
  } catch {
    throw new AppError(t('alert/unknown-error'));
  }
};
