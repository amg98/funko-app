import {LocalImage} from '../../common/domain/LocalImage';
import useViewModel from '../presentation';

export type Props = {
  useViewModel: typeof useViewModel;
  router: {
    onClose: () => void;
    onPressNext: (image: LocalImage) => void;
  };
};
