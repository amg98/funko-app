import styled from 'styled-components/native';
import Text from '../../../../../common/ui/components/Text';

export const Owner = styled(Text).attrs({
  variant: 'body2',
})`
  color: ${({theme: {colors}}) => colors.neutral0};
`;

export const Content = styled(Text).attrs({
  variant: 'body1',
})`
  color: ${({theme: {colors}}) => colors.neutral0};
`;
