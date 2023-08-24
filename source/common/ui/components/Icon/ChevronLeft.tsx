import React, {FC} from 'react';
import {IconProps} from './types';
import {Svg, Circle, Path, G} from 'react-native-svg';

const Icon: FC<IconProps> = ({size = 28, ...props}) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 28 28" {...props}>
    <G>
      <Circle cx="14" cy="14" r="14" fill="#F9F9FC" />
    </G>
    <Path fill="#F9F9FC" d="M6 6h16v16H6z" />
    <Path
      fill="#000"
      fill-rule="evenodd"
      d="M16.78 7.97a.75.75 0 0 0-1.06 0l-5.324 5.323a1 1 0 0 0 0 1.414l5.324 5.323a.75.75 0 0 0 1.06-1.06L11.81 14l4.97-4.97a.75.75 0 0 0 0-1.06Z"
      clip-rule="evenodd"
    />
  </Svg>
);

export default Icon;
