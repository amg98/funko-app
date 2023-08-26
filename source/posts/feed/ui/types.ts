import useViewModel from '../presentation';

export type Props = {
  useViewModel: typeof useViewModel;
  router: {
    goToNewPost: () => void;
    goToMyProfile: () => void;
    goToUserProfile: (userId: string) => void;
    goToPostComments: (postId: string) => void;
  };
};
