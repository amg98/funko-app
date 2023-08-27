import {PostDocument} from '../../../common/data/firestore';
import {Post} from '../domain/Post';

export const mapPostDocumentToPost = (post: PostDocument): Post => {
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
