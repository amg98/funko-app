const generateComment = (index: number, userIndex: number) => ({
  id: `comment${index}`,
  user: {
    id: `user${userIndex}`,
    name: `user${userIndex}`,
    surname: '',
  },
  content: 'Content',
});

const generatePost = (index: number) => {
  const comments = [
    generateComment(index * 2, index * 2),
    generateComment(index * 2 + 1, index * 2 + 1),
  ];
  return {
    id: `post${index}`,
    owner: {
      id: `user${index}`,
      name: `user${index}`,
      surname: '',
      avatar: 'https://picsum.photos/64',
    },
    imageUrl: 'https://picsum.photos/500',
    description: 'Description',
    totalComments: 10,
    comments: comments,
  };
};

export const MOCK_POSTS = Array.from({length: 10}, (_, index) =>
  generatePost(index),
);
