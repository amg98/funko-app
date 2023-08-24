import type {ReactNode} from 'react';
import type {useThemeInternal} from '.';

export type Props = {
  children: ReactNode;
};

export type Theme = ReturnType<typeof useThemeInternal>;

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
