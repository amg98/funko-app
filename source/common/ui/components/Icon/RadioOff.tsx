import React, {FC} from 'react';
import {colors} from '../../theme/colors';
import {IconProps} from './types';
import {Svg, Circle} from 'react-native-svg';

const Icon: FC<IconProps> = ({
  size = 20,
  color = colors.neutral0,
  ...props
}) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 20 20" {...props}>
    <Circle cx="10" cy="10" r="9.25" stroke={color} strokeWidth={1.5} />
  </Svg>
);

export default Icon;
