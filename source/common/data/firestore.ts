import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export const COLLECTIONS = {
  Users: 'users',
  Posts: 'posts',
};

export type UserDocument = {
  id: string;
  name: string;
  surname: string;
  avatar: string | null;
};

export type PostDocument = {
  id: string;
  user: {
    id: string;
    name: string;
    surname: string;
    avatar: string | null;
  };
  imageUrl: string;
  description: string;
  comments: {
    id: string;
    user: {
      id: string;
      name: string;
      surname: string;
    };
    comment: string;
  }[];
  numComments: number;
  createdAt: FirebaseFirestoreTypes.FieldValue;
};
