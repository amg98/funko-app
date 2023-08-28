import {t} from 'i18next';
import {AppError} from '../../../common/domain/AppError';
import firestore from '@react-native-firebase/firestore';
import {
  COLLECTIONS,
  PostDocument,
  UserDocument,
} from '../../../common/data/firestore';
import {Post} from '../domain/User';

const mapPostToDomain = (post: PostDocument): Post => ({
  id: post.id,
  imageUrl: post.imageUrl,
});

export const fetchPage = async (
  userId: string,
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
      .where('user.id', '==', userId)
      .orderBy('createdAt', 'desc')
      .limit(pageSize);

    if (docSnap) {
      query = query.startAfter(docSnap);
    }

    const {docs} = await query.get();

    let user: UserDocument | null = null;

    if (!cursor) {
      const {docs: users} = await firestore()
        .collection(COLLECTIONS.Users)
        .where('id', '==', userId)
        .get();

      user = users[0].data() as UserDocument;
    }

    return {
      user: user
        ? {
            id: user.id,
            name: user.name,
            surname: user.surname,
            avatar: user.avatar,
          }
        : null,
      posts: docs.map(it => mapPostToDomain(it.data() as PostDocument)),
    };
  } catch (error) {
    console.log(error);
    throw new AppError(t('alert/unknown-error'));
  }
};
