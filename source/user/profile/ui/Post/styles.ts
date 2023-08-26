import {Image} from 'expo-image';
import styled from 'styled-components/native';
import {ImageProps} from './types';
import {RectButton} from 'react-native-gesture-handler';

export const PostImage = styled(Image)<ImageProps>`
  width: ${({size}) => size}px;
  aspect-ratio: 1;
`;

export const Button = styled(RectButton)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;
