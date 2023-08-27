import useViewModel from '../presentation';

export type Props = {
  useViewModel: typeof useViewModel;
  router: {
    onClose: () => void;
    onPressNext: (image: string) => void;
  };
};

export type PostProps = {
  withRightSeparator: boolean;
};
