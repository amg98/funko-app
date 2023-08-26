import styled from 'styled-components/native';
import Text from '../Text';

export const Container = styled(Text).attrs({
  variant: 'body1',
})`
  color: ${({theme: {colors}}) => colors.neutral0};
  align-self: center;
  opacity: 0.7;
`;

export const Link = styled(Text).attrs({
  variant: 'body2',
})`
  color: ${({theme: {colors}}) => colors.neutral0};
`;
