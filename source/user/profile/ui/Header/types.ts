import {NetworkData} from '../../../../common/domain/NetworkData';
import {Profile} from '../../domain/User';

export type Props = {
  user: NetworkData<Pick<Profile, 'name' | 'avatar'>>;
  onGoBack: () => void;
};
