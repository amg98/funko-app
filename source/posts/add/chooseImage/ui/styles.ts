import styled from 'styled-components/native';
import CameraButtonBase from './CameraButton';
import ImageThumbnail from '../../../../common/ui/components/ImageThumbnail';
import {PostProps} from './types';

export const CameraButton = styled(CameraButtonBase)`
  margin-top: 11px;
  margin-bottom: 20px;
  align-self: center;
`;

export const Post = styled(ImageThumbnail).attrs(({theme: {device}}) => ({
  size: (device.width - 1.18 * 2) / 3,
}))<PostProps>`
  margin-right: ${({withRightSeparator}) => (withRightSeparator ? 1.18 : 0)}px;
`;

export const Separator = styled.View`
  height: 1.18px;
`;
