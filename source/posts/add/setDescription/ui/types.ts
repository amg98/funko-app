import {LocalImage} from '../../common/domain/LocalImage';
import useViewModel from '../presentation';

export type Props = {
  useViewModel: typeof useViewModel;
  router: {
    image: LocalImage;
    goBack: () => void;
    onClose: () => void;
  };
};
