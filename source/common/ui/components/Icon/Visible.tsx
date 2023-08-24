import React, {FC} from 'react';
import {colors} from '../../theme/colors';
import {IconProps} from './types';
import {Svg, Path} from 'react-native-svg';

const Icon: FC<IconProps> = ({
  size = 16,
  color = colors.neutral70,
  ...props
}) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 16 16" {...props}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="m14.456 7.957.017.043-.017.043a4.182 4.182 0 0 1-.342.62 9.432 9.432 0 0 1-1.476 1.718C11.335 11.586 9.683 12.5 8 12.5c-1.683 0-3.335-.914-4.638-2.119a9.43 9.43 0 0 1-1.476-1.719A4.177 4.177 0 0 1 1.526 8l.018-.043c.064-.151.175-.362.342-.62A9.428 9.428 0 0 1 3.362 5.62C4.665 4.414 6.317 3.5 8 3.5c1.683 0 3.335.914 4.638 2.119a9.43 9.43 0 0 1 1.476 1.719c.167.257.278.468.342.62ZM16 8c0 1.286-3.582 6-8 6S0 9.286 0 8c0-1.286 3.582-6 8-6s8 4.714 8 6Zm-8 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Icon;
