import {IconName} from '../../../../../common/ui/components/Icon/types';

export type Props = {
  leftIcon: IconName;
  onPressLeft: () => void;
  title: string;
  rightTitle: string;
  rightDisabled?: boolean;
  onPressRight?: () => void;
  onPressRightAsync?: () => Promise<void>;
};

export type ActionButtonProps = Required<Pick<Props, 'rightDisabled'>>;
