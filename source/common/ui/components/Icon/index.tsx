import type {FC} from 'react';
import {memo} from 'react';
import {icons} from './icons';
import type {Props} from './types';

const Icon: FC<Props> = ({name, ...props}) => {
  const IconComponent = icons[name];

  return <IconComponent {...props} />;
};

export default memo(Icon);
