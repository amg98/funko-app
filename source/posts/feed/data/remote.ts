import {t} from 'i18next';
import {AppError} from '../../../common/domain/AppError';
import firestore from '@react-native-firebase/firestore';
import {COLLECTIONS, PostDocument} from '../../../common/data/firestore';
import {mapPostDocumentToPost} from '../../common/data/mapper';

export const fetchFeedPage = async (
  cursor: string | null,
  pageSize: number,
) => {
  try {
    const docSnap = cursor
      ? (
          await firestore()
            .collection(COLLECTIONS.Posts)
            .where('id', '==', cursor)
            .get()
        ).docs[0]
      : null;

    let query = firestore()
      .collection(COLLECTIONS.Posts)
      .orderBy('createdAt', 'desc')
      .limit(pageSize);

    if (docSnap) {
      query = query.startAfter(docSnap);
    }

    const {docs} = await query.get();

    return docs.map(it => mapPostDocumentToPost(it.data() as PostDocument));
  } catch {
    throw new AppError(t('alert/unknown-error'));
  }
};
