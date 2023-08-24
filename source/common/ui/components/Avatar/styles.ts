import {BorderlessButton} from 'react-native-gesture-handler';
import {Image as ImageBase} from 'expo-image';
import {ImageProps} from './types';
import styled from 'styled-components/native';

export const Container = BorderlessButton;

export const Image = styled(ImageBase)<ImageProps>`
  width: ${({size}) => size}px;
  aspect-ratio: 1;
  border-radius: ${({size}) => size / 2}px;
`;
