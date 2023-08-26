import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {BorderlessButton} from 'react-native-gesture-handler';
import Text from '../Text';
import type {TitleProps} from './types';

export const Container = styled.View`
  overflow: hidden;
  margin: 5px;
`;

export const Main = styled(BorderlessButton).attrs(({theme}) => ({
  borderless: false,
  rippleColor: theme.colors.transparentRippleFix,
}))`
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)<TitleProps>`
  opacity: ${({loading}) => (loading ? 0 : 1)};
  color: ${({color}) => color};
`;

export const Loader = styled(ActivityIndicator)`
  position: absolute;
`;
