import type {FC} from 'react';
import {useMemo} from 'react';
import {useWindowDimensions} from 'react-native';
import {ThemeProvider as ThemeProviderBase} from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../colors';
import {device} from '../device';
import type {Props} from './types';

export const useThemeInternal = () => {
  const {top: safeTop, bottom: safeBottom} = useSafeAreaInsets();
  const {fontScale} = useWindowDimensions();

  const theme = useMemo(
    () => ({
      colors,
      device: {
        ...device,
        safeTop,
        safeBottom,
        fontScale: Math.max(fontScale, 1),
      },
    }),
    [fontScale, safeBottom, safeTop],
  );

  return theme;
};

const ThemeProvider: FC<Props> = ({children}) => {
  const theme = useThemeInternal();

  return <ThemeProviderBase theme={theme}>{children}</ThemeProviderBase>;
};

export default ThemeProvider;
