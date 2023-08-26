import useViewModel from '../presentation';

export type Props = {
  useViewModel: typeof useViewModel;
  router: {
    postId: string;
    goBack: () => void;
    goToUserProfile: (userId: string) => void;
    goToPostComments: (postId: string) => void;
  };
};
