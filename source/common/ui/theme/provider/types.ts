import type {ReactNode} from 'react';
import 'styled-components';
import type {useThemeInternal} from '.';

export type Props = {
  children: ReactNode;
};

export type Theme = ReturnType<typeof useThemeInternal>;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
