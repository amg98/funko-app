import useViewModel from '../presentation';

export type Props = {
  useViewModel: typeof useViewModel;
  router: {
    image: string;
    goBack: () => void;
    onClose: () => void;
  };
};
