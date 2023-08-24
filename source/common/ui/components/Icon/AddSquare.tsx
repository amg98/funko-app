import React, {FC} from 'react';
import {IconProps} from './types';
import {Svg, Path, G, Defs, ClipPath} from 'react-native-svg';

const Icon: FC<IconProps> = ({size = 29, ...props}) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 29 29" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#D7E0FF"
        d="M21.232 1.997H7.768a5.771 5.771 0 0 0-5.771 5.77v13.465a5.771 5.771 0 0 0 5.77 5.77h13.465a5.771 5.771 0 0 0 5.77-5.77V7.768a5.77 5.77 0 0 0-5.77-5.771Z"
      />
      <Path
        stroke="#4147D5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.071"
        d="M14.5 8.729v11.54M8.729 14.5h11.54M21.232 1.997H7.768a5.771 5.771 0 0 0-5.771 5.77v13.465a5.771 5.771 0 0 0 5.77 5.77h13.465a5.771 5.771 0 0 0 5.77-5.77V7.768a5.77 5.77 0 0 0-5.77-5.771Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h29v29H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Icon;
