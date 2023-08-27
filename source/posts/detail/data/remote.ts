import {t} from 'i18next';
import {AppError} from '../../../common/domain/AppError';
import {COLLECTIONS, PostDocument} from '../../../common/data/firestore';
import firestore from '@react-native-firebase/firestore';
import {Post} from '../../common/domain/Post';

const mapToDomain = (post: PostDocument): Post => {
  return {
    id: post.id,
    owner: {
      id: post.user.id,
      name: post.user.name,
      surname: post.user.surname,
      avatar: post.user.avatar,
    },
    comments: post.comments.slice(0, 2).map(it => ({
      id: it.id,
      user: {
        id: it.user.id,
        name: it.user.name,
        surname: it.user.surname,
      },
      content: it.comment,
    })),
    description: post.description,
    imageUrl: post.imageUrl,
    totalComments: post.numComments,
  };
};

export const fetchPostDetail = async (id: string) => {
  try {
    const {docs} = await firestore()
      .collection(COLLECTIONS.Posts)
      .where('id', '==', id)
      .get();

    const post = docs[0].data() as PostDocument;

    return mapToDomain(post);
  } catch {
    throw new AppError(t('alert/unknown-error'));
  }
};
