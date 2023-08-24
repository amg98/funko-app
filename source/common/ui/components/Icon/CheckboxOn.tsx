import React, {FC} from 'react';
import {colors} from '../../theme/colors';
import {IconProps} from './types';
import {Svg, Circle, Path} from 'react-native-svg';

const Icon: FC<IconProps> = ({
  size = 20,
  color = colors.neutral0,
  ...props
}) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 20 20" {...props}>
    <Circle cx="10" cy="10" r="10" fill={color} />
    <Path stroke="#fff" stroke-width="1.5" d="M5.5 9.5 9 13l5.5-5.5" />
  </Svg>
);

export default Icon;
