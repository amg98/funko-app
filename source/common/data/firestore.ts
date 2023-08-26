export const COLLECTIONS = {
  Users: 'users',
  Posts: 'posts',
  Comments: 'comments',
};

export type UserDocument = {
  id: string;
  name: string;
  surname: string;
  avatar: string | null;
};
