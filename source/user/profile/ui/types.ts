import useViewModel from '../presentation';

export type Props = {
  useViewModel: typeof useViewModel;
  router: {
    userId: string | null;
    goBack: () => void;
    goToPost: (postId: string) => void;
  };
};

export type PostProps = {
  withRightSeparator: boolean;
};
