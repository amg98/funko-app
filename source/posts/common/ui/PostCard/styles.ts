import {Image} from 'expo-image';
import {View} from 'react-native';
import styled from 'styled-components/native';
import Text from '../../../../common/ui/components/Text';

export const Container = View;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 21px 16px 12px;
  gap: 8px;
`;

export const PostImage = styled(Image).attrs({
  contentFit: 'cover',
})`
  width: ${({theme: {device}}) => device.width}px;
  height: ${({theme: {device}}) => device.width / 1.42}px;
`;

export const UserName = styled(Text).attrs({
  variant: 'body2',
})`
  color: ${({theme: {colors}}) => colors.neutral0};
`;

export const Content = styled.View`
  padding: 18px 16px 0;
`;

export const Description = styled(Text).attrs({
  variant: 'body1',
})`
  color: ${({theme: {colors}}) => colors.neutral0};
`;

export const Comments = styled.View`
  gap: 3px;
  margin-top: 9px;
`;

export const SeeComments = styled(Text).attrs({
  variant: 'body1',
})`
  color: ${({theme: {colors}}) => colors.neutral50};
`;
