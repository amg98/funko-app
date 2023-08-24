import type {Props} from './types';
import {StyledText} from './styles';
import type {FC} from 'react';

const Text: FC<Props> = ({variant = 'body1', ...props}) => {
  return <StyledText variant={variant} {...props} />;
};

export default Text;
