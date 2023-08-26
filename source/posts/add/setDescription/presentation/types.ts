import {LocalImage} from '../../common/domain/LocalImage';

export type Params = {
  image: LocalImage;
  onClose: () => void;
};
