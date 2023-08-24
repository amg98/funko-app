import React, {FC} from 'react';
import {IconProps} from './types';
import {Svg, Path} from 'react-native-svg';

const Icon: FC<IconProps> = ({size = 29, ...props}) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 29 29" {...props}>
    <Path
      fill="#fff"
      d="M14.5 16.425a4.809 4.809 0 1 0-.001-9.618 4.809 4.809 0 0 0 0 9.618ZM22.715 23.926a12.456 12.456 0 0 1-8.216 3.078 12.456 12.456 0 0 1-8.215-3.078 9.612 9.612 0 0 1 8.215-4.617 9.603 9.603 0 0 1 8.216 4.617Z"
    />
    <Path
      fill="#D7E0FF"
      fillRule="evenodd"
      d="M6.284 23.925a9.612 9.612 0 0 1 8.215-4.617 9.602 9.602 0 0 1 8.216 4.617 12.503 12.503 0 1 0-16.431 0Zm8.215-7.5a4.809 4.809 0 1 0 0-9.618 4.809 4.809 0 0 0 0 9.618Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#4147D5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.071"
      d="M14.5 16.425a4.809 4.809 0 1 0-.001-9.618 4.809 4.809 0 0 0 0 9.618ZM6.286 23.924a9.618 9.618 0 0 1 16.426 0"
    />
    <Path
      stroke="#4147D5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.071"
      d="M14.5 27.003a12.502 12.502 0 1 0 .322-25.001 12.502 12.502 0 0 0-.323 25.002Z"
    />
  </Svg>
);

export default Icon;
