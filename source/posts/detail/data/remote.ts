import {t} from 'i18next';
import {AppError} from '../../../common/domain/AppError';
import {COLLECTIONS, PostDocument} from '../../../common/data/firestore';
import firestore from '@react-native-firebase/firestore';
import {mapPostDocumentToPost} from '../../common/data/mapper';

export const fetchPostDetail = async (id: string) => {
  try {
    const {docs} = await firestore()
      .collection(COLLECTIONS.Posts)
      .where('id', '==', id)
      .get();

    const post = docs[0].data() as PostDocument;

    return mapPostDocumentToPost(post);
  } catch {
    throw new AppError(t('alert/unknown-error'));
  }
};
