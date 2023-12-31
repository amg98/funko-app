export type Post = {
  id: string;
  owner: {
    id: string;
    name: string;
    surname: string;
    avatar: string | null;
  };
  imageUrl: string;
  description: string;
  totalComments: number;
  comments: Comment[];
};

export type Comment = {
  id: string;
  user: {
    id: string;
    name: string;
    surname: string;
  };
  content: string;
};
