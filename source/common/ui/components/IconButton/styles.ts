import styled from 'styled-components/native';
import {BorderlessButton} from 'react-native-gesture-handler';
import type {ContainerProps} from './types';

export const Container = styled(BorderlessButton).attrs<ContainerProps>({
  borderless: false,
})<ContainerProps>`
  justify-content: center;
  align-items: center;
  width: ${({size}) => size}px;
  border-radius: ${({size}) => size / 2}px;
  aspect-ratio: 1;
  background-color: ${({theme: {colors}}) => colors.transparentRippleFix};
`;
