import storage from '@react-native-firebase/storage';
import {AppError} from '../../../../common/domain/AppError';
import {t} from 'i18next';
import {randomUUID} from 'expo-crypto';
import firestore from '@react-native-firebase/firestore';
import {
  COLLECTIONS,
  PostDocument,
  UserDocument,
} from '../../../../common/data/firestore';

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

export const createPost = async ({
  id,
  ownerId,
  description,
  imageUrl,
}: PostInput) => {
  try {
    const {docs} = await firestore()
      .collection(COLLECTIONS.Users)
      .where('id', '==', ownerId)
      .get();

    const owner = docs[0].data() as UserDocument;

    const post: PostDocument = {
      id,
      imageUrl,
      description,
      user: {
        id: ownerId,
        name: owner.name,
        surname: owner.surname,
        avatar: owner.avatar,
      },
      // User can't add comments from the app, so let's add some mock comments
      comments: new Array(3).fill(0).map((_, index) => ({
        id: `${id}-${index}`,
        comment: `Comment ${index}`,
        user: {
          id: owner.id,
          name: owner.name,
          surname: owner.surname,
        },
      })),
      numComments: 3,
    };
    await firestore().collection(COLLECTIONS.Posts).add(post);
  } catch {
    throw new AppError(t('alert/unknown-error'));
  }
};
