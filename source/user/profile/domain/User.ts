export type Profile = {
  id: string;
  name: string;
  surname: string;
  avatar: string | null;
  posts: Post[];
};

export type Post = {
  id: string;
  imageUrl: string;
};
