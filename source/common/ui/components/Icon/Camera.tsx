import React, {FC} from 'react';
import {IconProps} from './types';
import {Svg, Circle, Path, G, Defs, ClipPath} from 'react-native-svg';

const Icon: FC<IconProps> = ({size = 55, ...props}) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 55 55" {...props}>
    <Circle cx="27.5" cy="27.5" r="27.5" fill="#F9F9FC" />
    <G
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.768"
      clipPath="url(#a)">
      <Path d="M38.17 24.216a1.642 1.642 0 0 0-1.642-1.642h-3.283l-2.462-3.283h-6.566l-2.463 3.283h-3.283a1.643 1.643 0 0 0-1.642 1.642v9.849a1.643 1.643 0 0 0 1.642 1.642h18.057a1.64 1.64 0 0 0 1.643-1.642v-9.849Z" />
      <Path d="M27.5 32.014a3.695 3.695 0 1 0 0-7.39 3.695 3.695 0 0 0 0 7.39Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M15.125 15.125h24.75v24.75h-24.75z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Icon;
