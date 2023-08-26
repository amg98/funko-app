import styled, {css} from 'styled-components/native';
import {SizeProps} from './types';
import {Image} from 'expo-image';
import {RectButton} from 'react-native-gesture-handler';

const sizeStyles = css<SizeProps>`
  width: ${({width}) => width}px;
  aspect-ratio: 0.8964;
`;

export const Container = styled.View<SizeProps>`
  ${sizeStyles};
  justify-content: center;
  align-items: center;
  background-color: ${({theme: {colors}}) => colors.neutral95};
`;

export const SelectedImage = styled(Image)<SizeProps>`
  ${sizeStyles};
`;

export const Button = styled(RectButton)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;
