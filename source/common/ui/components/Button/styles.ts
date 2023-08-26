import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import Text from '../Text';
import type {ContainerProps, TitleProps} from './types';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View<ContainerProps>`
  border-radius: 32px;
  background-color: ${({theme: {colors}}) => colors.accent};
  opacity: ${({disabled}) => (disabled ? 0.5 : 1)};
  overflow: hidden;
`;

export const StyledButton = styled(RectButton)`
  padding: 16px;
`;

export const Title = styled(Text).attrs<TitleProps>({
  variant: 'bodyStrongLarge',
})<TitleProps>`
  text-align: center;
  opacity: ${({loading}) => (loading ? 0 : 1)};
  color: ${({theme: {colors}}) => colors.neutral100};
`;

export const Loader = styled(ActivityIndicator)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
