import React, {FC} from 'react';
import {IconProps} from './types';
import {Svg, Circle, Path, G} from 'react-native-svg';

const Icon: FC<IconProps> = ({size = 28, ...props}) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 28 28" {...props}>
    <G>
      <Circle cx="14" cy="14" r="14" fill="#F9F9FC" />
    </G>
    <Path fill="#F9F9FC" d="M6 6h16v16H6z" />
    <Path fill="#F9F9FC" d="M6 6h16v16H6z" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M8.251 8.251a.857.857 0 0 1 1.212 0L14 12.788l4.537-4.537a.857.857 0 1 1 1.212 1.212L15.212 14l4.537 4.537a.857.857 0 1 1-1.212 1.212L14 15.212 9.463 19.75a.857.857 0 1 1-1.212-1.212L12.788 14 8.25 9.463a.857.857 0 0 1 0-1.212Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Icon;
