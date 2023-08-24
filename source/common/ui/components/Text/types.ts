import {ReactNode} from 'react';
import {TextProps} from 'react-native';

export type Props = {
  variant?: Variant;
  children?: ReactNode;
} & TextProps;

export type Variant =
  | 'header4'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'body6'
  | 'bodyStrongLarge';

export type StyledTextProps = Required<Pick<Props, 'variant'>>;
